import React from 'react';
import { Check } from 'lucide-react';

const AUDIO_CAPABILITIES = [
  'Converter texto em voz (texto -> audio) com diferentes vozes e entoacoes.',
  'Transcrever automaticamente ficheiros de audio para texto (audio -> texto).',
  'Gerar narracoes realistas para videos, apresentacoes e conteudos educativos.',
  'Melhorar a qualidade do som, reduzindo ruido e ajustando niveis de volume.',
  'Traduzir automaticamente audio para outros idiomas, mantendo a naturalidade da voz.',
  'Criar vozes personalizadas ou adaptar o estilo vocal a diferentes contextos.',
  'Produzir podcasts, entrevistas simuladas e dialogos educativos com apoio de IA.',
];

const MUSIC_TOOLS = [
  { name: 'AI Text to Music', desc: 'transforma texto (uma descricao ou ideia) em musica.' },
  { name: 'AI Music Generator', desc: 'cria musica escolhendo estilo, ritmo ou ambiente, sem precisar de escrever texto detalhado.' },
  { name: 'Gerador de Musica IA', desc: 'cria musica automaticamente (instrumental ou completa)' },
  { name: 'Gerador de Letras IA', desc: 'escreve letras de musicas' },
  { name: 'Gerador de Voz de Canto', desc: 'transforma texto em voz a cantar' },
  { name: 'Gerador de Covers de Musica', desc: 'recria musicas com outra voz/estilo' },
  { name: 'Video de Musica IA', desc: 'cria videoclipes automaticamente' },
];

const MEETING_TOOLS = [
  {
    code: 'Extensao 1',
    title: 'Transcricao e Atas para Docs',
    plataformas: 'Google Meet, Zoom e MS Teams',
    acesso: 'Instalar a extensao para Google Chrome',
    funcionalidades: '[OK] transcricao em direto | [OK] resumo com IA | [OK] tarefas/decisoes | [OK] atas simples | [OK] exporta para Docs',
    gratuito: 'SIM... mas com limites mensais.',
  },
  {
    code: 'Aplicacao 2',
    title: 'Gravacao e Identificacao de Oradores',
    plataformas: 'Google Meet, Zoom and MS Teams',
    acesso: 'Instalar a extensao para Google Chrome ou Instalar no Computador',
    funcionalidades: '[OK] gravacao | [OK] transcricao automatica | [OK] identificacao de quem falou | [OK] resumos/atas por IA | [OK] extracao de tarefas e pontos importantes',
    gratuito: 'SIM... mas com limites mensais.',
  },
  {
    code: 'Ferramenta 3',
    title: 'Resumos e Destaques Automaticos',
    plataformas: 'Google Meet, Zoom and MS Teams',
    acesso: 'Instalar a extensao para Google Chrome',
    funcionalidades: '[OK] gravacao | [OK] resumo automatico | [OK] destaques automaticos | [OK] atas IA',
    gratuito: 'SIM... para a transcricao das reunioes.',
  },
];

const PEDAGOGICAL_BENEFITS = [
  {
    title: 'Diferenciacao pedagogica',
    desc: 'Explicacoes em audio para apoiar diferentes ritmos de aprendizagem.',
  },
  {
    title: 'Poupanca de tempo',
    desc: 'Conversao rapida de texto em narracao e transcricao automatica.',
  },
  {
    title: 'Melhoria da comunicacao',
    desc: 'Voz clara, legendas automaticas e reducao de ruido.',
  },
  {
    title: 'Avaliacao diversificada',
    desc: 'Trabalhos orais gravados e feedback em audio.',
  },
  {
    title: 'Traducao e apoio linguistico',
    desc: 'Conteudos acessiveis em varios idiomas.',
  },
  {
    title: 'Inclusao',
    desc: 'Apoio a alunos com dificuldades de leitura ou necessidades especificas.',
  },
];

export const Page5FerramentasAudio: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="text-xs font-medium text-zinc-500">
          Página 5 de 7 · Som, Narração e Transcrição
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          FERRAMENTAS DE AUDIO
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          Capacidades sonoras, criação musical por IA, ferramentas para gravação e atas de reuniões e vantagens pedagógicas.
        </p>
      </header>

      {/* ESTAS FERRAMENTAS PERMITEM: */}
      <section className="space-y-5">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-3">
          <h2 className="font-display text-xl font-bold text-zinc-900">
            ESTAS FERRAMENTAS PERMITEM:
          </h2>
          <span className="text-xs text-zinc-500 tabular-nums">7 capacidades</span>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {AUDIO_CAPABILITIES.map((item, idx) => (
              <li
                key={idx}
                className="flex items-baseline gap-3.5 text-sm text-zinc-800 leading-relaxed pb-3 border-b border-zinc-100 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="font-mono text-xs font-semibold text-amber-700 tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Musica e Criacao Sonora com IA */}
      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-4 space-y-1">
          <div className="text-xs font-medium text-zinc-500">FERRAMENTAS DE AUDIO COM IA</div>
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            Musica e Criacao Sonora com IA
          </h2>
          <p className="text-sm text-zinc-600">
            Gera musica automaticamente com inteligencia artificial para projetos criativos (videos, jogos, etc.):
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-200">
          {MUSIC_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
            >
              <div className="font-display text-sm sm:text-base font-bold text-zinc-900 sm:w-1/3 shrink-0">
                {tool.name}
              </div>
              <div className="text-sm text-zinc-600 leading-relaxed sm:w-2/3">
                {tool.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FERRAMENTAS DE AUDIO - GRAVACAO REUNIOES */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-4 space-y-1">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            FERRAMENTAS DE AUDIO - GRAVACAO REUNIOES
          </h2>
          <p className="text-sm text-zinc-600">
            Soluções para transcrição em direto, identificação de oradores e resumos automáticos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MEETING_TOOLS.map((tool) => (
            <article
              key={tool.code}
              className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-amber-700">
                  {tool.code}
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-900">
                  {tool.title}
                </h3>
              </div>

              <dl className="divide-y divide-zinc-100 border-t border-zinc-200 text-xs sm:text-sm">
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Plataformas</dt>
                  <dd className="text-zinc-600">{tool.plataformas}</dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Acesso</dt>
                  <dd className="text-zinc-600">{tool.acesso}</dd>
                </div>
                <div className="py-3 space-y-1.5">
                  <dt className="font-semibold text-zinc-900">Funcionalidades</dt>
                  <dd>
                    <ul className="space-y-1.5 text-xs text-zinc-700 leading-relaxed">
                      {tool.funcionalidades
                        .split('|')
                        .map((item) => item.replace('[OK]', '').trim())
                        .filter(Boolean)
                        .map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check
                              className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                    </ul>
                  </dd>
                </div>
                <div className="pt-3 space-y-1">
                  <dt className="font-semibold text-zinc-900">Gratuito?</dt>
                  <dd className="text-zinc-800 font-medium">{tool.gratuito}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* VANTAGENS PEDAGOGICAS DO AUDIO */}
      <section className="space-y-5">
        <div className="border-b border-zinc-200 pb-3">
          <h2 className="font-display text-2xl font-bold text-zinc-900">
            VANTAGENS PEDAGOGICAS DO AUDIO
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
    </div>
  );
};
