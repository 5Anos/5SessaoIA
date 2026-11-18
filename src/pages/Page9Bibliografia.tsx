import React, { useState } from 'react';
import { Copy, Check, ExternalLink, BookOpen } from 'lucide-react';
import { BIBLIOGRAPHY, ETHICS_OFFICIAL_LINKS } from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';

export const Page9Bibliografia: React.FC = () => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const fallbackCopy = (text: string, idx: number) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      // noop
    }
  };

  const handleCopy = (idx: number, citation: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(citation)
        .then(() => {
          setCopiedIdx(idx);
          setTimeout(() => setCopiedIdx(null), 2000);
        })
        .catch(() => fallbackCopy(citation, idx));
    } else {
      fallbackCopy(citation, idx);
    }
  };

  return (
    <div className="space-y-14">
      <PageHeader
        title="BIBLIOGRAFIA E RECURSOS OFICIAIS"
        Icon={BookOpen}
      />

      <section>
        <div className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] divide-y divide-indigo-100/75">
          {BIBLIOGRAPHY.map((item, idx) => {
            const isCopied = copiedIdx === idx;
            return (
              <div
                key={idx}
                className="px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] tabular-nums shrink-0">
                    [{idx + 1}]
                  </span>
                  <div className="space-y-1.5 min-w-0">
                    <div className="text-xs font-semibold text-[#525b7a]">
                      {item.author} · {item.year}
                    </div>
                    <p className="text-sm sm:text-base text-[#0d153e] leading-relaxed break-words">
                      {item.citation}
                    </p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#4f46e5] hover:text-[#4338ca] hover:underline break-all"
                      >
                        <span>Consultar fonte oficial</span>
                        <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(idx, item.citation)}
                  aria-label={`Copiar citação de ${item.author}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors self-start sm:self-center shrink-0 min-h-[36px] whitespace-nowrap ${
                    isCopied
                      ? 'bg-teal-700 text-white'
                      : 'bg-indigo-50 hover:bg-[#4f46e5] text-[#4338ca] hover:text-white border border-indigo-100'
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
                      <span>Copiar Citação</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <div className="border-b border-indigo-100 pb-3.5">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
            Ligações e Documentos Oficiais
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] divide-y md:divide-y-0 md:grid md:grid-cols-2 md:gap-px md:bg-indigo-100/80 overflow-hidden">
          {ETHICS_OFFICIAL_LINKS.map((ref, idx) => (
            <a
              key={idx}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 flex items-start justify-between gap-4 hover:bg-[#faf9fe] transition-colors group"
            >
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold text-[#4f46e5]">{ref.entity}</div>
                <div className="text-sm font-medium text-[#0d153e] group-hover:text-[#4f46e5] leading-snug">
                  {ref.title}
                </div>
              </div>
              <ExternalLink
                className="w-4 h-4 text-indigo-300 group-hover:text-[#4f46e5] shrink-0 mt-1 transition-colors"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="pt-8 border-t border-indigo-100 space-y-6">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
          Ficha Técnica
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
          <div className="space-y-1">
            <dt className="text-xs font-medium text-[#525b7a]">Autoria</dt>
            <dd className="font-display text-lg font-bold text-[#0d153e]">Carla Oliveira</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-xs font-medium text-[#525b7a]">Datas de Edição</dt>
            <dd className="font-display text-lg font-bold text-[#0d153e]">
              15 de novembro de 2026
            </dd>
          </div>
          <div className="space-y-1 sm:col-span-2">
            <dt className="text-xs font-medium text-[#525b7a]">Licença</dt>
            <dd className="text-sm font-medium text-[#0d153e] leading-relaxed">
              Creative Commons — Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
};
