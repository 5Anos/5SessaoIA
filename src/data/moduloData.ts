/**
 * Dados estruturados do Módulo 3: Ferramentas de IA na Educação
 * Fonte base original: Modulo3_FerramentasIA_2 | Genially | Autoria: Carla Oliveira (23 de fevereiro de 2026)
 * Última revisão editorial: 13 de novembro de 2026.
 */

export type NavGroup =
  | 'inicio'
  | 'imagem'
  | 'prompts'
  | 'atividades'
  | 'audio'
  | 'etica'
  | 'bibliografia';

export interface PageInfo {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  navGroup: NavGroup;
  category: 'Geral' | 'Imagem' | 'Áudio' | 'Ética & Legislação' | 'Referências';
  description: string;
}

export const PAGES_LIST: PageInfo[] = [
  {
    id: 'visao-geral',
    number: 1,
    title: 'Visão Geral e Objetivos',
    shortTitle: 'Visão Geral',
    navGroup: 'inicio',
    category: 'Geral',
    description: 'Introdução ao módulo de formação docente, enquadramento metodológico e três objetivos de aprendizagem.',
  },
  {
    id: 'ferramentas-imagem',
    number: 2,
    title: 'Ferramentas de Imagem',
    shortTitle: 'Ferramentas Imagem',
    navGroup: 'imagem',
    category: 'Imagem',
    description: 'Benefícios para o professor, critérios de escolha e catálogo de ferramentas de imagem e recursos visuais com IA.',
  },
  {
    id: 'prompts-imagem',
    number: 3,
    title: 'Prompts para Criar Imagens',
    shortTitle: 'Prompts Imagem',
    navGroup: 'prompts',
    category: 'Imagem',
    description: 'Doze exemplos completos de prompts educativos com ferramenta recomendada, resultado esperado, alternativa gratuita e estado de validação.',
  },
  {
    id: 'atividades-imagem',
    number: 4,
    title: 'Atividades com Imagem',
    shortTitle: 'Atividades Imagem',
    navGroup: 'atividades',
    category: 'Imagem',
    description: 'Cinco propostas pedagógicas revistas com destinatários, duração, prompt, alternativa gratuita, etapas, avaliação e cuidados.',
  },
  {
    id: 'ferramentas-audio',
    number: 5,
    title: 'Ferramentas de Áudio',
    shortTitle: 'Ferramentas Áudio',
    navGroup: 'audio',
    category: 'Áudio',
    description: 'Tarefas sonoras diferenciadas e cinco plataformas identificadas para síntese de voz, melhoria de áudio, edição, podcasts e publicação.',
  },
  {
    id: 'atividades-audio',
    number: 6,
    title: 'Atividades com Áudio',
    shortTitle: 'Atividades Áudio',
    navGroup: 'audio',
    category: 'Áudio',
    description: 'Duas atividades completas (Vozes do Património e Podcast Cidade 2050) com guião, ferramentas, alternativa gratuita e representação visual.',
  },
  {
    id: 'etica-seguranca',
    number: 7,
    title: 'Ética, Segurança e Legislação',
    shortTitle: 'Ética e Segurança',
    navGroup: 'etica',
    category: 'Ética & Legislação',
    description: 'RGPD, proteção de imagem e voz de menores, direitos de autor, Regulamento (UE) 2024/1689 (AI Act), validação pedagógica e lista de verificação.',
  },
  {
    id: 'bibliografia',
    number: 8,
    title: 'Bibliografia e Recursos',
    shortTitle: 'Bibliografia',
    navGroup: 'bibliografia',
    category: 'Referências',
    description: 'Referências oficiais e académicas em formato APA 7, ficha técnica e aviso de atualização contínua.',
  },
];

export const MODULE_OBJECTIVES: string[] = [
  'Conhecer diferentes ferramentas de IA úteis na educação.',
  'Experimentar ferramentas de IA para texto, imagem, áudio e vídeo.',
  'Criar recursos educativos com apoio da IA (planos de aula, apresentações, atividades e vídeos).',
];

export const IMAGE_CAPABILITIES: string[] = [
  'Criar imagens a partir de descrições escritas (texto → imagem).',
  'Gerar ilustrações, imagens fotorrealistas e composições artísticas.',
  'Editar imagens existentes através de instruções em linguagem natural, nas ferramentas que disponibilizam edição.',
  'Remover, substituir ou acrescentar elementos em imagens, quando a ferramenta disponibiliza edição generativa.',
  'Aumentar a resolução e melhorar a aparência visual das imagens através de técnicas de reconstrução de detalhes. Este processo pode estimar novos detalhes, não recuperando necessariamente a informação original perdida.',
  'Criar diferentes versões de uma imagem, explorando estilos e composições visuais, quando essa funcionalidade está disponível.',
  'Produzir imagens personalizadas para diferentes contextos e objetivos educativos.',
];

export const TEACHER_IMAGE_BENEFITS: string[] = [
  'Personalização de recursos: Criar imagens adaptadas à idade, ao nível de ensino e às necessidades dos alunos.',
  'Diferenciação pedagógica: Produzir representações visuais com diferentes níveis de complexidade, adequadas aos objetivos de aprendizagem.',
  'Compreensão de conceitos: Tornar conceitos abstratos ou complexos mais acessíveis através de representações visuais.',
  'Criatividade e expressão: Criar cenários, personagens e recursos visuais para projetos disciplinares e interdisciplinares.',
  'Inclusão e acessibilidade: Explorar diferentes formas de representação visual, complementadas por texto alternativo e outros recursos de acessibilidade.',
  'Literacia visual e digital: Desenvolver a capacidade de analisar, questionar e avaliar criticamente imagens produzidas por inteligência artificial.',
];

export interface ImageTool {
  id: string;
  name: string;
  focusFilter: 'iniciacao' | 'controlo-estilo' | 'edicao-texto';
  shortTag: string;
  description: string;
  promptLanguage: string;
  capabilities: string[];
  educationalUse: string;
  freePlan: string;
  limitations: string;
  privacyOrAge: string;
  officialSource: string;
  officialUrl: string;
  freeAlternative: string;
}

export const IMAGE_TOOLS: ImageTool[] = [
  {
    id: 'microsoft-designer',
    name: 'Microsoft Designer',
    focusFilter: 'iniciacao',
    shortTag: 'Conta Microsoft · Criação acessível',
    description: 'Criação acessível de imagens e designs visuais através de instruções em linguagem natural.',
    promptLanguage: 'É possível utilizar instruções em português. Contudo, o texto integrado nas imagens pode surgir noutro idioma ou conter erros ortográficos. Rever sempre o resultado.',
    capabilities: [
      'Geração de imagens a partir de descrições textuais simples.',
      'Criação rápida de materiais visuais e composições de design.',
    ],
    educationalUse: 'Recomendado para docentes que pretendem iniciar-se na criação de ilustrações, recursos visuais para a sala de aula e cartazes simples.',
    freePlan: 'Acesso gratuito através de conta Microsoft. Uma utilização mais frequente pode exigir subscrição.',
    limitations: 'O texto gerado no interior das imagens pode não corresponder ao idioma solicitado ou conter erros ortográficos. A disponibilidade de funcionalidades generativas e os limites de utilização podem variar consoante a idade, a região e a conta.',
    privacyOrAge: 'A disponibilidade de funcionalidades de IA generativa pode depender da idade do utilizador e dos requisitos da conta Microsoft.',
    officialSource: 'Microsoft Designer (página oficial)',
    officialUrl: 'https://designer.microsoft.com/',
    freeAlternative: 'Canva Free ou Leonardo.Ai Free, ambos com os respetivos limites.',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai',
    focusFilter: 'controlo-estilo',
    shortTag: '150 tokens diários · Controlo criativo',
    description: 'Geração de imagens com diferentes estilos visuais e controlos criativos avançados.',
    promptLanguage: 'Não existe uma recomendação universal de idioma para todos os modelos. O desempenho depende do modelo selecionado. Rever sempre os resultados obtidos em português.',
    capabilities: [
      'Seleção de estilos visuais e modelos artísticos variados.',
      'Controlo mais detalhado de composição, dimensões e acabamento.',
    ],
    educationalUse: 'Criação de ilustrações detalhadas, cenários ficcionais, imagens de inspiração histórica, narrativa visual e projetos criativos. As representações históricas geradas devem ser identificadas como ilustrações, não como documentos históricos comprovativos.',
    freePlan: 'Disponibiliza 150 tokens diários em contas gratuitas elegíveis.',
    limitations: 'Os 150 tokens diários são uma dotação do plano gratuito. O consumo varia consoante o modelo, a resolução e a operação. Os tokens não utilizados não transitam para o dia seguinte. As gerações gratuitas são públicas.',
    privacyOrAge: 'No plano gratuito, as criações são públicas. A Leonardo.Ai conserva direitos de utilização, reprodução, modificação e distribuição dos conteúdos gerados, concedendo ao utilizador uma licença não exclusiva e isenta de royalties para utilizar as suas criações, incluindo comercialmente. Outros utilizadores podem aceder aos conteúdos públicos através das funcionalidades disponibilizadas pela plataforma. Não assumir que as imagens são privadas ou exclusivas.',
    officialSource: 'Leonardo.Ai (página oficial)',
    officialUrl: 'https://leonardo.ai/',
    freeAlternative: 'Microsoft Designer, com menos controlos criativos avançados.',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    focusFilter: 'edicao-texto',
    shortTag: 'Geração e edição · Conta Adobe',
    description: 'Geração e edição de imagens com inteligência artificial generativa, incluindo preenchimento e substituição de elementos.',
    promptLanguage: 'Suporta instruções em português e noutras línguas. A qualidade do resultado depende da clareza das instruções e do modelo utilizado.',
    capabilities: [
      'Geração de imagens com diferentes níveis de realismo e estilos visuais.',
      'Edição generativa, preenchimento, remoção e substituição de elementos em imagens.',
    ],
    educationalUse: 'Edição de materiais visuais, criação de ilustrações e adaptação de imagens para apresentações e fichas de trabalho.',
    freePlan: 'Os utilizadores gratuitos têm acesso a um número limitado de gerações diárias, sujeito às condições da conta e aos modelos disponíveis.',
    limitations: 'O número de gerações, as funcionalidades e os modelos disponíveis podem mudar. A utilização comercial e os direitos associados aos conteúdos dependem dos termos aplicáveis e dos direitos das imagens carregadas.',
    privacyOrAge: 'A geração de conteúdos não garante isenção automática de riscos jurídicos ou de direitos de autor; verificar sempre os termos da plataforma e os direitos sobre imagens carregadas.',
    officialSource: 'Adobe Firefly (página oficial)',
    officialUrl: 'https://firefly.adobe.com/',
    freeAlternative: 'Microsoft Designer ou Canva Free, sujeitos aos limites dos respetivos planos gratuitos.',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    focusFilter: 'edicao-texto',
    shortTag: '30 créditos semanais · Tipografia',
    description: 'Geração de imagens com especial atenção ao tratamento de texto e composição tipográfica.',
    promptLanguage: 'É possível escrever instruções em português. Contudo, o inglês apresenta maior precisão na representação tipográfica. Letras acentuadas e outros caracteres podem ser apresentados incorretamente ou não aparecer. Para materiais em português, é preferível acrescentar e rever o texto final num editor gráfico.',
    capabilities: [
      'Integração de títulos, palavras e frases na composição visual.',
      'Criação de cartazes, capas e peças de comunicação visual.',
    ],
    educationalUse: 'Cartazes escolares, capas de documentos, campanhas educativas e materiais onde o texto faz parte da imagem.',
    freePlan: 'As contas gratuitas registadas através de Google ou Apple recebem 30 créditos por semana. As contas criadas através de Microsoft ou email não recebem esta dotação gratuita.',
    limitations: 'Os créditos semanais são limitados. No plano gratuito, as imagens geradas são públicas. Os formatos e as opções de transferência também dependem do plano.',
    privacyOrAge: 'As imagens produzidas no plano gratuito são públicas. Verificar os requisitos de idade e as condições de utilização antes de carregar imagens de terceiros ou partilhar conteúdos.',
    officialSource: 'Ideogram (página oficial)',
    officialUrl: 'https://ideogram.ai/',
    freeAlternative: 'Canva Free ou Microsoft Designer para acrescentar manualmente texto em português após a geração da imagem.',
  },
  {
    id: 'canva',
    name: 'Canva',
    focusFilter: 'iniciacao',
    shortTag: 'Design e paginação · Plano Free',
    description: 'Plataforma de design visual, paginação, apresentações, cartazes, infográficos e materiais educativos.',
    promptLanguage: 'Português ou inglês. O Canva AI suporta português e inglês.',
    capabilities: [
      'Composição de apresentações, cartazes, infográficos e fichas didáticas.',
      'Integração de imagens geradas por IA com texto, esquemas e diagramas.',
    ],
    educationalUse: 'Integrar imagens geradas por IA em cartazes, apresentações, fichas de trabalho, infográficos e outros materiais didáticos. O Canva é especialmente útil para a composição visual e paginação dos recursos.',
    freePlan: 'O Canva Free disponibiliza uma dotação mensal limitada de ferramentas de IA Standard ou Premium, até 20 utilizações em condições simples.',
    limitations: 'As ferramentas de IA utilizam uma dotação mensal partilhada. O consumo varia consoante a ferramenta e a complexidade da tarefa. O Canva Educação tem condições diferentes do Canva Free, incluindo uma dotação de IA superior. Não assumir que existem 20 utilizações para cada ferramenta individual.',
    privacyOrAge: 'Verificar os termos de utilização aplicáveis a contas escolares ou pessoais e não carregar dados identificáveis de alunos sem autorização institucional.',
    officialSource: 'Canva (página oficial)',
    officialUrl: 'https://www.canva.com/',
    freeAlternative: 'Microsoft Designer (sujeito aos limites da conta) ou composição visual manual no LibreOffice Impress.',
  },
  {
    id: 'seaart-ai',
    name: 'SeaArt AI',
    focusFilter: 'controlo-estilo',
    shortTag: 'Créditos diários · Estilos e modelos',
    description: 'Plataforma online de criação e edição de imagens por inteligência artificial a partir de descrições escritas ou imagens de referência, com grande variedade de estilos visuais.',
    promptLanguage: 'Muitos modelos e fluxos de geração utilizam instruções e etiquetas em inglês. A qualidade do resultado depende do modelo selecionado.',
    capabilities: [
      'Geração de imagens a partir de texto e transformação de imagens de referência.',
      'Disponibilização de diferentes modelos e ferramentas de edição, cujas funcionalidades e limites dependem do modelo e do plano.',
    ],
    educationalUse: 'Produção de ilustrações temáticas, cenários históricos ou literários, personagens para narrativa visual e apoio a atividades criativas.',
    freePlan: 'O plano gratuito apresenta uma dotação diária de Stamina, indicada na página de preços da plataforma. A referência atual é de 130 Stamina por dia.',
    limitations: 'O custo de cada operação depende do modelo, da resolução e das definições escolhidas. A quantidade de imagens possível não é fixa. As condições de utilização e os créditos podem ser alterados pela plataforma.',
    privacyOrAge: 'Verificar os requisitos de idade, a visibilidade pública das criações, as condições de licenciamento dos modelos e as regras relativas ao carregamento de imagens de terceiros. Não utilizar imagens de alunos sem autorização adequada.',
    officialSource: 'SeaArt AI (página oficial)',
    officialUrl: 'https://www.seaart.ai/',
    freeAlternative: 'Microsoft Designer ou Adobe Firefly, sujeitos às respetivas condições de acesso gratuito.',
  },
];

