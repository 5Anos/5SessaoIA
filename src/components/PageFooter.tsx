import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PAGES_LIST } from '../data/moduloData.ts';

interface PageFooterProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
  isContinuousMode: boolean;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  currentPage,
  onSelectPage,
  isContinuousMode,
}) => {
  const totalPages = PAGES_LIST.length;
  const prevInfo = currentPage > 1 ? PAGES_LIST.find((p) => p.number === currentPage - 1) : null;
  const nextInfo = currentPage < totalPages ? PAGES_LIST.find((p) => p.number === currentPage + 1) : null;

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      {!isContinuousMode && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {prevInfo ? (
              <button
                type="button"
                onClick={() => onSelectPage(prevInfo.number)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 hover:border-zinc-400 bg-white transition-colors text-left group min-h-[48px]"
              >
                <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500 tabular-nums">
                    Página anterior · {prevInfo.number}/{totalPages}
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 truncate">
                    {prevInfo.shortTitle}
                  </div>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            <div className="flex items-center justify-center gap-1" aria-label="Paginação rápida">
              {PAGES_LIST.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectPage(p.number)}
                  aria-label={`Ir para a página ${p.number}: ${p.title}`}
                  aria-current={currentPage === p.number ? 'page' : undefined}
                  className={`w-9 h-9 rounded-lg text-xs font-mono tabular-nums font-semibold transition-colors ${
                    currentPage === p.number
                      ? 'bg-blue-700 text-white'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {p.number}
                </button>
              ))}
            </div>

            {nextInfo ? (
              <button
                type="button"
                onClick={() => onSelectPage(nextInfo.number)}
                className="flex items-center justify-end gap-3 px-4 py-3 rounded-xl border border-zinc-200 hover:border-blue-700 bg-white transition-colors text-right group min-h-[48px]"
              >
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500 tabular-nums">
                    Próxima página · {nextInfo.number}/{totalPages}
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 group-hover:text-blue-700 truncate transition-colors">
                    {nextInfo.shortTitle}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-700 shrink-0 transition-colors" />
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      )}

      <div className="border-t border-zinc-200 bg-[#f8f8f6] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-xs text-zinc-600 leading-relaxed">
            Recurso de apoio à formação de docentes sobre ferramentas de inteligência artificial na educação. A informação sobre plataformas, funcionalidades e planos gratuitos é dinâmica e deve ser confirmada nas fontes oficiais.
          </p>
          <p className="text-xs text-zinc-500">
            Fonte original: Modulo3_FerramentasIA_2 · Autoria: Carla Oliveira (23 de fevereiro de 2026) · Revisão editorial: 13 de novembro de 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
