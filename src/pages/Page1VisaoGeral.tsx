import React from 'react';
import { Image as ImageIcon, Mic } from 'lucide-react';
import { HeroEdTechIllustration } from '../components/HeroEdTechIllustration.tsx';
import { MODULE_OBJECTIVES } from '../data/moduloData.ts';

export const Page1VisaoGeral: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf9fe] via-white to-[#f1edfe] flex-1 flex flex-col justify-center">
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
                A Inteligência Artificial abre novas possibilidades para a criação de recursos educativos, permitindo transformar ideias em conteúdos de{' '}
                <strong className="font-semibold text-[#4c28d9]">
                  texto, imagem, áudio e vídeo
                </strong>{' '}
                que enriquecem as experiências de aprendizagem.
              </p>
              <p>
                Neste módulo, os professores poderão explorar ferramentas de IA para texto, imagem, áudio e vídeo, compreender as suas potencialidades, experimentar prompts e conceber propostas práticas para integrar estas tecnologias no trabalho docente.
              </p>
            </div>
          </div>

          {/* Right Ed-Tech Illustration */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <HeroEdTechIllustration />
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-indigo-200/60">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span
              aria-hidden="true"
              className="w-1 h-5 rounded-full bg-gradient-to-b from-[#6d28d9] to-[#4f46e5] shrink-0"
            />
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0d153e]">
              Objetivos de aprendizagem
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {MODULE_OBJECTIVES.map((objective, idx) => (
              <li
                key={objective}
                className="flex flex-col items-start gap-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.05)] p-5 sm:p-6 transition-colors hover:border-violet-200"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#f1ebfe] border border-violet-200/80 font-display text-sm font-bold text-[#4c28d9] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-[15px] sm:text-base font-medium text-[#1e243d] leading-relaxed">
                  {objective}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
