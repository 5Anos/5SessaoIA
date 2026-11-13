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
  | 'video'
  | 'etica'
  | 'bibliografia';

export interface PageInfo {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  navGroup: NavGroup;
  category: 'Geral' | 'Imagem' | 'Áudio' | 'Vídeo' | 'Ética & Legislação' | 'Referências';
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
    description: 'Introdução ao módulo de formação docente, enquadramento metodológico e cinco objetivos de aprendizagem.',
  },
  {
    id: 'ferramentas-imagem',
    number: 2,
    title: 'Ferramentas de Imagem',
    shortTitle: 'Ferramentas Imagem',
    navGroup: 'imagem',
    category: 'Imagem',
    description: 'Capacidades visuais, cinco ferramentas identificadas, planos gratuitos, limitações, critérios de escolha e ligações oficiais.',
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
    id: 'ferramentas-video',
    number: 7,
    title: 'Ferramentas e Atividades de Vídeo',
    shortTitle: 'Vídeo',
    navGroup: 'video',
    category: 'Vídeo',
    description: 'Geração de vídeo com IA, avatares e tradução, edição de vídeo, três prompts exemplificativos e a atividade O Dobrador Poliglota.',
  },
  {
    id: 'etica-seguranca',
    number: 8,
    title: 'Ética, Segurança e Legislação',
    shortTitle: 'Ética e Segurança',
    navGroup: 'etica',
    category: 'Ética & Legislação',
    description: 'RGPD, proteção de imagem e voz de menores, direitos de autor, Regulamento (UE) 2024/1689 (AI Act), validação pedagógica e lista de verificação.',
  },
  {
    id: 'bibliografia',
    number: 9,
    title: 'Bibliografia e Recursos',
    shortTitle: 'Bibliografia',
    navGroup: 'bibliografia',
    category: 'Referências',
    description: 'Referências oficiais e académicas em formato APA 7, ficha técnica e aviso de atualização contínua.',
  },
];

export const MODULE_OBJECTIVES: string[] = [
  'Identificar e comparar ferramentas de inteligência artificial para a criação de imagens, áudio e vídeo.',
  'Selecionar a ferramenta mais adequada em função do objetivo pedagógico, da qualidade pretendida e das suas limitações.',
  'Construir, testar e aperfeiçoar prompts, avaliando criticamente os resultados produzidos.',
  'Criar recursos educativos multimédia adequados a diferentes disciplinas, níveis de ensino e necessidades de aprendizagem.',
  'Aplicar princípios de segurança, proteção de dados, direitos de autor, acessibilidade e utilização responsável da inteligência artificial.',
];

export const IMAGE_CAPABILITIES: string[] = [
  'Criar imagens a partir de texto (texto -> imagem).',
  'Gerar ilustrações, fotografias e arte digital automaticamente.',
  'Editar imagens com recurso a instruções escritas.',
  'Remover ou substituir elementos de uma imagem.',
  'Melhorar a qualidade e aumentar a resolução de imagens.',
  'Criar variações da mesma imagem com estilos diferentes.',
  'Produzir imagens personalizadas para diferentes contextos educativos.',
];

export interface ImageTool {
  id: string;
  name: string;
  focusFilter: 'iniciacao' | 'controlo-estilo' | 'edicao-texto';
  shortTag: string;
  description: string;
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
    capabilities: [
      'Geração de imagens a partir de descrições textuais simples.',
      'Criação rápida de materiais visuais e composições de design.',
    ],
    educationalUse: 'Recomendado para docentes que pretendem iniciar-se na criação de ilustrações, recursos visuais para a sala de aula e cartazes simples.',
    freePlan: 'Acesso gratuito através de conta Microsoft. Uma utilização mais frequente pode exigir subscrição.',
    limitations: 'O texto gerado no interior das imagens pode conter erros ortográficos ou distorções; a disponibilidade e os limites podem variar consoante a conta.',
    privacyOrAge: 'A disponibilidade de funcionalidades de IA generativa pode depender da idade do utilizador e dos requisitos da conta Microsoft.',
    officialSource: 'Microsoft Designer (página oficial)',
    officialUrl: 'https://designer.microsoft.com/',
    freeAlternative: 'Canva Free (com cota limitada de IA) ou Leonardo.Ai Free para geração de imagens.',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai',
    focusFilter: 'controlo-estilo',
    shortTag: '150 tokens diários · Controlo criativo',
    description: 'Geração de imagens com diferentes estilos visuais e controlos criativos avançados.',
    capabilities: [
      'Seleção de estilos visuais e modelos artísticos variados.',
      'Controlo mais detalhado de composição, dimensões e acabamento.',
    ],
    educationalUse: 'Ilustrações detalhadas, cenários ficcionais, reconstruções históricas ou ficcionais, narrativa visual e projetos criativos.',
    freePlan: 'Disponibiliza 150 tokens diários em contas gratuitas elegíveis.',
    limitations: 'O consumo de tokens varia consoante o modelo e a operação selecionada. As criações no plano gratuito são públicas.',
    privacyOrAge: 'As criações gratuitas ficam visíveis publicamente. Deve confirmar os termos de direitos e licenciamento; não considerar nem apresentar criações gratuitas como privadas ou de propriedade exclusiva.',
    officialSource: 'Leonardo.Ai (página oficial)',
    officialUrl: 'https://leonardo.ai/',
    freeAlternative: 'Microsoft Designer.',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    focusFilter: 'edicao-texto',
    shortTag: 'Geração e edição · Conta Adobe',
    description: 'Geração e edição de imagens com inteligência artificial generativa, incluindo preenchimento e substituição de elementos.',
    capabilities: [
      'Geração de imagens com elevado realismo ou estilo editorial.',
      'Edição generativa, preenchimento e substituição de objetos em fotografias.',
    ],
    educationalUse: 'Edição de materiais visuais, criação de ilustrações e adaptação de imagens para apresentações e fichas de trabalho.',
    freePlan: 'Disponibiliza um número limitado de gerações gratuitas diárias em contas elegíveis.',
    limitations: 'A disponibilidade e o número de gerações gratuitas podem alterar-se ao longo do tempo.',
    privacyOrAge: 'A geração de conteúdos não garante isenção automática de riscos jurídicos ou de direitos de autor; verificar sempre os termos da plataforma e os direitos sobre imagens carregadas.',
    officialSource: 'Adobe Firefly (página oficial)',
    officialUrl: 'https://firefly.adobe.com/',
    freeAlternative: 'Microsoft Designer ou Canva Free, consoante a tarefa.',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    focusFilter: 'edicao-texto',
    shortTag: '30 créditos semanais · Tipografia',
    description: 'Geração de imagens com especial atenção ao tratamento de texto e composição tipográfica.',
    capabilities: [
      'Integração de títulos, palavras e frases na composição visual.',
      'Criação de cartazes, capas e peças de comunicação visual.',
    ],
    educationalUse: 'Cartazes escolares, capas de documentos, campanhas educativas e materiais onde o texto faz parte da imagem.',
    freePlan: 'Contas elegíveis com início de sessão via Google, Apple ou Microsoft recebem 30 créditos gratuitos por semana.',
    limitations: 'Os créditos semanais são limitados. Mesmo com melhor desempenho tipográfico, a ortografia e o rigor do texto gerado devem ser sempre revistos.',
    privacyOrAge: 'Requer autenticação através de conta externa (Google, Apple ou Microsoft) e confirmação dos requisitos de idade e visibilidade dos trabalhos.',
    officialSource: 'Ideogram (página oficial)',
    officialUrl: 'https://ideogram.ai/',
    freeAlternative: 'Microsoft Designer ou Canva Free, com correção manual do texto.',
  },
  {
    id: 'canva',
    name: 'Canva',
    focusFilter: 'iniciacao',
    shortTag: 'Design e paginação · Plano Free',
    description: 'Plataforma de design visual, paginação, apresentações, cartazes, infográficos e materiais educativos.',
    capabilities: [
      'Composição de apresentações, cartazes, infográficos e fichas didáticas.',
      'Integração de imagens geradas por IA com texto, esquemas e diagramas.',
    ],
    educationalUse: 'Combinar imagens geradas, legendas científicas, diagramas e outros elementos visuais em recursos educativos finalizados.',
    freePlan: 'Inclui cota limitada de IA: a Canva documenta até 20 utilizações de ferramentas de IA Standard ou Premium no plano Free, consoante a ferramenta e os limites em vigor.',
    limitations: 'Nem todas as funcionalidades de IA estão incluídas no plano Free; a funcionalidade de geração de vídeo com IA não deve ser apresentada como gratuita.',
    privacyOrAge: 'Verificar os termos de utilização aplicáveis a contas escolares ou pessoais e não carregar dados identificáveis de alunos sem autorização institucional.',
    officialSource: 'Canva (página oficial)',
    officialUrl: 'https://www.canva.com/',
    freeAlternative: 'Microsoft Designer ou composição visual manual no LibreOffice Impress.',
  },
];

