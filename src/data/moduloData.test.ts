import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGES_LIST,
  IMAGE_TOOLS,
  IMAGE_PROMPTS,
  IMAGE_ACTIVITIES,
  AUDIO_ACTIVITIES,
  BIBLIOGRAPHY,
  getPageById,
  getPageByNumber,
  filterPromptsByCategory,
  filterImageTools,
  calculateModuleProgress,
  searchModuloContent,
} from './moduloData.ts';

test('PAGES_LIST contains exactly 7 dedicated pages', () => {
  assert.equal(PAGES_LIST.length, 7);
  assert.equal(getPageByNumber(1)?.id, 'visao-geral');
  assert.equal(getPageByNumber(7)?.id, 'bibliografia');
  assert.equal(getPageById('prompts-imagem')?.number, 3);
});

test('IMAGE_TOOLS contains all 6 verbatim image tools and supports focus filtering', () => {
  assert.equal(IMAGE_TOOLS.length, 6);
  assert.equal(filterImageTools('todas').length, 6);
  assert.equal(filterImageTools('iniciacao').length, 2);
  assert.equal(filterImageTools('controlo-estilo').length, 2);
  assert.equal(filterImageTools('edicao-texto').length, 2);
});

test('IMAGE_PROMPTS contains all 12 verbatim prompts and 4 visual sample links', () => {
  assert.equal(IMAGE_PROMPTS.length, 12);
  assert.equal(IMAGE_PROMPTS[0].title, 'Biblioteca no espaco');
  assert.ok(IMAGE_PROMPTS[0].prompt.includes('estacao espacial'));
  assert.equal(IMAGE_PROMPTS[11].title, 'Celula vegetal');
  assert.ok(IMAGE_PROMPTS[11].prompt.includes('cloroplastos e vacuolo'));

  const withVisuals = filterPromptsByCategory('Com Exemplo Visual');
  assert.equal(withVisuals.length, 4);
});

test('filterPromptsByCategory filters correctly', () => {
  const all = filterPromptsByCategory('Todos');
  assert.equal(all.length, 12);

  const ciencia = filterPromptsByCategory('Ciência & Anatomia');
  assert.equal(ciencia.length, 5);
  assert.ok(ciencia.every((p) => p.category === 'Ciência & Anatomia'));
});

test('calculateModuleProgress computes bounded unique percentage', () => {
  assert.equal(calculateModuleProgress([]), 0);
  assert.equal(calculateModuleProgress([1, 1, 2]), 29);
  assert.equal(calculateModuleProgress([1, 2, 3, 4, 5, 6, 7]), 100);
  assert.equal(calculateModuleProgress([0, 99, 1]), 14);
});

test('IMAGE_ACTIVITIES contains 5 classroom activities with steps and evaluation', () => {
  assert.equal(IMAGE_ACTIVITIES.length, 5);
  const estacoes = IMAGE_ACTIVITIES.find((a) => a.id === 'estacoes-do-ano');
  assert.ok(estacoes);
  assert.equal(estacoes.implementacao.length, 3);
  assert.ok(estacoes.avaliacao.itens.length >= 3);
});

test('AUDIO_ACTIVITIES contains 3 classroom audio activities with tools and steps', () => {
  assert.equal(AUDIO_ACTIVITIES.length, 3);
  const podcast = AUDIO_ACTIVITIES.find((a) => a.id === 'podcast-cidade-2050');
  assert.ok(podcast);
  assert.ok(podcast.implementacao[2].ferramentas?.some((f) => f.includes('NotebookLM')));
});

test('BIBLIOGRAPHY contains all 7 academic citations verbatim', () => {
  assert.equal(BIBLIOGRAPHY.length, 7);
  assert.ok(BIBLIOGRAPHY.some((b) => b.author.includes('Bloom')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.author.includes('UNESCO')));
  assert.ok(BIBLIOGRAPHY.some((b) => b.author.includes('Kasneci')));
});

test('searchModuloContent returns relevant matches for query including tools', () => {
  const results = searchModuloContent('Leonardo.ai');
  assert.ok(results.length > 0);
  assert.ok(results.some((r) => r.pageNumber === 2));

  const emptyResults = searchModuloContent('nonexistent_query_xyz');
  assert.equal(emptyResults.length, 0);

  const blank = searchModuloContent('   ');
  assert.equal(blank.length, 0);
});