export const OTHER_IMAGE_TOOLS: ImageTool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    focusFilter: 'edicao-texto',
    shortTag: 'Assistente conversacional · Imagem',
    description: 'Assistente conversacional da OpenAI com capacidades integradas de geração e edição de imagens diretamente na conversa, a partir de texto, imagens de referência ou esboços.',
    promptLanguage: 'Português ou inglês. É possível escrever instruções diretamente em português.',
    capabilities: [
      'Criação de ilustrações, cenas educativas e composições visuais com possibilidade de integrar texto na imagem. A legibilidade e a ortografia devem ser verificadas.',
      'Edição conversacional de imagens e ajuste de elementos específicos a partir de instruções, sujeita a variações no restante conteúdo.',
    ],
    educationalUse: 'Preparação de ilustrações para fichas de trabalho, esquemas explicativos, cartazes simples e refinamento iterativo de prompts com os alunos.',
    freePlan: 'A geração e edição de imagens estão disponíveis nos diferentes planos do ChatGPT, incluindo o gratuito, com limites de utilização que variam consoante o plano e as condições em vigor.',
    limitations: 'A disponibilidade e os limites de geração e edição variam. O texto integrado nas imagens deve ser sempre revisto.',
    privacyOrAge: 'O ChatGPT não se destina a crianças com menos de 13 anos. Entre os 13 e os 18 anos, é necessário consentimento parental. Em contexto educativo com crianças com menos de 13 anos, a interação deve ser conduzida por um adulto. Não introduzir dados pessoais identificáveis dos alunos.',
    officialSource: 'ChatGPT / OpenAI (página oficial)',
    officialUrl: 'https://chatgpt.com/',
    freeAlternative: 'Microsoft Designer ou Leonardo.Ai Free, ambos com os respetivos limites.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    focusFilter: 'controlo-estilo',
    shortTag: 'Assistente Google · Multimodal',
    description: 'Assistente multimodal da Google com geração integrada de imagens a partir de texto, combinação de referências e edição assistida por instruções.',
    promptLanguage: 'Português ou inglês. É possível escrever instruções diretamente em português.',
    capabilities: [
      'Geração de imagens ilustrativas, composições visuais e representações a partir de descrições em linguagem natural.',
      'Edição assistida por instruções, combinação de referências e integração de texto em imagens, sujeita às limitações do modelo utilizado.',
    ],
    educationalUse: 'Criação de apoios visuais para apresentações, sequências narrativas ilustradas, exemplificação de conceitos e materiais didáticos personalizados.',
    freePlan: 'Acesso gratuito através de conta Google elegível, sujeito às políticas e aos limites de utilização em vigor.',
    limitations: 'A disponibilidade da geração de imagens e os limites variam consoante o tipo de conta (pessoal ou escolar) e as regras regionais.',
    privacyOrAge: 'Nas contas pessoais, a geração de imagens está disponível a partir dos 13 anos ou da idade aplicável no país. A edição de imagens está reservada a utilizadores com 18 ou mais anos. Nas contas escolares Google Workspace for Education podem aplicar-se condições e restrições diferentes, definidas pela instituição.',
    officialSource: 'Google Gemini (página oficial)',
    officialUrl: 'https://gemini.google.com/',
    freeAlternative: 'Microsoft Designer ou Canva Free, sujeitos aos respetivos limites de utilização.',
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    focusFilter: 'iniciacao',
    shortTag: 'Assistente Microsoft · Criação visual',
    description: 'Assistente de inteligência artificial da Microsoft que permite gerar imagens a partir de instruções escritas e transformar imagens carregadas através de pedidos em linguagem natural.',
    promptLanguage: 'Português recomendado. Utilizar instruções claras em português.',
    capabilities: [
      'Geração de ilustrações, cartazes e conceitos visuais diretamente através de pedidos escritos no chat.',
      'Edição conversacional de imagens carregadas e possibilidade de solicitar alterações sucessivas. Para composição e edição gráfica mais desenvolvidas, pode recorrer-se separadamente ao Microsoft Designer, quando disponível.',
    ],
    educationalUse: 'Produção de imagens de apoio para apresentações, documentos, cartazes escolares e atividades de expressão visual.',
    freePlan: 'Acesso gratuito com conta Microsoft, sujeito aos limites de utilização definidos pela plataforma.',
    limitations: 'Textos longos gerados no interior da imagem exigem revisão ortográfica; os recursos disponíveis variam entre contas pessoais e institucionais.',
    privacyOrAge: 'A utilização do Copilot está sujeita a uma idade mínima de 13 anos, que pode ser superior consoante a região. Algumas funcionalidades podem ter restrições adicionais. Nas contas escolares, verificar as políticas e permissões institucionais.',
    officialSource: 'Microsoft Copilot (página oficial)',
    officialUrl: 'https://copilot.microsoft.com/',
    freeAlternative: 'Microsoft Designer para criação e edição visual, pertencendo ao mesmo ecossistema da Microsoft e sujeito aos respetivos limites.',
  },
  {
    id: 'notebooklm',
    name: 'Gemini Notebook',
    focusFilter: 'iniciacao',
    shortTag: 'Fontes documentais · Infográficos',
    description: 'Assistente de investigação e organização de informação baseado nas fontes documentais fornecidas pelo utilizador. Permite analisar documentos, produzir sínteses e criar recursos visuais fundamentados nessas fontes. Não é um gerador genérico de fotografias ou imagens artísticas.',
    promptLanguage: 'Português. Selecionar português como idioma do infográfico nas definições de geração.',
    capabilities: [
      'Organização e análise de fontes documentais, incluindo PDFs, apontamentos e outros documentos suportados.',
      'Criação de infográficos a partir das fontes fornecidas, com opções de idioma, nível de detalhe, orientação e estilo visual.',
    ],
    educationalUse: 'Criação de infográficos e resumos visuais a partir de textos e materiais curriculares fornecidos pelo professor. Adequado para apoiar a organização e comunicação de informação documental.',
    freePlan: 'O Gemini Notebook disponibiliza acesso gratuito com conta Google elegível, sujeito aos limites e políticas da plataforma.',
    limitations: 'Não é um gerador aberto de imagens artísticas. Os infográficos são produzidos por IA e podem conter erros factuais ou visuais. É indispensável verificar os dados e consultar as fontes originais.',
    privacyOrAge: 'A funcionalidade de geração de infográficos está atualmente limitada a utilizadores com mais de 18 anos. O acesso às restantes funcionalidades depende da idade aplicável, do tipo de conta e das condições do Google Workspace for Education. Não carregar documentos com dados pessoais ou informação confidencial sem autorização institucional.',
    officialSource: 'Gemini Notebook (Google)',
    officialUrl: 'https://notebook.google.com/',
    freeAlternative: 'Canva Free para composição manual de infográficos, não sendo uma ferramenta equivalente de análise baseada em fontes.',
  },
];

export type PromptImageKey =
  | 'space-library'
  | 'digital-classroom'
  | 'future-programmer'
  | 'mars-base'
  | 'tech-agriculture'
  | 'renewable-energy'
  | 'smart-street'
  | 'human-heart'
  | 'circulatory-system'
  | 'human-brain'
  | 'digestive-system'
  | 'plant-cell';

export type PromptTestStatus =
  | 'tested'
  | 'tested-with-limitations'
  | 'documentation-checked'
  | 'not-tested';

export const PROMPT_TEST_STATUS_LABELS: Record<PromptTestStatus, string> = {
  tested: 'Testado e validado',
  'tested-with-limitations': 'Testado com limitações',
  'documentation-checked': 'Compatibilidade verificada na documentação; execução não realizada',
  'not-tested': 'Por testar',
};

export interface ImagePrompt {
  id: number;
  title: string;
  category: 'Ficção & Futuro' | 'Ciência & Anatomia' | 'Sociedade & Sustentabilidade';
  language: string;
  objective: string;
  recommendedTool: string;
  prompt: string;
  expectedResult: string;
  freeAlternative: string;
  imageKey?: PromptImageKey;
  imageStatus: 'validated' | 'illustrative' | 'pending';
  testStatus: PromptTestStatus;
}