export type PromptImageKey = 'space-library' | 'renewable-energy' | 'human-heart' | 'plant-cell';

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
    objective: 'Estimular a criatividade, a exploração de cenários futuristas e a visualização de ambientes científicos.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração cinematográfica em formato horizontal 16:9 do interior de uma enorme biblioteca científica instalada numa estação espacial em forma de anel. Mostra estantes curvas repletas de livros, dois astronautas adultos a ler em gravidade zero e janelas panorâmicas com a Terra visível ao fundo. Utiliza uma perspetiva ampla, iluminação azul suave com apontamentos dourados, arquitetura futurista plausível e elevado detalhe visual. A composição deve transmitir tranquilidade, descoberta e conhecimento. Não incluas palavras, letras, logótipos ou marcas de água.',
    expectedResult: 'Imagem panorâmica de uma biblioteca espacial, com a Terra visível através das janelas e astronautas a ler.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'space-library',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 2,
    title: 'Sala de aula digital',
    category: 'Ficção & Futuro',
    objective: 'Explorar cenários de aprendizagem enriquecidos por tecnologia e discutir as possibilidades e limitações da realidade virtual.',
    recommendedTool: 'Microsoft Designer',
    prompt: 'Cria uma ilustração educativa de uma sala de aula contemporânea, luminosa e organizada, onde um pequeno grupo de alunos utiliza tablets e dispositivos de realidade virtual para explorar o sistema solar. Representa planetas em projeções tridimensionais no espaço da sala, com o professor a orientar a atividade. Utiliza cores equilibradas, ambiente acolhedor, diversidade de alunos e tecnologia visualmente plausível. Estilo de ilustração editorial moderna, composição horizontal 16:9. Não incluas texto, marcas ou logótipos.',
    expectedResult: 'Sala de aula moderna, com alunos a explorar representações tridimensionais de planetas.',
    freeAlternative: 'Leonardo.Ai',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 3,
    title: 'Programador do futuro',
    category: 'Ficção & Futuro',
    objective: 'Relacionar competências digitais, programação e profissões emergentes.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração futurista realista de uma pessoa adulta a trabalhar como programadora num espaço tecnológico moderno. A pessoa está sentada diante de uma secretária com vários ecrãs holográficos que apresentam estruturas abstratas de código e gráficos, sem palavras legíveis. Ao fundo, vê-se uma cidade inteligente através de uma janela panorâmica. Utiliza iluminação cinematográfica, composição equilibrada, ambiente profissional e detalhes tecnológicos plausíveis. Formato horizontal 16:9. Sem logótipos ou marcas de água.',
    expectedResult: 'Profissional de programação num ambiente tecnológico futurista, com ecrãs e cidade inteligente.',
    freeAlternative: 'Microsoft Designer',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 4,
    title: 'Base humana em Marte',
    category: 'Ficção & Futuro',
    objective: 'Explorar a exploração espacial, a ciência e a sustentabilidade em ambientes extremos.',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma imagem de uma base científica humana em Marte, com módulos habitacionais pressurizados, painéis solares, um veículo explorador e dois astronautas com fatos espaciais adequados ao ambiente marciano. Representa a superfície avermelhada do planeta, montanhas ao longe e uma atmosfera poeirenta subtil. A base deve parecer funcional e cientificamente plausível, não uma cidade de ficção científica. Estilo de concept art realista, iluminação natural e formato horizontal 16:9. Sem texto, bandeiras, logótipos ou marcas de água.',
    expectedResult: 'Base científica funcional na superfície marciana, com astronautas, módulos e veículo explorador.',
    freeAlternative: 'Microsoft Designer',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 5,
    title: 'Agricultura tecnológica',
    category: 'Sociedade & Sustentabilidade',
    objective: 'Compreender a relação entre tecnologia, agricultura, sustentabilidade e produção alimentar.',
    recommendedTool: 'Adobe Firefly',
    prompt: 'Cria uma imagem fotorrealista de uma estufa agrícola tecnológica e sustentável. Mostra culturas organizadas em sistemas de cultivo vertical e hidropónico, sensores ambientais, tubagens de rega e pequenos robots autónomos a monitorizar as plantas. A estufa deve apresentar luz natural, vegetação saudável e equipamentos plausíveis. A composição deve transmitir eficiência, inovação e sustentabilidade, sem transformar o cenário numa fantasia futurista. Formato horizontal 16:9. Não incluas texto nem logótipos.',
    expectedResult: 'Estufa moderna com plantas, sensores e automação agrícola.',
    freeAlternative: 'Microsoft Designer',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 6,
    title: 'Energias renováveis',
    category: 'Sociedade & Sustentabilidade',
    objective: 'Identificar fontes de energia renovável e discutir a transição energética.',
    recommendedTool: 'Adobe Firefly',
    prompt: 'Cria uma fotografia realista de uma paisagem com um parque eólico e painéis solares instalados de forma organizada. Mostra turbinas eólicas de proporções realistas, painéis solares a acompanhar o relevo e vegetação natural no primeiro plano. A cena decorre ao nascer do sol, com luz suave e céu parcialmente limpo. A composição deve transmitir sustentabilidade e equilíbrio entre tecnologia e natureza. Fotografia paisagística de elevada qualidade, formato horizontal 16:9. Sem texto, logótipos ou marcas de água.',
    expectedResult: 'Paisagem realista com turbinas eólicas e painéis solares.',
    freeAlternative: 'Microsoft Designer',
    imageKey: 'renewable-energy',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
  {
    id: 7,
    title: 'Rua tecnológica',
    category: 'Sociedade & Sustentabilidade',
    objective: 'Discutir cidades inteligentes, mobilidade, comércio digital e utilização da tecnologia no espaço público.',
    recommendedTool: 'Microsoft Designer',
    prompt: 'Cria uma ilustração realista de uma rua urbana inteligente do futuro próximo. Inclui edifícios contemporâneos, lojas com ecrãs digitais sem texto legível, informação interativa integrada no espaço público, pessoas a circular a pé e soluções de mobilidade sustentável. A rua deve ser funcional, acessível, segura e humanizada. Evita um cenário excessivamente distópico ou cheio de ecrãs. Utiliza uma composição horizontal 16:9, luz natural e estilo de visualização arquitetónica realista. Sem logótipos ou marcas de água.',
    expectedResult: 'Rua urbana contemporânea com tecnologia integrada no espaço público.',
    freeAlternative: 'Canva Free',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 8,
    title: 'Coração humano',
    category: 'Ciência & Anatomia',
    objective: 'Apoiar a exploração visual da anatomia e da organização do sistema cardiovascular.',
    recommendedTool: 'Adobe Firefly para a ilustração base, com identificação posterior das estruturas no Canva.',
    prompt: 'Cria uma ilustração científica educativa simplificada de um coração humano visto de frente, com proporções anatómicas plausíveis. Representa claramente as duas aurículas, os dois ventrículos, a aorta, as veias cavas, a artéria pulmonar e as veias pulmonares. Utiliza cores distintas para o sangue oxigenado e não oxigenado, sem exageros decorativos. Estilo de manual escolar de Ciências Naturais, fundo branco e composição limpa. Não incluas legendas, letras ou setas. A imagem destina-se a ser posteriormente anotada pelo professor e deve ser validada com uma fonte científica.',
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
    objective: 'Compreender a circulação sanguínea e distinguir artérias e veias.',
    recommendedTool: 'Adobe Firefly para a imagem base e Canva para as legendas.',
    prompt: 'Cria uma ilustração científica educativa de uma figura humana simplificada, de frente, mostrando o sistema circulatório. Representa uma rede coerente de vasos sanguíneos, com artérias a vermelho e veias a azul, distribuídas pelo corpo de forma anatómica e visualmente organizada. Inclui o coração numa posição anatomicamente adequada. Utiliza estilo de manual escolar, fundo branco e linhas limpas. Não incluas texto, letras ou legendas. A imagem deve ser posteriormente verificada e anotada com base num recurso científico credível.',
    expectedResult: 'Esquema corporal com rede circulatória diferenciada por cores, sem texto.',
    freeAlternative: 'Google Slides ou Canva Free, com uma referência anatómica validada.',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 10,
    title: 'Cérebro humano',
    category: 'Ciência & Anatomia',
    objective: 'Apoiar a identificação das principais regiões do cérebro e a sua localização.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração científica educativa de um cérebro humano visto lateralmente, com representação anatomicamente plausível dos lobos frontal, parietal, temporal e occipital. Diferencia subtilmente as quatro regiões através de cores suaves, mantendo a continuidade anatómica do cérebro. Estilo de manual escolar de Ciências, fundo branco, linhas limpas e elevada legibilidade. Não incluas texto, letras ou legendas. A imagem deve ser validada com uma fonte científica antes de ser utilizada para ensinar anatomia.',
    expectedResult: 'Cérebro em vista lateral, com as quatro regiões diferenciadas por cor e sem legendas.',
    freeAlternative: 'Canva Free ou Google Slides, utilizando uma imagem anatómica validada.',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 11,
    title: 'Sistema digestivo',
    category: 'Ciência & Anatomia',
    objective: 'Compreender a sequência dos órgãos envolvidos na digestão.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração científica educativa simplificada do sistema digestivo humano, representado num torso frontal. Mostra a boca, o esófago, o estômago, o intestino delgado e o intestino grosso nas respetivas posições anatómicas. Inclui apenas os órgãos essenciais para a compreensão do percurso dos alimentos. Utiliza estilo de manual escolar, fundo branco, cores suaves e linhas nítidas. Não incluas texto, letras ou legendas. A representação deve ser posteriormente validada com uma fonte científica.',
    expectedResult: 'Diagrama simplificado do sistema digestivo, com os órgãos dispostos na sequência anatómica correta.',
    freeAlternative: 'Canva Free ou Google Slides, com uma referência anatómica validada.',
    imageStatus: 'pending',
    testStatus: 'documentation-checked',
  },
  {
    id: 12,
    title: 'Célula vegetal',
    category: 'Ciência & Anatomia',
    objective: 'Identificar os principais constituintes de uma célula vegetal.',
    recommendedTool: 'Adobe Firefly para a ilustração base e Canva para as legendas.',
    prompt: 'Cria uma ilustração científica educativa de uma célula vegetal vista em corte, com formato aproximadamente retangular. Representa claramente a parede celular, a membrana plasmática, o citoplasma, o núcleo, os cloroplastos e um grande vacúolo central. Os elementos devem estar organizados de forma visualmente coerente e cientificamente plausível. Estilo de manual escolar de Ciências Naturais, cores suaves, fundo branco e composição limpa. Não incluas palavras, letras ou legendas. A imagem deve ser validada com uma fonte científica antes de ser utilizada em contexto letivo.',
    expectedResult: 'Diagrama de uma célula vegetal com os principais organelos representados, sem legendas.',
    freeAlternative: 'Canva Free ou Google Slides, com base numa referência científica validada.',
    imageKey: 'plant-cell',
    imageStatus: 'illustrative',
    testStatus: 'documentation-checked',
  },
];

