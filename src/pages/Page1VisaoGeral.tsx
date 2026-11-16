import React from 'react';
import { MODULE_OBJECTIVES } from '../data/moduloData.ts';
import { HERO_STUDIO_IMAGE } from '../data/mediaAssets.ts';
import { VisualFrame } from '../components/VisualFrame.tsx';

export const Page1VisaoGeral: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Editorial Split Hero */}
      <section className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="space-y-5">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.12] max-w-2xl">
                Ferramentas de IA na Educação
              </h1>

              <div className="pt-4 border-t border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-xl">
                <p>
                  <strong className="font-semibold text-zinc-900">Enquadramento metodológico: </strong>
                  Este módulo é um recurso de formação para docentes, organizado em torno da exploração crítica e prática de ferramentas de inteligência artificial aplicadas à educação. Inclui informação sobre plataformas, exemplos de prompts, resultados esperados, atividades pedagógicas e orientações para uma utilização responsável. Os conteúdos são sujeitos a atualização, uma vez que as funcionalidades e os planos das ferramentas podem mudar.
                </p>
              </div>
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
        <div className="border-b border-zinc-200 pb-4">
          <h2 className="font-display text-2xl font-bold text-zinc-900 tracking-tight">
            OBJETIVOS DO MÓDULO 3
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODULE_OBJECTIVES.map((obj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-zinc-200 p-6 flex flex-col gap-3"
            >
              <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                {String(index + 1).padStart(2, '0')}.
              </div>
              <p className="text-sm sm:text-base font-medium text-zinc-900 leading-relaxed">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
