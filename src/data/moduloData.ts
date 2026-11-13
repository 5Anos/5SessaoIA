/**
 * Dados integrais do Módulo 3: Ferramentas de IA na Educação
 * Fonte: Modulo3_FerramentasIA_2 | Genially | Autoria: Carla Oliveira (23 de fevereiro de 2026)
 * Nota: Contém exclusivamente o texto integral da plataforma Genially (Módulo 3),
 * reproduzido de forma estrita e fidedigna sem qualquer adição ou interpolação externa.
 */

export interface PageInfo {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  navGroup: 'inicio' | 'imagem' | 'prompts' | 'atividades' | 'bibliografia';
  category: 'Geral' | 'Imagem' | 'Áudio' | 'Referências';
  description: string;
}

export const PAGES_LIST: PageInfo[] = [
  {
    id: 'visao-geral',
    number: 1,
    title: 'Visão Geral & Objetivos do Módulo 3',
    shortTitle: 'Início & Objetivos',
    navGroup: 'inicio',
    category: 'Geral',
    description: 'Apresentação institucional, nota metodológica e objetivos de aprendizagem do módulo.',
  },
  {
    id: 'ferramentas-imagem',
    number: 2,
    title: 'Ferramentas de Imagem & Benefícios',
    shortTitle: 'Ferramentas Imagem',
    navGroup: 'imagem',
    category: 'Imagem',
    description: 'Capacidades, análise de 6 ferramentas de imagem, infográficos e 4 benefícios pedagógicos.',
  },
  {
    id: 'prompts-imagem',
    number: 3,
    title: 'Exemplos de Prompts para Imagens',
    shortTitle: 'Prompts Visuais',
    navGroup: 'prompts',
    category: 'Imagem',
    description: 'Os 12 prompts pedagógicos integrais para criação e exploração visual em sala de aula.',
  },
  {
    id: 'atividades-imagem',
    number: 4,
    title: 'Atividades em Sala de Aula: Imagem',
    shortTitle: 'Atividades Imagem',
    navGroup: 'atividades',
    category: 'Imagem',
    description: 'Cinco planos de atividades detalhados com objetivos, etapas de implementação e critérios de avaliação.',
  },
  {
    id: 'ferramentas-audio',
    number: 5,
    title: 'Ferramentas de Áudio & Gravação',
    shortTitle: 'Ferramentas Áudio',
    navGroup: 'imagem',
    category: 'Áudio',
    description: 'Capacidades de áudio, música e criação sonora com IA, ferramentas de reuniões e vantagens pedagógicas.',
  },
  {
    id: 'atividades-audio',
    number: 6,
    title: 'Atividades em Sala de Aula: Áudio',
    shortTitle: 'Atividades Áudio',
    navGroup: 'atividades',
    category: 'Áudio',
    description: 'Três atividades didáticas completas: Vozes do Património, Podcast Cidade 2050 e O Dobrador Poliglota.',
  },
  {
    id: 'bibliografia',
    number: 7,
    title: 'Bibliografia & Ficha Técnica',
    shortTitle: 'Bibliografia',
    navGroup: 'bibliografia',
    category: 'Referências',
    description: 'Referências bibliográficas académicas completas e identificação de autoria.',
  },
];

export const MODULE_OBJECTIVES: string[] = [
  'Conhecer diferentes ferramentas de IA uteis na educacao.',
  'Experimentar ferramentas de IA para texto, imagem, audio e video.',
  'Criar recursos educativos com apoio da IA (planos de aula, apresentacoes, atividades e videos).',
];

export const IMAGE_CAPABILITIES: string[] = [
  'Criar imagens a partir de texto (texto -> imagem).',
  'Gerar ilustracoes, fotografias e arte digital automaticamente.',
  'Editar imagens com recurso a instrucoes escritas.',
  'Remover ou substituir elementos de uma imagem.',
  'Melhorar a qualidade e aumentar a resolucao de imagens.',
  'Criar variacoes da mesma imagem com estilos diferentes.',
  'Produzir imagens personalizadas para diferentes contextos educativos.',
];

