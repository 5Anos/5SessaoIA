import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react';

interface VisualFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  allowZoom?: boolean;
  className?: string;
}

export const VisualFrame: React.FC<VisualFrameProps> = ({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
  allowZoom = true,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className={`flex flex-col ${className}`}>
        <div
          className={`relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 ${aspectClass} group`}
        >
          {!hasError ? (
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-500">
              <ImageIcon className="w-8 h-8 mb-2 stroke-1 text-zinc-400" />
              <span className="text-xs font-medium text-zinc-700">{alt}</span>
            </div>
          )}

          {allowZoom && !hasError && (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              aria-label={`Ampliar imagem: ${alt}`}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 text-white text-xs font-medium backdrop-blur-xs opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-150 hover:bg-zinc-900"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          )}
        </div>

        {caption && (
          <figcaption className="mt-2.5 text-xs text-zinc-500 leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pré-visualização ampliada: ${alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-zinc-950/85 backdrop-blur-xs"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200">
              <p className="text-sm font-medium text-zinc-900 truncate pr-4">{alt}</p>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                aria-label="Fechar ampliação"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-zinc-100 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            {caption && (
              <div className="px-5 py-3 bg-white border-t border-zinc-200 text-xs text-zinc-600">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
