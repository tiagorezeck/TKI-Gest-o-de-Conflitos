import { TKIAssessmentResult } from '../types/tki';

export const WEBHOOK_URL =
  ((import.meta as any).env?.VITE_WEBHOOK_URL as string) || '';

export async function submitTKIAssessmentData(result: TKIAssessmentResult): Promise<boolean> {
  const resultSummary = `Estilo Dominante: ${result.dominantMode} (Secundário: ${result.secondaryMode || 'N/A'}) • Pontuações: Competição=${result.scores.competing.rawScore}, Colaboração=${result.scores.collaborating.rawScore}, Compromisso=${result.scores.compromising.rawScore}, Evitação=${result.scores.avoiding.rawScore}, Acomodação=${result.scores.accommodating.rawScore}`;

  const payload = {
    action: 'sync_survey_completion',
    email: (result.userProfile.email || '').trim().toLowerCase(),
    survey_type: 'TKI_BR',
    result_summary: resultSummary,
    result_url: typeof window !== 'undefined' ? window.location.href : '',
    fullName: result.userProfile.fullName,
    organization: result.userProfile.organizationOrRole,
    mode: result.userProfile.mode,
    dominantMode: result.dominantMode,
    secondaryMode: result.secondaryMode,
    scores: result.scores,
    matrixCoords: result.matrixCoords,
    overusedModes: result.overusedModes,
    underusedModes: result.underusedModes,
    answers: result.answers,
    completedAt: result.completedAt,
  };

  // 1. Save backup to LocalStorage
  try {
    const history = JSON.parse(localStorage.getItem('tki_assessment_history') || '[]');
    history.push(payload);
    localStorage.setItem('tki_assessment_history', JSON.stringify(history));
  } catch (err) {
    console.warn('Não foi possível salvar no localStorage:', err);
  }

  // 2. If anonymous mode without email, save is complete locally
  if (result.userProfile.mode === 'local_anonymous' && !result.userProfile.email) {
    return true;
  }

  // 3. If a webhook URL is configured, send payload
  if (WEBHOOK_URL && !WEBHOOK_URL.includes('placeholder')) {
    try {
      const resp = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });
      const text = await resp.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }
      return Boolean(data && data.success);
    } catch (error) {
      console.warn('Erro ao sincronizar webhook:', error);
      return false;
    }
  }

  return true;
}
