import React from 'react';
import { Headphones, Info } from 'lucide-react';
import { AUDIO_TOOLS } from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { ToolCatalogCard } from '../components/ToolCatalogCard.tsx';

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
    <div className="space-y-14">
      <PageHeader title="FERRAMENTAS DE ÁUDIO" Icon={Headphones} />

      <section className="space-y-6">
        <div className="border-b border-indigo-100 pb-3.5">
          <h2 className="font-display text-2xl font-bold text-[#0d153e]">
            VANTAGENS PEDAGÓGICAS DO ÁUDIO
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:gap-px sm:bg-indigo-100/80 overflow-hidden">
          {PEDAGOGICAL_BENEFITS.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-7 space-y-2.5">
              <div className="font-mono text-xs font-bold text-[#4f46e5] tabular-nums">
                0{idx + 1}
              </div>
              <h3 className="font-display text-base font-bold text-[#0d153e]">
                {item.title}
              </h3>
              <p className="text-sm text-[#3d4663] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="font-display text-2xl font-bold text-[#0d153e]">
            CATÁLOGO DE FERRAMENTAS IDENTIFICADAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIO_TOOLS.map((tool) => (
            <ToolCatalogCard
              key={tool.id}
              id={tool.id}
              name={tool.name}
              officialUrl={tool.officialUrl}
              description={tool.recommendedFor}
              capabilitiesLabel="Principais funcionalidades"
              capabilities={tool.capabilities}
              applicationLabel="Aplicações em sala de aula"
              applicationText={tool.classroomApplications}
              freePlan={tool.freePlan}
              limitations={tool.limitations}
              privacyLabel="Idade e condições de utilização"
              privacyOrAge={tool.privacyOrAge}
              freeAlternative={tool.freeAlternative}
              officialSource={tool.officialSource}
            />
          ))}
        </div>

        <div className="pt-6 border-t border-indigo-100 flex items-start gap-3 text-xs sm:text-sm text-[#3d4663] leading-relaxed">
          <Info className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            Ferramentas genéricas de música por IA ou extensões de transcrição de reuniões sem identificação oficial verificável foram removidas. Qualquer solução de transcrição de reuniões só deve ser adotada após validação institucional, verificação das plataformas suportadas, limites gratuitos e cumprimento das regras de privacidade e consentimento.
          </p>
        </div>
      </section>
    </div>
  );
};