export interface ImageActivity {
  id: string;
  title: string;
  subject?: string;
  targetAudience: string;
  estimatedDuration: string;
  recommendedTool: string;
  prompt: string;
  expectedResult: string;
  freeAlternative: string;
  objetivos: string[];
  implementacao: {
    etapa: string;
    titulo: string;
    descricao: string;
  }[];
  avaliacao: {
    entrega?: string;
    itens: string[];
  };
  safeguards: string;
}

export const IMAGE_ACTIVITIES: ImageActivity[] = [
  {
    id: 'estacoes-do-ano',
    title: 'ATIVIDADE: AS ESTAÇÕES DO ANO COM IA',
    subject: 'Estudo do Meio / Ciências Naturais (adaptável)',
    targetAudience: 'Adaptável a diferentes anos de escolaridade consoante o grau de autonomia na observação.',
    estimatedDuration: '45 a 60 minutos',
    recommendedTool: 'Adobe Firefly, para edição da imagem de referência.',
    prompt: 'Utiliza a imagem fornecida como referência. Mantém a mesma árvore, o mesmo enquadramento, a mesma perspetiva e o mesmo cenário. Altera apenas os elementos sazonais para representar o outono: folhas amarelas e castanhas, algumas folhas no chão e luz natural própria desta estação. Não acrescentes objetos, pessoas, texto ou elementos que não pertençam à paisagem.',
    expectedResult: 'Quatro imagens comparáveis da mesma árvore nas quatro estações.',
    freeAlternative: 'Microsoft Designer, quando a edição por referência estiver disponível na conta.',
    objetivos: [
      'Identificar as estações do ano e as suas características sazonais.',
      'Reconhecer mudanças observáveis na vegetação e no ambiente.',
      'Distinguir alterações sazonais plausíveis de elementos inventados pela IA.',
      'Utilizar ferramentas digitais com orientação do docente.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Observação',
        descricao: 'Apresentar uma imagem de uma árvore ou paisagem e pedir aos alunos que identifiquem os elementos observáveis: folhas, flores, temperatura aparente, presença de neve e estado da vegetação.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Transformação com IA',
        descricao: 'Utilizar a mesma imagem de referência para criar quatro versões sazonais. Manter, tanto quanto possível, o mesmo enquadramento e os mesmos elementos principais, alterando apenas os aspetos associados à estação do ano.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparação',
        descricao: 'Comparar as quatro imagens, identificar as alterações e justificar as respostas com base nas características observadas. Distinguir as alterações sazonais plausíveis dos elementos inventados pela IA.',
      },
    ],
    avaliacao: {
      entrega: 'Sequência das quatro imagens sazonais e registo oral ou escrito das observações.',
      itens: [
        'Reconhecimento das características próprias de cada estação.',
        'Capacidade de observação e comparação fundamentada.',
        'Identificação de eventuais incoerências geradas pela ferramenta.',
      ],
    },
    safeguards: 'Utilizar uma imagem de referência sem pessoas identificáveis e confirmar previamente os limites de utilização do plano gratuito.',
  },
  {
    id: 'patrimonio-futuro',
    title: 'ATIVIDADE: PATRIMÓNIO E FUTURO',
    subject: 'Geografia / História / Cidadania (adaptável)',
    targetAudience: 'Adaptável consoante o aprofundamento da análise urbanística e ambiental.',
    estimatedDuration: '60 a 90 minutos',
    recommendedTool: 'Adobe Firefly, para edição generativa da imagem.',
    prompt: 'Utiliza a fotografia fornecida como referência. Mantém a estrutura principal do espaço e a perspetiva original. Transforma a área selecionada num espaço público sustentável, com vegetação autóctone, zonas de sombra, percursos pedonais acessíveis e mobiliário urbano funcional. A proposta deve ser visualmente plausível e respeitar a identidade arquitetónica do local. Não acrescentes pessoas identificáveis, texto ou logótipos.',
    expectedResult: 'Comparação visual antes/depois, mantendo a identidade do espaço original.',
    freeAlternative: 'Microsoft Designer, quando a edição pretendida estiver disponível.',
    objetivos: [
      'Promover a consciência cívica e a reflexão sobre sustentabilidade urbana.',
      'Utilizar ferramentas de edição generativa preservando a identidade arquitetónica.',
      'Desenvolver o pensamento crítico sobre acessibilidade e espaço público.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Diagnóstico Local',
        descricao: 'Os alunos escolhem um espaço público ou um edifício da localidade. Devem privilegiar fotografias sem pessoas identificáveis, matrículas, moradas particulares ou outros dados pessoais. Podem também utilizar imagens de fontes com licença adequada.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Proposta de Requalificação',
        descricao: 'Aplicar a edição generativa sobre a fotografia de referência para propor soluções sustentáveis, acessíveis e visualmente coerentes com o espaço real.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentação e Análise Crítica',
        descricao: 'Apresentar o "Antes" e o "Depois", justificando as opções urbanísticas, a viabilidade da proposta e os elementos que a IA alterou ou preservou.',
      },
    ],
    avaliacao: {
      entrega: 'Fotografia original (ou imagem licenciada), imagem editada com IA e breve memória descritiva.',
      itens: [
        'Respeito pela identidade do espaço e viabilidade da proposta.',
        'Adequação das escolhas de sustentabilidade e acessibilidade.',
        'Clareza na argumentação comparativa.',
      ],
    },
    safeguards: 'Não carregar fotografias com rostos identificáveis, matrículas de veículos, moradas particulares ou menores. Verificar a licença das imagens recolhidas externamente.',
  },
  {
    id: 'visualizing-idioms',
    title: 'ATIVIDADE: VISUALIZING IDIOMS',
    subject: 'Inglês / Línguas Estrangeiras (adaptável)',
    targetAudience: 'Adaptável a vários níveis de proficiência linguística.',
    estimatedDuration: '45 a 60 minutos',
    recommendedTool: 'Microsoft Designer',
    prompt: 'Cria duas imagens independentes para a expressão inglesa [INSERIR EXPRESSÃO]. A primeira deve representar o significado literal das palavras. A segunda deve representar visualmente o significado figurado da expressão na cultura inglesa. Mantém um estilo de ilustração coerente nas duas imagens. Não incluas texto ou legendas. As imagens devem permitir que os alunos comparem a interpretação literal com a interpretação idiomática.',
    expectedResult: 'Duas imagens contrastantes que permitem explicar o significado literal e figurado.',
    freeAlternative: 'Leonardo.Ai',
    objetivos: [
      'Expandir o vocabulário e o domínio de expressões idiomáticas em língua inglesa.',
      'Diferenciar linguagem literal de linguagem figurada através da comparação visual.',
      'Praticar a expressão oral na língua estrangeira com apoio visual.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha da Expressão',
        descricao: 'O professor apresenta uma lista de expressões idiomáticas e cada aluno ou grupo seleciona uma expressão para explorar o seu sentido literal e figurado.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Criação Literal vs. Figurada',
        descricao: 'Gerar duas imagens independentes (uma literal e outra figurada) garantindo coerência de estilo e ausência de texto inserido.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentação Oral',
        descricao: 'Os alunos exibem as duas imagens contrastantes e explicam oralmente, em inglês, o significado idiomático e o contexto real de utilização.',
      },
    ],
    avaliacao: {
      entrega: 'Par de imagens (literal e figurada) e guião da apresentação oral.',
      itens: [
        'Correção linguística na língua inglesa.',
        'Clareza na distinção entre sentido literal e sentido figurado.',
        'Coerência da apresentação oral.',
      ],
    },
    safeguards: 'Rever os resultados para evitar estereótipos culturais ou interpretações inadequadas ao contexto escolar.',
  },
  {
    id: 'alegoria-caverna',
    title: 'ATIVIDADE: A ALEGORIA DA CAVERNA MODERNA',
    subject: 'Filosofia / Cidadania / Português (adaptável)',
    targetAudience: 'Adaptável a níveis de ensino compatíveis com a abordagem filosófica proposta.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Leonardo.Ai',
    prompt: 'Cria uma ilustração conceptual contemporânea inspirada na Alegoria da Caverna de Platão. Representa um grupo de pessoas numa sala escura, viradas para projeções luminosas de ecrãs que mostram imagens simplificadas do mundo. Uma figura começa a afastar-se dos ecrãs e dirige-se para uma abertura iluminada que simboliza o conhecimento e a descoberta da realidade. Inclui referências subtis a redes sociais e desinformação, sem apresentar marcas ou logótipos. A imagem deve permitir discutir simbolismo, perceção e pensamento crítico.',
    expectedResult: 'Composição simbólica que contrapõe a dependência das imagens digitais à procura de conhecimento.',
    freeAlternative: 'Microsoft Designer',
    objetivos: [
      'Relacionar o pensamento clássico de Platão com desafios contemporâneos da informação.',
      'Desenvolver a capacidade de abstração, simbolismo e conceptualização visual.',
      'Estimular o debate crítico sobre ecrãs, desinformação e autonomia intelectual.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Estudo do Conceito',
        descricao: 'Após a leitura da Alegoria da Caverna, o professor convida a turma a identificar o que representam hoje as "sombras", as "correntes" e a "saída para a luz".',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reinterpretação Visual',
        descricao: 'Os alunos elaboram uma ilustração conceptual contemporânea recorrendo a elementos simbólicos digitais sem marcas comerciais.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Debate Filosófico',
        descricao: 'As composições são analisadas em turma para fundamentar como os elementos visuais traduzem perceção, ilusão e pensamento crítico.',
      },
    ],
    avaliacao: {
      entrega: 'Ilustração conceptual gerada e reflexão escrita fundamentada (máx. 200 palavras).',
      itens: [
        'Rigor na ligação simbólica ao texto filosófico.',
        'Profundidade da reflexão crítica sobre informação e tecnologia.',
      ],
    },
    safeguards: 'No plano gratuito do Leonardo.Ai, as criações ficam públicas; orientar os alunos para não incluírem dados pessoais nos prompts.',
  },
  {
    id: 'biomecanica-movimento',
    title: 'ATIVIDADE: BIOMECÂNICA DO MOVIMENTO',
    subject: 'Educação Física (adaptável)',
    targetAudience: 'Adaptável sob orientação direta do docente de Educação Física.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Leonardo.Ai ou Microsoft Designer apenas para storyboard ilustrativo.',
    prompt: 'Cria um storyboard ilustrativo simples em três vinhetas horizontais, em estilo esquemático didático sobre fundo neutro, mostrando de forma sequencial as fases gerais de preparação, execução e recuperação de um gesto desportivo (ex.: serviço no voleibol), de acordo com a descrição técnica validada pelo docente. Usa silhuetas ou figuras estilizadas não identificáveis. Não incluas texto nem assumas rigor biomecânico clínico.',
    expectedResult: 'Storyboard ilustrativo de apoio visual para identificar as grandes fases de um movimento, sempre confrontado com a demonstração técnica validada.',
    freeAlternative: 'Ferramentas de apresentação (LibreOffice Impress / Google Slides) ou desenho manual com base em imagens técnicas validadas.',
    objetivos: [
      'Compreender as fases gerais de um gesto técnico desportivo a partir de referência validada.',
      'Utilizar apoios visuais ilustrativos sem substituir fontes técnicas reconhecidas.',
      'Desenvolver a observação orientada pelo docente ou por profissional qualificado.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Referência técnica validada',
        descricao: 'O professor seleciona um movimento desportivo e apresenta uma demonstração validada por um profissional qualificado ou por uma fonte técnica reconhecida, como uma federação desportiva.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Apoio visual',
        descricao: 'A IA pode ser utilizada para criar um storyboard ilustrativo das diferentes fases do movimento, com base na descrição técnica previamente validada pelo professor. As imagens devem ser identificadas como ilustrações e não como modelos biomecânicos de referência.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Análise pedagógica',
        descricao: 'Os alunos identificam as fases do movimento e comparam-nas com a demonstração técnica validada. A avaliação e o feedback motor são realizados pelo professor ou por profissional qualificado, não pela imagem gerada por IA.',
      },
    ],
    avaliacao: {
      entrega: 'Identificação comentada das fases do gesto técnico em confronto com a demonstração validada pelo docente.',
      itens: [
        'Identificação correta das fases do movimento (preparação, execução e recuperação).',
        'Capacidade de distinguir um apoio ilustrativo de uma referência técnica validada.',
      ],
    },
    safeguards: 'Não utilizar imagens geradas por IA como única referência para ensinar ou corrigir técnicas desportivas. Não carregar vídeos identificáveis de alunos em plataformas externas sem autorização e validação institucional.',
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
  freePlan: string;
  limitations: string;
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
    freePlan: '10 000 créditos mensais, partilhados pelos produtos disponíveis.',
    limitations: 'O plano gratuito não inclui a licença comercial paga. A clonagem de voz exige especial cuidado e autorização adequada.',
    officialUrl: 'https://elevenlabs.io/',
    freeAlternative: 'Narração gravada pelo docente e editada com Audacity.',
  },
  {
    id: 'adobe-podcast',
    category: 'Melhoria da qualidade de áudio',
    name: 'Adobe Podcast — Enhance Speech',
    recommendedFor: 'Reduzir ruído de fundo e melhorar gravações de voz falada.',
    freePlan: 'Apenas áudio, máximo de 30 minutos por ficheiro e uma hora de melhoria por dia.',
    limitations: 'Não inclui processamento de vídeo, processamento em lote nem controlos avançados no plano gratuito.',
    officialUrl: 'https://podcast.adobe.com/',
    freeAlternative: 'Audacity, utilizando redução manual de ruído e processamento de áudio.',
  },
  {
    id: 'audacity',
    category: 'Edição e gravação de áudio',
    name: 'Audacity',
    recommendedFor: 'Gravar, cortar, misturar e editar ficheiros de áudio.',
    freePlan: 'Software gratuito e de código aberto (Windows, macOS e Linux).',
    limitations: 'É um editor e gravador de áudio; não é um gerador de texto para voz (Text-to-Speech).',
    officialUrl: 'https://www.audacityteam.org/',
    freeAlternative: 'Ferramenta nativa gratuita e de código aberto.',
    clarification: 'Aplicação instalada localmente, facilitando o controlo dos ficheiros sem envio automático para servidores externos.',
  },
  {
    id: 'notebooklm',
    category: 'Podcasts e resumos áudio com IA',
    name: 'NotebookLM',
    recommendedFor: 'Gerar Resumos Áudio (Audio Overviews) a partir de fontes documentais fornecidas, com suporte para português de Portugal.',
    freePlan: 'Acesso gratuito com conta Google elegível, sujeito às políticas e limites da plataforma.',
    limitations: 'Produz um resumo conversacional a partir das fontes fornecidas; não substitui um podcast integralmente escrito e produzido pelos alunos.',
    officialUrl: 'https://notebooklm.google/',
    freeAlternative: 'Guião elaborado pelos alunos e gravação/edição no Audacity.',
  },
  {
    id: 'spotify-for-creators',
    category: 'Publicação de podcasts',
    name: 'Spotify for Creators',
    recommendedFor: 'Alojamento, publicação e distribuição de episódios de podcast.',
    freePlan: 'Alojamento e publicação gratuitos para criadores.',
    limitations: 'Plataforma de alojamento e distribuição de podcasts; não é um gerador de áudio com IA.',
    officialUrl: 'https://creators.spotify.com/',
    freeAlternative: 'Partilha interna dos ficheiros MP3/WAV no ambiente virtual de aprendizagem da escola.',
  },
];

