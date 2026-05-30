const SUPPORT = {
  pixKey: "configure-sua-chave-pix",
};

const SITE_EDITOR_KEY = "becoslab.site-editor.v1";

function editorStatusMode() {
  try {
    return JSON.parse(localStorage.getItem(SITE_EDITOR_KEY) || "{}")?.status?.current;
  } catch {
    return null;
  }
}

const CURRENT_STATUS = editorStatusMode() || "foco";
// opções: "foco", "troca", "colaboracao", "trabalho"

const STATUS_MODES = {
  foco: {
    short: "SISTEMA: FOCO",
    title: "Foco",
    description: "Sistema fechado. Construção ativa.\nApenas observação.",
    technical: "Core em execução interna. Signal externo em modo leitura.",
    primaryAction: "Acompanhar Sistema",
    availability: {
      pitch: false,
      logs: false,
      queue: true,
      trabalho: false,
    },
  },

  troca: {
    short: "SISTEMA: SINCRONIZAÇÃO",
    title: "Troca",
    description: "Aberto para troca técnica e análise.\nFeedback direto e discussão de sistemas.",
    technical: "Signal aberto para leitura crítica, sync técnico e análise objetiva.",
    primaryAction: "Troca Técnica",
    availability: {
      pitch: false,
      logs: true,
      queue: true,
      trabalho: false,
    },
  },

  colaboracao: {
    short: "SISTEMA: COLABORAÇÃO",
    title: "Colaboração",
    description: "Aberto para ideias e projetos.\nPropostas estruturadas são bem-vindas.",
    technical: "Architecture aberta para conexão, proposta clara e construção conjunta.",
    primaryAction: "Pitch de Projeto",
    availability: {
      pitch: true,
      logs: true,
      queue: true,
      trabalho: false,
    },
  },

  trabalho: {
    short: "SISTEMA: OPERAÇÃO",
    title: "Trabalho",
    description: "Aberto para execução direta.\nApps, sites, dashboards, produto e mídia.",
    technical: "Core disponível para demanda objetiva, escopo claro e entrega aplicada.",
    primaryAction: "Contato Direto",
    availability: {
      pitch: true,
      logs: true,
      queue: true,
      trabalho: true,
    },
  },
};

const ACTIVE_STATUS = STATUS_MODES[CURRENT_STATUS] || STATUS_MODES.foco;
const ACTIVE_STATUS_KEY = STATUS_MODES[CURRENT_STATUS] ? CURRENT_STATUS : "foco";

const INTERACTION_MENU = [
  {
    id: "pitch",
    name: "Pitch de Projeto",
    subtitle: "Ideia, projeto ou sistema para organizar.",
    subject: "[PITCH]",
    message: "[PITCH] Quero apresentar uma ideia/projeto para organizar em blueprint.",
    enabledIn: ["colaboracao", "trabalho"],
  },

  {
    id: "logs",
    name: "Troca Técnica",
    subtitle: "Feedback direto, análise e visão de arquitetura.",
    subject: "[LOGS]",
    message: "[LOGS] Quero trocar visão técnica sobre um sistema.",
    enabledIn: ["troca", "colaboracao", "trabalho"],
  },

  {
    id: "queue",
    name: "Acompanhar Sistema",
    subtitle: "Receber mudanças futuras do Lab.",
    subject: "[QUEUE]",
    message: "[QUEUE] Quero acompanhar as próximas mudanças do Beco's Lab.",
    enabledIn: ["foco", "troca", "colaboracao", "trabalho"],
  },

  {
    id: "trabalho",
    name: "Contato Direto",
    subtitle: "Apps, sites, dashboards, produto ou mídia.",
    subject: "[OP]",
    message: "[OP] Quero falar sobre um trabalho com o Beco's Lab.",
    enabledIn: ["trabalho"],
  },
];

const CONTACT_MESSAGES = {
  pitch: {
    subject: "[PITCH]",
    whatsapp: "[PITCH] Quero apresentar uma ideia/projeto para organizar em blueprint.",
    email: "[PITCH] Quero apresentar uma ideia/projeto para organizar em blueprint.",
  },

  logs: {
    subject: "[LOGS]",
    whatsapp: "[LOGS] Quero trocar visão técnica sobre um sistema.",
    email: "[LOGS] Quero trocar visão técnica sobre um sistema.",
  },

  queue: {
    subject: "[QUEUE]",
    whatsapp: "[QUEUE] Quero acompanhar as próximas mudanças do Beco's Lab.",
    email: "[QUEUE] Quero acompanhar as próximas mudanças do Beco's Lab.",
  },

  trabalho: {
    subject: "[OP]",
    whatsapp: "[OP] Quero falar sobre um trabalho com o Beco's Lab: app, site, dashboard, produto ou mídia.",
    email: "[OP] Quero falar sobre um trabalho com o Beco's Lab: app, site, dashboard, produto ou mídia.",
  },
};

const CONTACT_TAGS = {
  apoie: {
    label: "Apoie",
    title: "Apoio, patrocínio ou contribuição",
    subject: "[APOIO]",
    hint: "Para falar sobre apoio, patrocínio, contribuição ou Pix sem misturar com contratação.",
    message: "[APOIO] Quero falar sobre apoio ao Beco's Lab.",
  },
  mostre: {
    label: "Mostre",
    title: "Mostrar uma ideia",
    subject: "[PITCH]",
    hint: "Para mandar uma ideia, app, jogo ou sistema e transformar em blueprint claro.",
    message: CONTACT_MESSAGES.pitch.email,
    signalId: "pitch",
  },
  acompanhar: {
    label: "Acompanhar",
    title: "Acompanhar novidades",
    subject: "[QUEUE]",
    hint: "Para receber novidades, updates de projetos e acompanhar os lançamentos do Lab.",
    message: CONTACT_MESSAGES.queue.email,
    signalId: "queue",
  },
  contrate: {
    label: "Contrate",
    title: "Contratar o Beco's Lab",
    subject: "[OP]",
    hint: "Sites, apps, dashboards, UX de produto, sistemas criativos e vídeos.",
    message: CONTACT_MESSAGES.trabalho.email,
    signalId: "trabalho",
  },
};

const SUPPORT_HUB_ACTIONS = [
  { id: "apoie", label: "Apoie" },
  { id: "mostre", label: "Mostre", signalId: "pitch" },
  { id: "acompanhar", label: "Acompanhar", signalId: "queue" },
  { id: "contrate", label: "Contrate", signalId: "trabalho" },
];

const SUPPORT_COPY = [
  "Sustentar o desenvolvimento",
  "Manter o sistema ativo",
  "Fortalecer o Core",
  "Apoiar a construção",
];

const STATUS_UI_LINES = {
  foco: {
    headline: "Sistema em foco",
    line: "Construção ativa. Entrada externa pausada.",
  },

  troca: {
    headline: "Signal aberto",
    line: "Troca técnica, análise e feedback direto.",
  },

  colaboracao: {
    headline: "Aberto para conexão",
    line: "Ideias estruturadas e projetos em diálogo.",
  },

  trabalho: {
    headline: "Disponível para execução",
    line: "Apps, sites, dashboards, produto e mídia.",
  },
};

const PHASE_TITLES = [
  "Ideia",
  "Infraestrutura",
  "Design",
  "Fluxo",
  "Engine",
  "Persistencia",
  "Conexao",
  "Refino",
  "Ataque",
  "Produto Vivo",
];

const DASHBOARD_STATE_KEY = "becoslab.private-dashboard.v1";
const PROJECT_META_STORAGE_KEY = "becoslab.project-meta.v1";
const DEFAULT_PROJECT_DIFFICULTY = "medio";
const PROJECT_DIFFICULTIES = [
  { id: "muito-facil", label: "Muito fácil" },
  { id: "facil", label: "Fácil" },
  { id: "medio", label: "Médio" },
  { id: "dificil", label: "Difícil" },
  { id: "muito-dificil", label: "Muito difícil" },
];

