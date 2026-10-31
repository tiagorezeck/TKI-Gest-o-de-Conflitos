import { TKIMode } from '../types/tki';

export interface SituationalScenario {
  label: string;
  condition: string;
  recommendedMode: TKIMode;
  secondaryMode?: TKIMode;
  tacticalAdvice: string;
}

export interface SituationalAttribute {
  id: string;
  number: number;
  title: string;
  iconName: 'Target' | 'Users' | 'Clock' | 'Scale' | 'Compass' | 'ShieldAlert' | 'CheckCircle2' | 'Zap';
  diagnosticQuestion: string;
  scenarioA: SituationalScenario;
  scenarioB: SituationalScenario;
}

export const SITUATIONAL_ATTRIBUTES: SituationalAttribute[] = [
  {
    id: 'relevance',
    number: 1,
    title: 'Relevância do Tema',
    iconName: 'Target',
    diagnosticQuestion: 'Este assunto é vital para o futuro/valores fundamentais ou é uma questão secundária e corriqueira?',
    scenarioA: {
      label: 'Cenário Vital / Princípios Inegociáveis',
      condition: 'Impacto estratégico crítico, segurança, ética ou valores centrais da organização.',
      recommendedMode: 'competing',
      secondaryMode: 'collaborating',
      tacticalAdvice: 'Sustente sua posição com firmeza técnica ou invista em cocriação aprofundada. Jamais ceda por mero conformismo.',
    },
    scenarioB: {
      label: 'Cenário Secundário / Baixo Impacto',
      condition: 'Questão operacional trivial, rotineira ou de preferência pessoal de baixo risco.',
      recommendedMode: 'accommodating',
      secondaryMode: 'avoiding',
      tacticalAdvice: 'Ceda para preservar o relacionamento e economizar energia cognitiva do time para batalhas mais importantes.',
    },
  },
  {
    id: 'relationship',
    number: 2,
    title: 'Importância do Vínculo',
    iconName: 'Users',
    diagnosticQuestion: 'Trata-se de uma parceria de longo prazo essencial ou de uma transação isolada sem vínculo futuro?',
    scenarioA: {
      label: 'Parceria de Longo Prazo / Aliança Estratégica',
      condition: 'Vocês precisarão trabalhar juntos continuamente nos próximos meses ou anos.',
      recommendedMode: 'collaborating',
      secondaryMode: 'accommodating',
      tacticalAdvice: 'Proteja a confiança mútua e o capital social interpessoal. Vitórias unilaterais forçadas geram ressentimento duradouro.',
    },
    scenarioB: {
      label: 'Transação Pontual / Sem Relação Futura',
      condition: 'Negociação isolada de compra/venda ou interação transitória com terceiros.',
      recommendedMode: 'compromising',
      secondaryMode: 'competing',
      tacticalAdvice: 'Foque nos termos objetivos do contrato e na entrega dos resultados estipulados de forma pragmática.',
    },
  },
  {
    id: 'urgency',
    number: 3,
    title: 'Urgência Temporal',
    iconName: 'Clock',
    diagnosticQuestion: 'A situação exige resposta instantânea de contenção ou dispõe de tempo hábil para diálogo estruturado?',
    scenarioA: {
      label: 'Emergência / Resposta Imediata',
      condition: 'Crises operacionais, riscos de acidentes ou prazos fatais com perdas iminentes.',
      recommendedMode: 'competing',
      tacticalAdvice: 'Ação rápida, assertiva e diretiva para conter o dano. Buscar consenso em momentos de crise gera paralisia fatal.',
    },
    scenarioB: {
      label: 'Prazo Flexível / Planejamento Estratégico',
      condition: 'Há tempo suficiente para coletar dados, ouvir áreas interdependentes e cocriar.',
      recommendedMode: 'collaborating',
      tacticalAdvice: 'Agende reuniões estruturadas para mapear as causas raízes e desenvolver soluções integradas e inovadoras.',
    },
  },
  {
    id: 'power',
    number: 4,
    title: 'Equilíbrio de Poder',
    iconName: 'Scale',
    diagnosticQuestion: 'Você possui autoridade formal superior, equivalente ou subordinada em relação à contraparte?',
    scenarioA: {
      label: 'Maior Autoridade Formal / Posição de Liderança',
      condition: 'Você detém o poder de decisão final sobre a política ou equipe.',
      recommendedMode: 'collaborating',
      secondaryMode: 'competing',
      tacticalAdvice: 'Use o poder para criar segurança psicológica e convidar à divergência; use a Competição apenas para balizas inegociáveis.',
    },
    scenarioB: {
      label: 'Poder Equivalente ou Posição Subordinada',
      condition: 'Pares departamentais com interesses cruzados ou relação de subordinação hierárquica.',
      recommendedMode: 'compromising',
      secondaryMode: 'accommodating',
      tacticalAdvice: 'Apresente argumentos baseados em dados objetivos e construa concessões mútuas para gerar reciprocidade.',
    },
  },
  {
    id: 'complexity',
    number: 5,
    title: 'Complexidade do Problema',
    iconName: 'Compass',
    diagnosticQuestion: 'O desafio envolve múltiplas variáveis interdependentes ou é linear e divisível de forma direta?',
    scenarioA: {
      label: 'Multifatorial / Interdependente / Ambíguo',
      condition: 'Nenhum dos lados possui a resposta completa isoladamente.',
      recommendedMode: 'collaborating',
      tacticalAdvice: 'Una as perspectivas complementares de cada especialista para sintetizar uma solução ganha-ganha inovadora.',
    },
    scenarioB: {
      label: 'Linear / Recursos Finitos Mensuráveis',
      condition: 'Divisão de verba, horas de escala ou tarefas de escopo fechado.',
      recommendedMode: 'compromising',
      tacticalAdvice: 'Adote uma divisão justa e prática (ex.: divisão proporcional ou 50/50) para dar andamento veloz aos projetos.',
    },
  },
  {
    id: 'trust',
    number: 6,
    title: 'Grau de Confiança Mútua',
    iconName: 'CheckCircle2',
    diagnosticQuestion: 'Existe abertura e segurança psicológica para diálogo sincero ou predomina desconfiança/política interna?',
    scenarioA: {
      label: 'Alta Confiança / Segurança Psicológica',
      condition: 'Histórico de transparência e cumprimento leal de combinados.',
      recommendedMode: 'collaborating',
      tacticalAdvice: 'Compartilhe vulnerabilidades e preocupações reais; ambas as partes colaboram genuinamente para o bem comum.',
    },
    scenarioB: {
      label: 'Baixa Confiança / Risco de Manipulação',
      condition: 'Ambiente hostil, histórico de quebra de acordos ou jogos políticos.',
      recommendedMode: 'compromising',
      secondaryMode: 'competing',
      tacticalAdvice: 'Formalize todos os pontos por escrito, exija garantias prévias e delimite responsabilidades auditáveis.',
    },
  },
  {
    id: 'commitment',
    number: 7,
    title: 'Comprometimento da Contraparte',
    iconName: 'ShieldAlert',
    diagnosticQuestion: 'O outro lado demonstra maturidade para cumprir acordos ou atua com oportunismo de curto prazo?',
    scenarioA: {
      label: 'Contraparte Madura e Cooperativa',
      condition: 'Disposição mútua para investir esforço e cumprir o combinado.',
      recommendedMode: 'collaborating',
      tacticalAdvice: 'Aprofunde o alinhamento de expectativas; a colaboração gera soluções sustentáveis e sólidas a longo prazo.',
    },
    scenarioB: {
      label: 'Contraparte Intransigente ou Oportunista',
      condition: 'A outra parte busca explorar concessões sem oferecer contrapartida real.',
      recommendedMode: 'competing',
      secondaryMode: 'compromising',
      tacticalAdvice: 'Mantenha limites claros e inegociáveis. Só faça concessões mediante garantias firmes e comprovadas.',
    },
  },
  {
    id: 'emotional_load',
    number: 8,
    title: 'Carga Emocional Ativa',
    iconName: 'Zap',
    diagnosticQuestion: 'Os ânimos estão exaltados (raiva/exasperação) ou serenos para negociação técnica e racional?',
    scenarioA: {
      label: 'Alta Tensão Emocional / Fúria / Pânico',
      condition: 'Amígdala cerebral sequestrada; qualquer fala racional é interpretada como ataque pessoal.',
      recommendedMode: 'avoiding',
      tacticalAdvice: 'Recuo tático temporário! Proponha uma pausa consciente: "Vamos respirar e retomar este ponto amanhã às 10h com a mente descansada".',
    },
    scenarioB: {
      label: 'Clima Sereno / Maturidade Emocional',
      condition: 'As partes estão calmas, dispostas a ouvir e orientadas a soluções.',
      recommendedMode: 'collaborating',
      secondaryMode: 'compromising',
      tacticalAdvice: 'Aproveite o momento favorável para realizar um diálogo aprofundado com foco em necessidades essenciais.',
    },
  },
];
