import React, { useState } from 'react';
import { LayoutGrid, Table2, CheckCircle2 } from 'lucide-react';
import {
  IMAGE_CAPABILITIES,
  IMAGE_TOOLS,
  filterImageTools,
} from '../data/moduloData.ts';

export const Page2FerramentasImagem: React.FC = () => {
  const [focusFilter, setFocusFilter] = useState<string>('todas');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const tools = filterImageTools(focusFilter);

  const filterTabs = [
    { id: 'todas', label: 'Todas (6)' },
    { id: 'iniciacao', label: 'Iniciação & Sem Registo' },
    { id: 'controlo-estilo', label: 'Controlo & Estilo' },
    { id: 'edicao-texto', label: 'Edição & Tipografia' },
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 2 de 7 · Criação Visual com IA
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          FERRAMENTAS DE IMAGEM
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Capacidades generativas, análise comparativa de 6 plataformas, criação de infográficos e benefícios pedagógicos para o docente.
        </p>
      </header>

      {/* ESTAS FERRAMENTAS PERMITEM: */}
      <section className="space-y-5">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            ESTAS FERRAMENTAS PERMITEM:
          </h2>
          <span className="text-xs text-zinc-500 tabular-nums">7 capacidades</span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {IMAGE_CAPABILITIES.map((item, idx) => (
              <li
                key={idx}
                className="flex items-baseline gap-3.5 text-sm text-zinc-800 leading-relaxed pb-3 border-b border-zinc-100 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FERRAMENTAS DE IMAGEM COM IA */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-zinc-200 pb-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-zinc-900">
              FERRAMENTAS DE IMAGEM COM IA
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Compare modelos, planos gratuitos e destaques para escolher a ferramenta adequada ao contexto de sala de aula.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Focus filter */}
            <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg overflow-x-auto max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFocusFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    focusFilter === tab.id
                      ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View mode toggle */}
            <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                aria-label="Vista em cartões"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  viewMode === 'cards'
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cartões</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                aria-label="Vista em tabela comparativa"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  viewMode === 'table'
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <Table2 className="w-3.5 h-3.5" />
                <span>Comparar</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <article
                key={tool.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="text-xs font-medium text-blue-700">{tool.shortTag}</div>
                  <h3 className="font-display text-xl font-bold text-zinc-900">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed">{tool.summary}</p>
                </div>

                <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
                  {tool.modelo && (
                    <div className="py-3 space-y-1">
                      <dt className="font-semibold text-zinc-900">Modelo</dt>
                      <dd className="text-zinc-600 leading-relaxed">{tool.modelo}</dd>
                    </div>
                  )}
                  <div className="py-3 space-y-1">
                    <dt className="font-semibold text-zinc-900">Plano Gratuito</dt>
                    <dd className="text-zinc-600 leading-relaxed">{tool.planoGratuito}</dd>
                  </div>
                  <div className="pt-3 space-y-1">
                    <dt className="font-semibold text-blue-800">Destaque</dt>
                    <dd className="text-zinc-700 leading-relaxed">{tool.destaque}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-700">
                  <th className="py-3.5 px-5 w-1/5">Ferramenta</th>
                  <th className="py-3.5 px-5 w-1/4">Enquadramento / Modelo</th>
                  <th className="py-3.5 px-5 w-1/4">Plano Gratuito</th>
                  <th className="py-3.5 px-5 w-[30%]">Destaque Pedagógico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm">
                {tools.map((tool) => (
                  <tr key={tool.id} className="align-top hover:bg-zinc-50/60 transition-colors">
                    <td className="py-4 px-5 font-display font-bold text-zinc-900">
                      {tool.name}
                    </td>
                    <td className="py-4 px-5 text-zinc-600 leading-relaxed">
                      {tool.modelo ? tool.modelo : tool.summary}
                    </td>
                    <td className="py-4 px-5 text-zinc-600 leading-relaxed">
                      {tool.planoGratuito}
                    </td>
                    <td className="py-4 px-5 text-zinc-800 leading-relaxed">
                      {tool.destaque}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* OUTRAS FERRAMENTAS & CRIACAO DE INFOGRAFICOS */}
      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            OUTRAS FERRAMENTAS & CRIACAO DE INFOGRAFICOS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Impacto visual:',
              text: 'torna os diapositivos e as sebentas muito mais apelativos e interessantes para os alunos.',
            },
            {
              title: 'Personalizacao total:',
              text: 'permite criar exatamente a imagem necessaria para explicar um conceito especifico, sem estar limitado aos bancos de imagens genericos.',
            },
            {
              title: 'Economia de tempo:',
              text: 'gera em poucos segundos ilustracoes ou fotos que, de outra forma, levariam horas a encontrar na internet ou a desenhar manualmente.',
            },
            {
              title: 'Salvaguarda de direitos de autor:',
              text: 'ao gerar conteudos originais, evita riscos legais e problemas eticos associados a utilizacao de imagens protegidas encontradas na web.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-zinc-200 p-5 space-y-2">
              <div className="font-mono text-xs font-semibold text-zinc-400 tabular-nums">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS PARA OS PROFESSORES */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-4 space-y-1">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            BENEFICIOS PARA OS PROFESSORES
          </h2>
          <p className="text-sm text-zinc-600">
            Na otica do professor, estas ferramentas oferecem diversas vantagens:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Benefício 01</span>
              </div>
              <h3 className="font-display text-lg font-bold text-zinc-900">
                Criar materiais didaticos visuais
              </h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              As ferramentas de IA podem transformar: descricoes textuais, conceitos abstratos e guioes de aula em ilustracoes personalizadas, diagramas, fotos realistas e esquemas visuais unicos.
            </p>
            <div className="pt-4 border-t border-zinc-200 space-y-2.5">
              <div className="text-xs font-semibold text-zinc-900">Ferramentas uteis:</div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                <li>
                  <strong className="text-zinc-900">Microsoft Designer</strong> - cria imagens e designs rapidos a partir de comandos simples.
                </li>
                <li>
                  <strong className="text-zinc-900">Leonardo.ai</strong> - permite criar ilustracoes artisticas com elevado controlo de estilo.
                </li>
                <li>
                  <strong className="text-zinc-900">Adobe Firefly</strong> - ideal para editar fotos existentes ou criar imagens eticas para apresentacoes.
                </li>
                <li>
                  <strong className="text-zinc-900">Ideogram</strong> - a melhor opcao para criar imagens que contenham textos e palavras precisas.
                </li>
              </ul>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Benefício 02</span>
              </div>
              <h3 className="font-display text-lg font-bold text-zinc-900">
                Estimular a Literacia Visual e Criatividade
              </h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              A IA nao serve apenas para o professor criar; serve para os alunos explorarem.
            </p>
            <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
              <div className="py-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Projetos de Storytelling:</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  Os alunos podem ilustrar as suas proprias historias ou poemas, dando vida a personagens que antes apenas imaginavam.
                </dd>
              </div>
              <div className="pt-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Analise Critica:</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  Debater com a turma porque e que a IA gerou determinada imagem (vieses, erros anatomicos ou estereotipos), desenvolvendo o espirito critico sobre a tecnologia.
                </dd>
              </div>
            </dl>
          </article>

          <article className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Benefício 03</span>
              </div>
              <h3 className="font-display text-lg font-bold text-zinc-900">
                Apoio a Educacao Inclusiva e Acessibilidade
              </h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Adaptar conteudos para diferentes necessidades de aprendizagem.
            </p>
            <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
              <div className="py-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Simplificacao Visual:</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  Criar esquemas visuais simples para alunos com dificuldades de processamento de texto ou PHDA.
                </dd>
              </div>
              <div className="pt-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Cartoes de Comunicacao (PECS):</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  Gerar icones e imagens especificas para alunos com Espetro do Autismo, adaptadas ao contexto real da escola e nao apenas a desenhos genericos.
                </dd>
              </div>
            </dl>
          </article>

          <article className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Benefício 04</span>
              </div>
              <h3 className="font-display text-lg font-bold text-zinc-900">
                Reconstituicao de Cenarios Impossiveis
              </h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Levar os alunos onde as camaras fotograficas nao conseguem chegar.
            </p>
            <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
              <div className="py-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Historia e Ciencia:</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  Visualizar o aspeto de uma cidade romana, a superficie de um exoplaneta ou o interior de uma celula humana com um realismo que um livro de texto nem sempre consegue transmitir.
                </dd>
              </div>
              <div className="pt-3 space-y-1">
                <dt className="font-semibold text-zinc-900">Simulacoes:</dt>
                <dd className="text-zinc-600 leading-relaxed">
                  "E se os dinossauros tivessem sobrevivido?" - usar a IA para criar hipoteses visuais que estimulem o debate cientifico.
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
    </div>
  );
};
