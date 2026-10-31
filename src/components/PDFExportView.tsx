import React from 'react';
import { TKIAssessmentResult, TKIMode } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { Target, CheckCircle2, AlertTriangle, Sparkles, Brain } from 'lucide-react';

interface PDFExportViewProps {
  result: TKIAssessmentResult;
}

export const PDFExportView: React.FC<PDFExportViewProps> = ({ result }) => {
  const { dominantMode, secondaryMode, scores, userProfile, matrixCoords, completedAt, answerRecords } =
    result;
  const dominant = TKI_PROFILES[dominantMode];
  const secondary = TKI_PROFILES[secondaryMode];

  // Radar SVG constants
  const radarModes: TKIMode[] = ['competing', 'collaborating', 'compromising', 'accommodating', 'avoiding'];
  const radarSize = 220;
  const center = radarSize / 2;
  const maxRadius = 75;
  const maxScore = 12;
  const angles = [
    -Math.PI / 2,
    -Math.PI / 10,
    (3 * Math.PI) / 10,
    (7 * Math.PI) / 10,
    (11 * Math.PI) / 10,
  ];

  const getCoordinates = (angle: number, radius: number) => ({
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  });

  const gridLevels = [3, 6, 9, 12];
  const polygonPoints = radarModes
    .map((m, idx) => {
      const score = scores[m].rawScore;
      const r = (score / maxScore) * maxRadius;
      const c = getCoordinates(angles[idx], r);
      return `${c.x},${c.y}`;
    })
    .join(' ');

  // 2D Matrix Pin position
  const pinX = Math.min(90, Math.max(10, matrixCoords.cooperativeness));
  const pinY = Math.min(90, Math.max(10, 100 - matrixCoords.assertiveness));

  return (
    <div id="pdf-export-container" className="flex flex-col gap-10 bg-slate-950 text-slate-100 font-sans">
      {/* ========================================================================= */}
      {/* PÁGINA 1: VISÃO EXECUTIVA, MATRIZ BIDIMENSIONAL E RADAR PENTAGONAL        */}
      {/* ========================================================================= */}
      <div
        id="pdf-page-1"
        className="w-[794px] h-[1123px] p-8 bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative box-border border border-slate-800"
      >
        {/* Top Header */}
        <div className="border-b-2 border-indigo-500/60 pb-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RELATÓRIO OFICIAL DE AVALIAÇÃO TKI (THOMAS-KILMANN 1974)</span>
            </div>
            <h1 className="text-xl font-black text-white mt-0.5 tracking-tight">
              PERFIL DE GESTÃO DE CONFLITOS INTERPESSOAIS
            </h1>
            <p className="text-[10px] text-slate-400">
              Modelo dos 5 Modos de Conflito • Integrado a Inteligência Emocional (IE) & Comunicação Não-Violenta (CNV)
            </p>
          </div>

          <div className="text-right text-[11px] text-slate-300 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
            <div>
              Participante: <strong className="text-white">{userProfile.fullName || 'Participante'}</strong>
            </div>
            {userProfile.organizationOrRole && (
              <div>
                Cargo / Área: <span className="text-slate-300">{userProfile.organizationOrRole}</span>
              </div>
            )}
            <div className="text-[10px] text-slate-400 mt-0.5">
              Emissão: {new Date(completedAt).toLocaleDateString('pt-BR')}
            </div>
          </div>
        </div>

        {/* Dominant & Secondary Hero Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-indigo-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              ESTILO PREDOMINANTE
            </span>
            <span className="text-xs font-mono font-bold text-indigo-300">
              Pontuação: {scores[dominantMode].rawScore}/12 ({scores[dominantMode].percentileLabel.split(' ')[0]}) • {dominant.dimensions.winLoseRatio}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-black text-white">
              {dominant.portugueseName} ({dominant.englishName})
            </h2>
            <div className="text-xs text-slate-300">
              Estilo Secundário:{' '}
              <strong className="text-purple-300">
                {secondary.portugueseName} ({scores[secondaryMode].rawScore}/12 pts)
              </strong>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{dominant.overview}</p>
        </div>

        {/* Visual Charts: 2D Matrix & Radar */}
        <div className="grid grid-cols-2 gap-4">
          {/* Matriz 2D Grid */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                <span>Matriz 2D Thomas-Kilmann</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                X:{matrixCoords.cooperativeness}% | Y:{matrixCoords.assertiveness}%
              </span>
            </div>

            <div className="relative w-full h-[185px] bg-slate-950 rounded-lg border border-slate-800 overflow-hidden p-2 text-[9px]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 divide-x divide-y divide-slate-800/80 pointer-events-none" />
              <div className="absolute top-1 left-2 font-bold text-red-400">
                Competição ({scores.competing.rawScore})
              </div>
              <div className="absolute top-1 right-2 text-right font-bold text-emerald-400">
                Colaboração ({scores.collaborating.rawScore})
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-amber-400 bg-slate-900/80 px-1 rounded">
                Compromisso ({scores.compromising.rawScore})
              </div>
              <div className="absolute bottom-1 left-2 font-bold text-slate-400">
                Evitação ({scores.avoiding.rawScore})
              </div>
              <div className="absolute bottom-1 right-2 text-right font-bold text-indigo-400">
                Acomodação ({scores.accommodating.rawScore})
              </div>

              {/* Pin */}
              <div
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pinX}%`, top: `${pinY}%` }}
              >
                <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-lg">
                  ★
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 text-center">
              Assertividade: <strong>{matrixCoords.assertiveness}%</strong> • Cooperatividade:{' '}
              <strong>{matrixCoords.cooperativeness}%</strong>
            </div>
          </div>

          {/* Radar Pentagonal SVG */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between items-center">
            <span className="text-xs font-bold text-white self-start">
              Gráfico Radar Pentagonal (Equilíbrio de Estilos)
            </span>
            <div className="relative shrink-0">
              <svg width={radarSize} height={radarSize} className="overflow-visible">
                {gridLevels.map((lvl) => {
                  const r = (lvl / maxScore) * maxRadius;
                  const pts = angles
                    .map((a) => {
                      const c = getCoordinates(a, r);
                      return `${c.x},${c.y}`;
                    })
                    .join(' ');
                  return (
                    <polygon
                      key={lvl}
                      points={pts}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeDasharray={lvl === 12 ? 'none' : '2 2'}
                    />
                  );
                })}
                {angles.map((a, idx) => {
                  const c = getCoordinates(a, maxRadius);
                  return (
                    <line key={idx} x1={center} y1={center} x2={c.x} y2={c.y} stroke="#334155" strokeWidth="1" />
                  );
                })}
                <polygon points={polygonPoints} fill="#6366F1" fillOpacity="0.4" stroke="#818CF8" strokeWidth="2" />
                {radarModes.map((mode, idx) => {
                  const score = scores[mode].rawScore;
                  const r = (score / maxScore) * maxRadius;
                  const c = getCoordinates(angles[idx], r);
                  return <circle key={mode} cx={c.x} cy={c.y} r="3.5" fill="#FFFFFF" />;
                })}
                {radarModes.map((mode, idx) => {
                  const c = getCoordinates(angles[idx], maxRadius + 16);
                  const p = TKI_PROFILES[mode];
                  return (
                    <text
                      key={mode}
                      x={c.x}
                      y={c.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#94A3B8"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {p.code} ({scores[mode].rawScore})
                    </text>
                  );
                })}
              </svg>
            </div>
            <div className="text-[10px] text-slate-400 text-center">
              CP: Competição • CL: Colaboração • CO: Compromisso • AV: Evitação • AC: Acomodação
            </div>
          </div>
        </div>

        {/* Resumo da Tabela de Pontuações */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-slate-200">Distribuição Estatística dos 5 Modos:</div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {radarModes.map((m) => {
              const sc = scores[m];
              const p = TKI_PROFILES[m];
              return (
                <div key={m} className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-bold text-[11px]" style={{ color: p.color.accent }}>
                    {p.portugueseName}
                  </div>
                  <div className="text-base font-black text-white font-mono mt-0.5">
                    {sc.rawScore} <span className="text-[10px] text-slate-500">/12</span>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{sc.percentileLabel.split(' ')[0]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Page 1 */}
        <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
          <span>Instrumento Thomas-Kilmann (TKI) • Edição Brasil</span>
          <span>Página 1 de 3</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PÁGINA 2: NORMAS DE PERCENTIL E DEEP DIVE DOS ESTILOS                     */}
      {/* ========================================================================= */}
      <div
        id="pdf-page-2"
        className="w-[794px] h-[1123px] p-8 bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative box-border border border-slate-800"
      >
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div className="text-xs font-bold text-indigo-400">FAIXAS NORMATIVAS & DIAGNÓSTICO PROFUNDO</div>
          <span className="text-[10px] text-slate-400">{userProfile.fullName || 'Participante'}</span>
        </div>

        {/* Percentile Bars */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-white flex items-center justify-between">
            <span>Diagnóstico de Percentil Populacional:</span>
            <span className="text-[10px] text-slate-400">Baixo (0-25%) | Médio (25-75%) | Alto (75-100%)</span>
          </div>

          <div className="space-y-2">
            {radarModes.map((mode) => {
              const sc = scores[mode];
              const p = TKI_PROFILES[mode];
              const markerPercent = (sc.rawScore / 12) * 100;
              return (
                <div key={mode} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-white">
                      {p.portugueseName} ({p.code})
                    </span>
                    <span className="font-mono text-indigo-300 font-bold">
                      {sc.rawScore}/12 pts ({sc.percentileLabel.split(' ')[0]})
                    </span>
                  </div>
                  <div className="relative w-full h-2 rounded-full bg-slate-950 flex overflow-hidden border border-slate-800">
                    <div className="h-full bg-slate-800" style={{ width: '25%' }} />
                    <div className="h-full bg-emerald-950/60" style={{ width: '50%' }} />
                    <div className="h-full bg-amber-950/60" style={{ width: '25%' }} />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-md -translate-x-1/2"
                      style={{ left: `${markerPercent}%` }}
                    />
                  </div>
                  <div className="text-[9.5px] text-slate-300 leading-snug">
                    <strong className="text-slate-100">{p.levelInterpretations[sc.percentileLevel].levelTitle.split('|')[0].trim()}: </strong>
                    {p.levelInterpretations[sc.percentileLevel].meaning}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dominant Style Deep Dive */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pontos Fortes do Estilo Principal ({dominant.portugueseName}):</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            {dominant.strengths.slice(0, 4).map((st, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{st}</span>
              </div>
            ))}
          </div>
        </div>

        {/* When to use and risks */}
        <div className="grid grid-cols-2 gap-3 text-[11px]">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="font-bold text-indigo-400 text-xs">Quando Usar com Máxima Eficácia:</div>
            <ul className="space-y-1 text-slate-300 text-[10px]">
              {dominant.whenToUse.slice(0, 3).map((w, i) => (
                <li key={i}>• {w}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
            <div className="font-bold text-amber-400 text-xs flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              <span>Riscos do Excesso (&gt;75%):</span>
            </div>
            <ul className="space-y-1 text-slate-300 text-[10px]">
              {dominant.overuseRisks.slice(0, 3).map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Style summary */}
        <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs space-y-1">
          <div className="font-bold text-purple-300">
            Estilo Secundário de Apoio: {secondary.portugueseName} ({secondary.englishName})
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">{secondary.overview}</p>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
          <span>Instrumento Thomas-Kilmann (TKI) • Edição Brasil</span>
          <span>Página 2 de 3</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PÁGINA 3: INTELIGÊNCIA EMOCIONAL, CNV E TODAS AS 30 RESPOSTAS             */}
      {/* ========================================================================= */}
      <div
        id="pdf-page-3"
        className="w-[794px] h-[1123px] p-8 bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative box-border border border-slate-800"
      >
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div className="text-xs font-bold text-indigo-400">
            INTELIGÊNCIA EMOCIONAL (IE), CNV E REGISTRO DE RESPOSTAS
          </div>
          <span className="text-[10px] text-slate-400">{userProfile.fullName || 'Participante'}</span>
        </div>

        {/* 4 Passos da CNV */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/40 space-y-2">
          <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-indigo-400" />
            <span>Guia Prático de 4 Passos da Comunicação Não-Violenta (CNV) no Conflito</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-[10px]">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="font-bold text-indigo-400">1. Observação</div>
              <p className="text-slate-400 mt-1 leading-snug">
                Apresente dados factuais e objetivos, sem juízos morais ou palavras extremas.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="font-bold text-purple-400">2. Sentimento</div>
              <p className="text-slate-400 mt-1 leading-snug">
                Nomeie suas emoções com autenticidade, assumindo a responsabilidade por elas.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="font-bold text-emerald-400">3. Necessidade</div>
              <p className="text-slate-400 mt-1 leading-snug">
                Declare a necessidade universal: clareza, respeito, segurança ou previsibilidade.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="font-bold text-pink-400">4. Pedido</div>
              <p className="text-slate-400 mt-1 leading-snug">
                Faça uma solicitação clara, concreta, realizável e aberta ao diálogo conjunto.
              </p>
            </div>
          </div>
        </div>

        {/* Tabela Resumo das 30 Respostas */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-white flex justify-between">
            <span>Registro Completo das 30 Respostas Escolhidas:</span>
            <span className="text-[10px] text-slate-400">Total de Questões: 30</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[9px]">
            {answerRecords.map((r) => {
              const p = TKI_PROFILES[r.mode];
              return (
                <div
                  key={r.questionId}
                  className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between"
                >
                  <span className="text-slate-300">
                    Q{r.questionId}: <strong className="text-white">Opção {r.selectedOption}</strong>
                  </span>
                  <span className="font-bold" style={{ color: p.color.accent }}>
                    {p.code} ({p.portugueseName.slice(0, 7)})
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signature & Validation Box */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <div className="font-bold text-white">Certificação de Realização</div>
            <div className="text-[10px] text-slate-400">
              Instrumento validado pelo modelo clássico de Thomas-Kilmann (1974)
            </div>
          </div>
          <div className="text-right text-[10px] text-slate-400">
            <div>Autenticação Digital: TKI-{result.completedAt.slice(0, 10).replace(/-/g, '')}</div>
            <div className="text-emerald-400 font-semibold mt-0.5">Status: Avaliação Concluída</div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
          <span>Instrumento Thomas-Kilmann (TKI) • Edição Brasil</span>
          <span>Página 3 de 3</span>
        </div>
      </div>
    </div>
  );
};
