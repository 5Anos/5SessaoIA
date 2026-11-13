import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = `${import.meta.env.BASE_URL}assets/aistudio/modulo3-ferramentas-ia-educacao-v2_a9efd33b.pdf`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Documento PDF Original"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl h-[88vh] bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-zinc-200 bg-zinc-50">
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-zinc-900 truncate">
              Documento Base Original de Referência (23 de fevereiro de 2026)
            </h2>
            <p className="text-xs text-zinc-500 truncate">
              modulo3-ferramentas-ia-educacao-v2_a9efd33b.pdf · Autoria: Carla Oliveira · Versão anterior à revisão editorial
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              download="modulo3-ferramentas-ia-educacao-v2.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-50 rounded-lg transition-colors min-h-[36px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descarregar PDF</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors min-h-[36px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir em Novo Separador</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200/70 transition-colors"
              aria-label="Fechar visualizador"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-zinc-100 p-2 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            title="Visualizador do PDF Original"
            className="w-full h-full rounded-lg border border-zinc-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
};
