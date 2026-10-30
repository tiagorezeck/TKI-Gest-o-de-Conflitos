import React from 'react';
import { ArrowLeft, Lightbulb, Users, ShieldAlert, Briefcase, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoadmapPageProps {
  onBackToSurvey: () => void;
  onNavigateToResearch: () => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ onBackToSurvey, onNavigateToResearch }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 animate-fadeIn text-slate-100">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onBackToSurvey}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Voltar ao Questionário</span>
        </button>
        <button
          onClick={onNavigateToResearch}
          className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4 cursor-pointer"
        >
          Ver Fundamentação Científica ➔
        </button>
      </div>

      {/* Hero Header */}
      <div className="relative overflow-hidden glass-card-glow rounded-3xl p-6 sm:p-10 border border-amber-500/30 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
          <Lightbulb className="w-4 h-4" />
          <span>Estratégia e Casos Práticos de Aplicação</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          Aplicações Corporativas do Modelo Thomas-Kilmann (TKI)
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Como transformar conflitos de barreira destrutiva em motor de inovação sustentável, fortalecendo a segurança psicológica e a alta performance das equipes.
        </p>
      </div>

      {/* 4 Practical Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            1. Desenvolvimento de Liderança e Tomada de Decisão
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Permite aos gestores identificar o padrão comportamental que acionam no piloto automático sob estresse. Evita que um líder fique refém unicamente da Competição (imposição autoritária) ou da Acomodação (perda de autoridade e rumo estratégico).
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            2. Mapeamento de Conflitos em Equipes (Team Conflict Matrix)
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ao aplicar a avaliação em todos os membros de uma equipe, visualiza-se a dinâmica coletiva: O time sofre com excesso de perfis Competitivos gerando atritos constantes? Ou com excesso de Evitadores, varrendo discussões fundamentais para debaixo do tapete?
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            3. Negociação Estratégica e Gestão de Stakeholders
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Capacita negociadores a transitar conscientemente entre o Compromisso (para acordos comerciais ágeis com fornecedores em condições equilibradas) e a Colaboração (para inovação conjunta e parcerias estratégicas de longo prazo com clientes-chave).
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            4. Gestão de Crises Emocionais e Mediação Interna
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Integração prática com os 4 passos da Comunicação Não-Violenta (CNV): ajuda a despersonalizar mágoas e rivalidades de departamento, redirecionando as reuniões para as necessidades essenciais de negócio e restabelecendo o alinhamento.
          </p>
        </div>
      </div>

      {/* 4-Step Implementation Roadmap */}
      <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span>Roteiro de 4 Passos para Implementação em Empresas e Treinamentos</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center">
              01
            </div>
            <div className="font-bold text-sm text-white">Diagnóstico Individual</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cada colaborador realiza a avaliação TKI confidencialmente, gerando seu relatório detalhado em PDF e refletindo sobre seus percentis de super e subutilização.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600/20 text-purple-400 font-bold text-xs flex items-center justify-center">
              02
            </div>
            <div className="font-bold text-sm text-white">Workshop de Calibração</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sessão prática em grupo para desmistificar os 5 modos, compartilhando casos reais de projetos onde cada estilo teve sucesso ou falhou por inadequação de contexto.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
              03
            </div>
            <div className="font-bold text-sm text-white">Prática com Casos & CNV</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simulação de negociações difíceis aplicando o roteiro de 4 passos da Comunicação Não-Violenta (Observação, Sentimento, Necessidade e Pedido) com feedback em tempo real.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-600/20 text-amber-400 font-bold text-xs flex items-center justify-center">
              04
            </div>
            <div className="font-bold text-sm text-white">Retrospectiva Trimestral</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reavaliação periódica dos indicadores de segurança psicológica, velocidade de tomada de decisão e redução de retrabalho causado por desacordos mal resolvidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