export interface ImageTool {
  id: string;
  name: string;
  focusFilter: 'iniciacao' | 'controlo-estilo' | 'edicao-texto';
  shortTag: string;
  summary: string;
  modelo?: string;
  planoGratuito: string;
  destaque: string;
}

export const IMAGE_TOOLS: ImageTool[] = [
  {
    id: 'microsoft-designer',
    name: 'Microsoft Designer',
    focusFilter: 'iniciacao',
    shortTag: 'DALL-E 3 · Conta Microsoft',
    summary: 'E a ferramenta de referencia para quem pretende comecar a explorar a IA generativa, pela sua simplicidade e eficacia imediata.',
    modelo: 'Utiliza a tecnologia mais avancada da OpenAI (DALL-E 3).',
    planoGratuito: 'Totalmente gratuito atraves de uma conta Microsoft. Oferece "impulsos" diarios para uma geracao rapida; apos o seu uso, a ferramenta continua disponivel, embora com um tempo de processamento superior.',
    destaque: 'Revela uma enorme facilidade na interpretacao de instrucoes detalhadas e e particularmente eficaz na inclusao de texto legivel dentro das imagens.',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    focusFilter: 'controlo-estilo',
    shortTag: '150 tokens diarios · Uso comercial',
    summary: 'Apresenta-se como uma solucao mais sofisticada, ideal para professores que procuram um controlo rigoroso sobre o estilo visual dos seus materiais.',
    planoGratuito: 'Disponibiliza 150 tokens diarios que se renovam a cada 24 horas, permitindo criar um volume consideravel de recursos pedagogicos todos os dias.',
    destaque: 'Permite ajustar dimensoes e escolher modelos artisticos especificos (como o Phoenix). Um ponto de grande valor e permitir o uso das imagens para fins comerciais ou publicos, mesmo na versao gratuita.',
  },
  {
    id: 'stamina',
    name: 'Plataforma de Estilos da Comunidade (Stamina)',
    focusFilter: 'controlo-estilo',
    shortTag: 'Creditos diarios · Poses e estilos',
    summary: 'E uma plataforma de grande versatilidade, recomendada para quem necessita de explorar uma vasta diversidade de estilos visuais num unico local.',
    planoGratuito: 'Funciona atraves de um sistema de creditos diarios (Stamina), renovados automaticamente.',
    destaque: 'Oferece acesso a uma biblioteca com modelos criados pela comunidade (desde o realismo ao estilo de banda desenhada) e inclui ferramentas que permitem replicar poses humanas ou formas especificas com grande precisao.',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    focusFilter: 'edicao-texto',
    shortTag: '25 creditos mensais · Preenchimento Generativo',
    summary: 'O Adobe Firefly foca-se na seguranca etica e na edicao inteligente, sendo ideal para trabalhar a partir de fotografias reais.',
    planoGratuito: 'Oferece uma quota de 25 creditos mensais para utilizacao gratuita.',
    destaque: 'As suas funcoes de "Preenchimento Generativo" permitem modificar partes de uma imagem (adicionar ou remover elementos) de forma natural, respeitando a iluminacao e a perspetiva da fotografia original.',
  },
  {
    id: 'open-source',
    name: 'Ferramenta Open Source (Sem Registo)',
    focusFilter: 'iniciacao',
    shortTag: 'Ilimitado · Sem conta ou registo',
    summary: 'E a ferramenta ideal para quem procura uma solucao sem qualquer barreira de entrada, sendo perfeita para demonstracoes rapidas em sala de aula.',
    modelo: 'Utiliza um modelo de codigo aberto (Open Source) que, embora menos sofisticado do que os lideres de mercado, e extremamente acessivel.',
    planoGratuito: 'Totalmente gratuito e ilimitado em termos de numero de geracoes, sendo suportado por publicidade no site.',
    destaque: 'Nao exige a criacao de conta ou registo para comecar a gerar imagens. E a solucao "clicar e criar" por excelencia, permitindo que os alunos comecem a trabalhar instantaneamente sem partilharem dados pessoais.',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    focusFilter: 'edicao-texto',
    shortTag: '10 a 20 geracoes diarias · Tipografia',
    summary: 'Esta ferramenta e a escolha logica para a criacao de cartazes, capas de livros ou materiais onde o texto escrito seja o elemento principal.',
    planoGratuito: 'Permite realizar entre 10 a 20 geracoes diarias, cujos creditos sao repostos a cada 24 horas.',
    destaque: 'Possui a melhor renderizacao tipografica do mercado. Garante que palavras ou frases complexas aparecam escritas corretamente na imagem, sem as distorcoes comuns noutras ferramentas.',
  },
];

