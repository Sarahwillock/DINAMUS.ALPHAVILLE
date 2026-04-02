import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, MapPin, Users } from 'lucide-react';

export default function DinamusHome() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-cyan-300 transition hover:text-white">
          <ArrowLeft size={18} /> Voltar ao portal
        </Link>

        <section className="border-2 border-cyan-400 bg-neutral-950 p-8 md:p-12">
          <div className="mb-4 inline-block bg-cyan-400 px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-black">
            Dinamus Alphaville
          </div>
          <h1 className="text-4xl font-black uppercase leading-none md:text-7xl">
            Página própria da Dinamus
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/75 md:text-xl">
            Aqui você pode colocar o conteúdo exclusivo da Dinamus, separado da MOVE. Essa página já está pronta para receber informações da igreja, agenda, equipes e localização.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="border border-white/10 bg-neutral-950 p-6">
            <CalendarDays className="mb-4 text-cyan-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Agenda da casa</h2>
            <p className="mt-3 text-white/70">Use esse espaço para cultos, conferências, encontros especiais e calendário da Dinamus.</p>
          </article>
          <article className="border border-white/10 bg-neutral-950 p-6">
            <Users className="mb-4 text-cyan-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Ministérios</h2>
            <p className="mt-3 text-white/70">Adicione líderes, departamentos, contatos e áreas da igreja em uma seção própria.</p>
          </article>
          <article className="border border-white/10 bg-neutral-950 p-6">
            <MapPin className="mb-4 text-cyan-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Localização</h2>
            <p className="mt-3 text-white/70">Pode incluir mapa, endereço, horários de culto e instruções para chegar.</p>
          </article>
        </section>
      </div>
    </div>
  );
}
