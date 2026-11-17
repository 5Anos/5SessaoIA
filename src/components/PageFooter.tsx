import React from 'react';

interface PageFooterProps {
  noTopMargin?: boolean;
}

export const PageFooter: React.FC<PageFooterProps> = ({ noTopMargin = false }) => {
  return (
    <footer className={`${noTopMargin ? 'mt-0' : 'mt-16'} border-t border-zinc-200 bg-[#f8f8f6]`}>
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p className="text-xs text-zinc-600 leading-relaxed">
          Recurso de apoio à formação de docentes sobre ferramentas de inteligência artificial na educação. A informação sobre plataformas, funcionalidades e planos gratuitos é dinâmica e deve ser confirmada nas fontes oficiais.
        </p>
        <p className="text-xs text-zinc-500">
          Fonte original: Modulo3_FerramentasIA_2 · Autoria: Carla Oliveira (23 de fevereiro de 2026) · Revisão editorial: 13 de novembro de 2026
        </p>
      </div>
    </footer>
  );
};
