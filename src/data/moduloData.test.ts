import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGES_LIST,
  MODULE_OBJECTIVES,
  IMAGE_TOOLS,
  IMAGE_PROMPTS,
  IMAGE_ACTIVITIES,
  AUDIO_TOOLS,
  AUDIO_ACTIVITIES,
  VIDEO_TOOLS,
  VIDEO_PROMPTS,
  VIDEO_ACTIVITIES,
  ETHICS_SECTIONS,
  ETHICS_CHECKLIST,
  ETHICS_OFFICIAL_LINKS,
  BIBLIOGRAPHY,
  getPageById,
  getPageByNumber,
  filterPromptsByCategory,
  filterImageTools,
  calculateModuleProgress,
  searchModuloContent,
} from './moduloData.ts';

test('PAGES_LIST contains 9 pages with valid navigation groups', () => {
  assert.equal(PAGES_LIST.length, 9);
  assert.equal(getPageByNumber(1)?.id, 'visao-geral');
  assert.equal(getPageByNumber(5)?.navGroup, 'audio');
  assert.equal(getPageByNumber(7)?.id, 'ferramentas-video');
  assert.equal(getPageByNumber(8)?.id, 'etica-seguranca');
  assert.equal(getPageByNumber(9)?.id, 'bibliografia');
  assert.equal(getPageById('prompts-imagem')?.number, 3);
  assert.equal(MODULE_OBJECTIVES.length, 5);
});

test('IMAGE_TOOLS contains 5 identified tools without generic placeholders', () => {
  assert.equal(IMAGE_TOOLS.length, 5);
  assert.equal(filterImageTools('todas').length, 5);
  assert.ok(IMAGE_TOOLS.every((t) => t.officialUrl.startsWith('https://')));
  assert.ok(!IMAGE_TOOLS.some((t) => t.id === 'stamina' || t.id === 'open-source'));
});

test('IMAGE_PROMPTS contains 12 complete prompts with required fields and provenance', () => {
  assert.equal(IMAGE_PROMPTS.length, 12);
  for (const p of IMAGE_PROMPTS) {
    assert.ok(p.objective.length > 0);
    assert.ok(p.recommendedTool.length > 0);
    assert.ok(p.prompt.length > 20);
    assert.ok(p.expectedResult.length > 0);
    assert.ok(p.freeAlternative.length > 0);
    assert.equal(p.testStatus, 'documentation-checked');
  }
  assert.equal(filterPromptsByCategory('Com Exemplo Visual').length, 4);
  assert.equal(filterPromptsByCategory('Ciência & Anatomia').length, 5);
});

test('calculateModuleProgress computes percentage for 9 pages', () => {
  assert.equal(calculateModuleProgress([]), 0);
  assert.equal(calculateModuleProgress([1, 2, 3, 4, 5, 6, 7, 8, 9]), 100);
  assert.equal(calculateModuleProgress([0, 99, 1]), 11);
});

test('IMAGE_ACTIVITIES contains 5 revised activities including biomechanical safeguard', () => {
  assert.equal(IMAGE_ACTIVITIES.length, 5);
  const bio = IMAGE_ACTIVITIES.find((a) => a.id === 'biomecanica-movimento');
  assert.ok(bio);
  assert.ok(!bio.implementacao.some((s) => s.descricao.includes('forma perfeita')));
  assert.ok(bio.safeguards.includes('Não utilizar imagens geradas por IA como única referência'));
});

test('AUDIO_TOOLS and AUDIO_ACTIVITIES reflect 5 named tools and 2 activities', () => {
  assert.equal(AUDIO_TOOLS.length, 5);
  assert.equal(AUDIO_ACTIVITIES.length, 2);
  assert.ok(!AUDIO_ACTIVITIES.some((a) => a.id === 'dobrador-poliglota'));
});

test('VIDEO data covers 3 tools, 3 prompts, 1 activity and omits Sora', () => {
  assert.equal(VIDEO_TOOLS.length, 3);
  assert.ok(!VIDEO_TOOLS.some((t) => t.name.toLowerCase().includes('sora')));
  assert.equal(VIDEO_PROMPTS.length, 3);
  assert.equal(VIDEO_ACTIVITIES.length, 1);
  assert.equal(VIDEO_ACTIVITIES[0].id, 'dobrador-poliglota');
});

test('ETHICS and BIBLIOGRAPHY contain required sections, checklist and official APA 7 references', () => {
  assert.equal(ETHICS_SECTIONS.length, 6);
  assert.equal(ETHICS_CHECKLIST.length, 8);
  assert.ok(ETHICS_OFFICIAL_LINKS.some((l) => l.url.includes('cnpd.pt')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.citation.includes('2024/1689')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.citation.includes('2016/679')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.author === 'UNESCO' && b.year === '2024'));
});

test('searchModuloContent covers image, audio, video, ethics and bibliography', () => {
  assert.ok(searchModuloContent('ElevenLabs').some((r) => r.pageNumber === 5));
  assert.ok(searchModuloContent('Runway').some((r) => r.pageNumber === 7));
  assert.ok(searchModuloContent('RGPD').some((r) => r.pageNumber === 8));
  assert.ok(searchModuloContent('2024/1689').some((r) => r.pageNumber === 9));
  assert.equal(searchModuloContent('   ').length, 0);
});