export type PromptImageKey = 'space-library' | 'renewable-energy' | 'human-heart' | 'plant-cell';

export interface ImagePrompt {
  id: number;
  title: string;
  category: 'Ficção & Futuro' | 'Ciência & Anatomia' | 'Sociedade & Sustentabilidade';
  prompt: string;
  imageKey?: PromptImageKey;
  figureNumber?: string;
}

export const IMAGE_PROMPTS: ImagePrompt[] = [
  {
    id: 1,
    title: 'Biblioteca no espaco',
    category: 'Ficção & Futuro',
    prompt: 'Uma enorme biblioteca futurista construida dentro de uma estacao espacial em forma de anel, com estantes infinitas de livros flutuantes, astronautas a ler em gravidade zero, janelas gigantes com vista para a Terra, iluminacao suave azul, estilo cinematografico hiper-realista, ultra detalhado.',
    imageKey: 'space-library',
    figureNumber: 'Fig. 1',
  },
  {
    id: 2,
    title: 'Sala de aula digital',
    category: 'Ficção & Futuro',
    prompt: 'Uma sala de aula moderna onde os alunos usam tablets e oculos de realidade virtual para explorar planetas projetados no ar, ambiente tecnologico e futurista.',
  },
  {
    id: 3,
    title: 'Programador do futuro',
    category: 'Ficção & Futuro',
    prompt: 'Um programador a trabalhar num computador com varios ecras holograficos cheios de codigo e graficos, num escritorio futurista com vista para uma cidade tecnologica.',
  },
  {
    id: 4,
    title: 'Base humana em Marte',
    category: 'Ficção & Futuro',
    prompt: 'Uma base cientifica moderna em Marte com astronautas a trabalhar e veiculos espaciais estacionados.',
  },
  {
    id: 5,
    title: 'Agricultura tecnologica',
    category: 'Sociedade & Sustentabilidade',
    prompt: 'Uma estufa futurista onde robos cuidam de plantas e sensores digitais monitorizam o crescimento das culturas.',
  },
  {
    id: 6,
    title: 'Energia renovavel',
    category: 'Sociedade & Sustentabilidade',
    prompt: 'Um campo com turbinas eolicas gigantes e paineis solares ao nascer do sol, estilo fotografia realista.',
    imageKey: 'renewable-energy',
    figureNumber: 'Fig. 2',
  },
  {
    id: 7,
    title: 'Rua tecnologica',
    category: 'Sociedade & Sustentabilidade',
    prompt: 'Uma rua moderna com lojas digitais, ecras interativos nas paredes e pessoas a usar dispositivos inteligentes.',
  },
  {
    id: 8,
    title: 'Coracao humano',
    category: 'Ciência & Anatomia',
    prompt: 'Ilustracao detalhada de um coracao humano com as principais partes identificadas (atrios, ventriculos, valvulas e arterias), estilo diagrama educativo, fundo branco, cores claras.',
    imageKey: 'human-heart',
    figureNumber: 'Fig. 3',
  },
  {
    id: 9,
    title: 'Sistema circulatorio',
    category: 'Ciência & Anatomia',
    prompt: 'Diagrama do sistema circulatorio humano com veias e arterias destacadas em cores diferentes, corpo humano simplificado, estilo infografico educativo.',
  },
  {
    id: 10,
    title: 'Cerebro humano',
    category: 'Ciência & Anatomia',
    prompt: 'Ilustracao do cerebro humano com as principais areas identificadas (lobo frontal, parietal, temporal e occipital), estilo diagrama cientifico.',
  },
  {
    id: 11,
    title: 'Sistema digestivo',
    category: 'Ciência & Anatomia',
    prompt: 'Diagrama do sistema digestivo humano mostrando boca, esofago, estomago, intestino delgado e intestino grosso, estilo educativo.',
  },
  {
    id: 12,
    title: 'Celula vegetal',
    category: 'Ciência & Anatomia',
    prompt: 'Diagrama de uma celula vegetal com parede celular, cloroplastos e vacuolo, estilo ilustracao cientifica simples.',
    imageKey: 'plant-cell',
    figureNumber: 'Fig. 4',
  },
];

