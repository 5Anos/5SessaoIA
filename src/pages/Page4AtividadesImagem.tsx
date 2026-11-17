import React, { useRef, useState } from 'react';
import {
  Target,
  Package,
  ListChecks,
  Award,
  Copy,
  Check,
  ShieldAlert,
  Sparkles,
  Lightbulb,
} from 'lucide-react';
import { IMAGE_ACTIVITIES } from '../data/moduloData.ts';

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
    <div className="space-y-10">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE IMAGEM
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
          Propostas práticas de sala de aula com disciplina e ano recomendados, objetivos, materiais, etapas de implementação, prompt pronto a usar, produto final esperado, avaliação e cuidados de utilização responsável da IA.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-zinc-50 text-xs font-semibold text-zinc-700">
            Planos de Atividade
          </div>
          {IMAGE_ACTIVITIES.map((act, index) => {
            const isSelected = act.id === selectedActivityId;
            const cleanTitle = act.title.replace(/^ATIVIDADE:\s*/, '');
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => handleSelectActivity(act.id)}
                className={`w-full text-left px-5 py-3.5 transition-colors flex flex-col gap-1 ${
                  isSelected ? 'bg-blue-50/70' : 'hover:bg-zinc-50'
                }`}
              >
                <div className="text-xs">
                  <span
                    className={`font-mono font-semibold tabular-nums ${
                      isSelected ? 'text-blue-700' : 'text-zinc-400'
                    }`}
                  >
                    Atividade {index + 1}
                  </span>
                </div>
                <div
                  className={`font-display text-sm font-bold leading-snug ${
                    isSelected ? 'text-blue-900' : 'text-zinc-900'
                  }`}
                >
                  {cleanTitle}
                </div>
                <div className="text-xs text-zinc-500">
                  {act.subject} · {act.schoolYear}
                </div>
              </button>
            );
          })}
        </aside>

        <article
          ref={articleRef}
          className="lg:col-span-8 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-8 scroll-mt-24"
        >
          <div className="border-b border-zinc-200 pb-6 space-y-1.5">
            <div className="text-xs font-medium text-blue-700">
              {activeActivity.subject} · {activeActivity.schoolYear}
            </div>
            <h2 className="font-display text-2xl font-bold text-zinc-900">
              {activeActivity.title}
            </h2>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm bg-[#f8f8f6] p-4 sm:p-5 rounded-xl border border-zinc-200/80">
            <div>
              <span className="font-semibold text-zinc-900">Disciplina: </span>
              <span className="text-zinc-700">{activeActivity.subject}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Ano recomendado: </span>
              <span className="text-zinc-700">{activeActivity.schoolYear}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Duração estimada: </span>
              <span className="text-zinc-700">{activeActivity.estimatedDuration}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Destinatários: </span>
              <span className="text-zinc-700">{activeActivity.targetAudience}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-zinc-900">Ferramenta(s) recomendada(s): </span>
              <span className="text-zinc-700">{activeActivity.recommendedTool}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-zinc-900">Alternativa gratuita: </span>
              <span className="text-zinc-700">{activeActivity.freeAlternative}</span>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-zinc-200">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Target className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Objetivos de aprendizagem</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-700">
              {activeActivity.objetivos.map((obj, i) => (
                <li
                  key={i}
                  className="py-2.5 px-3.5 bg-[#f8f8f6] rounded-lg border border-zinc-200/70 leading-relaxed"
                >
                  {obj}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-zinc-200">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Package className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Materiais e preparação</span>
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              {activeActivity.materials.map((item, i) => (
                <li key={i} className="flex items-baseline gap-2.5 leading-relaxed">
                  <span className="font-mono text-xs text-blue-700 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2.5 pt-4 border-t border-zinc-200">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-zinc-900">Exemplo de prompt pronto a usar</h3>
              <button
                type="button"
                onClick={() => handleCopyPrompt(activeActivity.prompt)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors ${
                  copiedPrompt ? 'bg-teal-700' : 'bg-zinc-900 hover:bg-blue-700'
                }`}
              >
                {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
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
          </section>

          <section className="space-y-4 pt-6 border-t border-zinc-200">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <ListChecks className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Etapas de implementação</span>
            </h3>

            <div className="divide-y divide-zinc-200">
              {activeActivity.implementacao.map((item, i) => (
                <div key={i} className="py-5 first:pt-2 last:pb-0 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-blue-700">
                      {item.etapa}
                    </span>
                    <span aria-hidden="true" className="text-zinc-300">·</span>
                    <h4 className="font-display text-base font-bold text-zinc-900">
                      {item.titulo}
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed">{item.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-zinc-200 space-y-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Sparkles className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Produto final esperado</span>
            </h3>
            <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 space-y-2 text-sm text-zinc-800">
              <p className="leading-relaxed">{activeActivity.expectedResult}</p>
              {activeActivity.avaliacao.entrega && (
                <p className="text-xs sm:text-sm text-zinc-700 pt-1 border-t border-zinc-200/70">
                  <strong className="font-semibold text-zinc-900">Entrega do aluno: </strong>
                  {activeActivity.avaliacao.entrega}
                </p>
              )}
            </div>
          </section>

          <section className="pt-6 border-t border-zinc-200 space-y-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
              <Award className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Critérios de avaliação</span>
            </h3>

            <ul className="space-y-1.5 text-sm text-zinc-700">
              {activeActivity.avaliacao.itens.map((it, i) => (
                <li key={i} className="flex items-baseline gap-2 leading-relaxed">
                  <span className="font-mono text-xs text-zinc-400">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-5 border-t border-zinc-200">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Cuidados e utilização responsável da IA: </strong>
                {activeActivity.safeguards}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
