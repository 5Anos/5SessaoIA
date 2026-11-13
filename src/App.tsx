import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { ChapterToolbar } from './components/ChapterToolbar.tsx';
import { PageFooter } from './components/PageFooter.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { PdfModal } from './components/PdfModal.tsx';
import { Page1VisaoGeral } from './pages/Page1VisaoGeral.tsx';
import { Page2FerramentasImagem } from './pages/Page2FerramentasImagem.tsx';
import { Page3PromptsImagem } from './pages/Page3PromptsImagem.tsx';
import { Page4AtividadesImagem } from './pages/Page4AtividadesImagem.tsx';
import { Page5FerramentasAudio } from './pages/Page5FerramentasAudio.tsx';
import { Page6AtividadesAudio } from './pages/Page6AtividadesAudio.tsx';
import { Page7FerramentasVideo } from './pages/Page7FerramentasVideo.tsx';
import { Page8EticaSeguranca } from './pages/Page8EticaSeguranca.tsx';
import { Page9Bibliografia } from './pages/Page9Bibliografia.tsx';

const VISITED_KEY = 'm3_visited_pages_v1';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const hash = window.location.hash;
    const match = hash.match(/#pagina-(\d+)/);
    if (match) {
      const pageNum = parseInt(match[1], 10);
      if (pageNum >= 1 && pageNum <= 9) return pageNum;
    }
    return 1;
  });

  const [visitedPages, setVisitedPages] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem(VISITED_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? Array.from(new Set([1, ...parsed])) : [1];
    } catch {
      return [1];
    }
  });

  const [isContinuousMode, setIsContinuousMode] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isPdfOpen, setIsPdfOpen] = useState<boolean>(false);

  // Track visited pages for teacher progress
  useEffect(() => {
    setVisitedPages((prev) => {
      if (prev.includes(currentPage)) return prev;
      const next = [...prev, currentPage];
      try {
        localStorage.setItem(VISITED_KEY, JSON.stringify(next));
      } catch {
        // noop
      }
      return next;
    });
  }, [currentPage]);

  // Sync URL hash and handle browser back/forward
  useEffect(() => {
    if (!isContinuousMode && window.location.hash !== `#pagina-${currentPage}`) {
      window.location.hash = `#pagina-${currentPage}`;
    }

    const handleHashChange = () => {
      const match = window.location.hash.match(/#pagina-(\d+)/);
      if (match) {
        const pageNum = parseInt(match[1], 10);
        if (pageNum >= 1 && pageNum <= 9) {
          setCurrentPage(pageNum);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage, isContinuousMode]);

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
      if (!isContinuousMode) {
        if (e.key === 'ArrowRight' && currentPage < 9) {
          setCurrentPage((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft' && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isContinuousMode]);

  const handleSelectPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f6] text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenPdf={() => setIsPdfOpen(true)}
        isContinuousMode={isContinuousMode}
        onExitContinuousMode={() => setIsContinuousMode(false)}
      />

      <ChapterToolbar
        currentPage={currentPage}
        visitedPages={visitedPages}
        onSelectPage={handleSelectPage}
        onOpenSearch={() => setIsSearchOpen(true)}
        isContinuousMode={isContinuousMode}
        onToggleContinuousMode={() => {
          setIsContinuousMode((prev) => !prev);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {isContinuousMode ? (
          <div className="space-y-16">
            <div className="px-5 py-4 rounded-xl bg-white border border-zinc-200 text-xs sm:text-sm text-zinc-700 flex flex-wrap items-center justify-between gap-3">
              <div>
                <strong className="font-semibold text-zinc-900">Leitura Contínua: </strong>
                A visualizar todas as 9 páginas do Módulo 3 em sequência.
              </div>
              <button
                type="button"
                onClick={() => setIsContinuousMode(false)}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Voltar a Página a Página
              </button>
            </div>

            <section id="pagina-1">
              <Page1VisaoGeral
                onNavigateToPage={(n) => {
                  setIsContinuousMode(false);
                  handleSelectPage(n);
                }}
                onOpenPdf={() => setIsPdfOpen(true)}
              />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-2">
              <Page2FerramentasImagem />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-3">
              <Page3PromptsImagem />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-4">
              <Page4AtividadesImagem />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-5">
              <Page5FerramentasAudio />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-6">
              <Page6AtividadesAudio />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-7">
              <Page7FerramentasVideo />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-8">
              <Page8EticaSeguranca />
            </section>
            <hr className="border-zinc-200" />

            <section id="pagina-9">
              <Page9Bibliografia onOpenPdf={() => setIsPdfOpen(true)} />
            </section>
          </div>
        ) : (
          <div>
            {currentPage === 1 && (
              <Page1VisaoGeral
                onNavigateToPage={handleSelectPage}
                onOpenPdf={() => setIsPdfOpen(true)}
              />
            )}
            {currentPage === 2 && <Page2FerramentasImagem />}
            {currentPage === 3 && <Page3PromptsImagem />}
            {currentPage === 4 && <Page4AtividadesImagem />}
            {currentPage === 5 && <Page5FerramentasAudio />}
            {currentPage === 6 && <Page6AtividadesAudio />}
            {currentPage === 7 && <Page7FerramentasVideo />}
            {currentPage === 8 && <Page8EticaSeguranca />}
            {currentPage === 9 && (
              <Page9Bibliografia onOpenPdf={() => setIsPdfOpen(true)} />
            )}
          </div>
        )}
      </main>

      <PageFooter
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        isContinuousMode={isContinuousMode}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToPage={(pageNum) => {
          setIsContinuousMode(false);
          handleSelectPage(pageNum);
        }}
      />

      <PdfModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />
    </div>
  );
}
