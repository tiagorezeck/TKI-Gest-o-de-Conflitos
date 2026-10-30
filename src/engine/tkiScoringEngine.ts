import {
  TKIMode,
  TKICode,
  PercentileLevel,
  ModeScore,
  TKIAssessmentResult,
  UserProfile,
  UserAnswerRecord,
} from '../types/tki';
import { QUESTIONS_30 } from '../data/questions30';

interface NormRange {
  lowMax: number;
  medMax: number;
  lowDesc: string;
  medDesc: string;
  highDesc: string;
}

const TKI_NORMS: Record<TKIMode, NormRange> = {
  competing: {
    lowMax: 3,
    medMax: 8,
    lowDesc: 'Baixo (Pontos 0 - 3): Rara utilização de poder ou firmeza diretiva.',
    medDesc: 'Médio (Pontos 4 - 8): Postura assertiva e equilibrada conforme a situação.',
    highDesc: 'Alto (Pontos 9 - 12): Tendência a impor posições e usar autoridade com frequência.',
  },
  collaborating: {
    lowMax: 5,
    medMax: 9,
    lowDesc: 'Baixo (Pontos 0 - 5): Oportunidades de soluções ganha-ganha subutilizadas.',
    medDesc: 'Médio (Pontos 6 - 9): Capacidade integrativa equilibrada e busca de sinergia.',
    highDesc: 'Alto (Pontos 10 - 12): Busca exaustiva de consenso; alto investimento de tempo e energia.',
  },
  compromising: {
    lowMax: 4,
    medMax: 9,
    lowDesc: 'Baixo (Pontos 0 - 4): Pouca flexibilidade para barganhas ou concessões mútuas.',
    medDesc: 'Médio (Pontos 5 - 9): Negociação pragmática e busca equilibrada de meio-termo.',
    highDesc: 'Alto (Pontos 10 - 12): Concessões apressadas; soluções que podem ser superficiais.',
  },
  avoiding: {
    lowMax: 4,
    medMax: 8,
    lowDesc: 'Baixo (Pontos 0 - 4): Risco de entrar em disputas irrelevantes por não recuar estrategicamente.',
    medDesc: 'Médio (Pontos 5 - 8): Cautela e adiamento saudável de confrontos imediatos.',
    highDesc: 'Alto (Pontos 9 - 12): Esquiva crônica de atritos; acúmulo de problemas não resolvidos.',
  },
  accommodating: {
    lowMax: 2,
    medMax: 7,
    lowDesc: 'Baixo (Pontos 0 - 2): Dificuldade em ceder ou acolher a preferência alheia para harmonizar.',
    medDesc: 'Médio (Pontos 3 - 7): Postura conciliadora e generosidade equilibrada com a equipe.',
    highDesc: 'Alto (Pontos 8 - 12): Tendência a ceder em excesso, acumulando ressentimentos velados.',
  },
};

const MODE_CODES: Record<TKIMode, TKICode> = {
  competing: 'CP',
  collaborating: 'CL',
  compromising: 'CO',
  avoiding: 'AV',
  accommodating: 'AC',
};

const ALL_MODES: TKIMode[] = [
  'competing',
  'collaborating',
  'compromising',
  'avoiding',
  'accommodating',
];

export function calculateTKIAssessment(
  answersMap: Record<number, 'A' | 'B'>,
  userProfile: UserProfile
): TKIAssessmentResult {
  const rawCounts: Record<TKIMode, number> = {
    competing: 0,
    collaborating: 0,
    compromising: 0,
    avoiding: 0,
    accommodating: 0,
  };

  const answerRecords: UserAnswerRecord[] = [];
  let totalScore = 0;

  QUESTIONS_30.forEach((q) => {
    const selected = answersMap[q.id];
    if (selected && q.options[selected]) {
      const opt = q.options[selected];
      rawCounts[opt.mode] += 1;
      totalScore += 1;
      answerRecords.push({
        questionId: q.id,
        selectedOption: selected,
        selectedText: opt.text,
        mode: opt.mode,
        code: opt.code,
      });
    }
  });

  const scores: Record<TKIMode, ModeScore> = {} as Record<TKIMode, ModeScore>;
  const overusedModes: TKIMode[] = [];
  const underusedModes: TKIMode[] = [];

  ALL_MODES.forEach((mode) => {
    const raw = rawCounts[mode];
    const norm = TKI_NORMS[mode];
    let level: PercentileLevel = 'medium';
    let label = 'Médio (Percentil 25% - 75%)';
    let normDesc = norm.medDesc;

    if (raw <= norm.lowMax) {
      level = 'low';
      label = 'Baixo (Percentil 0% - 25%)';
      normDesc = norm.lowDesc;
      underusedModes.push(mode);
    } else if (raw > norm.medMax) {
      level = 'high';
      label = 'Alto (Percentil 75% - 100%)';
      normDesc = norm.highDesc;
      overusedModes.push(mode);
    }

    const percentage = Math.round((raw / 30) * 100);

    scores[mode] = {
      mode,
      code: MODE_CODES[mode],
      rawScore: raw,
      maxScore: 12,
      percentage,
      percentileLevel: level,
      percentileLabel: label,
      normDescription: normDesc,
    };
  });

  // Sort by rawScore descending
  // Tie-breaker priority: collaborating > competing > compromising > accommodating > avoiding
  const tieBreakerOrder: Record<TKIMode, number> = {
    collaborating: 5,
    competing: 4,
    compromising: 3,
    accommodating: 2,
    avoiding: 1,
  };

  const sortedModes = [...ALL_MODES].sort((a, b) => {
    if (scores[b].rawScore !== scores[a].rawScore) {
      return scores[b].rawScore - scores[a].rawScore;
    }
    return tieBreakerOrder[b] - tieBreakerOrder[a];
  });

  const dominantMode = sortedModes[0];
  const secondaryMode = sortedModes[1];

  // 2D Matrix Centroid Coordinates (Assertiveness Y, Cooperativeness X)
  // Max potential weighted sum is 12 + 12 + 6 = 30
  const assertivenessRaw =
    scores.competing.rawScore * 1.0 +
    scores.collaborating.rawScore * 1.0 +
    scores.compromising.rawScore * 0.5;

  const cooperativenessRaw =
    scores.collaborating.rawScore * 1.0 +
    scores.accommodating.rawScore * 1.0 +
    scores.compromising.rawScore * 0.5;

  // Scale to 0 - 100%
  const assertiveness = Math.min(100, Math.max(0, Math.round((assertivenessRaw / 24) * 100)));
  const cooperativeness = Math.min(100, Math.max(0, Math.round((cooperativenessRaw / 24) * 100)));

  return {
    dominantMode,
    secondaryMode,
    scores,
    totalScore,
    userProfile,
    answers: answersMap,
    answerRecords,
    completedAt: new Date().toISOString(),
    overusedModes,
    underusedModes,
    matrixCoords: {
      assertiveness,
      cooperativeness,
    },
  };
}
