import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { Page1VisaoGeral } from './pages/Page1VisaoGeral.tsx';
import { Page2FerramentasImagem } from './pages/Page2FerramentasImagem.tsx';
import { Page3PromptsImagem } from './pages/Page3PromptsImagem.tsx';
import { Page4AtividadesImagem } from './pages/Page4AtividadesImagem.tsx';
import { Page5FerramentasAudio } from './pages/Page5FerramentasAudio.tsx';
import { Page6AtividadesAudio } from './pages/Page6AtividadesAudio.tsx';
import { Page8EticaSeguranca } from './pages/Page8EticaSeguranca.tsx';
import { Page9Bibliografia } from './pages/Page9Bibliografia.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const hash = window.location.hash;
    const match = hash.match(/#pagina-(\d+)/);
    if (match) {
      const pageNum = parseInt(match[1], 10);
      if (pageNum >= 1 && pageNum <= 8) return pageNum;
    }
    return 1;
  });

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync URL hash and handle browser back/forward
  useEffect(() => {
    if (window.location.hash !== `#pagina-${currentPage}`) {
      window.location.hash = `#pagina-${currentPage}`;
    }

    const handleHashChange = () => {
      const match = window.location.hash.match(/#pagina-(\d+)/);
      if (match) {
        const pageNum = parseInt(match[1], 10);
        if (pageNum >= 1 && pageNum <= 8) {
          setCurrentPage(pageNum);
          window.scrollTo({ top: 0 });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }
      if (e.key === 'ArrowRight' && currentPage < 8) {
        setCurrentPage((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const handleSelectPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7fc] text-[#0d153e] selection:bg-indigo-100 selection:text-indigo-950">
      <Navbar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main
        className={
          currentPage === 1
            ? 'flex-1 w-full flex flex-col'
            : 'flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'
        }
      >
        <div className={currentPage === 1 ? 'flex-1 flex flex-col' : undefined}>
          {currentPage === 1 && <Page1VisaoGeral />}
          {currentPage === 2 && <Page2FerramentasImagem />}
          {currentPage === 3 && <Page3PromptsImagem />}
          {currentPage === 4 && <Page4AtividadesImagem />}
          {currentPage === 5 && <Page5FerramentasAudio />}
          {currentPage === 6 && <Page6AtividadesAudio />}
          {currentPage === 7 && <Page8EticaSeguranca />}
          {currentPage === 8 && <Page9Bibliografia />}
        </div>
      </main>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToPage={handleSelectPage}
      />
    </div>
  );
}
