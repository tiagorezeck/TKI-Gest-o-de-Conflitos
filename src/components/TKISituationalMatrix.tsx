import React, { useState } from 'react';
import { SITUATIONAL_ATTRIBUTES, SituationalAttribute } from '../data/situationalAttributes';
import { TKI_PROFILES } from '../data/tkiProfiles';
import { TKIMode } from '../types/tki';
import {
  Target,
  Users,
  Clock,
  Scale,
  Compass,
  ShieldAlert,
  CheckCircle2,
  Zap,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Filter,
  ChevronDown,
} from 'lucide-react';

export const TKISituationalMatrix: React.FC = () => {
  const [selectedAttributeId, setSelectedAttributeId] = useState<string | 'all'>('all');

  const getIcon = (iconName: SituationalAttribute['iconName']) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-4 h-4 text-rose-400" />;
      case 'Users':
        return <Users className="w-4 h-4 text-emerald-400" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-amber-400" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-purple-400" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-cyan-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-red-400" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-amber-300" />;
      default:
        return <Target className="w-4 h-4 text-indigo-400" />;
    }
  };

  const renderModeBadge = (mode: TKIMode, prefix?: string) => {
    const profile = TKI_PROFILES[mode];
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border"
        style={{
          backgroundColor: `${profile.color.accent}15`,
          borderColor: `${profile.color.accent}40`,
          color: profile.color.accent,
        }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: profile.color.accent }}
        />
        {prefix && <span className="font-normal text-slate-400">{prefix}</span>}
        <span>
          {profile.portugueseName} ({profile.code})
        </span>
      </span>
    );
  };

  const filteredAttributes =
    selectedAttributeId === 'all'
      ? SITUATIONAL_ATTRIBUTES
      : SITUATIONAL_ATTRIBUTES.filter((a) => a.id === selectedAttributeId);

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/30 border border-indigo-500/30 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>ESTRATÉGIA SITUACIONAL TKI</span>
          </span>
          <span className="text-xs text-slate-400 font-medium">
            O checklist antes de entrar em qualquer conversa difícil
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white">
          Matriz Situacional dos 8 Atributos: Como Escolher o Modo Certo
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Nenhum modo de resolução de conflitos é bom ou ruim isoladamente. A maestria comportamental consiste na <strong>flexibilidade situacional</strong>: diagnosticar estes 8 atributos do cenário antes de falar e escolher intencionalmente o estilo mais adequado.
        </p>

        {/* Dropdown Filter Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <label
            htmlFor="attribute-select"
            className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold"
          >
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span>Filtrar por Atributo:</span>
          </label>

          <div className="relative min-w-[280px] sm:min-w-[380px]">
            <select
              id="attribute-select"
              value={selectedAttributeId}
              onChange={(e) => setSelectedAttributeId(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 cursor-pointer transition-all shadow-inner"
            >
              <option value="all" className="bg-slate-900 text-white">
                📋 Todos os 8 Atributos Situacionais (Visão Completa)
              </option>
              {SITUATIONAL_ATTRIBUTES.map((attr) => (
                <option key={attr.id} value={attr.id} className="bg-slate-900 text-white">
                  {attr.number}. {attr.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {selectedAttributeId !== 'all' && (
            <button
              onClick={() => setSelectedAttributeId('all')}
              className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-2 cursor-pointer transition-colors"
            >
              Ver todos os 8
            </button>
          )}
        </div>
      </div>

      {/* Grid of Situational Attributes */}
      <div className="grid grid-cols-1 gap-5">
        {filteredAttributes.map((attr) => (
          <div
            key={attr.id}
            className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
          >
            {/* Header: Title & Diagnostic Question */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  {getIcon(attr.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-indigo-400 font-mono text-sm">#{attr.number}</span>
                    <span>{attr.title}</span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-950/30 px-3 py-1 rounded-lg border border-amber-500/20">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{attr.diagnosticQuestion}</span>
              </div>
            </div>

            {/* 2 Scenarios Grid (Scenario A vs Scenario B) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Scenario A */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-200">
                      {attr.scenarioA.label}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {renderModeBadge(attr.scenarioA.recommendedMode)}
                      {attr.scenarioA.secondaryMode &&
                        renderModeBadge(attr.scenarioA.secondaryMode, 'ou')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {attr.scenarioA.condition}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-xs">
                  <strong className="text-indigo-300 font-semibold flex items-center gap-1 mb-1">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Diretriz Tática:</span>
                  </strong>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {attr.scenarioA.tacticalAdvice}
                  </p>
                </div>
              </div>

              {/* Scenario B */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-200">
                      {attr.scenarioB.label}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {renderModeBadge(attr.scenarioB.recommendedMode)}
                      {attr.scenarioB.secondaryMode &&
                        renderModeBadge(attr.scenarioB.secondaryMode, 'ou')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {attr.scenarioB.condition}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-xs">
                  <strong className="text-purple-300 font-semibold flex items-center gap-1 mb-1">
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                    <span>Diretriz Tática:</span>
                  </strong>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {attr.scenarioB.tacticalAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