export const IMAGE_PROMPTS: ImagePrompt[] = [
  {
    id: 1,
    title: 'Biblioteca no espaço',
    category: 'Ficção & Futuro',
    language: 'Português',
    objective: 'Estimular a criatividade e a visualização de ambientes científicos e futuristas.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração educativa cinematográfica em formato horizontal 16:9 que mostre o interior de uma grande biblioteca científica num habitat espacial orbital futurista. Inclui estantes curvas cheias de livros, dois astronautas adultos a ler e janelas panorâmicas com a Terra visível ao fundo. Garante que o ambiente de microgravidade é visualmente coerente: os livros devem estar fixos nas estantes ou segurados pelos leitores, podendo apenas um pequeno número de objetos soltos flutuar suavemente, se adequado. Utiliza uma perspetiva ampla, iluminação azul suave com apontamentos dourados subtis, arquitetura futurista plausível e elevado detalhe visual, transmitindo calma, descoberta e conhecimento. Não incluas palavras, letras, logótipos nem marcas de água.',
    expectedResult: 'Biblioteca espacial com livros, astronautas e a Terra visível através das janelas.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'space-library',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 2,
    title: 'Sala de aula digital',
    category: 'Ficção & Futuro',
    language: 'Português',
    objective: 'Explorar cenários de aprendizagem enriquecidos por tecnologia e discutir as possibilidades e limitações da realidade virtual.',
    recommendedTool: 'Microsoft Designer',
    prompt: 'Cria uma ilustração educativa em formato horizontal 16:9 que mostre uma sala de aula contemporânea e luminosa, onde um grupo diverso de alunos explora o Sistema Solar com a orientação do professor. Inclui tablets e óculos de realidade virtual, bem como uma projeção educativa tridimensional partilhada dos planetas. Deixa claro que os planetas são representações educativas digitais e não objetos físicos na sala de aula, sem dar a entender que estão representados à escala. Utiliza uma sala acolhedora e acessível, cores equilibradas, tecnologia plausível e um estilo de ilustração editorial moderna. Não incluas texto, logótipos nem marcas de água.',
    expectedResult: 'Sala de aula contemporânea com alunos a explorar representações digitais tridimensionais do Sistema Solar.',
    freeAlternative: 'Leonardo.Ai',
    imageKey: 'digital-classroom',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 3,
    title: 'Programador do futuro',
    category: 'Ficção & Futuro',
    language: 'Português',
    objective: 'Relacionar competências digitais, programação e profissões emergentes.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração futurista realista em formato horizontal 16:9 que mostre um programador informático adulto a trabalhar num espaço tecnológico moderno. A pessoa está sentada a uma secretária com vários ecrãs holográficos que exibem estruturas abstratas de programação, diagramas e elementos de interface, sem incluir código legível, palavras fictícias nem texto sem sentido. Através de uma janela panorâmica vê-se uma cidade inteligente. Utiliza iluminação cinematográfica mas natural, composição equilibrada, ambiente profissional e pormenores tecnológicos plausíveis. Não incluas logótipos nem marcas de água.',
    expectedResult: 'Profissional adulto de programação num espaço tecnológico futurista, com interfaces abstratas e uma cidade inteligente ao fundo.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'future-programmer',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 4,
    title: 'Base humana em Marte',
    category: 'Ficção & Futuro',
    language: 'Português',
    objective: 'Explorar os desafios da exploração espacial, a investigação científica e a sustentabilidade em ambientes extremos.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração conceptual cientificamente plausível em formato horizontal 16:9 que mostre uma base humana funcional de investigação em Marte. Inclui módulos habitacionais pressurizados, câmaras de descompressão de ligação, painéis solares, um veículo explorador e dois astronautas com fatos espaciais pressurizados adequados. Mostra a superfície avermelhada marciana, montanhas distantes e uma atmosfera subtilmente poeirenta. A base deve parecer um posto científico realista concebido para sustentar a vida humana e não uma cidade futurista. Utiliza iluminação natural, proporções realistas e equipamento plausível. Não incluas texto, bandeiras, logótipos nem marcas de água.',
    expectedResult: 'Base de investigação funcional em Marte, com módulos pressurizados, painéis solares, astronautas e veículo explorador.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'mars-base',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 5,
    title: 'Agricultura tecnológica',
    category: 'Sociedade & Sustentabilidade',
    language: 'Português',
    objective: 'Compreender a relação entre tecnologia, agricultura, sustentabilidade e produção alimentar.',
    recommendedTool: 'Adobe Firefly',
    prompt: 'Cria uma imagem educativa de estilo fotorrealista em formato horizontal 16:9 que mostre uma estufa agrícola moderna e sustentável. Representa claramente estruturas de cultivo vertical e sistemas de cultivo hidropónico, mostrando plantas a crescer em tabuleiros ou canais organizados abastecidos por água rica em nutrientes. Inclui sensores ambientais, tubagens de rega e pequenos robôs autónomos a monitorizar as culturas. Torna os sistemas de cultivo visualmente plausíveis e distingue as estruturas de cultivo da tecnologia de monitorização. Utiliza luz natural, vegetação saudável e equipamento agrícola realista, evitando um aspeto exagerado de ficção científica. Não incluas texto nem logótipos.',
    expectedResult: 'Estufa sustentável com cultivo vertical, sistemas hidropónicos, sensores e automação agrícola.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'tech-agriculture',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 6,
    title: 'Energias renováveis',
    category: 'Sociedade & Sustentabilidade',
    language: 'Português',
    objective: 'Identificar fontes de energia renovável e discutir a transição energética.',
    recommendedTool: 'Adobe Firefly',
    prompt: 'Cria uma imagem de paisagem de estilo fotorrealista em formato horizontal 16:9 que mostre um local de energias renováveis com um parque eólico e painéis solares instalados numa disposição organizada e realista. Inclui turbinas eólicas com proporções plausíveis, painéis fotovoltaicos a acompanhar o relevo do terreno e vegetação natural em primeiro plano. A cena decorre ao nascer do sol, com luz natural suave e céu parcialmente limpo, transmitindo a relação entre a tecnologia das energias renováveis e o ambiente natural. O resultado deve assemelhar-se a uma imagem fotográfica realista e não a um diagrama digital. Não incluas texto, logótipos nem marcas de água.',
    expectedResult: 'Paisagem fotorrealista com turbinas eólicas, painéis solares e vegetação natural.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'renewable-energy',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 7,
    title: 'Rua tecnológica',
    category: 'Sociedade & Sustentabilidade',
    language: 'Português',
    objective: 'Discutir cidades inteligentes, mobilidade, acessibilidade e utilização da tecnologia no espaço público.',
    recommendedTool: 'Microsoft Designer',
    prompt: 'Cria uma visualização arquitetónica realista em formato horizontal 16:9 que mostre uma rua urbana inteligente num futuro próximo. Inclui edifícios contemporâneos, lojas com ecrãs digitais sem texto legível, sistemas interativos de informação pública, peões, ciclistas e transportes públicos sustentáveis. Mostra passeios acessíveis, passadeiras seguras e percursos adequados a pessoas com mobilidade reduzida. A rua deve parecer funcional, inclusiva, segura e centrada nas pessoas, evitando um ambiente distópico ou excesso de ecrãs. Utiliza iluminação natural e tecnologia urbana plausível. Não incluas logótipos nem marcas de água.',
    expectedResult: 'Rua urbana inteligente com tecnologia integrada, mobilidade sustentável e percursos acessíveis.',
    freeAlternative: 'Canva Free',
    imageKey: 'smart-street',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 8,
    title: 'Coração humano',
    category: 'Ciência & Anatomia',
    language: 'Português',
    objective: 'Apoiar a exploração visual da anatomia do coração e da organização das quatro cavidades cardíacas.',
    recommendedTool: 'Adobe Firefly para a ilustração base, com identificação posterior das estruturas no Canva.',
    prompt: 'Cria uma ilustração anatómica educativa simplificada e cientificamente rigorosa do coração humano em vista frontal anterior, tal como observado pela frente da pessoa. Mostra as quatro cavidades nas respetivas posições anatómicas corretas: a aurícula direita e o ventrículo direito devem aparecer do lado esquerdo do observador; a aurícula esquerda e o ventrículo esquerdo devem aparecer do lado direito do observador. Representa claramente os principais vasos sanguíneos e as suas ligações corretas: as veias cavas superior e inferior entram na aurícula direita; o ventrículo direito liga-se ao tronco pulmonar, que conduz às artérias pulmonares; as veias pulmonares entram na aurícula esquerda; e o ventrículo esquerdo liga-se à aorta. Utiliza as cores convencionais para representar a oxigenação do sangue: azul para o sangue desoxigenado (incluindo as veias cavas, as cavidades direitas e as artérias pulmonares) e vermelho para o sangue oxigenado (incluindo as veias pulmonares, as cavidades esquerdas e a aorta). Mantém proporções e ligações anatomicamente plausíveis, com estilo limpo de manual escolar de Ciências, fundo branco liso e separação visual nítida das estruturas. Absolutamente sem texto, sem etiquetas, sem legendas, sem letras, sem números, sem setas, sem anotações nem marcas de água; a imagem deve conter apenas a ilustração anatómica, pronta para o professor acrescentar legendas separadamente.',
    expectedResult: 'Ilustração anatómica simplificada do coração, sem legendas, preparada para receber identificações corretas.',
    freeAlternative: 'Construir o esquema no Canva ou Google Slides com base numa imagem anatómica de fonte credível.',
    imageKey: 'human-heart',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 9,
    title: 'Sistema circulatório',
    category: 'Ciência & Anatomia',
    language: 'Português',
    objective: 'Compreender a circulação sanguínea e distinguir artérias e veias pela direção do fluxo sanguíneo.',
    recommendedTool: 'Adobe Firefly para a imagem base e Canva para as legendas.',
    prompt: 'Cria uma ilustração educativa cientificamente rigorosa em formato horizontal 16:9 que mostre o sistema circulatório humano numa figura humana frontal simplificada. Representa o coração, os pulmões, a circulação sistémica e uma rede coerente de vasos sanguíneos. Distingue artérias e veias pela direção do fluxo sanguíneo: as artérias transportam sangue para fora do coração e as veias transportam sangue de volta ao coração. Utiliza as cores convencionais para representar a oxigenação do sangue, e não para identificar o tipo de vaso: o vermelho representa sangue oxigenado e o azul representa sangue desoxigenado. Mostra corretamente a circulação pulmonar: as artérias pulmonares transportam sangue desoxigenado do lado direito do coração para os pulmões e as veias pulmonares devolvem sangue oxigenado dos pulmões para a aurícula esquerda. Mostra corretamente a circulação sistémica: o sangue oxigenado sai do lado esquerdo do coração pela aorta e o sangue com menos oxigénio regressa pelas veias sistémicas ao lado direito do coração. Não representes todas as artérias a vermelho nem todas as veias a azul; as cores devem seguir a oxigenação, incluindo as exceções pulmonares. Utiliza estilo limpo de manual escolar de Ciências, fundo branco, trajetos vasculares anatomicamente plausíveis e distinção visual clara entre circulação pulmonar e circulação sistémica. Não incluas texto, letras, etiquetas, legendas nem marcas de água.',
    expectedResult: 'Esquema do sistema circulatório com circulação pulmonar e sistémica, cores convencionais de oxigenação e sem legendas.',
    freeAlternative: 'Google Slides ou Canva Free, com uma referência anatómica validada.',
    imageKey: 'circulatory-system',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 10,
    title: 'Cérebro humano',
    category: 'Ciência & Anatomia',
    language: 'Português',
    objective: 'Apoiar a identificação e localização dos quatro lobos do hemisfério cerebral.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração educativa cientificamente rigorosa do cérebro humano em vista lateral, mostrando um hemisfério cerebral. Distingue claramente os quatro lobos convencionalmente reconhecidos: lobo frontal na parte anterior, lobo parietal na região superior central, lobo temporal na zona lateral inferior e lobo occipital na parte posterior. Utiliza cores subtis e distintas para diferenciar as regiões, preservando a continuidade natural e a forma do córtex cerebral. Representa os limites como divisões anatómicas aproximadas e não como linhas retas artificiais ou peças isoladas. Utiliza estilo limpo de manual escolar de Ciências, fundo branco e contornos nítidos. Não incluas texto, letras, etiquetas, legendas nem marcas de água.',
    expectedResult: 'Hemisfério cerebral em vista lateral, com os quatro lobos diferenciados por cores suaves e sem legendas.',
    freeAlternative: 'Canva Free ou Google Slides, utilizando uma imagem anatómica validada.',
    imageKey: 'human-brain',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 11,
    title: 'Sistema digestivo',
    category: 'Ciência & Anatomia',
    language: 'Português',
    objective: 'Compreender o percurso dos alimentos no tubo digestivo e distinguir os órgãos acessórios da digestão.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração educativa simplificada e cientificamente rigorosa do sistema digestivo humano em vista frontal do tronco. Mostra o tubo digestivo completo na sequência anatómica correta: boca, faringe, esófago, estômago, intestino delgado, intestino grosso, reto e ânus. Mostra também os principais órgãos digestivos acessórios nas respetivas posições anatómicas corretas: fígado, vesícula biliar e pâncreas. Faz uma distinção visual clara entre o tubo digestivo, por onde passam os alimentos, e os órgãos acessórios, que contribuem para a digestão mas não fazem parte do trajeto alimentar; não representes alimentos a passar pelo fígado, pela vesícula biliar nem pelo pâncreas. Utiliza posicionamento anatómico realista, formas simples, cores suaves e estilo limpo de manual escolar de Ciências, com fundo branco, contornos nítidos e sem elementos decorativos desnecessários. Não incluas texto, letras, etiquetas, legendas nem marcas de água.',
    expectedResult: 'Diagrama do sistema digestivo com o percurso alimentar completo e os órgãos acessórios corretamente representados.',
    freeAlternative: 'Canva Free ou Google Slides, com uma referência anatómica validada.',
    imageKey: 'digestive-system',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 12,
    title: 'Célula vegetal',
    category: 'Ciência & Anatomia',
    language: 'Português',
    objective: 'Identificar os principais constituintes de uma célula vegetal fotossintética.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração educativa cientificamente rigorosa de uma célula vegetal fotossintética típica em corte transversal, com forma aproximadamente retangular. Representa claramente: a parede celular como limite rígido mais externo, a membrana plasmática imediatamente no interior da parede celular, o citoplasma, o núcleo, os cloroplastos, um grande vacúolo central e as mitocôndrias. Mostra o grande vacúolo central a ocupar uma parte substancial da célula, com o citoplasma e os organelos dispostos de forma plausível à sua volta. Coloca os cloroplastos no citoplasma e representa-os como organelos de uma célula vegetal fotossintética típica, sem dar a entender que todas as células vegetais contêm necessariamente cloroplastos. Utiliza estilo limpo de manual escolar de Ciências, cores suaves mas distinguíveis, fundo branco e organização anatómica clara. Não incluas texto, letras, etiquetas, legendas nem marcas de água.',
    expectedResult: 'Ilustração de uma célula vegetal típica, com parede celular, membrana, núcleo, cloroplastos, vacúolo e mitocôndrias.',
    freeAlternative: 'Canva Free ou Google Slides, com base numa referência científica validada.',
    imageKey: 'plant-cell',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
];

export interface ImageActivityTool {
  name: string;
  url: string;
}

export interface ImageActivityToolRecommendation {
  name: string;
  url: string;
  role: 'Principal' | 'Alternativa';
  justificacao: string;
}

export interface ImageActivityStage {
  etapa: string;
  titulo: string;
  descricao: string;
  pontos?: string[];
  exemplosTitle?: string;
  exemplos?: string[];
  ferramentas?: ImageActivityTool[];
  nota?: string;
}

export interface ImageActivity {
  id: string;
  title: string;
  subtitle?: string;
  estimatedDuration: string;
  materials: string[];
  prompt: string;
  promptTip: string;
  promptAdaptation: string;
  objetivos: string[];
  ferramentasRecomendadas: ImageActivityToolRecommendation[];
  implementacao: ImageActivityStage[];
  avaliacao: {
    entrega?: string[];
    itens: string[];
  };
}

export const IMAGE_ACTIVITIES: ImageActivity[] = [
  {
    id: 'estacoes-do-ano',
    title: 'ATIVIDADE: AS ESTAÇÕES DO ANO COM IA',
    subtitle: 'Estudo do Meio · 1.º Ciclo (3.º e 4.º anos) — adaptável',
    estimatedDuration: '60 minutos',
    materials: [
      'Fotografia de base de uma árvore ou paisagem do meio local, sem pessoas identificáveis (captada pelo docente ou com autorização/licença adequada).',
      'Computador ou tablet com ligação à internet e ferramenta de imagem com IA elegível, utilizada pelo docente (ou por alunos elegíveis segundo as regras da escola).',
      'Grelha de observação impressa ou digital para registar estados do tempo e alterações sazonais observadas.',
    ],
    prompt:
      'Utiliza a imagem fornecida como referência visual. Representa [TIPO DE ÁRVORE OU PAISAGEM] na estação [ESTAÇÃO DO ANO], no contexto de [REGIÃO OU CONTEXTO LOCAL]. Mantém, na medida do possível, a mesma árvore ou paisagem, o mesmo ponto de vista, o mesmo enquadramento e a mesma composição. Altera apenas as características sazonais adequadas à estação selecionada e ao contexto local, representando mudanças plausíveis na vegetação, na luminosidade e nas condições ambientais. Respeita a distinção entre espécies de folha caduca e de folha persistente e evita acrescentar automaticamente neve, flores, folhas caídas ou outros elementos sazonais quando não forem adequados à espécie ou à região escolhidas. Não incluas texto, legendas nem objetos alheios à paisagem.',
    promptTip:
      'Adapte o pedido à espécie observada e ao clima habitual da região da turma: indique se a árvore é de folha caduca ou persistente, descreva a luminosidade e o estado do tempo típicos da zona e evite recomendar ou assumir a neve como característica universal do inverno em Portugal.',
    promptAdaptation:
      'Substitua [ESTAÇÃO DO ANO], [TIPO DE ÁRVORE OU PAISAGEM] e [REGIÃO OU CONTEXTO LOCAL] consoante a estação e o ambiente local trabalhados (por exemplo, um sobreiro no Alentejo ou um castanheiro em Trás-os-Montes), mantendo a mesma imagem de referência para facilitar a comparação.',
    objetivos: [
      'Identificar as quatro estações do ano.',
      'Reconhecer alterações observáveis na natureza ao longo do ano, distinguindo árvores de folha caduca e de folha persistente.',
      'Relacionar as estações com estados do tempo típicos e com características do meio local, distinguindo estado do tempo de clima.',
      'Utilizar ferramentas digitais com orientação do professor.',
    ],
    ferramentasRecomendadas: [
      {
        name: 'Adobe Firefly',
        url: 'https://firefly.adobe.com/',
        role: 'Principal',
        justificacao:
          'Permite selecionar zonas de uma fotografia de referência através do Preenchimento Generativo e experimentar alterações sazonais mediante instrução textual. As condições de acesso e conta podem mudar e devem ser verificadas antes da utilização em aula.',
      },
      {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        role: 'Alternativa',
        justificacao:
          'Permite carregar uma imagem de referência e pedir alterações sazonais por texto; a preservação exata da composição deve ser verificada e as condições de acesso e idade têm de ser confirmadas previamente.',
      },
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Observação das características sazonais',
        descricao:
          'O professor mostra fotografias reais do meio local nas quatro estações (primavera, verão, outono e inverno), ajudando os alunos a distinguir o estado do tempo num dado momento do clima habitual da região. Quando explicar a causa das estações, clarifica que resultam da inclinação do eixo da Terra combinada com a sua translação anual em redor do Sol (enquanto a rotação explica o dia e a noite). Os alunos identificam:',
        pontos: [
          'Estados do tempo típicos (temperatura, chuva, vento, nebulosidade) e características do clima local.',
          'O que muda e o que se mantém na vegetação da região (distinguindo árvores de folha caduca de árvores de folha persistente).',
        ],
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Transformação de imagem orientada pelo professor',
        descricao:
          'A partir de uma única fotografia de base, o professor opera a ferramenta de imagem com IA (ou acompanha os alunos quando elegíveis) enquanto a turma colabora na construção dos pedidos para gerar versões da mesma paisagem em diferentes estações.',
        exemplosTitle: 'Exemplos de adaptações locais:',
        exemplos: [
          '«Castanheiro no outono em Trás-os-Montes, com folhas amarelas e castanhas, algumas folhas no chão e luz suave»',
          '«Sobreiro no inverno no Alentejo, mantendo a copa de folha persistente, céu parcialmente nublado e pastagem verde sem neve»',
        ],
        nota: 'Nota pedagógica: as imagens geradas por IA são interpretações ilustrativas e não constituem prova científica do que acontece na natureza; devem ser sempre confrontadas com a realidade da espécie e da região.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparação e explicação',
        descricao:
          'Usando sempre a mesma imagem de referência como termo de comparação, os alunos observam as diferentes versões sazonais geradas e verificam que alterações fazem sentido no seu meio local e que imprecisões possam ter sido introduzidas pela IA. Explicam:',
        pontos: [
          'Que alterações observaram na árvore ou paisagem e no estado do tempo representado.',
          'A que estação e contexto local corresponde cada imagem.',
          'Que elementos são plausíveis na natureza da sua região e quais correspondem a possíveis erros da IA.',
        ],
      },
    ],
    avaliacao: {
      entrega: [
        'Uma comparação das imagens das diferentes estações obtidas a partir da mesma referência.',
        'Uma breve explicação oral ou escrita que identifique as alterações observadas e distinga características plausíveis de possíveis erros da IA.',
      ],
      itens: [
        'Observação e reconhecimento das características sazonais e das diferenças entre espécies de folha caduca e persistente.',
        'Compreensão da relação entre estações, estados do tempo típicos e meio local.',
        'Clareza e fundamentação da explicação (centrada na compreensão e não na qualidade estética da imagem gerada).',
      ],
    },
  },
  {
    id: 'patrimonio-futuro',
    title: 'ATIVIDADE: ESPAÇOS PÚBLICOS SUSTENTÁVEIS',
    subtitle: 'Geografia / Cidadania e Desenvolvimento · articulação possível com História',
    estimatedDuration: '60 a 90 minutos',
    materials: [
      'Fotografia de um espaço público local sem pessoas identificáveis, matrículas ou dados privados (captada pelo docente ou com autorização/licença compatível).',
      'Dispositivos com acesso à ferramenta de imagem elegível (após verificação prévia de conta, idade e políticas da escola) e guião de critérios de sustentabilidade, acessibilidade e viabilidade urbana.',
      'Suporte de apresentação (diapositivos ou ficha digital) para o confronto crítico entre a imagem original e a proposta conceptual.',
    ],
    prompt:
      'Utiliza a fotografia fornecida de [ESPAÇO PÚBLICO] como referência visual. Mantém a estrutura principal e a perspetiva do espaço original, na medida em que a ferramenta o permita. Cria uma proposta visual conceptual de requalificação sustentável para responder a [PROBLEMA IDENTIFICADO] e às necessidades de [NECESSIDADES DA COMUNIDADE], respeitando [CARACTERÍSTICAS LOCAIS]. Integra acessibilidade e circulação inclusiva, zonas de sombra e conforto térmico, vegetação adequada (preferencialmente espécies autóctones adaptadas ao local, com baixo consumo de água e manutenção realista), promoção da biodiversidade, materiais duráveis e apropriados, mobilidade pedonal e utilização pública segura, preservando características locais relevantes. Não incluas pessoas identificáveis, texto nem logótipos.',
    promptTip:
      'Indique materiais construtivos duráveis e coerentes com o contexto (ex.: pavimento permeável, pedra natural local ou madeira tratada), espécies autóctones de baixa necessidade hídrica e condições concretas de acessibilidade (ex.: ausência de degraus, percursos contínuos e bancos com encosto).',
    promptAdaptation:
      'Preencha [ESPAÇO PÚBLICO], [PROBLEMA IDENTIFICADO], [NECESSIDADES DA COMUNIDADE] e [CARACTERÍSTICAS LOCAIS] com base no diagnóstico real do espaço (ex.: criar ensombramento e percursos pedonais acessíveis numa praça exposta ao calor), evitando intervenções incoerentes com a função e a escala do local.',
    objetivos: [
      'Diagnosticar problemas reais de sustentabilidade, acessibilidade e conforto num espaço público local.',
      'Conceber propostas de requalificação sustentáveis e viáveis, adequadas às necessidades da comunidade e às características locais.',
      'Experimentar ferramentas de edição generativa com orientação, analisando criticamente os limites dos conceitos visuais gerados.',
    ],
    ferramentasRecomendadas: [
      {
        name: 'Adobe Firefly',
        url: 'https://firefly.adobe.com/',
        role: 'Principal',
        justificacao:
          'O Preenchimento Generativo utiliza áreas selecionadas de uma imagem e uma instrução textual para adicionar ou substituir elementos visuais. Pode alterar detalhes arquitetónicos ou geométricos originais e as suas condições de acesso e conta devem ser verificadas antes da aula.',
      },
      {
        name: 'Leonardo.Ai',
        url: 'https://leonardo.ai/',
        role: 'Alternativa',
        justificacao:
          'Utiliza referências de imagem e fluxos de orientação visual distintos do processo de seleção e preenchimento local do Adobe Firefly; não garante a preservação perfeita da arquitetura original e as condições de utilização podem mudar.',
      },
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Diagnosticar o espaço público e identificar uma necessidade real de melhoria',
        descricao:
          'Com orientação do professor, os alunos selecionam um espaço público próximo que necessite de melhoria (falta de sombra, barreiras arquitetónicas, escassez de zonas verdes ou conflito entre peões e trânsito) e registam a função do espaço, as características locais e uma fotografia sem pessoas identificáveis ou matrículas.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Proposta de Requalificação Sustentável',
        descricao:
          'Os alunos criam uma proposta visual conceptual utilizando o Adobe Firefly (selecionando áreas da fotografia para edição localizada com Preenchimento Generativo) ou o Leonardo.ai (através de referências de imagem e fluxos de orientação próprios, distintos dos do Firefly). A imagem obtida funciona apenas como esboço visual conceptual que exige análise crítica, e não como projeto urbanístico tecnicamente validado.',
        ferramentas: [
          { name: 'Adobe Firefly', url: 'https://firefly.adobe.com/' },
          { name: 'Leonardo.ai', url: 'https://leonardo.ai/' },
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentar e justificar a proposta',
        descricao:
          'Os alunos confrontam a imagem original com a proposta gerada e justificam as opções adotadas. Com orientação do professor, avaliam a relevância local, a acessibilidade inclusiva, o consumo de água, a manutenção, a biodiversidade, a viabilidade prática e eventuais alterações geométricas introduzidas pela ferramenta.',
      },
    ],
    avaliacao: {
      entrega: [
        'Imagem original do espaço público (quando legalmente utilizável e sem dados pessoais).',
        'Proposta visual gerada pela ferramenta de IA.',
        'Breve memória descritiva e justificativa das escolhas realizadas e da comparação crítica entre as duas imagens.',
      ],
      itens: [
        'Identificação rigorosa do problema e das necessidades da comunidade.',
        'Relevância, sustentabilidade, acessibilidade e viabilidade da intervenção proposta.',
        'Justificação das escolhas urbanísticas e comparação crítica entre o espaço original e a proposta gerada (não sendo o realismo visual ou o domínio técnico da ferramenta o critério principal).',
      ],
    },
  },
  {
    id: 'expressoes-idiomaticas',
    title: 'ATIVIDADE: EXPRESSÕES IDIOMÁTICAS EM IMAGENS',
    subtitle: 'Inglês / Línguas Estrangeiras · 2.º e 3.º Ciclos (5.º a 9.º anos) — adaptável',
    estimatedDuration: '60 minutos',
    materials: [
      'Lista de expressões idiomáticas selecionada e validada pelo docente (ex.: «It\'s raining cats and dogs», «Piece of cake», «Break a leg»).',
      'Acesso a ferramenta de imagem elegível (ex.: Microsoft Designer ou alternativa verificada pelo docente quanto a idade mínima, conta e política escolar; quando os alunos não puderem aceder diretamente, o docente opera a ferramenta).',
      'Dicionário monolingue ou bilingue fiável para confirmar o significado idiomático e os contextos adequados de utilização.',
    ],
    prompt:
      'Geração 1 (sentido literal) — Cria uma única ilustração em [ESTILO VISUAL] que represente exclusivamente o significado literal das palavras da expressão inglesa [EXPRESSÃO IDIOMÁTICA], de forma adequada à idade dos alunos e sem representar ferimentos gráficos nem violência. Não incluas texto, legendas, etiquetas nem balões de diálogo.\n\nGeração 2 (sentido idiomático) — Cria uma única ilustração independente, mantendo exatamente o mesmo [ESTILO VISUAL] da Geração 1, que represente o significado idiomático de [EXPRESSÃO IDIOMÁTICA] num contexto de utilização real validado pelo professor ou por dicionário fiável. Não incluas texto, legendas, etiquetas, balões de diálogo nem pistas visuais que revelem antecipadamente a resposta.',
    promptTip:
      'Gere as duas imagens em duas execuções separadas (nunca numa única imagem composta) e reutilize exatamente a mesma descrição em [ESTILO VISUAL] (ex.: «ilustração editorial em linhas limpas, cores suaves e composição centrada») para manter uma identidade visual coerente.',
    promptAdaptation:
      'Substitua [EXPRESSÃO IDIOMÁTICA] pela expressão validada em aula (recordando que o sentido idiomático depende do contexto e do registo de uso, não sendo uniforme em toda a língua inglesa). Para «Break a leg» (desejar boa sorte antes de uma atuação), garanta que a imagem literal não mostra lesões ou violência.',
    objetivos: [
      'Compreender o significado e o contexto adequado de utilização de expressões idiomáticas em inglês.',
      'Distinguir linguagem literal de linguagem figurada através da análise comparativa.',
      'Explicar oralmente, em inglês adequado ao nível de ensino, a diferença entre os dois sentidos e uma situação de uso.',
    ],
    ferramentasRecomendadas: [
      {
        name: 'Microsoft Designer',
        url: 'https://designer.microsoft.com/',
        role: 'Principal',
        justificacao:
          'Permite gerar imagens separadas a partir de descrições textuais. As funcionalidades de IA generativa estão sujeitas a requisitos de conta e idade regional (não devendo assumir-se que todos os alunos de 10–15 anos têm acesso individual), pelo que cabe ao professor verificar as regras atuais ou operar a ferramenta em demonstração; as condições de acesso podem mudar.',
      },
      {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        role: 'Alternativa',
        justificacao:
          'Permite criar as duas ilustrações em gerações separadas mantendo coerência de estilo através de descrição comum; aplicam-se as mesmas verificações prévias de elegibilidade etária, política escolar e limites de utilização sujeitos a alteração.',
      },
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Selecionar e validar a expressão idiomática',
        descricao:
          'O professor apresenta expressões em inglês (ex.: «It\'s raining cats and dogs» — chuva forte; «Piece of cake» — algo muito fácil; «Break a leg» — desejar boa sorte antes de uma atuação). Os alunos validam o significado figurado e o contexto de utilização num dicionário fiável e com o docente, compreendendo que as expressões dependem do contexto e não representam uma regra cultural universal.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Gerar separadamente as imagens literal e figurativa',
        descricao:
          'Em duas gerações independentes no Microsoft Designer (utilizado por alunos apenas quando a elegibilidade etária e as regras da escola o permitirem, ou operado pelo professor com prompts construídos pelos alunos), produzem-se duas imagens com o mesmo estilo visual, sem texto e adequadas à idade: uma para o sentido literal (sem violência nem lesões gráficas) e outra para o sentido idiomático no contexto validado.',
        ferramentas: [
          { name: 'Microsoft Designer', url: 'https://designer.microsoft.com/' },
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparar e explicar oralmente os dois sentidos',
        descricao:
          'Os alunos apresentam as duas imagens à turma para comparar a leitura literal com a figurada e explicam oralmente, em inglês adequado ao seu nível, o significado idiomático da expressão e uma situação concreta em que pode ser utilizada.',
      },
    ],
    avaliacao: {
      entrega: [
        'As duas imagens geradas em execuções separadas (literal e idiomática).',
        'Guião breve da explicação oral em inglês com exemplo contextualizado.',
      ],
      itens: [
        'Exatidão do significado da expressão idiomática e adequação do contexto de uso.',
        'Capacidade de distinguir linguagem literal de linguagem figurada.',
        'Pertinência das duas representações visuais face aos respetivos sentidos (sem assumir a imagem isolada como prova de compreensão linguística).',
        'Clareza e adequação linguística da explicação oral em inglês.',
      ],
    },
  },
  {
    id: 'alegoria-caverna',
    title: 'ATIVIDADE: A ALEGORIA DA CAVERNA MODERNA',
    subtitle: 'Filosofia / Cidadania e Desenvolvimento / Português · Ensino Secundário (10.º e 11.º anos) — adaptável',
    estimatedDuration: '60 minutos',
    materials: [
      'Excerto impresso ou digital do Livro VII da República de Platão (Alegoria da Caverna).',
      'Computadores com acesso ao Leonardo.ai ou alternativa elegível (com verificação prévia dos requisitos de idade, conta e condições de utilização em vigor).',
      'Guião de mapeamento comparativo em duas colunas: elementos da narrativa original de Platão vs. analogias contemporâneas propostas.',
    ],
    prompt:
      'Cria uma ilustração conceptual inspirada na estrutura original da Alegoria da Caverna (Livro VII da República de Platão) e na sua reinterpretação contemporânea. Representa um espaço interior escuro onde várias figuras observam projeções luminosas de ecrãs com imagens simplificadas e fragmentadas do mundo, enquanto uma figura se afasta das projeções e se dirige para uma abertura iluminada por luz natural exterior. A composição deve representar simbolicamente a relação entre ilusão, perceção limitada, procura do conhecimento e movimento rumo à compreensão crítica, sem sugerir que Platão mencionou tecnologias digitais e sem incluir texto, marcas ou logótipos.',
    promptTip:
      'Explore o contraste entre a penumbra interior iluminada por luz artificial fria e a luz natural exterior à saída para traduzir o percurso da aparência ao conhecimento; evite impor estética apocalíptica ou «distopia» obrigatória, pois pode gerar cenas afastadas do sentido filosófico.',
    promptAdaptation:
      'Adapte os elementos visuais às analogias contemporâneas justificadas pela turma (ex.: feeds algorítmicos, ecrãs ou desinformação), assinalando claramente o que corresponde ao texto original de Platão e o que constitui interpretação contemporânea.',
    objetivos: [
      'Identificar os elementos fundamentais da Alegoria da Caverna no Livro VII da República de Platão.',
      'Distinguir rigorosamente a narrativa original de Platão das suas analogias e reinterpretações contemporâneas.',
      'Justificar a relação conceptual entre perceção, ilusão, procura do conhecimento e pensamento crítico.',
    ],
    ferramentasRecomendadas: [
      {
        name: 'Leonardo.Ai',
        url: 'https://leonardo.ai/',
        role: 'Principal',
        justificacao:
          'Permite gerar ilustrações conceptuais com orientação visual e controlo de composição. Os requisitos de idade, termos de uso e eventuais limites de utilização podem mudar e devem ser verificados antes da aula.',
      },
      {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        role: 'Alternativa',
        justificacao:
          'Permite criar ilustrações conceptuais mediante descrição simbólica e composicional detalhada; requer verificação prévia de elegibilidade etária, política escolar e condições de acesso.',
      },
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Estudo da alegoria original',
        descricao:
          'A partir da leitura do Livro VII da República, os alunos identificam os elementos da narrativa original de Platão: os prisioneiros acorrentados na caverna, o fogo atrás deles, os objetos transportados atrás de um muro, as sombras projetadas na parede, a libertação de um prisioneiro, a subida até ao exterior e a experiência da luz do dia e do Sol.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reinterpretação visual contemporânea',
        descricao:
          'Com o Leonardo.ai (ou alternativa elegível), os alunos escolhem e justificam analogias atuais — como ecrãs, feeds algorítmicos ou desinformação — para criar uma ilustração conceptual. É explicitado que ecrãs, redes sociais, «bolhas informativas» ou expressões como «prisão cognitiva» são linguagens e analogias contemporâneas, e não elementos nem citações do texto platónico.',
        ferramentas: [
          { name: 'Leonardo.ai', url: 'https://leonardo.ai/' },
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Discussão filosófica',
        descricao:
          'As imagens são projetadas em turma e cada aluno explica e defende as correspondências que estabeleceu entre a estrutura da alegoria de Platão, a sua interpretação contemporânea e a passagem da perceção limitada ao conhecimento fundamentado.',
      },
    ],
    avaliacao: {
      entrega: [
        'A ilustração conceptual gerada e o respetivo prompt.',
        'Breve reflexão escrita (máx. 200 palavras) sobre as correspondências e diferenças entre a alegoria original e a reinterpretação atual.',
      ],
      itens: [
        'Identificação dos principais elementos da alegoria original de Platão.',
        'Distinção explícita entre a narrativa platónica e a interpretação contemporânea do aluno.',
        'Justificação das analogias visuais e coerência entre a imagem e o argumento filosófico.',
        'Capacidade de explicar a relação entre perceção, conhecimento e pensamento crítico (centrando a avaliação no raciocínio filosófico e não na estética da imagem).',
      ],
    },
  },
  {
    id: 'gesto-tecnico-desportivo',
    title: 'ATIVIDADE: ANÁLISE DO GESTO TÉCNICO DESPORTIVO',
    subtitle: 'Educação Física · 3.º Ciclo e Ensino Secundário (7.º a 12.º anos)',
    estimatedDuration: '60 minutos',
    materials: [
      'Demonstração do docente, diagrama ou vídeo técnico autorizado por federação desportiva ou manual da disciplina relativo a um gesto específico.',
      'Acesso a ferramenta de imagem com IA elegível (operada pelo professor ou segundo as normas da escola, sem carregamento de fotografias ou vídeos de alunos).',
      'Guião de identificação das fases do gesto definidas pelo docente com base na referência técnica validada.',
    ],
    prompt:
      'Cria um storyboard ilustrativo de [MODALIDADE] focado no gesto técnico específico [GESTO TÉCNICO ESPECÍFICO], observado em [ÂNGULO DE OBSERVAÇÃO]. Apresenta vinhetas visuais claramente separadas e consistentes entre si, correspondentes às fases definidas pelo professor ([FASES DEFINIDAS PELO PROFESSOR]), seguindo esta descrição técnica validada: [DESCRIÇÃO TÉCNICA VALIDADA]. Usa silhuetas ou figuras estilizadas não identificáveis em estilo esquemático didático sobre fundo neutro. Não incluas texto nem legendas, não apresentes a imagem como modelo biomecânico validado e não diagnostiques, avalies nem corrijas o desempenho físico de qualquer pessoa.',
    promptTip:
      'Defina um único gesto técnico específico e identifique as fases próprias dessa técnica segundo uma referência fiável (sem impor o mesmo modelo de três fases a todas as modalidades). Especifique o ângulo de observação mais claro e exija figuras estilizadas sem texto.',
    promptAdaptation:
      'Preencha [MODALIDADE], [GESTO TÉCNICO ESPECÍFICO], [FASES DEFINIDAS PELO PROFESSOR], [DESCRIÇÃO TÉCNICA VALIDADA] e [ÂNGULO DE OBSERVAÇÃO] conforme a referência técnica da aula (ex.: um serviço específico no voleibol ou as fases cíclicas da técnica na natação em vista lateral).',
    objetivos: [
      'Identificar as fases de um gesto motor específico com base numa referência técnica validada.',
      'Comparar uma representação visual gerada por IA com uma demonstração técnica fiável.',
      'Desenvolver a observação e a reflexão sobre o movimento, com orientação do professor.',
    ],
    ferramentasRecomendadas: [
      {
        name: 'Leonardo.Ai',
        url: 'https://leonardo.ai/',
        role: 'Principal',
        justificacao:
          'A funcionalidade Pose Guidance pode tentar reproduzir poses a partir de imagens de referência (a disponibilidade varia consoante o modelo), mas não valida a correção biomecânica do movimento e pode apresentar limitações em poses complexas, continuidade do gesto ou exatidão anatómica. Verificar sempre termos e condições atuais.',
      },
      {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        role: 'Alternativa',
        justificacao:
          'Pode gerar storyboards ilustrativos a partir da descrição textual fornecida pelo professor, mas não é uma ferramenta de análise biomecânica nem garante rigor técnico ou anatómico.',
      },
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Analisar um gesto técnico específico com referência validada',
        descricao:
          'O professor seleciona um único gesto técnico específico (ex.: um determinado tipo de serviço no voleibol ou uma técnica cíclica de natação) e define com a turma as fases adequadas a essa modalidade com base em demonstração docente, diagrama validado ou vídeo técnico autorizado, sem forçar todos os desportos no mesmo esquema.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Gerar um storyboard ilustrativo a partir da descrição do professor',
        descricao:
          'A partir da descrição técnica validada preparada pelo professor, gera-se um storyboard ilustrativo com silhuetas ou figuras estilizadas não identificáveis representando as fases definidas, sem nunca carregar fotografias ou vídeos de alunos em ferramentas externas de IA.',
        nota: 'Nota técnica e de proteção de dados: a ilustração gerada por IA não valida nem corrige biomecânica. Não carregue imagens ou vídeos de alunos em plataformas externas de IA; caso a escola decida autonomamente gravar alunos para fins pedagógicos, deve assegurar os procedimentos institucionais de proteção de dados, base legal aplicável, transparência, controlo de acesso e prazos de conservação.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparar a ilustração gerada com a referência validada',
        descricao:
          'Com orientação do professor, os alunos comparam o storyboard gerado pela IA com demonstrações do professor, vídeos técnicos autorizados ou diagramas validados, identificando acertos, omissões e erros anatómicos ou técnicos da imagem de IA sem a utilizar para avaliar a competência física dos alunos.',
      },
    ],
    avaliacao: {
      entrega: [
        'Registo das fases do gesto técnico selecionado com base na referência validada.',
        'Breve análise comparativa (oral ou escrita) identificando diferenças e limitações da ilustração gerada face à referência técnica fiável.',
      ],
      itens: [
        'Identificação correta das fases do movimento selecionado segundo a referência validada.',
        'Rigor da comparação entre a imagem gerada por IA e a demonstração ou diagrama técnico fiável.',
        'Capacidade de identificar imprecisões ou limitações na ilustração gerada e clareza da explicação apresentada.',
        'Reconhecimento de que a ilustração gerada não é um modelo técnico definitivo nem serve para avaliar o desempenho físico dos alunos.',
      ],
    },
  },
];

