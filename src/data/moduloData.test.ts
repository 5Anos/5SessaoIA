import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGES_LIST,
  MODULE_OBJECTIVES,
  TEACHER_IMAGE_BENEFITS,
  IMAGE_TOOLS,
  OTHER_IMAGE_TOOLS,
  IMAGE_PROMPTS,
  PROMPT_TEST_STATUS_LABELS,
  IMAGE_ACTIVITIES,
  AUDIO_TOOLS,
  AUDIO_ACTIVITIES,
  ETHICS_SECTIONS,
  ETHICS_CHECKLIST,
  ETHICS_OFFICIAL_LINKS,
  BIBLIOGRAPHY,
  getPageById,
  getPageByNumber,
  filterPromptsByCategory,
  getRecommendedToolUrl,
  filterImageTools,
  calculateModuleProgress,
  searchModuloContent,
} from './moduloData.ts';

test('PAGES_LIST contains 8 pages with valid navigation groups', () => {
  assert.equal(PAGES_LIST.length, 8);
  assert.equal(getPageByNumber(1)?.id, 'visao-geral');
  assert.equal(getPageByNumber(5)?.navGroup, 'audio');
  assert.equal(getPageByNumber(7)?.id, 'etica-seguranca');
  assert.equal(getPageByNumber(8)?.id, 'bibliografia');
  assert.equal(getPageById('prompts-imagem')?.number, 3);
  assert.deepEqual(MODULE_OBJECTIVES, [
    'Conhecer diferentes ferramentas de IA úteis na educação.',
    'Experimentar ferramentas de IA para texto, imagem, áudio e vídeo.',
    'Criar recursos educativos com apoio da IA (planos de aula, apresentações, atividades e vídeos).',
  ]);
  assert.deepEqual(TEACHER_IMAGE_BENEFITS, [
    'Personalização de recursos: Criar imagens adaptadas à idade, ao nível de ensino e às necessidades dos alunos.',
    'Diferenciação pedagógica: Produzir representações visuais com diferentes níveis de complexidade, adequadas aos objetivos de aprendizagem.',
    'Compreensão de conceitos: Tornar conceitos abstratos ou complexos mais acessíveis através de representações visuais.',
    'Criatividade e expressão: Criar cenários, personagens e recursos visuais para projetos disciplinares e interdisciplinares.',
    'Inclusão e acessibilidade: Explorar diferentes formas de representação visual, complementadas por texto alternativo e outros recursos de acessibilidade.',
    'Literacia visual e digital: Desenvolver a capacidade de analisar, questionar e avaliar criticamente imagens produzidas por inteligência artificial.',
  ]);
});

test('IMAGE_TOOLS and OTHER_IMAGE_TOOLS contain 10 identified tools without Craiyon or generic placeholders', () => {
  assert.equal(IMAGE_TOOLS.length, 6);
  assert.equal(OTHER_IMAGE_TOOLS.length, 4);
  assert.equal(IMAGE_TOOLS.length + OTHER_IMAGE_TOOLS.length, 10);
  assert.equal(filterImageTools('todas').length, 6);
  assert.ok(IMAGE_TOOLS.every((t) => t.officialUrl.startsWith('https://')));
  assert.ok(OTHER_IMAGE_TOOLS.every((t) => t.officialUrl.startsWith('https://')));
  assert.ok(IMAGE_TOOLS.some((t) => t.id === 'seaart-ai'));
  assert.ok(!IMAGE_TOOLS.some((t) => t.id === 'craiyon'));
  const geminiNotebook = OTHER_IMAGE_TOOLS.find((t) => t.id === 'notebooklm');
  assert.ok(geminiNotebook);
  assert.equal(geminiNotebook.name, 'Gemini Notebook');
  assert.equal(geminiNotebook.officialUrl, 'https://notebook.google.com/');
  assert.ok(geminiNotebook.capabilities.some((c) => c.includes('Criação de infográficos')));
  assert.ok(!IMAGE_TOOLS.some((t) => t.id === 'stamina' || t.id === 'open-source'));
});

