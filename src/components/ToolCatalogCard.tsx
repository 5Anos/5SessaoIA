import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ToolBrandMark } from './ToolBrandMark.tsx';
import { IMAGE_TOOLS, OTHER_IMAGE_TOOLS } from '../data/moduloData.ts';

export interface ToolCatalogCardProps {
  id: string;
  name: string;
  officialUrl: string;
  description: string;
  promptLanguage?: string;
  capabilitiesLabel: string;
  capabilities: string[];
  applicationLabel: string;
  applicationText: string;
  freePlan: string;
  limitations: string;
  privacyLabel: string;
  privacyOrAge: string;
  freeAlternative: string;
  officialSource: string;
  showOfficialSource?: boolean;
}

export const ToolCatalogCard: React.FC<ToolCatalogCardProps> = ({
  id,
  name,
  officialUrl,
  description,
  promptLanguage,
  capabilitiesLabel,
  capabilities,
  applicationLabel,
  applicationText,
  freePlan,
  limitations,
  privacyLabel,
  privacyOrAge,
  freeAlternative,
  officialSource,
  showOfficialSource = true,
}) => {
  const resolvedPromptLanguage =
    promptLanguage ??
    (!showOfficialSource && capabilitiesLabel === 'Principais capacidades'
      ? [...IMAGE_TOOLS, ...OTHER_IMAGE_TOOLS].find((tool) => tool.id === id)
          ?.promptLanguage
      : undefined);

  return (
    <article className="bg-white rounded-2xl border border-indigo-100/90 shadow-[0_4px_20px_rgba(79,70,229,0.04)] p-6 sm:p-7 flex flex-col justify-between gap-5">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <ToolBrandMark toolId={id} toolName={name} />
            <h3 className="font-display text-xl font-bold text-[#0d153e] leading-snug">
              {name}
            </h3>
          </div>
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Experimentar ${name} no site oficial`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#6366f1] hover:from-[#4338ca] hover:to-[#4f46e5] text-white text-xs font-semibold shadow-sm shadow-indigo-500/20 transition-all shrink-0 min-h-[36px] whitespace-nowrap"
          >
            <span>Experimentar</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <p className="text-sm text-[#1e243d] leading-relaxed">
          {description}
        </p>

        {resolvedPromptLanguage && (
          <div className="rounded-xl bg-[#f8f7fc] border border-indigo-100/90 px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed">
            <div className="font-semibold text-[#0d153e]">
              Idioma recomendado para prompts
            </div>
            <div className="text-[#3d4663] mt-0.5">{resolvedPromptLanguage}</div>
          </div>
        )}

        <dl className="divide-y divide-indigo-100/75 border-t border-indigo-100 text-xs sm:text-sm">
          <div className="py-3.5 space-y-1.5">
            <dt className="font-semibold text-[#0d153e]">{capabilitiesLabel}</dt>
            <dd className="text-[#3d4663] leading-relaxed">
              <ul className="list-disc pl-4 space-y-1">
                {capabilities.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="py-3.5 space-y-1">
            <dt className="font-semibold text-[#0d153e]">{applicationLabel}</dt>
            <dd className="text-[#3d4663] leading-relaxed">{applicationText}</dd>
          </div>
          <div className="py-3.5 space-y-1">
            <dt className="font-semibold text-[#0d153e]">Plano gratuito e limitações</dt>
            <dd className="text-[#3d4663] leading-relaxed">
              <strong className="font-semibold text-[#4338ca]">{freePlan}</strong>{' '}
              {limitations}
            </dd>
          </div>
          <div className="py-3.5 space-y-1">
            <dt className="font-semibold text-[#0d153e]">{privacyLabel}</dt>
            <dd className="text-[#3d4663] leading-relaxed">{privacyOrAge}</dd>
          </div>
          <div className="py-3.5 space-y-1">
            <dt className="font-semibold text-[#0d153e]">Alternativa gratuita</dt>
            <dd className="text-[#3d4663] leading-relaxed">{freeAlternative}</dd>
          </div>
        </dl>
      </div>

      {showOfficialSource && (
        <div className="pt-3.5 border-t border-indigo-100/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#525b7a]">
          <span>Fonte oficial: {officialSource}</span>
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f46e5] hover:text-[#4338ca] hover:underline font-semibold break-all"
          >
            {officialUrl}
          </a>
        </div>
      )}
    </article>
  );
};
