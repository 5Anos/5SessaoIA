import React, { useRef, useState } from 'react';
import {
  Target,
  ListChecks,
  Award,
  ExternalLink,
  AudioWaveform,
} from 'lucide-react';
import { AUDIO_ACTIVITIES } from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';

export const Page6AtividadesAudio: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(AUDIO_ACTIVITIES[0].id);
  const articleRef = useRef<HTMLElement>(null);

  const activeActivity =
    AUDIO_ACTIVITIES.find((a) => a.id === selectedActivityId) || AUDIO_ACTIVITIES[0];

  const handleSelectActivity = (id: string) => {
    setSelectedActivityId(id);
    requestAnimationFrame(() => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < 72 || rect.top > window.innerHeight * 0.65) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <div className="space-y-10">
      <PageHeader
        title="ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE ÁUDIO"
        Icon={AudioWaveform}
      />

      <nav
        aria-label="Selecionar atividade com áudio"
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        {AUDIO_ACTIVITIES.map((act, index) => {
          const isSelected = act.id === selectedActivityId;
          const cleanTitle = act.title.replace(/^AC?TIVIDADE:\s*/i, '');
          return (
            <button
              key={act.id}
              type="button"
              onClick={() => handleSelectActivity(act.id)}
              className={`text-left px-4 py-3.5 rounded-xl border transition-all flex flex-col gap-1 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-[#4f46e5] text-white shadow-sm shadow-indigo-500/20'
                  : 'bg-white border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/40 text-[#0d153e]'
              }`}
            >
              <span
                className={`font-mono text-xs font-bold tabular-nums ${
                  isSelected ? 'text-indigo-100' : 'text-[#4f46e5]'
                }`}
              >
                Atividade {index + 1}
              </span>
              <span
                className={`font-display text-sm font-bold leading-snug ${
                  isSelected ? 'text-white' : 'text-[#0d153e]'
                }`}
              >
                {cleanTitle}
              </span>
            </button>
          );
        })}
      </nav>

      <article
        ref={articleRef}
        className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_24px_rgba(79,70,229,0.045)] overflow-clip scroll-mt-24"
      >
        <div className="bg-gradient-to-r from-[#ede9fe] via-[#eef2ff] to-[#f5f3ff] border-b border-indigo-200/75 px-6 sm:px-8 py-5">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
            {activeActivity.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 items-start">
          <section className="lg:col-span-7 space-y-4">
            <h3 className="inline-flex items-center gap-2 text-base font-bold text-[#0d153e]">
              <ListChecks className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
              <span>Como o Professor Implementa:</span>
            </h3>

            <div className="divide-y divide-indigo-100/80">
              {activeActivity.implementacao.map((item, i) => (
                <div key={i} className="py-5 first:pt-2 last:pb-0 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#4f46e5]">
                      {item.etapa}
                    </span>
                    <span aria-hidden="true" className="text-indigo-200">
                      ·
                    </span>
                    <h4 className="font-display text-base font-bold text-[#0d153e]">
                      {item.titulo}
                    </h4>
                  </div>

                  {item.descricao && (
                    <p className="text-sm text-[#1e243d] leading-relaxed">{item.descricao}</p>
                  )}

                  {item.pontos && item.pontos.length > 0 && (
                    <ul className="space-y-1.5 pl-1 text-sm text-[#3d4663]">
                      {item.pontos.map((ponto, pIdx) => (
                        <li key={pIdx} className="flex items-baseline gap-2.5 leading-relaxed">
                          <span className="font-mono text-xs text-[#4f46e5]">·</span>
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.ferramentas && item.ferramentas.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-semibold text-[#525b7a]">
                        Ferramentas associadas:
                      </div>
                      <ul className="divide-y divide-indigo-100/75 border border-indigo-100 rounded-xl bg-[#f8f7fc]">
                        {item.ferramentas.map((tool, tIdx) => (
                          <li
                            key={tIdx}
                            className="text-xs text-[#1e243d] px-3.5 py-2.5 leading-relaxed"
                          >
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-semibold text-[#4f46e5] hover:text-[#4338ca] underline underline-offset-2"
                            >
                              <span>{tool.name}</span>
                              <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                            </a>
                            {tool.note && <span> {tool.note}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.notaFinal && (
                    <p className="text-sm text-[#3d4663] leading-relaxed pt-1">{item.notaFinal}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <aside className="lg:col-span-5 bg-gradient-to-br from-[#faf9fe] to-[#f1edfe]/70 rounded-2xl border border-indigo-100 p-6 divide-y divide-indigo-100 lg:sticky lg:top-24">
            <section className="pb-6 space-y-3">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Target className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
                <span>Objetivos de aprendizagem:</span>
              </h3>
              <ul className="space-y-2 text-sm text-[#1e243d]">
                {activeActivity.objetivos.map((obj, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 leading-relaxed">
                    <span className="font-mono text-xs text-[#4f46e5]">·</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-6 space-y-4">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Award className="w-4 h-4 text-[#6d28d9] shrink-0" aria-hidden="true" />
                <span>Avaliação:</span>
              </h3>

              <div className="space-y-1.5 pb-4 border-b border-indigo-100">
                <div className="text-xs font-semibold text-[#0d153e]">O aluno entrega:</div>
                <ul className="space-y-1.5 text-sm text-[#1e243d]">
                  {activeActivity.avaliacao.entrega.map((item, idx) => (
                    <li key={idx} className="flex items-baseline gap-2.5 leading-relaxed">
                      <span className="font-mono text-xs text-[#4f46e5]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#0d153e]">
                  Avaliação das Aprendizagens:
                </div>
                <ul className="space-y-1.5 text-sm text-[#1e243d]">
                  {activeActivity.avaliacao.itens.map((it, i) => (
                    <li key={i} className="flex items-baseline gap-2.5 leading-relaxed">
                      <span className="font-mono text-xs text-[#4f46e5]">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
};