test('IMAGE_PROMPTS contains 12 complete Portuguese prompts with accurate anatomy, language and statuses', () => {
  assert.equal(IMAGE_PROMPTS.length, 12);
  assert.deepEqual(
    IMAGE_PROMPTS.map((p) => p.id),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  );
  assert.deepEqual(
    IMAGE_PROMPTS.map((p) => p.title),
    [
      'Biblioteca no espaço',
      'Sala de aula digital',
      'Programador do futuro',
      'Base humana em Marte',
      'Agricultura tecnológica',
      'Energias renováveis',
      'Rua tecnológica',
      'Coração humano',
      'Sistema circulatório',
      'Cérebro humano',
      'Sistema digestivo',
      'Célula vegetal',
    ],
  );
  assert.deepEqual(
    IMAGE_PROMPTS.map((p) => p.imageKey),
    [
      'space-library',
      'digital-classroom',
      'future-programmer',
      'mars-base',
      'tech-agriculture',
      'renewable-energy',
      'smart-street',
      'human-heart',
      'circulatory-system',
      'human-brain',
      'digestive-system',
      'plant-cell',
    ],
  );

  for (const p of IMAGE_PROMPTS) {
    assert.ok(p.objective.length > 0);
    assert.ok(p.recommendedTool.length > 0);
    assert.ok(p.prompt.length > 20);
    assert.ok(p.expectedResult.length > 0);
    assert.ok(p.freeAlternative.length > 0);
    assert.equal(p.language, 'Português');
    assert.ok(p.prompt.startsWith('Cria '));
    assert.equal(p.imageStatus, 'illustrative');
    assert.equal(p.testStatus, 'documentation-checked');
    assert.ok(PROMPT_TEST_STATUS_LABELS[p.testStatus].includes('execução não realizada'));
    assert.ok(getRecommendedToolUrl(p.recommendedTool)?.startsWith('https://'));
  }

  // Prompt 8 (Coração humano): anterior orientation, unlabelled, oxygenation colors
  const heart = IMAGE_PROMPTS[7];
  assert.ok(heart.prompt.includes('sem texto, sem etiquetas, sem legendas'));
  assert.ok(heart.prompt.includes('aurícula direita'));
  assert.ok(heart.prompt.includes('aurícula esquerda'));

  // Prompt 9 (Sistema circulatório): oxygenation rules, not all arteries red / all veins blue
  const circulatory = IMAGE_PROMPTS[8];
  assert.ok(circulatory.prompt.includes('Não representes todas as artérias a vermelho nem todas as veias a azul'));
  assert.ok(circulatory.prompt.includes('artérias pulmonares transportam sangue desoxigenado'));
  assert.ok(circulatory.prompt.includes('veias pulmonares devolvem sangue oxigenado'));

  // Prompt 10 (Cérebro humano): 4 lobes in lateral view of cerebral hemisphere
  const brain = IMAGE_PROMPTS[9];
  assert.ok(brain.prompt.includes('vista lateral'));
  assert.ok(brain.prompt.includes('hemisfério cerebral'));
  for (const lobe of ['lobo frontal', 'lobo parietal', 'lobo temporal', 'lobo occipital']) {
    assert.ok(brain.prompt.includes(lobe));
  }

  // Prompt 11 (Sistema digestivo): complete alimentary canal + accessory organs
  const digestive = IMAGE_PROMPTS[10];
  for (const part of [
    'boca',
    'faringe',
    'esófago',
    'estômago',
    'intestino delgado',
    'intestino grosso',
    'reto',
    'ânus',
    'fígado',
    'vesícula biliar',
    'pâncreas',
  ]) {
    assert.ok(digestive.prompt.includes(part));
  }

  // Prompt 12 (Célula vegetal): cell wall, plasma membrane, chloroplasts, central vacuole, mitochondria
  const cell = IMAGE_PROMPTS[11];
  for (const organelle of [
    'parede celular',
    'membrana plasmática',
    'cloroplastos',
    'vacúolo central',
    'mitocôndrias',
  ]) {
    assert.ok(cell.prompt.includes(organelle));
  }

  assert.equal(getRecommendedToolUrl(IMAGE_PROMPTS[0].recommendedTool), 'https://leonardo.ai/');
  assert.equal(getRecommendedToolUrl(IMAGE_PROMPTS[1].recommendedTool), 'https://designer.microsoft.com/');
  assert.equal(getRecommendedToolUrl(IMAGE_PROMPTS[4].recommendedTool), 'https://firefly.adobe.com/');
  assert.equal(getRecommendedToolUrl(IMAGE_PROMPTS[7].recommendedTool), 'https://firefly.adobe.com/');
  assert.equal(getRecommendedToolUrl('Ferramenta inexistente'), undefined);
  assert.equal(filterPromptsByCategory('Com Exemplo Visual').length, 12);
  assert.equal(filterPromptsByCategory('Ciência & Anatomia').length, 5);
});

