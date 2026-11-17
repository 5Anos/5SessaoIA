import React from 'react';
import { Image as ImageIcon, Mic } from 'lucide-react';
import { HeroEdTechIllustration } from '../components/HeroEdTechIllustration.tsx';

export const Page1VisaoGeral: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf9fe] via-white to-[#f1edfe] min-h-[calc(100vh-11.5rem)] flex items-center">
      {/* Flowing soft lavender and periwinkle background waves */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
        className="pointer-events-none select-none absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="hero-wave-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.6" />
            <stop offset="55%" stopColor="#c4b5fd" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="hero-wave-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#c7d2fe" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.58" />
          </linearGradient>
        </defs>

        {/* Soft upper-right wave (desktop) */}
        <path
          d="M720,0 L1440,0 L1440,210 C1310,165 1175,188 1030,208 C885,228 790,115 720,0 Z"
          fill="url(#hero-wave-top)"
          className="hidden lg:block"
        />
        {/* Soft flowing bottom wave */}
        <path
          d="M0,662 C260,602 470,694 740,682 C1020,670 1230,582 1440,608 L1440,720 L0,720 Z"
          fill="url(#hero-wave-bottom)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-stretch gap-4 sm:gap-5">
              <span
                aria-hidden="true"
                className="w-1.5 rounded-full bg-gradient-to-b from-[#6d28d9] to-[#4f46e5] shrink-0 my-1"
              />
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#0d153e] leading-[1.08] max-w-xl">
                Inteligência Artificial{' '}
                <span className="sm:block">na Educação</span>
              </h1>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-xl bg-[#f1ebfe] border border-violet-200/75 shadow-[0_2px_12px_rgba(91,33,182,0.05)]">
                <span className="inline-flex items-center gap-2 text-[#4338ca]" aria-hidden="true">
                  <ImageIcon className="w-5 h-5" />
                  <Mic className="w-5 h-5" />
                </span>
                <span aria-hidden="true" className="w-px h-5 bg-violet-300/80" />
                <p className="font-display text-base sm:text-xl font-bold text-[#4c28d9] tracking-tight">
                  Ferramentas de Imagem e Áudio
                </p>
              </div>
            </div>

            <div className="space-y-5 text-base sm:text-[17px] text-[#1e243d] leading-[1.7] max-w-xl">
              <p>
                A Inteligência Artificial abre novas possibilidades para a criação de recursos educativos, permitindo transformar ideias em{' '}
                <strong className="font-semibold text-[#4c28d9]">
                  imagens e conteúdos áudio
                </strong>{' '}
                que enriquecem as experiências de aprendizagem.
              </p>
              <p>
                Neste módulo, os professores poderão conhecer ferramentas de IA, explorar as suas funcionalidades, experimentar prompts e desenvolver propostas práticas para integrar estas tecnologias nas atividades de sala de aula.
              </p>
            </div>
          </div>

          {/* Right Ed-Tech Illustration */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <HeroEdTechIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