export const AUDIO_TASK_CATEGORIES: string[] = [
  'Síntese de texto em fala (Text-to-Speech)',
  'Síntese vocal personalizada',
  'Gravação de áudio',
  'Edição e mistura de áudio',
  'Melhoria da qualidade da fala e redução de ruído',
  'Transcrição automática',
  'Geração musical',
  'Criação de podcasts e resumos áudio',
  'Alojamento e publicação de áudio',
];

export interface AudioTool {
  id: string;
  category: string;
  name: string;
  recommendedFor: string;
  capabilities: string[];
  classroomApplications: string;
  freePlan: string;
  limitations: string;
  privacyOrAge: string;
  officialSource: string;
  officialUrl: string;
  freeAlternative: string;
  clarification?: string;
}

export const AUDIO_TOOLS: AudioTool[] = [
  {
    id: 'elevenlabs',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'ElevenLabs',
    recommendedFor: 'Vozes sintéticas naturais e narração de recursos educativos.',
    capabilities: [
      'Síntese de texto em fala (Text-to-Speech) em múltiplos idiomas, incluindo português.',
      'Seleção e ajuste de estilos de voz, ritmo e entoação para narração.',
    ],
    classroomApplications: 'Narração de textos literários ou históricos, preparação de materiais de compreensão oral em línguas e apoio à acessibilidade para alunos com dificuldades de leitura.',
    freePlan: '10 000 créditos mensais, partilhados pelos produtos disponíveis.',
    limitations: 'O plano gratuito não inclui a licença comercial paga. A clonagem de voz exige especial cuidado e autorização adequada.',
    privacyOrAge: 'Confirmar os termos de idade mínima e privacidade da plataforma antes de criar contas; não clonar vozes de alunos ou terceiros sem autorização expressa.',
    officialSource: 'ElevenLabs (página oficial)',
    officialUrl: 'https://elevenlabs.io/',
    freeAlternative: 'Narração gravada pelo docente e editada com Audacity.',
  },
  {
    id: 'adobe-podcast',
    category: 'Melhoria da qualidade de áudio',
    name: 'Adobe Podcast — Enhance Speech',
    recommendedFor: 'Melhorar gravações de voz falada existentes, reduzindo ruído de fundo e reverberação (não gera podcasts completos a partir de texto).',
    capabilities: [
      'Redução automática de ruído de fundo e eco em ficheiros de voz falada já gravados.',
      'Melhoria da inteligibilidade vocal em gravações captadas em sala de aula ou com microfones simples.',
    ],
    classroomApplications: 'Recuperação de gravações existentes de entrevistas, apresentações orais ou episódios de podcast escolar captados em espaços com eco ou ruído ambiente.',
    freePlan: 'Plano gratuito limitado a ficheiros de áudio (MP3, WAV, M4A, AAC ou FLAC), até 30 minutos e 500 MB por ficheiro e 1 hora de processamento por dia (condições sujeitas a alteração pela Adobe).',
    limitations: 'Não é uma ferramenta de geração completa de podcasts; no plano gratuito processa apenas um ficheiro de cada vez (sem lote), sem suporte a vídeo (MP4/MOV) nem ajuste manual de intensidade.',
    privacyOrAge: 'Requer conta Adobe elegível; confirmar os termos de privacidade e requisitos de idade em vigor e não carregar gravações com voz identificável de alunos ou dados pessoais sem autorização adequada e salvaguardas institucionais.',
    officialSource: 'Adobe Podcast (página oficial)',
    officialUrl: 'https://podcast.adobe.com/',
    freeAlternative: 'Audacity (software gratuito e de código aberto para redução de ruído e edição local sem envio automático para servidores externos).',
  },
  {
    id: 'audacity',
    category: 'Edição e gravação de áudio',
    name: 'Audacity',
    recommendedFor: 'Aplicação gratuita e de código aberto de gravação e edição áudio (não é uma ferramenta de IA generativa nem de síntese texto-voz).',
    capabilities: [
      'Gravação multipista, corte, mistura, normalização e ajuste de volume diretamente no computador.',
      'Redução de ruído, aplicação de efeitos locais e exportação em formatos como MP3 e WAV, com suporte opcional a plugins locais.',
    ],
    classroomApplications: 'Gravação e edição completa de podcasts escolares, entrevistas, dramatizações áudio e narrações gravadas pelo professor ou pelos alunos.',
    freePlan: 'Software totalmente gratuito e de código aberto (licença GPL, para Windows, macOS e Linux).',
    limitations: 'É um gravador e editor de áudio convencional, não gerando vozes sintéticas a partir de texto (Text-to-Speech).',
    privacyOrAge: 'Funciona principalmente em ambiente local sem exigir conta online; contudo, serviços opcionais em nuvem (como partilha no audio.com) ou plugins externos de terceiros seguem políticas próprias e devem ser verificados antes da utilização.',
    officialSource: 'Audacity (página oficial)',
    officialUrl: 'https://www.audacityteam.org/',
    freeAlternative: 'Ocenaudio (aplicação gratuita de edição áudio local para tarefas simples) ou gravador nativo do sistema operativo para captação direta de voz.',
    clarification: 'Aplicação gratuita de código aberto de execução principalmente local, sem exigir envio automático para servidores externos na edição base.',
  },
  {
    id: 'notebooklm',
    category: 'Podcasts e resumos áudio com IA',
    name: 'NotebookLM',
    recommendedFor: 'Analisar fontes documentais carregadas pelo utilizador e gerar Resumos Áudio (Audio Overviews) em formato conversacional.',
    capabilities: [
      'Síntese e consulta fundamentada exclusivamente nos documentos fornecidos pelo utilizador (PDFs, apontamentos e ligações web).',
      'Geração de discussões áudio (Audio Overviews) em mais de 50 idiomas configuráveis nas definições de saída, distinguindo Português (Portugal) e Português (Brasil).',
    ],
    classroomApplications: 'Preparação pelo professor de sínteses áudio de apoio à revisão de matérias a partir de documentos curriculares validados; não substitui a leitura nem a verificação das fontes originais.',
    freePlan: 'Acesso gratuito com conta Google elegível, sujeito às definições do administrador escolar, às políticas da Google e a limites de utilização variáveis (não assumir cotas fixas permanentes).',
    limitations: 'Os Resumos Áudio podem conter imprecisões, omissões ou simplificações e têm de ser revistos pelo docente; além disso, não substituem um podcast escrito e gravado pelos alunos nem o estudo das fontes originais.',
    privacyOrAge: 'Distinguir contas Google pessoais de contas Google Workspace for Education (onde o acesso é gerido pelo administrador escolar e costuma estar desativado por omissão no ensino básico e secundário); confirmar elegibilidade etária e não carregar dados pessoais.',
    officialSource: 'NotebookLM (página oficial)',
    officialUrl: 'https://notebooklm.google/',
    freeAlternative: 'Guião de síntese elaborado pelos alunos ou docente com base nas fontes originais, gravado e editado localmente no Audacity (software gratuito e de código aberto).',
  },
  {
    id: 'spotify-for-creators',
    category: 'Publicação de podcasts',
    name: 'Spotify for Creators',
    recommendedFor: 'Plataforma de criação, alojamento, gestão e distribuição de podcasts (não é uma ferramenta de IA generativa de áudio).',
    capabilities: [
      'Alojamento gratuito de episódios áudio, organização de séries e distribuição para plataformas de podcast.',
      'Configuração de feed RSS e consulta de estatísticas básicas de reprodução.',
    ],
    classroomApplications: 'Publicação pública de rádios escolares ou séries de podcasts educativos apenas após edição externa, revisão pedagógica e autorização institucional — distinta da partilha privada no ambiente escolar.',
    freePlan: 'Alojamento e publicação gratuitos para criadores, sujeitos aos termos de utilização e elegibilidade da conta.',
    limitations: 'Destina-se ao alojamento e distribuição pública de podcasts; não gera síntese vocal por IA nem substitui editores multipista dedicados.',
    privacyOrAge: 'A ativação do feed RSS pode expor o endereço de email no código XML público consoante a configuração. Seguir os procedimentos de proteção de dados da escola e obter autorização institucional e legal antes de publicar gravações de alunos.',
    officialSource: 'Spotify for Creators (página oficial)',
    officialUrl: 'https://creators.spotify.com/',
    freeAlternative: 'Partilha privada dos ficheiros áudio (MP3/WAV) no ambiente virtual de aprendizagem da escola (ex.: Moodle, Google Classroom ou Microsoft Teams escolar), sem publicação pública.',
  },
  {
    id: 'ttsmaker',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'TTSMaker',
    recommendedFor: 'Conversor online de texto para fala (Text-to-Speech) com IA que gera ficheiros áudio a partir de texto em vários idiomas.',
    capabilities: [
      'Conversão de texto escrito em ficheiros áudio (MP3, WAV, entre outros) diretamente no navegador.',
      'Escolha de idioma, voz, velocidade de leitura, pausas e ajuste básico de entoação.',
    ],
    classroomApplications: 'Preparação pelo docente de enunciados falados, apoios auditivos para alunos com dificuldades de leitura e exercícios de compreensão oral, confirmando sempre a pronúncia e a variante linguística.',
    freePlan: 'Plano gratuito com cota semanal (tipicamente até 20 000 caracteres por semana nas vozes padrão, existindo vozes básicas assinaladas como ilimitadas) distinta do limite máximo de caracteres por conversão individual; permite uso comercial/educativo nos termos da licença da plataforma.',
    limitations: 'Segundo a documentação oficial do plano gratuito, os ficheiros gerados e os registos temporários no servidor têm validade temporária (indicada como cerca de 30 minutos para descarregamento, distinta da cache local do navegador), podendo as cotas e prazos mudar.',
    privacyOrAge: 'Os termos oficiais indicam idade mínima de 16 anos (ou superior exigida por lei local) e a autorização parental não altera por si só os requisitos etários de acesso da plataforma; não inserir dados pessoais nos textos.',
    officialSource: 'TTSMaker (página oficial)',
    officialUrl: 'https://ttsmaker.com/',
    freeAlternative: 'Narração gravada localmente pelo docente no Audacity (software gratuito e de código aberto).',
  },
  {
    id: 'clipchamp',
    category: 'Edição de vídeo e locução',
    name: 'Clipchamp',
    recommendedFor: 'Editor de vídeo da Microsoft que integra separadamente edição de vídeo em linha temporal, gravação de voz/ecrã e conversão de texto em fala (Text-to-Speech).',
    capabilities: [
      'Edição de vídeo em linha temporal (corte, mistura de faixas áudio e legendagem automática) distinta da gravação direta de locução.',
      'Gerador integrado de locução por IA (Text-to-Speech) com ajuste de velocidade e tom em vários idiomas configuráveis.',
    ],
    classroomApplications: 'Produção pelo professor de tutoriais, vídeos educativos narrados e apresentações com legendas de acessibilidade, verificando sempre a disponibilidade de voz em Português (Portugal).',
    freePlan: 'Plano gratuito com conta Microsoft elegível inclui edição de vídeo, exportação até 1080p sem marca de água, gravação de voz e acesso base a Text-to-Speech; recursos avançados e exportação 4K exigem plano pago ou subscrição Microsoft 365 compatível.',
    limitations: 'Os limites de caracteres por bloco de Text-to-Speech variam consoante o idioma selecionado e as restrições atuais da Microsoft (textos extensos exigem divisão em segmentos); nem todas as vozes ou idiomas estão disponíveis em todas as contas, planos ou regiões.',
    privacyOrAge: 'Requer início de sessão com conta Microsoft pessoal ou escolar; confirmar políticas institucionais, elegibilidade etária da conta e nunca carregar vídeos ou vozes identificáveis de alunos sem autorização adequada.',
    officialSource: 'Microsoft Clipchamp (página oficial)',
    officialUrl: 'https://clipchamp.com/',
    freeAlternative: 'Audacity (software gratuito e de código aberto para gravação e edição áudio) combinado com editor de vídeo gratuito de código aberto (ex.: Shotcut).',
  },
  {
    id: 'descript',
    category: 'Edição de áudio e vídeo por transcrição',
    name: 'Descript',
    recommendedFor: 'Plataforma de edição de áudio e vídeo orientada por texto, que permite cortar e reorganizar gravações a partir da transcrição automática.',
    capabilities: [
      'Transcrição automática e edição de áudio ou vídeo através do texto transcrito, além de gravação e redução de ruído.',
      'Na lista oficial de idiomas suportados para transcrição, o português disponibilizado corresponde especificamente a Português (Brasil) — não assumir suporte nativo a Português (Portugal).',
    ],
    classroomApplications: 'Edição de entrevistas, tutoriais ou podcasts escolares gravados pelo docente, com revisão manual cuidadosa de ortografia e termos quando o áudio estiver em Português Europeu.',
    freePlan: 'Plano gratuito com 60 minutos (1 hora) mensais de multimédia/transcrição, 100 créditos de IA iniciais únicos (não renováveis mensalmente) e exportação de vídeo limitada até 720p com marca de água.',
    limitations: 'Cotas gratuitas reduzidas para projetos continuados; após esgotar os créditos de IA únicos iniciais, recursos de IA ficam limitados e a exportação gratuita em vídeo inclui marca de água.',
    privacyOrAge: 'Os termos da Descript indicam idade mínima de 13 anos (entre os 13 e os 17 anos requer consentimento parental); não carregar gravações com dados pessoais ou vozes identificáveis de alunos sem autorização adequada e validação da escola.',
    officialSource: 'Descript (página oficial)',
    officialUrl: 'https://www.descript.com/',
    freeAlternative: 'Audacity (software gratuito e de código aberto para gravação e edição áudio local, sem marca de água nem limite mensal de horas).',
  },
  {
    id: 'tts-for-free',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'TTS For Free',
    recommendedFor: 'Serviço web em ttsforfree.com que converte texto escrito em fala sintética com vozes de múltiplos motores externos para audição e descarregamento.',
    capabilities: [
      'Conversão online de texto em fala com seleção de idioma e voz, pré-audição no navegador e descarregamento do áudio gerado.',
      'Utilização básica imediata sem registo na interface web, com limites mais amplos mediante registo gratuito de conta.',
    ],
    classroomApplications: 'Criação pontual pelo professor de pequenos enunciados áudio, instruções curtas ou frases de treino auditivo em línguas, revendo sempre a pronúncia gerada.',
    freePlan: 'Sistema baseado em créditos gratuitos na interface web (com saldo inicial reduzido sem registo e cerca de 2 000 créditos gratuitos após registo, além de limite máximo por conversão até cerca de 2 000 caracteres e restrições diárias/mensais); vozes avançadas exigem plano pago e as condições podem mudar.',
    limitations: 'Não confundir com outros sítios de nome semelhante; textos longos têm de ser divididos e as vozes disponíveis dependem de motores externos sujeitos a alteração de cotas.',
    privacyOrAge: 'Consultar a política de privacidade e os termos em ttsforfree.com antes de utilizar (não assumir requisitos etários não publicados); o texto enviado é processado por serviços externos, pelo que não deve conter nomes nem dados pessoais de alunos.',
    officialSource: 'TTS For Free (página oficial)',
    officialUrl: 'https://ttsforfree.com/',
    freeAlternative: 'Leitura gravada localmente pelo docente no Audacity (software gratuito e de código aberto) ou TTSMaker dentro dos respetivos limites gratuitos.',
  },
];