export interface AudioActivity {
  id: string;
  title: string;
  objetivos: string[];
  recommendedTool: string;
  prompt: string;
  expectedResult: string;
  freeAlternative: string;
  visualPreviewLabel: string;
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
  safeguards: string;
}

export const AUDIO_ACTIVITIES: AudioActivity[] = [
  {
    id: 'vozes-do-patrimonio',
    title: 'ATIVIDADE: VOZES DO PATRIMÓNIO',
    objetivos: [
      'Desenvolver consciência histórica e patrimonial.',
      'Realizar investigação com base em fontes documentais.',
      'Produzir comunicação oral estruturada e rigorosa.',
    ],
    recommendedTool: 'NotebookLM para pesquisa baseada em fontes e ElevenLabs para narração sintética.',
    prompt: 'Com base exclusivamente nas fontes históricas fornecidas, escreve um guião de narração em primeira pessoa, como se o monumento escolhido estivesse a contar a sua própria história. Utiliza português europeu, linguagem clara e adequada a um público escolar. O texto deve ter entre 150 e 180 palavras, incluir a origem do monumento, a sua função e a sua importância histórica. Não inventes datas, personagens ou acontecimentos. Quando a informação não estiver nas fontes, assinala que é necessário confirmar.',
    expectedResult: 'Narração áudio em português europeu, com voz clara, ritmo natural e duração aproximada de um minuto.',
    freeAlternative: 'Gravar a narração com a voz do professor ou dos alunos, com autorização adequada, e editar no Audacity.',
    visualPreviewLabel: 'Representação visual ilustrativa da capa e forma de onda prevista (não constitui um ficheiro de áudio real).',
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Investigação Local',
        descricao: 'Os alunos selecionam um monumento ou espaço histórico local e recolhem informação em fontes credíveis fornecidas ou validadas pelo professor.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Construção do Guião',
        descricao: 'Com apoio do NotebookLM sobre as fontes selecionadas, estruturam um guião em primeira pessoa entre 150 e 180 palavras, verificando factos e datas.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Produção Áudio',
        descricao: 'Convertem o texto em narração clara no ElevenLabs ou gravam diretamente a leitura e editam o áudio final.',
        ferramentas: [
          'NotebookLM — síntese e organização a partir de fontes históricas',
          'ElevenLabs — síntese de voz (Text-to-Speech) em plano gratuito com 10 000 créditos/mês',
          'Audacity — alternativa gratuita para gravação e edição local',
        ],
      },
    ],
    avaliacao: {
      entrega: 'Guião revisto com fontes assinaladas e ficheiro áudio final.',
      itens: [
        'Rigor histórico e fidelidade às fontes consultadas.',
        'Clareza narrativa e adequação ao português europeu.',
        'Organização e qualidade técnica da gravação ou síntese.',
      ],
    },
    safeguards: 'Não clonar vozes de alunos ou terceiros e confirmar autorizações caso sejam gravadas vozes reais.',
  },
  {
    id: 'podcast-cidade-2050',
    title: 'ATIVIDADE: PODCAST "CIDADE 2050"',
    objetivos: [
      'Desenvolver pensamento crítico sobre sustentabilidade urbana.',
      'Estruturar comunicação oral argumentativa com perspetivas distintas.',
      'Praticar técnicas básicas de gravação e edição de áudio.',
    ],
    recommendedTool: 'Gravação dos alunos, edição com Audacity e melhoria opcional com Adobe Podcast.',
    prompt: 'Cria um guião para um podcast escolar intitulado "Cidade 2050". O podcast deve ter um apresentador e dois convidados com perspetivas diferentes sobre a cidade do futuro. Aborda mobilidade sustentável, energia, espaços verdes, habitação e tecnologia. Distingue factos atuais de previsões e cenários hipotéticos. Não inventes estatísticas nem apresentes previsões como certezas. Utiliza português europeu, linguagem clara e uma duração estimada de três a quatro minutos.',
    expectedResult: 'Podcast com introdução, diálogo argumentativo, diferentes perspetivas e conclusão fundamentada.',
    freeAlternative: 'Gravação e edição integral com Audacity.',
    visualPreviewLabel: 'Representação visual ilustrativa da capa do episódio e pista de áudio esperada (não é um ficheiro áudio executável).',
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Problematização',
        descricao: 'O professor propõe a questão orientadora "Como será a nossa cidade em 2050?" e orienta o levantamento de factos atuais vs. cenários futuros.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Estrutura do Guião',
        descricao: 'Os grupos distribuem os papéis (apresentador e dois convidados) e redigem um diálogo equilibrado com duração estimada de três a quatro minutos.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Gravação, Edição e Melhoria',
        descricao: 'Gravam o episódio, editam cortes e níveis no Audacity e, se necessário, melhoram a nitidez da voz.',
        ferramentas: [
          'Audacity — gravação, corte e mistura gratuitos em ambiente local',
          'Adobe Podcast (Enhance Speech) — redução de ruído em áudio até 30 min/ficheiro e 1 h/dia',
          'Spotify for Creators — publicação opcional após validação institucional',
        ],
      },
    ],
    avaliacao: {
      entrega: 'Guião estruturado e ficheiro áudio final.',
      itens: [
        'Distinção clara entre factos verificados e cenários hipotéticos.',
        'Coerência argumentativa e diversidade de perspetivas.',
        'Clareza na comunicação oral e edição limpa.',
      ],
    },
    safeguards: 'Antes de carregar vozes identificáveis de alunos no Adobe Podcast ou publicar no Spotify for Creators, obter validação institucional e aplicar as regras de proteção de dados.',
  },
];

