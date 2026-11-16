import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { searchModuloContent, SearchResult } from '../data/moduloData.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPage: (pageNumber: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToPage,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (isOpen) {
      setResults(searchModuloContent(query));
    }
  }, [query, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pesquisar no Módulo 3"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-zinc-950/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-200 bg-zinc-50/70">
          <Search className="w-4 h-4 text-zinc-400 mr-3 shrink-0" />
          <label htmlFor="module-search-input" className="sr-only">
            Pesquisar no conteúdo do Módulo 3
          </label>
          <input
            id="module-search-input"
            type="text"
            placeholder="Pesquisar ferramentas, prompts, atividades ou referências..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-zinc-900 placeholder-zinc-400 text-sm focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-200/60 mr-1"
              aria-label="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-600 bg-zinc-200/70 hover:bg-zinc-300/80 rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-zinc-500">
              <BookOpen className="w-8 h-8 mx-auto mb-2.5 text-zinc-300 stroke-1" />
              <p className="text-sm font-medium text-zinc-700">
                Pesquise no Módulo 3
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Experimente: Designer, Canva, ElevenLabs, Audacity, RGPD, AI Act
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-zinc-500">
              <p className="text-sm font-medium text-zinc-800">
                Nenhum resultado encontrado para "{query}"
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Tente termos como "Firefly", "Audacity", "ElevenLabs", "RGPD" ou "Coração".
              </p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-100">
              {results.map((res, idx) => (
                <button
                  key={`${res.pageId}-${idx}`}
                  type="button"
                  onClick={() => {
                    onNavigateToPage(res.pageNumber);
                    onClose();
                  }}
                  className="w-full text-left py-3 px-2 hover:bg-zinc-50 transition-colors group flex items-start justify-between gap-3 rounded-lg"
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="font-mono font-semibold text-blue-700 tabular-nums">
                        Página {res.pageNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-zinc-900 group-hover:text-blue-700 transition-colors truncate">
                        {res.pageTitle}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-blue-700 shrink-0 mt-1 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
