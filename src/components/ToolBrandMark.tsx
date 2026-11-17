import React from 'react';

interface ToolBrandMarkProps {
  toolId: string;
  toolName: string;
}

const BRAND_STYLES: Record<string, string> = {
  'microsoft-designer': 'bg-blue-50 border-blue-200/80 text-blue-700',
  'leonardo-ai': 'bg-violet-50 border-violet-200/80 text-violet-700',
  'adobe-firefly': 'bg-orange-50 border-orange-200/80 text-orange-700',
  ideogram: 'bg-zinc-100 border-zinc-300/80 text-zinc-900',
  canva: 'bg-teal-50 border-teal-200/80 text-teal-700',
  'seaart-ai': 'bg-sky-50 border-sky-200/80 text-sky-700',
  chatgpt: 'bg-emerald-50 border-emerald-200/80 text-emerald-700',
  gemini: 'bg-indigo-50 border-indigo-200/80 text-indigo-700',
  'microsoft-copilot': 'bg-cyan-50 border-cyan-200/80 text-cyan-700',
  notebooklm: 'bg-slate-100 border-slate-300/80 text-slate-800',
  elevenlabs: 'bg-zinc-100 border-zinc-300/80 text-zinc-900',
  'adobe-podcast': 'bg-rose-50 border-rose-200/80 text-rose-700',
  audacity: 'bg-blue-50 border-blue-200/80 text-blue-700',
  'spotify-for-creators': 'bg-emerald-50 border-emerald-200/80 text-emerald-700',
  ttsmaker: 'bg-indigo-50 border-indigo-200/80 text-indigo-700',
  clipchamp: 'bg-violet-50 border-violet-200/80 text-violet-700',
  descript: 'bg-sky-50 border-sky-200/80 text-sky-700',
  'tts-for-free': 'bg-amber-50 border-amber-200/80 text-amber-700',
};

export const ToolBrandMark: React.FC<ToolBrandMarkProps> = ({ toolId, toolName }) => {
  const styleClass = BRAND_STYLES[toolId] ?? 'bg-zinc-100 border-zinc-200 text-zinc-700';

  const renderGlyph = () => {
    switch (toolId) {
      case 'microsoft-designer':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M12 3l2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3z" strokeLinejoin="round" />
          </svg>
        );
      case 'leonardo-ai':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 4v16M4 12h16M7 7l10 10" strokeLinecap="round" opacity="0.65" />
          </svg>
        );
      case 'adobe-firefly':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M12 3c2.5 3.2 5 6 5 10a5 5 0 0 1-10 0c0-2.4 1.2-4.7 2.8-6.4.4 1.8 1.5 2.7 2.2 2.9-.2-2-.1-4.3 0-6.5z" strokeLinejoin="round" />
          </svg>
        );
      case 'ideogram':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6v12M11 6h4a4 4 0 0 1 0 12h-4V6z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'canva':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M16.5 8.2a6 6 0 1 0 0 7.6" strokeLinecap="round" />
            <circle cx="17" cy="12" r="1.3" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'seaart-ai':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M3 10c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0M3 15c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0" strokeLinecap="round" />
          </svg>
        );
      case 'chatgpt':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 4v4.8M12 15.2V20M5.1 8l4.1 2.4M14.8 13.6L18.9 16M18.9 8l-4.1 2.4M9.2 13.6L5.1 16" strokeLinecap="round" />
          </svg>
        );
      case 'gemini':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M12 2.5C12.9 8 16 11.1 21.5 12 16 12.9 12.9 16 12 21.5 11.1 16 8 12.9 2.5 12 8 11.1 11.1 8 12 2.5z" strokeLinejoin="round" />
          </svg>
        );
      case 'microsoft-copilot':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M7 7.5C7 5.5 9 4 12 4s5 1.5 5 3.5v4c0 2-2 3.5-5 3.5S7 13.5 7 11.5v-4z" />
            <path d="M4.5 13c0-1.4 1.3-2.5 3-2.5h9c1.7 0 3 1.1 3 2.5v3.5c0 1.9-3.1 3.5-7.5 3.5S4.5 18.4 4.5 16.5V13z" />
          </svg>
        );
      case 'notebooklm':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v18H7.5A2.5 2.5 0 0 1 5 18.5v-13z" />
            <path d="M9 8.5h6M9 12h6M9 15.5h4" strokeLinecap="round" />
          </svg>
        );
      case 'elevenlabs':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M9 5v14M15 5v14" strokeLinecap="round" />
          </svg>
        );
      case 'adobe-podcast':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <rect x="9" y="3.5" width="6" height="10" rx="3" />
            <path d="M6 11.5a6 6 0 0 0 12 0M12 17.5v3M8.5 20.5h7" strokeLinecap="round" />
          </svg>
        );
      case 'audacity':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M4 14v-2a8 8 0 0 1 16 0v2" strokeLinecap="round" />
            <rect x="3.5" y="13" width="3.5" height="6" rx="1.2" />
            <rect x="17" y="13" width="3.5" height="6" rx="1.2" />
            <path d="M9.5 14v-2M12 15.5v-5M14.5 14v-2" strokeLinecap="round" />
          </svg>
        );
      case 'spotify-for-creators':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M8.5 10c2.6-.7 5.5-.5 7.5.6M9 12.8c2.1-.5 4.4-.3 6 .5M9.8 15.5c1.5-.3 3.2-.2 4.4.4" strokeLinecap="round" />
          </svg>
        );
      case 'ttsmaker':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M5 10v4h3.5L13 18V6L8.5 10H5z" strokeLinejoin="round" />
            <path d="M16.5 9a4.5 4.5 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11" strokeLinecap="round" />
          </svg>
        );
      case 'clipchamp':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
            <path d="M10 9.5l5 2.5-5 2.5v-5z" strokeLinejoin="round" />
          </svg>
        );
      case 'descript':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M5 6.5h14M5 11.5h10M5 16.5h7" strokeLinecap="round" />
            <path d="M16.5 13v6M19.5 14.5v3" strokeLinecap="round" />
          </svg>
        );
      case 'tts-for-free':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M4.5 6.5h15a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H10l-4 3v-3H4.5A1.5 1.5 0 0 1 3 15V8a1.5 1.5 0 0 1 1.5-1.5z" strokeLinejoin="round" />
            <path d="M9 10.5v2M12 9.5v4M15 10.5v2" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <span className="font-display text-sm font-bold" aria-hidden="true">
            {toolName.slice(0, 1).toUpperCase()}
          </span>
        );
    }
  };

  return (
    <div
      className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${styleClass}`}
      aria-hidden="true"
    >
      {renderGlyph()}
    </div>
  );
};
