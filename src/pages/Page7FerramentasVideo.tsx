import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldAlert, Film } from 'lucide-react';
import { VIDEO_TOOLS, VIDEO_PROMPTS, VIDEO_ACTIVITIES } from '../data/moduloData.ts';

export const Page7FerramentasVideo: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      });
    }
  };

  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 7 de 9 · Vídeo Educativo com IA
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          FERRAMENTAS E ATIVIDADES DE VÍDEO
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Três categorias diferenciadas (geração de vídeo, avatares e tradução, e edição), três exemplos práticos de prompts e a atividade "O Dobrador Poliglota".
        </p>
      </header>

      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            FERRAMENTAS DE VÍDEO POR CATEGORIA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VIDEO_TOOLS.map((tool) => (
            <article
              key={tool.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4"
            >
              <div className="space-y-2.5 flex-1">
                <div className="flex items-start justify-between gap-2 min-h-[36px]">
                  <span className="text-xs font-semibold text-blue-700 leading-snug">{tool.category}</span>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-blue-700 text-white text-xs font-semibold shrink-0 min-h-[36px]"
                  >
                    <span>Experimentar</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-900">{tool.name}</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">{tool.recommendedFor}</p>
              </div>

              <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
                <div className="py-2.5 space-y-0.5">
                  <dt className="font-semibold text-zinc-900">Plano gratuito</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.freePlan}</dd>
                </div>
                <div className="py-2.5 space-y-0.5">
                  <dt className="font-semibold text-zinc-900">Limitações</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.limitations}</dd>
                </div>
                <div className="pt-2.5 space-y-0.5">
                  <dt className="font-semibold text-zinc-900">Alternativa gratuita</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.freeAlternative}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            EXEMPLOS PRÁTICOS DE PROMPTS DE VÍDEO
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {VIDEO_PROMPTS.map((vp) => {
            const isCopied = copiedId === vp.id;
            return (
              <article
                key={vp.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-zinc-900">
                      Exemplo {vp.id} — {vp.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {vp.recommendedTool}
                  </span>
                </div>

                <p className="text-sm text-zinc-700">
                  <strong className="font-semibold text-zinc-900">Objetivo pedagógico: </strong>
                  {vp.objective}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-zinc-900">Prompt completo</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(vp.id, vp.prompt)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white min-h-[36px] ${
                        isCopied ? 'bg-teal-700' : 'bg-zinc-900 hover:bg-blue-700'
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copiado' : 'Copiar Prompt'}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all">
                    {vp.prompt}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2 border-t border-zinc-100">
                  <div>
                    <strong className="font-semibold text-zinc-900">Resultado esperado: </strong>
                    <span className="text-zinc-700">{vp.expectedResult}</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-zinc-900">Alternativa gratuita: </strong>
                    <span className="text-zinc-700">{vp.freeAlternative}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            ATIVIDADE EM SALA DE AULA: VÍDEO E TRADUÇÃO
          </h2>
        </div>

        {VIDEO_ACTIVITIES.map((act) => (
          <article key={act.id} className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-blue-700">
                Ferramenta recomendada: {act.recommendedTool}
              </div>
              <h3 className="font-display text-2xl font-bold text-zinc-900">{act.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              {act.objetivos.map((obj, idx) => (
                <div key={idx} className="bg-[#f8f8f6] p-3 rounded-lg border border-zinc-200/80 text-zinc-700">
                  {obj}
                </div>
              ))}
            </div>

            <div className="divide-y divide-zinc-200">
              {act.implementacao.map((step, sIdx) => (
                <div key={sIdx} className="py-4 first:pt-0 space-y-1">
                  <div className="text-xs font-mono font-semibold text-blue-700">
                    {step.etapa} · {step.titulo}
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed">{step.descricao}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-4 border-t border-zinc-200">
              <div>
                <strong className="font-semibold text-zinc-900">Entrega e avaliação: </strong>
                <span className="text-zinc-700">
                  {act.avaliacao.entrega} Critérios: {act.avaliacao.itens.join(' · ')}
                </span>
              </div>
              <div>
                <strong className="font-semibold text-zinc-900">Alternativa gratuita: </strong>
                <span className="text-zinc-700">{act.freeAlternative}</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Salvaguarda obrigatória: </strong>
                {act.safeguard}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
