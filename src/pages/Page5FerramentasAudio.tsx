import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { AUDIO_TOOLS } from '../data/moduloData.ts';
import { ToolBrandMark } from '../components/ToolBrandMark.tsx';

const PEDAGOGICAL_BENEFITS = [
  {
    title: 'Diferenciação pedagógica',
    desc: 'Explicações em áudio para apoiar diferentes ritmos de aprendizagem.',
  },
  {
    title: 'Poupança de tempo',
    desc: 'Apoio na preparação de guiões, narrações e limpeza de gravações existentes.',
  },
  {
    title: 'Melhoria da comunicação',
    desc: 'Voz clara, redução de ruído de fundo e preparação de materiais legendados.',
  },
  {
    title: 'Avaliação diversificada',
    desc: 'Trabalhos orais gravados, podcasts escolares e feedback em áudio.',
  },
  {
    title: 'Apoio linguístico',
    desc: 'Exploração da oralidade, pronúncia e compreensão auditiva.',
  },
  {
    title: 'Inclusão',
    desc: 'Apoio a alunos com dificuldades de leitura ou necessidades educativas específicas.',
  },
];

export const Page5FerramentasAudio: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          FERRAMENTAS DE ÁUDIO
        </h1>
      </header>

      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            VANTAGENS PEDAGÓGICAS DO ÁUDIO
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PEDAGOGICAL_BENEFITS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-zinc-200 p-5 space-y-2">
              <div className="font-mono text-xs font-semibold text-zinc-400 tabular-nums">
                0{idx + 1}
              </div>
              <h3 className="font-display text-base font-bold text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-4">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            CATÁLOGO DE FERRAMENTAS IDENTIFICADAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIO_TOOLS.map((tool) => (
            <article
              key={tool.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-7 flex flex-col gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <ToolBrandMark toolId={tool.id} toolName={tool.name} />
                    <h3 className="font-display text-xl font-bold text-zinc-900 truncate">
                      {tool.name}
                    </h3>
                  </div>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Experimentar ${tool.name} no site oficial`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shrink-0 min-h-[36px]"
                  >
                    <span>Experimentar</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed">{tool.recommendedFor}</p>
              </div>

              <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Principais funcionalidades</dt>
                  <dd className="text-zinc-600 leading-relaxed">
                    <ul className="list-disc pl-4 space-y-1">
                      {tool.capabilities.map((cap, idx) => (
                        <li key={idx}>{cap}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Aplicações em sala de aula</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.classroomApplications}</dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Plano gratuito e limitações</dt>
                  <dd className="text-zinc-600 leading-relaxed">
                    <strong className="font-medium text-zinc-800">{tool.freePlan}</strong>{' '}
                    {tool.limitations}
                  </dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Idade e condições de utilização</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.privacyOrAge}</dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Alternativa gratuita</dt>
                  <dd className="text-zinc-600 leading-relaxed">{tool.freeAlternative}</dd>
                </div>
                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
                  <span>Fonte oficial: {tool.officialSource}</span>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium break-all"
                  >
                    {tool.officialUrl}
                  </a>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
          <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            Ferramentas genéricas de música por IA ou extensões de transcrição de reuniões sem identificação oficial verificável foram removidas. Qualquer solução de transcrição de reuniões só deve ser adotada após validação institucional, verificação das plataformas suportadas, limites gratuitos e cumprimento das regras de privacidade e consentimento.
          </p>
        </div>
      </section>
    </div>
  );
};