export interface ImageActivity {
  id: string;
  title: string;
  subject?: string;
  objetivos: string[];
  implementacao: {
    etapa: string;
    titulo: string;
    descricao: string;
    exemplos?: string[];
    detalhes?: string[];
  }[];
  avaliacao: {
    entrega?: string;
    itens: string[];
  };
}

export const IMAGE_ACTIVITIES: ImageActivity[] = [
  {
    id: 'estacoes-do-ano',
    title: 'ATIVIDADE: AS ESTACOES DO ANO COM IA',
    objetivos: [
      'Identificar as estacoes do ano',
      'Reconhecer mudancas na natureza',
      'Relacionar clima com o meio envolvente',
      'Utilizar ferramentas digitais com orientacao',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Observacao',
        descricao: 'O professor mostra imagens das estacoes do ano (Primavera, Verao, Outono, Inverno). Os alunos identificam: como esta o tempo (calor, frio, chuva...) e o que acontece na natureza (folhas, flores, neve...).',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Transformacao com IA',
        descricao: 'O professor apresenta uma imagem simples (ex: uma arvore ou paisagem). Com uma ferramenta de imagem com IA: > Os alunos ajudam a criar versoes da mesma imagem em diferentes estacoes.',
        exemplos: [
          '"A mesma arvore no inverno com neve"',
          '"A mesma arvore no outono com folhas castanhas no chao"',
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparacao e explicacao',
        descricao: 'Os alunos observam as imagens (antes e depois). Explicam o que mudou, qual e a estacao e como sabem.',
      },
    ],
    avaliacao: {
      itens: [
        'Reconhecimento das caracteristicas de cada estacao',
        'Capacidade de observacao',
        'Comunicacao simples e clara',
      ],
    },
  },
  {
    id: 'patrimonio-futuro',
    title: 'ATIVIDADE: PATRIMONIO E FUTURO',
    subject: 'Geografia / Historia / Cidadania',
    objetivos: [
      'Promover a consciencia civica e o desenvolvimento sustentavel.',
      'Dominar ferramentas de edicao generativa.',
      'Desenvolver o pensamento critico sobre o espaco urbano.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Diagnostico Local',
        descricao: 'O professor pede aos alunos que escolham um local degradado ou um espaco publico da sua cidade/vila que precise de intervencao. Os alunos fotografam o local ou procuram uma imagem real.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reabilitacao Utopica',
        descricao: 'Utilizando o Adobe Firefly (Preenchimento Generativo) ou o Leonardo.ai, os alunos devem projetar uma solucao sustentavel para esse espaco (ex: transformar um parque de estacionamento num jardim vertical).',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Exposicao de Impacto',
        descricao: 'Os alunos apresentam o "Antes" e o "Depois", justificando as escolhas urbanisticas e o impacto ambiental da sua proposta.',
      },
    ],
    avaliacao: {
      entrega: 'A fotografia original, a imagem gerada pela IA e uma breve memoria descritiva.',
      itens: [
        'Realismo e viabilidade da proposta',
        'Dominio tecnico da ferramenta',
        'Capacidade de argumentacao',
      ],
    },
  },
  {
    id: 'visualizing-idioms',
    title: 'ATIVIDADE: VISUALIZING IDIOMS',
    objetivos: [
      'Expandir o vocabulario e o dominio de expressoes idiomaticas.',
      'Praticar a expressao oral em lingua inglesa.',
      'Diferenciar linguagem literal de linguagem figurada.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha da Expressao',
        descricao: 'O professor apresenta uma lista de idioms (ex: "It\'s raining cats and dogs", "Piece of cake", "Break a leg"). Cada aluno ou grupo escolhe uma expressao.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Criacao Literal vs. Figurativa',
        descricao: 'Os alunos utilizam o Microsoft Designer para gerar duas imagens: uma que represente o sentido literal da frase e outra que ilustre o contexto real de utilizacao.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentacao Oral',
        descricao: 'Os alunos mostram as imagens e explicam, em Ingles, o significado da expressao e em que situacoes do dia a dia a utilizariam.',
      },
    ],
    avaliacao: {
      entrega: 'As duas imagens geradas e o guiao da explicacao oral.',
      itens: [
        'Correcao linguistica no uso do idioma',
        'Criatividade na interpretacao visual',
        'Clareza da exposicao oral',
      ],
    },
  },
  {
    id: 'alegoria-caverna',
    title: 'ATIVIDADE: A ALEGORIA DA CAVERNA MODERNA',
    objetivos: [
      'Relacionar o pensamento classico com problemas contemporaneos.',
      'Desenvolver a capacidade de abstracao e conceptualizacao.',
      'Estimular a reflexao critica sobre o impacto da tecnologia.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Estudo do Conceito',
        descricao: 'Apos a leitura do texto de Platao, o professor desafia os alunos a pensarem: "Quais sao as \'sombras\' e as \'cavernas\' da sociedade atual (redes sociais, desinformacao, bolhas digitais)?".',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reinterpretacao Visual',
        descricao: 'Os alunos utilizam o Leonardo.ai para criar uma versao contemporanea e visual da Alegoria da Caverna. Devem usar prompts que incluam elementos como ecras, tecnologia e distopia.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Debate Filosofico',
        descricao: 'As imagens sao projetadas e os alunos devem defender porque e que os elementos escolhidos representam a "prisao" ou a "libertacao" do pensamento no seculo XXI.',
      },
    ],
    avaliacao: {
      entrega: 'A imagem gerada e uma breve reflexao escrita (max. 200 palavras) sobre o simbolismo da imagem.',
      itens: [
        'Profundidade da analise filosofica',
        'Coerencia entre a imagem e o conceito de Platao',
      ],
    },
  },
  {
    id: 'biomecanica-movimento',
    title: 'ATIVIDADE: BIOMECANICA DO MOVIMENTO',
    objetivos: [
      'Compreender a biomecanica e a tecnica correta das modalidades.',
      'Desenvolver a capacidade de autoanalise e correcao motora.',
      'Utilizar referencias visuais para aprimorar a performance fisica.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Analise do Gesto Tecnico',
        descricao: 'O professor foca-se num movimento especifico (ex: o servico no voleibol ou o batimento de pernas no crol). Os alunos estudam as fases do movimento (preparacao, execucao e recuperacao).',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Storyboard Generativo',
        descricao: 'Os alunos utilizam a IA para gerar uma sequencia de 3 imagens que mostre a "forma perfeita" do movimento, prestando atencao a postura, angulos dos bracos e posicao dos pes.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Autocorrecao',
        descricao: 'Os alunos comparam as imagens da IA com videos de si proprios a realizar o exercicio, identificando pontos de melhoria na sua tecnica.',
      },
    ],
    avaliacao: {
      entrega: 'O conjunto de imagens da tecnica ideal e uma lista de 3 correcoes a fazer no seu proprio movimento.',
      itens: [
        'Identificacao correta das fases do gesto tecnico',
        'Rigor na analise comparativa',
      ],
    },
  },
];

