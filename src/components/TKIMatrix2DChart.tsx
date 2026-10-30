import React from 'react';
import { TKIMode, TKIAssessmentResult } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { Target, Sparkles, Award } from 'lucide-react';

interface TKIMatrix2DChartProps {
  result: TKIAssessmentResult;
}

export const TKIMatrix2DChart: React.FC<TKIMatrix2DChartProps> = ({ result }) => {
  const { matrixCoords, dominantMode, scores } = result;

  // Clamped coordinate mapping for pin within visual safety bounds [14%, 86%]
  // X: Cooperativeness (0% to 100%) -> Left to Right
  // Y: Assertiveness (0% to 100%) -> Bottom to Top (so 100 - assertiveness)
  const pinX = Math.min(84, Math.max(16, matrixCoords.cooperativeness));
  const pinY = Math.min(84, Math.max(16, 100 - matrixCoords.assertiveness));

  const modesData = [
    {
      id: 'competing' as TKIMode,
      title: 'COMPETIÇÃO',
      sub: 'Ganha - Perde',
      score: scores.competing.rawScore,
      accent: '#EF4444',
      bgGrad: 'from-red-500/15 via-red-950/30 to-transparent',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
    },
    {
      id: 'collaborating' as TKIMode,
      title: 'COLABORAÇÃO',
      sub: 'Ganha - Ganha',
      score: scores.collaborating.rawScore,
      accent: '#10B981',
      bgGrad: 'from-emerald-500/15 via-emerald-950/30 to-transparent',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
    },
    {
      id: 'compromising' as TKIMode,
      title: 'COMPROMISSO',
      sub: 'Meio-termo / Concessão Mútua',
      score: scores.compromising.rawScore,
      accent: '#F59E0B',
      bgGrad: 'from-amber-500/15 via-amber-950/30 to-transparent',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
    },
    {
      id: 'avoiding' as TKIMode,
      title: 'EVITAÇÃO',
      sub: 'Recuo Estratégico',
      score: scores.avoiding.rawScore,
      accent: '#94A3B8',
      bgGrad: 'from-slate-500/15 via-slate-900/40 to-transparent',
      borderColor: 'border-slate-600/40',
      textColor: 'text-slate-300',
    },
    {
      id: 'accommodating' as TKIMode,
      title: 'ACOMODAÇÃO',
      sub: 'Harmonia / Perde - Ganha',
      score: scores.accommodating.rawScore,
      accent: '#6366F1',
      bgGrad: 'from-indigo-500/15 via-indigo-950/30 to-transparent',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
    },
  ];

  const dominantProfile = TKI_PROFILES[dominantMode];

  return (
    <div className="w-full h-full rounded-2xl glass-card p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Matriz Bidimensional TKI</span>
          </h3>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
            Thomas-Kilmann Grid
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Posicionamento nos eixos de Assertividade (Vertical) e Cooperatividade (Horizontal)
        </p>
      </div>

      {/* Coordinate & Dominant Info Pill */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 border border-white/80 flex items-center justify-center text-white font-extrabold text-xs shadow-md shrink-0">
            {result.userProfile.fullName ? result.userProfile.fullName[0].toUpperCase() : '★'}
          </div>
          <div>
            <div className="text-slate-200 font-semibold truncate max-w-[180px] sm:max-w-[240px]">
              {result.userProfile.fullName || 'Participante'}
            </div>
            <div className="text-[11px] text-slate-400">
              Assertividade: <strong className="text-indigo-400 font-mono">{matrixCoords.assertiveness}%</strong> • Cooperatividade: <strong className="text-emerald-400 font-mono">{matrixCoords.cooperativeness}%</strong>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-slate-400 text-[11px]">Predominante:</span>
          <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-indigo-950 border border-indigo-500/40 text-indigo-300">
            {dominantProfile.portugueseName}
          </span>
        </div>
      </div>

      {/* Axis Top Label (Cleanly outside the matrix quadrants) */}
      <div className="text-center">
        <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
          ▲ Alta Assertividade (Satisfazer os Próprios Interesses)
        </span>
      </div>

      {/* Main Matrix Box */}
      <div className="relative w-full h-[320px] sm:h-[340px] rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-inner flex flex-col justify-between">
        {/* Subtle Cartesian Crosshairs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-r border-dashed border-slate-700/60" />
          <div className="absolute top-1/2 left-0 right-0 h-px border-b border-dashed border-slate-700/60" />
        </div>

        {/* 4 Quadrants Container */}
        <div className="relative w-full h-full grid grid-cols-2 grid-rows-2">
          {/* Top-Left Quadrant: Competição */}
          <div className="p-3 sm:p-4 flex flex-col justify-start items-start border-r border-b border-slate-800/60 relative">
            <div
              className={`p-2 sm:p-2.5 rounded-xl border bg-gradient-to-br transition-all max-w-[145px] sm:max-w-[160px] ${
                modesData[0].bgGrad
              } ${modesData[0].borderColor} ${
                dominantMode === 'competing' ? 'ring-2 ring-red-500/50 shadow-lg scale-[1.02]' : 'opacity-90'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className={`font-black text-[11px] sm:text-xs tracking-wide ${modesData[0].textColor}`}>
                  COMPETIÇÃO
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/90 font-mono font-bold text-white">
                  {scores.competing.rawScore}/12
                </span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">Ganha - Perde</div>
              {dominantMode === 'competing' && (
                <span className="inline-block mt-1 text-[8px] font-bold text-red-300 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/40">
                  ★ Estilo Principal
                </span>
              )}
            </div>
          </div>

          {/* Top-Right Quadrant: Colaboração */}
          <div className="p-3 sm:p-4 flex flex-col justify-start items-end border-b border-slate-800/60 relative">
            <div
              className={`p-2 sm:p-2.5 rounded-xl border bg-gradient-to-br transition-all max-w-[145px] sm:max-w-[160px] text-right ${
                modesData[1].bgGrad
              } ${modesData[1].borderColor} ${
                dominantMode === 'collaborating' ? 'ring-2 ring-emerald-500/50 shadow-lg scale-[1.02]' : 'opacity-90'
              }`}
            >
              <div className="flex items-center justify-between gap-1 flex-row-reverse">
                <span className={`font-black text-[11px] sm:text-xs tracking-wide ${modesData[1].textColor}`}>
                  COLABORAÇÃO
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/90 font-mono font-bold text-white">
                  {scores.collaborating.rawScore}/12
                </span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">Ganha - Ganha</div>
              {dominantMode === 'collaborating' && (
                <span className="inline-block mt-1 text-[8px] font-bold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/40">
                  ★ Estilo Principal
                </span>
              )}
            </div>
          </div>

          {/* Bottom-Left Quadrant: Evitação */}
          <div className="p-3 sm:p-4 flex flex-col justify-end items-start border-r border-slate-800/60 relative">
            <div
              className={`p-2 sm:p-2.5 rounded-xl border bg-gradient-to-br transition-all max-w-[145px] sm:max-w-[160px] ${
                modesData[3].bgGrad
              } ${modesData[3].borderColor} ${
                dominantMode === 'avoiding' ? 'ring-2 ring-slate-400/50 shadow-lg scale-[1.02]' : 'opacity-90'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className={`font-black text-[11px] sm:text-xs tracking-wide ${modesData[3].textColor}`}>
                  EVITAÇÃO
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/90 font-mono font-bold text-white">
                  {scores.avoiding.rawScore}/12
                </span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">Recuo Estratégico</div>
              {dominantMode === 'avoiding' && (
                <span className="inline-block mt-1 text-[8px] font-bold text-slate-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-500/40">
                  ★ Estilo Principal
                </span>
              )}
            </div>
          </div>

          {/* Bottom-Right Quadrant: Acomodação */}
          <div className="p-3 sm:p-4 flex flex-col justify-end items-end relative">
            <div
              className={`p-2 sm:p-2.5 rounded-xl border bg-gradient-to-br transition-all max-w-[145px] sm:max-w-[160px] text-right ${
                modesData[4].bgGrad
              } ${modesData[4].borderColor} ${
                dominantMode === 'accommodating' ? 'ring-2 ring-indigo-500/50 shadow-lg scale-[1.02]' : 'opacity-90'
              }`}
            >
              <div className="flex items-center justify-between gap-1 flex-row-reverse">
                <span className={`font-black text-[11px] sm:text-xs tracking-wide ${modesData[4].textColor}`}>
                  ACOMODAÇÃO
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/90 font-mono font-bold text-white">
                  {scores.accommodating.rawScore}/12
                </span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">Harmonia / Perde-Ganha</div>
              {dominantMode === 'accommodating' && (
                <span className="inline-block mt-1 text-[8px] font-bold text-indigo-300 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-500/40">
                  ★ Estilo Principal
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Center Island: Compromisso (Meio-termo) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div
            className={`px-3 py-1.5 rounded-xl border bg-slate-950/95 shadow-xl flex items-center gap-2 pointer-events-auto transition-all ${
              modesData[2].borderColor
            } ${
              dominantMode === 'compromising'
                ? 'ring-2 ring-amber-500/60 shadow-amber-500/20 scale-105'
                : 'shadow-black/60'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <div className="text-center">
              <div className="font-extrabold text-[10px] sm:text-[11px] text-amber-400 flex items-center gap-1.5 justify-center">
                <span>COMPROMISSO</span>
                <span className="font-mono text-white text-[9px] px-1 py-0.2 bg-slate-900 rounded">
                  {scores.compromising.rawScore}/12
                </span>
              </div>
              <div className="text-[8px] text-slate-400">Meio-termo</div>
            </div>
          </div>
        </div>

        {/* The User Centroid Pin */}
        <div
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out group cursor-pointer"
          style={{ left: `${pinX}%`, top: `${pinY}%` }}
        >
          {/* Animated radar rings */}
          <div className="absolute -inset-3 bg-indigo-500/40 rounded-full animate-ping opacity-75 pointer-events-none" />
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-90" />

          {/* Pin Core */}
          <div className="relative w-8 h-8 rounded-full bg-indigo-600 border-2 border-white shadow-2xl flex items-center justify-center text-white font-black text-xs">
            {result.userProfile.fullName ? result.userProfile.fullName[0].toUpperCase() : '★'}
          </div>

          {/* Hover Tooltip - ONLY visible on hover */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 rounded-lg bg-slate-900/95 border border-indigo-500/60 text-[11px] text-slate-200 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
            <div className="font-bold text-indigo-300">
              {result.userProfile.fullName || 'Suas Coordenadas'}
            </div>
            <div className="text-[10px] text-slate-400">
              Assertividade: {matrixCoords.assertiveness}% • Cooperatividade: {matrixCoords.cooperativeness}%
            </div>
          </div>
        </div>
      </div>

      {/* Axis Bottom & Side Labels */}
      <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider px-1">
        <span>◄ Baixa Cooperação</span>
        <span className="text-slate-400 bg-slate-900/90 px-2.5 py-0.5 rounded-full border border-slate-800">
          ▼ Baixa Assertividade
        </span>
        <span>Alta Cooperação ►</span>
      </div>
    </div>
  );
};
