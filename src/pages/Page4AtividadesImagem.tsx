import React, { useRef, useState } from 'react';
import {
  Target,
  ListChecks,
  Award,
  ExternalLink,
  Copy,
  Check,
  Lightbulb,
  SlidersHorizontal,
  Package,
} from 'lucide-react';
import { IMAGE_ACTIVITIES, type ImageActivityTool } from '../data/moduloData.ts';

function renderDescriptionWithToolLinks(text: string, ferramentas?: ImageActivityTool[]) {
  if (!ferramentas || ferramentas.length === 0) {
    return text;
  }

  const escaped = ferramentas.map((t) => t.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    const matchedTool = ferramentas.find((t) => t.name === part);
    if (!matchedTool) {
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    }
    return (
      <a
        key={idx}
        href={matchedTool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2"
      >
        <span>{matchedTool.name}</span>
        <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
      </a>
    );
  });
}

export const Page4AtividadesImagem: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(IMAGE_ACTIVITIES[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  const activeActivity =
    IMAGE_ACTIVITIES.find((a) => a.id === selectedActivityId) || IMAGE_ACTIVITIES[0];

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
    <div className="space-y-8">
      <header className="border-b border-zinc-200 pb-5">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE IMAGEM
        </h1>
      </header>

      <nav
        aria-label="Selecionar atividade com imagem"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
      >
        {IMAGE_ACTIVITIES.map((act, index) => {
          const isSelected = act.id === selectedActivityId;
          const cleanTitle = act.title.replace(/^AC?TIVIDADE:\s*/i, '');
          return (
            <button
              key={act.id}
              type="button"
              onClick={() => handleSelectActivity(act.id)}
              className={`text-left px-4 py-3.5 rounded-xl border transition-colors flex flex-col gap-1 ${
                isSelected
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900'
              }`}
            >
              <span
                className={`font-mono text-xs font-semibold tabular-nums ${
                  isSelected ? 'text-amber-800' : 'text-zinc-400'
                }`}
              >
                Atividade {index + 1}
              </span>
              <span className="font-display text-sm font-bold leading-snug">
                {cleanTitle}
              </span>
            </button>
          );
        })}
      </nav>

      <article
        ref={articleRef}
        className="bg-white rounded-2xl border border-zinc-200 overflow-clip scroll-mt-24"
      >
        <div className="bg-amber-100/85 border-b border-amber-200 px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-900">
              {activeActivity.title}
            </h2>
            {activeActivity.subtitle && (
              <span className="text-sm font-medium text-amber-950/80">
                ({activeActivity.subtitle})
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-amber-950/80 whitespace-nowrap shrink-0">
            Duração estimada: {activeActivity.estimatedDuration}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 items-start">
          <section className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="inline-flex items-center gap-2 text-base font-bold text-zinc-900">
                <ListChecks className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Como o Professor Implementa</span>
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

                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {renderDescriptionWithToolLinks(item.descricao, item.ferramentas)}
                    </p>

                    {item.pontos && item.pontos.length > 0 && (
                      <ul className="space-y-1.5 pl-1 text-sm text-zinc-700">
                        {item.pontos.map((ponto, pIdx) => (
                          <li key={pIdx} className="flex items-baseline gap-2 leading-relaxed">
                            <span className="font-mono text-xs text-zinc-400">·</span>
                            <span>{ponto}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.exemplos && item.exemplos.length > 0 && (
                      <div className="bg-[#f8f8f6] rounded-xl border border-zinc-200/80 p-3.5 space-y-1.5">
                        {item.exemplosTitle && (
                          <div className="text-xs font-semibold text-zinc-700">
                            {item.exemplosTitle}
                          </div>
                        )}
                        <ul className="space-y-1 text-sm text-zinc-700">
                          {item.exemplos.map((ex, eIdx) => (
                            <li key={eIdx} className="flex items-baseline gap-2 leading-relaxed">
                              <span className="font-mono text-xs text-zinc-400">·</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.nota && (
                      <p className="text-xs sm:text-sm text-zinc-600 bg-zinc-50 border border-zinc-200/80 rounded-xl px-3.5 py-2.5 leading-relaxed">
                        {item.nota}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-zinc-200 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-zinc-900">
                  Exemplo de prompt pronto a usar
                </h3>
                <button
                  type="button"
                  onClick={() => handleCopyPrompt(activeActivity.prompt)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0 ${
                    copiedPrompt ? 'bg-teal-700' : 'bg-zinc-900 hover:bg-blue-700'
                  }`}
                >
                  {copiedPrompt ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedPrompt ? 'Copiado' : 'Copiar Prompt'}</span>
                </button>
              </div>
              <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all whitespace-pre-line">
                {activeActivity.prompt}
              </p>

              <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-blue-950 leading-relaxed">
                <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-blue-700" aria-hidden="true" />
                <div>
                  <strong className="font-semibold text-blue-900">Dica para o Prompt: </strong>
                  {activeActivity.promptTip}
                </div>
              </div>

              <div className="bg-[#f8f8f6] border border-zinc-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <SlidersHorizontal
                  className="w-4 h-4 shrink-0 mt-0.5 text-amber-800"
                  aria-hidden="true"
                />
                <div>
                  <strong className="font-semibold text-zinc-900">
                    Adaptação aos objetivos:{' '}
                  </strong>
                  {activeActivity.promptAdaptation}
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-zinc-200 space-y-2.5">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                <Package className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Preparação e materiais para a aula</span>
              </h3>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {activeActivity.materials.map((mat, mIdx) => (
                  <li key={mIdx} className="flex items-baseline gap-2 leading-relaxed">
                    <span className="font-mono text-xs text-zinc-400">·</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <section className="bg-[#f8f8f6] rounded-xl border border-zinc-200/90 p-5 sm:p-6 space-y-3">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                <Target className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Objetivos de aprendizagem</span>
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700">
                {activeActivity.objetivos.map((obj, i) => (
                  <li key={i} className="flex items-baseline gap-2 leading-relaxed">
                    <span className="font-mono text-xs text-zinc-400">·</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#f8f8f6] rounded-xl border border-zinc-200/90 p-5 sm:p-6 space-y-4">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                <Award className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Avaliação</span>
              </h3>

              {activeActivity.avaliacao.entrega && activeActivity.avaliacao.entrega.length > 0 && (
                <div className="space-y-1.5 pb-3 border-b border-zinc-200/80">
                  <div className="text-xs font-semibold text-zinc-900">O aluno entrega:</div>
                  <ul className="space-y-1.5 text-sm text-zinc-700">
                    {activeActivity.avaliacao.entrega.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2 leading-relaxed">
                        <span className="font-mono text-xs text-zinc-400">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-zinc-900">
                  Avaliação das Aprendizagens
                </div>
                <ul className="space-y-1.5 text-sm text-zinc-700">
                  {activeActivity.avaliacao.itens.map((it, i) => (
                    <li key={i} className="flex items-baseline gap-2 leading-relaxed">
                      <span className="font-mono text-xs text-zinc-400">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};