export interface AudioActivity {
  id: string;
  title: string;
  objetivos: string[];
  implementacao: {
    etapa: string;
    titulo: string;
    descricao: string;
    ferramentas?: string[];
  }[];
  avaliacao: {
    entrega: string;
    itens: string[];
  };
}

export const AUDIO_ACTIVITIES: AudioActivity[] = [
  {
    id: 'vozes-do-patrimonio',
    title: 'ATIVIDADE: VOZES DO PATRIMONIO',
    objetivos: [
      'Desenvolver consciencia historica e patrimonial.',
      'Produzir discurso narrativo estruturado.',
      'Aplicar ferramentas digitais na criacao multimedia.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Investigacao Local',
        descricao: 'O professor solicita que os alunos escolham um monumento ou espaco historico da sua localidade. Devem pesquisar a sua origem, funcao e importancia historica.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Construcao do Guiao',
        descricao: 'Os alunos escrevem um monologo na 1.a pessoa, como se fossem uma personagem ligada ao espaco (ex: fundador, habitante, trabalhador da epoca).',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Producao Audio',
        descricao: 'Os alunos geram o audio e integram-no num pequeno video com imagens do local.',
        ferramentas: [
          'Canva (plano gratuito) - gravacao ou insercao de narracao; edicao de video com audio',
          'TTSMaker (gratuito online) - conversao texto-voz',
        ],
      },
    ],
    avaliacao: {
      entrega: 'Guiao escrito, Ficheiro audio e Video final.',
      itens: ['Rigor historico e Organizacao do discurso.'],
    },
  },
  {
    id: 'podcast-cidade-2050',
    title: 'ATIVIDADE: PODCAST "CIDADE 2050"',
    objetivos: [
      'Desenvolver pensamento critico sobre sustentabilidade.',
      'Estruturar comunicacao oral argumentativa.',
      'Trabalhar edicao de audio.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Problematizacao',
        descricao: 'O professor lanca a questao: "Como sera a nossa cidade em 2050?"',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Estrutura do Podcast',
        descricao: 'Cada grupo elabora perguntas e respostas fundamentadas.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Gravacao e Edicao',
        descricao: 'Producao do podcast recorrendo as ferramentas indicadas:',
        ferramentas: [
          'Audacity (gratuito) - edicao de audio',
          'Adobe Podcast - para criar o podcast',
          'Spotify for Podcasters (gratuito) - publicacao opcional',
          'TTSFree - geracao de vozes diferentes',
          'NotebookLM - para criar o podcast',
          'Gemini - para criar o podcast',
        ],
      },
    ],
    avaliacao: {
      entrega: 'Guiao estruturado e Ficheiro audio final.',
      itens: [
        'Coerencia argumentativa',
        'Criatividade',
        'Clareza na comunicacao',
        'Uso adequado da ferramenta',
      ],
    },
  },
  {
    id: 'dobrador-poliglota',
    title: 'ATIVIDADE: O DOBRADOR POLIGLOTA',
    objetivos: [
      'Desenvolver competencia linguistica.',
      'Avaliar criticamente traducoes automaticas.',
      'Melhorar vocabulario e estruturas gramaticais.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha do Video',
        descricao: 'Os alunos escolhem um video curto (1 minuto) na sua lingua materna ou o professor atribui videos a grupos de trabalho.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Traducao com IA',
        descricao: 'Os alunos utilizam ferramentas gratuitas para traduzir para a lingua que estao a aprender (Ingles, Espanhol, entre outras).',
        ferramentas: [
          'HeyGen (versao gratuita limitada)',
          'CapCut (gratuito)',
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Correcao',
        descricao: 'Comparam a traducao automatica com o original e identificam erros gramaticais, vocabulario inadequado e expressoes idiomaticas mal traduzidas.',
      },
    ],
    avaliacao: {
      entrega: 'Video original, Video traduzido e Lista de correcoes.',
      itens: [
        'Correcao linguistica das propostas',
        'Capacidade de identificar inadequacoes nas expressoes idiomaticas',
        'Fundamentacao gramatical das alteracoes',
      ],
    },
  },
];

