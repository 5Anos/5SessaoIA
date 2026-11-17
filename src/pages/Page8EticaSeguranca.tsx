import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square } from 'lucide-react';
import {
  ETHICS_SECTIONS,
  ETHICS_CHECKLIST,
} from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';

const SECTION_HIGHLIGHTS: Record<string, string[]> = {
  rgpd: [
    'Regulamento Geral sobre a Proteção de Dados (RGPD)',
    'finalidade, minimização, transparência, segurança e limitação da conservação',
    'responsável pela proteção de dados',
    'dados identificáveis de alunos',
    'sem validação institucional',
    'escola deve avaliar',
    'condições do serviço',
    'dados pessoais',
    'base jurídica',
    'Não carregar',
  ],
  menores: [
    'imagens não identificáveis',
    'gravações sem dados pessoais',
    'exige especial cuidado',
    'entidade responsável',
    'exemplos sintéticos',
    'categoria especial',
    'dados biométricos',
    'dados pessoais',
    'Não presumir',
    'consentimento',
    'base legal',
  ],
  'direitos-autor': [
    'não fica automaticamente livre de direitos de autor',
    'verificar as condições da plataforma',
    'marcas, personagens, obras protegidas',
    'direitos dos materiais introduzidos',
    'identificar conteúdos gerados por IA',
    'Registar a origem dos recursos',
    'direitos de terceiros',
    'imagens de pessoas',
    'transparência',
  ],
  'ai-act': [
    'versões oficiais atualizadas',
    'Regulamento (UE) 2024/1689',
    'sistemas de alto risco',
    '2 de fevereiro de 2025',
    'regras harmonizadas',
    'finalidade prevista',
    'utilização concreta',
    'literacia em IA',
    'artigo 4.º',
    'AI Act',
  ],
  validacao: [
    'erros factuais, científicos, históricos, linguísticos e visuais',
    'não deve substituir uma fonte científica validada',
    'professor deve verificar a informação',
  ],
  'supervisao-humana': [
    'não substituir o juízo profissional do professor',
    'seleção, adaptação, validação e utilização',
    'apoiar o trabalho pedagógico',
    'responsabilidade humana',
  ],
};

const CHECKLIST_HIGHLIGHTS: string[] = [
  'verificado quanto à sua exatidão',
  'explicar como foi produzido',
  'dados pessoais de alunos',
  'direitos de utilização',
  'acessível e adequado',
  'adequada à idade',
  'escola autoriza',
  'plano gratuito',
];

function renderSelectiveBold(text: string, phrases: string[]): React.ReactNode {
  if (phrases.length === 0) return text;
  const sorted = [...phrases].sort((a, b) => b.length - a.length);
  const phraseSet = new Set(sorted);
  const escaped = sorted.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (phraseSet.has(part)) {
      return (
        <strong key={idx} className="font-bold text-[#0d153e]">
          {part}
        </strong>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

export const Page8EticaSeguranca: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-14">
      <PageHeader
        title="ÉTICA, SEGURANÇA E LEGISLAÇÃO"
        description="Orientações jurídicas, éticas e pedagógicas para docentes sobre proteção de dados, menores, direitos de autor, Regulamento (UE) 2024/1689 e supervisão humana."
        Icon={ShieldCheck}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {ETHICS_SECTIONS.map((sec) => {
          const highlights = SECTION_HIGHLIGHTS[sec.id] ?? [];
          return (
            <article
              key={sec.id}
              className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-6 sm:p-8 space-y-4"
            >
              <div className="space-y-1.5 border-b border-indigo-100/80 pb-3.5">
                <div className="font-mono text-xs font-bold text-[#4f46e5] tabular-nums">
                  {sec.number}.
                </div>
                <h2 className="font-display text-xl font-bold text-[#0d153e]">
                  {sec.title}
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-[15px] text-[#3d4663] leading-[1.72]">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{renderSelectiveBold(p, highlights)}</p>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-gradient-to-br from-white to-[#f6f3fe] rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2.5 border-b border-indigo-100 pb-4">
          <ShieldCheck className="w-5 h-5 text-[#4f46e5] shrink-0" aria-hidden="true" />
          <h2 className="font-display text-xl font-bold text-[#0d153e]">
            Lista de verificação antes de utilizar uma ferramenta
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {ETHICS_CHECKLIST.map((question, idx) => {
            const isChecked = Boolean(checkedItems[idx]);
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border text-sm transition-colors ${
                    isChecked
                      ? 'bg-[#f1ebfe] border-[#6366f1] text-[#0d153e]'
                      : 'bg-white/90 border-indigo-100 text-[#3d4663] hover:bg-indigo-50/50 hover:border-indigo-200'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  )}
                  <span>{renderSelectiveBold(question, CHECKLIST_HIGHLIGHTS)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
