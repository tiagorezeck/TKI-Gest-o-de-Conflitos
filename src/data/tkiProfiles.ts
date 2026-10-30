import { ModeProfile, TKIMode } from '../types/tki';

export const TKI_PROFILES: Record<TKIMode, ModeProfile> = {
  competing: {
    id: 'competing',
    code: 'CP',
    portugueseName: 'Competição',
    englishName: 'Competing',
    tagline: 'Assertivo & Focado em Resultados (Ganha - Perde / Win - Lose)',
    icon: 'Sword',
    color: {
      bg: 'bg-red-950/40',
      border: 'border-red-500/30',
      text: 'text-red-400',
      accent: '#EF4444',
      glow: 'rgba(239, 68, 68, 0.25)',
    },
    dimensions: {
      assertiveness: 'Alta',
      cooperativeness: 'Baixa',
      winLoseRatio: 'Ganha - Perde (Win - Lose)',
    },
    overview:
      'Estilo fortemente orientado a metas e resultados imediatos, com elevada assertividade e proteção convicta de seus interesses. Você mobiliza lógica firme, autoridade e persuasão para tomar decisões rápidas e garantir que o resultado mais eficiente seja alcançado.',
    whenToUse: [
      'Em situações de crise, urgência operacional ou ameaças de segurança que exigem ações instantâneas e sem hesitação.',
      'Na implementação de decisões difíceis, porém indispensáveis (reestruturações, cortes de custos, diretrizes de conformidade).',
      'Para proteger a equipe ou a integridade do projeto contra oportunismo ou abusos de terceiros.',
      'Em assuntos técnicos vitais em que você detém o conhecimento comprovado e a sobrevivência do negócio depende dessa direção.',
    ],
    strengths: [
      'Capacidade notável de decidir e liderar sob forte pressão.',
      'Defesa intransigente de padrões de excelência e metas estratégicas cruciais.',
      'Destravamento rápido de impasses quando a equipe se encontra paralisada por dúvidas.',
      'Coragem para assumir a responsabilidade por decisões impopulares e resolver atritos espinhosos.',
    ],
    overuseRisks: [
      'Risco de centralização autoritária: os colegas podem se sentir desconsiderados e silenciar contribuições inovadoras.',
      'Redução da segurança psicológica: surgimento de concordâncias passivas ("Yes-men") que ocultam riscos operacionais.',
      'Desgaste acumulado nas relações interpessoais com ressentimentos sutis.',
      'Falta de visão sistêmica ao desconsiderar impactos colaterais percebidos por outras áreas.',
    ],
    underuseRisks: [
      'Vulnerabilidade a pressões e dificuldade em impor limites e defender direitos legítimos.',
      'Procrastinação de decisões duras, permitindo que problemas se agravem.',
      'Dificuldade de dizer "não", culminando em sobrecarga e perda de autoridade perante o grupo.',
    ],
    eiReflectionQuestions: [
      'Quando me sinto contrariado(a), qual emoção surge primeiro: irritação, ansiedade por controle ou receio de desrespeito?',
      'Estou defendendo o melhor para a organização ou alimentando o ego de precisar provar que estou certo(a)?',
      'Consigo fazer uma pausa de 3 segundos para escutar genuinamente a objeção antes de rebatê-la com veemência?',
    ],
    nvcActionSteps: [
      'Passo 1 (Observação): Exponha dados concretos sem adjetivos acusatórios ("O prazo contratual vence na sexta e ainda faltam 4 entregas críticas...").',
      'Passo 2 (Sentimento): Expresse com vulnerabilidade o que você sente ("...sinto apreensão quanto ao cumprimento de nossos compromissos institucionais...").',
      'Passo 3 (Necessidade): Evidencie a necessidade essencial compartilhada ("...porque prezo pela reputação e pela segurança de toda a equipe...").',
      'Passo 4 (Pedido): Faça solicitações específicas, realizáveis e com prazo fixado, em vez de comandos unilaterais arbitrários.',
    ],
    communicationTips: [
      'Module o volume de voz e adote uma postura aberta para não ativar mecanismos defensivos de luta-ou-fuga nos outros.',
      'Incentive ativamente o contraditório: "Gostaria de ouvir que falhas você identifica nessa rota antes de decidirmos".',
      'Separe as pessoas dos problemas: critique os processos e premissas, nunca a competência pessoal do colega.',
    ],
    collaborationTips: [
      {
        targetMode: 'collaborating',
        advice:
          'Tenha paciência para permitir uma análise mais profunda a quatro mãos; a solução ganha-ganha é muito mais sustentável.',
      },
      {
        targetMode: 'compromising',
        advice:
          'Identifique os pontos vitais inegociáveis, mas demonstre flexibilidade nos itens secundários para acelerar o desfecho.',
      },
      {
        targetMode: 'avoiding',
        advice:
          'Não eleve a pressão; crie um ambiente seguro e utilize perguntas abertas para que a pessoa se sinta encorajada a falar.',
      },
      {
        targetMode: 'accommodating',
        advice:
          'Estimule o outro a explicitar suas reais necessidades, evitando que ele ceda por medo e guarde insatisfação velada.',
      },
    ],
  },
  collaborating: {
    id: 'collaborating',
    code: 'CL',
    portugueseName: 'Colaboração',
    englishName: 'Collaborating',
    tagline: 'Integrativo & Soluções Criativas (Ganha - Ganha / Win - Win)',
    icon: 'Handshake',
    color: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      accent: '#10B981',
      glow: 'rgba(16, 185, 129, 0.25)',
    },
    dimensions: {
      assertiveness: 'Alta',
      cooperativeness: 'Alta',
      winLoseRatio: 'Ganha - Ganha (Win - Win)',
    },
    overview:
      'Estilo altamente cooperativo e assertivo. Em vez de disputar fatias do bolo ou fazer concessões imediatas, você busca expandir o bolo, investigando as reais preocupações de todos para construir uma solução inovadora que atenda plenamente a ambos os lados.',
    whenToUse: [
      'Quando os interesses de ambas as partes são importantes demais para serem comprometidos por concessões rasas.',
      'Para mesclar percepções e saberes de pessoas com formações e visões distintas em projetos multidisciplinares.',
      'Quando o engajamento e a adesão genuína de todos são vitais para o sucesso da execução futura.',
      'Para transformar atritos em oportunidades de inovação e fortalecer vínculos de parceria a longo prazo.',
    ],
    strengths: [
      'Capacidade de produzir soluções criativas e de alta qualidade que superam a ideia original de cada parte.',
      'Fortalecimento mútuo de confiança, camaradagem e segurança psicológica nas equipes.',
      'Geração de compromisso duradouro, eliminando a resistência velada pós-reunião.',
      'Compreensão profunda das motivações e dinâmicas ocultas do negócio.',
    ],
    overuseRisks: [
      'Consumo excessivo de tempo e energia cognitiva discutindo detalhes de menor relevância.',
      'Paralisia por excesso de consenso quando uma decisão rápida e simples seria suficiente.',
      'Risco de esgotamento e desilusão quando a outra parte não tem interesse ou postura cooperativa.',
      'Dificuldade em fechar acordos pontuais em cenários de alta escassez de tempo.',
    ],
    underuseRisks: [
      'Perda recorrente de oportunidades de inovar e criar soluções conjuntas superiores.',
      'Soluções frágeis e superficiais que voltam a gerar atrito poucos dias depois.',
      'Baixo sentimento de pertencimento e distanciamento entre liderança e liderados.',
    ],
    eiReflectionQuestions: [
      'Estou exigindo consenso absoluto até em temas triviais que poderiam ser resolvidos com um compromisso ágil?',
      'Sei discernir quando o outro está jogando de forma competitiva ou quando há abertura real para colaboração?',
      'Tenho paciência para acolher visões divergentes sem tentar enquadrá-las à força no meu modelo mental?',
    ],
    nvcActionSteps: [
      'Passo 1 (Observação): Registre o cenário sem filtros interpretativos ("Ambos queremos garantir estabilidade, mas temos duas arquiteturas diferentes propostas...").',
      'Passo 2 (Sentimento): Compartilhe seu entusiasmo e eventuais receios com serenidade.',
      'Passo 3 (Necessidade): Mapeie a necessidade oculta de cada lado (ex: robustez de infraestrutura vs velocidade de go-to-market).',
      'Passo 4 (Pedido): Co-crie um experimento ou teste-piloto que satisfaça aos dois critérios antes do rollout final.',
    ],
    communicationTips: [
      'Pratique escuta ativa profunda: sintetize com suas próprias palavras o que a outra parte disse antes de expor seu ponto.',
      'Faça perguntas catalisadoras: "Como poderíamos desenhar algo que respondesse à sua preocupação com custos e à minha com prazos?".',
      'Mantenha transparência sobre dados, critérios e limites orçamentários disponíveis.',
    ],
    collaborationTips: [
      {
        targetMode: 'competing',
        advice:
          'Demonstre que a colaboração atingirá o objetivo dele com mais solidez e rapidez, sem diminuir seu protagonismo.',
      },
      {
        targetMode: 'compromising',
        advice:
          'Convide a pessoa a não se conformar de imediato com a média e explorar uma terceira alternativa superior.',
      },
      {
        targetMode: 'avoiding',
        advice:
          'Reduza o estresse do encontro, agende conversas individuais e envie as pautas com antecedência para reflexão.',
      },
      {
        targetMode: 'accommodating',
        advice:
          'Deixe claro que a opinião dele é indispensável para você e que ele não precisa ceder para manter a harmonia.',
      },
    ],
  },
  compromising: {
    id: 'compromising',
    code: 'CO',
    portugueseName: 'Compromisso (Acordo)',
    englishName: 'Compromising',
    tagline: 'Meio-termo Prático & Concessões Mútuas (Cada um cede um pouco)',
    icon: 'Scale',
    color: {
      bg: 'bg-amber-950/40',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      accent: '#F59E0B',
      glow: 'rgba(245, 158, 11, 0.25)',
    },
    dimensions: {
      assertiveness: 'Média',
      cooperativeness: 'Média',
      winLoseRatio: 'Meio-termo (Concessão Mútua)',
    },
    overview:
      'Estilo equilibrado e pragmático focado em encontrar uma solução aceitável e rápida que satisfaça parcialmente a todos. Baseia-se no princípio de "dividir a diferença", onde ambas as partes abrem mão de algo para destravar o processo.',
    whenToUse: [
      'Quando as metas são importantes, mas não justificam o esforço e o tempo despendido em negociações exaustivas.',
      'Quando dois lados com forças equivalentes chegam a um impasse paralisante e precisam de avanço prático.',
      'Para alcançar soluções temporárias para problemas complexos sob restrições severas de cronograma.',
      'Como alternativa de contingência caso a tentativa de Colaboração ou Competição não tenha alcançado sucesso.',
    ],
    strengths: [
      'Agilidade e senso prático na resolução de conflitos corporativos.',
      'Percepção geral de equidade e equilíbrio ("ninguém levou tudo, ninguém ficou sem nada").',
      'Capacidade de manter o fluxo de trabalho em andamento contínuo sem rupturas relacionais.',
      'Excelente habilidade de negociação e barganha tática.',
    ],
    overuseRisks: [
      'Foco excessivo na barganha mecânica (50/50), esquecendo a busca de soluções mais estratégicas e inovadoras.',
      'Risco de gerar soluções medíocres ("nem carne, nem peixe") que frustram as partes no longo prazo.',
      'Incentivo à inflação de pedidos iniciais (as pessoas pedem o dobro esperando negociar pela metade).',
      'Descuido das causas profundas e estruturais do conflito que continuarão latentes.',
    ],
    underuseRisks: [
      'Dificuldade crônica em flexibilizar posturas, gerando bloqueios e lentidão desnecessária.',
      'Incapacidade de fazer trocas operacionais simples no dia a dia da gestão.',
      'Percepção de rigidez ou teimosia perante colegas e pares.',
    ],
    eiReflectionQuestions: [
      'Estou cedendo cedo demais apenas pelo desconforto de tolerar a tensão de um debate produtivo?',
      'O meio-termo acordado realmente resolve o problema ou apenas "chuta a lata para a frente"?',
      'Consigo identificar se esse assunto exigia a busca de uma solução win-win ou se um acordo médio é suficiente?',
    ],
    nvcActionSteps: [
      'Passo 1 (Observação): Declare o ponto de impasse e o tempo disponível restante com clareza.',
      'Passo 2 (Sentimento): Expresse sua disposição pragmática e respeito mútuo.',
      'Passo 3 (Necessidade): Delimite a necessidade de cadência operacional e equilíbrio recíproco.',
      'Passo 4 (Pedido): Proponha uma permuta transparente: "Se eu ceder no requisito A, você concorda em atender ao requisito B?".',
    ],
    communicationTips: [
      'Proponha acordos com cláusulas de revisão periódica (ex: "Vamos adotar esse meio-termo por 30 dias e reavaliar métricas").',
      'Evite a tentação de focar unicamente em posições numéricas; considere valores qualitativos na troca.',
      'Reconheça e valorize verbalmente a concessão feita pela outra parte.',
    ],
    collaborationTips: [
      {
        targetMode: 'competing',
        advice:
          'Proponha uma vitória parcial tangível para o lado dele para que ele possa aceitar uma concessão equilibrada.',
      },
      {
        targetMode: 'collaborating',
        advice:
          'Estabeleça um timebox (limite de tempo): se a solução ótima não surgir até a data X, acione o plano de compromisso.',
      },
      {
        targetMode: 'avoiding',
        advice:
          'Ofereça opções de meio-termo pré-formatadas para que a pessoa escolha com menor esforço e sem medo de atrito.',
      },
      {
        targetMode: 'accommodating',
        advice:
          'Certifique-se de que a pessoa também receba contrapartidas justas, em vez de deixar que ela abra mão de tudo.',
      },
    ],
  },
  avoiding: {
    id: 'avoiding',
    code: 'AV',
    portugueseName: 'Evitação',
    englishName: 'Avoiding',
    tagline: 'Cautela Estratégica & Adiamento (Neutro / Recuo Estratégico)',
    icon: 'Shield',
    color: {
      bg: 'bg-slate-900/60',
      border: 'border-slate-500/30',
      text: 'text-slate-400',
      accent: '#94A3B8',
      glow: 'rgba(148, 163, 184, 0.25)',
    },
    dimensions: {
      assertiveness: 'Baixa',
      cooperativeness: 'Baixa',
      winLoseRatio: 'Neutro / Perde - Perde',
    },
    overview:
      'Estilo não-assertivo e não-cooperativo. A pessoa não persegue ativamente seus próprios interesses nem os do outro de imediato. Manifesta-se pelo adiamento diplomático da discussão, recuo estratégico ou neutralidade deliberada.',
    whenToUse: [
      'Quando o tema em questão é irrelevante ou existem assuntos muito mais prementes exigindo atenção imediata.',
      'Quando você percebe que não há chances reais de satisfazer suas preocupações no momento presente.',
      'Quando os custos e o dano potencial da confrontação superam amplamente os benefícios de sua resolução.',
      'Para permitir que as pessoas esfriem os ânimos, recuperem o equilíbrio emocional e a racionalidade.',
      'Quando outros indivíduos estão mais bem posicionados ou capacitados para resolver a discórdia.',
    ],
    strengths: [
      'Capacidade de preservar energia e não se desgastar com polêmicas infrutíferas.',
      'Habilidade de esfriar discussões incendiárias através da pausa reflexiva e da paciência.',
      'Prudência na gestão do tempo e seleção inteligente das batalhas que valem a pena lutar.',
      'Neutralidade que evita contágio emocional e desestabilização de ambientes tensos.',
    ],
    overuseRisks: [
      'Acúmulo de conflitos não resolvidos que fermentam no subsolo e explodem em crises maiores mais tarde.',
      'Percepção de omissão, falta de liderança ou covardia moral perante os liderados.',
      'Decisões tomadas à sua revelia por falta de posicionamento claro no momento propício.',
      'Comunicação passivo-agressiva e bloqueios no fluxo de feedbacks sinceros.',
    ],
    underuseRisks: [
      'Desgaste contínuo por entrar em todas as disputas, inclusive discussões menores sem relevância.',
      'Reações imediatistas desmedidas antes de colher informações suficientes.',
      'Cansaço mental por incapacidade de delegar ou deixar a poeira assentar.',
    ],
    eiReflectionQuestions: [
      'Estou me esquivando por prudência estratégica ou por medo e desconforto emocional diante do confronto?',
      'O silêncio atual está ajudando a amadurecer a solução ou apenas tornando o problema insolúvel amanhã?',
      'Tenho clareza de qual o momento ideal e o prazo limite para trazer essa conversa de volta à mesa?',
    ],
    nvcActionSteps: [
      'Passo 1 (Observação): Identifique a saturação do momento sem fugir do compromisso ("Percebo que os ânimos estão alterados e estamos repetindo argumentos...").',
      'Passo 2 (Sentimento): Nomeie seu estado interno ("...sinto que estou perdendo a clareza para ponderar com a justiça necessária...").',
      'Passo 3 (Necessidade): Fundamente o pedido com a necessidade de lucidez e respeito mútuo.',
      'Passo 4 (Pedido): Proponha uma pausa estruturada: "Sugiro fazermos um intervalo e retomarmos amanhã às 10h com foco total".',
    ],
    communicationTips: [
      'Não confunda silêncio com abandono: informe previamente que está fazendo uma pausa programada.',
      'Use o tempo de distanciamento para organizar fatos, evidências e entender a ótica do outro.',
      'Seja honesto sobre os limites da sua autoridade no assunto.',
    ],
    collaborationTips: [
      {
        targetMode: 'competing',
        advice:
          'Defina claramente o horário da retração para que ele não entenda a pausa como desrespeito ou fuga deliberada.',
      },
      {
        targetMode: 'collaborating',
        advice:
          'Reconheça a intenção nobre do colega, mas explique que no momento falta maturidade ou clareza de escopo.',
      },
      {
        targetMode: 'compromising',
        advice:
          'Mostre que uma decisão apressada agora geraria retrabalho; uma pausa de 24h trará muito mais precisão.',
      },
      {
        targetMode: 'accommodating',
        advice:
          'Cuidado para que a evitação mútua não crie uma falsa paz superficial com problemas estruturais abafados.',
      },
    ],
  },
  accommodating: {
    id: 'accommodating',
    code: 'AC',
    portugueseName: 'Acomodação',
    englishName: 'Accommodating',
    tagline: 'Harmonia & Preservação de Relações (Perde - Ganha / Lose - Win)',
    icon: 'HeartHandshake',
    color: {
      bg: 'bg-indigo-950/40',
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      accent: '#6366F1',
      glow: 'rgba(99, 102, 241, 0.25)',
    },
    dimensions: {
      assertiveness: 'Baixa',
      cooperativeness: 'Alta',
      winLoseRatio: 'Perde - Ganha (Lose - Win)',
    },
    overview:
      'Estilo não-assertivo e altamente cooperativo. Caracteriza-se por colocar as necessidades e os sentimentos do outro acima dos próprios interesses, buscando ativamente apaziguar tensões, cultivar a boa convivência e preservar a união do grupo.',
    whenToUse: [
      'Quando você percebe que a outra parte está certa ou tem um argumento consideravelmente melhor.',
      'Quando o tema em debate é infinitamente mais relevante para o outro do que para você pessoalmente.',
      'Para construir crédito social, demonstrar generosidade e fortalecer laços para projetos futuros.',
      'Quando preservar a paz e a estabilidade da equipe é mais prioritário do que a questão operacional pontual.',
      'Para permitir que liderados aprendam com as próprias experiências e erros dentro de um ambiente seguro.',
    ],
    strengths: [
      'Sensibilidade empática aguçada e habilidade de gerar acolhimento e escuta.',
      'Capacidade de desarmar conflitos explosivos através da gentileza e da concessão generosa.',
      'Forte espírito de equipe e desapego do próprio ego em prol da coletividade.',
      'Construção de relações de longo prazo baseadas em confiança e consideração mútua.',
    ],
    overuseRisks: [
      'Sensação recorrente de ressentimento e amargura silenciosa por sentir que suas opiniões nunca contam.',
      'Perda de influência e respeito na equipe quando a generosidade é percebida como falta de convicção.',
      'Privar o time de ideias brilhantes que poderiam corrigir rumos importantes do projeto.',
      'Criação de dependência e complacência com comportamentos abusivos ou desleixados de terceiros.',
    ],
    underuseRisks: [
      'Dificuldade em reconhecer os próprios erros e pouca flexibilidade para valorizar o outro.',
      'Percepção de frieza, inflexibilidade e pouca preocupação com o bem-estar da equipe.',
      'Atritos constantes por apego a detalhes irrelevantes que desgastam o clima.',
    ],
    eiReflectionQuestions: [
      'Estou cedendo por genuína generosidade ou por medo velado de ser rejeitado(a) ou criticado(a)?',
      'Minha concordância rápida está construindo harmonia real ou apenas uma calma aparente com mágoa represada?',
      'Se esse projeto der errado, vou me arrepender de não ter defendido a minha proposta com firmeza?',
    ],
    nvcActionSteps: [
      'Passo 1 (Observação): Valide explicitamente o ponto de vista da outra parte com precisão.',
      'Passo 2 (Sentimento): Comunique seu desejo de colaborar e manter a sinergia.',
      'Passo 3 (Necessidade): Estabeleça uma linha clara sobre quais necessidades básicas continuam precisando de atenção.',
      'Passo 4 (Pedido): Combine critérios de acompanhamento ("Eu apoio a sua ideia integralmente agora, e peço que façamos uma revisão conjunta daqui a 15 dias").',
    ],
    communicationTips: [
      'Ao concordar, explicite seus motivos nobres em vez de parecer omisso ou desinteressado.',
      'Treine a expressão de discordâncias suaves com tom acolhedor: "Eu compreendo seu ponto, e quero acrescentar uma preocupação...".',
      'Defina seus limites não-negociáveis antes de entrar em discussões sensíveis.',
    ],
    collaborationTips: [
      {
        targetMode: 'competing',
        advice:
          'Não ceda automaticamente; garanta que sua concessão seja valorizada e reconhecida como um ato estratégico deliberado.',
      },
      {
        targetMode: 'collaborating',
        advice:
          'Compartilhe suas ideias abertamente; um colaborador sincero deseja ouvir a sua contribuição genuína.',
      },
      {
        targetMode: 'compromising',
        advice:
          'Exija que a contraparte também ofereça uma parcela de esforço em vez de assumir todo o fardo da concessão.',
      },
      {
        targetMode: 'avoiding',
        advice:
          'Incentive o colega a se expressar, demonstrando que você está pronto(a) para acolher o que ele tem a dizer.',
      },
    ],
  },
};
