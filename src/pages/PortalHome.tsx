import { Link } from 'react-router-dom';
import { ArrowRight, Building2, GraduationCap, Sparkles } from 'lucide-react';

const units = [
  {
    title: 'Dinamus Alphaville',
    subtitle: 'Igreja e programação geral',
    path: '/dinamus',
    accent: 'border-cyan-400',
    button: 'bg-cyan-400 text-black hover:bg-cyan-300',
    icon: Building2,
    description: 'Página própria da Dinamus para você organizar agenda, localização, ministérios e avisos da igreja.'
  },
  {
    title: 'Escola Huios',
    subtitle: 'Formação e conteúdos da escola',
    path: '/huios',
    accent: 'border-amber-400',
    button: 'bg-amber-400 text-black hover:bg-amber-300',
    icon: GraduationCap,
    description: 'Página própria da Huios para concentrar módulos, calendário, professores e informações da escola.'
  },
  {
    title: 'MOVE',
    subtitle: 'Site atual que já estava rodando',
    path: '/move',
    accent: 'border-move-pink',
    button: 'bg-move-blue text-white hover:bg-move-pink',
    icon: Sparkles,
    description: 'Abre o projeto MOVE completo com agenda, líderes, GCs, local e os eventos que já existiam.'
  }
];

export default function PortalHome() {
  return (
    <div
  className="min-h-screen relative px-6 py-10 text-white md:px-10"
  style={{
    backgroundImage: "url('/capa.JPEG')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-2 border-white/10 bg-neutral-950 p-8 md:p-12">
          <div className="mb-4 inline-block border border-white/20 px-4 py-1 text-xs font-black uppercase tracking-[0.35em] text-white/70">
            Portal principal
          </div>
          <h1 className="max-w-5xl text-4xl font-black uppercase leading-none md:text-7xl">
            SEJA FAMILIA DINAMUS
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/70 md:text-xl">
            <p>
  Selecione uma de noaas paginas para acessar suas informações, agenda e conteúdos exclusivos.
</p>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {units.map((unit) => {
            const Icon = unit.icon;
            return (
              <Link
                key={unit.title}
                to={unit.path}
                className={`group flex min-h-[320px] flex-col justify-between border-2 ${unit.accent} bg-neutral-950 p-8 transition-transform hover:-translate-y-1`}
              >
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon size={28} />
                  </div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-white/50">{unit.subtitle}</p>
                  <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">{unit.title}</h2>
                  <p className="mt-5 text-sm leading-6 text-white/70 md:text-base">{unit.description}</p>
                </div>
                <div className={`mt-8 inline-flex items-center justify-between px-5 py-4 font-black uppercase transition ${unit.button}`}>
                  <span>Acessar página</span>
                  <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
