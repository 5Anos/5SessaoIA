import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { BIBLIOGRAPHY } from '../data/moduloData.ts';

interface Page7Props {
  onOpenPdf: () => void;
}

export const Page7Bibliografia: React.FC<Page7Props> = ({ onOpenPdf }) => {
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
    <div className="space-y-12">
      {/* Page Header */}
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 7 de 7 · Referências & Créditos
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          BIBLIOGRAFIA & REFERENCIAS BIBLIOGRAFICAS
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Fundamentação académica integral, obras citadas e ficha técnica oficial da fonte.
        </p>
      </header>

      {/* Bibliography List */}
      <section className="space-y-5">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            Obras Citadas no Documento
          </h2>
          <span className="text-xs text-zinc-500 tabular-nums">7 referências</span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-200">
          {BIBLIOGRAPHY.map((item, idx) => {
            const isCopied = copiedIdx === idx;
            return (
              <div
                key={idx}
                className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums shrink-0">
                    [{idx + 1}]
                  </span>
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs font-semibold text-zinc-500">
                      {item.author} · {item.year}
                    </div>
                    <p className="text-sm sm:text-base text-zinc-900 leading-relaxed">
                      {item.citation}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(idx, item.citation)}
                  aria-label={`Copiar citação de ${item.author}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors self-start sm:self-center shrink-0 min-h-[36px] ${
                    isCopied
                      ? 'bg-teal-700 text-white'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
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

      {/* Ficha Técnica / Colophon */}
      <section className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            Ficha Técnica & Transcrição Integral
          </h2>
          <button
            type="button"
            onClick={onOpenPdf}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition-colors self-start sm:self-auto min-h-[36px]"
          >
            <FileText className="w-4 h-4" />
            <span>Abrir PDF Original (9 Páginas)</span>
          </button>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="space-y-1">
            <dt className="text-xs font-medium text-zinc-500">Autoria</dt>
            <dd className="font-display text-base font-bold text-zinc-900">Carla Oliveira</dd>
            <dd className="text-xs text-zinc-500">2026 | Carla Oliveira</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-xs font-medium text-zinc-500">Data da Edição Original</dt>
            <dd className="font-display text-base font-bold text-zinc-900">23 de fevereiro de 2026</dd>
            <dd className="text-xs text-zinc-500">Módulo 3 · Genially</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-xs font-medium text-zinc-500">Identificador da Fonte</dt>
            <dd className="font-mono text-sm font-semibold text-zinc-900">Modulo3_FerramentasIA_2</dd>
            <dd className="text-xs text-zinc-500">Plataforma Genially</dd>
          </div>
        </dl>

        <div className="pt-5 border-t border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed">
          <strong className="font-semibold text-zinc-900">Nota: </strong>
          Este documento contem exclusivamente o texto integral da plataforma Genially (Modulo 3), reproduzido de forma estrita e fidedigna sem qualquer adicao ou interpolacao externa.
        </div>
      </section>
    </div>
  );
};