export interface AudioActivityTool {
  name: string;
  url: string;
  note?: string;
}

export interface AudioActivity {
  id: string;
  title: string;
  objetivos: string[];
  implementacao: {
    etapa: string;
    titulo: string;
    descricao?: string;
    pontos?: string[];
    ferramentas?: AudioActivityTool[];
    notaFinal?: string;
  }[];
  avaliacao: {
    entrega: string[];
    itens: string[];
  };
}

export const AUDIO_ACTIVITIES: AudioActivity[] = [
  {
    id: 'vozes-do-patrimonio',
    title: 'ATIVIDADE: VOZES DO PATRIMÓNIO',
    objetivos: [
      'Desenvolver a consciência histórica e patrimonial sobre o meio local.',
      'Realizar pesquisa histórica e avaliar a fiabilidade das fontes utilizadas.',
      'Produzir discurso narrativo estruturado em Português, distinguindo factos históricos de reconstrução criativa.',
      'Desenvolver a comunicação oral e a produção multimodal (narração, áudio, imagem e legendagem).',
      'Utilizar ferramentas digitais e de IA de forma responsável, respeitando direitos de autor e proteção de dados.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Investigação histórica local',
        descricao:
          'O professor solicita que os alunos selecionem um monumento ou espaço histórico da sua localidade e verifiquem informação histórica através de pelo menos duas fontes credíveis devidamente identificadas (arquivos, bibliotecas, museus ou páginas patrimoniais oficiais), pesquisando:',
        pontos: [
          'A origem e o contexto histórico do espaço ou monumento.',
          'A função original e a função atual, quando relevante.',
          'A importância histórica e cultural para a comunidade.',
          'Pessoas, acontecimentos e características relevantes, confirmando sempre a exatidão da informação recolhida.',
        ],
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Construção do guião',
        descricao:
          'Com base na pesquisa verificada, os alunos redigem um monólogo na 1.ª pessoa a partir da perspetiva de uma personagem fictícia ou historicamente documentada ligada ao espaço (ex.: construtor, habitante ou trabalhador da época), assegurando que:',
        pontos: [
          'Os factos históricos documentados se mantêm rigorosos e fiéis às fontes.',
          'Diálogos, pensamentos ou vivências imaginados são tratados como reconstrução criativa, nunca sendo apresentados como testemunho histórico autêntico.',
          'O texto apresenta início, desenvolvimento e conclusão, com linguagem adequada ao público-alvo.',
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Produção áudio e multimédia',
        descricao:
          'Os alunos podem gravar a própria narração ou recorrer a voz sintética quando adequado, integrando o áudio com imagens do espaço patrimonial e legendagem de acessibilidade num pequeno vídeo.',
        ferramentas: [
          {
            name: 'Canva',
            url: 'https://www.canva.com/',
            note: '(plano gratuito com limites de utilização) – gravar ou inserir a narração e combinar áudio, legendas e imagens num vídeo.',
          },
          {
            name: 'TTSMaker',
            url: 'https://ttsmaker.com/',
            note: '(plano gratuito com cota semanal limitada) – converter texto escrito em voz sintética.',
          },
        ],
        notaFinal:
          'Caso utilizem voz sintética, os alunos devem rever a pronúncia, a entoação e a leitura correta de nomes próprios e termos históricos. As imagens, músicas e restantes materiais utilizados têm de respeitar os direitos de autor e licenças aplicáveis (dando preferência a materiais próprios ou de licença aberta), sem carregar gravações identificáveis de alunos em serviços externos sem autorização institucional.',
      },
    ],
    avaliacao: {
      entrega: [
        'Registo da pesquisa histórica com identificação das fontes credíveis consultadas.',
        'Guião escrito.',
        'Gravação áudio final (com transcrição de apoio, quando adequado).',
        'Vídeo final legendado.',
      ],
      itens: [
        'Rigor histórico e fiabilidade das fontes utilizadas.',
        'Distinção clara entre factos documentados e reconstrução ficcional.',
        'Estrutura narrativa e qualidade da escrita.',
        'Clareza e qualidade da narração.',
        'Integração adequada dos materiais áudio, visuais e de acessibilidade.',
        'Utilização responsável de ferramentas digitais e respeito pelos direitos de autor.',
      ],
    },
  },
  {
    id: 'podcast-cidade-2050',
    title: 'ATIVIDADE: PODCAST «CIDADE 2050»',
    objetivos: [
      'Desenvolver o pensamento crítico sobre sustentabilidade urbana (articulando Geografia, Ciências Naturais, Cidadania e Português).',
      'Pesquisar e avaliar criticamente a fiabilidade da informação, distinguindo factos de opiniões e cenários futuros.',
      'Estruturar a argumentação e a comunicação oral em diálogo.',
      'Planificar e redigir colaborativamente um guião original de podcast.',
      'Realizar gravação áudio e edição de áudio respeitando a proteção de dados e a acessibilidade.',
      'Utilizar ferramentas digitais e de IA de forma responsável, sem substituir o raciocínio nem a participação oral dos alunos.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Problematização e pesquisa',
        descricao:
          'O professor lança a questão: «Como será a nossa cidade em 2050?» Em grupo, os alunos identificam problemas atuais e pesquisam fontes credíveis sobre desafios urbanos relevantes (mobilidade sustentável, energias renováveis, habitação, espaços verdes, gestão de resíduos, qualidade do ar, adaptação climática, acessibilidade e inclusão), identificando as fontes usadas e distinguindo claramente:',
        pontos: [
          'Informação atual verificada através de fontes credíveis (a informação gerada por IA não deve ser tratada como fonte fiável sem verificação independente).',
          'Cenários futuros possíveis fundamentados em evidências.',
          'Opiniões pessoais e previsões especulativas.',
        ],
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Planificação e guião do podcast',
        descricao:
          'Com base na sua própria pesquisa e argumentação, cada grupo elabora um guião original e distribui papéis adequados à idade e dimensão do grupo (por exemplo: apresentador, investigador, entrevistador e comentador). O guião deve integrar:',
        pontos: [
          'Introdução e apresentação do tema.',
          'Descrição fundamentada de um problema urbano atual.',
          'Evidências ou informação credível que sustentam a discussão.',
          'Soluções possíveis e cenários futuros até 2050.',
          'Argumentos e discussão entre participantes.',
          'Conclusão (prevendo transcrição de apoio para acessibilidade, quando adequado).',
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Gravação e edição',
        descricao:
          'Os grupos privilegiam a participação oral própria e selecionam apenas as ferramentas necessárias ao seu fluxo de trabalho (não sendo necessário usar todas):',
        ferramentas: [
          {
            name: 'Audacity',
            url: 'https://www.audacityteam.org/',
            note: '(software gratuito de código aberto) – gravação áudio, edição de áudio, mistura, processamento e transcrição local com IA através do plugin OpenVINO Whisper (não gera podcasts automaticamente).',
          },
          {
            name: 'Adobe Podcast',
            url: 'https://podcast.adobe.com/',
            note: '(plano gratuito com restrições) – gravação remota, transcrição, edição baseada na transcrição e melhoria da voz falada.',
          },
          {
            name: 'Spotify for Creators',
            url: 'https://creators.spotify.com/',
            note: '(plataforma gratuita de alojamento e distribuição opcional) – publicação opcional de podcasts (não é editor nem gerador de áudio).',
          },
          {
            name: 'TTSFree',
            url: 'https://ttsfree.com/',
            note: '(ferramenta opcional de voz sintética com plano gratuito limitado) – utilizável apenas em breves segmentos opcionais, sem substituir a oralidade dos alunos.',
          },
          {
            name: 'NotebookLM',
            url: 'https://notebooklm.google.com/',
            note: '(acesso gratuito sujeito a conta elegível) – gera Resumos Áudio a partir das fontes fornecidas; são sínteses geradas por IA e não equivalem a um podcast original produzido pelos alunos.',
          },
          {
            name: 'Gemini',
            url: 'https://gemini.google.com/',
            note: '(acesso gratuito com limitações) – pode apoiar o levantamento de ideias, planificação da pesquisa, formulação de perguntas e revisão do guião, não criando diretamente o podcast original dos alunos.',
          },
        ],
        notaFinal:
          'O áudio gerado por IA pode servir apenas de apoio opcional ao docente e nunca substitui o objetivo de desenvolver a comunicação oral. A publicação pública do podcast é opcional, bastando entregar o ficheiro áudio final; a participação na atividade escolar não autoriza a divulgação pública das vozes dos alunos. Atenção: ativar um feed RSS no Spotify for Creators pode tornar público o endereço de email associado, pelo que não devem ser publicadas nem carregadas gravações identificáveis de alunos sem autorização institucional e cumprimento das normas de proteção de dados da escola.',
      },
    ],
    avaliacao: {
      entrega: [
        'Notas de pesquisa com identificação das fontes credíveis utilizadas.',
        'Guião estruturado original do podcast (com transcrição de apoio, quando adequado).',
        'Ficheiro áudio final.',
      ],
      itens: [
        'Qualidade e fiabilidade da pesquisa.',
        'Pertinência e profundidade da análise sobre sustentabilidade.',
        'Argumentação e propostas fundamentadas em evidências.',
        'Estrutura e coerência do guião.',
        'Clareza da comunicação oral.',
        'Participação equilibrada e colaboração no grupo.',
        'Qualidade da gravação áudio e da edição de áudio.',
        'Utilização responsável de ferramentas digitais e de IA (respeitando proteção de dados, direitos de autor e autoria dos alunos).',
      ],
    },
  },
  {
    id: 'dobrador-poliglota',
    title: 'ATIVIDADE: O DOBRADOR POLIGLOTA',
    objetivos: [
      'Desenvolver a competência linguística numa língua estrangeira.',
      'Avaliar criticamente traduções automáticas, identificando erros e limitações.',
      'Consolidar a precisão vocabular e gramatical.',
      'Praticar a pronúncia oral e a compreensão auditiva.',
      'Desenvolver a comunicação audiovisual (dobragem, sincronização e legendagem).',
      'Utilizar ferramentas de tradução e áudio com IA de forma responsável e respeitando direitos de autor.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha do vídeo',
        descricao:
          'Os alunos selecionam um vídeo curto (cerca de 1 minuto) ou o professor fornece vídeos adequados à turma, validando a escolha sempre que necessário e garantindo que o material cumpre os seguintes critérios:',
        pontos: [
          'Adequação à idade e ao nível de aprendizagem dos alunos.',
          'Clareza do discurso falado na língua de partida.',
          'Autorização ou licença de utilização compatível com direitos de autor (não assumir que qualquer vídeo disponível online pode ser reutilizado livremente).',
        ],
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Transcrição e tradução',
        descricao:
          'Os alunos obtêm ou elaboram a transcrição do conteúdo falado original e traduzem-na para a língua que estão a aprender (ex.: Inglês ou Espanhol), tratando sempre a tradução automática como rascunho a rever criticamente. As funcionalidades disponíveis dependem da conta, da região e do plano em vigor.',
        ferramentas: [
          {
            name: 'HeyGen',
            url: 'https://www.heygen.com/',
            note: '(plano gratuito limitado) – tradução de vídeo com IA, geração de nova voz e, quando disponível, sincronização labial (não garante acesso gratuito a todas as funções de tradução).',
          },
          {
            name: 'CapCut',
            url: 'https://www.capcut.com/',
            note: '(plano gratuito com funções limitadas e plano pago) – edição de vídeo e, consoante a conta, região e plano atual, legendagem ou tradução assistida por IA (nem todas as funções de dobragem por IA são gratuitas).',
          },
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Revisão linguística e dobragem',
        descricao:
          'Os alunos comparam a versão traduzida com o original e identificam incorreções antes e depois de gravar ou gerar a nova voz e a integrar no vídeo (com legendagem acessível):',
        pontos: [
          'Erros gramaticais.',
          'Vocabulário inadequado.',
          'Expressões idiomáticas incorretas ou pouco naturais.',
          'Alterações ao sentido original.',
          'Problemas de pronúncia.',
        ],
        notaFinal:
          'Após integrar a nova voz e as legendas no vídeo, os alunos devem rever o resultado final quanto à correção linguística, naturalidade da pronúncia, fidelidade ao sentido original e sincronização áudio/vídeo, assegurando que não são carregadas gravações identificáveis de alunos para serviços externos sem autorização institucional.',
      },
    ],
    avaliacao: {
      entrega: [
        'Vídeo original ou referência devidamente autorizada.',
        'Guião traduzido e revisto.',
        'Vídeo final dobrado (com legendagem de acessibilidade, quando adequado).',
        'Lista de correções à tradução automática com breves justificações.',
      ],
      itens: [
        'Correção linguística.',
        'Fidelidade ao sentido original.',
        'Uso correto de vocabulário e gramática.',
        'Capacidade de identificar e justificar correções à tradução.',
        'Pronúncia e clareza oral.',
        'Qualidade da integração áudio/vídeo e da sincronização.',
        'Compreensão crítica das limitações da tradução automática.',
      ],
    },
  },
];

