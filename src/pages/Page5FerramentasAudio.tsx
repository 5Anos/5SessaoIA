import React from 'react';
import { Headphones, ShieldCheck } from 'lucide-react';
import { AUDIO_TOOLS } from '../data/moduloData.ts';
import { PageHeader } from '../components/PageHeader.tsx';
import { ToolCatalogCard } from '../components/ToolCatalogCard.tsx';

const PEDAGOGICAL_BENEFITS = [
  {
    title: 'Diferenciação pedagógica',
    desc: 'Permite disponibilizar explicações em áudio para apoiar diferentes ritmos de aprendizagem, devendo ser acompanhadas por transcrições ou alternativas escritas quando necessário.',
  },
  {
    title: 'Poupança de tempo',
    desc: 'Consoante a ferramenta, pode acelerar a preparação de narrações a partir de texto, o corte de gravações ou a redução de ruído, exigindo sempre revisão do professor antes da utilização.',
  },
  {
    title: 'Melhoria da comunicação',
    desc: 'Facilita a obtenção de áudio mais audível, gravações com menos ruído de fundo e legendagem ou transcrição de apoio, sem dispensar a verificação de pronúncia e entoação.',
  },
  {
    title: 'Avaliação diversificada',
    desc: 'Apoia trabalhos orais gravados e feedback áudio produzidos por alunos e docentes; a fala sintética gerada por IA não substitui nem comprova o desempenho oral real do aluno.',
  },
  {
    title: 'Apoio linguístico',
    desc: 'Ajuda a preparar modelos de compreensão auditiva e pronúncia, verificando sempre a variedade linguística selecionada — em especial a distinção entre Português (Portugal) e Português (Brasil).',
  },
  {
    title: 'Inclusão',
    desc: 'Apoia alunos com dificuldades de leitura através de recursos sonoros e reforça a acessibilidade quando combinado com transcrições escritas ou legendas adequadas.',
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

        <aside
          aria-labelledby="nota-privacidade-audio"
          className="bg-[#faf9fe] border border-indigo-100 rounded-xl px-5 py-4 space-y-2"
        >
          <h3
            id="nota-privacidade-audio"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d153e]"
          >
            <ShieldCheck className="w-4 h-4 text-[#4f46e5] shrink-0" aria-hidden="true" />
            <span>Privacidade, segurança e utilização responsável</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-[#3d4663] leading-relaxed">
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Não carregue gravações identificáveis de alunos nem dados pessoais sem autorização adequada e salvaguardas institucionais.</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Consulte a política de privacidade e as condições de tratamento de dados de cada plataforma antes da utilização.</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Não utilize vozes sintéticas para imitar pessoas identificáveis sem o seu consentimento expresso.</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Rever e validar todo o áudio gerado por IA antes da utilização em aula (exatidão, pronúncia e entoação).</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Forneça transcrições ou alternativas acessíveis sempre que adequado às necessidades dos alunos.</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#4f46e5]">·</span>
              <span>Confirme se a voz ou transcrição selecionada utiliza Português (Portugal) ou Português (Brasil).</span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-6">
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="font-display text-2xl font-bold text-[#0d153e]">
            FERRAMENTAS DE ÁUDIO
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
              showOfficialSource={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
