import { Link } from 'react-router-dom';
import MoveBottomNav from '../components/MoveBottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-6 md:p-10 pb-32">
        <div className="max-w-6xl mx-auto pt-8">
          <div className="border-2 border-move-blue bg-neutral-950 p-8 md:p-12">
            <div className="inline-block bg-move-pink px-4 py-1 text-xs font-black uppercase tracking-widest mb-6">
              MOVE ALPHAVILLE
            </div>

            <h1 className="text-4xl md:text-7xl font-black uppercase leading-none mb-6">
              BEM-VINDO AO <br />
              <span className="text-move-blue">MOVE 2026</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-3xl mb-10">
              Aqui você encontra a agenda, os eventos MOVE, os líderes da casa, os GCs e o local dos encontros.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/schedules"
                className="bg-move-blue text-white px-6 py-5 font-black uppercase text-center hover:bg-move-pink transition"
              >
                Ver Início
              </Link>

              <Link
                to="/full-schedule"
                className="border-2 border-white text-white px-6 py-5 font-black uppercase text-center hover:bg-white hover:text-black transition"
              >
                Agenda
              </Link>

              <Link
                to="/june"
                className="border-2 border-move-blue text-white px-6 py-5 font-black uppercase text-center hover:bg-move-blue transition"
              >
                Eventos Move
              </Link>

              <Link
                to="/local"
                className="border-2 border-move-pink text-white px-6 py-5 font-black uppercase text-center hover:bg-move-pink transition"
              >
                Local
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MoveBottomNav />
    </div>
  );
}