const projects = [
  {
    id: "glyph",
    title: "GLYPH",
    githubUrl: "https://github.com/arabeco/game-of-life",
    siteUrl: "https://glyph.life",
    playStoreUrl: "",
    level: 8,
    line: "Sistema de ciclos, ações e progresso diário",
    impact: "Arquitetura de comportamento com rotina, recompensa e análise",
    description:
      "O projeto principal do laboratório: metas, rotina e progresso pessoal com lógica de construção de império.",
    palette: ["#66e7cd", "#d8b76a", "#243f78", "#090b16"],
    image: "assets/glyph.jpg",
    focalPoint: "50% 50%",
    previewZoom: 2.08,
    slides: [
      {
        title: "",
        text: "Sistema de ciclos, ações e progresso diário\nArquitetura de comportamento com rotina, recompensa e análise",
        image: "",
      },
      {
        title: "Interface operacional",
        text: "Planner, painel diário, arenas e relatórios em fluxo único",
        image: "",
      },
      {
        title: "Lógica de progresso",
        text: "Ações concluídas alimentam XP, ciclos, recompensas e legado",
        image: "",
      },
      {
        title: "Uso contínuo",
        text: "O usuário organiza o dia, executa ações e fecha ciclos",
        image: "",
      },
      {
        title: "Ciclo do sistema",
        text: "Refino\nPróximo: Validação",
        image: "",
      },
    ],
  },
  {
    id: "kingsworld",
    title: "KingsWorld",
    githubUrl: "https://github.com/kingsworldgame/King-s-World",
    siteUrl: "",
    level: 4,
    line: "Jogo de estratégia e sobrevivência persistente",
    impact: "Sistema de mundo com cidades, influência e decisões de temporada",
    description:
      "Um mundo de reconstrucao onde administrar recursos, proteger pessoas e expandir territorio fazem parte da mesma tensao.",
    palette: ["#f6a15f", "#d8b76a", "#264b55", "#080912"],
    image: "assets/kingsworld.jpg",
    focalPoint: "50% 50%",
    previewZoom: 1.34,
    slides: [
      {
        title: "",
        text: "Jogo persistente de estratégia e sobrevivência\nSistema de mundo por cidades, influência e decisões de temporada",
        image: "",
      },
      {
        title: "Comando mobile",
        text: "Interface central para cidade, mapa e operações",
        image: "",
      },
      {
        title: "Influência total",
        text: "Pontuação formada por cidades, tropas, heróis e estruturas",
        image: "",
      },
      {
        title: "Temporada de 120 dias",
        text: "Expansão, defesa, diplomacia e marcha final",
        image: "",
      },
      {
        title: "Ciclo do sistema",
        text: "Sistema\nPróximo: Refino",
        image: "",
      },
    ],
  },
  {
    id: "mind-practice",
    title: "Mind Practice",
    githubUrl: "",
    siteUrl: "",
    level: 6,
    line: "Simulador de reatividade social sob pressão",
    impact: "Sistema de calibração comportamental por escolhas",
    description:
      "Um projeto sobre mente, reflexo e leitura de comportamento: escolhas rapidas revelando padroes reais.",
    palette: ["#8aa4ff", "#d8b76a", "#3a315f", "#070912"],
    image: "assets/mindpractice.jpg",
    focalPoint: "49% 50%",
    previewZoom: 1.5,
    slides: [
      {
        title: "",
        text: "Simulador de reatividade social sob pressão\nSistema de calibração comportamental por escolhas",
        image: "",
      },
      {
        title: "Interface de cena",
        text: "Situações sociais apresentadas em modo imersivo",
        image: "",
      },
      {
        title: "Eixos de perfil",
        text: "Cada resposta altera traços comportamentais",
        image: "",
      },
      {
        title: "Runs de treino",
        text: "Cada sessão gera score e deslocamento do perfil",
        image: "",
      },
      {
        title: "Ciclo do sistema",
        text: "Refino\nPróximo: Validação",
        image: "",
      },
    ],
  },
  {
    id: "elite-50",
    title: "Elite 50",
    githubUrl: "",
    siteUrl: "",
    level: 4,
    line: "Sistema competitivo baseado em estratégia e gestão",
    impact: "Jogadores, decisões e performance em ambiente dinâmico",
    description:
      "Uma liga pensada como ecossistema competitivo: jogadores, leitura de meta, escolhas de gestao e comunidade em torno da disputa.",
    palette: ["#ff7a95", "#d8b76a", "#5a2942", "#090a12"],
    image: "assets/elite50.jpg",
    focalPoint: "50% 54%",
    previewZoom: 1.24,
    previewShiftY: "-2%",
    slides: [
      {
        title: "",
        text: "Sistema competitivo baseado em estratégia e gestão\nJogadores, decisões e performance em ambiente dinâmico",
        image: "",
      },
      {
        title: "Interface de controle",
        text: "Gestão de equipe, decisões e acompanhamento de desempenho",
        image: "",
      },
      {
        title: "Mecânica competitiva",
        text: "Pontuação baseada em escolhas, resultados e adaptação",
        image: "",
      },
      {
        title: "Ambiente real",
        text: "Simulação de competição contínua entre jogadores",
        image: "",
      },
      {
        title: "Ciclo do sistema",
        text: "Sistema\nPróximo: Refino",
        image: "",
      },
    ],
  },
  {
    id: "scoretrader",
    title: "SPECTRE",
    githubUrl: "",
    siteUrl: "",
    level: 7,
    line: "Robô de operação e automação para MT5",
    impact: "Estratégia, execução e leitura de mercado em um mesmo sistema",
    description:
      "Um sistema voltado para operação automatizada no MetaTrader 5, unindo lógica de entrada, gestão e execução contínua.",
    palette: ["#6dd3ff", "#d8b76a", "#1f4d63", "#071019"],
    image: "assets/scoretrader.png",
    focalPoint: "50% 50%",
    previewZoom: 1.02,
    slides: [
      {
        title: "",
        text: "Robô de operação e automação para MT5\nEstratégia, execução e leitura de mercado em um mesmo sistema",
        image: "",
      },
      {
        title: "Interface operacional",
        text: "Painel para parâmetros, sinais e acompanhamento das execuções",
        image: "",
      },
      {
        title: "Lógica de mercado",
        text: "Regras, filtros e gatilhos conectando leitura e ação automatizada",
        image: "",
      },
      {
        title: "Uso contínuo",
        text: "Execução em ambiente real com controle de risco e ajuste de comportamento",
        image: "",
      },
      {
        title: "Ciclo do sistema",
        text: "Conexão\nPróximo: Refino",
        image: "",
      },
    ],
  },
  {
    id: "studio",
    title: "Studio",
    githubUrl: "",
    siteUrl: "",
    level: 6,
    line: "Criação visual, simbólica e narrativa",
    impact: "Sistemas que transformam ideia em forma",
    description: "Um hub interno para projetos de criação visual, simbólica e narrativa.",
    palette: ["#c084fc", "#d8b76a", "#284c80", "#070711"],
    image: "assets/studio.jpg",
    focalPoint: "50% 50%",
    previewZoom: 2.42,
    previewShiftX: "3%",
    previewShiftY: "1%",
    isGateway: true,
    subItems: [
      {
        id: "mtg-dota",
        title: "MTG Dota",
        githubUrl: "",
        siteUrl: "",
        level: 9,
        line: "Sistema de cartas inspirado em Magic e Dota",
    impact: "Mecânicas e personagens em formato jogável",
        description:
          "Um sistema visual de cartas que traduz personagens, poderes e itens em composicoes colecionaveis.",
        palette: ["#a3e635", "#d8b76a", "#31504f", "#080b12"],
        image: "assets/mtgdota.jpg",
        focalPoint: "50% 46%",
        previewZoom: 1.58,
        slides: [
          {
            title: "",
        text: "Sistema de criação de cartas inspirado em Magic e Dota\nFramework visual de mecânicas e personagens",
            image: "",
          },
          {
            title: "Interface de cartas",
            text: "Design e composição visual de habilidades e atributos",
            image: "",
          },
          {
        title: "Sistema de mecânicas",
            text: "Custos, efeitos, sinergias e lógica de jogo",
            image: "",
          },
          {
            title: "Aplicação prática",
            text: "Cartas prontas para uso digital ou físico",
            image: "",
          },
          {
            title: "Ciclo do sistema",
            text: "Polido\nPróximo: Vivo",
            image: "",
          },
        ],
      },
      {
        id: "tarot-deck",
        metaId: "tarot",
        title: "Tarot",
        githubUrl: "",
        siteUrl: "",
        level: 10,
        line: "Sistema simbólico baseado em cartas",
        impact: "Arquétipos e interpretação visual",
        description:
          "Um deck de tarot autoral onde cada carta funciona como imagem, simbolo e fragmento de mundo.",
        palette: ["#66e7cd", "#d8b76a", "#243f78", "#070912"],
        image: "assets/tarot.jpg",
        focalPoint: "50% 48%",
        previewZoom: 1.18,
        slides: [
          {
            title: "",
            text: "Sistema simbólico baseado em cartas de tarot\nEstrutura de arquétipos e interpretação",
            image: "",
          },
          {
            title: "Cartas visuais",
            text: "Composição gráfica e identidade simbólica",
            image: "",
          },
          {
            title: "Sistema de leitura",
            text: "Combinação de cartas gera interpretação",
            image: "",
          },
          {
            title: "Aplicação prática",
            text: "Uso para reflexão e análise simbólica",
            image: "",
          },
          {
            title: "Ciclo do sistema",
            text: "Vivo",
            image: "",
          },
        ],
      },
      {
        id: "sabedoria-animada",
        title: "Sabedoria Animada",
        githubUrl: "",
        siteUrl: "",
        level: 6,
        line: "Canal de conhecimento visual",
        impact: "Ideias complexas traduzidas em narrativa",
        image: "assets/sabedoriaanimada.jpg",
        focalPoint: "50% 54%",
        previewZoom: 1.24,
        slides: [
          {
            title: "",
            text: "Canal de vídeos sobre conhecimento e interpretação do mundo\nSistema de tradução de ideias complexas em narrativa visual",
            image: "",
          },
          {
            title: "Universo de temas",
            text: "História, comportamento, filosofia, poder e mistérios",
            image: "",
          },
          {
            title: "Estrutura em séries",
            text: "Cada vídeo conecta conceitos em uma linha maior",
            image: "",
          },
          {
            title: "Interação do público",
            text: "O espectador participa e influencia os próximos temas",
            image: "",
          },
          {
            title: "Ciclo do sistema",
            text: "Refino\nPróximo: Validação",
            image: "",
          },
        ],
      },
    ],
    slides: [],
  },
];

const PROJECT_DECK_OVERRIDES = {
  glyph: {
    slides: [
      {
        title: "Resumo",
        text: "GLYPH e um app de evolucao pessoal gamificada que transforma objetivos, rotina e identidade em uma jornada estruturada. O usuario cria arenas da vida, executa acoes, atravessa ciclos, desbloqueia campanhas, registra historia e constroi legado.\n\nO sistema conecta Planner, Painel Diario, Ciclos, Relatorios, Historico, Eras, Legado, Oraculo, Mundo Social, Clas, Loja, Arsenal e Perfil Soberano em uma experiencia unica: viver a propria evolucao como um jogo serio, mensuravel e simbolico.",
        image: "",
      },
      {
        title: "Visao",
        text: "O GLYPH foi lapidado para nao ser apenas uma lista de tarefas. Ele organiza a vida como uma arquitetura de manifestacao: campanhas dao direcao, arenas definem campos de batalha, acoes viram execucao concreta e ciclos transformam esforco em leitura de nivel.\n\nA visao do produto e criar um sistema onde progresso nao desaparece. Cada decisao, tarefa, campanha, vinculo, conquista e ciclo encerrado pode virar historico, era, titulo, skin, relatorio, imagem compartilhavel ou peca do legado do usuario.",
        image: "",
      },
      {
        title: "Sistema",
        text: "O sistema combina execucao diaria, progressao, identidade, social e narrativa pessoal. A entrada do usuario passa por arenas, acoes, Planner e SITREP; depois ganha profundidade em ciclos, relatorios, historico, eras e legado.\n\nEntre os modulos centrais estao Campanhas, Codex e Mentoria, Arenas, Acoes, Planner, Painel Diario, Deep Focus, Descanso, Ciclos, Relatorios, Historico, Eras e Legado. Essa espinha transforma meta abstrata em caminho visivel, jogavel e auditavel.",
        image: "",
      },
      {
        title: "Sistema Parte 2",
        text: "Ao redor da espinha principal, o GLYPH adiciona camadas de inteligencia, status, economia e comunidade. O Oraculo orienta, interpreta e conecta momentos importantes; Maestria e Quiz calibram leitura de maturidade; Loja, Forja, Arsenal, Patentes e Perfil Soberano constroem identidade.\n\nO Mundo Social amplia a experiencia com vinculos, amigos, mentoria, parceria, competicao, clas, missoes coletivas e quests de temporada. O app nao vende apenas produtividade: vende pertencimento, trajetoria, simbolo, conquista e construcao de uma versao mais forte de si.",
        image: "",
      },
    ],
    state: {
      1: "Fechado",
      2: "Fechado",
      3: "Fechado",
      4: "Fechado",
      5: "Fechado",
      6: "Fechado",
      7: "Fechado",
      8: "Atual",
      9: "Em andamento",
      10: "Pendente",
    },
  },
  kingsworld: {
    slides: [
      {
        title: "Resumo",
        text: "KingsWorld e um jogo mobile de estrategia em mundos sazonais. Cada jogador lidera um reino, escolhe um rei, desenvolve cidades, recruta herois, explora o mapa e tenta acumular influencia suficiente para atravessar o Portal Central antes do fim da temporada.\n\nA proposta e unir guerra, politica, expansao e sobrevivencia em uma experiencia mais clara que jogos tradicionais de aldeias. O foco nao e controlar dezenas de telas repetitivas, mas tomar boas decisoes sobre crescimento, defesa, sociedade e legado.",
        image: "",
      },
      {
        title: "Visao",
        text: "O jogo gira em torno de uma campanha com comeco, meio e fim. Cada mundo avanca por dias, cria pressao de tempo e forca o jogador a escolher entre fundar, anexar, conquistar, proteger ou investir melhor nas cidades que ja possui.\n\nA vitoria nao vem apenas de ter mais tropas. O jogador precisa construir um imperio estavel, influente e capaz de resistir ate o encerramento do mundo. A influencia e o grande objetivo: um score soberano formado por infraestrutura, governo, militar, sociedade e legado.",
        image: "",
      },
      {
        title: "Sistema",
        text: "Cada cidade evolui por 5 frentes principais: Governo, Producao, Sociedade, Quartel e Muralha. O nivel de cada frente nasce diretamente das skills investidas nela, sem botao generico de upgrade separado.\n\nEssas escolhas definem producao, defesa, populacao, tropas, estabilidade, capacidade de expansao e ritmo de crescimento. A cidade deixa de ser apenas um numero e passa a refletir a build real escolhida pelo jogador.",
        image: "",
      },
      {
        title: "Sistema Parte 2",
        text: "O mapa funciona por exploracao, territorio conhecido e risco progressivo. O jogador descobre cidades, regioes vazias, oportunidades, inimigos, saqueadores, demonios, ruinas e eventos especiais ao longo da campanha.\n\nExpandir aumenta poder, mas tambem exposicao. Uma cidade nova pode acelerar a producao e ampliar influencia, mas tambem pode abrir novas frentes de defesa. O desafio e crescer sem perder controle politico, militar e social.",
        image: "",
      },
    ],
    state: {
      1: "Fechado",
      2: "Fechado",
      3: "Fechado",
      4: "Atual",
      5: "Fechado",
      6: "Fechado",
      7: "Proximo gate",
      8: "Pendente",
      9: "Pendente",
      10: "Pendente",
    },
  },
  "elite-50": {
    slides: [
      {
        title: "Resumo",
        text: "Elite50 e um manager game mobile-first de futebol futurista em tempo real. Ele organiza mundo, clube, elenco, tatica, treino, mercado, noticias e partidas dentro de um loop continuo de temporada, onde o jogador toma decisoes de tecnico e ve o impacto delas no desempenho do time.\n\nO sistema roda como um app conectado a estado local e backend, transformando gestao esportiva, leitura de elenco, score, progressao de atletas e calendario em uma experiencia repetivel, mensuravel e persistente.",
        image: "",
      },
      {
        title: "Visao",
        text: "O Elite50 foi lapidado para fazer o jogador sentir que comanda um clube vivo, e nao apenas uma colecao de telas. A proposta e unir rotina curta, atmosfera forte, identidade premium e consequencia real em elenco, score, tatica, timing e progresso de carreira.\n\nA logica foi refinada para equilibrar clareza, profundidade e retencao. O objetivo e manter o app facil de entender no comeco, sem perder densidade suficiente para sustentar apego ao clube, leitura do mundo e retorno diario.",
        image: "",
      },
      {
        title: "Sistema",
        text: "O sistema combina montagem de elenco, teto de score, posicoes, lineup, ranking de atletas, draft, mercado, clubes, noticias, calendario e temporadas continuas. A forca do time nao depende de um unico numero, mas da confluencia entre qualidade individual, encaixe do elenco, escolhas do treinador e momento do mundo.\n\nEntre os elementos analisados estao score total, posicao de cada atleta, distribuicao do elenco, lineup minimo, tatica, treino, progressao de jogador, propostas de clube, janela de entrada, ranking global, ranking de clubes, radar de oportunidades e leitura de fase da temporada.",
        image: "",
      },
      {
        title: "Sistema Parte 2",
        text: "Depois de montar a base, o Elite50 entra no loop vivo da temporada. A logica busca fazer cada partida devolver informacao util ao jogador, sem quebrar o ritmo do mundo nem transformar a gestao em microgerenciamento confuso.\n\nA gestao combina match engine, peso de atributos, influencia de posicao, quimica, treino, entendimento tatico, relatorios de jogo, noticias dinamicas, progressao, propostas para tecnicos, modo sem clube, transicao automatica de temporada e persistencia de mundo.",
        image: "",
      },
    ],
    state: {
      1: "Fechado",
      2: "Fechado",
      3: "Fechado",
      4: "Atual",
      5: "Fechado",
      6: "Em fechamento",
      7: "Proximo gate",
      8: "Pendente",
      9: "Pendente",
      10: "Pendente",
    },
  },
  scoretrader: {
    slides: [
      {
        title: "Resumo",
        text: "O Spectre e a nova engine automatizada de day trade do ScoreTrader para mini indice. Ele monitora o mercado em tempo real, identifica setups da estrategia V35 e executa operacoes com regras objetivas de entrada, stop, alvo e protecao de risco.\n\nO sistema roda em um terminal Python conectado ao MetaTrader 5, com operacao autorizada manualmente pelo usuario. A proposta e transformar leitura tecnica, zonas de preco, VWAP, volume e gestao de banca em uma rotina repetivel, auditavel e controlada.",
        image: "",
      },
      {
        title: "Visao",
        text: "O Spectre foi desenhado para operar contextos especificos do indice: rompimento de abertura, pullback em tendencia, rejeicao na VWAP e sinais defensivos do nucleo V35.\n\nA logica atual busca equilibrar precisao, frequencia util por dia e risco conhecido. O foco nao e operar qualquer movimento, mas agir quando o mercado oferece estrutura suficiente para uma entrada com stop curto, alvo objetivo e execucao controlada.",
        image: "",
      },
      {
        title: "Sistema",
        text: "O sistema combina leitura de VWAP, tendencia, abertura, rompimento, pullback, rejeicao e volume. A entrada nao depende de um unico indicador, mas de familias de setups que representam comportamentos diferentes do mercado.\n\nEntre os motores analisados estao V26B Core, OR Break, EMA Pullback e VWAP Reject. Cada familia possui criterios proprios de entrada, direcao, horario, stop e target. O Spectre nao trata todo trade igual: cada oportunidade nasce com sua propria logica de risco.",
        image: "",
      },
      {
        title: "Sistema Parte 2",
        text: "Depois da entrada, o Spectre usa gestao objetiva da posicao. A logica trabalha com stop no servidor, alvo fixo por engine, limite diario de perda e bloqueio automatico quando o risco sai do planejado.\n\nA operacao tambem inclui alocacao diaria de banca, comando manual de ligar/desligar, validacao do MT5, logs de execucao, magic number proprio, arquivos separados de controle e registro de trades para auditoria posterior.",
        image: "",
      },
    ],
    state: {
      1: "Fechado",
      2: "Fechado",
      3: "Fechado",
      4: "Fechado",
      5: "Engine V35 · fechado",
      6: "Fechado",
      7: "Conexao MT5 · fechado",
      8: "Robo Spectre · em validacao",
      9: "Paper live e auditoria · proximo gate",
      10: "Pendente",
    },
  },
};