test('calculateModuleProgress computes percentage for 8 pages', () => {
  assert.equal(calculateModuleProgress([]), 0);
  assert.equal(calculateModuleProgress([1, 2, 3, 4, 5, 6, 7, 8]), 100);
  assert.equal(calculateModuleProgress([0, 99, 1]), 13);
});

test('IMAGE_ACTIVITIES preserves the five activities with revised scientific, pedagogical, safeguarding and prompt criteria', () => {
  assert.equal(IMAGE_ACTIVITIES.length, 5);
  assert.deepEqual(
    IMAGE_ACTIVITIES.map((a) => a.id),
    [
      'estacoes-do-ano',
      'patrimonio-futuro',
      'expressoes-idiomaticas',
      'alegoria-caverna',
      'gesto-tecnico-desportivo',
    ],
  );

  for (const act of IMAGE_ACTIVITIES) {
    assert.ok(act.objetivos.length >= 3);
    assert.equal(act.implementacao.length, 3);
    assert.ok(act.avaliacao.entrega && act.avaliacao.entrega.length >= 2);
    assert.ok(act.avaliacao.itens.length >= 2);
    assert.ok(act.prompt.length > 40);
    assert.ok(act.promptTip.length > 20);
    assert.ok(act.promptAdaptation.length > 20);
    assert.ok(act.materials.length >= 2);
    assert.ok(act.estimatedDuration.length > 0);
    assert.ok(act.ferramentasRecomendadas.every((t) => t.url.startsWith('https://')));
  }

  // Activity 1: 1st-cycle Estudo do Meio terminology, no universal snow assumptions, explicit deliverable
  const seasons = IMAGE_ACTIVITIES[0];
  assert.equal(seasons.title, 'ATIVIDADE: AS ESTAÇÕES DO ANO COM IA');
  assert.equal(seasons.subtitle, 'Estudo do Meio · 1.º Ciclo (3.º e 4.º anos) — adaptável');
  assert.ok(!seasons.subtitle.includes('Ciências Naturais'));
  for (const placeholder of [
    '[ESTAÇÃO DO ANO]',
    '[TIPO DE ÁRVORE OU PAISAGEM]',
    '[REGIÃO OU CONTEXTO LOCAL]',
  ]) {
    assert.ok(seasons.prompt.includes(placeholder));
  }
  assert.ok(seasons.prompt.includes('folha caduca') && seasons.prompt.includes('folha persistente'));
  assert.ok(seasons.objetivos.some((o) => o.includes('estado do tempo de clima')));
  assert.ok(seasons.implementacao[0].descricao.includes('inclinação do eixo da Terra'));
  assert.ok(seasons.avaliacao.entrega!.some((e) => e.includes('comparação')));

  // Activity 2: Public-space sustainability (not heritage preservation), sustainability, accessibility, feasibility
  const publicSpace = IMAGE_ACTIVITIES[1];
  assert.equal(publicSpace.title, 'ATIVIDADE: ESPAÇOS PÚBLICOS SUSTENTÁVEIS');
  assert.equal(
    publicSpace.subtitle,
    'Geografia / Cidadania e Desenvolvimento · articulação possível com História',
  );
  for (const placeholder of [
    '[ESPAÇO PÚBLICO]',
    '[PROBLEMA IDENTIFICADO]',
    '[NECESSIDADES DA COMUNIDADE]',
    '[CARACTERÍSTICAS LOCAIS]',
  ]) {
    assert.ok(publicSpace.prompt.includes(placeholder));
  }
  assert.ok(publicSpace.prompt.includes('acessibilidade') && publicSpace.prompt.includes('conforto térmico'));
  assert.ok(!publicSpace.objetivos.some((o) => o.includes('Dominar ferramentas')));
  assert.ok(!publicSpace.implementacao.some((s) => s.titulo.includes('Reabilitação Utópica')));
  assert.ok(publicSpace.implementacao[1].titulo.includes('Proposta de Requalificação Sustentável'));
  assert.deepEqual(publicSpace.implementacao[1].ferramentas, [
    { name: 'Adobe Firefly', url: 'https://firefly.adobe.com/' },
    { name: 'Leonardo.ai', url: 'https://leonardo.ai/' },
  ]);
  assert.ok(
    publicSpace.avaliacao.itens.some(
      (i) => i.includes('sustentabilidade') && i.includes('acessibilidade') && i.includes('viabilidade'),
    ),
  );

  // Activity 3: Separate generations for literal and figurative images, no assumed direct pupil access
  const idioms = IMAGE_ACTIVITIES[2];
  assert.equal(idioms.title, 'ATIVIDADE: EXPRESSÕES IDIOMÁTICAS EM IMAGENS');
  assert.ok(idioms.prompt.includes('[EXPRESSÃO IDIOMÁTICA]') && idioms.prompt.includes('[ESTILO VISUAL]'));
  assert.ok(idioms.prompt.includes('Geração 1') && idioms.prompt.includes('Geração 2'));
  assert.ok(idioms.promptTip.includes('duas execuções separadas'));
  assert.ok(!idioms.prompt.includes('na cultura inglesa'));
  assert.deepEqual(idioms.implementacao[1].ferramentas, [
    { name: 'Microsoft Designer', url: 'https://designer.microsoft.com/' },
  ]);
  const designerRec = idioms.ferramentasRecomendadas.find((t) => t.name === 'Microsoft Designer');
  assert.ok(designerRec?.justificacao.includes('requisitos de conta e idade'));

  // Activity 4: Plato's original allegory vs contemporary analogies, no fixed free-token claims
  const caverna = IMAGE_ACTIVITIES[3];
  assert.equal(caverna.title, 'ATIVIDADE: A ALEGORIA DA CAVERNA MODERNA');
  assert.ok(!caverna.materials.some((m) => m.includes('tokens diários')));
  assert.ok(caverna.implementacao[0].descricao.includes('prisioneiros') && caverna.implementacao[0].descricao.includes('Sol'));
  assert.ok(caverna.implementacao[1].descricao.includes('analogias') && caverna.implementacao[1].descricao.includes('não elementos nem citações do texto platónico'));
  assert.deepEqual(caverna.implementacao[1].ferramentas, [
    { name: 'Leonardo.ai', url: 'https://leonardo.ai/' },
  ]);
  assert.ok(!caverna.avaliacao.itens.some((i) => i.includes('Profundidade da análise filosófica')));

  // Activity 5: No biomechanical validation claims, no uploading pupils' videos to AI
  const sport = IMAGE_ACTIVITIES[4];
  assert.equal(sport.title, 'ATIVIDADE: ANÁLISE DO GESTO TÉCNICO DESPORTIVO');
  for (const placeholder of [
    '[MODALIDADE]',
    '[GESTO TÉCNICO ESPECÍFICO]',
    '[FASES DEFINIDAS PELO PROFESSOR]',
    '[DESCRIÇÃO TÉCNICA VALIDADA]',
    '[ÂNGULO DE OBSERVAÇÃO]',
  ]) {
    assert.ok(sport.prompt.includes(placeholder));
  }
  assert.ok(!sport.materials.some((m) => m.includes('vídeos dos alunos para autocorreção')));
  assert.ok(!sport.implementacao.some((s) => s.descricao.includes('forma perfeita')));
  assert.ok(!sport.implementacao.some((s) => s.descricao.includes('vídeos de si próprios')));
  assert.ok(sport.implementacao[1].nota?.includes('não valida nem corrige biomecânica'));
  assert.ok(sport.avaliacao.itens.some((i) => i.includes('nem serve para avaliar o desempenho físico dos alunos')));
});

