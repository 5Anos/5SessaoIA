import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGES_LIST,
  MODULE_OBJECTIVES,
  TEACHER_IMAGE_BENEFITS,
  IMAGE_TOOLS,
  OTHER_IMAGE_TOOLS,
  IMAGE_PROMPTS,
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
    'Criar imagens a partir de texto (texto → imagem).',
    'Gerar ilustrações, fotografias e arte digital automaticamente.',
    'Editar imagens com recurso a instruções escritas.',
    'Remover ou substituir elementos de uma imagem.',
    'Melhorar a qualidade e aumentar a resolução de imagens.',
    'Criar variações da mesma imagem com estilos diferentes.',
    'Produzir imagens personalizadas para diferentes contextos educativos.',
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
  const notebookLm = OTHER_IMAGE_TOOLS.find((t) => t.id === 'notebooklm');
  assert.ok(notebookLm);
  assert.ok(notebookLm.capabilities.some((c) => c.includes('Criação de infográficos')));
  assert.ok(!IMAGE_TOOLS.some((t) => t.id === 'stamina' || t.id === 'open-source'));
});

test('IMAGE_PROMPTS contains 12 complete prompts with individual verified tool URLs', () => {
  assert.equal(IMAGE_PROMPTS.length, 12);
  for (const p of IMAGE_PROMPTS) {
    assert.ok(p.objective.length > 0);
    assert.ok(p.recommendedTool.length > 0);
    assert.ok(p.prompt.length > 20);
    assert.ok(p.expectedResult.length > 0);
    assert.ok(p.freeAlternative.length > 0);
    assert.equal(p.testStatus, 'documentation-checked');
    assert.ok(getRecommendedToolUrl(p.recommendedTool)?.startsWith('https://'));
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

test('IMAGE_ACTIVITIES covers all 11 required image tools with complete pedagogical fields', () => {
  assert.equal(IMAGE_ACTIVITIES.length, 13);
  const requiredTools = [
    'Microsoft Designer',
    'Leonardo.Ai',
    'Adobe Firefly',
    'Ideogram',
    'Canva',
    'SeaArt AI',
    'Craiyon',
    'ChatGPT',
    'Gemini',
    'Microsoft Copilot',
    'NotebookLM',
  ];

  for (const toolName of requiredTools) {
    assert.ok(
      IMAGE_ACTIVITIES.some((act) => act.recommendedTool.includes(toolName)),
      `Missing activity for ${toolName}`,
    );
  }

  for (const act of IMAGE_ACTIVITIES) {
    assert.ok(act.subject.length > 0);
    assert.ok(act.schoolYear.length > 0);
    assert.ok(act.estimatedDuration.length > 0);
    assert.ok(act.materials.length >= 2);
    assert.ok(act.promptTip.length > 20);
    assert.ok(act.objetivos.length >= 3);
    assert.ok(act.implementacao.length >= 3);
    assert.ok(act.expectedResult.length > 0);
    assert.ok(act.avaliacao.itens.length >= 2);
    assert.ok(act.safeguards.length > 0);
  }

  const notebookAct = IMAGE_ACTIVITIES.find((a) => a.id === 'infografico-fontes-notebooklm');
  assert.ok(notebookAct);
  assert.ok(notebookAct.recommendedTool.includes('NotebookLM'));
  assert.ok(notebookAct.recommendedTool.toLowerCase().includes('infográfico'));
  assert.ok(notebookAct.safeguards.includes('não é um gerador aberto'));

  const bio = IMAGE_ACTIVITIES.find((a) => a.id === 'biomecanica-movimento');
  assert.ok(bio);
  assert.ok(!bio.implementacao.some((s) => s.descricao.includes('forma perfeita')));
  assert.ok(bio.safeguards.includes('Não utilizar imagens geradas por IA como única referência'));
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
  assert.equal(AUDIO_ACTIVITIES.length, 3);
  for (const act of AUDIO_ACTIVITIES) {
    assert.equal('expectedResult' in act, false);
    assert.equal('visualPreviewLabel' in act, false);
    assert.equal('safeguards' in act, false);
  }
  const dobrador = AUDIO_ACTIVITIES.find((a) => a.id === 'dobrador-poliglota');
  assert.ok(dobrador);
  assert.equal(dobrador.implementacao.length, 3);
  assert.deepEqual(dobrador.implementacao[1].ferramentas, [
    'HeyGen (versão gratuita limitada)',
    'CapCut (gratuito)',
  ]);
  assert.deepEqual(dobrador.implementacao[2].pontos, [
    'Erros gramaticais',
    'Vocabulário inadequado',
    'Expressões idiomáticas mal traduzidas',
  ]);
  assert.deepEqual(dobrador.avaliacao.entrega, [
    'Vídeo original',
    'Vídeo traduzido',
    'Lista de correções',
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
  assert.ok(searchModuloContent('ElevenLabs').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('TTSMaker').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('Clipchamp').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('Descript').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('TTS For Free').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('HeyGen').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('Dobrador Poliglota').some((r) => r.pageNumber === 6));
  assert.ok(searchModuloContent('RGPD').some((r) => r.pageNumber === 7));
  assert.ok(searchModuloContent('2024/1689').some((r) => r.pageNumber === 8));
  assert.equal(searchModuloContent('Runway').length, 0);
  const craiyonHits = searchModuloContent('Craiyon');
  assert.ok(craiyonHits.some((r) => r.pageNumber === 4));
  assert.ok(!craiyonHits.some((r) => r.pageNumber === 2));
  assert.equal(searchModuloContent('   ').length, 0);
});
