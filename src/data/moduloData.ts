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
  'Criar imagens a partir de texto (texto -> imagem).',
  'Gerar ilustrações, fotografias e arte digital automaticamente.',
  'Editar imagens com recurso a instruções escritas.',
  'Remover ou substituir elementos de uma imagem.',
  'Melhorar a qualidade e aumentar a resolução de imagens.',
  'Criar variações da mesma imagem com estilos diferentes.',
  'Produzir imagens personalizadas para diferentes contextos educativos.',
];

export const TEACHER_IMAGE_BENEFITS: string[] = [
  'Criar imagens a partir de texto (texto → imagem).',
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
  {
    id: 'seaart-ai',
    name: 'SeaArt AI',
    focusFilter: 'controlo-estilo',
    shortTag: 'Créditos diários · Estilos e modelos',
    description: 'Plataforma online de criação e edição de imagens por inteligência artificial a partir de descrições escritas ou imagens de referência, com grande variedade de estilos visuais.',
    capabilities: [
      'Geração de imagens a partir de texto (texto → imagem) e transformação de imagens existentes.',
      'Escolha de estilos artísticos variados, remoção de fundo, filtros rápidos e aumento de resolução.',
    ],
    educationalUse: 'Produção de ilustrações temáticas, cenários históricos ou literários, personagens para narrativa visual e apoio a atividades criativas.',
    freePlan: 'Disponibiliza créditos diários gratuitos (Stamina) para experimentar a geração de imagens sem pagamento inicial.',
    limitations: 'O consumo de créditos varia consoante o modelo e a definição escolhidos; funcionalidades avançadas ou uso intensivo exigem subscrição paga.',
    privacyOrAge: 'Confirmar a idade mínima nos termos da plataforma e ter em conta que criações no plano gratuito podem ficar visíveis na comunidade.',
    officialSource: 'SeaArt AI (página oficial)',
    officialUrl: 'https://www.seaart.ai/',
    freeAlternative: 'Microsoft Designer ou Adobe Firefly (com conta elegível).',
  },
];