const projectBaseState = new Map();
captureProjectBaseState(projects);
applySharedProjectMeta(projects);

const orbitField = document.querySelector("#orbitField");
const labStage = document.querySelector("#labStage");
const core = document.querySelector("#core");
const coreRevealButton = document.querySelector("#coreRevealButton");
const heroProjectsButton = document.querySelector("#heroProjectsButton");
const sceneBackButton = document.querySelector("#sceneBackButton");
const partnershipForwardButton = document.querySelector("#partnershipForwardButton");
const partnershipField = document.querySelector("#partnershipField");
const hero = document.querySelector("#hero");
const heroCopy = document.querySelector("#heroCopy");
const focusPanel = document.querySelector("#focusPanel");
const statusPanel = document.querySelector("#statusPanel");
const projectModal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalStatus = document.querySelector("#modalStatus");
const modalDescription = document.querySelector("#modalDescription");
const presentationButton = document.querySelector("#presentationButton");
const supportTrigger = document.querySelector("#supportTrigger");
const supportTriggerLabel = document.querySelector("#supportTrigger span");
const supportKeyButton = document.querySelector("#supportKeyButton");
const supportTitle = document.querySelector("#supportTitle");
const supportPixKey = document.querySelector("#supportPixKey");
const supportModal = document.querySelector("#supportModal");
const copyPixButton = document.querySelector("#copyPixButton");
const showQrButton = document.querySelector("#showQrButton");
const copyFeedback = document.querySelector("#copyFeedback");
const qrWrap = document.querySelector("#qrWrap");
const qrCode = document.querySelector("#qrCode");
const supportStatusPanel = document.querySelector("#supportStatusPanel");
const supportSignalGrid = document.querySelector("#supportSignalGrid");
const contactForm = document.querySelector("#contactForm");
const contactTagButtons = document.querySelectorAll("[data-contact-tag]");
const contactTagInput = document.querySelector("#contactTagInput");
const contactModeTitle = document.querySelector("#contactModeTitle");
const contactHint = document.querySelector("#contactHint");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#contactMessage");
const contactSubmit = document.querySelector("#contactSubmit");
const contactPixButton = document.querySelector("#contactPixButton");
const signalModal = document.querySelector("#signalModal");
const signalKicker = document.querySelector("#signalKicker");
const signalTitle = document.querySelector("#signalTitle");
const signalText = document.querySelector("#signalText");
const signalDetails = document.querySelector("#signalDetails");
const signalActions = document.querySelector("#signalActions");
const slideshow = document.querySelector("#slideshow");
const closeSlideshow = document.querySelector("#closeSlideshow");
const previousSlide = document.querySelector("#previousSlide");
const nextSlide = document.querySelector("#nextSlide");
const slideImage = document.querySelector("#slideImage");
const slideFrame = document.querySelector(".slide-frame");
const slideKicker = document.querySelector("#slideKicker");
const slideTitle = document.querySelector("#slideTitle");
const slideText = document.querySelector("#slideText");
const slideSystemState = document.querySelector("#slideSystemState");
const slideActions = document.querySelector("#slideActions");
const slideDots = document.querySelector("#slideDots");
const closeProjectButton = document.querySelector("[data-close-project]");
const closeSupportButton = document.querySelector("[data-close-support]");
const closeSignalButton = document.querySelector("[data-close-signal]");
const signalLaunchButtons = document.querySelectorAll("[data-signal-launch]");
const partnershipNavButtons = document.querySelectorAll("[data-open-partnerships]");
const sceneNavLinks = document.querySelectorAll("[data-scene-nav]");

let selectedProject = null;
let orbitRevealed = false;
let activeScene = "home";
let activePartnershipCenterIndex = 1;
let activePartnershipItemId = "cloak-collab";
let activeSlideIndex = 0;
let lastFocusedElement = null;
let supportContextProject = null;
const visualCache = new Map();
const idleFocusPanelMarkup = `
  <p class="focus-kicker">Sistema em repouso</p>
  <h2>Órbita latente</h2>
  <p class="focus-line">Projetos autorais conectados por um núcleo criativo.</p>
  <p class="focus-impact">O laboratório aguarda o primeiro sinal.</p>
`;
const dormantHeroFocusPanelMarkup = `
  <p class="focus-kicker">Core em espera</p>
  <h2>Ative a órbita</h2>
  <p class="focus-line">Toque no núcleo para revelar os sistemas conectados.</p>
`;
const revealedHeroFocusPanelMarkup = `
  <p class="focus-kicker">Sistema em repouso</p>
  <h2>Escolha um sistema</h2>
  <p class="focus-line">Selecione um projeto para abrir o foco inicial.</p>
  <p class="focus-impact">Toque duas vezes no mesmo projeto para entrar na apresentação.</p>
`;

const PARTNERSHIP_LAYOUTS = {
  compact: {
    connection: [
      { x: 70, y: 38 },
      { x: 32, y: 42 },
      { x: 70, y: 66 },
      { x: 30, y: 66 },
    ],
    project: [
      { x: 32, y: 66 },
      { x: 68, y: 66 },
      { x: 30, y: 36 },
      { x: 70, y: 36 },
      { x: 50, y: 76 },
      { x: 50, y: 24 },
    ],
  },
};

const partnershipCenters = [
  {
    id: "becos-lab",
    title: "Beco's Lab",
    type: "Núcleo",
    owner: "Afonso",
    image: "assets/becoslab.jpg",
    summary: "Núcleo autoral de apps, sistemas, sites, jogos, vídeos, dashboards e organização de projetos complexos.",
    connections: [],
    projects: [],
  },
  {
    id: "luigis-lab",
    title: "Luigi's Lab",
    type: "Parceiro",
    owner: "Luigi",
    image: "",
    summary: "Centro parceiro de exemplo para mostrar como um projeto externo pode aparecer sem virar rede social.",
    connections: [],
    projects: [
      {
        id: "cloak-collab",
        itemType: "project",
        title: "Cloak",
        label: "Jogo app",
        ownership: "Projeto externo",
        participation: "Leitura de produto, fluxo e maturidade",
        level: 5,
        phase: "Engine",
        status: "Exemplo de parceria",
        image: "",
        summary:
          "Cloak é um jogo/app de detetive do Luigi's Lab, conectado como projeto externo na árvore de parcerias.",
        labRole:
          "Participação imaginada para exemplo: clareza do loop investigativo, organização de telas, maturidade do produto e leitura do próximo passo.",
        nextStep: "Substituir pelos dados reais quando a parceria existir.",
      },
    ],
  },
];

function normalizedPhase(phase) {
  return Math.max(1, Math.min(10, Number(phase) || 1));
}

function phaseProgressValue(project) {
  if (Number.isFinite(Number(project.completionPercent))) {
    return Math.max(0, Math.min(100, Number(project.completionPercent)));
  }

  return normalizedPhase(project.level) * 10;
}

function phaseTitle(phase) {
  return PHASE_TITLES[normalizedPhase(phase) - 1] || PHASE_TITLES[0];
}

function phaseStatus(project, options = {}) {
  const phase = normalizedPhase(project.level);
  const status = `${phaseTitle(phase)} · Fase ${phase}${options.full ? " de 10" : ""}`;
  return options.prefix ? `Fase atual: ${status}` : status;
}

function phaseIconPath(phase) {
  const value = String(normalizedPhase(phase)).padStart(2, "0");
  return `assets/${value}.png`;
}

const PROJECT_COMPLEXITY = {
  glyph: { score: 5, title: "O Core", detail: "Ecossistema / Vida" },
  kingsworld: { score: 5, title: "O Core", detail: "Ecossistema / Vida" },
  "elite-50": { score: 4, title: "O Produto", detail: "Plataforma / Competição" },
  "mind-practice": { score: 3, title: "O Ativo", detail: "Mercado / Estudo" },
  scoretrader: { score: 2, title: "O Utilitário", detail: "Estratégia / Fórmulas" },
  studio: { score: 2, title: "O Hub", detail: "Visual / Narrativa" },
  "sabedoria-animada": { score: 2, title: "O Tráfego", detail: "Audiência / Marketing" },
  "tarot-deck": { score: 1, title: "O Sample", detail: "Estética / Ativos" },
  "mtg-dota": { score: 1, title: "O Sample", detail: "Estética / Ativos" },
  "becos-lab-site": { score: 2, title: "A Vitrine", detail: "Autoridade / Roadmap" },
};

function focusStatusChip(project) {
  return phaseTitle(project.level);
}

function projectComplexityMeta(project) {
  return (
    PROJECT_COMPLEXITY[projectMetaId(project)] || {
      score: Math.max(1, Math.min(5, Math.round(normalizedPhase(project.level) / 2))),
      title: "O Sistema",
      detail: "Construção / Direção",
    }
  );
}