export interface VideoTool {
  id: string;
  category: 'Geração de vídeo com IA' | 'Avatares de IA e tradução de vídeo' | 'Edição de vídeo';
  name: string;
  recommendedFor: string;
  freePlan: string;
  limitations: string;
  officialUrl: string;
  freeAlternative: string;
}

export const VIDEO_TOOLS: VideoTool[] = [
  {
    id: 'runway',
    category: 'Geração de vídeo com IA',
    name: 'Runway',
    recommendedFor: 'Sequências curtas de texto para vídeo e imagem para vídeo.',
    freePlan: '125 créditos únicos na criação da conta; não são renováveis.',
    limitations: 'Seleção limitada de modelos e ferramentas; marca de água nos resultados gerados no plano gratuito.',
    officialUrl: 'https://runwayml.com/',
    freeAlternative: 'Criar animações simples e transições manualmente no CapCut.',
  },
  {
    id: 'heygen',
    category: 'Avatares de IA e tradução de vídeo',
    name: 'HeyGen',
    recommendedFor: 'Apresentadores digitais com IA, dobragem e tradução de vídeo.',
    freePlan: 'Até 3 vídeos por mês, até 1 minuto cada, com marca de água e resolução limitada.',
    limitations: 'As cotas e funcionalidades podem mudar; não prometer nem assumir tradução ilimitada de vídeo.',
    officialUrl: 'https://www.heygen.com/',
    freeAlternative: 'CapCut para legendas, edição e narração gravada manualmente (não é uma solução equivalente de sincronização labial automática).',
  },
  {
    id: 'capcut',
    category: 'Edição de vídeo',
    name: 'CapCut',
    recommendedFor: 'Editar clipes, adicionar legendas, organizar cenas, narração e som.',
    freePlan: 'Ferramentas básicas de edição disponíveis gratuitamente.',
    limitations: 'Funcionalidades de IA, opções de exportação e efeitos premium podem exigir plano pago.',
    officialUrl: 'https://www.capcut.com/',
    freeAlternative: 'Edição básica no próprio CapCut ou noutro editor gratuito, consoante a tarefa.',
  },
];