test('AUDIO_TOOLS and AUDIO_ACTIVITIES reflect 9 unique audio tools and 3 activities without removed fields', () => {
  assert.equal(AUDIO_TOOLS.length, 9);
  const expectedIds = [
    'elevenlabs',
    'adobe-podcast',
    'audacity',
    'notebooklm',
    'spotify-for-creators',
    'ttsmaker',
    'clipchamp',
    'descript',
    'tts-for-free',
  ];
  assert.deepEqual(
    AUDIO_TOOLS.map((t) => t.id),
    expectedIds,
  );
  assert.equal(new Set(AUDIO_TOOLS.map((t) => t.id)).size, AUDIO_TOOLS.length);
  for (const tool of AUDIO_TOOLS) {
    assert.ok(tool.officialUrl.startsWith('https://'));
    assert.ok(tool.capabilities.length >= 2);
    assert.ok(tool.classroomApplications.length > 15);
    assert.ok(tool.freePlan.length > 0);
    assert.ok(tool.limitations.length > 0);
    assert.ok(tool.privacyOrAge.length > 15);
    assert.ok(tool.officialSource.length > 0);
  }

  // ElevenLabs must remain completely untouched
  assert.deepEqual(AUDIO_TOOLS[0], {
    id: 'elevenlabs',
    category: 'Síntese de voz — Text-to-Speech',
    name: 'ElevenLabs',
    recommendedFor: 'Vozes sintéticas naturais e narração de recursos educativos.',
    capabilities: [
      'Síntese de texto em fala (Text-to-Speech) em múltiplos idiomas, incluindo português.',
      'Seleção e ajuste de estilos de voz, ritmo e entoação para narração.',
    ],
    classroomApplications:
      'Narração de textos literários ou históricos, preparação de materiais de compreensão oral em línguas e apoio à acessibilidade para alunos com dificuldades de leitura.',
    freePlan: '10 000 créditos mensais, partilhados pelos produtos disponíveis.',
    limitations:
      'O plano gratuito não inclui a licença comercial paga. A clonagem de voz exige especial cuidado e autorização adequada.',
    privacyOrAge:
      'Confirmar os termos de idade mínima e privacidade da plataforma antes de criar contas; não clonar vozes de alunos ou terceiros sem autorização expressa.',
    officialSource: 'ElevenLabs (página oficial)',
    officialUrl: 'https://elevenlabs.io/',
    freeAlternative: 'Narração gravada pelo docente e editada com Audacity.',
  });

  const byId = Object.fromEntries(AUDIO_TOOLS.map((t) => [t.id, t]));

  // 4.1 Adobe Podcast: speech enhancement only, free limits, privacy warning
  assert.ok(byId['adobe-podcast'].recommendedFor.includes('não gera podcasts completos'));
  assert.ok(byId['adobe-podcast'].freePlan.includes('500 MB'));
  assert.ok(byId['adobe-podcast'].privacyOrAge.includes('não carregar gravações'));

  // 4.2 Audacity: open-source recorder/editor (not gen-AI TTS), not its own alternative
  assert.ok(byId.audacity.recommendedFor.includes('não é uma ferramenta de IA generativa'));
  assert.ok(!byId.audacity.freeAlternative.toLowerCase().includes('audacity'));
  assert.ok(byId.audacity.privacyOrAge.includes('principalmente em ambiente local'));

  // 4.3 NotebookLM: does not substitute reading/checking sources, PT-PT vs PT-BR, Workspace for Education
  assert.ok(byId.notebooklm.limitations.includes('imprecisões'));
  assert.ok(byId.notebooklm.capabilities.some((c) => c.includes('Português (Portugal)') && c.includes('Português (Brasil)')));
  assert.ok(byId.notebooklm.privacyOrAge.includes('Google Workspace for Education'));

  // 4.4 Spotify for Creators: hosting/distribution, not AI, RSS email warning
  assert.ok(byId['spotify-for-creators'].recommendedFor.includes('não é uma ferramenta de IA generativa'));
  assert.ok(byId['spotify-for-creators'].privacyOrAge.includes('RSS') && byId['spotify-for-creators'].privacyOrAge.includes('email'));

  // 4.5 TTSMaker: per-conversion vs weekly quota, 30 min temporary server retention vs cache, age 16 not bypassed by parental permission
  assert.ok(byId.ttsmaker.freePlan.includes('20 000 caracteres por semana'));
  assert.ok(byId.ttsmaker.limitations.includes('30 minutos'));
  assert.ok(byId.ttsmaker.privacyOrAge.includes('16 anos') && byId.ttsmaker.privacyOrAge.includes('não altera'));

  // 4.6 Clipchamp: NO unsupported 10-minute claim, limits vary by language, account/plan differences
  assert.ok(!byId.clipchamp.limitations.includes('10 minutos'));
  assert.ok(byId.clipchamp.limitations.includes('variam consoante o idioma'));

  // 4.7 Descript: 60 min/month, 100 one-time AI credits, 720p watermark, PT-BR transcription (not claiming PT-PT)
  assert.ok(byId.descript.freePlan.includes('únicos') && byId.descript.freePlan.includes('720p com marca de água'));
  assert.ok(byId.descript.capabilities.some((c) => c.includes('Português (Brasil)') && c.includes('não assumir suporte nativo a Português (Portugal)')));

  // 4.8 TTS For Free: specifically ttsforfree.com, registration vs guest, no invented age requirement
  assert.equal(byId['tts-for-free'].officialUrl, 'https://ttsforfree.com/');
  assert.ok(byId['tts-for-free'].freePlan.includes('2 000 caracteres'));
  assert.ok(!byId['tts-for-free'].privacyOrAge.match(/\b\d+\s+anos\b/));

  assert.equal(AUDIO_ACTIVITIES.length, 3);
  assert.deepEqual(
    AUDIO_ACTIVITIES.map((a) => a.id),
    ['vozes-do-patrimonio', 'podcast-cidade-2050', 'dobrador-poliglota'],
  );
  for (const act of AUDIO_ACTIVITIES) {
    assert.equal('expectedResult' in act, false);
    assert.equal('visualPreviewLabel' in act, false);
    assert.equal('safeguards' in act, false);
    assert.equal('prompt' in act, false);
    assert.ok(act.objetivos.length >= 5);
    assert.equal(act.implementacao.length, 3);
    assert.ok(act.avaliacao.entrega.length >= 3);
    assert.ok(act.avaliacao.itens.length >= 6);
  }

  const expectedToolUrls: Record<string, string> = {
    Canva: 'https://www.canva.com/',
    TTSMaker: 'https://ttsmaker.com/',
    Audacity: 'https://www.audacityteam.org/',
    'Adobe Podcast': 'https://podcast.adobe.com/',
    'Spotify for Creators': 'https://creators.spotify.com/',
    TTSFree: 'https://ttsfree.com/',
    'Gemini Notebook (anteriormente NotebookLM)': 'https://notebooklm.google.com/',
    Gemini: 'https://gemini.google.com/',
    HeyGen: 'https://www.heygen.com/',
    CapCut: 'https://www.capcut.com/',
  };

  const linkedTools = AUDIO_ACTIVITIES.flatMap((a) =>
    a.implementacao.flatMap((step) => step.ferramentas ?? []),
  );
  assert.equal(linkedTools.length, 10);
  for (const tool of linkedTools) {
    assert.equal(tool.url, expectedToolUrls[tool.name]);
    assert.ok(!tool.note?.includes('– para criar o podcast.'));
  }

  // Activity 1: Vozes do Património
  const heritage = AUDIO_ACTIVITIES[0];
  assert.ok(heritage.implementacao[0].descricao?.includes('pelo menos duas fontes credíveis'));
  assert.ok(heritage.implementacao[1].pontos?.some((p) => p.includes('reconstrução criativa')));
  assert.ok(heritage.implementacao[2].notaFinal?.includes('direitos de autor'));

  // Activity 2: Podcast Cidade 2050
  const podcast = AUDIO_ACTIVITIES[1];
  const podcastTools = podcast.implementacao[2].ferramentas ?? [];
  assert.ok(!podcastTools.some((t) => t.name === 'Spotify for Podcasters'));
  assert.ok(podcastTools.some((t) => t.name === 'Audacity' && t.note?.includes('OpenVINO Whisper')));
  assert.ok(podcastTools.some((t) => t.name === 'Gemini Notebook (anteriormente NotebookLM)' && t.note?.includes('não equivalem a um podcast original')));
  assert.ok(podcast.implementacao[2].notaFinal?.includes('RSS') && podcast.implementacao[2].notaFinal?.includes('email'));

  // Activity 3: O Dobrador Poliglota
  const dobrador = AUDIO_ACTIVITIES[2];
  assert.ok(dobrador.implementacao[0].pontos?.some((p) => p.includes('direitos de autor')));
  const capcutTool = dobrador.implementacao[1].ferramentas?.find((t) => t.name === 'CapCut');
  assert.ok(capcutTool && !capcutTool.note?.startsWith('(gratuito)'));
  assert.deepEqual(dobrador.implementacao[2].pontos, [
    'Erros gramaticais.',
    'Vocabulário inadequado.',
    'Expressões idiomáticas incorretas ou pouco naturais.',
    'Alterações ao sentido original.',
    'Problemas de pronúncia.',
  ]);
  assert.deepEqual(dobrador.avaliacao.entrega, [
    'Vídeo original ou referência devidamente autorizada.',
    'Guião traduzido e revisto.',
    'Vídeo final dobrado (com legendagem de acessibilidade, quando adequado).',
    'Lista de correções à tradução automática com breves justificações.',
  ]);
});

