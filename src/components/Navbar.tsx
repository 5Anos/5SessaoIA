import React, { useState } from 'react';
import {
  AudioWaveform,
  BookOpen,
  Brain,
  Headphones,
  Home,
  Image as ImageIcon,
  Menu,
  PenLine,
  Presentation,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { PAGES_LIST } from '../data/moduloData.ts';

interface NavbarProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
  onOpenSearch: () => void;
}

const TOP_NAV_ITEMS: {
  pageNumber: number;
  label: string;
  Icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}[] = [
  { pageNumber: 1, label: 'Início', Icon: Home },
  { pageNumber: 2, label: 'Imagem', Icon: ImageIcon },
  { pageNumber: 3, label: 'Prompts', Icon: PenLine },
  { pageNumber: 4, label: 'Ativ. Imagem', Icon: Presentation },
  { pageNumber: 5, label: 'Áudio', Icon: Headphones },
  { pageNumber: 6, label: 'Ativ. Áudio', Icon: AudioWaveform },
  { pageNumber: 7, label: 'Ética', Icon: ShieldCheck },
  { pageNumber: 8, label: 'Bibliografia', Icon: BookOpen },
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 xl:gap-4">
        <button
          type="button"
          onClick={() => handleNavClick(1)}
          className="inline-flex items-center gap-2.5 font-display text-sm sm:text-base xl:text-[17px] font-bold tracking-tight text-[#0d153e] hover:text-[#4f46e5] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f46e5] rounded-sm"
        >
          <Brain className="w-6 h-6 text-[#4f46e5] shrink-0" aria-hidden={true} />
          <span>Módulo 3 · IA na Educação</span>
        </button>

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
        >
          {TOP_NAV_ITEMS.map(({ pageNumber, label, Icon }) => {
            const isActive = currentPage === pageNumber;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => handleNavClick(pageNumber)}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center gap-1.5 px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-[13px] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white font-semibold shadow-sm shadow-indigo-500/20'
                    : 'text-[#111936] hover:text-[#4f46e5] hover:bg-indigo-50/75 font-medium'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? 'text-white' : 'text-[#4f46e5]'
                  }`}
                  aria-hidden={true}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Pesquisar no Módulo 3"
            className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 text-xs font-medium text-[#1e1b4b] bg-indigo-50/80 hover:bg-indigo-100/80 border border-indigo-100 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[36px]"
          >
            <Search className="w-3.5 h-3.5 text-[#4f46e5]" />
            <span className="hidden sm:inline lg:hidden xl:inline">Pesquisar</span>
            <kbd className="hidden xl:inline font-mono text-[10px] text-indigo-600/80 ml-0.5">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de páginas' : 'Abrir menu de páginas'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-indigo-100 text-[#1e1b4b] hover:bg-indigo-50 transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Navegação móvel do módulo"
          className="lg:hidden border-t border-indigo-100 bg-white px-4 py-3 space-y-1"
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
                    ? 'bg-[#f1ebfe] text-[#4338ca] font-semibold'
                    : 'text-[#1e243d] hover:bg-indigo-50/60'
                }`}
              >
                <span className="truncate">{page.shortTitle}</span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