function normalizeProjectDifficulty(value) {
  return PROJECT_DIFFICULTIES.some((difficulty) => difficulty.id === value)
    ? value
    : DEFAULT_PROJECT_DIFFICULTY;
}

function difficultyLabelForProject(project) {
  const normalized = normalizeProjectDifficulty(project.projectDifficulty);
  return PROJECT_DIFFICULTIES.find((difficulty) => difficulty.id === normalized)?.label || "Médio";
}

function normalizeHoursInvested(value) {
  if (value === "" || value == null) return null;
  const normalized = Number(String(value).replace(",", "."));
  if (!Number.isFinite(normalized) || normalized < 0) return null;
  return Math.round(normalized * 10) / 10;
}

function projectMetaId(project) {
  return project.metaId || project.id;
}

function captureProjectBaseState(list) {
  list.forEach((project) => {
    projectBaseState.set(projectMetaId(project), {
      level: normalizedPhase(project.level),
      hoursInvested: normalizeHoursInvested(project.hoursInvested),
      projectDifficulty: normalizeProjectDifficulty(project.projectDifficulty),
    });

    if (Array.isArray(project.subItems)) {
      captureProjectBaseState(project.subItems);
    }
  });
}

function loadSharedProjectMeta() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROJECT_META_STORAGE_KEY));
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    localStorage.removeItem(PROJECT_META_STORAGE_KEY);
    return {};
  }
}

function loadDashboardProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(DASHBOARD_STATE_KEY));
    return stored && Array.isArray(stored.projects) ? stored.projects : [];
  } catch {
    localStorage.removeItem(DASHBOARD_STATE_KEY);
    return [];
  }
}

function dashboardProjectId(project) {
  return project.metaId || project.id;
}

function derivePhaseFromRoadmap(roadmapItems, fallbackPhase) {
  const normalizedFallback = normalizedPhase(fallbackPhase);
  if (!Array.isArray(roadmapItems) || !roadmapItems.length) return normalizedFallback;

  const phases = [...new Set(roadmapItems.map((item) => normalizedPhase(item.phase)))].sort((a, b) => a - b);
  for (const phase of phases) {
    const items = roadmapItems.filter((item) => normalizedPhase(item.phase) === phase);
    if (!items.length) continue;
    if (!items.every((item) => item.status === "pronto")) return phase;
  }

  return phases[phases.length - 1] || normalizedFallback;
}

function deriveCompletionFromRoadmap(roadmapItems, fallbackPhase) {
  if (!Array.isArray(roadmapItems) || !roadmapItems.length) {
    return normalizedPhase(fallbackPhase) * 10;
  }

  const total = roadmapItems.length || 1;
  const ready = roadmapItems.filter((item) => item.status === "pronto").length;
  return Math.round((ready / total) * 100);
}

function applySharedProjectMeta(list, sharedMeta = loadSharedProjectMeta()) {
  const dashboardProjects = loadDashboardProgress();
  list.forEach((project) => {
    const base = projectBaseState.get(projectMetaId(project));
    const source = sharedMeta[projectMetaId(project)] || {};
    const dashboardProject = dashboardProjects.find((entry) => entry.id === dashboardProjectId(project));

    if (base) {
      project.level = derivePhaseFromRoadmap(dashboardProject?.roadmapItems, base.level);
      project.completionPercent = deriveCompletionFromRoadmap(dashboardProject?.roadmapItems, base.level);
      project.hoursInvested = normalizeHoursInvested(source.hoursInvested ?? base.hoursInvested);
      project.projectDifficulty = normalizeProjectDifficulty(
        source.projectDifficulty ?? base.projectDifficulty,
      );
    }

    if (Array.isArray(project.subItems)) {
      applySharedProjectMeta(project.subItems, sharedMeta);
    }
  });
}

function projectHoursInvested(project) {
  const hours = normalizeHoursInvested(project.hoursInvested);
  return hours == null ? "em aberto" : `${String(hours).replace(".", ",")}h`;
}

function projectDifficultySummary(project) {
  return difficultyLabelForProject(project);
}

function projectPhaseLabel(project) {
  return project.phaseLabel ?? phaseTitle(project.level);
}

function projectCompletion(project) {
  return `${phaseProgressValue(project)}%`;
}

function projectPhaseProgress(project) {
  return project.phaseProgress ?? `${projectPhaseLabel(project)}  ·  ${projectCompletion(project)}`;
}

function isLevelComplete(project) {
  return normalizedPhase(project.level) === 10;
}

function findProjectById(projectId) {
  for (const project of projects) {
    if (project.id === projectId) return project;

    const subProject = project.subItems?.find((item) => item.id === projectId);
    if (subProject) return subProject;
  }

  return null;
}

function setNodeLevel(node, project, animate = false) {
  const target = String(phaseProgressValue(project));

  if (!animate) {
    node.style.setProperty("--ring-progress", target);
    return;
  }

  node.style.setProperty("--ring-progress", "0");
  window.requestAnimationFrame(() => {
    node.style.setProperty("--ring-progress", target);
  });
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function statusDescriptionHtml(value) {
  return escapeXml(value).replaceAll("\n", "<br />");
}

function signalMessageFor(item) {
  return CONTACT_MESSAGES[item.id]?.whatsapp || item.message;
}

function isSignalAvailable(item) {
  return item.enabledIn.includes(ACTIVE_STATUS_KEY);
}

function availableModeNames(item) {
  return item.enabledIn.map((statusKey) => STATUS_MODES[statusKey]?.title || statusKey).join(", ");
}

function contactTagForSignal(signalId) {
  return Object.entries(CONTACT_TAGS).find(([, config]) => config.signalId === signalId)?.[0] || "apoie";
}

function signalForContactTag(tag) {
  const signalId = CONTACT_TAGS[tag]?.signalId;
  return signalId ? INTERACTION_MENU.find((item) => item.id === signalId) : null;
}

function setContactTag(tag, { focus = false, scroll = false } = {}) {
  const nextTag = CONTACT_TAGS[tag] ? tag : "apoie";
  const config = CONTACT_TAGS[nextTag];

  contactTagInput.value = nextTag;
  contactTagButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.contactTag === nextTag);
    button.setAttribute("aria-pressed", button.dataset.contactTag === nextTag ? "true" : "false");
  });

  if (contactModeTitle) contactModeTitle.textContent = config.title || config.label;
  if (contactHint) contactHint.textContent = config.hint;
  if (contactMessage && !contactMessage.value.trim()) contactMessage.placeholder = config.message;
  if (contactPixButton) contactPixButton.hidden = true;

  if (scroll) {
    document.querySelector("#contactSection")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (focus) {
    window.setTimeout(() => contactName?.focus(), 320);
  }
}

