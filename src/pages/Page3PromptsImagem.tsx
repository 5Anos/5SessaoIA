import React, { useState } from 'react';
import { Copy, Check, ExternalLink, PenLine, Target, Wrench } from 'lucide-react';
import { IMAGE_PROMPTS, getRecommendedToolUrl } from '../data/moduloData.ts';
import { PROMPT_SAMPLE_IMAGES } from '../data/mediaAssets.ts';
import { VisualFrame } from '../components/VisualFrame.tsx';
import { PageHeader } from '../components/PageHeader.tsx';

const ENGLISH_PROMPT_IDS = new Set([1, 3, 4]);

export const Page3PromptsImagem: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const fallbackCopy = (text: string, id: number) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // noop
    }
  };

  const handleCopy = (id: number, text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch(() => fallbackCopy(text, id));
    } else {
      fallbackCopy(text, id);
    }
  };

  return (
    <div className="space-y-12">
      <PageHeader
        title="PROMPTS PARA CRIAR IMAGENS"
        Icon={PenLine}
      />

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {IMAGE_PROMPTS.map((p) => {
            const isCopied = copiedId === p.id;
            const sampleSrc = p.imageKey ? PROMPT_SAMPLE_IMAGES[p.imageKey] : null;
            const recommendedUrl = getRecommendedToolUrl(p.recommendedTool);
            return (
              <article
                key={p.id}
                className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-6 sm:p-7 flex flex-col justify-between gap-5"
              >
                <div className="space-y-5">
                  <div className="flex items-baseline gap-3 border-b border-indigo-100 pb-4">
                    <span className="font-mono text-sm font-bold text-[#4f46e5] tabular-nums shrink-0">
                      {String(p.id).padStart(2, '0')}.
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#0d153e] leading-snug">
                      {p.title}
                    </h2>
                  </div>

                  <dl className="divide-y divide-indigo-100/70 text-xs sm:text-sm">
                    <div className="pb-3.5 space-y-1">
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#0d153e]">
                        <Target className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" aria-hidden="true" />
                        <span>Objetivo pedagógico</span>
                      </dt>
                      <dd className="text-[#3d4663] leading-relaxed">{p.objective}</dd>
                    </div>

                    <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-0.5 min-w-0">
                        <dt className="inline-flex items-center gap-1.5 font-semibold text-[#4338ca] text-xs">
                          <Wrench className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>Ferramenta recomendada</span>
                        </dt>
                        <dd className="font-display font-bold text-[#0d153e] text-sm leading-snug">
                          {p.recommendedTool}
                        </dd>
                      </div>
                      {recommendedUrl && (
                        <a
                          href={recommendedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir ferramenta recomendada para ${p.title} num novo separador`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-indigo-200 bg-[#f8f7fc] text-[#4338ca] hover:bg-[#4f46e5] hover:border-[#4f46e5] hover:text-white text-xs font-semibold transition-colors min-h-[38px] whitespace-nowrap shrink-0 self-start sm:self-center"
                        >
                          <span>Experimentar</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </dl>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#0d153e]">
                        Prompt completo
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(p.id, p.prompt)}
                        aria-label={`Copiar prompt de ${p.title}`}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] whitespace-nowrap shrink-0 ${
                          isCopied
                            ? 'bg-teal-700 text-white'
                            : 'bg-gradient-to-r from-[#4f46e5] to-[#6366f1] hover:from-[#4338ca] hover:to-[#4f46e5] text-white shadow-sm shadow-indigo-500/20'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-xs font-semibold text-[#4338ca]">
                      Idioma do prompt:{' '}
                      {ENGLISH_PROMPT_IDS.has(p.id) ? 'Inglês' : 'Português'}
                    </div>
                    <p className="font-mono text-xs text-[#1e243d] leading-relaxed bg-[#f4f3fb] p-4 rounded-xl border border-indigo-200/70 select-all">
                      {p.prompt}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-indigo-100/80">
                    <div className="text-xs font-semibold text-[#0d153e]">
                      Resultado esperado
                    </div>
                    <p className="text-xs sm:text-sm text-[#3d4663] leading-relaxed">
                      {p.expectedResult}
                    </p>

                    {sampleSrc && p.imageStatus === 'illustrative' ? (
                      <VisualFrame
                        src={sampleSrc}
                        alt={`Referência visual ilustrativa para o prompt ${p.id}: ${p.title}`}
                        aspectClass="aspect-[16/9]"
                        allowZoom={true}
                      />
                    ) : (
                      <div className="aspect-[16/9] rounded-xl border border-dashed border-indigo-200 bg-[#f8f7fc] p-4 flex flex-col items-center justify-center text-center gap-1.5">
                        <span className="text-xs font-semibold text-[#0d153e]">
                          Imagem do resultado pendente de geração/validação na ferramenta recomendada
                        </span>
                        <span className="text-xs text-[#525b7a] max-w-md leading-relaxed">
                          Descrição esperada: {p.expectedResult}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-indigo-100/80 text-xs text-[#3d4663]">
                  <strong className="font-semibold text-[#0d153e]">Alternativa gratuita: </strong>
                  {p.freeAlternative}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
