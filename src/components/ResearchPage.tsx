import React from 'react';
import { ArrowLeft, BookOpen, Brain, Scale, Target, Zap } from 'lucide-react';

interface ResearchPageProps {
  onBackToSurvey: () => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onBackToSurvey }) => {
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
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          Dossiê Científico TKI • Thomas-Kilmann (1974)
        </span>
      </div>

      {/* Hero Header */}
      <div className="relative overflow-hidden glass-card-glow rounded-3xl p-6 sm:p-10 border border-indigo-500/30 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Fundamentação Científica & Metodologia TKI</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          A Base Teórica do Instrumento Thomas-Kilmann (1974)
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Compreenda o mecanismo de neutralização do viés de desejabilidade social, as duas dimensões comportamentais ortogonais e a correlação com Inteligência Emocional (IE) e Comunicação Não-Violenta (CNV).
        </p>
      </div>

      {/* Section 1: Contexto Histórico & Diferenciação dos Testes Fixos */}
      <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-300 flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-400" />
          <span>1. Origem Histórica e Independência em Relação a Tipologias Fixas</span>
        </h2>
        <div className="text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            O <strong>TKI (Thomas-Kilmann Conflict Mode Instrument)</strong> foi desenvolvido em 1974 pelos professores Dr. Kenneth W. Thomas e Dr. Ralph H. Kilmann. Diferente de instrumentos de personalidade estática (como MBTI ou o modelo Big Five, que consideram traços psicológicos relativamente invariantes), o TKI mede a <strong>frequência relativa de comportamentos observáveis</strong> em situações reais de conflito.
          </p>
          <p>
            Na ótica do TKI, o conflito é definido de maneira neutra: <em>&quot;Qualquer situação em que as preocupações ou interesses de duas ou mais pessoas parecem incompatíveis&quot;</em>. Não há estilo inerentemente &quot;bom&quot; ou &quot;ruim&quot;; a eficácia da liderança reside na <strong>flexibilidade situacional</strong> — a capacidade de diagnosticar o contexto e acionar o modo mais apropriado para cada desafio.
          </p>
        </div>
      </div>

      {/* Section 2: Neutralização do Viés de Desejabilidade Social */}
      <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          <span>2. Eliminação do Viés de Desejabilidade Social (Social Desirability Bias)</span>
        </h2>
        <div className="text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            Antes do TKI, inventários de conflito anteriores sofriam de uma distorção severa: as pessoas quase invariavelmente escolhiam opções que soavam moralmente virtuosas (como &quot;colaborar e ouvir a todos&quot;) e rejeitavam opções percebidas como agressivas ou egoístas (como &quot;competir&quot; ou &quot;evitar&quot;). Esse viés chegava a <strong>mais de 90%</strong> de distorção nas respostas.
          </p>
          <p>
            Thomas e Kilmann superaram esse obstáculo empírico através do método de <strong>30 Pares de Escolha Forçada (Forced-Choice Pairs)</strong>. Cada par foi cuidadosamente calibrado para ter um nível equivalente de aceitabilidade social. Assim, o participante é levado a escolher o comportamento que reflete sua real inclinação cotidiana, reduzindo a distorção para apenas <strong>17%</strong> — um marco na psicometria aplicada.
          </p>
        </div>
      </div>

      {/* Section 3: 2 Dimensões Independentes */}
      <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-emerald-300 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-400" />
          <span>3. As Duas Dimensões Comportamentais Independentes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span>Assertividade (Eixo Vertical Y)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              O grau em que um indivíduo tenta satisfazer seus próprios interesses, metas e convicções. Pessoas com alta assertividade sustentam suas posições com firmeza, enquanto aquelas com baixa assertividade cedem ou adiam a colocação de suas demandas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Cooperatividade (Eixo Horizontal X)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              O grau em que o indivíduo busca satisfazer os interesses e necessidades da outra parte. Alta cooperatividade reflete foco no relacionamento, na escuta e na busca por convergência mútua.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: 8 Atributos de Contexto */}
      <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-purple-300 flex items-center gap-2">
          <Zap className="w-5 h-5 text-purple-400" />
          <span>4. Os 8 Atributos Situacionais para Escolha do Modo Estratégico</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            {
              title: 'Relevância do Tema',
              desc: 'É vital para o futuro da organização ou é uma questão secundária e corriqueira?',
            },
            {
              title: 'Importância do Vínculo',
              desc: 'Trata-se de uma relação de parceria de longo prazo ou de uma transação isolada?',
            },
            {
              title: 'Urgência Temporal',
              desc: 'Exige resposta instantânea de contenção ou permite reuniões para cocriação?',
            },
            {
              title: 'Equilíbrio de Poder',
              desc: 'Você possui autoridade formal superior, equivalente ou subordinada ao interlocutor?',
            },
            {
              title: 'Complexidade do Problema',
              desc: 'O assunto é simples e passível de divisão 50/50 ou possui múltiplas variáveis interdependentes?',
            },
            {
              title: 'Grau de Confiança Mútua',
              desc: 'Existe abertura e segurança psicológica para diálogo ou predomina a desconfiança?',
            },
            {
              title: 'Comprometimento da Contraparte',
              desc: 'O outro lado demonstra maturidade para cumprir acordos ganha-ganha?',
            },
            {
              title: 'Carga Emocional Ativa',
              desc: 'Os ânimos estão serenos para negociar ou sobrecarregados pela exasperação e raiva?',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="font-bold text-slate-200">
                {idx + 1}. {item.title}
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