export const OTHER_IMAGE_TOOLS: ImageTool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    focusFilter: 'edicao-texto',
    shortTag: 'Assistente conversacional · Imagem',
    description: 'Assistente conversacional da OpenAI com capacidades integradas de geração e edição de imagens diretamente na conversa, a partir de texto, imagens de referência ou esboços.',
    capabilities: [
      'Criação de ilustrações, cenas educativas e composições com texto legível a partir de descrições escritas.',
      'Edição conversacional de zonas específicas de uma imagem mantendo a coerência do restante conteúdo.',
    ],
    educationalUse: 'Preparação de ilustrações para fichas de trabalho, esquemas explicativos, cartazes simples e refinamento iterativo de prompts com os alunos.',
    freePlan: 'Disponibiliza geração gratuita limitada de imagens em contas elegíveis, sujeita a limites temporários definidos pela plataforma.',
    limitations: 'A cota gratuita de geração e edição de imagens é limitada e pode ser restringida em períodos de maior utilização.',
    privacyOrAge: 'Verificar os requisitos mínimos de idade, as definições de privacidade e não introduzir dados pessoais identificáveis de alunos.',
    officialSource: 'ChatGPT / OpenAI (página oficial)',
    officialUrl: 'https://chatgpt.com/',
    freeAlternative: 'Microsoft Designer ou Leonardo.Ai Free.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    focusFilter: 'controlo-estilo',
    shortTag: 'Assistente Google · Multimodal',
    description: 'Assistente multimodal da Google com geração integrada de imagens a partir de texto, combinação de referências e edição assistida por instruções.',
    capabilities: [
      'Geração de imagens ilustrativas, composições visuais e representações a partir de descrições em linguagem natural.',
      'Edição sequencial, combinação de elementos visuais a partir de referências e integração de texto em múltiplos idiomas.',
    ],
    educationalUse: 'Criação de apoios visuais para apresentações, sequências narrativas ilustradas, exemplificação de conceitos e materiais didáticos personalizados.',
    freePlan: 'Acesso gratuito através de conta Google elegível, sujeito às políticas e aos limites de utilização em vigor.',
    limitations: 'A disponibilidade da geração de imagens e os limites variam consoante o tipo de conta (pessoal ou escolar) e as regras regionais.',
    privacyOrAge: 'Confirmar as políticas aplicáveis ao Google Workspace for Education e evitar incluir dados pessoais nos prompts.',
    officialSource: 'Google Gemini (página oficial)',
    officialUrl: 'https://gemini.google.com/',
    freeAlternative: 'Microsoft Designer ou Canva Free.',
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    focusFilter: 'iniciacao',
    shortTag: 'Assistente Microsoft · Criação visual',
    description: 'Assistente de IA da Microsoft que integra a criação de imagens a partir de texto no chat e permite continuar a edição visual em conjunto com ferramentas de design.',
    capabilities: [
      'Geração de ilustrações, cartazes e conceitos visuais diretamente através de pedidos escritos no chat.',
      'Ajustes rápidos e ligação ao Microsoft Designer para recorte, remoção de fundo e composição final.',
    ],
    educationalUse: 'Produção de imagens de apoio para apresentações, documentos, cartazes escolares e atividades de expressão visual.',
    freePlan: 'Acesso gratuito com conta Microsoft, sujeito aos limites de utilização definidos pela plataforma.',
    limitations: 'Textos longos gerados no interior da imagem exigem revisão ortográfica; os recursos disponíveis variam entre contas pessoais e institucionais.',
    privacyOrAge: 'Verificar as condições aplicáveis a contas escolares Microsoft 365 Education e os requisitos de idade da conta.',
    officialSource: 'Microsoft Copilot (página oficial)',
    officialUrl: 'https://copilot.microsoft.com/',
    freeAlternative: 'Microsoft Designer.',
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    focusFilter: 'iniciacao',
    shortTag: 'Fontes documentais · Infográficos',
    description: 'Assistente da Google centrado nos documentos carregados pelo utilizador, orientado para analisar fontes e gerar sínteses e recursos visuais fundamentados nessas fontes (não funciona como gerador aberto de fotografia ou arte).',
    capabilities: [
      'Organização e síntese rigorosa a partir de PDFs, apontamentos, páginas web e documentos da disciplina.',
      'Criação de infográficos no painel Studio com base nas fontes fornecidas, permitindo ajustar idioma, nível de detalhe, orientação e estilo visual.',
    ],
    educationalUse: 'Criação de infográficos e resumos visuais estruturados a partir de textos e materiais curriculares validados pelo professor para apoiar o estudo e a revisão.',
    freePlan: 'Acesso gratuito com conta Google elegível, sujeito aos limites e políticas da plataforma.',
    limitations: 'Não é um gerador genérico de imagens artísticas a partir de prompts abertos; os conteúdos dependem diretamente das fontes carregadas e requerem validação docente.',
    privacyOrAge: 'Confirmar a elegibilidade etária e as políticas aplicáveis a contas escolares (Google Workspace for Education) antes de carregar documentos.',
    officialSource: 'NotebookLM (página oficial)',
    officialUrl: 'https://notebooklm.google/',
    freeAlternative: 'Canva Free para paginação manual de infográficos.',
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
    imageKey: 'digital-classroom',
    imageStatus: 'illustrative',
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
    imageKey: 'future-programmer',
    imageStatus: 'illustrative',
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
    imageKey: 'mars-base',
    imageStatus: 'illustrative',
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
    imageKey: 'tech-agriculture',
    imageStatus: 'illustrative',
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
    imageKey: 'smart-street',
    imageStatus: 'illustrative',
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
    imageKey: 'circulatory-system',
    imageStatus: 'illustrative',
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
    imageKey: 'human-brain',
    imageStatus: 'illustrative',
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
    imageKey: 'digestive-system',
    imageStatus: 'illustrative',
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
  subject: string;
  schoolYear: string;
  targetAudience: string;
  estimatedDuration: string;
  recommendedTool: string;
  materials: string[];
  prompt: string;
  promptTip: string;
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
    subject: 'Estudo do Meio / Ciências Naturais',
    schoolYear: '1.º Ciclo (3.º e 4.º anos) — adaptável',
    targetAudience: 'Adaptável a diferentes anos de escolaridade consoante o grau de autonomia na observação.',
    estimatedDuration: '45 a 60 minutos',
    recommendedTool: 'Adobe Firefly (edição generativa sobre imagem de referência).',
    materials: [
      'Fotografia base de uma árvore ou paisagem sem pessoas identificáveis (com licença livre ou captada pelo docente).',
      'Computadores ou tablets com ligação à internet e conta elegível no Adobe Firefly.',
      'Grelha de observação impressa ou digital para registar diferenças entre estações.',
    ],
    prompt: 'Utiliza a imagem fornecida como referência. Mantém a mesma árvore, o mesmo enquadramento, a mesma perspetiva e o mesmo cenário. Altera apenas os elementos sazonais para representar o outono: folhas amarelas e castanhas, algumas folhas no chão e luz natural própria desta estação. Não acrescentes objetos, pessoas, texto ou elementos que não pertençam à paisagem.',
    promptTip: 'Especifique a iluminação própria de cada estação (ex.: luz dourada suave no outono, sol intenso no verão, céu nublado e geada no inverno), o estado exato da folhagem (rebentos, copa densa, folhas caídas ou ramos despidos) e o tipo de solo correspondente para reforçar a coerência sazonal.',
    expectedResult: 'Sequência comparável de quatro imagens da mesma árvore nas quatro estações, acompanhada de quadro de observação validado.',
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
        titulo: 'Observação da Imagem Base',
        descricao: 'Apresentar uma imagem de uma árvore ou paisagem e pedir aos alunos que identifiquem os elementos observáveis: folhas, flores, temperatura aparente, presença de neve e estado da vegetação.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Transformação Sazonal com IA',
        descricao: 'Utilizar a mesma imagem de referência no Adobe Firefly para criar quatro versões sazonais. Manter o mesmo enquadramento e os mesmos elementos principais, alterando apenas os aspetos associados à estação do ano.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Comparação e Validação Crítica',
        descricao: 'Comparar as quatro imagens, identificar as alterações e justificar as respostas com base nas características observadas. Distinguir as alterações sazonais plausíveis de eventuais elementos inventados pela IA.',
      },
    ],
    avaliacao: {
      entrega: 'Painel comparativo com as quatro imagens sazonais e registo escrito das observações validadas.',
      itens: [
        'Reconhecimento rigoroso das características próprias de cada estação.',
        'Capacidade de observação e comparação fundamentada.',
        'Identificação de eventuais incoerências ou elementos acrescentados pela ferramenta.',
      ],
    },
    safeguards: 'Utilizar uma imagem de referência sem pessoas identificáveis e confirmar previamente os limites de utilização do plano gratuito.',
  },
  {
    id: 'patrimonio-futuro',
    title: 'ATIVIDADE: PATRIMÓNIO E FUTURO',
    subject: 'Geografia / História / Cidadania e Desenvolvimento',
    schoolYear: '2.º e 3.º Ciclos (6.º a 9.º anos) — adaptável',
    targetAudience: 'Adaptável consoante o aprofundamento da análise urbanística e ambiental.',
    estimatedDuration: '60 a 90 minutos',
    recommendedTool: 'Adobe Firefly (edição generativa da fotografia de referência).',
    materials: [
      'Fotografia de um espaço público local sem pessoas identificáveis, matrículas ou moradas particulares (ou imagem com licença aberta).',
      'Dispositivos com acesso ao Adobe Firefly e guião de critérios de sustentabilidade urbana.',
      'Suporte de apresentação (diapositivos ou ficha digital) para o confronto "Antes e Depois".',
    ],
    prompt: 'Utiliza a fotografia fornecida como referência. Mantém a estrutura principal do espaço e a perspetiva original. Transforma a área selecionada num espaço público sustentável, com vegetação autóctone, zonas de sombra, percursos pedonais acessíveis e mobiliário urbano funcional. A proposta deve ser visualmente plausível e respeitar a identidade arquitetónica do local. Não acrescentes pessoas identificáveis, texto ou logótipos.',
    promptTip: 'Indique materiais construtivos típicos da região (ex.: calçada portuguesa, pedra natural ou madeira tratada), espécies vegetais autóctones (ex.: oliveira, sobreiro ou alfazema) e a escala real de bancos, sombras e passeios para obter uma proposta urbanística credível.',
    expectedResult: 'Díptico visual "Antes e Depois" mantendo a identidade do espaço original, acompanhado de breve memória justificativa.',
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
        descricao: 'Os alunos escolhem um espaço público ou um edifício da localidade a partir de fotografias sem pessoas identificáveis, matrículas ou outros dados pessoais, levantando problemas de acessibilidade, sombra ou conforto.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Proposta de Requalificação com IA',
        descricao: 'Aplicar a edição generativa no Adobe Firefly sobre a fotografia de referência para propor soluções sustentáveis, acessíveis e visualmente coerentes com o espaço real.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentação e Análise Crítica',
        descricao: 'Apresentar o "Antes" e o "Depois", justificando as opções urbanísticas, a viabilidade técnica da proposta e identificando os elementos que a IA alterou ou preservou.',
      },
    ],
    avaliacao: {
      entrega: 'Fotografia original (ou imagem licenciada), imagem editada com IA e memória descritiva.',
      itens: [
        'Respeito pela identidade do espaço e viabilidade real da proposta.',
        'Adequação das escolhas de sustentabilidade ambiental e acessibilidade.',
        'Clareza na argumentação comparativa e análise crítica do resultado da IA.',
      ],
    },
    safeguards: 'Não carregar fotografias com rostos identificáveis, matrículas de veículos, moradas particulares ou menores. Verificar a licença das imagens recolhidas externamente.',
  },
  {
    id: 'visualizing-idioms',
    title: 'ATIVIDADE: VISUALIZING IDIOMS',
    subject: 'Inglês / Línguas Estrangeiras',
    schoolYear: '2.º e 3.º Ciclos (5.º a 9.º anos) — adaptável',
    targetAudience: 'Adaptável a vários níveis de proficiência linguística (A2 a B2).',
    estimatedDuration: '45 a 60 minutos',
    recommendedTool: 'Microsoft Designer.',
    materials: [
      'Lista de expressões idiomáticas selecionada pelo docente (ex.: "break a leg", "piece of cake", "spill the beans").',
      'Acesso ao Microsoft Designer com conta institucional ou elegível.',
      'Dicionário bilingue ou monolingue de consulta para validação do significado idiomático.',
    ],
    prompt: 'Cria duas imagens independentes para a expressão inglesa [INSERIR EXPRESSÃO]. A primeira deve representar o significado literal das palavras. A segunda deve representar visualmente o significado figurado da expressão na cultura inglesa. Mantém um estilo de ilustração coerente nas duas imagens. Não incluas texto ou legendas. As imagens devem permitir que os alunos comparem a interpretação literal com a interpretação idiomática.',
    promptTip: 'Defina um estilo artístico idêntico para ambas as imagens (ex.: ilustração editorial em linhas limpas), especifique a paleta de cores, a expressão facial das personagens e peça explicitamente "sem texto nem balões de diálogo" para não revelar a resposta antes da apresentação.',
    expectedResult: 'Par de cartões visuais contrastantes (sentido literal vs. sentido figurado) sem texto interno, prontos para apresentação oral.',
    freeAlternative: 'Leonardo.Ai.',
    objetivos: [
      'Expandir o vocabulário e o domínio de expressões idiomáticas em língua inglesa.',
      'Diferenciar linguagem literal de linguagem figurada através da comparação visual.',
      'Praticar a expressão oral na língua estrangeira com apoio visual.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha e Investigação da Expressão',
        descricao: 'O professor apresenta uma lista de expressões idiomáticas e cada aluno ou par investiga o significado literal e o significado figurado em dicionário de referência.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Criação Literal vs. Figurada',
        descricao: 'No Microsoft Designer, gerar duas imagens independentes (uma literal e outra figurada) garantindo coerência de estilo e ausência de texto inserido.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Apresentação Oral e Análise',
        descricao: 'Os alunos exibem as duas imagens contrastantes à turma, explicam em inglês o significado idiomático, criam uma frase de exemplo e avaliam se a IA representou adequadamente o sentido figurado.',
      },
    ],
    avaliacao: {
      entrega: 'Par de imagens (literal e figurada) e guião breve da apresentação oral em inglês.',
      itens: [
        'Correção linguística e pronúncia na língua inglesa.',
        'Clareza na distinção entre sentido literal e sentido figurado.',
        'Adequação visual das imagens ao significado cultural da expressão.',
      ],
    },
    safeguards: 'Rever os resultados antes da projeção em turma para evitar estereótipos culturais ou interpretações inadequadas ao contexto escolar.',
  },
  {
    id: 'alegoria-caverna',
    title: 'ATIVIDADE: A ALEGORIA DA CAVERNA MODERNA',
    subject: 'Filosofia / Cidadania / Português',
    schoolYear: 'Ensino Secundário (10.º e 11.º anos) — adaptável',
    targetAudience: 'Adaptável a níveis de ensino compatíveis com a abordagem filosófica proposta.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Leonardo.Ai.',
    materials: [
      'Excerto impresso ou digital do Livro VII da República de Platão (Alegoria da Caverna).',
      'Computadores com acesso ao Leonardo.Ai (com atenção aos tokens diários do plano gratuito).',
      'Guião de mapeamento simbólico (sombras, correntes, fogo, saída para a luz).',
    ],
    prompt: 'Cria uma ilustração conceptual contemporânea inspirada na Alegoria da Caverna de Platão. Representa um grupo de pessoas numa sala escura, viradas para projeções luminosas de ecrãs que mostram imagens simplificadas do mundo. Uma figura começa a afastar-se dos ecrãs e dirige-se para uma abertura iluminada que simboliza o conhecimento e a descoberta da realidade. Inclui referências subtis a redes sociais e desinformação, sem apresentar marcas ou logótipos. A imagem deve permitir discutir simbolismo, perceção e pensamento crítico.',
    promptTip: 'Explore o contraste de iluminação (sombras profundas e luz azulada fria dos ecrãs versus luz natural quente à saída), indique o enquadramento em plano amplo e inclua metáforas visuais subtis em vez de texto explicativo.',
    expectedResult: 'Ilustração simbólica contemporânea acompanhada de ensaio breve fundamentado (150 a 200 palavras) sobre perceção e desinformação.',
    freeAlternative: 'Microsoft Designer.',
    objetivos: [
      'Relacionar o pensamento clássico de Platão com desafios contemporâneos da informação.',
      'Desenvolver a capacidade de abstração, simbolismo e conceptualização visual.',
      'Estimular o debate crítico sobre ecrãs, desinformação e autonomia intelectual.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Estudo do Conceito Filosófico',
        descricao: 'Após a leitura da Alegoria da Caverna, o professor convida a turma a identificar o que representam hoje as "sombras", as "correntes" e a "saída para a luz".',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reinterpretação Visual com IA',
        descricao: 'Os alunos elaboram uma ilustração conceptual contemporânea no Leonardo.Ai recorrendo a elementos simbólicos digitais sem marcas comerciais nem dados pessoais.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Debate Filosófico e Autoavaliação',
        descricao: 'As composições são analisadas em turma para fundamentar como os elementos visuais traduzem perceção, ilusão e pensamento crítico, questionando também eventuais lugares-comuns visuais produzidos pela IA.',
      },
    ],
    avaliacao: {
      entrega: 'Ilustração conceptual gerada e reflexão escrita fundamentada (máx. 200 palavras).',
      itens: [
        'Rigor na ligação simbólica ao texto filosófico de Platão.',
        'Profundidade da reflexão crítica sobre informação, algoritmos e tecnologia.',
        'Coerência argumentativa entre a imagem criada e o texto explicativo.',
      ],
    },
    safeguards: 'No plano gratuito do Leonardo.Ai, as criações ficam públicas; orientar os alunos para não incluírem nomes, fotografias ou dados pessoais nos prompts.',
  },
  {
    id: 'biomecanica-movimento',
    title: 'ATIVIDADE: BIOMECÂNICA DO MOVIMENTO',
    subject: 'Educação Física',
    schoolYear: '3.º Ciclo e Ensino Secundário (7.º a 12.º anos)',
    targetAudience: 'Adaptável sob orientação direta do docente de Educação Física.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Leonardo.Ai ou Microsoft Designer (apenas para storyboard ilustrativo).',
    materials: [
      'Vídeo ou prancha técnica validada por federação desportiva ou manual da disciplina.',
      'Acesso ao Leonardo.Ai ou Microsoft Designer para criar o storyboard esquemático.',
      'Ficha de decomposição das fases do gesto técnico (preparação, execução e recuperação).',
    ],
    prompt: 'Cria um storyboard ilustrativo simples em três vinhetas horizontais, em estilo esquemático didático sobre fundo neutro, mostrando de forma sequencial as fases gerais de preparação, execução e recuperação de um gesto desportivo (ex.: serviço no voleibol), de acordo com a descrição técnica validada pelo docente. Usa silhuetas ou figuras estilizadas não identificáveis. Não incluas texto nem assumas rigor biomecânico clínico.',
    promptTip: 'Indique o ângulo de câmara mais esclarecedor (ex.: vista lateral em perfil ou plano frontal), peça silhuetas neutras sobre fundo branco simples e especifique a separação clara em três vinhetas horizontais para evitar sobreposições.',
    expectedResult: 'Storyboard ilustrativo de três fases anotado pelos alunos com correções técnicas em confronto com a demonstração oficial.',
    freeAlternative: 'Ferramentas de apresentação (LibreOffice Impress / Google Slides) ou desenho manual com base em imagens técnicas validadas.',
    objetivos: [
      'Compreender as fases gerais de um gesto técnico desportivo a partir de referência validada.',
      'Utilizar apoios visuais ilustrativos sem substituir fontes técnicas reconhecidas.',
      'Desenvolver a observação orientada pelo docente ou por profissional qualificado.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Referência Técnica Validada',
        descricao: 'O professor seleciona um movimento desportivo e apresenta uma demonstração validada por um profissional qualificado ou por uma fonte técnica reconhecida, como uma federação desportiva.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Apoio Visual Esquemático',
        descricao: 'Utilizar o Leonardo.Ai ou o Microsoft Designer para gerar um storyboard ilustrativo das três fases gerais do movimento, assinalando expressamente que se trata de uma ilustração esquemática e não de um modelo biomecânico rigoroso.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Análise Pedagógica e Deteção de Erros',
        descricao: 'Os alunos identificam as fases do movimento, detetam eventuais imprecisões anatómicas ou posturais da imagem gerada por IA e comparam-nas com a demonstração técnica validada pelo docente.',
      },
    ],
    avaliacao: {
      entrega: 'Storyboard ilustrativo acompanhado de ficha comentada das fases do gesto técnico e dos desvios identificados face ao modelo oficial.',
      itens: [
        'Identificação correta das fases do movimento (preparação, execução e recuperação).',
        'Capacidade de distinguir um apoio ilustrativo de uma referência técnica validada.',
        'Rigor na deteção de erros posturais produzidos pela IA.',
      ],
    },
    safeguards: 'Não utilizar imagens geradas por IA como única referência para ensinar ou corrigir técnicas desportivas. Não carregar vídeos ou fotografias identificáveis de alunos em plataformas externas.',
  },
  {
    id: 'cartaz-campanha-ideogram',
    title: 'ATIVIDADE: CARTAZ DE CAMPANHA ESCOLAR COM TIPOGRAFIA',
    subject: 'Português / Cidadania e Desenvolvimento / Educação Visual',
    schoolYear: '2.º e 3.º Ciclos (5.º a 9.º anos)',
    targetAudience: 'Alunos do 2.º e 3.º Ciclos em trabalho individual ou em pequenos grupos.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Ideogram (especializado em integração de texto e composição tipográfica).',
    materials: [
      'Temas definidos para a campanha da escola (ex.: leitura na biblioteca, redução de plástico, convivência digital saudável).',
      'Acesso ao Ideogram (tendo em conta o limite de 30 créditos semanais gratuitos por conta).',
      'Lista de verificação ortográfica e de regras de comunicação visual (hierarquia, contraste e clareza da mensagem).',
    ],
    prompt: 'Cria um cartaz educativo escolar em formato vertical com estilo de design gráfico moderno e cores acessíveis sobre fundo claro. Inclui em destaque o título exato em português europeu: "LER ABRE MUNDOS" e o subtítulo "Semana da Leitura na Biblioteca Escolar". Ilustra livros abertos, elementos geométricos suaves e um ambiente acolhedor de estudo, sem marcas comerciais nem rostos realistas. Mantém tipografia limpa, bem alinhada e de fácil leitura.',
    promptTip: 'Coloque o texto exato entre aspas duplas e mantenha frases muito curtas (2 a 5 palavras); especifique a hierarquia visual (título grande no topo, subtítulo menor abaixo), a orientação vertical do cartaz e um fundo de alto contraste para facilitar a leitura.',
    expectedResult: 'Cartaz de campanha escolar com mensagem apelativa e tipografia verificada, pronto para impressão ou divulgação na intranet da escola.',
    freeAlternative: 'Canva Free (com revisão e inserção manual do texto em português).',
    objetivos: [
      'Planear mensagens cívicas ou culturais adequadas a um público escolar.',
      'Explorar a relação entre hierarquia tipográfica, imagem e eficácia comunicativa.',
      'Rever criticamente o texto gerado por inteligência artificial corrigindo erros ortográficos ou de composição.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Definição da Mensagem e Rascunho',
        descricao: 'Em grupo, os alunos escolhem o tema da campanha, redigem um slogan curto (máximo de 6 palavras) e um subtítulo informativo em português europeu, definindo o público-alvo.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Geração Tipográfica no Ideogram',
        descricao: 'Os alunos testam o prompt no Ideogram colocando o título e o subtítulo exatos entre aspas, observando como a ferramenta integra a tipografia na composição visual.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Auditoria Ortográfica e Validação Gráfica',
        descricao: 'A turma analisa os cartazes produzidos para verificar acentuação, ortografia, legibilidade e contraste. Se subsistir algum erro tipográfico da IA, os alunos registam a falha e corrigem-na ou recriam o texto manualmente.',
      },
    ],
    avaliacao: {
      entrega: 'Cartaz final da campanha e breve registo da revisão tipográfica realizada após a geração.',
      itens: [
        'Clareza comunicativa e adequação da mensagem ao público escolar.',
        'Rigor ortográfico e legibilidade da tipografia em português europeu.',
        'Capacidade de identificar e corrigir imperfeições textuais geradas pela IA.',
      ],
    },
    safeguards: 'Rever sempre a ortografia, os acentos e os sinais gráficos gerados pela ferramenta antes de expor o cartaz. Respeitar os limites de créditos gratuitos semanais planeando os prompts em papel antes de gerar.',
  },
  {
    id: 'guia-visual-canva',
    title: 'ATIVIDADE: GUIA VISUAL ILUSTRADO EM EQUIPA',
    subject: 'Ciências Naturais / História / Educação Tecnológica',
    schoolYear: '2.º e 3.º Ciclos (6.º a 9.º anos)',
    targetAudience: 'Equipas de 2 a 3 alunos com papéis distribuídos (investigação, ilustração e paginação).',
    estimatedDuration: '90 minutos (ou duas aulas de 45 minutos)',
    recommendedTool: 'Canva (composição, paginação e integração controlada de elementos visuais com texto).',
    materials: [
      'Manual escolar ou ficha de conteúdos validados pelo docente sobre o tema (ex.: cadeia alimentar, ciclo da água ou vida quotidiana medieval).',
      'Contas no Canva (plano gratuito ou Canva for Education) com modelo de folha A4 preparado.',
      'Lista de verificação de acessibilidade visual (tamanho mínimo de letra, contraste e legendas rigorosas).',
    ],
    prompt: 'Ilustração educativa em estilo vetorial limpo sobre fundo branco, sem texto nem legendas embutidas, representando [INSERIR CONCEITO, ex.: os três níveis de uma cadeia alimentar terrestre em floresta mediterrânica: plantas produtoras, herbívoros e carnívoros]. Cores naturais suaves, traço claro para facilitar a inserção posterior de legendas e setas explicativas no Canva.',
    promptTip: 'Peça ilustrações em estilo vetorial simples com fundo branco liso e bastante espaço livre à volta dos elementos ("sem texto nem setas"), reservando a colocação de legendas, setas e caixas explicativas para a paginação manual no Canva.',
    expectedResult: 'Folha didática ou guia visual de 1 página paginado no Canva, integrando imagens limpas, setas, títulos e legendas científicas redigidas pelos alunos.',
    freeAlternative: 'LibreOffice Impress ou Google Slides combinando imagens livres de direitos (Wikimedia Commons) com caixas de texto manuais.',
    objetivos: [
      'Sintetizar conteúdos curriculares numa peça visual organizada e legível.',
      'Combinar ilustrações de apoio com diagramas, setas e legendas rigorosas redigidas pelos próprios alunos.',
      'Aplicar princípios básicos de paginação, contraste e acessibilidade na produção de materiais de estudo.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Recolha de Conteúdo e Esboço em Papel',
        descricao: 'Cada equipa seleciona os 4 a 5 conceitos essenciais do manual escolar e desenha um esquema rápido em papel indicando onde ficará a imagem principal, as setas e as legendas.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Criação e Paginação no Canva',
        descricao: 'No Canva, os alunos utilizam um modelo A4 limpo, geram ou selecionam a ilustração base sem texto interno (respeitando a cota gratuita de IA da plataforma) e acrescentam manualmente títulos, setas e legendas validadas.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Revisão Cruzada entre Pares',
        descricao: 'As equipas trocam os guias entre si para validar a exatidão científica/histórica das legendas, a ausência de erros ortográficos e a facilidade de leitura.',
      },
    ],
    avaliacao: {
      entrega: 'Guia visual exportado em PDF e grelha de revisão preenchida por outra equipa.',
      itens: [
        'Exatidão científica ou histórica das legendas redigidas pelos alunos.',
        'Qualidade da paginação, hierarquia visual e legibilidade.',
        'Cooperação na equipa e indicação transparente dos recursos gerados com IA.',
      ],
    },
    safeguards: 'As ferramentas de IA no plano gratuito do Canva têm cota limitada; os alunos devem planear o esboço antes de gerar imagens e nunca inserir texto científico confiado apenas à geração automática.',
  },
  {
    id: 'cenarios-historicos-seaart',
    title: 'ATIVIDADE: CENÁRIOS HISTÓRICOS E NARRATIVA VISUAL',
    subject: 'História / Português',
    schoolYear: '3.º Ciclo (7.º a 9.º anos)',
    targetAudience: 'Alunos do 3.º Ciclo em análise de época histórica ou obra literária do currículo.',
    estimatedDuration: '60 a 75 minutos',
    recommendedTool: 'SeaArt AI (seleção de estilos artísticos e geração de cenários a partir de descrições).',
    materials: [
      'Fontes históricas ou excertos literários descritivos (ex.: Lisboa setecentista, caravela quinhentista ou cenário de conto literário).',
      'Computadores com acesso ao SeaArt AI e ficha de deteção de anacronismos visuais.',
      'Reprodutor de slides para montar a sequência narrativa final.',
    ],
    prompt: 'Ilustração histórica realista em estilo de pintura a óleo narrativa, representando uma praça portuária portuguesa do século XVI com edifícios de pedra calcária, mercadores com vestuário quinhentista fiel à época e embarcações à vela ao fundo. Luz natural de fim de tarde, composição ampla sem elementos modernos, sem postes elétricos, sem carros, sem texto nem marcas comerciais.',
    promptTip: 'Acrescente referências históricas concretas do século e do local (materiais de construção, vestuário, embarcações e objetos da época), o momento do dia e restrições explícitas como "sem postes elétricos, sem asfalto nem edifícios modernos".',
    expectedResult: 'Sequência de três ilustrações de época anotadas com legenda histórica e relatório de verificação de anacronismos detetados.',
    freeAlternative: 'Leonardo.Ai ou Microsoft Designer.',
    objetivos: [
      'Traduzir descrições históricas ou literárias em instruções visuais precisas.',
      'Identificar anacronismos e incoerências visuais produzidos por modelos generativos.',
      'Articular imagem e texto explicativo numa sequência narrativa coerente.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Levantamento de Pormenores de Época',
        descricao: 'A partir do manual ou texto literário, os alunos listam arquitetura, vestuário, transportes e objetos característicos do período em estudo, bem como elementos modernos a evitar.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Geração de Três Cenas no SeaArt AI',
        descricao: 'Os alunos escolhem um estilo coerente no SeaArt AI (gerindo os créditos diários gratuitos) e geram três momentos sequenciais mantendo coerência cromática e de cenário.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Caça aos Anacronismos e Legenda Histórica',
        descricao: 'Cada grupo projeta ou imprime as três imagens e assinala eventuais anacronismos gerados pela IA (roupas erradas, arquitetura impossível ou objetos modernos), escrevendo legendas historicamente rigorosas.',
      },
    ],
    avaliacao: {
      entrega: 'Sequência de 3 cenários ilustrados com legendas e lista comentada de anacronismos verificados.',
      itens: [
        'Fidelidade das descrições do prompt ao período histórico ou texto literário.',
        'Capacidade crítica de identificar erros e anacronismos nas imagens geradas.',
        'Coesão visual e narrativa entre as três cenas apresentadas.',
      ],
    },
    safeguards: 'Confirmar os requisitos de idade da plataforma antes da atividade (se necessário, o docente gera em projeção guiada). Ter em conta que imagens geradas no plano gratuito podem ficar visíveis publicamente na comunidade.',
  },
  {
    id: 'laboratorio-prompts-craiyon',
    title: 'ATIVIDADE: LABORATÓRIO CRÍTICO DE PROMPTS DESCRITIVOS',
    subject: 'Português / Educação Visual / TIC',
    schoolYear: '1.º e 2.º Ciclos (4.º a 6.º anos)',
    targetAudience: 'Turmas de 4.º a 6.º ano em trabalho guiado de escrita descritiva e literacia visual.',
    estimatedDuration: '45 a 60 minutos',
    recommendedTool: 'Craiyon (acesso direto no navegador para experimentação rápida e comparação de variantes).',
    materials: [
      'Quadro comparativo "Prompt Vago vs. Prompt Detalhado" (ficha impressa ou partilhada).',
      'Computadores ou tablets com navegador web aberto em craiyon.com (preferencialmente sem criação de contas individuais por menores).',
      'Cartões com adjetivos, planos fotográficos e estilos artísticos para enriquecer as descrições.',
    ],
    prompt: 'Versão A (vaga): "Um animal na floresta."\nVersão B (detalhada): "Ilustração em aguarela suave de uma raposa-vermelha portuguesa parada junto a um riacho numa floresta de carvalhos ao amanhecer, com folhas secas no chão e raios de sol entre as árvores, sem texto."',
    promptTip: 'Experimente acrescentar um elemento descritivo de cada vez — sujeito específico, ação concreta, cenário detalhado, tipo de iluminação e técnica artística (ex.: aguarela, fotografia macro ou lápis de cor) — para observar o impacto de cada palavra no resultado.',
    expectedResult: 'Quadro comparativo com capturas das imagens da Versão A e da Versão B, acompanhado de uma regra prática de escrita de prompts elaborada pelo aluno.',
    freeAlternative: 'Microsoft Designer ou desenho manual em pares a partir de descrições orais.',
    objetivos: [
      'Enriquecer o vocabulário descritivo (substantivos concretos, adjetivos e indicadores espaciais).',
      'Compreender na prática como a clareza e o detalhe da escrita alteram o resultado visual da IA.',
      'Desenvolver sentido crítico face a limitações técnicas, distorções e marcas de água em ferramentas gratuitas.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Teste do Prompt Vago',
        descricao: 'Os alunos escrevem uma frase muito curta (ex.: "Um animal na floresta") no Craiyon e observam a variedade e imprevisibilidade das imagens geradas.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Reescrita Descritiva e Nova Geração',
        descricao: 'Usando o banco de vocabulário (sujeito, ação, ambiente, iluminação e estilo), cada aluno reescreve o prompt com detalhe e volta a testar no Craiyon.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Análise de Resultados e Limitações',
        descricao: 'Em conjunto, comparam os resultados antes e depois da reescrita, apontando melhorias, distorções anatómicas ou visuais da ferramenta e explicando porque é que o rigor linguístico faz diferença.',
      },
    ],
    avaliacao: {
      entrega: 'Ficha comparativa com os dois prompts, os resultados obtidos e uma conclusão escrita em 3 linhas.',
      itens: [
        'Evolução linguística entre o primeiro prompt e a versão detalhada.',
        'Capacidade de observar e descrever diferenças concretas entre as imagens geradas.',
        'Reconhecimento das limitações técnicas da ferramenta gratuita (resolução, distorções, marcas de água).',
      ],
    },
    safeguards: 'No Craiyon, a versão gratuita apresenta anúncios, marcas de água e criações públicas; para alunos mais novos, privilegiar a utilização supervisionada em projeção ou pares e nunca introduzir dados ou fotografias pessoais.',
  },
  {
    id: 'esquema-iterativo-chatgpt',
    title: 'ATIVIDADE: ESQUEMA EXPLICATIVO ITERATIVO POR CONVERSA',
    subject: 'Físico-Química / Ciências Naturais / Matemática',
    schoolYear: '3.º Ciclo e Ensino Secundário (7.º a 10.º anos)',
    targetAudience: 'Alunos do 3.º Ciclo ou Secundário em aprendizagem de conceitos abstratos ou processos científicos.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'ChatGPT (geração e edição conversacional passo a passo de imagens educativas).',
    materials: [
      'Manual escolar com o esquema científico oficial do tema (ex.: estados físicos da matéria ou ciclo do carbono).',
      'Acesso ao ChatGPT (em conta elegível ou mediante demonstração guiada pelo docente).',
      'Diário de iteração para registar o que estava errado no 1.º rascunho e que instrução corrigiu o esquema.',
    ],
    prompt: 'Cria um esquema educativo simples e limpo sobre fundo branco para explicar as mudanças de estado físico da água (sólido, líquido e gasoso). Mostra três recipientes transparentes lado a lado com a organização das partículas em cada estado, ligados por setas simples. Não incluas texto nem palavras nas setas nesta primeira versão para que eu possa validar a disposição científica primeiro.',
    promptTip: 'Peça primeiro uma estrutura visual limpa sem palavras nas setas ("apenas símbolos e recipientes sobre fundo branco"); na mensagem seguinte, dê instruções cirúrgicas indicando exatamente o que corrigir (ex.: "aproxima as partículas do sólido numa rede regular").',
    expectedResult: 'Esquema científico final corrigido por iteração e diário de validação documentando as alterações pedidas entre a versão inicial e a final.',
    freeAlternative: 'Canva Free ou desenho vetorial no LibreOffice Draw com base no manual escolar.',
    objetivos: [
      'Representar visualmente processos científicos ou abstratos com apoio de diálogo iterativo.',
      'Praticar a revisão científica confrontando cada rascunho da IA com o manual da disciplina.',
      'Formular instruções corretivas precisas quando a imagem inicial apresenta erros conceptuais.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Geração da Primeira Versão',
        descricao: 'Os alunos pedem ao ChatGPT um esquema visual inicial sem legendas (ou com estrutura simples) e guardam essa primeira imagem como "Versão 1".',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Verificação Científica e Refinamento Conversacional',
        descricao: 'Confrontando a Versão 1 com o manual, identificam erros (ex.: espaçamento incorreto entre partículas no estado sólido ou setas trocadas) e escrevem uma instrução conversacional específica para corrigir apenas esses pontos.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Registo do Processo de Validação',
        descricao: 'Os alunos comparam a Versão 1 e a versão final validada, explicando à turma quais foram as falhas iniciais da IA e se a versão final está apta para estudar.',
      },
    ],
    avaliacao: {
      entrega: 'Comparação "Versão 1 vs. Versão Final" com diário de correções científicas.',
      itens: [
        'Exatidão científica da versão final após verificação no manual.',
        'Qualidade e precisão das instruções de correção dadas no diálogo.',
        'Rigor na justificação dos erros detetados no rascunho inicial.',
      ],
    },
    safeguards: 'A cota gratuita de geração de imagens no ChatGPT é limitada; planear previamente os critérios científicos antes de gerar e nunca aceitar esquemas científicos da IA sem validação pelo docente e pelo manual.',
  },
  {
    id: 'narrativa-multicultural-gemini',
    title: 'ATIVIDADE: SEQUÊNCIA NARRATIVA MULTICULTURAL',
    subject: 'Português / História e Geografia de Portugal / Cidadania',
    schoolYear: '2.º e 3.º Ciclos (5.º a 9.º anos)',
    targetAudience: 'Turmas do 2.º e 3.º Ciclos em projetos de leitura, biografia ou diversidade cultural.',
    estimatedDuration: '60 a 75 minutos',
    recommendedTool: 'Gemini (geração sequencial de imagens e edição assistida por instruções em português).',
    materials: [
      'Guião de micro-história ou biografia de 3 momentos (início, desafio e desfecho) validado previamente.',
      'Acesso ao Gemini com conta elegível (observando as regras escolares aplicáveis).',
      'Ficha de auditoria de representação (verificação de estereótipos, coerência de personagens e rigor cultural).',
    ],
    prompt: 'Ilustração narrativa em estilo de banda desenhada europeia colorida, representando a cena 1 de 3: uma jovem investigadora portuguesa do século XIX numa biblioteca antiga com mapas náuticos e instrumentos de astronomia em cima de uma mesa de madeira. Ambiente luminoso e respeitoso, sem exageros nem estereótipos visuais, sem balões de fala nem texto.',
    promptTip: 'Repita nas três cenas os mesmos traços identificadores da personagem (idade, vestuário, cor de cabelo, acessórios) e o mesmo estilo gráfico ("banda desenhada europeia em cores suaves"), descrevendo sempre uma única ação clara por vinheta.',
    expectedResult: 'Banda desenhada muda de 3 vinhetas acompanhada de legendas literárias ou históricas escritas pelos alunos e ficha de auditoria cultural.',
    freeAlternative: 'Microsoft Designer ou Canva Free.',
    objetivos: [
      'Construir uma sequência narrativa coerente articulando texto autoral e ilustração de apoio.',
      'Manter consistência visual entre cenas através de instruções sequenciais.',
      'Analisar criticamente eventuais enviesamentos ou estereótipos culturais nas imagens geradas por IA.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Guião dos Três Momentos',
        descricao: 'Os alunos redigem um breve guião de três cenas (introdução, ponto de viragem e conclusão), definindo características constantes da personagem e do espaço.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Criação Sequencial no Gemini',
        descricao: 'Geram a primeira cena no Gemini e utilizam instruções seguintes para manter o estilo e ajustar a ação e o cenário para as cenas 2 e 3.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Auditoria de Enviesamentos e Redação Final',
        descricao: 'A turma analisa as sequências quanto à fidelidade histórica/cultural, corrige ou sinaliza eventuais estereótipos produzidos pelo modelo e acrescenta as legendas literárias finais.',
      },
    ],
    avaliacao: {
      entrega: 'Sequência narrativa de 3 vinhetas legendadas e breve comentário de auditoria visual.',
      itens: [
        'Coerência narrativa e adequação linguística das legendas escritas pelos alunos.',
        'Continuidade visual conseguida ao longo das três cenas.',
        'Espírito crítico na análise de representações culturais e eventuais enviesamentos da IA.',
      ],
    },
    safeguards: 'Confirmar as políticas aplicáveis ao Google Workspace for Education e os requisitos etários da escola antes de utilizar com alunos. Não inserir nomes reais ou dados pessoais nos prompts.',
  },
  {
    id: 'cartoes-estudo-copilot',
    title: 'ATIVIDADE: CARTÕES VISUAIS DE ESTUDO E APOIO À APRESENTAÇÃO',
    subject: 'Geografia / Economia / Biologia',
    schoolYear: '3.º Ciclo e Ensino Secundário (8.º a 11.º anos)',
    targetAudience: 'Alunos do 3.º Ciclo e Secundário a preparar apresentações orais temáticas.',
    estimatedDuration: '60 minutos',
    recommendedTool: 'Microsoft Copilot (geração no chat com ligação opcional ao Microsoft Designer para recorte e acabamento).',
    materials: [
      'Guião de tópicos de apresentação oral (ex.: energias renováveis, alterações climáticas ou setores económicos).',
      'Acesso ao Microsoft Copilot (e Microsoft Designer, se necessário) com conta escolar ou elegível.',
      'Grelha de avaliação da apresentação oral (clareza visual + domínio do conteúdo sem ler texto excessivo).',
    ],
    prompt: 'Cria uma imagem ilustrativa em estilo editorial limpo para apoiar uma apresentação escolar sobre energia eólica offshore. Mostra turbinas eólicas no mar ao amanhecer, vistas de perspetiva ampla com céu sereno e composição simples que deixe espaço livre no topo esquerdo para colocar um título curto no diapositivo. Não incluas texto, números nem logótipos.',
    promptTip: 'Indique a proporção horizontal (16:9), o ponto focal principal alinhado num dos lados e peça explicitamente "zona calma e despejada no canto superior esquerdo para título", garantindo espaço negativo legível no diapositivo.',
    expectedResult: 'Conjunto de 3 cartões visuais ou diapositivos de apoio à apresentação oral, sem texto automático confuso e acompanhados de notas de orador.',
    freeAlternative: 'Banco de imagens livres de direitos (Unsplash / Pixabay) com paginação em LibreOffice Impress.',
    objetivos: [
      'Substituir diapositivos sobrecarregados de texto por apoios visuais claros e funcionais.',
      'Formular pedidos de composição visual pensados para enquadramento de apresentação (espaço negativo, foco claro).',
      'Verificar a plausibilidade técnica das imagens usadas como suporte à exposição oral.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Planificação Visual da Apresentação',
        descricao: 'Para 3 momentos-chave da sua exposição oral, cada aluno define qual a ideia visual central e onde precisa de espaço livre na imagem para o título.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Geração no Microsoft Copilot e Acabamento',
        descricao: 'Os alunos geram as imagens no chat do Microsoft Copilot sem texto embutido e, caso precisem de ajustar proporções ou recortar elementos, continuam a edição no Microsoft Designer.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Ensaio Oral e Validação Técnica',
        descricao: 'Apresentam durante 2 minutos apoiando-se exclusivamente nas imagens e nas notas de orador, enquanto os colegas validam se a imagem ilustra corretamente o conceito sem erros técnicos.',
      },
    ],
    avaliacao: {
      entrega: 'Conjunto de 3 diapositivos/cartões visuais e notas de apresentação oral.',
      itens: [
        'Qualidade da composição visual ao serviço da comunicação oral (clareza e ausência de poluição visual).',
        'Coerência entre o discurso oral fundamentado e a imagem apresentada.',
        'Validação técnica dos elementos visuais gerados (ausência de erros grosseiros na representação).',
      ],
    },
    safeguards: 'Confirmar as condições aplicáveis a contas escolares Microsoft 365 Education. Evitar gerar gráficos numéricos ou mapas estatísticos inventados; usar esta abordagem apenas para ilustrações de apoio conceptual.',
  },
  {
    id: 'infografico-fontes-notebooklm',
    title: 'ATIVIDADE: INFOGRÁFICO FUNDAMENTADO EM FONTES CURRICULARES',
    subject: 'História / Biologia e Geologia / Geografia',
    schoolYear: '3.º Ciclo e Ensino Secundário (8.º a 12.º anos)',
    targetAudience: 'Alunos do 3.º Ciclo e Secundário em trabalho de síntese documental rigorosa.',
    estimatedDuration: '60 a 75 minutos',
    recommendedTool: 'NotebookLM (análise de fontes fornecidas e criação de infográfico no painel Studio) e Canva (opcional, para paginação complementar).',
    materials: [
      'Conjunto de 2 a 4 documentos fiáveis fornecidos pelo docente (PDFs do manual, artigos científicos adaptados ou fichas curriculares).',
      'Acesso ao NotebookLM com conta Google elegível (ou utilização orientada pelo docente em sala).',
      'Lista de verificação factual para confirmar cada dado do infográfico face aos documentos originais.',
    ],
    prompt: 'Com base exclusivamente nas fontes documentais carregadas neste caderno sobre [INSERIR TEMA CURRICULAR], organiza os elementos para um infográfico educativo de estudo dirigido a alunos do [ANO]. Destaca: 1) título objetivo; 2) 3 a 4 ideias-chave com definição rigorosa; 3) datas, etapas ou factos comprovados nos documentos; 4) uma referência à fonte consultada. Não inventes dados externos e assinala qualquer lacuna de informação.',
    promptTip: 'No painel Studio do NotebookLM, indique claramente o público-alvo (ano de escolaridade), o nível de detalhe pretendido (síntese ou aprofundamento), a orientação (retrato ou paisagem) e o idioma em português europeu, delimitando o foco às ideias-chave das fontes selecionadas.',
    expectedResult: 'Infográfico educativo gerado no painel Studio do NotebookLM (com eventual acabamento no Canva), acompanhado de tabela de verificação face às fontes originais.',
    freeAlternative: 'Leitura anotada dos documentos em papel e construção manual do infográfico no Canva Free ou LibreOffice Impress.',
    objetivos: [
      'Distinguir ferramentas fundamentadas em fontes (como o NotebookLM) de geradores abertos de fotografia ou arte.',
      'Sintetizar informação curricular complexa num infográfico estruturado e fiel aos documentos.',
      'Praticar a auditoria factual cruzando cada afirmação visual com os textos de origem.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Seleção e Carregamento de Fontes Validadas',
        descricao: 'O docente ou os alunos sob supervisão carregam no NotebookLM apenas os documentos curriculares validados para o tema (sem incluir dados pessoais).',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Geração do Infográfico no Painel Studio',
        descricao: 'Utilizar as fontes carregadas no NotebookLM para estruturar os pontos principais e criar um infográfico no painel Studio, selecionando idioma (português), nível de detalhe e orientação adequados ao público.',
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Auditoria Factual e Partilha',
        descricao: 'Os alunos conferem linha a linha se todos os conceitos, datas e relações do infográfico constam exatamente das fontes carregadas, corrigindo eventuais simplificações excessivas (no Canva, se necessário) antes da partilha.',
      },
    ],
    avaliacao: {
      entrega: 'Infográfico validado e lista de verificação factual ligando cada bloco do infográfico à respetiva fonte.',
      itens: [
        'Fidelidade rigorosa aos documentos curriculares fornecidos (ausência de factos inventados).',
        'Clareza na organização hierárquica da informação e legibilidade para estudo.',
        'Rigor na revisão crítica do resultado produzido pelo painel Studio.',
      ],
    },
    safeguards: 'O NotebookLM não é um gerador aberto de imagens artísticas nem substitui a leitura das fontes pelo aluno. Confirmar a elegibilidade etária e as políticas do Google Workspace for Education antes de carregar ficheiros; nunca carregar trabalhos com dados pessoais de alunos.',
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
    recommendedFor: 'Reduzir ruído de fundo e melhorar gravações de voz falada.',
    capabilities: [
      'Limpeza automática de ruído de fundo e reverberação em ficheiros de voz.',
      'Melhoria da clareza vocal para gravações efetuadas em sala de aula ou com microfones simples.',
    ],
    classroomApplications: 'Recuperação de gravações de entrevistas, apresentações orais ou episódios de podcast escolar gravados em espaços com eco ou ruído ambiente.',
    freePlan: 'Apenas áudio, máximo de 30 minutos por ficheiro e uma hora de melhoria por dia.',
    limitations: 'Não inclui processamento de vídeo, processamento em lote nem controlos avançados no plano gratuito.',
    privacyOrAge: 'Requer conta Adobe elegível; confirmar os requisitos mínimos de idade e obter validação institucional antes de carregar gravações de voz identificáveis de alunos.',
    officialSource: 'Adobe Podcast (página oficial)',
    officialUrl: 'https://podcast.adobe.com/',
    freeAlternative: 'Audacity, utilizando redução manual de ruído e processamento de áudio.',
  },
  {
    id: 'audacity',
    category: 'Edição e gravação de áudio',
    name: 'Audacity',
    recommendedFor: 'Gravar, cortar, misturar e editar ficheiros de áudio.',
    capabilities: [
      'Gravação multipista, corte, mistura e ajuste de volume diretamente no computador.',
      'Redução manual de ruído, aplicação de efeitos e exportação em formatos MP3 ou WAV.',
    ],
    classroomApplications: 'Produção completa de podcasts escolares, entrevistas, dramatizações áudio e edição de narrações gravadas por docentes ou alunos em ambiente local.',
    freePlan: 'Software gratuito e de código aberto (Windows, macOS e Linux).',
    limitations: 'É um editor e gravador de áudio; não é um gerador de texto para voz (Text-to-Speech).',
    privacyOrAge: 'Software livre instalado localmente sem obrigatoriedade de conta online, facilitando o controlo dos ficheiros sem envio automático para servidores externos.',
    officialSource: 'Audacity (página oficial)',
    officialUrl: 'https://www.audacityteam.org/',
    freeAlternative: 'Ferramenta nativa gratuita e de código aberto.',
    clarification: 'Aplicação instalada localmente, facilitando o controlo dos ficheiros sem envio automático para servidores externos.',
  },
  {
    id: 'notebooklm',
    category: 'Podcasts e resumos áudio com IA',
    name: 'NotebookLM',
    recommendedFor: 'Gerar Resumos Áudio (Audio Overviews) a partir de fontes documentais fornecidas, com suporte para português de Portugal.',
    capabilities: [
      'Análise de documentos carregados pelo utilizador (PDFs, apontamentos e páginas web).',
      'Geração de Resumos Áudio (Audio Overviews) em formato conversacional fundamentados nas fontes fornecidas.',
    ],
    classroomApplications: 'Criação de sínteses áudio de apoio à revisão de matérias a partir de documentos curriculares validados pelo professor e preparação de guiões documentados.',
    freePlan: 'Acesso gratuito com conta Google elegível, sujeito às políticas e limites da plataforma.',
    limitations: 'Produz um resumo conversacional a partir das fontes fornecidas; não substitui um podcast integralmente escrito e produzido pelos alunos.',
    privacyOrAge: 'Confirmar a elegibilidade etária e as políticas aplicáveis ao Google Workspace for Education antes de utilizar com alunos; não carregar documentos com dados pessoais.',
    officialSource: 'NotebookLM (página oficial)',
    officialUrl: 'https://notebooklm.google/',
    freeAlternative: 'Guião elaborado pelos alunos e gravação/edição no Audacity.',
  },
  {
    id: 'spotify-for-creators',
    category: 'Publicação de podcasts',
    name: 'Spotify for Creators',
    recommendedFor: 'Alojamento, publicação e distribuição de episódios de podcast.',
    capabilities: [
      'Alojamento gratuito e gestão de episódios de podcast em formato áudio.',
      'Distribuição de séries áudio e consulta de estatísticas básicas de reprodução.',
    ],
    classroomApplications: 'Publicação de rádios escolares ou séries de podcasts educativos após edição externa e validação pedagógica e institucional.',
    freePlan: 'Alojamento e publicação gratuitos para criadores.',
    limitations: 'Plataforma de alojamento e distribuição de podcasts; não é um gerador de áudio com IA.',
    privacyOrAge: 'Plataforma externa destinada a publicação pública; verificar requisitos etários da conta e obter autorização institucional e dos encarregados de educação antes de publicar vozes de alunos.',
    officialSource: 'Spotify for Creators (página oficial)',
    officialUrl: 'https://creators.spotify.com/',
    freeAlternative: 'Partilha interna dos ficheiros MP3/WAV no ambiente virtual de aprendizagem da escola.',
  },
  {
    id: 'ttsmaker',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'TTSMaker',
    recommendedFor: 'Conversor online de texto para fala (Text-to-Speech) que gera áudio falado a partir de texto escrito em vários idiomas e estilos de voz.',
    capabilities: [
      'Conversão rápida de texto escrito em ficheiros de áudio falado (MP3, WAV, entre outros) diretamente no navegador.',
      'Seleção de idiomas, vozes distintas, velocidade de leitura, pausas e entoação.',
    ],
    classroomApplications: 'Criação rápida de narrações para fichas de estudo, textos de compreensão auditiva em línguas estrangeiras e apoios áudio para alunos com dislexia ou dificuldades de leitura.',
    freePlan: 'Plano gratuito com cota semanal (tipicamente até 20 000 caracteres por semana nas vozes padrão e vozes assinaladas como ilimitadas).',
    limitations: 'Os ficheiros gerados são eliminados temporariamente do servidor após cerca de 30 minutos (devendo ser descarregados de imediato); a naturalidade varia consoante o idioma e a voz.',
    privacyOrAge: 'Segundo os termos oficiais da plataforma, os utilizadores devem ter pelo menos 16 anos (ou idade superior exigida pela lei local) ou autorização de responsável legal; não inserir dados pessoais nos textos.',
    officialSource: 'TTSMaker (página oficial)',
    officialUrl: 'https://ttsmaker.com/',
    freeAlternative: 'Narração gravada pelo docente e editada no Audacity.',
  },
  {
    id: 'clipchamp',
    category: 'Edição de vídeo e locução',
    name: 'Clipchamp',
    recommendedFor: 'Editor de vídeo da Microsoft com ferramentas integradas de áudio, incluindo conversão de texto em voz (Text-to-Speech), gravação de locução e legendagem automática.',
    capabilities: [
      'Edição em linha temporal com corte, mistura de faixas de áudio, remoção de silêncios e legendagem automática.',
      'Gerador integrado de locução por IA (Text-to-Speech) em dezenas de idiomas com ajuste de ritmo e tom, além de gravação direta de voz.',
    ],
    classroomApplications: 'Produção pelo professor de vídeos educativos narrados, tutoriais passo a passo, apresentações comentadas com legendas de acessibilidade e projetos multimédia de alunos.',
    freePlan: 'Plano gratuito com conta Microsoft, exportação de vídeo até 1080p sem marca de água e acesso a funcionalidades base de Text-to-Speech e gravação.',
    limitations: 'Cada bloco de síntese de texto para voz tem um limite máximo de 10 minutos por geração (narrações maiores exigem blocos separados); exportação 4K e sincronização avançada exigem subscrição.',
    privacyOrAge: 'Requer início de sessão com conta Microsoft pessoal ou escolar; contas de menores podem estar sujeitas a restrições etárias ou de controlo parental (Microsoft Family Safety).',
    officialSource: 'Microsoft Clipchamp (página oficial)',
    officialUrl: 'https://clipchamp.com/',
    freeAlternative: 'Audacity para gravação e edição áudio em conjunto com editor de vídeo local gratuito.',
  },
  {
    id: 'descript',
    category: 'Edição de áudio e vídeo por transcrição',
    name: 'Descript',
    recommendedFor: 'Plataforma de edição de áudio e vídeo baseada em texto, permitindo editar gravações diretamente através da transcrição escrita automática.',
    capabilities: [
      'Transcrição automática e edição de áudio ou vídeo mediante corte e reorganização do texto transcrito.',
      'Gravação de voz e ecrã, redução de ruído de fundo, remoção de hesitações e ferramentas de voz assistidas por IA.',
    ],
    classroomApplications: 'Edição ágil de entrevistas, gravações de aulas ou podcasts escolares através da leitura da transcrição, além da preparação de materiais vídeo legendados.',
    freePlan: 'Plano gratuito com limite mensal de 1 hora de multimédia (gravação ou carregamento/transcrição), 100 créditos de IA iniciais e exportação até 720p com marca de água em vídeo.',
    limitations: 'Os limites gratuitos de horas mensais e créditos de IA são restritos para projetos longos; algumas funcionalidades avançadas consomem créditos únicos ou exigem plano pago.',
    privacyOrAge: 'De acordo com os termos de serviço da Descript, exige idade mínima de 13 anos (entre os 13 e os 17 anos requer autorização dos pais ou encarregados de educação); evitar carregar ficheiros com dados sensíveis.',
    officialSource: 'Descript (página oficial)',
    officialUrl: 'https://www.descript.com/',
    freeAlternative: 'Audacity para gravação e edição áudio local gratuita.',
  },
  {
    id: 'tts-for-free',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'TTS For Free',
    recommendedFor: 'Serviço online de síntese de texto para fala que converte textos escritos em áudio falado para audição imediata ou descarregamento.',
    capabilities: [
      'Conversão simples de texto em voz em vários idiomas diretamente através da interface web.',
      'Pré-audição rápida no navegador e descarga do ficheiro áudio para utilização offline em apresentações ou fichas.',
    ],
    classroomApplications: 'Produção rápida de enunciados falados, pequenos diálogos de compreensão oral, apoio à leitura autónoma e instruções áudio para estações de trabalho em sala.',
    freePlan: 'Disponibiliza utilização gratuita no navegador e ferramentas com limites por pedido (tipicamente até 2 000 caracteres por conversão na ferramenta web padrão, com cota de créditos gratuitos).',
    limitations: 'Textos longos têm de ser divididos em blocos curtos; a qualidade das vozes e os limites exatos variam consoante o modo utilizado e podem ser alterados pela plataforma.',
    privacyOrAge: 'Confirmar os termos de utilização e privacidade na página oficial antes de partilhar com alunos; não introduzir textos contendo nomes, avaliações ou dados pessoais.',
    officialSource: 'TTS For Free (página oficial)',
    officialUrl: 'https://ttsforfree.com/',
    freeAlternative: 'Leitura gravada localmente pelo professor com Audacity.',
  },
];

