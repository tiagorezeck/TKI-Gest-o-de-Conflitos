import React, { useState } from 'react';
import { TKIAssessmentResult } from '../types/tki';
import { TKI_PROFILES } from '../data/tkiProfiles';
import {
  Sparkles,
  HeartHandshake,
  Brain,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Target,
  ArrowRight,
  Shield,
  Compass,
} from 'lucide-react';
import { TKIStyleCards } from './TKIStyleCards';
import { TKISituationalMatrix } from './TKISituationalMatrix';

interface TKIDeepDiveProps {
  result: TKIAssessmentResult;
}

export const TKIDeepDive: React.FC<TKIDeepDiveProps> = ({ result }) => {
  const { dominantMode, secondaryMode, overusedModes, underusedModes } = result;
  const dominantProfile = TKI_PROFILES[dominantMode];
  const secondaryProfile = TKI_PROFILES[secondaryMode];

  const [activeTab, setActiveTab] = useState<
    'styles5' | 'dominant' | 'secondary' | 'conflicts' | 'interactions'
  >('styles5');

  return (
    <div className="w-full rounded-2xl glass-card p-5 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {/* 1. 5 Estilos */}
        <button
          onClick={() => setActiveTab('styles5')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'styles5'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-indigo-300" />
          <span>5 estilos</span>
        </button>

        {/* 2. Principal: [Estilo] */}
        <button
          onClick={() => setActiveTab('dominant')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'dominant'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Principal: {dominantProfile.portugueseName}</span>
        </button>

        {/* 3. Secundário: [Estilo] */}
        <button
          onClick={() => setActiveTab('secondary')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'secondary'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <span>Secundário: {secondaryProfile.portugueseName}</span>
        </button>

        {/* 4. Conflitos */}
        <button
          onClick={() => setActiveTab('conflicts')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'conflicts'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30'
              : 'text-purple-300 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Conflitos</span>
        </button>

        {/* 5. Interações */}
        <button
          onClick={() => setActiveTab('interactions')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'interactions'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>Interações</span>
        </button>
      </div>

      {/* Tab 0: 5 Estilos & Seu Posicionamento */}
      {activeTab === 'styles5' && (
        <TKIStyleCards result={result} embedded={true} />
      )}

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

      {/* Tab 3: Conflicts / EI & NVC Reflection */}
      {activeTab === 'conflicts' && (
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

          {/* EI 3 Self-Reflection Pillars: Guia de Auto-Coaching Autônomo */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5 text-purple-400" />
                  <span>GUIA PRÁTICO DE AUTO-COACHING</span>
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Desenvolvimento Comportamental Autônomo
                </span>
              </div>
              <h4 className="text-lg font-black text-white">
                3 Pilares de Autorreflexão: Protocolos de Autocontrole & Desbloqueio
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                Exercícios práticos e ferramentas que você pode aplicar sozinho em tempo real durante suas negociações e conversas difíceis para regular seus impulsos e expandir seu repertório.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
              {/* Pilar 1: Excessos */}
              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-amber-400 text-sm flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>1. Excessos (&gt;75%)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      CONTENÇÃO
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Você tende a acionar este modo como reflexo defensivo automático quando se sente sob ameaça, pressa ou sobrecarga.
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <div className="font-bold text-amber-300 text-xs">Exercício 1: Pausa dos 3 Segundos</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-amber-500/40">
                      Ao notar o ímpeto de responder de imediato, conte <strong>3, 2, 1</strong> mentalmente inflando o diafragma. Isso desativa o sequestro da amígdala cerebral antes da fala.
                    </p>

                    <div className="font-bold text-amber-300 text-xs">Exercício 2: Checagem de Intenção</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-amber-500/40">
                      Pergunte-se: <em>&quot;Estou reagindo para proteger meu ego/aliviar minha ansiedade, ou para construir o melhor resultado para o projeto?&quot;</em>
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-200">
                  <strong>Ação Autônoma de Comunicação:</strong>
                  <div className="italic mt-1 text-slate-300">
                    &quot;Entendi os seus pontos. Preciso de 10 minutos para analisar estes dados e retorno com uma proposta técnica fundamentada.&quot;
                  </div>
                </div>
              </div>

              {/* Pilar 2: Déficits */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-cyan-400 text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>2. Déficits (&lt;25%)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      DESBLOQUEIO
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Estilos em déficit revelam pontos cegos ou receios psicológicos (medo de confrontos, medo de rejeição ou receio de parecer inflexível).
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <div className="font-bold text-cyan-300 text-xs">Exercício 1: Desafio de Micro-Passos</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-cyan-500/40">
                      Escolha nesta semana 1 situação corriqueira de baixo risco para praticar: faça 1 pergunta incisiva, diga 1 &quot;não&quot; cortês ou pontue 1 limite de prazo inegociável.
                    </p>

                    <div className="font-bold text-cyan-300 text-xs">Exercício 2: Quebra de Crença Limitante</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-cyan-500/40">
                      Substitua a crença <em>&quot;Se eu me posicionar, vou desgastar o clima&quot;</em> por: <strong>&quot;Limites claros e transparentes protegem o relacionamento a longo prazo&quot;</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-cyan-200">
                  <strong>Ação Autônoma de Comunicação:</strong>
                  <div className="italic mt-1 text-slate-300">
                    &quot;Para garantirmos a entrega do projeto com a qualidade necessária, eu preciso que [requisito objetivo] seja formalizado até [data].&quot;
                  </div>
                </div>
              </div>

              {/* Pilar 3: Colaboração Ativa */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-emerald-400 text-sm flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>3. Colaboração (CL)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      EXPANSÃO
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    A Colaboração é a única modalidade que soluciona o problema na raiz através do ganha-ganha, exigindo maturidade relacional.
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <div className="font-bold text-emerald-300 text-xs">Exercício 1: Checklist de Viabilidade</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-emerald-500/40">
                      Valide se o contexto atende aos 3 pré-requisitos: (a) Há tempo suficiente para diálogo? (b) Há confiança mínima entre as partes? (c) O tema é estratégico para ambos?
                    </p>

                    <div className="font-bold text-emerald-300 text-xs">Exercício 2: Escuta Sem Contra-Ataque</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pl-2 border-l-2 border-emerald-500/40">
                      Escute a demanda da outra pessoa por 2 minutos completos sem rebater. Valide: <em>&quot;O que compreendi é que sua maior preocupação é [X]. É isso mesmo?&quot;</em>
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-200">
                  <strong>Ação Autônoma de Comunicação:</strong>
                  <div className="italic mt-1 text-slate-300">
                    &quot;O que precisa acontecer concretamente para que esta decisão atenda tanto as suas prioridades quanto as minhas metas operacionais?&quot;
                  </div>
                </div>
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

      {/* Tab 4: Interactions (Guia de Convivência & Matriz Situacional) */}
      {activeTab === 'interactions' && (
        <div className="space-y-8 animate-fadeIn">
          {/* 1. Guia de Convivência por Perfil (Primeiro Card) */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                GUIA DE CONVIVÊNCIA INTERPESSOAL
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                Como o seu estilo {dominantProfile.portugueseName} interage com os outros 4 perfis
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Diretrizes de alinhamento e mitigação de atritos ao lidar com interlocutores que priorizam modos diferentes do seu:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dominantProfile.collaborationTips.map((tip) => {
                const target = TKI_PROFILES[tip.targetMode];
                return (
                  <div
                    key={tip.targetMode}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
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
                    <p className="text-xs text-slate-300 leading-relaxed pl-3.5 border-l-2 border-slate-800">
                      {tip.advice}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Matriz Situacional dos 8 Atributos (Segundo Card) */}
          <TKISituationalMatrix />
        </div>
      )}
    </div>
  );
};