export const BIBLIOGRAPHY = [
  {
    citation: 'Bloom, B. S. (1956). Taxonomy of educational objectives. Longmans.',
    author: 'Bloom, B. S.',
    year: '1956',
    title: 'Taxonomy of educational objectives',
    publisher: 'Longmans',
  },
  {
    citation: 'Bruner, J. (1996). The culture of education. Harvard University Press.',
    author: 'Bruner, J.',
    year: '1996',
    title: 'The culture of education',
    publisher: 'Harvard University Press',
  },
  {
    citation: 'Holmes, W., Bialik, M., & Fadel, C. (2019). Artificial intelligence in education. CCR.',
    author: 'Holmes, W., Bialik, M., & Fadel, C.',
    year: '2019',
    title: 'Artificial intelligence in education',
    publisher: 'CCR',
  },
  {
    citation: 'Kasneci, E., et al. (2023). ChatGPT for good? Learning and Individual Differences, 103.',
    author: 'Kasneci, E., et al.',
    year: '2023',
    title: 'ChatGPT for good?',
    publisher: 'Learning and Individual Differences, 103',
  },
  {
    citation: 'Mayer, R. E. (2020). Multimedia learning (3rd ed.). Cambridge University Press.',
    author: 'Mayer, R. E.',
    year: '2020',
    title: 'Multimedia learning (3rd ed.)',
    publisher: 'Cambridge University Press',
  },
  {
    citation: 'OECD. (2018). PISA 2018 assessment framework. OECD Publishing.',
    author: 'OECD',
    year: '2018',
    title: 'PISA 2018 assessment framework',
    publisher: 'OECD Publishing',
  },
  {
    citation: 'UNESCO. (2021). Media and information literacy curriculum for teachers.',
    author: 'UNESCO',
    year: '2021',
    title: 'Media and information literacy curriculum for teachers',
    publisher: 'UNESCO',
  },
];

