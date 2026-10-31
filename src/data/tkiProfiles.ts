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
    levelInterpretations: {
      low: {
        levelTitle: 'Baixa Competição (Percentil 0% - 25% | Pontos 0 a 3)',
        meaning:
          'Você raramente recorre à autoridade formal, imposição ou firmeza unilateral para resolver discordâncias. Tende a hesitar em bater o martelo sozinho, preferindo esperar por consensos ou ceder para não parecer autoritário.',
        behaviorSigns: [
          'Dificuldade em dizer um "não" categórico mesmo quando demandas ultrapassam limites aceitáveis.',
          'Receio de ser rotulado como agressivo, arrogante ou insensível diante dos colegas.',
          'Risco de postergar decisões difíceis ou impopulares que protegeriam os resultados do negócio.',
          'Frustração acumulada ao ver boas propostas suas serem preteridas por pessoas que falam mais alto.',
        ],
        calibrationTip:
          'Pratique a assertividade respeitosa: expressar convicções necessárias e impor limites operacionais não é agressão, é zelar pela sustentabilidade do seu trabalho e da equipe.',
      },
      medium: {
        levelTitle: 'Competição Equilibrada (Percentil 25% - 75% | Pontos 4 a 8)',
        meaning:
          'Você utiliza a assertividade e a autoridade com equilíbrio e maturidade. Sabe sustentar posições firmes e assumir o leme em situações urgentes ou de alta relevância estratégica, sem atropelar o diálogo cotidiano.',
        behaviorSigns: [
          'Capacidade de defender convicções com clareza e dados sem transformar o debate em disputa pessoal.',
          'Coragem para assumir decisões difíceis em momentos de crise ou quando a equipe está paralisada.',
          'Respeito aos limites alheios, sem abrir mão das metas centrais do projeto.',
          'Transita com naturalidade para a negociação ou colaboração quando a urgência não é crítica.',
        ],
        calibrationTip:
          'Continue calibrando pelo contexto: sempre verifique se o momento exige diretividade imediata ou se há espaço para construir soluções com o grupo.',
      },
      high: {
        levelTitle: 'Alta Competição (Percentil 75% - 100% | Pontos 9 a 12)',
        meaning:
          'Competir é seu reflexo automático sob pressão. Você foca intensamente na vitória da sua tese e no atingimento rápido de metas, podendo recorrer com frequência a argumentos contundentes ou autoridade para vencer divergências.',
        behaviorSigns: [
          'Sensação persistente de que "se eu não assumir o controle total, o resultado não sairá com a qualidade exigida".',
          'Impaciência com reuniões longas de alinhamento quando você já tem clareza da solução ideal.',
          'Risco de os pares e liderados se calarem ou concordarem por receio de confrontá-lo.',
          'Dificuldade em identificar pontos cegos que poderiam ser alertados pela contraparte.',
        ],
        calibrationTip:
          'Faça uma pausa deliberada de 3 segundos antes de contra-argumentar. Convide ativamente a equipe: "Qual é o maior risco dessa minha rota sob a perspectiva de vocês?".',
      },
    },
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
    levelInterpretations: {
      low: {
        levelTitle: 'Baixa Colaboração (Percentil 0% - 25% | Pontos 0 a 5)',
        meaning:
          'Você raramente investe tempo para investigar a fundo as preocupações mútuas e cocriar soluções conjuntas. Tende a preferir atalhos mais rápidos, como dividir concessões mecanicamente ou aceitar a imposição do outro.',
        behaviorSigns: [
          'Crença de que "discutir em profundidade demora demais e gera reuniões improdutivas".',
          'Tendência a se acomodar ou a fechar acordos superficiais que voltam a estourar semanas depois.',
          'Dificuldade em criar parcerias sinérgicas onde ambos os lados saiam fortalecidos.',
          'Sensação frequente de isolamento na resolução de problemas complexos.',
        ],
        calibrationTip:
          'Escolha um assunto estratégico esta semana e dedique 30 minutos exclusivamente para mapear as necessidades reais da outra parte antes de propor qualquer solução fechada.',
      },
      medium: {
        levelTitle: 'Colaboração Equilibrada (Percentil 25% - 75% | Pontos 6 a 9)',
        meaning:
          'Você demonstra excelente maturidade colaborativa. Reconhece o valor inestimável de uma solução ganha-ganha para questões cruciais, sem a ingenuidade de querer consenso unânime em assuntos operacionais rotineiros.',
        behaviorSigns: [
          'Sabe escutar com empatia e incorporar perspectivas complementares quando o tema é relevante.',
          'Não força reuniões exaustivas para assuntos banais que um meio-termo ou decisão rápida resolve.',
          'Gera comprometimento genuíno das pessoas na implementação dos acordos.',
          'Identifica com clareza quando a contraparte está de boa-fé ou quando tem postura competitiva.',
        ],
        calibrationTip:
          'Continue aplicando essa disciplina situacional: reserve a colaboração aprofundada para onde houver confiança, alto impacto e tempo disponível.',
      },
      high: {
        levelTitle: 'Alta Colaboração (Percentil 75% - 100% | Pontos 10 a 12)',
        meaning:
          'Você tem uma crença apaixonada na cooperação e tenta integrar todas as visões em absolutamente qualquer tema. Porém, isso pode gerar sobrecarga severa, lentidão no cronograma e exaustão por excesso de reuniões.',
        behaviorSigns: [
          'Inquietação com decisões rápidas que não tiveram a participação extensiva de todos.',
          'Dificuldade de aceitar soluções intermediárias práticas, buscando sempre o "ótimo inatingível".',
          'Frustração profunda quando a contraparte joga de forma estritamente competitiva.',
          'Risco de sobrecarregar a agenda própria e da equipe com encontros reflexivos em demasia.',
        ],
        calibrationTip:
          'Use o "timeboxing" (limite rígido de tempo): defina um prazo final para cocriar; se a solução ótima não surgir até a data limite, adote um compromisso provisório funcional.',
      },
    },
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
    levelInterpretations: {
      low: {
        levelTitle: 'Baixo Compromisso (Percentil 0% - 25% | Pontos 0 a 4)',
        meaning:
          'Você tem resistência em fazer concessões intermediárias ou dividir a diferença. Tende a enxergar as situações de forma dicotômica ("ou é feito do jeito ideal, ou não vale a pena"), o que pode emperrar o andamento de projetos.',
        behaviorSigns: [
          'Desconforto em abrir mão de qualquer especificação técnica em prol de cumprir um prazo.',
          'Dificuldade em aceitar a política e a barganha natural do ambiente organizacional.',
          'Risco de gerar impasses prolongados que paralisam a entrega de outras equipes.',
          'Pode ser rotulado por colegas como intransigente, teimoso ou perfeccionista.',
        ],
        calibrationTip:
          'Identifique previamente seus 2 pontos inegociáveis. Nos demais itens, pratique oferecer concessões intencionais para manter o fluxo de trabalho em movimento.',
      },
      medium: {
        levelTitle: 'Compromisso Equilibrado (Percentil 25% - 75% | Pontos 5 a 9)',
        meaning:
          'Você demonstra pragmatismo e equilíbrio notáveis. Sabe que um bom acordo funcional onde ambas as partes cedem um pouco é frequentemente a saída mais inteligente para destravar a esteira operacional.',
        behaviorSigns: [
          'Habilidade para propor alternativas do tipo "cada um dá um passo atrás" com justiça.',
          'Mantém a cadência das entregas sem comprometer o clima ou travar a equipe.',
          'Sensatez para reconhecer quando o tempo escasso não justifica mais discussões teóricas.',
          'Percebido como um profissional razoável, flexível e orientado a soluções.',
        ],
        calibrationTip:
          'Ao pactuar um meio-termo, estabeleça marcos formais de acompanhamento para avaliar se o acordo temporário atingiu a qualidade pretendida.',
      },
      high: {
        levelTitle: 'Alto Compromisso (Percentil 75% - 100% | Pontos 10 a 12)',
        meaning:
          'Seu primeiro impulso perante qualquer atrito é negociar a média pela metade. Embora destrave impasses com extrema rapidez, você pode estar produzindo soluções medíocres ("nem carne, nem peixe") que não resolvem as causas estruturais.',
        behaviorSigns: [
          'Pressa em dividir concessões apenas para fugir da tensão do debate.',
          'Perda da oportunidade de questionar premissas e descobrir soluções criativas ganha-ganha.',
          'Estímulo indireto para que outros inflacionem pedidos sabendo que você negociará pela metade.',
          'Sensação posterior de frustração de ambos os lados por não terem seus reais desejos atendidos.',
        ],
        calibrationTip:
          'Antes de propor dividir a diferença, pergunte: "Se tivermos 10 minutos para explorar uma terceira alternativa superior, o que poderíamos tentar antes de abrir mão?".',
      },
    },
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
    levelInterpretations: {
      low: {
        levelTitle: 'Baixa Evitação (Percentil 0% - 25% | Pontos 0 a 4)',
        meaning:
          'Você quase nunca recua, silencia ou adia uma discussão. Tende a abordar qualquer atrito no exato instante em que surge. Embora isso demonstre coragem, pode gerar exaustão contínua por "comprar todas as brigas", inclusive as banais.',
        behaviorSigns: [
          'Inquietação intensa diante de desacordos não resolvidos de imediato.',
          'Entrar em debates acalorados sobre temas de baixíssimo impacto estratégico.',
          'Insistir em discutir quando os ânimos da outra parte estão exaltados, agravando a tensão.',
          'Risco de cansaço mental próprio e da equipe por excesso de discussões de relacionamento.',
        ],
        calibrationTip:
          'Pratique a pausa de 24 horas: pergunte-se "Esse tema terá alguma relevância daqui a 3 meses?". Se a resposta for não, permita que a poeira assente antes de agir.',
      },
      medium: {
        levelTitle: 'Evitação Equilibrada (Percentil 25% - 75% | Pontos 5 a 8)',
        meaning:
          'Você demonstra excelente prudência emocional e senso tático de timing. Sabe selecionar quais batalhas merecem seu foco e não hesita em aguardar o momento ideal para conversar com serenidade.',
        behaviorSigns: [
          'Capacidade de dar um passo atrás para esfriar discussões explosivas.',
          'Discernimento claro entre temas prioritários que exigem firmeza e picuinhas secundárias.',
          'Não se deixa contaminar pelo calor do momento nem compra provocações baratas.',
          'Retoma o diálogo no momento oportuno com dados sólidos e clima favorável.',
        ],
        calibrationTip:
          'Ao adiar uma conversa sensível, sempre combine o momento de retorno: "Quero tratar disso com calma, vamos conversar amanhã às 14h", evitando que a pausa pareça indiferença.',
      },
      high: {
        levelTitle: 'Alta Evitação (Percentil 75% - 100% | Pontos 9 a 12)',
        meaning:
          'A evitação é sua rota de fuga automática perante o desconforto de qualquer atrito. Você prefere silenciar, mudar de assunto ou transferir a responsabilidade, deixando que divergências críticas acumulem sob a superfície.',
        behaviorSigns: [
          'Forte desconforto físico ou ansiedade perante a perspectiva de ter conversas difíceis.',
          'Acúmulo silencioso de insatisfações e mágoas que não são exteriorizadas.',
          'Decisões essenciais são tomadas por terceiros sem a sua contribuição porque você não se posicionou.',
          'Risco de a equipe interpretar a evitação como desinteresse, omissão ou falta de firmeza.',
        ],
        calibrationTip:
          'Quebre a barreira da evitação usando os 4 passos da CNV: inicie com um fato neutro ("Notei que temos duas ideias diferentes") e um pedido simples de diálogo de 15 minutos.',
      },
    },
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
    levelInterpretations: {
      low: {
        levelTitle: 'Baixa Acomodação (Percentil 0% - 25% | Pontos 0 a 2)',
        meaning:
          'Você raramente abre mão de suas preferências ou pontos de vista em prol do bem-estar ou da harmonia com a outra pessoa. Tem grande dificuldade em ceder, podendo transparecer frieza, inflexibilidade ou apego excessivo ao ego.',
        behaviorSigns: [
          'Sensação de "derrota" ou perda de autoridade toda vez que precisa acolher a sugestão alheia.',
          'Resistência em admitir que o colega tem uma solução melhor ou mais adequada para o momento.',
          'Pouca atenção às necessidades emocionais, ao reconhecimento ou aos anseios da equipe.',
          'Dificuldade em construir "crédito social" por meio de concessões generosas.',
        ],
        calibrationTip:
          'Exercite a concessão intencional: quando um assunto for muito mais relevante para o colega do que para você, diga abertamente: "Isso é vital para você e confio no seu critério, apoio a sua decisão".',
      },
      medium: {
        levelTitle: 'Acomodação Equilibrada (Percentil 25% - 75% | Pontos 3 a 7)',
        meaning:
          'Você equilibra com sabedoria a generosidade interpessoal e a defesa de suas prioridades essenciais. Sabe ser empático, flexível e acolhedor quando a coesão é importante, sem se anular ou perder o rumo.',
        behaviorSigns: [
          'Capacidade de ceder com desapego quando percebe que a outra parte possui a visão mais fundamentada.',
          'Cultiva um clima de respeito mútuo e reciprocidade sadia nas relações profissionais.',
          'Sabe dizer "não" com firmeza e elegância quando pedidos ultrapassam seus limites aceitáveis.',
          'Constrói parcerias leais e duradouras dentro e fora da organização.',
        ],
        calibrationTip:
          'Mantenha essa presença generosa: continue validando as contribuições dos colegas e promovendo a segurança psicológica no seu ambiente.',
      },
      high: {
        levelTitle: 'Alta Acomodação (Percentil 75% - 100% | Pontos 8 a 12)',
        meaning:
          'Acomodar é seu reflexo primordial para evitar desentendimentos ou rejeição. Você tende a ceder prontamente e colocar as necessidades de todos à frente das suas, o que gera sobrecarga crônica e ressentimento velado.',
        behaviorSigns: [
          'Medo constante de desagradar, criar mal-estar ou ser considerado "difícil de lidar".',
          'Concordar verbalmente com decisões que você desaprova internamente por receio de conflito.',
          'Sensação de cansaço e frustração de "sempre abrir mão de tudo enquanto os outros impõem a vontade deles".',
          'Risco de terceiros se aproveitarem da sua generosidade e transferirem demandas excessivas para você.',
        ],
        calibrationTip:
          'Antes de concordar automaticamente com um pedido, pergunte a si mesmo: "Ao dizer sim para essa pessoa, estou dizendo não para as minhas prioridades vitais?". Pratique estabelecer limites saudáveis.',
      },
    },
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
