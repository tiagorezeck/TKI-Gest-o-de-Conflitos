import React, { useState } from 'react';
import { TKIAssessmentResult, TKIMode, PercentileLevel } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import {
  Sparkles,
  Award,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Layers,
} from 'lucide-react';

interface TKIStyleCardsProps {
  result: TKIAssessmentResult;
  embedded?: boolean;
}

export const TKIStyleCards: React.FC<TKIStyleCardsProps> = ({ result, embedded = false }) => {
  const { scores, dominantMode, secondaryMode } = result;

  // The 5 modes
  const modeKeys: TKIMode[] = [
    'competing',
    'collaborating',
    'compromising',
    'avoiding',
    'accommodating',
  ];

  const [selectedFilter, setSelectedFilter] = useState<'all' | TKIMode>('all');
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({});

  const toggleLevelExpansion = (modeKey: string) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [modeKey]: !prev[modeKey],
    }));
  };

  const displayedModes =
    selectedFilter === 'all'
      ? modeKeys
      : modeKeys.filter((m) => m === selectedFilter);

  return (
    <div
      className={
        embedded
          ? 'space-y-6 animate-fadeIn'
          : 'w-full rounded-2xl glass-card p-5 sm:p-8 border border-slate-800 shadow-2xl space-y-6'
      }
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              DIAGNÓSTICO APROFUNDADO
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Os 5 Modos de Thomas-Kilmann
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
            O Que São os 5 Comportamentos e Como Você se Posiciona em Cada Um
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
            Nenhum estilo é bom ou ruim por si só. A eficácia está na dosagem: veja o que cada comportamento significa conceitualmente e a análise personalizada para a sua frequência real (<strong>Baixo</strong>, <strong>Médio</strong> ou <strong>Alto</strong>).
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Todos os 5
          </button>
          {modeKeys.map((m) => {
            const p = TKI_PROFILES[m];
            const isSelected = selectedFilter === m;
            return (
              <button
                key={m}
                onClick={() => setSelectedFilter(m)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: p.color.accent }}
                />
                <span className="hidden sm:inline">{p.portugueseName}</span>
                <span className="sm:hidden">{p.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-6">
        {displayedModes.map((mode) => {
          const profile = TKI_PROFILES[mode];
          const userScore = scores[mode];
          const userLevel = userScore.percentileLevel; // 'low' | 'medium' | 'high'
          const activeLevelDetail = profile.levelInterpretations[userLevel];
          const isDominant = dominantMode === mode;
          const isSecondary = secondaryMode === mode;
          const isExpanded = !!expandedLevels[mode];

          const otherLevels: PercentileLevel[] = (['low', 'medium', 'high'] as PercentileLevel[]).filter(
            (lvl) => lvl !== userLevel
          );

          return (
            <div
              key={mode}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isDominant
                  ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl ring-1 ring-indigo-500/30'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header Bar */}
              <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-lg shrink-0 border"
                    style={{
                      backgroundColor: `${profile.color.accent}20`,
                      borderColor: `${profile.color.accent}50`,
                      color: profile.color.accent,
                    }}
                  >
                    {profile.code}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        {profile.portugueseName}{' '}
                        <span className="text-xs font-normal text-slate-400">
                          ({profile.englishName})
                        </span>
                      </h3>

                      {isDominant && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>Estilo Principal</span>
                        </span>
                      )}

                      {isSecondary && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                          Estilo Secundário
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span>{profile.dimensions.winLoseRatio}</span>
                      <span>•</span>
                      <span>Assertividade: <strong>{profile.dimensions.assertiveness}</strong></span>
                      <span>•</span>
                      <span>Cooperatividade: <strong>{profile.dimensions.cooperativeness}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Score & Norm Badge */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-base sm:text-lg font-black text-white font-mono">
                      {userScore.rawScore} <span className="text-xs text-slate-400 font-normal">/ 12 pts</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {userScore.percentage}% das respostas
                    </div>
                  </div>

                  {userLevel === 'high' && (
                    <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>ALTO (&gt;75%)</span>
                    </div>
                  )}

                  {userLevel === 'low' && (
                    <div className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center gap-1.5 text-xs font-bold">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>BAIXO (&lt;25%)</span>
                    </div>
                  )}

                  {userLevel === 'medium' && (
                    <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>MÉDIO (25-75%)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
                {/* 1. O que é o comportamento */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-indigo-400" />
                    <span>1. O que é o comportamento de {profile.portugueseName}?</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {profile.overview}
                  </p>
                </div>

                {/* 2. Como você é em relação a ele (Diagnóstico Personalizado) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>2. Como você se posiciona em relação a ele (Seu Diagnóstico Real)</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Faixa: {activeLevelDetail.levelTitle.split('|')[0].trim()}
                    </span>
                  </div>

                  <div
                    className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
                      userLevel === 'high'
                        ? 'bg-amber-950/20 border-amber-500/30'
                        : userLevel === 'low'
                        ? 'bg-cyan-950/20 border-cyan-500/30'
                        : 'bg-emerald-950/20 border-emerald-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-base mt-0.5">
                        {userLevel === 'high' ? '⚠️' : userLevel === 'low' ? '🛡️' : '⚖️'}
                      </span>
                      <div className="space-y-1.5">
                        <div
                          className="font-bold text-sm sm:text-base"
                          style={{
                            color:
                              userLevel === 'high'
                                ? '#FBBF24'
                                : userLevel === 'low'
                                ? '#38BDF8'
                                : '#34D399',
                          }}
                        >
                          {activeLevelDetail.levelTitle}
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                          {activeLevelDetail.meaning}
                        </p>
                      </div>
                    </div>

                    {/* Sinais Comportamentais do seu nível */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-2">
                      <div className="text-xs font-semibold text-slate-300">
                        Como isso costuma se manifestar no seu dia a dia profissional:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {activeLevelDetail.behaviorSigns.map((sign, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span className="leading-relaxed">{sign}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dica Prática de Calibração */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2.5 bg-slate-950/40 p-3 rounded-lg">
                      <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-200 leading-relaxed">
                        <strong className="text-amber-300">Dica prática para calibrar este nível: </strong>
                        {activeLevelDetail.calibrationTip}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Dropdown Reflexivo: E se eu tivesse outra pontuação? */}
                <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                  <button
                    onClick={() => toggleLevelExpansion(mode)}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-slate-900/60 transition-colors text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                      <span>
                        Curiosidade Metodológica: O que significaria ter {profile.portugueseName} em outros níveis?
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/80 animate-fadeIn text-xs">
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Para fins de comparação e aprendizado, veja como outras pessoas com faixas diferentes se comportam neste mesmo estilo:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {otherLevels.map((lvl) => {
                          const otherDetail = profile.levelInterpretations[lvl];
                          return (
                            <div
                              key={lvl}
                              className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5"
                            >
                              <div className="font-bold text-slate-200 flex items-center justify-between">
                                <span>{otherDetail.levelTitle.split('|')[0].trim()}</span>
                                <span className="text-[10px] text-slate-500 font-mono">
                                  {lvl === 'low'
                                    ? 'Faixa Baixa'
                                    : lvl === 'medium'
                                    ? 'Faixa Média'
                                    : 'Faixa Alta'}
                                </span>
                              </div>
                              <p className="text-slate-400 leading-relaxed text-[11px]">
                                {otherDetail.meaning}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