function contactMailto() {
  const tag = contactTagInput?.value || "apoie";
  const config = CONTACT_TAGS[tag] || CONTACT_TAGS.apoie;
  const name = contactName?.value.trim();
  const email = contactEmail?.value.trim();
  const customMessage = contactMessage?.value.trim();
  const body = [
    config.message,
    "",
    name ? `Nome: ${name}` : "",
    email ? `E-mail: ${email}` : "",
    ...(customMessage ? ["", customMessage] : []),
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:?subject=${encodeURIComponent(config.subject)}&body=${encodeURIComponent(body)}`;
}

function renderStatusUI() {
  if (!statusPanel) return;

  const statusLine = STATUS_UI_LINES[ACTIVE_STATUS_KEY] || STATUS_UI_LINES.foco;
  const primaryAction = INTERACTION_MENU.find((item) => item.name === ACTIVE_STATUS.primaryAction);

  statusPanel.innerHTML = `
    <div class="status-top">
      <p class="status-kicker">${ACTIVE_STATUS.short}</p>
      <h2>${statusLine.headline}</h2>
      <p class="status-line">${statusLine.line}</p>
      <p class="status-description">${statusDescriptionHtml(ACTIVE_STATUS.description)}</p>
      <p class="status-technical">${ACTIVE_STATUS.technical}</p>
    </div>
    <div class="status-summary" aria-label="Resumo do protocolo atual">
      <span class="signal-state is-open">modo atual</span>
      <strong>${ACTIVE_STATUS.title}</strong>
      ${primaryAction ? `<small>Ação principal: ${primaryAction.name}</small>` : ""}
    </div>
  `;
}

function renderSupportCopy() {
  if (supportTriggerLabel) {
    supportTriggerLabel.textContent = "Apoiar";
  }

  if (supportTitle) {
    supportTitle.textContent = "Apoiar o Lab";
  }

  if (supportPixKey) {
    supportPixKey.textContent = SUPPORT.pixKey;
  }

  renderSupportHub();
}

function renderSupportHub() {
  if (supportTitle) {
    supportTitle.textContent = supportContextProject ? `Apoiar ${supportContextProject.title}` : "Apoiar o Lab";
  }

  if (supportStatusPanel) {
    const statusLine = STATUS_UI_LINES[ACTIVE_STATUS_KEY] || STATUS_UI_LINES.foco;
    supportStatusPanel.innerHTML = `
      <span>Modo atual</span>
      <strong>${ACTIVE_STATUS.title}</strong>
      <small>${statusLine.line}</small>
      ${supportContextProject ? `<small>Projeto em foco: ${escapeXml(supportContextProject.title)}</small>` : ""}
    `;
  }

  if (!supportSignalGrid) return;

  supportSignalGrid.innerHTML = SUPPORT_HUB_ACTIONS.map((action) => {
    const item = action.signalId ? INTERACTION_MENU.find((entry) => entry.id === action.signalId) : null;
    const available = !item || isSignalAvailable(item);
    const isPrimary = item?.name === ACTIVE_STATUS.primaryAction || action.id === "apoie";

    return `
      <button
        class="support-signal-card${available ? " is-open" : " is-closed"}${isPrimary ? " is-primary" : ""}"
        type="button"
        data-support-action="${action.id}"
      >
        <strong>${action.label}</strong>
        <small>${available ? "aberto" : "fechado"}</small>
      </button>
    `;
  }).join("");

  supportSignalGrid.querySelectorAll("[data-support-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = SUPPORT_HUB_ACTIONS.find((entry) => entry.id === button.dataset.supportAction);
      if (!action) return;

      if (action.id === "apoie") {
        supportKeyButton?.focus();
        return;
      }

      const item = INTERACTION_MENU.find((entry) => entry.id === action.signalId);
      if (!item) return;

      if (!isSignalAvailable(item)) {
        closeDialog(supportModal);
        openUnavailableSignal(item, button);
        return;
      }

      closeDialog(supportModal);
      openContactSignal(item, button);
    });
  });
}

function openUnavailableSignal(item, returnFocusElement = document.activeElement) {
  signalKicker.textContent = ACTIVE_STATUS.short;
  signalTitle.textContent = "Sinal indisponível";
  signalText.textContent = "Esta ação não está aberta no modo atual.";
  signalDetails.innerHTML = `
    <span>Status atual: ${ACTIVE_STATUS.title}</span>
    <span>Disponível em: ${availableModeNames(item)}</span>
  `;
  signalActions.innerHTML = `
    <button class="secondary-action" type="button" data-close-signal-action>Entendi</button>
    <button class="primary-action" type="button" data-open-support-action>Apoiar via Pix</button>
  `;
  signalActions.querySelector("[data-close-signal-action]").addEventListener("click", () => closeDialog(signalModal));
  signalActions.querySelector("[data-open-support-action]").addEventListener("click", () => {
    closeDialog(signalModal);
    openSupport(returnFocusElement);
  });
  lastFocusedElement = returnFocusElement;
  showDialog(signalModal, closeSignalButton);
}

function openContactSignal(item, returnFocusElement = document.activeElement) {
  lastFocusedElement = returnFocusElement;
  setContactTag(contactTagForSignal(item.id), { scroll: true, focus: true });
}

function mailtoFor(item, message) {
  return `mailto:?subject=${encodeURIComponent(item.subject)}&body=${encodeURIComponent(message)}`;
}

async function copySignalMessage(item) {
  const message = signalMessageFor(item);

  try {
    await navigator.clipboard.writeText(message);
    signalDetails.innerHTML = `<strong>${item.subject} copiado.</strong><span>${message}</span>`;
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = message;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    signalDetails.innerHTML = `<strong>${item.subject} copiado.</strong><span>${message}</span>`;
  }
}

function initialsFor(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function visualDataUri(project, variant = "preview", slideIndex = 0) {
  const cacheKey = `${project.id}:${variant}:${slideIndex}`;
  if (visualCache.has(cacheKey)) return visualCache.get(cacheKey);

  const [accent, gold, deep, base] = project.palette ?? ["#c084fc", "#d8b76a", "#284c80", "#070711"];
  const width = variant === "preview" ? 420 : 1200;
  const height = variant === "preview" ? 420 : 760;
  const seed = project.id.length + slideIndex * 11;
  const slideTitleForImage = projectSlides(project)[slideIndex]?.title;
  const title = variant === "slide" ? slideTitleForImage || project.title : project.title;
  const mark = variant === "preview" ? initialsFor(project.title) : "B/L";
  const ring = 120 + seed * 9;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  const bg = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, width * 0.72);
  bg.addColorStop(0, withAlpha(accent, 0.48));
  bg.addColorStop(0.42, withAlpha(deep, 0.72));
  bg.addColorStop(1, base);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.filter = "blur(26px)";
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(width * 0.34, height * 0.32, ring * 0.42, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  strokeCircle(ctx, width * 0.5, height * 0.48, ring, gold, 0.34, variant === "preview" ? 2 : 3);
  strokeCircle(ctx, width * 0.5, height * 0.48, ring * 0.58, accent, 0.28, variant === "preview" ? 1.5 : 2);

  const pathGradient = ctx.createLinearGradient(0, 0, width, height);
  pathGradient.addColorStop(0, withAlpha(gold, 0.92));
  pathGradient.addColorStop(1, withAlpha(accent, 0.62));
  ctx.strokeStyle = pathGradient;
  ctx.lineWidth = variant === "preview" ? 3 : 5;
  ctx.globalAlpha = 0.58;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, height * 0.66);
  ctx.bezierCurveTo(width * 0.34, height * 0.34, width * 0.58, height * 0.86, width * 0.82, height * 0.28);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = withAlpha(gold, 0.7);
  ctx.lineWidth = variant === "preview" ? 2 : 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.5, height * 0.18);
  ctx.lineTo(width * 0.69, height * 0.48);
  ctx.lineTo(width * 0.5, height * 0.78);
  ctx.lineTo(width * 0.31, height * 0.48);
  ctx.closePath();
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.strokeStyle = withAlpha(gold, 0.25);
  ctx.beginPath();
  ctx.moveTo(width * 0.18, height * 0.48);
  ctx.lineTo(width * 0.82, height * 0.48);
  ctx.stroke();
  ctx.strokeStyle = withAlpha(accent, 0.22);
  ctx.beginPath();
  ctx.moveTo(width * 0.5, height * 0.16);
  ctx.lineTo(width * 0.5, height * 0.82);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#f6efe1";
  ctx.font = `650 ${variant === "preview" ? 72 : 92}px Inter, Segoe UI, sans-serif`;
  ctx.fillText(mark, width * 0.5, height * (variant === "preview" ? 0.53 : 0.48));
  ctx.fillStyle = gold;
  ctx.font = `500 ${variant === "preview" ? 22 : 34}px Inter, Segoe UI, sans-serif`;
  ctx.fillText(title, width * 0.5, height * (variant === "preview" ? 0.74 : 0.68), width * 0.82);

  const dataUri = canvas.toDataURL("image/png");
  visualCache.set(cacheKey, dataUri);
  return dataUri;
}

function strokeCircle(ctx, x, y, radius, color, alpha, width) {
  ctx.strokeStyle = withAlpha(color, alpha);
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}

function withAlpha(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function projectImageSource(project, variant = "preview", slideIndex = 0) {
  return project.image || visualDataUri(project, variant, slideIndex);
}

function imageFocus(project, slide = {}) {
  return slide.focalPoint || project.focalPoint || "50% 50%";
}

function imageZoom(project, variant = "preview", slide = {}) {
  const zoom = Number(
    slide.imageZoom ?? project?.[`${variant}Zoom`] ?? project?.imageZoom ?? (variant === "preview" ? 1.04 : 1),
  );
  return Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
}

function imageShift(project, axis, variant = "preview", slide = {}) {
  const key = axis === "x" ? "ShiftX" : "ShiftY";
  return slide[`image${key}`] ?? project?.[`${variant}${key}`] ?? project?.[`image${key}`] ?? "0%";
}

let orbitLayoutPass = 0;
let heroTransitionTimer = 0;
let slideTransitionTimer = 0;
let slideDirection = 1;
let activeGatewaySubprojectId = null;

function scheduleOrbitLayoutPasses() {
  orbitLayoutPass += 1;
  const passId = orbitLayoutPass;
  const checkpoints = [0, 42, 96, 164, 248, 348, 468];

  checkpoints.forEach((delay) => {
    window.setTimeout(() => {
      if (passId !== orbitLayoutPass) return;
      layoutOrbit();
    }, delay);
  });
}

function restartHeroMotion(mode = "orbit") {
  if (!hero) return;
  window.clearTimeout(heroTransitionTimer);
  hero.classList.remove("is-orbit-transition", "is-focus-transition");
  void hero.offsetWidth;
  hero.classList.add(mode === "focus" ? "is-focus-transition" : "is-orbit-transition");
  heroTransitionTimer = window.setTimeout(() => {
    hero.classList.remove("is-orbit-transition", "is-focus-transition");
  }, 560);
}

function restartSlideMotion(direction = 1) {
  if (!slideFrame) return;
  window.clearTimeout(slideTransitionTimer);
  slideFrame.classList.remove("is-transitioning", "is-forward", "is-backward");
  void slideFrame.offsetWidth;
  slideFrame.classList.add("is-transitioning", direction < 0 ? "is-backward" : "is-forward");
  slideTransitionTimer = window.setTimeout(() => {
    slideFrame.classList.remove("is-transitioning", "is-forward", "is-backward");
  }, 420);
}

function setOrbitReveal(revealed = true) {
  orbitRevealed = revealed;
  restartHeroMotion("orbit");
  hero?.classList.toggle("is-orbit-revealed", revealed);
  hero?.classList.toggle("has-project-focus", revealed && Boolean(selectedProject));
  core?.classList.toggle("is-revealed", revealed);
  focusPanel?.classList.toggle("is-visible", revealed);
  sceneBackButton?.classList.toggle("is-visible", revealed);

  if (!revealed) {
    selectedProject = null;
    focusPanel.innerHTML = dormantHeroFocusPanelMarkup;
    orbitField.querySelectorAll(".project-node").forEach((node) => {
      const nodeProject = findProjectById(node.dataset.projectId);
      node.classList.remove("is-focused", "is-dim");
      node.setAttribute("aria-pressed", "false");

      if (nodeProject) {
        setNodeLevel(node, nodeProject);
      }
    });
    scheduleOrbitLayoutPasses();
    return;
  }

  if (!selectedProject) {
    focusPanel.innerHTML = revealedHeroFocusPanelMarkup;
  }

  scheduleOrbitLayoutPasses();
}

function setSceneNav(scene) {
  sceneNavLinks.forEach((link) => {
    const isActive = link.dataset.sceneNav === scene;
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function activePartnershipCenter() {
  return partnershipCenters[activePartnershipCenterIndex] || partnershipCenters[0];
}

function partnershipItems(center = activePartnershipCenter()) {
  return [...center.connections, ...center.projects];
}

function positionedPartnershipItems(center = activePartnershipCenter()) {
  const groupedIndex = { connection: 0, project: 0 };

  return partnershipItems(center).map((item, index, allItems) => {
    if (Number.isFinite(Number(item.mapX)) && Number.isFinite(Number(item.mapY))) {
      return {
        ...item,
        mapX: Number(item.mapX),
        mapY: Number(item.mapY),
      };
    }

    const type = item.itemType === "connection" ? "connection" : "project";
    const preset = PARTNERSHIP_LAYOUTS.compact[type]?.[groupedIndex[type]];
    groupedIndex[type] += 1;

    if (preset) {
      return {
        ...item,
        mapX: preset.x,
        mapY: preset.y,
      };
    }

    const overflowIndex = index - 1;
    const angle = -90 + (360 / Math.max(allItems.length, 1)) * overflowIndex;
    const radius = type === "connection" ? 36 : 30;
    const rad = (angle * Math.PI) / 180;

    return {
      ...item,
      mapX: 50 + Math.cos(rad) * radius,
      mapY: 50 + Math.sin(rad) * radius,
    };
  });
}

function partnershipInitials(title) {
  return String(title || "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function selectedPartnershipItem() {
  if (!activePartnershipItemId) return null;
  return partnershipItems().find((item) => item.id === activePartnershipItemId) || null;
}

function partnerCenterIndexes() {
  return partnershipCenters
    .map((center, index) => ({ center, index }))
    .filter(({ center }) => center.id !== "becos-lab")
    .map(({ index }) => index);
}

function partnershipNavControls() {
  const indexes = partnerCenterIndexes();
  const disabled = indexes.length <= 1 ? " disabled" : "";

  return `
    <div class="partnership-center-nav" aria-label="Navegar entre parceiros">
      <button class="partnership-nav-arrow is-left" type="button" data-partnership-nav="-1"${disabled} aria-label="Parceiro anterior">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6" /></svg>
      </button>
      <button class="partnership-nav-arrow is-right" type="button" data-partnership-nav="1"${disabled} aria-label="Próximo parceiro">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
      </button>
    </div>
  `;
}

function partnershipHomeNode(center) {
  return "";
}

function renderPartnershipSummary() {
  const item = selectedPartnershipItem();
  const center = activePartnershipCenter();
  if (!item) {
    hero?.classList.add("has-project-focus");
    focusPanel.classList.add("is-visible", "is-active", "is-partnership-summary", "is-partner-summary");
    focusPanel.innerHTML = `
      <div class="focus-project-band partnership-focus-band">
        <div class="focus-copy">
          <div class="focus-phase-row" aria-label="Parceiro">
            <span class="focus-phase-icon" aria-hidden="true">
              ${center.image ? `<img src="${escapeXml(center.image)}" alt="" />` : partnershipInitials(center.title)}
            </span>
            <div class="focus-phase-copy">
              <p class="focus-kicker">${escapeXml(center.type)}</p>
              <p class="focus-status">${escapeXml(center.title)}</p>
            </div>
          </div>
          <p class="focus-line">${escapeXml(center.summary)}</p>
          <p class="focus-impact">Centro parceiro conectado ao Beco's Lab. Selecione um projeto da árvore para ver onde a colaboração entra.</p>
          ${renderCaseMeta([
            { label: "Tipo", value: center.type },
            { label: "Responsável", value: center.owner || "Parceiro" },
            { label: "Projetos", value: `${center.projects.length} conectados` },
          ])}
        </div>
      </div>
    `;
    return;
  }

  const level = item.level || 1;
  const phase = item.phase || phaseTitle(level);
  const isPartnerProject = item.ownership === "Projeto externo";
  const ownerLabel = isPartnerProject ? `Projeto de ${center.title}` : `Parcerias · ${escapeXml(center.title)}`;
  const participationLine = isPartnerProject
    ? `Participação do Beco's Lab: ${escapeXml(item.participation || "Conexão")}`
    : escapeXml(item.participation || "Conexão");
  hero?.classList.add("has-project-focus");
  focusPanel.classList.add("is-visible", "is-active", "is-partnership-summary");
  focusPanel.classList.remove("is-partner-summary");
  focusPanel.innerHTML = `
    <div class="focus-project-band partnership-focus-band">
      <div class="focus-copy">
        <div class="focus-phase-row" aria-label="Participação">
          <span class="focus-phase-icon" aria-hidden="true">
            ${item.image ? `<img src="${escapeXml(item.image)}" alt="" />` : partnershipInitials(item.title)}
          </span>
          <div class="focus-phase-copy">
            <p class="focus-kicker">Nível ${escapeXml(level)}</p>
            <p class="focus-status">${escapeXml(item.title)}</p>
          </div>
        </div>
        <p class="focus-line">${escapeXml(item.summary)}</p>
        <p class="focus-impact">${escapeXml(ownerLabel)} · ${escapeXml(phase)} · ${participationLine}</p>
        ${renderCaseMeta([
          { label: "Parceiro", value: center.title },
          { label: "Projeto", value: item.title },
          { label: "Papel", value: item.participation || "Conexão" },
        ])}
      </div>
      <div class="focus-actions">
        ${
          item.itemType === "connection"
            ? `<button class="secondary-action focus-action" type="button" data-open-partnership-center="${escapeXml(item.centerId || item.id)}">Mudar centro</button>`
            : `
              <button class="secondary-action focus-action" type="button" data-partnership-open-project>
                <span>Ver</span>
              </button>
              <button class="icon-button focus-heart-button" type="button" data-partnership-support aria-label="Apoiar ${escapeXml(item.title)}">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.7c-1.6-1.8-4.4-2-6.3-.2-2 1.9-2 5 0 6.9l6.3 6 6.3-6c2-1.9 2-5 0-6.9-1.9-1.8-4.7-1.6-6.3.2Z" />
                </svg>
              </button>
            `
        }
      </div>
    </div>
  `;

  focusPanel.querySelector("[data-open-partnership-center]")?.addEventListener("click", (event) => {
    openPartnershipCenter(event.currentTarget.dataset.openPartnershipCenter);
  });
  focusPanel.querySelector("[data-partnership-open-project]")?.addEventListener("click", () => {
    openPartnershipProjectPresentation(item);
  });
  focusPanel.querySelector("[data-partnership-support]")?.addEventListener("click", (event) => {
    openSupport(event.currentTarget, { title: item.title });
  });
}

function renderPartnershipField() {
  if (!partnershipField) return;

  const center = activePartnershipCenter();
  const items = positionedPartnershipItems(center);
  const centerInitials = partnershipInitials(center.title);
  const activeItem = selectedPartnershipItem();
  const activePositionedItem = items.find((item) => item.id === activeItem?.id);
  const homeWire =
    center.id === "becos-lab"
      ? ""
      : `
        <line class="is-home-wire" x1="16" y1="22" x2="50" y2="50" />
        ${
          activePositionedItem
            ? `<line class="is-active-project-wire" x1="16" y1="22" x2="${activePositionedItem.mapX}" y2="${activePositionedItem.mapY}" />`
            : ""
        }
      `;

  partnershipField.innerHTML = `
    <svg class="partnership-scene-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      ${homeWire}
      ${items
        .map((item) => `<line x1="50" y1="50" x2="${item.mapX}" y2="${item.mapY}" />`)
        .join("")}
    </svg>
    <button class="partnership-scene-center" type="button" data-partnership-center="${escapeXml(center.id)}" aria-label="${escapeXml(center.title)}">
      <span class="partnership-scene-halo" aria-hidden="true"></span>
      <span class="partnership-scene-image">
        ${center.image ? `<img src="${escapeXml(center.image)}" alt="" />` : `<span>${escapeXml(centerInitials)}</span>`}
      </span>
      <strong>${escapeXml(center.title)}</strong>
      <small>${escapeXml(center.type)}</small>
    </button>
    ${partnershipHomeNode(center)}
    ${partnershipNavControls()}
    ${items
      .map(
        (item) => `
          <button
            class="partnership-scene-node is-${item.itemType}${activePartnershipItemId === item.id ? " is-active" : ""}"
            type="button"
            data-partnership-item="${escapeXml(item.id)}"
            style="--node-x: ${item.mapX}%; --node-y: ${item.mapY}%; --ring-progress: ${phaseProgressValue(item)};"
            aria-pressed="${String(activePartnershipItemId === item.id)}"
          >
            <span class="partnership-orb">
              <span class="partnership-node-image">
                ${item.image ? `<img src="${escapeXml(item.image)}" alt="" />` : `<span>${escapeXml(partnershipInitials(item.title))}</span>`}
              </span>
              <svg class="partnership-level-ring" viewBox="0 0 100 100" aria-hidden="true">
                <circle class="partnership-level-track" cx="50" cy="50" r="46" pathLength="100"></circle>
                <circle class="partnership-level-progress" cx="50" cy="50" r="46" pathLength="100"></circle>
              </svg>
            </span>
            <span class="partnership-scene-label">
              <strong>${escapeXml(item.title)}</strong>
              <small>${escapeXml(item.label || item.status || "")}</small>
            </span>
          </button>
        `,
      )
      .join("")}
  `;

  partnershipField.querySelectorAll("[data-partnership-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = partnershipItems().find((entry) => entry.id === button.dataset.partnershipItem);
      if (item?.itemType === "connection" && item.centerId) {
        openPartnershipCenter(item.centerId);
        return;
      }

      activePartnershipItemId = button.dataset.partnershipItem;
      renderPartnershipField();
      renderPartnershipSummary();
    });
  });

  partnershipField.querySelector("[data-return-partnership-center]")?.addEventListener("click", (event) => {
    openPartnershipCenter(event.currentTarget.dataset.returnPartnershipCenter);
  });

  partnershipField.querySelectorAll("[data-partnership-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      navigatePartnershipCenter(Number(button.dataset.partnershipNav));
    });
  });

  partnershipField.querySelector("[data-partnership-center]")?.addEventListener("click", () => {
    if (center.id === "becos-lab") {
      closePartnershipScene();
      return;
    }
    activePartnershipItemId = null;
    renderPartnershipField();
    renderPartnershipSummary();
  });
}

