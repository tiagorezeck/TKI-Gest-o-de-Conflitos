import React, { useState } from 'react';
import { TKIAssessmentResult } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { TKIMatrix2DChart } from './TKIMatrix2DChart';
import { TKIRadarChart } from './TKIRadarChart';
import { TKIPercentileBars } from './TKIPercentileBars';
import { TKIDeepDive } from './TKIDeepDive';
import {
  Download,
  RotateCcw,
  Cloud,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  User,
  Share2,
} from 'lucide-react';

interface TKIReportProps {
  result: TKIAssessmentResult;
  onReset: () => void;
  onExportPDF: () => void;
  isExporting: boolean;
  webhookStatus: 'idle' | 'loading' | 'success' | 'error';
  onSyncCloud: (name: string, email: string, organization: string) => void;
}

export const TKIReport: React.FC<TKIReportProps> = ({
  result,
  onReset,
  onExportPDF,
  isExporting,
  webhookStatus,
  onSyncCloud,
}) => {
  const { dominantMode, secondaryMode, scores, userProfile, answerRecords } = result;
  const dominant = TKI_PROFILES[dominantMode];
  const secondary = TKI_PROFILES[secondaryMode];

  const [showAnswerBreakdown, setShowAnswerBreakdown] = useState<boolean>(false);
  const [syncName, setSyncName] = useState<string>(userProfile.fullName || '');
  const [syncEmail, setSyncEmail] = useState<string>(userProfile.email || '');
  const [syncOrg, setSyncOrg] = useState<string>(userProfile.organizationOrRole || '');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleShare = () => {
    const summary = `Meu resultado no Teste de Conflitos TKI: Estilo Principal: ${dominant.portugueseName} (${scores[dominantMode].rawScore}/12 pontos) • Estilo Secundário: ${secondary.portugueseName} (${scores[secondaryMode].rawScore}/12 pontos).`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-12">
      {/* Executive Hero Banner */}
      <div className="w-full rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/30 shadow-2xl space-y-6">
        {/* Background Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 border-b border-slate-800/80 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
              RELATÓRIO OFICIAL TKI
            </span>
            <span className="text-xs text-slate-400">
              30 de 30 questões concluídas • {new Date(result.completedAt).toLocaleDateString('pt-BR')}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>{isCopied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>

            <button
              onClick={onExportPDF}
              disabled={isExporting}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Gerando PDF A4...' : 'Exportar Relatório PDF'}</span>
            </button>

            <button
              onClick={onReset}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer</span>
            </button>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 space-y-4">
          <div className="text-xs font-semibold text-slate-400">
            Perfil do Participante: <strong className="text-slate-100">{userProfile.fullName || 'Participante'}</strong>
            {userProfile.organizationOrRole && ` • ${userProfile.organizationOrRole}`}
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-extrabold">
              MODO DE GESTÃO DE CONFLITOS PREDOMINANTE
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {dominant.portugueseName} ({dominant.englishName})
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {dominant.tagline}. Pontuação bruta: <strong className="text-white font-mono">{scores[dominantMode].rawScore}/12</strong> ({scores[dominantMode].percentileLabel.split(' ')[0]}).
            </p>
          </div>

          {/* 2 Badges: Dominant & Secondary */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-3.5 py-1.5 rounded-xl bg-indigo-950/80 border border-indigo-500/50 flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-slate-300">Principal:</span>
              <span className="font-bold text-white">
                {dominant.portugueseName} ({scores[dominantMode].rawScore} pontos)
              </span>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-slate-300">Secundário:</span>
              <span className="font-bold text-white">
                {secondary.portugueseName} ({scores[secondaryMode].rawScore} pontos)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Sync Status / Prompt if Anonymous */}
      {userProfile.mode === 'local_anonymous' && webhookStatus === 'idle' && (
        <div className="p-4 sm:p-5 rounded-2xl glass-card border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm">Modo Local & Privativo</div>
              <p className="text-slate-400">
                Seus dados estão gravados com segurança apenas no navegador. Deseja sincronizar ou registrar seus dados na sua organização?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Seu nome"
              value={syncName}
              onChange={(e) => setSyncName(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 outline-none w-full sm:w-32"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={syncEmail}
              onChange={(e) => setSyncEmail(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 outline-none w-full sm:w-40"
            />
            <button
              onClick={() => onSyncCloud(syncName, syncEmail, syncOrg)}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all cursor-pointer whitespace-nowrap"
            >
              Registrar Perfil
            </button>
          </div>
        </div>
      )}

      {webhookStatus === 'loading' && (
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
          <span>Sincronizando dados com o sistema corporativo...</span>
        </div>
      )}

      {webhookStatus === 'success' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Dados do participante registrados com sucesso!</span>
        </div>
      )}

      {/* Main Charts: 2D Matrix & Pentagon Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TKIMatrix2DChart result={result} />
        <TKIRadarChart result={result} />
      </div>

      {/* Percentile Bars */}
      <TKIPercentileBars result={result} />

      {/* In-depth Analysis (Deep Dive) */}
      <TKIDeepDive result={result} />

      {/* Complete Answers History Accordion */}
      <div className="rounded-2xl glass-card border border-slate-800 overflow-hidden">
        <button
          onClick={() => setShowAnswerBreakdown((prev) => !prev)}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-900/50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="font-bold text-sm text-white block">
                Detalhamento das 30 Respostas Escolhidas
              </span>
              <span className="text-xs text-slate-400">
                Veja a opção selecionada em cada questão e o estilo associado
              </span>
            </div>
          </div>
          {showAnswerBreakdown ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>

        {showAnswerBreakdown && (
          <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-950/50 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {answerRecords.map((rec) => {
                const profile = TKI_PROFILES[rec.mode];
                return (
                  <div
                    key={rec.questionId}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-300">
                        Questão {rec.questionId} (Opção {rec.selectedOption})
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                        style={{
                          backgroundColor: `${profile.color.accent}15`,
                          borderColor: `${profile.color.accent}40`,
                          color: profile.color.accent,
                        }}
                      >
                        {profile.portugueseName} ({rec.code})
                      </span>
                    </div>
                    <p className="text-slate-300 italic leading-relaxed text-[11px]">
                      &quot;{rec.selectedText}&quot;
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
