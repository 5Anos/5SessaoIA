import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square } from 'lucide-react';
import {
  ETHICS_SECTIONS,
  ETHICS_CHECKLIST,
} from '../data/moduloData.ts';

export const Page8EticaSeguranca: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          ÉTICA, SEGURANÇA E LEGISLAÇÃO
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Orientações jurídicas, éticas e pedagógicas para docentes sobre proteção de dados, menores, direitos de autor, Regulamento (UE) 2024/1689 e supervisão humana.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ETHICS_SECTIONS.map((sec) => (
          <article
            key={sec.id}
            className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-4"
          >
            <div className="space-y-1">
              <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                {sec.number}.
              </div>
              <h2 className="font-display text-xl font-bold text-zinc-900">{sec.title}</h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
              {sec.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2.5 border-b border-zinc-200 pb-4">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0" aria-hidden="true" />
          <h2 className="font-display text-xl font-bold text-zinc-900">
            Lista de verificação antes de utilizar uma ferramenta
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ETHICS_CHECKLIST.map((question, idx) => {
            const isChecked = Boolean(checkedItems[idx]);
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className={`w-full text-left flex items-start gap-3 p-3.5 rounded-xl border text-sm transition-colors ${
                    isChecked
                      ? 'bg-teal-50/70 border-teal-200 text-teal-950'
                      : 'bg-[#f8f8f6] border-zinc-200/80 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  )}
                  <span>{question}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