export interface VideoPrompt {
  id: number;
  title: string;
  objective: string;
  recommendedTool: string;
  prompt: string;
  expectedResult: string;
  freeAlternative: string;
}

export const VIDEO_PROMPTS: VideoPrompt[] = [
  {
    id: 1,
    title: 'Ciclo da Água',
    objective: 'Explicar as principais fases do ciclo da água.',
    recommendedTool: 'Runway',
    prompt: 'Create a short educational animated sequence showing the water cycle in a natural landscape. Show sunlight heating a lake, water evaporating into the atmosphere, clouds forming through condensation, rain falling over mountains and water flowing back into rivers and lakes. Use a clean educational animation style, stable camera, simple visual transitions and scientifically coherent movement. Do not include written labels, subtitles, logos or watermarks. Landscape 16:9.',
    expectedResult: 'Vídeo curto com sequência visual clara de evaporação, condensação, precipitação e recolha.',
    freeAlternative: 'Criar uma animação simples com imagens, transições e setas no CapCut.',
  },
  {
    id: 2,
    title: 'Apresentador Digital',
    objective: 'Produzir uma breve apresentação oral de um conteúdo curricular.',
    recommendedTool: 'HeyGen',
    prompt: 'Create a short educational presenter video using a professional, friendly and natural-looking adult presenter. The presenter speaks in European Portuguese, with clear pronunciation, a calm pace and an appropriate educational tone. Use the following script exactly, without adding unsupported facts: [INSERT VERIFIED SCRIPT]. Use a clean classroom-style background, medium framing and natural facial expressions. Do not add logos or distracting visual effects.',
    expectedResult: 'Vídeo curto com apresentador digital, discurso claro e enquadramento profissional.',
    freeAlternative: 'Gravar o professor ou formador e editar o vídeo no CapCut.',
  },
  {
    id: 3,
    title: 'Dobrador Poliglota',
    objective: 'Desenvolver competência linguística e avaliar criticamente traduções e dobragens automáticas.',
    recommendedTool: 'HeyGen',
    prompt: 'Translate the supplied short video from European Portuguese into English. Preserve the original meaning, tone and intention. Use natural English, maintain technical terms and proper names, and do not introduce new information. Generate accurate subtitles and, where supported by the selected plan, a translated voice track with synchronised speech. Do not imitate a student\'s voice or likeness without the required authorisation. The final translation must be reviewed by a language teacher.',
    expectedResult: 'Vídeo traduzido, com legendas e faixa de voz em inglês, quando a funcionalidade estiver disponível no plano utilizado.',
    freeAlternative: 'CapCut, com legendas e narração gravada manualmente.',
  },
];

