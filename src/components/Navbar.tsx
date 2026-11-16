import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { PAGES_LIST } from '../data/moduloData.ts';

interface NavbarProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
  onOpenSearch: () => void;
}

const TOP_NAV_ITEMS: {
  pageNumber: number;
  label: string;
}[] = [
  { pageNumber: 1, label: 'Início' },
  { pageNumber: 2, label: 'Imagem' },
  { pageNumber: 3, label: 'Prompts' },
  { pageNumber: 4, label: 'Ativ. Imagem' },
  { pageNumber: 5, label: 'Áudio' },
  { pageNumber: 6, label: 'Ativ. Áudio' },
  { pageNumber: 7, label: 'Ética' },
  { pageNumber: 8, label: 'Bibliografia' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onSelectPage,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageNumber: number) => {
    onSelectPage(pageNumber);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 xl:gap-6">
        <button
          type="button"
          onClick={() => handleNavClick(1)}
          className="font-display text-sm sm:text-base xl:text-lg font-bold tracking-tight text-zinc-900 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded-sm"
        >
          Módulo 3 · IA na Educação
        </button>

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-3.5 xl:gap-5"
        >
          {TOP_NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.pageNumber;
            return (
              <button
                key={item.pageNumber}
                type="button"
                onClick={() => handleNavClick(item.pageNumber)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-5 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                  isActive
                    ? 'text-blue-700 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-700 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Pesquisar no Módulo 3"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[36px]"
          >
            <Search className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden sm:inline">Pesquisar</span>
            <kbd className="hidden xl:inline font-mono text-[10px] text-zinc-500 ml-0.5">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de páginas' : 'Abrir menu de páginas'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Navegação móvel do módulo"
          className="lg:hidden border-t border-zinc-200 bg-white px-4 py-3 space-y-1"
        >
          {PAGES_LIST.map((page) => {
            const isActive = currentPage === page.number;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => handleNavClick(page.number)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition-colors min-h-[44px] ${
                  isActive
                    ? 'bg-blue-50 text-blue-800 font-semibold'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                <span className="truncate">
                  {page.shortTitle}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