test('ETHICS and BIBLIOGRAPHY contain required sections, checklist and official APA 7 references', () => {
  assert.equal(ETHICS_SECTIONS.length, 6);
  assert.equal(ETHICS_CHECKLIST.length, 8);
  assert.ok(ETHICS_OFFICIAL_LINKS.some((l) => l.url.includes('cnpd.pt')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.citation.includes('2024/1689')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.citation.includes('2016/679')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.author === 'UNESCO' && b.year === '2024'));
});

test('searchModuloContent covers image, audio, ethics and bibliography', () => {
  assert.ok(searchModuloContent('Estações do Ano').some((r) => r.pageNumber === 4));
  assert.ok(searchModuloContent('Expressões Idiomáticas').some((r) => r.pageNumber === 4));
  assert.ok(searchModuloContent('ElevenLabs').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('TTSMaker').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('Clipchamp').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('Descript').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('TTS For Free').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('TTSMaker').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('TTSFree').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('HeyGen').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('Dobrador Poliglota').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('RGPD').some((r) => r.pageNumber === 7));
  assert.ok(searchModuloContent('2024/1689').some((r) => r.pageNumber === 8));
  assert.equal(searchModuloContent('Runway').length, 0);
  const craiyonHits = searchModuloContent('Craiyon');
  assert.ok(!craiyonHits.some((r) => r.pageNumber === 2));
  assert.ok(!craiyonHits.some((r) => r.pageNumber === 4));
  assert.equal(searchModuloContent('   ').length, 0);
});