function openPartnershipCenter(centerId) {
  const nextIndex = partnershipCenters.findIndex((center) => center.id === centerId);
  if (nextIndex < 0) return;

  partnershipField?.classList.add("is-switching");

  window.setTimeout(() => {
    activePartnershipCenterIndex = nextIndex;
    activePartnershipItemId = null;
    renderPartnershipField();
    renderPartnershipSummary();
    window.requestAnimationFrame(() => partnershipField?.classList.remove("is-switching"));
  }, 140);
}

function openPartnershipProjectPresentation(item) {
  modalKicker.textContent = item.ownership === "Projeto externo" ? "Projeto parceiro" : "Parcerias";
  modalTitle.textContent = item.title;
  modalStatus.textContent = `Nível ${item.level || 1} · ${item.phase || phaseTitle(item.level || 1)} · ${item.status || "Ativo"}`;
  modalDescription.textContent = item.summary || "";
  modalImage.src = item.image || "";
  modalImage.alt = "";
  presentationButton.hidden = true;
  lastFocusedElement = document.activeElement;
  showDialog(projectModal, closeProjectButton);
}

function navigatePartnershipCenter(direction) {
  const indexes = partnerCenterIndexes();
  if (indexes.length <= 1) {
    partnershipField?.classList.add("is-switching");
    window.setTimeout(() => partnershipField?.classList.remove("is-switching"), 180);
    return;
  }

  const currentPartnerIndex = Math.max(0, indexes.indexOf(activePartnershipCenterIndex));
  const nextPartnerIndex = (currentPartnerIndex + direction + indexes.length) % indexes.length;
  openPartnershipCenter(partnershipCenters[indexes[nextPartnerIndex]].id);
}

function openPartnershipScene() {
  activeScene = "partnerships";
  activePartnershipCenterIndex = partnershipCenters.findIndex((center) => center.id === "luigis-lab");
  if (activePartnershipCenterIndex < 0) activePartnershipCenterIndex = 0;
  activePartnershipItemId = null;
  setOrbitReveal(true);
  selectedProject = null;
  focusPanel.classList.remove("is-partnership-summary");
  orbitField.querySelectorAll(".project-node").forEach((node) => {
    node.classList.remove("is-focused", "is-dim");
    node.setAttribute("aria-pressed", "false");
  });
  hero?.classList.remove("has-project-focus");
  hero?.classList.add("is-partnerships-scene");
  sceneBackButton?.classList.add("is-visible");
  setSceneNav("partnerships");
  renderPartnershipField();
  renderPartnershipSummary();
}

function closePartnershipScene() {
  activeScene = "home";
  hero?.classList.remove("is-partnerships-scene");
  hero?.classList.remove("has-project-focus");
  focusPanel.classList.remove("is-partnership-summary");
  resetProjectFocus();
  setOrbitReveal(true);
  setSceneNav("home");
}

function handleSignalLaunch(actionId, trigger = document.activeElement) {
  if (actionId === "support") {
    openSupport(trigger);
    return;
  }

  const item = INTERACTION_MENU.find((entry) => entry.id === actionId);
  if (!item) return;

  if (!isSignalAvailable(item)) {
    openUnavailableSignal(item, trigger);
    return;
  }

  openContactSignal(item, trigger);
}

function renderLevelMarks(level) {
  const reachedLevel = normalizedPhase(level);
  const center = 50;
  const outerRadius = 47.5;
  const innerRadius = 44.9;

  return Array.from({ length: reachedLevel }, (_, index) => {
    const markLevel = index + 1;
    const angle = (Math.PI * 2 * markLevel) / 10;
    const x1 = center + Math.cos(angle) * innerRadius;
    const y1 = center + Math.sin(angle) * innerRadius;
    const x2 = center + Math.cos(angle) * outerRadius;
    const y2 = center + Math.sin(angle) * outerRadius;

    return `<line class="level-mark${markLevel <= reachedLevel ? " is-reached" : ""}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"></line>`;
  }).join("");
}

function renderProjects() {
  orbitField.innerHTML = `
    <svg class="orbit-wires" aria-hidden="true"></svg>
    ${projects
    .map(
      (project, index) => `
        <button class="project-node${isLevelComplete(project) ? " is-complete" : ""}" type="button" data-project-id="${project.id}" aria-pressed="false" aria-label="${escapeXml(project.title)}: ${phaseStatus(project, { full: true })}" style="--delay: -${index * 0.72}s; --reveal-delay: ${index * 58}ms; --ring-progress: ${phaseProgressValue(project)}; --image-focus: ${imageFocus(project)}; --image-zoom: ${imageZoom(project)}; --image-shift-x: ${imageShift(project, "x")}; --image-shift-y: ${imageShift(project, "y")}">
          <span class="node-orb">
            <span class="node-shell">
              <img src="${projectImageSource(project)}" alt="Preview de ${escapeXml(project.title)}" />
            </span>
            <svg class="level-ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle class="level-track" cx="50" cy="50" r="46" pathLength="100"></circle>
              <circle class="level-progress" cx="50" cy="50" r="46" pathLength="100"></circle>
              <g class="level-marks">${renderLevelMarks(project.level)}</g>
            </svg>
          </span>
          <span class="node-title">${project.title}</span>
        </button>
      `,
    )
    .join("")}
  `;

  orbitField.querySelectorAll(".project-node").forEach((node) => {
    node.addEventListener("click", () => handleProjectClick(node.dataset.projectId));
  });

  layoutOrbit();
}

function layoutOrbit() {
  const nodes = [...orbitField.querySelectorAll(".project-node")];
  if (!nodes.length) return;

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const rect = (isMobile ? orbitField : labStage).getBoundingClientRect();
  const count = nodes.length;
  const fieldWidth = rect.width || window.innerWidth;
  const fieldHeight = rect.height || window.innerHeight;
  const radiusX = isMobile
    ? Math.min(fieldWidth * (orbitRevealed ? 0.42 : 0.35), orbitRevealed ? 166 : 138)
    : Math.min(fieldWidth * (orbitRevealed ? 0.32 : 0.26), orbitRevealed ? 390 : 300);
  const radiusY = isMobile
    ? Math.min(fieldHeight * (orbitRevealed ? 0.37 : 0.33), orbitRevealed ? 150 : 128)
    : Math.min(fieldHeight * (orbitRevealed ? 0.28 : 0.22), orbitRevealed ? 230 : 184);
  const selectedId = selectedProject?.id;
  const orbitWireSvg = orbitField.querySelector(".orbit-wires");

  const offset = count % 2 === 0 ? -Math.PI / 2 + Math.PI / count : -Math.PI / 2;
  const wireLines = [];

  nodes.forEach((node, index) => {
    const angle = offset + (Math.PI * 2 * index) / count;
    const x = Math.cos(angle) * radiusX;
    let y = Math.sin(angle) * radiusY;
    if (isMobile && orbitRevealed && !selectedId && y > 0) {
      y *= 1.24;
    }
    node.style.setProperty("--orbit-x", `${x.toFixed(2)}px`);
    node.style.setProperty("--orbit-y", `${y.toFixed(2)}px`);
    wireLines.push({ id: node.dataset.projectId, x, y });
  });

  if (orbitRevealed && selectedId) {
    const selectedNode = nodes.find((node) => node.dataset.projectId === selectedId);
    if (selectedNode) {
      selectedNode.style.setProperty("--orbit-x", "0px");
      selectedNode.style.setProperty("--orbit-y", `${(-radiusY * (isMobile ? 0.54 : 0.76)).toFixed(2)}px`);
      const selectedWire = wireLines.find((line) => line.id === selectedId);
      if (selectedWire) {
        selectedWire.x = 0;
        selectedWire.y = -radiusY * (isMobile ? 0.54 : 0.76);
      }
    }
  }

  if (orbitWireSvg) {
    const centerX = fieldWidth / 2;
    const centerY = fieldHeight / 2;
    const partnershipX = fieldWidth - (isMobile ? 26 : 34);
    const partnershipY = centerY;
    orbitWireSvg.setAttribute("viewBox", `0 0 ${fieldWidth} ${fieldHeight}`);
    const visibleWireLines = selectedId ? wireLines.filter((line) => line.id === selectedId) : wireLines;
    orbitWireSvg.innerHTML = `
      ${visibleWireLines
        .map(
          (line) =>
            `<line class="orbit-wire${selectedId ? " is-focus-wire" : ""}" x1="${centerX.toFixed(2)}" y1="${centerY.toFixed(2)}" x2="${(centerX + line.x).toFixed(2)}" y2="${(centerY + line.y).toFixed(2)}" />`,
        )
        .join("")}
      ${selectedId ? "" : `<line class="orbit-wire is-partnership-path" x1="${centerX.toFixed(2)}" y1="${centerY.toFixed(2)}" x2="${partnershipX.toFixed(2)}" y2="${partnershipY.toFixed(2)}" />`}
    `;
  }
}

