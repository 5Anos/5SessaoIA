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
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#0d153e]/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-indigo-100 bg-[#f8f7fc]">
          <Search className="w-4 h-4 text-[#4f46e5] mr-3 shrink-0" />
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
            className="w-full bg-transparent text-[#0d153e] placeholder-[#7c849e] text-sm focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1.5 text-[#525b7a] hover:text-[#0d153e] rounded-lg hover:bg-indigo-100/60 mr-1"
              aria-label="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono font-medium text-[#4338ca] bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-[#525b7a]">
              <BookOpen className="w-8 h-8 mx-auto mb-2.5 text-indigo-300 stroke-1" />
              <p className="text-sm font-medium text-[#0d153e]">
                Pesquise no Módulo 3
              </p>
              <p className="text-xs text-[#646e8c] mt-1">
                Experimente: Designer, Canva, ElevenLabs, Audacity, RGPD, AI Act
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-[#525b7a]">
              <p className="text-sm font-medium text-[#0d153e]">
                Nenhum resultado encontrado para "{query}"
              </p>
              <p className="text-xs text-[#646e8c] mt-1">
                Tente termos como "Firefly", "Audacity", "ElevenLabs", "RGPD" ou "Coração".
              </p>
            </div>
          ) : (
            <div className="divide-y divide-indigo-100/70">
              {results.map((res, idx) => (
                <button
                  key={`${res.pageId}-${idx}`}
                  type="button"
                  onClick={() => {
                    onNavigateToPage(res.pageNumber);
                    onClose();
                  }}
                  className="w-full text-left py-3 px-2.5 hover:bg-indigo-50/60 transition-colors group flex items-start justify-between gap-3 rounded-lg"
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-[#525b7a]">
                      <span className="font-mono font-semibold text-[#4f46e5] tabular-nums">
                        Página {res.pageNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#0d153e] group-hover:text-[#4f46e5] transition-colors truncate">
                        {res.pageTitle}
                      </span>
                    </div>
                    <p className="text-xs text-[#3d4663] line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:text-[#4f46e5] shrink-0 mt-1 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
