import { Link } from 'react-router-dom';
import { UNITS } from '../data/units';

export default function PortalHome() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border border-white/15 bg-neutral-950 p-8 md:p-12">
          <div className="mb-4 inline-block border border-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white/70">
            Portal principal
          </div>
          <h1 className="mb-5 text-4xl font-black uppercase leading-none md:text-7xl">
            Escolha a <span className="text-move-blue">aba</span> que deseja acessar
          </h1>
          <p className="max-w-3xl text-lg text-white/75 md:text-xl">
            O site agora começa com três entradas principais: Dinamus Alphaville, Escola Huios e MOVE. Cada área pode ter conteúdos próprios, sem misturar as informações.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {UNITS.map((unit) => (
            <Link
              key={unit.id}
              to={unit.path}
              className="group border border-white/15 bg-neutral-950 p-6 transition-transform hover:-translate-y-1 hover:border-white/40"
            >
              <div className={`mb-6 inline-flex border px-3 py-1 text-xs font-black uppercase tracking-[0.25em] ${unit.accent}`}>
                {unit.shortName}
              </div>
              <h2 className="mb-3 text-3xl font-black uppercase leading-none">{unit.name}</h2>
              <p className="mb-6 min-h-20 text-white/70">{unit.subtitle}</p>
              <ul className="mb-8 space-y-2 text-sm font-bold uppercase tracking-wide text-white/75">
                {unit.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Entrar</span>
                <span className="text-lg font-black uppercase text-move-blue transition group-hover:text-white">{unit.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