function handleProjectClick(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  setOrbitReveal(true);

  if (project.isGateway) {
    selectProject(project);
    return;
  }

  if (selectedProject?.id === project.id) {
    openProjectModal(project);
    return;
  }

  selectProject(project);
}

function renderFocusMetric(badge, label, value, detail = "") {
  return `
    <div class="focus-metric">
      <span class="focus-metric-badge">${badge}</span>
      <div class="focus-metric-copy">
        <small>${escapeXml(label)}</small>
        <strong>${escapeXml(value)}</strong>
        ${detail ? `<span class="focus-metric-detail">${escapeXml(detail)}</span>` : ""}
      </div>
    </div>
  `;
}

function projectCaseMeta(project) {
  const role = project.isGateway ? "Hub criativo" : "Produto autoral";
  return [
    { label: "Tipo", value: project.line || "Sistema criativo" },
    { label: "Papel", value: role },
    { label: "Estado", value: phaseStatus(project, { full: true }) },
  ];
}

function renderCaseMeta(items) {
  return `
    <div class="focus-case-grid" aria-label="Resumo do case">
      ${items
        .map(
          (item) => `
            <section>
              <span>${escapeXml(item.label)}</span>
              <p>${escapeXml(item.value)}</p>
            </section>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFocusActions(project) {
  if (project.isGateway && !activeGatewaySubprojectId) {
    return `
      <button class="secondary-action focus-action" type="button" data-focus-gateway>
        <span>Ver</span>
      </button>
    `;
  }

  return `
    <button class="secondary-action focus-action" type="button" data-focus-presentation>
      <span>Ver</span>
    </button>
    <button class="icon-button focus-heart-button" type="button" data-focus-support aria-label="Apoiar ${escapeXml(project.title)}">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.7c-1.6-1.8-4.4-2-6.3-.2-2 1.9-2 5 0 6.9l6.3 6 6.3-6c2-1.9 2-5 0-6.9-1.9-1.8-4.7-1.6-6.3.2Z" />
      </svg>
    </button>
  `;
}

function currentGatewayFocus(project) {
  if (!project.isGateway || !activeGatewaySubprojectId) return project;
  return findProjectById(activeGatewaySubprojectId) || project;
}

function renderGatewayStrip(project) {
  if (!project.isGateway || !project.subItems?.length) return "";

  return `
    <div class="sub-system-list" aria-label="Sistemas internos do Studio">
      ${project.subItems
        .map((item) => {
          const isActive = item.id === activeGatewaySubprojectId;
          return `
            <button class="sub-system-card${isActive ? " is-active" : ""}${isLevelComplete(item) ? " is-complete" : ""}" type="button" data-sub-project-id="${item.id}" aria-pressed="${isActive}" aria-label="${escapeXml(item.title)}">
              <span class="node-orb" style="--ring-progress: ${phaseProgressValue(item)}; --image-focus: ${imageFocus(item)}; --image-zoom: ${imageZoom(item)}; --image-shift-x: ${imageShift(item, "x")}; --image-shift-y: ${imageShift(item, "y")}">
                <span class="node-shell">
                  <img src="${projectImageSource(item)}" alt="Preview de ${escapeXml(item.title)}" />
                </span>
                <svg class="level-ring" viewBox="0 0 100 100" aria-hidden="true">
                  <circle class="level-track" cx="50" cy="50" r="46" pathLength="100"></circle>
                  <circle class="level-progress" cx="50" cy="50" r="46" pathLength="100"></circle>
                  <g class="level-marks">${renderLevelMarks(item.level)}</g>
                </svg>
              </span>
              <span class="sub-card-title">${item.title}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderProjectLinks(project) {
  const links = projectLinkSet(project);
  const playStoreChip = "playStoreUrl" in project ? renderLinkChip("playstore", "Play Store", links.playStore) : "";

  return `
    <div class="focus-links-card" aria-label="Links do projeto">
      ${renderLinkChip("github", "GitHub", links.github)}
      ${renderLinkChip("site", "Site", links.site)}
      ${playStoreChip}
      ${links.privacy ? renderLinkChip("privacy", "Privacidade", links.privacy) : ""}
      ${links.terms ? renderLinkChip("terms", "Termos", links.terms) : ""}
    </div>
  `;
}

function renderFocusPanel(project) {
  const displayProject = currentGatewayFocus(project);
  focusPanel.innerHTML = `
    ${renderGatewayStrip(project)}
    <div class="focus-project-band">
      <div class="focus-copy">
        <div class="focus-phase-row" aria-label="Fase atual">
          <span class="focus-phase-icon" aria-hidden="true">
            <img src="${phaseIconPath(displayProject.level)}" alt="" />
          </span>
          <div class="focus-phase-copy">
            <p class="focus-kicker">Nível ${displayProject.level}</p>
            <p class="focus-status">${focusStatusChip(displayProject)}</p>
          </div>
        </div>
        <p class="focus-line">${displayProject.line}</p>
        <p class="focus-impact">${displayProject.impact}</p>
        ${renderCaseMeta(projectCaseMeta(displayProject))}
      </div>
    </div>
    <div class="focus-footer">
      ${renderProjectLinks(displayProject)}
      <div class="focus-actions">
        ${renderFocusActions(displayProject)}
      </div>
    </div>
  `;

  focusPanel.querySelectorAll("[data-sub-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeGatewaySubprojectId = button.dataset.subProjectId;
      renderFocusPanel(project);
    });
  });

  focusPanel.querySelector("[data-focus-presentation]")?.addEventListener("click", () => {
    openProjectPresentation(displayProject, focusPanel.querySelector("[data-focus-presentation]"));
  });

  focusPanel.querySelector("[data-focus-support]")?.addEventListener("click", () => {
    openSupport(focusPanel.querySelector("[data-focus-support]"), displayProject);
  });

  focusPanel.querySelector("[data-focus-gateway]")?.addEventListener("click", () => {
    const firstSubProject = project.subItems?.[0] ? findProjectById(project.subItems[0].id) : null;
    if (!firstSubProject) return;
    activeGatewaySubprojectId = firstSubProject.id;
    renderFocusPanel(project);
  });
}

function selectProject(project) {
  setOrbitReveal(true);
  selectedProject = project;
  activeGatewaySubprojectId = null;
  restartHeroMotion("focus");
  hero?.classList.add("has-project-focus");
  orbitField.querySelectorAll(".project-node").forEach((node) => {
    const nodeProject = findProjectById(node.dataset.projectId);
    const isSelected = nodeProject?.id === project.id;
    node.classList.toggle("is-focused", isSelected);
    node.classList.toggle("is-dim", !isSelected);
    node.setAttribute("aria-pressed", String(isSelected));

    if (nodeProject) {
      setNodeLevel(node, nodeProject, isSelected);
    }
  });

  focusPanel.classList.add("is-active");
  renderFocusPanel(project);

  pulseCore();
  scheduleOrbitLayoutPasses();
}

function resetProjectFocus() {
  selectedProject = null;
  activeGatewaySubprojectId = null;
  restartHeroMotion("orbit");
  hero?.classList.remove("has-project-focus");
  focusPanel.classList.remove("is-active");
  focusPanel.innerHTML = orbitRevealed ? revealedHeroFocusPanelMarkup : dormantHeroFocusPanelMarkup;
  focusPanel.classList.toggle("is-visible", orbitRevealed);

  orbitField.querySelectorAll(".project-node").forEach((node) => {
    const nodeProject = findProjectById(node.dataset.projectId);
    node.classList.remove("is-focused", "is-dim");
    node.setAttribute("aria-pressed", "false");

    if (nodeProject) {
      setNodeLevel(node, nodeProject);
    }
  });

  scheduleOrbitLayoutPasses();
}

function pulseCore() {
  core.classList.remove("is-pulsing");
  window.requestAnimationFrame(() => {
    core.classList.add("is-pulsing");
  });
}

function openProjectModal(project) {
  selectedProject = project;
  presentationButton.hidden = false;
  modalImage.src = projectImageSource(project, "detail");
  modalImage.style.objectPosition = imageFocus(project);
  modalImage.style.setProperty("--image-zoom", imageZoom(project, "detail"));
  modalImage.alt = `Imagem principal de ${project.title}`;
  modalTitle.textContent = project.title;
  modalStatus.textContent = phaseStatus(project, { full: true });
  modalDescription.textContent = project.description || project.line || "";
  lastFocusedElement = document.activeElement;
  showDialog(projectModal, closeProjectButton);
}

function openProjectPresentation(project, returnFocusElement = document.activeElement) {
  selectedProject = project;
  activeSlideIndex = 0;
  slideDirection = 1;
  lastFocusedElement = returnFocusElement;
  slideshow.hidden = false;
  renderSlide();
  closeSlideshow.focus({ preventScroll: true });
}

