import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MODULE_OBJECTIVES } from '../data/moduloData.ts';
import { HERO_STUDIO_IMAGE } from '../data/mediaAssets.ts';
import { VisualFrame } from '../components/VisualFrame.tsx';

interface Page1Props {
  onNavigateToPage: (pageNumber: number) => void;
}

export const Page1VisaoGeral: React.FC<Page1Props> = ({
  onNavigateToPage,
}) => {
  return (
    <div className="space-y-12">
      {/* Editorial Split Hero */}
      <section className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.12] max-w-2xl">
                Ferramentas de IA na Educação
              </h1>

              <div className="pt-4 border-t border-zinc-200 space-y-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-xl">
                <p>
                  <strong className="font-semibold text-zinc-900">Enquadramento metodológico: </strong>
                  Este módulo é um recurso de formação para docentes, organizado em torno da exploração crítica e prática de ferramentas de inteligência artificial aplicadas à educação. Inclui informação sobre plataformas, exemplos de prompts, resultados esperados, atividades pedagógicas e orientações para uma utilização responsável. Os conteúdos são sujeitos a atualização, uma vez que as funcionalidades e os planos das ferramentas podem mudar.
                </p>
                <p className="text-xs text-amber-950 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  As funcionalidades, os limites de utilização e os planos gratuitos das ferramentas podem sofrer alterações. Confirme sempre a informação nas páginas oficiais antes de utilizar ou recomendar uma plataforma.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigateToPage(2)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-colors min-h-[44px]"
              >
                <span>Explorar Ferramentas de Imagem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-100 border-t lg:border-t-0 lg:border-l border-zinc-200 flex flex-col">
            <VisualFrame
              src={HERO_STUDIO_IMAGE}
              alt="Espaço de trabalho docente com ilustrações botânicas digitais e plano de aula"
              aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full"
              allowZoom={false}
              className="h-full [&>div]:rounded-none [&>div]:border-0 [&>div]:h-full"
            />
          </div>
        </div>
      </section>

      {/* OBJETIVOS DO MÓDULO 3 */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 pb-4">
          <div>
            <div className="text-xs font-medium text-zinc-500 mb-1">Enquadramento Pedagógico</div>
            <h2 className="font-display text-2xl font-bold text-zinc-900 tracking-tight">
              OBJETIVOS DO MÓDULO 3
            </h2>
          </div>
          <span className="text-xs text-zinc-500 tabular-nums">5 metas de aprendizagem</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULE_OBJECTIVES.map((obj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-zinc-200 p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                  {String(index + 1).padStart(2, '0')}.
                </div>
                <p className="text-sm sm:text-base font-medium text-zinc-900 leading-relaxed">
                  {obj}
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-500">
                {index === 0 && 'Identificação e comparação de ferramentas'}
                {index === 1 && 'Seleção pedagógica crítica'}
                {index === 2 && 'Construção e avaliação de prompts'}
                {index === 3 && 'Criação de recursos multimédia'}
                {index === 4 && 'Segurança, dados e direitos de autor'}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
