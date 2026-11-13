import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { IMAGE_PROMPTS, filterPromptsByCategory } from '../data/moduloData.ts';
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
  const visualShowcase = IMAGE_PROMPTS.filter((p) => Boolean(p.imageKey));

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
      {/* Page Header */}
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 3 de 7 · Engenharia de Prompts Educativos
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          PROMPT PARA CRIAR IMAGENS - EXEMPLOS
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Os 12 comandos pedagógicos integrais do documento, acompanhados de exemplos visuais gerados por IA para demonstrar resultados concretos em contexto escolar.
        </p>
      </header>

      {/* Featured AI Visual Showcase */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 pb-3">
          <div>
            <h2 className="font-display text-xl font-bold text-zinc-900">
              Exemplos Visuais Gerados a Partir dos Prompts
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Clique em "Ampliar" para observar o nível de detalhe obtido com instruções descritivas de estilo, enquadramento e fundo.
            </p>
          </div>
          <span className="text-xs text-zinc-500 tabular-nums">4 ilustrações modelo</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visualShowcase.map((item) => {
            const imgSrc = item.imageKey ? PROMPT_SAMPLE_IMAGES[item.imageKey] : '';
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-zinc-200 p-3.5 flex flex-col justify-between gap-3"
              >
                <VisualFrame
                  src={imgSrc}
                  alt={`Exemplo gerado para o prompt ${item.id}: ${item.title}`}
                  caption={`${item.figureNumber} · Prompt ${item.id}: ${item.title}`}
                  aspectClass="aspect-[4/3]"
                />
                <div className="pt-2.5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                  <span className="text-[11px] text-zinc-500 leading-snug">{item.category}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.prompt)}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap shrink-0"
                  >
                    {copiedId === item.id ? 'Copiado' : 'Copiar prompt'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All 12 Prompts Filter + Grid */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prompts.map((p) => {
            const isCopied = copiedId === p.id;
            const sampleSrc = p.imageKey ? PROMPT_SAMPLE_IMAGES[p.imageKey] : null;
            return (
              <article
                key={p.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-zinc-500 flex items-center gap-2">
                        <span className="font-mono font-semibold text-blue-700 tabular-nums">
                          {String(p.id).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{p.category}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900">
                        {p.id}. {p.title}
                      </h3>
                    </div>

                    {sampleSrc && (
                      <div className="w-20 shrink-0">
                        <VisualFrame
                          src={sampleSrc}
                          alt={`Miniatura do prompt ${p.title}`}
                          aspectClass="aspect-[4/3]"
                          allowZoom={true}
                        />
                      </div>
                    )}
                  </div>

                  <p className="font-mono text-xs sm:text-[13px] text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all">
                    {p.prompt}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-400">Texto integral da fonte</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(p.id, p.prompt)}
                    aria-label={`Copiar prompt de ${p.title}`}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
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
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