/**
 * Funções puras para pesquisa, filtragem e progresso (testáveis com node:test)
 */
export function getPageById(id: string): PageInfo | undefined {
  return PAGES_LIST.find((p) => p.id === id);
}

export function getPageByNumber(num: number): PageInfo | undefined {
  return PAGES_LIST.find((p) => p.number === num);
}

export function filterPromptsByCategory(category: string): ImagePrompt[] {
  if (!category || category === 'Todos') return IMAGE_PROMPTS;
  if (category === 'Com Exemplo Visual') {
    return IMAGE_PROMPTS.filter((p) => Boolean(p.imageKey));
  }
  return IMAGE_PROMPTS.filter((p) => p.category === category);
}

export function filterImageTools(focus: string): ImageTool[] {
  if (!focus || focus === 'todas') return IMAGE_TOOLS;
  return IMAGE_TOOLS.filter((t) => t.focusFilter === focus);
}

export function calculateModuleProgress(visitedPages: number[], totalPages = PAGES_LIST.length): number {
  if (totalPages <= 0) return 0;
  const uniqueValid = new Set(visitedPages.filter((p) => p >= 1 && p <= totalPages));
  return Math.round((uniqueValid.size / totalPages) * 100);
}

export interface SearchResult {
  pageId: string;
  pageNumber: number;
  pageTitle: string;
  snippet: string;
}

export function searchModuloContent(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const page of PAGES_LIST) {
    if (page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)) {
      results.push({
        pageId: page.id,
        pageNumber: page.number,
        pageTitle: page.title,
        snippet: page.description,
      });
    }
  }

  for (const tool of IMAGE_TOOLS) {
    if (
      tool.name.toLowerCase().includes(q) ||
      tool.summary.toLowerCase().includes(q) ||
      tool.destaque.toLowerCase().includes(q) ||
      tool.planoGratuito.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'ferramentas-imagem',
        pageNumber: 2,
        pageTitle: `Ferramenta: ${tool.name}`,
        snippet: tool.summary,
      });
    }
  }

  for (const p of IMAGE_PROMPTS) {
    if (p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q)) {
      results.push({
        pageId: 'prompts-imagem',
        pageNumber: 3,
        pageTitle: `Prompt: ${p.title}`,
        snippet: p.prompt.length > 120 ? `${p.prompt.slice(0, 120)}...` : p.prompt,
      });
    }
  }

  for (const act of IMAGE_ACTIVITIES) {
    if (
      act.title.toLowerCase().includes(q) ||
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some((i) => i.descricao.toLowerCase().includes(q))
    ) {
      results.push({
        pageId: 'atividades-imagem',
        pageNumber: 4,
        pageTitle: act.title,
        snippet: act.objetivos.join(' · '),
      });
    }
  }

  for (const act of AUDIO_ACTIVITIES) {
    if (
      act.title.toLowerCase().includes(q) ||
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some((i) => i.descricao.toLowerCase().includes(q))
    ) {
      results.push({
        pageId: 'atividades-audio',
        pageNumber: 6,
        pageTitle: act.title,
        snippet: act.objetivos.join(' · '),
      });
    }
  }

  for (const b of BIBLIOGRAPHY) {
    if (b.citation.toLowerCase().includes(q)) {
      results.push({
        pageId: 'bibliografia',
        pageNumber: 7,
        pageTitle: `Bibliografia: ${b.author}`,
        snippet: b.citation,
      });
    }
  }

  return results;
}
