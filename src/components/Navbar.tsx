import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PAGES_LIST, NavGroup } from '../data/moduloData.ts';

interface NavbarProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
  isContinuousMode: boolean;
  onExitContinuousMode: () => void;
}

const TOP_NAV_ITEMS: {
  id: NavGroup;
  label: string;
  targetPage: number;
}[] = [
  { id: 'inicio', label: 'Início', targetPage: 1 },
  { id: 'imagem', label: 'Imagem', targetPage: 2 },
  { id: 'prompts', label: 'Prompts', targetPage: 3 },
  { id: 'atividades', label: 'Atividades', targetPage: 4 },
  { id: 'audio', label: 'Áudio', targetPage: 5 },
  { id: 'video', label: 'Vídeo', targetPage: 7 },
  { id: 'etica', label: 'Ética', targetPage: 8 },
  { id: 'bibliografia', label: 'Bibliografia', targetPage: 9 },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onSelectPage,
  isContinuousMode,
  onExitContinuousMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeInfo = PAGES_LIST.find((p) => p.number === currentPage) || PAGES_LIST[0];

  const handleNavClick = (pageNumber: number) => {
    if (isContinuousMode) onExitContinuousMode();
    onSelectPage(pageNumber);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 md:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick(1)}
          className="font-display text-sm sm:text-lg font-bold tracking-tight text-zinc-900 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded-sm"
        >
          Módulo 3 · IA na Educação
        </button>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6"
        >
          {TOP_NAV_ITEMS.map((item) => {
            const isActive = !isContinuousMode && activeInfo.navGroup === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.targetPage)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-5 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
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

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de páginas' : 'Abrir menu de páginas'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navegação móvel do módulo"
          className="lg:hidden border-t border-zinc-200 bg-white px-4 py-3 space-y-1"
        >
          {PAGES_LIST.map((page) => {
            const isActive = !isContinuousMode && currentPage === page.number;
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
                  {String(page.number).padStart(2, '0')}. {page.shortTitle}
                </span>
                <span className="text-xs text-zinc-400 shrink-0 ml-2">{page.category}</span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