export interface AudioActivity {
  id: string;
  title: string;
  objetivos: string[];
  recommendedTool?: string;
  prompt?: string;
  freeAlternative?: string;
  implementacao: {
    etapa: string;
    titulo: string;
    descricao: string;
    pontos?: string[];
    ferramentas?: string[];
  }[];
  avaliacao: {
    entrega: string | string[];
    itens: string[];
  };
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
    freeAlternative: 'Gravar a narração com a voz do professor ou dos alunos, com autorização adequada, e editar no Audacity.',
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
    freeAlternative: 'Gravação e edição integral com Audacity.',
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
  },
  {
    id: 'dobrador-poliglota',
    title: 'ATIVIDADE: O DOBRADOR POLIGLOTA',
    objetivos: [
      'Desenvolver competência linguística.',
      'Avaliar criticamente traduções automáticas.',
      'Melhorar vocabulário e estruturas gramaticais.',
    ],
    implementacao: [
      {
        etapa: 'Etapa 1',
        titulo: 'Escolha do Vídeo',
        descricao: 'Os alunos escolhem um vídeo curto (1 minuto) na sua língua materna ou o professor atribui vídeos a grupos de trabalho.',
      },
      {
        etapa: 'Etapa 2',
        titulo: 'Tradução com IA',
        descricao: 'Os alunos utilizam ferramentas gratuitas para traduzir para a língua que estão a aprender (Inglês, Espanhol, entre outras).',
        ferramentas: [
          'HeyGen (versão gratuita limitada)',
          'CapCut (gratuito)',
        ],
      },
      {
        etapa: 'Etapa 3',
        titulo: 'Correção',
        descricao: 'Comparam a tradução automática com o original e identificam:',
        pontos: [
          'Erros gramaticais',
          'Vocabulário inadequado',
          'Expressões idiomáticas mal traduzidas',
        ],
      },
    ],
    avaliacao: {
      entrega: [
        'Vídeo original',
        'Vídeo traduzido',
        'Lista de correções',
      ],
      itens: [
        'Correção linguística das propostas',
        'Capacidade de identificar inadequações nas expressões idiomáticas',
        'Fundamentação gramatical das alterações',
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
      act.implementacao.some(
        (i) =>
          i.descricao.toLowerCase().includes(q) ||
          (i.ferramentas?.some((f) => f.toLowerCase().includes(q)) ?? false) ||
          (i.pontos?.some((pt) => pt.toLowerCase().includes(q)) ?? false),
      ) ||
      (act.recommendedTool?.toLowerCase().includes(q) ?? false)
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
