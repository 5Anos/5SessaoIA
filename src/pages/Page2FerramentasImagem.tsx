import React, { useState } from 'react';
import {
  LayoutGrid,
  Table2,
  ExternalLink,
  Image as ImageIcon,
  Sparkles,
  Check,
  ShieldAlert,
} from 'lucide-react';
import {
  IMAGE_CAPABILITIES,
  TEACHER_IMAGE_BENEFITS,
  IMAGE_TOOLS,
  OTHER_IMAGE_TOOLS,
} from '../data/moduloData.ts';
import { ToolBrandMark } from '../components/ToolBrandMark.tsx';
import { PageHeader } from '../components/PageHeader.tsx';
import { ToolCatalogCard } from '../components/ToolCatalogCard.tsx';

const SELECTION_CRITERIA = [
  {
    title: 'Tipo de resultado',
    text: 'Fotografia, imagem fotorrealista, ilustração, diagrama, cartaz ou edição de imagem.',
  },
  {
    title: 'Controlo criativo',
    text: 'Necessidade de controlar o estilo, a composição, as proporções e os elementos visuais.',
  },
  {
    title: 'Texto na imagem',
    text: 'Quando existir texto, considerar as capacidades tipográficas da ferramenta. Rever sempre a ortografia, os acentos, a legibilidade e a informação produzida.',
  },
  {
    title: 'Adequação pedagógica e científica',
    text: 'Verificar se a imagem representa corretamente os conceitos, é adequada à idade dos alunos e corresponde aos objetivos de aprendizagem.',
  },
  {
    title: 'Condições de utilização',
    text: 'Confirmar os limites gratuitos, os requisitos de idade, a privacidade, as licenças e os direitos de utilização.',
  },
];

