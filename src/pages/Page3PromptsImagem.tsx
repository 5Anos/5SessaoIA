import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import {
  IMAGE_PROMPTS,
  PROMPT_TEST_STATUS_LABELS,
  filterPromptsByCategory,
} from '../data/moduloData.ts';
import { PROMPT_SAMPLE_IMAGES } from '../data/mediaAssets.ts';
import { VisualFrame } from '../components/VisualFrame.tsx';

export const Page3PromptsImagem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const categories = [
    'Todos',
    'Com Exemplo Visual',
    'Ficção & Futuro',
    'Sociedade & Sustentabilidade',
    'Ciência & Anatomia',
  ];

  const prompts = filterPromptsByCategory(selectedCategory);

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
    <div className="space-y-10">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 3 de 9 · Engenharia de Prompts Educativos
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          PROMPTS PARA CRIAR IMAGENS — 12 EXEMPLOS COMPLETOS
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Cada exemplo apresenta o objetivo pedagógico, a ferramenta recomendada, o prompt completo, o resultado esperado com área visual associada, a alternativa gratuita e o estado de validação.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs text-zinc-500 tabular-nums shrink-0">
            A mostrar {prompts.length} de {IMAGE_PROMPTS.length} prompts
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {prompts.map((p) => {
            const isCopied = copiedId === p.id;
            const sampleSrc = p.imageKey ? PROMPT_SAMPLE_IMAGES[p.imageKey] : null;
            return (
              <article
                key={p.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-blue-700 tabular-nums">
                        {String(p.id).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{p.category}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 font-medium text-[11px]">
                      {PROMPT_TEST_STATUS_LABELS[p.testStatus]}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-zinc-900">
                    {p.id}. {p.title}
                  </h2>

                  <dl className="space-y-2.5 text-xs sm:text-sm">
                    <div>
                      <dt className="font-semibold text-zinc-900">Objetivo pedagógico</dt>
                      <dd className="text-zinc-700 leading-relaxed">{p.objective}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">Ferramenta recomendada</dt>
                      <dd className="text-zinc-700 leading-relaxed">{p.recommendedTool}</dd>
                    </div>
                  </dl>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-zinc-900">Prompt completo</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(p.id, p.prompt)}
                        aria-label={`Copiar prompt de ${p.title}`}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                          isCopied
                            ? 'bg-teal-700 text-white'
                            : 'bg-zinc-900 hover:bg-blue-700 text-white'
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
                    <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all">
                      {p.prompt}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-zinc-100">
                    <div className="text-xs font-semibold text-zinc-900">
                      Resultado esperado
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {p.expectedResult}
                    </p>

                    {sampleSrc && p.imageStatus === 'illustrative' ? (
                      <VisualFrame
                        src={sampleSrc}
                        alt={`Referência visual ilustrativa para o prompt ${p.id}: ${p.title}`}
                        caption="Imagem de referência ilustrativa — proveniência da ferramenta recomendada por confirmar"
                        aspectClass="aspect-[16/9]"
                        allowZoom={true}
                      />
                    ) : (
                      <div className="aspect-[16/9] rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 flex flex-col items-center justify-center text-center gap-1.5">
                        <span className="text-xs font-semibold text-zinc-700">
                          Imagem do resultado pendente de geração/validação na ferramenta recomendada
                        </span>
                        <span className="text-xs text-zinc-500 max-w-md leading-relaxed">
                          Descrição esperada: {p.expectedResult}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-700">
                  <strong className="font-semibold text-zinc-900">Alternativa gratuita: </strong>
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
