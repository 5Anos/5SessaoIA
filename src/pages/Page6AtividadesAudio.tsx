import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  RotateCcw,
  Target,
  ListChecks,
  Award,
  Copy,
  Check,
  ShieldAlert,
  Volume2,
} from 'lucide-react';
import { AUDIO_ACTIVITIES } from '../data/moduloData.ts';

const STORAGE_KEY = 'm3_audio_activity_checklist_v1';

export const Page6AtividadesAudio: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(AUDIO_ACTIVITIES[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedSteps));
    } catch {
      // noop
    }
  }, [checkedSteps]);

  const activeActivity =
    AUDIO_ACTIVITIES.find((a) => a.id === selectedActivityId) || AUDIO_ACTIVITIES[0];

  const toggleStep = (stepKey: string) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const resetActivityChecks = (activityId: string) => {
    setCheckedSteps((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${activityId}:`)) delete next[k];
      });
      return next;
    });
  };

  const getCompletedCount = (activityId: string) => {
    const keys = ['objetivos', 'etapa-0', 'etapa-1', 'etapa-2', 'avaliacao'];
    return keys.filter((k) => checkedSteps[`${activityId}:${k}`]).length;
  };

  const handleCopyPrompt = (text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 2000);
      });
    }
  };

  return (
    <div className="space-y-10">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          ATIVIDADES EM SALA DE AULA COM FERRAMENTAS DE ÁUDIO
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Duas propostas didáticas completas para narração histórica e produção de podcast escolar.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-zinc-50 text-xs font-semibold text-zinc-700">
            Planos de Áudio
          </div>
          {AUDIO_ACTIVITIES.map((act, index) => {
            const isSelected = act.id === selectedActivityId;
            const cleanTitle = act.title.replace(/^ATIVIDADE:\s*/, '');
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => {
                  setSelectedActivityId(act.id);
                  setCopiedPrompt(false);
                }}
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

        <article className="lg:col-span-8 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200 pb-6">
            <h2 className="font-display text-2xl font-bold text-zinc-900">
              {activeActivity.title}
            </h2>

            {getCompletedCount(activeActivity.id) > 0 && (
              <button
                type="button"
                onClick={() => resetActivityChecks(activeActivity.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar marcações</span>
              </button>
            )}
          </div>

          <section className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80">
              <div>
                <span className="font-semibold text-zinc-900">Ferramenta recomendada: </span>
                <span className="text-zinc-700">{activeActivity.recommendedTool}</span>
              </div>
              <div>
                <span className="font-semibold text-zinc-900">Alternativa gratuita: </span>
                <span className="text-zinc-700">{activeActivity.freeAlternative}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-zinc-900">Prompt completo</span>
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
              <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#f8f8f6] p-4 rounded-xl border border-zinc-200/80 select-all">
                {activeActivity.prompt}
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <Volume2 className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
                <span>Resultado esperado e pré-visualização ilustrativa</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700">{activeActivity.expectedResult}</p>
              <div
                className="flex items-center gap-1 h-8 px-3 rounded-lg bg-white border border-zinc-200"
                aria-hidden="true"
              >
                {[30, 65, 45, 90, 55, 75, 40, 85, 50, 70, 35, 60, 80, 45, 55, 30].map((h, idx) => (
                  <span
                    key={idx}
                    className="flex-1 rounded-full bg-amber-600/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="text-[11px] text-zinc-500">{activeActivity.visualPreviewLabel}</p>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-zinc-200">
            <div className="flex items-center justify-between gap-2">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                <Target className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Objetivos de aprendizagem:</span>
              </h3>
              <button
                type="button"
                onClick={() => toggleStep(`${activeActivity.id}:objetivos`)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-blue-700 transition-colors"
              >
                {checkedSteps[`${activeActivity.id}:objetivos`] ? (
                  <CheckSquare className="w-4 h-4 text-teal-700" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400" />
                )}
                <span>Revisto</span>
              </button>
            </div>
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
              {activeActivity.implementacao.map((item, i) => {
                const stepKey = `${activeActivity.id}:etapa-${i}`;
                const isDone = Boolean(checkedSteps[stepKey]);
                return (
                  <div key={i} className="py-5 first:pt-2 last:pb-0 space-y-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold text-amber-800">
                          {item.etapa}
                        </span>
                        <span aria-hidden="true" className="text-zinc-300">·</span>
                        <h4 className="font-display text-base font-bold text-zinc-900">
                          {item.titulo}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleStep(stepKey)}
                        aria-label={`Marcar ${item.etapa} como preparada`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-blue-700 transition-colors shrink-0"
                      >
                        {isDone ? (
                          <CheckSquare className="w-4 h-4 text-teal-700" />
                        ) : (
                          <Square className="w-4 h-4 text-zinc-400" />
                        )}
                        <span className="hidden sm:inline">
                          {isDone ? 'Preparada' : 'Marcar etapa'}
                        </span>
                      </button>
                    </div>

                    <p className="text-sm text-zinc-700 leading-relaxed">{item.descricao}</p>

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
                );
              })}
            </div>
          </section>

          <section className="pt-6 border-t border-zinc-200 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900">
                <Award className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
                <span>Avaliação:</span>
              </h3>
              <button
                type="button"
                onClick={() => toggleStep(`${activeActivity.id}:avaliacao`)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-blue-700 transition-colors"
              >
                {checkedSteps[`${activeActivity.id}:avaliacao`] ? (
                  <CheckSquare className="w-4 h-4 text-teal-700" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400" />
                )}
                <span>Critérios revistos</span>
              </button>
            </div>

            <p className="text-sm text-zinc-800 bg-[#f8f8f6] p-3.5 rounded-xl border border-zinc-200/80">
              <strong className="font-semibold text-zinc-900">O aluno entrega: </strong>
              {activeActivity.avaliacao.entrega}
            </p>

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

          <section className="pt-5 border-t border-zinc-200">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Cuidados e proteção de dados: </strong>
                {activeActivity.safeguards}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