export const Page2FerramentasImagem: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <div className="space-y-14">
      <PageHeader title="FERRAMENTAS DE IMAGEM" Icon={ImageIcon} />

      {/* Capacidades (lista aberta com divisórias finas) + Benefícios (painel suave lilás) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-7 space-y-5">
          <div className="border-b border-indigo-100 pb-3.5">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
              EM CONJUNTO, ESTAS FERRAMENTAS PODEM PERMITIR:
            </h2>
          </div>

          <ol className="divide-y divide-indigo-100/80">
            {IMAGE_CAPABILITIES.map((item, idx) => (
              <li
                key={idx}
                className="flex items-baseline gap-4 py-3.5 text-sm sm:text-[15px] text-[#1e243d] leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-[#4f46e5] tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="lg:col-span-5 bg-gradient-to-br from-white to-[#f4f1fe] rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-indigo-200/60 pb-3.5">
            <Sparkles className="w-5 h-5 text-[#6d28d9] shrink-0" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold text-[#0d153e]">
              Benefícios para o professor
            </h2>
          </div>

          <ul className="space-y-3.5 text-sm text-[#1e243d] leading-relaxed">
            {TEACHER_IMAGE_BENEFITS.map((benefit, idx) => {
              const colonIdx = benefit.indexOf(':');
              const hasLabel = colonIdx !== -1;

              return (
                <li key={idx} className="flex items-start gap-3">
                  <Check
                    className="w-4 h-4 text-[#4f46e5] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>
                    {hasLabel ? (
                      <>
                        <strong className="font-semibold text-[#0d153e]">
                          {benefit.slice(0, colonIdx + 1)}
                        </strong>
                        {benefit.slice(colonIdx + 1)}
                      </>
                    ) : (
                      benefit
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </aside>
      </section>

      {/* COMO ESCOLHER A FERRAMENTA DE IMAGEM — Grelha única sem cartões isolados */}
      <section className="space-y-6">
        <div className="border-b border-indigo-100 pb-3.5">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
            COMO ESCOLHER A FERRAMENTA DE IMAGEM
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:gap-px sm:bg-indigo-100/80 overflow-hidden">
          {SELECTION_CRITERIA.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white p-5 sm:p-6 space-y-2.5 ${
                idx === SELECTION_CRITERIA.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="font-mono text-xs font-bold text-[#4f46e5] tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-base font-bold text-[#0d153e]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#3d4663] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-indigo-100 pb-4">
          <h2 className="font-display text-2xl font-bold text-[#0d153e]">
            FERRAMENTAS DE IMAGEM COM IA
          </h2>

          <div className="flex items-center gap-1 p-1 bg-indigo-50/80 border border-indigo-100 rounded-xl shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              aria-label="Vista em cartões"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'cards'
                  ? 'bg-white text-[#0d153e] shadow-xs font-semibold'
                  : 'text-[#3d4663] hover:text-[#0d153e]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span>Cartões</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              aria-label="Vista em tabela comparativa"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'table'
                  ? 'bg-white text-[#0d153e] shadow-xs font-semibold'
                  : 'text-[#3d4663] hover:text-[#0d153e]'
              }`}
            >
              <Table2 className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span>Comparar ferramentas principais</span>
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMAGE_TOOLS.map((tool) => (
              <ToolCatalogCard
                key={tool.id}
                id={tool.id}
                name={tool.name}
                officialUrl={tool.officialUrl}
                description={tool.description}
                promptLanguage={tool.promptLanguage}
                capabilitiesLabel="Principais capacidades"
                capabilities={tool.capabilities}
                applicationLabel="Melhor utilização educativa"
                applicationText={tool.educationalUse}
                freePlan={tool.freePlan}
                limitations={tool.limitations}
                privacyLabel="Privacidade e idade"
                privacyOrAge={tool.privacyOrAge}
                freeAlternative={tool.freeAlternative}
                officialSource={tool.officialSource}
                showOfficialSource={false}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-indigo-100 bg-[#f4f1fe] text-xs font-semibold text-[#0d153e]">
                  <th className="py-3.5 px-5">Ferramenta</th>
                  <th className="py-3.5 px-5">Utilização educativa</th>
                  <th className="py-3.5 px-5">Plano gratuito e limitações</th>
                  <th className="py-3.5 px-5">Acesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100/70 text-xs sm:text-sm">
                {IMAGE_TOOLS.map((tool) => (
                  <tr
                    key={tool.id}
                    className="align-top hover:bg-indigo-50/40 transition-colors"
                  >
                    <td className="py-4 px-5 font-display font-bold text-[#0d153e]">
                      <div className="flex items-center gap-2.5">
                        <ToolBrandMark toolId={tool.id} toolName={tool.name} />
                        <span>{tool.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-[#3d4663] leading-relaxed">
                      {tool.educationalUse}
                    </td>
                    <td className="py-4 px-5 text-[#3d4663] leading-relaxed">
                      {tool.freePlan} {tool.limitations}
                    </td>
                    <td className="py-4 px-5">
                      <a
                        href={tool.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#6366f1] hover:from-[#4338ca] hover:to-[#4f46e5] text-white text-xs font-semibold whitespace-nowrap transition-all"
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
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="font-display text-2xl font-bold text-[#0d153e]">
            ASSISTENTES DE IA E FERRAMENTAS COMPLEMENTARES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_IMAGE_TOOLS.map((tool) => (
            <ToolCatalogCard
              key={tool.id}
              id={tool.id}
              name={tool.name}
              officialUrl={tool.officialUrl}
              description={tool.description}
              promptLanguage={tool.promptLanguage}
              capabilitiesLabel="Principais capacidades"
              capabilities={tool.capabilities}
              applicationLabel="Melhor utilização educativa"
              applicationText={tool.educationalUse}
              freePlan={tool.freePlan}
              limitations={tool.limitations}
              privacyLabel="Privacidade e idade"
              privacyOrAge={tool.privacyOrAge}
              freeAlternative={tool.freeAlternative}
              officialSource={tool.officialSource}
              showOfficialSource={false}
            />
          ))}
        </div>
      </section>

      {/* Aviso de validação científica e pedagógica */}
      <aside className="rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-[#faf9fe] border border-amber-200/80 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-4.5 h-4.5 text-amber-700 shrink-0" aria-hidden="true" />
          <h2 className="font-display text-base sm:text-lg font-bold text-[#0d153e] tracking-tight">
            VALIDAR ANTES DE UTILIZAR
          </h2>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-[#3d4663] leading-relaxed">
          <p>
            As imagens geradas por inteligência artificial podem conter erros científicos, históricos, geográficos, matemáticos ou conceptuais, mesmo quando parecem realistas.
          </p>
          <p>
            Em imagens científicas, é necessário verificar estruturas, relações, proporções, legendas e terminologia.
          </p>
          <p>
            Em imagens históricas, distinguir representações ilustrativas de documentos históricos autênticos.
          </p>
          <p>
            Antes de utilizar uma imagem na sala de aula, o professor deve verificar a exatidão da informação, a adequação à idade dos alunos e a qualidade da representação visual.
          </p>
          <p>
            É igualmente importante identificar possíveis estereótipos ou representações discriminatórias e garantir a diversidade e a inclusão.
          </p>
          <p className="font-medium text-[#1e243d]">
            A IA pode apoiar a criação de recursos educativos, mas não substitui a validação científica e pedagógica do professor.
          </p>
        </div>
      </aside>
    </div>
  );
};
