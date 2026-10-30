import React from 'react';
import { TKIMode, TKIAssessmentResult } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { Compass, Award } from 'lucide-react';

interface TKIRadarChartProps {
  result: TKIAssessmentResult;
}

export const TKIRadarChart: React.FC<TKIRadarChartProps> = ({ result }) => {
  const { scores, dominantMode } = result;

  // 5 Modes in standard clockwise order:
  // 1. Competing (Top, angle = -90 deg / -PI/2)
  // 2. Collaborating (Top-Right, angle = -18 deg / -PI/10)
  // 3. Compromising (Bottom-Right, angle = 54 deg / 3*PI/10)
  // 4. Accommodating (Bottom-Left, angle = 126 deg / 7*PI/10)
  // 5. Avoiding (Top-Left, angle = 198 deg / 11*PI/10)
  const modes: TKIMode[] = [
    'competing',
    'collaborating',
    'compromising',
    'accommodating',
    'avoiding',
  ];

  // SVG dimensions with generous padding for outer text labels
  const width = 420;
  const height = 330;
  const centerX = width / 2;
  const centerY = 165;
  const maxRadius = 96;
  const maxScore = 12;

  // Angles in radians
  const angles = [
    -Math.PI / 2,
    -Math.PI / 10,
    (3 * Math.PI) / 10,
    (7 * Math.PI) / 10,
    (11 * Math.PI) / 10,
  ];

  const getCoordinates = (angle: number, radius: number) => {
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Concentric pentagons for score levels (3, 6, 9, 12)
  const gridLevels = [3, 6, 9, 12];

  // User polygon coordinates
  const userPoints = modes
    .map((mode, idx) => {
      const score = Math.max(0, Math.min(12, scores[mode].rawScore));
      const r = (score / maxScore) * maxRadius;
      const coords = getCoordinates(angles[idx], r);
      return `${coords.x},${coords.y}`;
    })
    .join(' ');

  // Outer label definitions with directional anchors to eliminate text collision
  const vertexLabels = [
    {
      mode: 'competing' as TKIMode,
      text: 'Competição',
      score: scores.competing.rawScore,
      anchor: 'middle' as const,
      coords: { x: centerX, y: centerY - maxRadius - 18 },
    },
    {
      mode: 'collaborating' as TKIMode,
      text: 'Colaboração',
      score: scores.collaborating.rawScore,
      anchor: 'start' as const,
      coords: {
        x: centerX + (maxRadius + 18) * Math.cos(angles[1]),
        y: centerY + (maxRadius + 18) * Math.sin(angles[1]),
      },
    },
    {
      mode: 'compromising' as TKIMode,
      text: 'Compromisso',
      score: scores.compromising.rawScore,
      anchor: 'start' as const,
      coords: {
        x: centerX + (maxRadius + 18) * Math.cos(angles[2]),
        y: centerY + (maxRadius + 18) * Math.sin(angles[2]) + 8,
      },
    },
    {
      mode: 'accommodating' as TKIMode,
      text: 'Acomodação',
      score: scores.accommodating.rawScore,
      anchor: 'end' as const,
      coords: {
        x: centerX + (maxRadius + 18) * Math.cos(angles[3]),
        y: centerY + (maxRadius + 18) * Math.sin(angles[3]) + 8,
      },
    },
    {
      mode: 'avoiding' as TKIMode,
      text: 'Evitação',
      score: scores.avoiding.rawScore,
      anchor: 'end' as const,
      coords: {
        x: centerX + (maxRadius + 18) * Math.cos(angles[4]),
        y: centerY + (maxRadius + 18) * Math.sin(angles[4]),
      },
    },
  ];

  return (
    <div className="w-full h-full rounded-2xl glass-card p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Gráfico Radar Pentagonal TKI</span>
          </h3>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
            Equilíbrio de Estilos
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Distribuição proporcional e amplitude dos 5 modos de enfrentamento
        </p>
      </div>

      {/* Dominant Style Quick Status */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-slate-300">Perfil Multidimensional:</span>
          <span className="font-bold text-white">5 Forças Mapeadas</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Maior Pontuação:</span>
          <strong className="text-white font-mono">{scores[dominantMode].rawScore}/12 pts</strong>
        </div>
      </div>

      {/* SVG Pentagonal Radar Container */}
      <div className="relative w-full rounded-2xl bg-slate-950/90 border border-slate-800/80 p-2 overflow-hidden flex items-center justify-center">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[400px] h-auto overflow-visible select-none"
        >
          <defs>
            <linearGradient id="tkiRadarGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.35" />
            </linearGradient>
            <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8B5CF6" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Concentric Pentagonal Grids */}
          {gridLevels.map((lvl) => {
            const r = (lvl / maxScore) * maxRadius;
            const pts = angles
              .map((a) => {
                const c = getCoordinates(a, r);
                return `${c.x},${c.y}`;
              })
              .join(' ');

            return (
              <g key={lvl}>
                <polygon
                  points={pts}
                  fill="none"
                  stroke={lvl === 12 ? '#475569' : '#334155'}
                  strokeWidth={lvl === 12 ? '1.5' : '1'}
                  strokeDasharray={lvl === 12 ? 'none' : '3 3'}
                  opacity={lvl === 12 ? 0.9 : 0.6}
                />
                {/* Level Scale Numbers */}
                <text
                  x={centerX + 4}
                  y={centerY - r + 3}
                  fill="#64748B"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {lvl}
                </text>
              </g>
            );
          })}

          {/* 5 Radial Axis Lines */}
          {angles.map((a, idx) => {
            const c = getCoordinates(a, maxRadius);
            return (
              <line
                key={idx}
                x1={centerX}
                y1={centerY}
                x2={c.x}
                y2={c.y}
                stroke="#334155"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
            );
          })}

          {/* User Polygon Area with Gradient & Glow */}
          <polygon
            points={userPoints}
            fill="url(#tkiRadarGradMain)"
            stroke="#818CF8"
            strokeWidth="2.5"
            filter="url(#radarGlow)"
          />

          {/* Vertex Data Points */}
          {modes.map((mode, idx) => {
            const score = scores[mode].rawScore;
            const r = (score / maxScore) * maxRadius;
            const c = getCoordinates(angles[idx], r);
            const profile = TKI_PROFILES[mode];
            const isDominant = dominantMode === mode;

            return (
              <g key={mode}>
                {isDominant && (
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="8"
                    fill="none"
                    stroke={profile.color.accent}
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                    className="animate-spin origin-center"
                  />
                )}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isDominant ? '5' : '4'}
                  fill={profile.color.accent}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Outer Vertex Labels with directional textAnchor */}
          {vertexLabels.map((lbl) => {
            const profile = TKI_PROFILES[lbl.mode];
            const isDominant = dominantMode === lbl.mode;

            return (
              <g key={lbl.mode}>
                <text
                  x={lbl.coords.x}
                  y={lbl.coords.y}
                  textAnchor={lbl.anchor}
                  dominantBaseline="central"
                  fill={isDominant ? '#FFFFFF' : '#CBD5E1'}
                  fontSize={isDominant ? '11' : '10'}
                  fontWeight={isDominant ? '800' : '600'}
                  letterSpacing="0.01em"
                >
                  {lbl.text}
                  <tspan
                    dx="4"
                    fill={isDominant ? '#A5B4FC' : '#94A3B8'}
                    fontFamily="monospace"
                    fontWeight="bold"
                    fontSize="9.5"
                  >
                    ({lbl.score})
                  </tspan>
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Clean Bottom Scorecard Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
        {modes.map((mode) => {
          const profile = TKI_PROFILES[mode];
          const score = scores[mode];
          const isDominant = dominantMode === mode;

          return (
            <div
              key={mode}
              className={`p-2 rounded-xl border text-center transition-all ${
                isDominant
                  ? 'bg-slate-900 border-indigo-500/50 shadow-md ring-1 ring-indigo-500/30'
                  : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: profile.color.accent }}
                />
                <span className="font-bold text-[10px] text-slate-200 truncate">
                  {profile.portugueseName}
                </span>
              </div>
              <div className="text-xs font-black text-white font-mono">
                {score.rawScore} <span className="text-[9px] text-slate-400 font-normal">/12</span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 font-medium truncate">
                {score.percentileLabel.split(' ')[0]} ({score.percentage}%)
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
