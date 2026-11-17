import React, { useState } from 'react';
import headerInteriorLilac from '../assets/images/header_interior_lilac_1794916961583.jpg';

interface PageHeaderProps {
  title: string;
  description?: string;
  Icon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  Icon,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="relative overflow-hidden rounded-2xl bg-[#faf9fe] border border-indigo-100/90 shadow-[0_6px_28px_rgba(79,70,229,0.06)] min-h-[168px] sm:min-h-[188px] lg:min-h-[204px] flex items-center">
      {!imageError ? (
        <img
          src={headerInteriorLilac}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-center select-none pointer-events-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#faf9fe] via-[#f1edfe] to-[#e0e7ff]"
        />
      )}

      {/* Soft light scrim guaranteeing high contrast for dark navy headings on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#faf9fe]/92 via-[#faf9fe]/72 to-transparent"
      />

      <div className="relative z-10 w-full px-6 sm:px-9 lg:px-10 py-6 sm:py-8">
        <div className="max-w-2xl flex items-stretch gap-4">
          <span
            aria-hidden="true"
            className="w-1.5 rounded-full bg-gradient-to-b from-[#6d28d9] to-[#4f46e5] shrink-0 my-0.5"
          />
          <div className="space-y-2.5 min-w-0 flex-1">
            <div className="flex items-center gap-3">
              {Icon && (
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#f1ebfe] border border-violet-200/80 text-[#4f46e5] shrink-0">
                  <Icon className="w-4.5 h-4.5" aria-hidden={true} />
                </span>
              )}
              <h1 className="font-display text-xl sm:text-3xl lg:text-[32px] font-bold text-[#0d153e] tracking-tight leading-[1.16]">
                {title}
              </h1>
            </div>

            {description && (
              <p className="text-sm sm:text-[15px] text-[#3d4663] leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