function showDialog(dialog, focusTarget) {
  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  if (focusTarget instanceof HTMLElement) {
    window.requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
  }
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function openSupport(returnFocusElement = document.activeElement, project = null) {
  supportContextProject = project;
  renderSupportHub();
  copyFeedback.textContent = "";
  copyFeedback.hidden = true;
  qrWrap.hidden = true;
  lastFocusedElement = returnFocusElement;
  showDialog(supportModal, closeSupportButton);
}

async function copyPixKey() {
  try {
    await navigator.clipboard.writeText(SUPPORT.pixKey);
    copyFeedback.textContent = "Chave Pix copiada.";
    copyFeedback.hidden = false;
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = SUPPORT.pixKey;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    copyFeedback.textContent = "Chave Pix copiada.";
    copyFeedback.hidden = false;
  }
}

function renderPseudoQr() {
  const size = 17;
  const key = SUPPORT.pixKey;
  qrCode.innerHTML = "";

  for (let index = 0; index < size * size; index += 1) {
    const x = index % size;
    const y = Math.floor(index / size);
    const finder =
      (x < 5 && y < 5) ||
      (x > size - 6 && y < 5) ||
      (x < 5 && y > size - 6);
    const code = key.charCodeAt((index + x * 3 + y * 5) % key.length);
    const active = finder || ((code + x * 7 + y * 11 + index) % 5 < 2);
    const cell = document.createElement("span");
    cell.className = `qr-cell${active ? " is-on" : ""}`;
    qrCode.append(cell);
  }
}

function showQrCode() {
  renderPseudoQr();
  copyFeedback.hidden = true;
  qrWrap.hidden = false;
}

function slideImageSource(project, slide, slideIndex) {
  return slide.image || project.image || visualDataUri(project, "slide", slideIndex);
}

function projectSlides(project) {
  const override = PROJECT_DECK_OVERRIDES[project.id];
  if (override?.slides?.length) {
    return [...override.slides, { title: "Estado", text: "", image: "" }];
  }

  if (Array.isArray(project.slides) && project.slides.length) return project.slides;

  return [
    { title: project.title, text: "[Resumo claro do que o projeto faz]\n[Sistema ou conceito técnico]", image: "" },
    { title: "Interface", text: "[O que essa tela mostra]", image: "" },
    { title: "Sistema", text: "[Como funciona por trás]", image: "" },
    { title: "Uso real", text: "[Como é usado na prática]", image: "" },
    { title: "Ciclo do Sistema", text: "", image: "" },
  ];
}

function projectStateMap(project) {
  return PROJECT_DECK_OVERRIDES[project.id]?.state || null;
}

function projectLinkSet(project) {
  const legalSlug = projectLegalSlug(project);
  return {
    github: project.githubUrl || "",
    site: project.siteUrl || project.link || "",
    playStore: project.playStoreUrl || "",
    privacy: legalSlug ? `privacidade-${legalSlug}.html` : "",
    terms: legalSlug ? `termos-${legalSlug}.html` : "",
  };
}

function projectLegalSlug(project) {
  const id = projectMetaId(project);
  const slugs = {
    glyph: "glyph",
    kingsworld: "kingsworld",
    "mind-practice": "mind-practice",
    "elite-50": "elite-2050",
    scoretrader: "scoretrader",
  };
  return slugs[id] || "";
}

function renderLinkChip(kind, label, href, extraClass = "") {
  const classes = `focus-link-chip${href ? "" : " is-placeholder"}${extraClass ? ` ${extraClass}` : ""}`;
  return `
    <a class="${classes}" ${href ? `href="${href}" target="_blank" rel="noreferrer"` : 'href="#" aria-disabled="true" tabindex="-1"'} aria-label="${label}">
      <span class="focus-link-icon" aria-hidden="true">
        ${
          kind === "github"
            ? '<svg viewBox="0 0 24 24"><path d="M12 2.8A9.2 9.2 0 0 0 2.8 12a9.2 9.2 0 0 0 6.3 8.7c.5.1.7-.2.7-.5v-1.9c-2.6.6-3.2-1.1-3.2-1.1-.4-1-.9-1.3-.9-1.3-.8-.5 0-.5 0-.5.9 0 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8 0-.6.3-1 .6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.6 0-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.1 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.5-2.1 4.3-4.2 4.6.3.2.7.8.7 1.6v2.4c0 .3.2.7.7.5A9.2 9.2 0 0 0 21.2 12 9.2 9.2 0 0 0 12 2.8Z"/></svg>'
            : kind === "playstore"
              ? '<svg viewBox="0 0 24 24"><path d="M4.8 3.8 14.6 13 4.9 20.1c-.3-.2-.5-.6-.5-1V4.8c0-.4.2-.8.4-1Z"/><path d="m15.7 14 2.3 1.3c1 .5 1 .9 0 1.5l-2.7 1.5-3.2-3 3.6-1.3Z"/><path d="m18 7.3-2.4 1.4-3.4-3.2 2.8-1.6c.4-.2.8-.2 1.2 0L18 5c1 .6 1 .9 0 1.5Z"/><path d="m12.2 10.4 3 2.8-3.1 1.1L5.6 8.1c0-.1.1-.1.2-.2l6.4 2.5Z"/></svg>'
              : '<svg viewBox="0 0 24 24"><path d="M10 14a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 14"/><path d="M14 10a5 5 0 0 1 0 7L12.5 18.5a5 5 0 1 1-7-7L7 10"/></svg>'
        }
      </span>
      <span>${label}</span>
    </a>
  `;
}

function stateCardForLevel(level, status, tone) {
  return `
    <article class="state-level-card is-${tone}" aria-label="Nivel ${level}: ${phaseTitle(level)}. ${status}">
      <div class="state-level-top">
        <span class="state-level-icon" aria-hidden="true">
          <img src="${phaseIconPath(level)}" alt="" />
        </span>
        <div>
          <p class="state-level-kicker">Nivel ${level}</p>
          <h3>${escapeXml(phaseTitle(level))}</h3>
        </div>
      </div>
      <p class="state-level-status">${escapeXml(status)}</p>
    </article>
  `;
}

function openSlideshow() {
  if (!selectedProject) return;
  activeSlideIndex = 0;
  slideDirection = 1;
  projectModal.close();
  slideshow.hidden = false;
  renderSlide();
  closeSlideshow.focus({ preventScroll: true });
}

function closeSlideshowOverlay() {
  slideshow.hidden = true;
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function renderSlide() {
  const slides = projectSlides(selectedProject);
  const slide = slides[activeSlideIndex] ?? slides[0];
  const isFinalSlide = activeSlideIndex === slides.length - 1;
  slideFrame.classList.toggle("is-cycle-slide", isFinalSlide);
  slideFrame.classList.toggle("has-long-copy", String(slide.text || "").length > 130);
  slideImage.src = slideImageSource(selectedProject, slide, activeSlideIndex);
  slideImage.style.objectPosition = imageFocus(selectedProject, slide);
  slideImage.style.setProperty("--image-zoom", imageZoom(selectedProject, "slide", slide));
  slideImage.alt = `${selectedProject.title}: ${slide.title}`;
  slideKicker.textContent = `${selectedProject.title}  ·  Slide ${activeSlideIndex + 1} de ${slides.length}`;
  renderSlideContent(slide, isFinalSlide);
  renderSlideActions(isFinalSlide);

  slideDots.innerHTML = slides
    .map(
      (_, index) => `
        <button class="dot-button${index === activeSlideIndex ? " is-active" : ""}" type="button" aria-label="Ir para slide ${index + 1}"></button>
      `,
    )
    .join("");

  slideDots.querySelectorAll(".dot-button").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideDirection = index === activeSlideIndex ? slideDirection : index > activeSlideIndex ? 1 : -1;
      activeSlideIndex = index;
      renderSlide();
    });
  });

  restartSlideMotion(slideDirection);
}

function renderSlideContent(slide, isFinalSlide) {
  if (!isFinalSlide) {
    slideTitle.textContent = slide.title || selectedProject.title;
    slideText.hidden = false;
    slideText.textContent = slide.text || "[conteúdo a definir]";
    hideSystemCycleSlide();
    return;
  }

  renderSystemCycleSlide(selectedProject, slide);
}

function hideSystemCycleSlide() {
  slideSystemState.hidden = true;
  slideSystemState.classList.remove("is-live");
  slideSystemState.innerHTML = "";
}

function renderSystemCycleSlide(project) {
  const currentLevel = normalizedPhase(project.level);
  const previousLevel = Math.max(1, currentLevel - 1);
  const nextLevel = Math.min(10, currentLevel + 1);
  const states = projectStateMap(project) || {};
  const previousStatus = states[previousLevel] || (previousLevel < currentLevel ? "Fechado" : "Anterior");
  const currentStatus = states[currentLevel] || "Atual";
  const nextStatus = states[nextLevel] || (nextLevel > currentLevel ? "Proximo" : "Pendente");
  const links = projectLinkSet(project);

  slideTitle.textContent = "Estado";
  slideText.hidden = true;
  slideText.textContent = "";
  slideSystemState.hidden = false;
  slideSystemState.innerHTML = `
    <div class="state-level-stack" aria-label="Estado do projeto por niveis">
      ${stateCardForLevel(previousLevel, previousStatus, "previous")}
      ${stateCardForLevel(currentLevel, currentStatus, "current")}
      ${stateCardForLevel(nextLevel, nextStatus, "next")}
    </div>
    <div class="slide-links-card" aria-label="Links e apoio do projeto">
      <div class="slide-links-row">
        ${renderLinkChip("github", "GitHub", links.github, "slide-link-chip")}
        ${renderLinkChip("site", "Site", links.site, "slide-link-chip")}
        ${"playStoreUrl" in project ? renderLinkChip("playstore", "Play Store", links.playStore, "slide-link-chip") : ""}
        ${links.privacy ? renderLinkChip("privacy", "Privacidade", links.privacy, "slide-link-chip") : ""}
        ${links.terms ? renderLinkChip("terms", "Termos", links.terms, "slide-link-chip") : ""}
      </div>
      <button class="primary-action" type="button" data-open-support-from-slide>
        <span>Apoiar</span>
      </button>
    </div>
  `;
  slideSystemState.classList.remove("is-live");
  slideSystemState.setAttribute("aria-label", "Estado do projeto em tres niveis: anterior, atual e proximo.");
}

function renderSlideActions(isFinalSlide) {
  if (!isFinalSlide) {
    slideActions.hidden = true;
    slideActions.innerHTML = "";
    return;
  }

  slideActions.hidden = false;
  slideActions.innerHTML = "";

  slideSystemState.querySelector("[data-open-support-from-slide]")?.addEventListener("click", () => {
    slideshow.hidden = true;
    openSupport(supportTrigger);
  });
}

function moveSlide(direction) {
  const total = projectSlides(selectedProject).length;
  slideDirection = direction;
  activeSlideIndex = (activeSlideIndex + direction + total) % total;
  renderSlide();
}

function shouldResetFocusFromClick(target) {
  if (!selectedProject || !(target instanceof Element)) return false;
  if (!slideshow.hidden || projectModal.open || supportModal.open || signalModal.open) return false;

  return !target.closest(
    ".project-node, .partnership-scene-node, #focusPanel, #supportTrigger, #core, #partnershipForwardButton, dialog, #slideshow",
  );
}

function applyQuerySceneState() {
  const params = new URLSearchParams(window.location.search);
  const scene = params.get("scene");
  const focusId = params.get("focus");
  const shouldReveal = params.get("reveal") === "1" || Boolean(focusId) || scene === "parcerias";

  if (shouldReveal) {
    setOrbitReveal(true);
  }

  if (scene === "parcerias") {
    openPartnershipScene();
    return;
  }

  if (!focusId) return;

  const project = findProjectById(focusId);
  if (project) {
    selectProject(project);
  }
}

renderProjects();
renderStatusUI();
renderSupportCopy();
setContactTag("contrate");
setOrbitReveal(false);
applyQuerySceneState();
window.addEventListener("resize", layoutOrbit);
window.addEventListener("storage", (event) => {
  if (event.storageArea !== localStorage) return;
  if (![PROJECT_META_STORAGE_KEY, DASHBOARD_STATE_KEY].includes(event.key)) return;

  applySharedProjectMeta(projects);
  renderProjects();

  if (!selectedProject) {
    resetProjectFocus();
    return;
  }

  const refreshed = findProjectById(selectedProject.id);
  if (!refreshed) return;

  selectedProject = refreshed;
  selectProject(refreshed);

  if (projectModal.open) {
    modalStatus.textContent = phaseStatus(refreshed, { full: true });
    modalDescription.textContent = refreshed.description || refreshed.line || "";
  }

  if (!slideshow.hidden) {
    renderSlide();
  }
});

supportTrigger.addEventListener("click", () => openSupport(supportTrigger));
coreRevealButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  setOrbitReveal(true);
});
heroProjectsButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  setOrbitReveal(true);
});
sceneBackButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (activeScene === "partnerships") {
    closePartnershipScene();
    return;
  }

  if (selectedProject) {
    resetProjectFocus();
    return;
  }

  setOrbitReveal(false);
});
core?.addEventListener("click", () => {
  if (!orbitRevealed) {
    setOrbitReveal(true);
  }
});
partnershipForwardButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  openPartnershipScene();
});
partnershipNavButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openPartnershipScene();
  });
});
signalLaunchButtons.forEach((button) => {
  button.addEventListener("click", () => handleSignalLaunch(button.dataset.signalLaunch, button));
});
contactTagButtons.forEach((button) => {
  button.addEventListener("click", () => setContactTag(button.dataset.contactTag));
});
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = contactMailto();
});
contactPixButton?.addEventListener("click", () => openSupport(contactPixButton));
supportKeyButton?.addEventListener("click", copyPixKey);
copyPixButton.addEventListener("click", copyPixKey);
showQrButton.addEventListener("click", showQrCode);
presentationButton.addEventListener("click", openSlideshow);
closeProjectButton.addEventListener("click", () => closeDialog(projectModal));
closeSupportButton.addEventListener("click", () => closeDialog(supportModal));
closeSignalButton.addEventListener("click", () => closeDialog(signalModal));
closeSlideshow.addEventListener("click", closeSlideshowOverlay);
previousSlide.addEventListener("click", () => moveSlide(-1));
nextSlide.addEventListener("click", () => moveSlide(1));

document.addEventListener("click", (event) => {
  if (shouldResetFocusFromClick(event.target)) {
    resetProjectFocus();
  }
});

[projectModal, supportModal, signalModal].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });

  dialog.addEventListener("close", () => {
    if (!slideshow.hidden) return;

    if (lastFocusedElement instanceof HTMLElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (slideshow.hidden) {
    if (event.key === "Escape" && selectedProject && !projectModal.open && !supportModal.open && !signalModal.open) {
      resetProjectFocus();
    }
    return;
  }

  if (event.key === "Escape") {
    closeSlideshowOverlay();
  }

  if (event.key === "ArrowRight") {
    moveSlide(1);
  }

  if (event.key === "ArrowLeft") {
    moveSlide(-1);
  }
});


