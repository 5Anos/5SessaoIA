import React, { useEffect, useRef, useState } from 'react';
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
  Presentation,
  Clock,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import { IMAGE_ACTIVITIES, type ImageActivityTool } from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';

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
        className="inline-flex items-center gap-0.5 font-semibold text-[#4f46e5] hover:text-[#4338ca] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 rounded-sm"
      >
        <span>{matchedTool.name}</span>
        <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
      </a>
    );
  });
}

export const Page4AtividadesImagem: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(IMAGE_ACTIVITIES[0].id);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [statusAnnouncement, setStatusAnnouncement] = useState<string>('');
  const resetTimerRef = useRef<number | null>(null);
  const articleRef = useRef<HTMLElement>(null);

  const activeActivity =
    IMAGE_ACTIVITIES.find((a) => a.id === selectedActivityId) || IMAGE_ACTIVITIES[0];

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const clearResetTimer = () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const handleSelectActivity = (id: string) => {
    clearResetTimer();
    setSelectedActivityId(id);
    setCopyStatus('idle');
    setStatusAnnouncement('');
    requestAnimationFrame(() => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < 72 || rect.top > window.innerHeight * 0.65) {
        const prefersReducedMotion =
          typeof window.matchMedia === 'function' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    });
  };

  const scheduleReset = () => {
    clearResetTimer();
    resetTimerRef.current = window.setTimeout(() => {
      setCopyStatus('idle');
      setStatusAnnouncement('');
      resetTimerRef.current = null;
    }, 3000);
  };

  const markCopied = () => {
    setCopyStatus('copied');
    setStatusAnnouncement('Prompt copiado para a área de transferência.');
    scheduleReset();
  };

  const markCopyError = () => {
    setCopyStatus('error');
    setStatusAnnouncement('Não foi possível copiar. Selecione e copie o texto manualmente.');
    scheduleReset();
  };

  const fallbackCopy = (text: string) => {
    let textarea: HTMLTextAreaElement | null = null;
    try {
      textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const succeeded = document.execCommand('copy');
      if (succeeded) {
        markCopied();
      } else {
        markCopyError();
      }
    } catch {
      markCopyError();
    } finally {
      if (textarea && textarea.parentNode) {
        textarea.parentNode.removeChild(textarea);
      }
    }
  };

  const handleCopyPrompt = (text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const copiedPrompt = copyStatus === 'copied';

  return (
    <div className="space-y-8">
      <PageHeader
        title="ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE IMAGEM"
        Icon={Presentation}
      />

      <section
        aria-labelledby="nota-utilizacao-responsavel-imagem"
        className="bg-[#faf9fe] border border-indigo-100 rounded-xl px-5 py-4 space-y-1.5"
      >
        <h2
          id="nota-utilizacao-responsavel-imagem"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]"
        >
          <ShieldCheck className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
          <span>Utilização responsável das ferramentas de IA</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#3d4663] leading-relaxed">
          Antes de utilizar uma ferramenta com os alunos, o professor deve verificar os requisitos de idade, as condições da conta, os termos de utilização e as orientações da escola. Quando os alunos não puderem utilizar diretamente a ferramenta, o professor poderá realizar a demonstração, envolvendo-os na construção dos prompts e na análise crítica dos resultados. Não introduza nomes, fotografias, vídeos ou outros dados pessoais dos alunos em ferramentas externas de IA. Utilize apenas imagens que tenha autorização para usar e confirme sempre a exatidão e a adequação dos resultados gerados.
        </p>
      </section>

      <div role="status" aria-live="polite" className="sr-only">
        {statusAnnouncement}
      </div>

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
              aria-pressed={isSelected}
              onClick={() => handleSelectActivity(act.id)}
              className={`text-left px-4 py-3.5 rounded-xl border transition-all flex flex-col gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 ${
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
        <div className="bg-gradient-to-r from-[#ede9fe] via-[#eef2ff] to-[#f5f3ff] border-b border-indigo-200/75 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0d153e]">
              {activeActivity.title}
            </h2>
            {activeActivity.subtitle && (
              <span className="text-sm font-semibold text-[#4338ca]">
                ({activeActivity.subtitle})
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338ca] whitespace-nowrap shrink-0">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Duração estimada: {activeActivity.estimatedDuration}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 items-start">
          <section className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <h3 className="inline-flex items-center gap-2 text-base font-bold text-[#0d153e]">
                <ListChecks className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
                <span>Como o Professor Implementa</span>
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

                    <p className="text-sm text-[#1e243d] leading-relaxed">
                      {renderDescriptionWithToolLinks(item.descricao, item.ferramentas)}
                    </p>

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

                    {item.exemplos && item.exemplos.length > 0 && (
                      <div className="pt-2 pl-4 border-l border-indigo-200/80 space-y-1.5">
                        {item.exemplosTitle && (
                          <div className="text-xs font-semibold text-[#0d153e]">
                            {item.exemplosTitle}
                          </div>
                        )}
                        <ul className="space-y-1 text-sm text-[#3d4663]">
                          {item.exemplos.map((ex, eIdx) => (
                            <li key={eIdx} className="flex items-baseline gap-2 leading-relaxed">
                              <span className="font-mono text-xs text-[#4f46e5]">·</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.nota && (
                      <p className="text-xs sm:text-sm text-[#3d4663] italic leading-relaxed pt-1">
                        {item.nota}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-100 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#0d153e]">
                  Exemplo de prompt pronto a usar
                </h3>
                <button
                  type="button"
                  onClick={() => handleCopyPrompt(activeActivity.prompt)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 ${
                    copiedPrompt
                      ? 'bg-teal-700'
                      : 'bg-gradient-to-r from-[#4f46e5] to-[#6366f1] hover:from-[#4338ca] hover:to-[#4f46e5] shadow-sm shadow-indigo-500/20'
                  }`}
                >
                  {copiedPrompt ? (
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  <span>{copiedPrompt ? 'Copiado' : 'Copiar Prompt'}</span>
                </button>
              </div>
              {copyStatus === 'error' && (
                <p
                  role="alert"
                  className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
                >
                  Não foi possível copiar. Selecione e copie o texto manualmente.
                </p>
              )}
              <p className="font-mono text-xs text-[#1e243d] leading-relaxed bg-[#f4f3fb] p-4 rounded-xl border border-indigo-200/70 select-all whitespace-pre-line">
                {activeActivity.prompt}
              </p>

              <div className="divide-y divide-indigo-100/80 text-xs sm:text-sm text-[#3d4663] leading-relaxed">
                <div className="py-3 flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#6d28d9]" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-[#4c28d9]">Dica para o Prompt: </strong>
                    {activeActivity.promptTip}
                  </div>
                </div>

                <div className="py-3 flex items-start gap-3">
                  <SlidersHorizontal
                    className="w-4 h-4 shrink-0 mt-0.5 text-[#4f46e5]"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="font-semibold text-[#0d153e]">
                      Adaptação aos objetivos:{' '}
                    </strong>
                    {activeActivity.promptAdaptation}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-100 space-y-2.5">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Package className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
                <span>Preparação e materiais para a aula</span>
              </h3>
              <ul className="space-y-1.5 text-sm text-[#3d4663]">
                {activeActivity.materials.map((mat, mIdx) => (
                  <li key={mIdx} className="flex items-baseline gap-2.5 leading-relaxed">
                    <span className="font-mono text-xs text-[#4f46e5]">·</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="lg:col-span-5 bg-gradient-to-br from-[#faf9fe] to-[#f1edfe]/70 rounded-2xl border border-indigo-100 p-6 divide-y divide-indigo-100 lg:sticky lg:top-24">
            <section className="pb-6 space-y-3">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Target className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
                <span>Objetivos de aprendizagem</span>
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

            <section className="py-6 space-y-3.5">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Wrench className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
                <span>Ferramentas recomendadas</span>
              </h3>

              <ul className="space-y-3">
                {[...activeActivity.ferramentasRecomendadas]
                  .sort((a, b) =>
                    a.role === 'Principal' ? -1 : b.role === 'Principal' ? 1 : 0,
                  )
                  .map((tool) => (
                    <li key={`${tool.role}-${tool.name}`} className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#4f46e5] hover:text-[#4338ca] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 rounded-sm"
                        >
                          <span>{tool.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                            tool.role === 'Principal'
                              ? 'bg-indigo-100/90 text-[#4338ca]'
                              : 'bg-white/90 border border-indigo-100 text-[#3d4663]'
                          }`}
                        >
                          {tool.role}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4663] leading-relaxed">
                        {tool.justificacao}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>

            <section className="pt-6 space-y-4">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]">
                <Award className="w-4 h-4 text-[#6d28d9] shrink-0" aria-hidden="true" />
                <span>Avaliação</span>
              </h3>

              {activeActivity.avaliacao.entrega && activeActivity.avaliacao.entrega.length > 0 && (
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
              )}

              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#0d153e]">
                  Avaliação das Aprendizagens
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
