import React, { useState } from 'react';
import { LayoutGrid, Table2, ExternalLink, ShieldAlert } from 'lucide-react';
import {
  IMAGE_CAPABILITIES,
  TEACHER_IMAGE_BENEFITS,
  IMAGE_TOOLS,
  OTHER_IMAGE_TOOLS,
  ImageTool,
} from '../data/moduloData.ts';
import { ToolBrandMark } from '../components/ToolBrandMark.tsx';

const ToolCard: React.FC<{ tool: ImageTool }> = ({ tool }) => (
  <article className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 flex flex-col gap-5">
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <ToolBrandMark toolId={tool.id} toolName={tool.name} />
          <h3 className="font-display text-xl font-bold text-zinc-900 truncate">
            {tool.name}
          </h3>
        </div>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Experimentar ${tool.name} no site oficial`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold transition-colors shrink-0 min-h-[36px]"
        >
          <span>Experimentar</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
      <p className="text-sm text-zinc-700 leading-relaxed">{tool.description}</p>
    </div>

    <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
      <div className="py-3 space-y-1">
        <dt className="font-semibold text-zinc-900">Principais capacidades</dt>
        <dd className="text-zinc-600 leading-relaxed">
          <ul className="list-disc pl-4 space-y-1">
            {tool.capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="py-3 space-y-1">
        <dt className="font-semibold text-zinc-900">Melhor utilização educativa</dt>
        <dd className="text-zinc-600 leading-relaxed">{tool.educationalUse}</dd>
      </div>
      <div className="py-3 space-y-1">
        <dt className="font-semibold text-zinc-900">Plano gratuito e limitações</dt>
        <dd className="text-zinc-600 leading-relaxed">
          <strong className="font-medium text-zinc-800">{tool.freePlan}</strong>{' '}
          {tool.limitations}
        </dd>
      </div>
      <div className="py-3 space-y-1">
        <dt className="font-semibold text-zinc-900">Privacidade e idade</dt>
        <dd className="text-zinc-600 leading-relaxed">{tool.privacyOrAge}</dd>
      </div>
      <div className="py-3 space-y-1">
        <dt className="font-semibold text-zinc-900">Alternativa gratuita</dt>
        <dd className="text-zinc-600 leading-relaxed">{tool.freeAlternative}</dd>
      </div>
      <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
        <span>Fonte oficial: {tool.officialSource}</span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline font-medium break-all"
        >
          {tool.officialUrl}
        </a>
      </div>
    </dl>
  </article>
);

export const Page2FerramentasImagem: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          FERRAMENTAS DE IMAGEM
        </h1>
      </header>

      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            ESTAS FERRAMENTAS PERMITEM:
          </h2>
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

      {/* Benefícios para o professor */}
      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            Benefícios para o professor
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
          <ul className="list-disc pl-5 space-y-3 text-sm text-zinc-800 leading-relaxed">
            {TEACHER_IMAGE_BENEFITS.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO ESCOLHER A FERRAMENTA DE IMAGEM */}
      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            COMO ESCOLHER A FERRAMENTA DE IMAGEM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Tipo de resultado:',
              text: 'fotografia, ilustração, diagrama, cartaz ou edição de imagem.',
            },
            {
              title: 'Controlo criativo:',
              text: 'necessidade de controlar estilo, composição, proporções e elementos visuais.',
            },
            {
              title: 'Texto na imagem:',
              text: 'quando existir texto, considerar ferramentas com melhores capacidades tipográficas e rever sempre a ortografia.',
            },
            {
              title: 'Condições de utilização:',
              text: 'confirmar limites gratuitos, idade mínima, privacidade, licenças e direitos de utilização.',
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

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
          <div>
            <strong className="font-semibold">Verificação de direitos e licenças: </strong>
            a geração de uma imagem por IA não garante, por si só, a inexistência de direitos de autor ou de outros direitos de terceiros. É necessário verificar as condições da ferramenta, os direitos sobre os materiais introduzidos, a utilização de marcas, personagens e imagens de pessoas, bem como as condições de utilização do resultado.
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-4">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            FERRAMENTAS DE IMAGEM COM IA
          </h2>

          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg shrink-0 self-start sm:self-auto">
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

        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMAGE_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-700">
                  <th className="py-3.5 px-5">Ferramenta</th>
                  <th className="py-3.5 px-5">Utilização Educativa</th>
                  <th className="py-3.5 px-5">Plano Gratuito & Limitações</th>
                  <th className="py-3.5 px-5">Acesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm">
                {IMAGE_TOOLS.map((tool) => (
                  <tr key={tool.id} className="align-top hover:bg-zinc-50/60 transition-colors">
                    <td className="py-4 px-5 font-display font-bold text-zinc-900">
                      <div className="flex items-center gap-2.5">
                        <ToolBrandMark toolId={tool.id} toolName={tool.name} />
                        <span>{tool.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-zinc-600 leading-relaxed">
                      {tool.educationalUse}
                    </td>
                    <td className="py-4 px-5 text-zinc-600 leading-relaxed">
                      {tool.freePlan} {tool.limitations}
                    </td>
                    <td className="py-4 px-5">
                      <a
                        href={tool.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold whitespace-nowrap"
                      >
                        <span>Experimentar</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-4">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            Outras ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_IMAGE_TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
};