export interface EthicsSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}

export const ETHICS_SECTIONS: EthicsSection[] = [
  {
    id: 'rgpd',
    number: '01',
    title: 'Proteção de dados e RGPD',
    paragraphs: [
      'Imagens, vídeos e gravações de voz que permitam identificar uma pessoa constituem dados pessoais. A utilização destes elementos em ferramentas de inteligência artificial deve respeitar o Regulamento Geral sobre a Proteção de Dados (RGPD), incluindo os princípios da finalidade, minimização, transparência, segurança e limitação da conservação.',
      'Antes de utilizar serviços externos com dados de alunos, a escola deve avaliar a finalidade, a base jurídica, as condições do serviço, os destinatários, os períodos de conservação e as eventuais transferências de dados. Deve ser consultado o responsável pela proteção de dados da instituição sempre que necessário.',
      'Não carregar fotografias, vídeos, vozes, nomes, avaliações ou outros dados identificáveis de alunos em ferramentas públicas sem validação institucional.',
    ],
  },
  {
    id: 'menores',
    number: '02',
    title: 'Imagem, voz e dados de menores',
    paragraphs: [
      'A utilização de imagem e voz de crianças e jovens exige especial cuidado. A imagem ou a voz não são automaticamente categorias especiais de dados, mas podem constituir dados pessoais quando permitem identificar uma pessoa. Os dados biométricos são uma categoria especial quando tratados para identificar uma pessoa de forma inequívoca.',
      'Não presumir que o consentimento é sempre a única base jurídica possível. A base legal e as condições de utilização devem ser determinadas pela entidade responsável, de acordo com o contexto e a legislação aplicável.',
      'Para demonstrações pedagógicas, privilegiar exemplos sintéticos, imagens não identificáveis e gravações sem dados pessoais.',
    ],
  },
  {
    id: 'direitos-autor',
    number: '03',
    title: 'Direitos de autor e licenças',
    paragraphs: [
      'Uma imagem, voz, música ou vídeo produzido por inteligência artificial não fica automaticamente livre de direitos de autor ou de outros direitos de terceiros.',
      'Antes de utilizar ou publicar um resultado, verificar as condições da plataforma, os direitos dos materiais introduzidos, a utilização de marcas, personagens, obras protegidas e imagens de pessoas.',
      'Registar a origem dos recursos utilizados e identificar conteúdos gerados por IA sempre que tal seja relevante para a transparência e para o contexto pedagógico.',
    ],
  },
  {
    id: 'ai-act',
    number: '04',
    title: 'Regulamento Europeu da Inteligência Artificial',
    paragraphs: [
      'O Regulamento (UE) 2024/1689, conhecido como AI Act, estabelece regras harmonizadas para a inteligência artificial na União Europeia. A sua aplicação ocorre por fases.',
      'A obrigação de promover um nível suficiente de literacia em IA, prevista no artigo 4.º, é aplicável desde 2 de fevereiro de 2025. O regulamento tem outras datas de aplicação e disposições transitórias, pelo que devem ser consultadas as versões oficiais atualizadas.',
      'Nem todas as ferramentas de IA utilizadas na educação são automaticamente classificadas como sistemas de alto risco. A classificação depende da finalidade prevista e da utilização concreta do sistema.',
    ],
  },
  {
    id: 'validacao',
    number: '05',
    title: 'Validação pedagógica e científica',
    paragraphs: [
      'Os conteúdos produzidos por IA podem incluir erros factuais, científicos, históricos, linguísticos e visuais. O professor deve verificar a informação antes de a utilizar com os alunos.',
      'Em conteúdos científicos, anatómicos, médicos ou técnicos, uma imagem gerada não deve substituir uma fonte científica validada.',
    ],
  },
  {
    id: 'supervisao-humana',
    number: '06',
    title: 'Responsabilidade e supervisão humana',
    paragraphs: [
      'A inteligência artificial deve apoiar o trabalho pedagógico, não substituir o juízo profissional do professor. A seleção, adaptação, validação e utilização dos resultados permanecem sob responsabilidade humana.',
    ],
  },
];

