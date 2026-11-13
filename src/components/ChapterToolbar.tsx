import React from 'react';
import { Search, BookOpen, Check } from 'lucide-react';
import { PAGES_LIST } from '../data/moduloData.ts';

interface ChapterToolbarProps {
  currentPage: number;
  visitedPages: number[];
  onSelectPage: (pageNumber: number) => void;
  onOpenSearch: () => void;
  isContinuousMode: boolean;
  onToggleContinuousMode: () => void;
}

const COMPACT_LABELS: Record<number, string> = {
  1: 'Início',
  2: 'Imagem',
  3: 'Prompts',
  4: 'Ativ. Img.',
  5: 'Áudio',
  6: 'Ativ. Áudio',
  7: 'Vídeo',
  8: 'Ética',
  9: 'Recursos',
};

export const ChapterToolbar: React.FC<ChapterToolbarProps> = ({
  currentPage,
  visitedPages,
  onSelectPage,
  onOpenSearch,
  isContinuousMode,
  onToggleContinuousMode,
}) => {
  return (
    <div className="bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2.5">
        {/* 9-Page Chapter Stepper */}
        <div
          role="navigation"
          aria-label="Páginas do Módulo 3"
          className="flex items-center gap-0.5 overflow-x-auto pb-1 xl:pb-0 min-w-0"
        >
          {PAGES_LIST.map((page) => {
            const isActive = !isContinuousMode && currentPage === page.number;
            const isVisited = visitedPages.includes(page.number);
            const label = COMPACT_LABELS[page.number] || page.shortTitle;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => {
                  if (isContinuousMode) onToggleContinuousMode();
                  onSelectPage(page.number);
                }}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`${String(page.number).padStart(2, '0')} ${page.shortTitle}`}
                className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                  isActive
                    ? 'bg-zinc-900 text-white font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <span className="font-mono tabular-nums text-[11px] opacity-75">
                  {String(page.number).padStart(2, '0')}
                </span>
                <span>{label}</span>
                {isVisited && !isActive && (
                  <Check className="w-3 h-3 text-teal-700 shrink-0" aria-label="Consultada" />
                )}
              </button>
            );
          })}
        </div>

        {/* Utility Actions */}
        <div className="flex items-center justify-end gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[36px]"
          >
            <Search className="w-3.5 h-3.5 text-zinc-500" />
            <span>Pesquisar</span>
            <kbd className="hidden sm:inline font-mono text-[10px] text-zinc-500 ml-0.5">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={onToggleContinuousMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
              isContinuousMode
                ? 'bg-blue-50 text-blue-800 border-blue-200 font-semibold'
                : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isContinuousMode ? 'Modo Páginas' : 'Leitura Contínua'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
