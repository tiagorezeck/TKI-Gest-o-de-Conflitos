import React, { useState } from 'react';
import { TKIAssessmentResult } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { Sparkles, HeartHandshake, Brain, Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface TKIDeepDiveProps {
  result: TKIAssessmentResult;
}

export const TKIDeepDive: React.FC<TKIDeepDiveProps> = ({ result }) => {
  const { dominantMode, secondaryMode, overusedModes, underusedModes } = result;
  const dominantProfile = TKI_PROFILES[dominantMode];
  const secondaryProfile = TKI_PROFILES[secondaryMode];

  const [activeTab, setActiveTab] = useState<'dominant' | 'secondary' | 'einvc' | 'collaboration'>('dominant');

  return (
    <div className="w-full rounded-2xl glass-card p-5 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('dominant')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'dominant'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Estilo Principal: {dominantProfile.portugueseName}</span>
        </button>

        <button
          onClick={() => setActiveTab('secondary')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'secondary'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <span>Estilo Secundário: {secondaryProfile.portugueseName}</span>
        </button>

        <button
          onClick={() => setActiveTab('einvc')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'einvc'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30'
              : 'text-purple-300 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Inteligência Emocional (IE) & CNV</span>
        </button>

        <button
          onClick={() => setActiveTab('collaboration')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'collaboration'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>Interação com Outros Estilos</span>
        </button>
      </div>

      {/* Tab 1: Dominant Style Deep Dive */}
      {activeTab === 'dominant' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ESTILO PRINCIPAL DOMINANTE
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {dominantProfile.dimensions.winLoseRatio} • Assertividade: {dominantProfile.dimensions.assertiveness} • Cooperatividade: {dominantProfile.dimensions.cooperativeness}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {dominantProfile.portugueseName} ({dominantProfile.englishName})
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {dominantProfile.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Strengths */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pontos Fortes e Competências Centrais</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {dominantProfile.strengths.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span className="leading-relaxed">{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to use */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>Quando é o Momento Mais Adequado de Usar</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {dominantProfile.whenToUse.map((wt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span className="leading-relaxed">{wt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Overuse / Underuse Warning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Riscos do Excesso / Superutilização (&gt;75%)</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {dominantProfile.overuseRisks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span className="leading-relaxed">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Orientações de Comunicação Assertiva</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {dominantProfile.communicationTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Secondary Style */}
      {activeTab === 'secondary' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                ESTILO SECUNDÁRIO / DE SUPORTE
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {secondaryProfile.dimensions.winLoseRatio} • Assertividade: {secondaryProfile.dimensions.assertiveness} • Cooperatividade: {secondaryProfile.dimensions.cooperativeness}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {secondaryProfile.portugueseName} ({secondaryProfile.englishName})
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {secondaryProfile.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Como Este Modo Complementa Sua Atuação</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {secondaryProfile.strengths.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span className="leading-relaxed">{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>Situações Oportunas para Ativação Flexível</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {secondaryProfile.whenToUse.map((wt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span className="leading-relaxed">{wt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: EI & NVC Reflection */}
      {activeTab === 'einvc' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Overuse & Underuse Summary */}
          {(overusedModes.length > 0 || underusedModes.length > 0) && (
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 text-xs text-slate-200 space-y-2">
              <div className="font-bold text-indigo-300 flex items-center gap-2 text-sm">
                <Brain className="w-4 h-4 text-indigo-400" />
                <span>Diagnóstico de Percentil Comportamental:</span>
              </div>
              {overusedModes.length > 0 && (
                <p>
                  ⚠️ <strong>Estilo em superutilização (&gt;75%):</strong>{' '}
                  <span className="text-amber-400 font-semibold">
                    {overusedModes.map((m) => TKI_PROFILES[m].portugueseName).join(', ')}
                  </span>{' '}
                  — Você tende a acionar este modo como um reflexo automático sob forte estresse ou pressão.
                </p>
              )}
              {underusedModes.length > 0 && (
                <p>
                  🛡️ <strong>Estilo em subutilização (&lt;25%):</strong>{' '}
                  <span className="text-cyan-400 font-semibold">
                    {underusedModes.map((m) => TKI_PROFILES[m].portugueseName).join(', ')}
                  </span>{' '}
                  — Pode haver bloqueios emocionais, crenças limitantes ou receio de desagradar ao ativar este modo.
                </p>
              )}
            </div>
          )}

          {/* EI 3 Self-Reflection Pillars */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h4 className="text-base font-bold text-purple-300 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span>3 Pilares de Autorreflexão com Inteligência Emocional (IE)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 space-y-2">
                <div className="font-bold text-amber-400 text-sm">1. Comportamentos em Excesso (&gt;75%)</div>
                <p className="text-slate-300 leading-relaxed">
                  • Estou recorrendo a este estilo no piloto automático?<br />
                  • Em situações de estresse, qual emoção primária me domina (raiva, medo de perder o controle ou sobrecarga)?<br />
                  • Como posso respirar por 3 segundos antes de responder por hábito?
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 space-y-2">
                <div className="font-bold text-cyan-400 text-sm">2. Comportamentos em Déficit (&lt;25%)</div>
                <p className="text-slate-300 leading-relaxed">
                  • Que barreiras psicológicas ou medos me impedem de usar este estilo?<br />
                  • Tenho receio de confrontos diretos ou de parecer intransigente?<br />
                  • Quando uma necessidade minha é ignorada, tenho clareza para formular um pedido assertivo?
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 space-y-2">
                <div className="font-bold text-emerald-400 text-sm">3. Treino da Colaboração Ativa (CL)</div>
                <p className="text-slate-300 leading-relaxed">
                  • Avaliei se o contexto dispõe de tempo e confiança suficientes para um processo ganha-ganha?<br />
                  • Consegui separar a observação dos fatos dos meus julgamentos internos?<br />
                  • Já mapeei com clareza as necessidades reais de ambas as partes?
                </p>
              </div>
            </div>
          </div>

          {/* 4 Steps NVC Framework */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/30 border border-indigo-500/30 space-y-4">
            <h4 className="text-base font-bold text-indigo-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Os 4 Passos da Comunicação Não-Violenta (CNV) na Resolução de Conflitos</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold w-max text-[10px]">
                  PASSO 1: OBSERVAÇÃO
                </div>
                <div className="font-bold text-slate-100">Fatos Sem Julgamento</div>
                <p className="text-slate-400 leading-relaxed">
                  Descreva dados concretos e objetivos: o que, quem, quando. Evite generalizações exageradas como &quot;sempre&quot; ou &quot;nunca&quot;.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold w-max text-[10px]">
                  PASSO 2: SENTIMENTOS
                </div>
                <div className="font-bold text-slate-100">Nomear com Autenticidade</div>
                <p className="text-slate-400 leading-relaxed">
                  Assuma suas próprias emoções (ansiedade, insegurança, sobrecarga), em vez de transformá-las em ataques acusatórios.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold w-max text-[10px]">
                  PASSO 3: NECESSIDADES
                </div>
                <div className="font-bold text-slate-100">Necessidades Humanas Universais</div>
                <p className="text-slate-400 leading-relaxed">
                  Identifique a necessidade essencial subjacente: clareza, respeito mútuo, previsibilidade, segurança ou conexão interpessoal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold w-max text-[10px]">
                  PASSO 4: PEDIDOS
                </div>
                <div className="font-bold text-slate-100">Ações Claras e Exequíveis</div>
                <p className="text-slate-400 leading-relaxed">
                  Apresente uma proposta prática, delimitada no tempo e em tom colaborativo, aberta a um diálogo construtivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Collaboration Tips */}
      {activeTab === 'collaboration' && (
        <div className="space-y-4 animate-fadeIn">
          <h4 className="text-sm font-bold text-slate-200">
            Guia de Convivência e Alinhamento: Como o estilo {dominantProfile.portugueseName} interage com outros perfis
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dominantProfile.collaborationTips.map((tip) => {
              const target = TKI_PROFILES[tip.targetMode];
              return (
                <div
                  key={tip.targetMode}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: target.color.accent }}
                    />
                    <span className="font-bold text-xs text-white">
                      Ao lidar com quem prioriza {target.portugueseName} ({target.englishName}):
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-800">
                    {tip.advice}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
