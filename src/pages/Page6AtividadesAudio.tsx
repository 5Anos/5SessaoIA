import React, { useRef, useState } from 'react';
import {
  Target,
  ListChecks,
  Award,
  Copy,
  Check,
} from 'lucide-react';
import { AUDIO_ACTIVITIES } from '../data/moduloData.ts';

export const Page6AtividadesAudio: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(AUDIO_ACTIVITIES[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  const activeActivity =
    AUDIO_ACTIVITIES.find((a) => a.id === selectedActivityId) || AUDIO_ACTIVITIES[0];

  const handleSelectActivity = (id: string) => {
    setSelectedActivityId(id);
    setCopiedPrompt(false);
    requestAnimationFrame(() => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < 72 || rect.top > window.innerHeight * 0.65) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const markCopied = () => {
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const fallbackCopy = (text: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      markCopied();
    } catch {
      // noop
    }
  };

  const handleCopyPrompt = (text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  return (
    <div className="space-y-10">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE ÁUDIO
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
          Propostas didáticas para narração histórica, produção de podcast escolar e dobragem multilingue.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-zinc-50 text-xs font-semibold text-zinc-700">
            Planos de Áudio
          </div>
          {AUDIO_ACTIVITIES.map((act, index) => {
            const isSelected = act.id === selectedActivityId;
            const cleanTitle = act.title.replace(/^AC?TIVIDADE:\s*/i, '');
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => handleSelectActivity(act.id)}
                className={`w-full text-left px-5 py-4 transition-colors flex flex-col gap-1.5 ${
                  isSelected ? 'bg-amber-50/70' : 'hover:bg-zinc-50'
                }`}
              >
                <div className="text-xs">
                  <span
                    className={`font-mono font-semibold tabular-nums ${
                      isSelected ? 'text-amber-800' : 'text-zinc-400'
                    }`}
                  >
                    Atividade {index + 1}
                  </span>
                </div>
                <div
                  className={`font-display text-sm font-bold leading-snug ${
                    isSelected ? 'text-amber-950' : 'text-zinc-900'
                  }`}
                >
                  {cleanTitle}
                </div>
              </button>
            );
          })}
        </aside>

        <article
          ref={articleRef}
          className="lg:col-span-8 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-8 scroll-mt-24"
        >
          <div className="border-b border-zinc-200 pb-6">
            <h2 className="font-display text-2xl font-bold text-zinc-900">
              {activeActivity.title}
            </h2>
          </div>

          {(activeActivity.recommendedTool || activeActivity.freeAlternative || activeActivity.prompt) && (
            <section className="space-y-4">
              {(activeActivity.recommendedTool || activeActivity.freeAlternative) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80">
                  {activeActivity.recommendedTool && (
                    <div>
                      <span className="font-semibold text-zinc-900">Ferramenta recomendada: </span>
                      <span className="text-zinc-700">{activeActivity.recommendedTool}</span>
                    </div>
                  )}
                  {activeActivity.freeAlternative && (
                    <div>
                      <span className="font-semibold text-zinc-900">Alternativa gratuita: </span>
                      <span className="text-zinc-700">{activeActivity.freeAlternative}</span>
                    </div>
                  )}
                </div>
              )}

              {activeActivity.prompt && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-zinc-900">Prompt completo</span>
                    <button
                      type="button"
                      onClick={() => handleCopyPrompt(activeActivity.prompt!)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors ${
                        copiedPrompt ? 'bg-teal-700' : 'bg-zinc-900 hover:bg-blue-700'
                      }`}
                    >
                      {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPrompt ? 'Copiado' : 'Copiar Prompt'}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all">
                    {activeActivity.prompt}
                  </p>
                </div>
              )}
            </section>
          )}

          <section
            className={`space-y-3 ${
              activeActivity.recommendedTool || activeActivity.freeAlternative || activeActivity.prompt
                ? 'pt-4 border-t border-zinc-200'
                : ''
            }`}
          >
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Target className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
              <span>Objetivos de aprendizagem:</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-700">
              {activeActivity.objetivos.map((obj, i) => (
                <li
                  key={i}
                  className="py-2 px-3 bg-[#f8f8f6] rounded-lg border border-zinc-200/70 leading-relaxed"
                >
                  {obj}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 pt-6 border-t border-zinc-200">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <ListChecks className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
              <span>Como o Professor Implementa:</span>
            </h3>

            <div className="divide-y divide-zinc-200">
              {activeActivity.implementacao.map((item, i) => (
                <div key={i} className="py-5 first:pt-2 last:pb-0 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-amber-800">
                      {item.etapa}
                    </span>
                    <span aria-hidden="true" className="text-zinc-300">·</span>
                    <h4 className="font-display text-base font-bold text-zinc-900">
                      {item.titulo}
                    </h4>
                  </div>

                  <p className="text-sm text-zinc-700 leading-relaxed">{item.descricao}</p>

                  {item.pontos && item.pontos.length > 0 && (
                    <ul className="space-y-1.5 pl-1 text-sm text-zinc-700">
                      {item.pontos.map((ponto, pIdx) => (
                        <li key={pIdx} className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-zinc-400">·</span>
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.ferramentas && item.ferramentas.length > 0 && (
                    <div className="pt-2 space-y-1.5">
                      <div className="text-xs font-semibold text-zinc-500">
                        Ferramentas associadas:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.ferramentas.map((tool, tIdx) => (
                          <li
                            key={tIdx}
                            className="text-xs text-zinc-800 bg-[#f8f8f6] px-3 py-2 rounded-lg border border-zinc-200/80"
                          >
                            · {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-zinc-200 space-y-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Award className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
              <span>Avaliação:</span>
            </h3>

            {Array.isArray(activeActivity.avaliacao.entrega) ? (
              <div className="text-sm text-zinc-800 bg-[#f8f8f6] p-3.5 rounded-xl border border-zinc-200/80 space-y-1.5">
                <div className="font-semibold text-zinc-900">O aluno entrega:</div>
                <ul className="space-y-1 text-zinc-700">
                  {activeActivity.avaliacao.entrega.map((item, idx) => (
                    <li key={idx} className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-zinc-400">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-zinc-800 bg-[#f8f8f6] p-3.5 rounded-xl border border-zinc-200/80">
                <strong className="font-semibold text-zinc-900">O aluno entrega: </strong>
                {activeActivity.avaliacao.entrega}
              </p>
            )}

            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-zinc-500">
                Avaliação das Aprendizagens:
              </div>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {activeActivity.avaliacao.itens.map((it, i) => (
                  <li key={i} className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-zinc-400">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