export const ETHICS_CHECKLIST: string[] = [
  'A ferramenta é adequada à idade dos utilizadores?',
  'O plano gratuito permite realizar a atividade?',
  'São introduzidos dados pessoais de alunos?',
  'A escola autoriza a utilização do serviço?',
  'Existem direitos de utilização sobre os materiais introduzidos?',
  'O resultado foi verificado quanto à sua exatidão?',
  'O recurso é acessível e adequado aos alunos?',
  'É possível explicar como foi produzido o resultado?',
];

export interface OfficialReferenceLink {
  entity: string;
  title: string;
  url: string;
}

export const ETHICS_OFFICIAL_LINKS: OfficialReferenceLink[] = [
  {
    entity: 'Comissão Europeia',
    title: 'Guidelines on the ethical use of artificial intelligence and data in teaching and learning for educators',
    url: 'https://education.ec.europa.eu/pt-pt/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence',
  },
  {
    entity: 'EUR-Lex',
    title: 'Regulamento (UE) 2024/1689 — Regulamento Europeu da Inteligência Artificial (AI Act)',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
  {
    entity: 'EUR-Lex',
    title: 'Regulamento (UE) 2016/679 — Regulamento Geral sobre a Proteção de Dados (RGPD)',
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
  {
    entity: 'UNESCO',
    title: 'AI competency framework for teachers (2024)',
    url: 'https://www.unesco.org/en/articles/ai-competency-framework-teachers',
  },
  {
    entity: 'UNESCO',
    title: 'Guidance for generative AI in education and research (2023)',
    url: 'https://unesdoc.unesco.org/ark:/48223/pf0000386693',
  },
  {
    entity: 'CNPD',
    title: 'Comissão Nacional de Proteção de Dados — orientações e portal oficial',
    url: 'https://www.cnpd.pt/',
  },
];

export interface BibliographyEntry {
  citation: string;
  author: string;
  year: string;
  title: string;
  publisher: string;
  url?: string;
}

export const BIBLIOGRAPHY: BibliographyEntry[] = [
  {
    citation: 'European Commission. (2026). Guidelines on the ethical use of artificial intelligence and data in teaching and learning for educators. European Education Area. https://education.ec.europa.eu/pt-pt/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence',
    author: 'European Commission',
    year: '2026',
    title: 'Guidelines on the ethical use of artificial intelligence and data in teaching and learning for educators',
    publisher: 'European Education Area',
    url: 'https://education.ec.europa.eu/pt-pt/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence',
  },
  {
    citation: 'European Parliament and Council of the European Union. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). Official Journal of the European Union. https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
    author: 'European Parliament and Council of the European Union',
    year: '2024',
    title: 'Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)',
    publisher: 'Official Journal of the European Union',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
  {
    citation: 'European Parliament and Council of the European Union. (2016). Regulation (EU) 2016/679 (General Data Protection Regulation). Official Journal of the European Union. https://eur-lex.europa.eu/eli/reg/2016/679/oj',
    author: 'European Parliament and Council of the European Union',
    year: '2016',
    title: 'Regulation (EU) 2016/679 (General Data Protection Regulation)',
    publisher: 'Official Journal of the European Union',
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
  {
    citation: 'UNESCO. (2024). AI competency framework for teachers. UNESCO. https://www.unesco.org/en/articles/ai-competency-framework-teachers',
    author: 'UNESCO',
    year: '2024',
    title: 'AI competency framework for teachers',
    publisher: 'UNESCO',
    url: 'https://www.unesco.org/en/articles/ai-competency-framework-teachers',
  },
  {
    citation: 'UNESCO. (2023). Guidance for generative AI in education and research. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000386693',
    author: 'UNESCO',
    year: '2023',
    title: 'Guidance for generative AI in education and research',
    publisher: 'UNESCO',
    url: 'https://unesdoc.unesco.org/ark:/48223/pf0000386693',
  },
  {
    citation: 'Comissão Nacional de Proteção de Dados. (s.d.). Orientações e informação institucional sobre proteção de dados. CNPD. https://www.cnpd.pt/',
    author: 'Comissão Nacional de Proteção de Dados',
    year: 's.d.',
    title: 'Orientações e informação institucional sobre proteção de dados',
    publisher: 'CNPD',
    url: 'https://www.cnpd.pt/',
  },
  {
    citation: 'Mayer, R. E. (2020). Multimedia learning (3rd ed.). Cambridge University Press.',
    author: 'Mayer, R. E.',
    year: '2020',
    title: 'Multimedia learning (3rd ed.)',
    publisher: 'Cambridge University Press',
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

export function getRecommendedToolUrl(recommendedTool: string): string | undefined {
  if (!recommendedTool) return undefined;
  const text = recommendedTool.toLowerCase();
  const catalog = [...IMAGE_TOOLS, ...OTHER_IMAGE_TOOLS];
  let bestMatch: { index: number; url: string } | undefined;

  for (const tool of catalog) {
    const idx = text.indexOf(tool.name.toLowerCase());
    if (idx !== -1 && (!bestMatch || idx < bestMatch.index)) {
      bestMatch = { index: idx, url: tool.officialUrl };
    }
  }

  return bestMatch?.url;
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

  for (const tool of [...IMAGE_TOOLS, ...OTHER_IMAGE_TOOLS]) {
    if (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.educationalUse.toLowerCase().includes(q) ||
      tool.capabilities.some((c) => c.toLowerCase().includes(q)) ||
      tool.freePlan.toLowerCase().includes(q) ||
      tool.limitations.toLowerCase().includes(q) ||
      tool.freeAlternative.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'ferramentas-imagem',
        pageNumber: 2,
        pageTitle: `Ferramenta de Imagem: ${tool.name}`,
        snippet: tool.description,
      });
    }
  }

  for (const p of IMAGE_PROMPTS) {
    if (
      p.title.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q) ||
      p.objective.toLowerCase().includes(q) ||
      p.recommendedTool.toLowerCase().includes(q) ||
      p.freeAlternative.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'prompts-imagem',
        pageNumber: 3,
        pageTitle: `Prompt: ${p.title}`,
        snippet: p.objective,
      });
    }
  }

  for (const act of IMAGE_ACTIVITIES) {
    if (
      act.title.toLowerCase().includes(q) ||
      (act.subtitle?.toLowerCase().includes(q) ?? false) ||
      act.prompt.toLowerCase().includes(q) ||
      act.promptTip.toLowerCase().includes(q) ||
      act.promptAdaptation.toLowerCase().includes(q) ||
      act.materials.some((m) => m.toLowerCase().includes(q)) ||
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some(
        (i) =>
          i.descricao.toLowerCase().includes(q) ||
          (i.pontos?.some((pt) => pt.toLowerCase().includes(q)) ?? false) ||
          (i.exemplos?.some((ex) => ex.toLowerCase().includes(q)) ?? false) ||
          (i.nota?.toLowerCase().includes(q) ?? false) ||
          (i.ferramentas?.some((f) => f.name.toLowerCase().includes(q)) ?? false),
      )
    ) {
      results.push({
        pageId: 'atividades-imagem',
        pageNumber: 4,
        pageTitle: act.title,
        snippet: act.objetivos.join(' · '),
      });
    }
  }

  for (const tool of AUDIO_TOOLS) {
    if (
      tool.name.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.recommendedFor.toLowerCase().includes(q) ||
      tool.freePlan.toLowerCase().includes(q) ||
      tool.freeAlternative.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'ferramentas-audio',
        pageNumber: 5,
        pageTitle: `Ferramenta de Áudio: ${tool.name}`,
        snippet: tool.recommendedFor,
      });
    }
  }

  for (const act of AUDIO_ACTIVITIES) {
    if (
      act.title.toLowerCase().includes(q) ||
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some(
        (i) =>
          (i.descricao?.toLowerCase().includes(q) ?? false) ||
          (i.notaFinal?.toLowerCase().includes(q) ?? false) ||
          (i.ferramentas?.some(
            (f) =>
              f.name.toLowerCase().includes(q) ||
              (f.note?.toLowerCase().includes(q) ?? false),
          ) ??
            false) ||
          (i.pontos?.some((pt) => pt.toLowerCase().includes(q)) ?? false),
      )
    ) {
      results.push({
        pageId: 'atividades-audio',
        pageNumber: 6,
        pageTitle: act.title,
        snippet: act.objetivos.join(' · '),
      });
    }
  }

  for (const sec of ETHICS_SECTIONS) {
    if (
      sec.title.toLowerCase().includes(q) ||
      sec.paragraphs.some((p) => p.toLowerCase().includes(q))
    ) {
      results.push({
        pageId: 'etica-seguranca',
        pageNumber: 7,
        pageTitle: `Ética e Legislação: ${sec.title}`,
        snippet: sec.paragraphs[0],
      });
    }
  }

  for (const b of BIBLIOGRAPHY) {
    if (b.citation.toLowerCase().includes(q)) {
      results.push({
        pageId: 'bibliografia',
        pageNumber: 8,
        pageTitle: `Bibliografia: ${b.author}`,
        snippet: b.citation,
      });
    }
  }

  return results;
}