export interface VideoActivity {
  id: string;
  title: string;
  objetivos: string[];
  recommendedTool: string;
  expectedResult: string;
  freeAlternative: string;
  implementacao: {
    etapa: string;
    titulo: string;
    descricao: string;
  }[];
  avaliacao: {
    entrega: string;
    itens: string[];
  };
  safeguard: string;
}

export const VIDEO_ACTIVITIES: VideoActivity[] = [
  {
    id: 'dobrador-poliglota',
    title: 'ATIVIDADE: O DOBRADOR POLIGLOTA',
    objetivos: [
      'Desenvolver competência linguística na língua estrangeira.',
      'Avaliar criticamente traduções, legendagens e dobragens automáticas.',
      'Identificar erros semânticos, expressões idiomáticas e diferenças de registo.',
    ],
    recommendedTool: 'HeyGen (plano gratuito limitado) ou CapCut.',
    expectedResult: 'Vídeo traduzido com legendas revistas e lista comparativa das inadequações detetadas.',
    freeAlternative: 'CapCut, com legendas e narração gravada manualmente.',
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Seleção do Vídeo',
        descricao: 'Escolha de um vídeo curto, com direitos de utilização adequados.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Tradução, Legendagem e Dobragem',
        descricao: 'Tradução, legendagem e eventual dobragem com IA.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Análise Comparativa',
        descricao: 'Comparação entre original e tradução, identificando erros, expressões idiomáticas e diferenças de registo.',
      },
    ],
    avaliacao: {
      entrega: 'Vídeo original licenciado, vídeo traduzido/legendado e registo crítico das correções propostas.',
      itens: [
        'Correção linguística e gramatical das alterações propostas.',
        'Capacidade de identificar inadequações em expressões idiomáticas e registo.',
      ],
    },
    safeguard: 'Não utilizar vídeos de alunos, imagens identificáveis ou gravações de voz pessoais em serviços externos sem validação institucional e cumprimento das regras de proteção de dados.',
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
      tool.description.toLowerCase().includes(q) ||
      tool.educationalUse.toLowerCase().includes(q) ||
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
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some((i) => i.descricao.toLowerCase().includes(q)) ||
      act.recommendedTool.toLowerCase().includes(q) ||
      act.safeguards.toLowerCase().includes(q)
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
      act.implementacao.some((i) => i.descricao.toLowerCase().includes(q)) ||
      act.recommendedTool.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'atividades-audio',
        pageNumber: 6,
        pageTitle: act.title,
        snippet: act.objetivos.join(' · '),
      });
    }
  }

  for (const tool of VIDEO_TOOLS) {
    if (
      tool.name.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.recommendedFor.toLowerCase().includes(q) ||
      tool.freePlan.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'ferramentas-video',
        pageNumber: 7,
        pageTitle: `Ferramenta de Vídeo: ${tool.name}`,
        snippet: tool.recommendedFor,
      });
    }
  }

  for (const vp of VIDEO_PROMPTS) {
    if (
      vp.title.toLowerCase().includes(q) ||
      vp.objective.toLowerCase().includes(q) ||
      vp.prompt.toLowerCase().includes(q) ||
      vp.recommendedTool.toLowerCase().includes(q)
    ) {
      results.push({
        pageId: 'ferramentas-video',
        pageNumber: 7,
        pageTitle: `Prompt de Vídeo: ${vp.title}`,
        snippet: vp.objective,
      });
    }
  }

  for (const act of VIDEO_ACTIVITIES) {
    if (
      act.title.toLowerCase().includes(q) ||
      act.objetivos.some((o) => o.toLowerCase().includes(q)) ||
      act.implementacao.some((i) => i.descricao.toLowerCase().includes(q))
    ) {
      results.push({
        pageId: 'ferramentas-video',
        pageNumber: 7,
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
        pageNumber: 8,
        pageTitle: `Ética e Legislação: ${sec.title}`,
        snippet: sec.paragraphs[0],
      });
    }
  }

  for (const b of BIBLIOGRAPHY) {
    if (b.citation.toLowerCase().includes(q)) {
      results.push({
        pageId: 'bibliografia',
        pageNumber: 9,
        pageTitle: `Bibliografia: ${b.author}`,
        snippet: b.citation,
      });
    }
  }

  return results;
}
