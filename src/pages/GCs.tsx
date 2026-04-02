import { motion } from 'motion/react';
import { Ticket, Users, Clock, MapPin } from 'lucide-react';
import { saveToCalendar } from '../lib/calendar';

export default function GCs() {
  const gcs = [
    {
      name: "GC Lobby",
      leader: "Hugo",
      schedule: "Sábado (15 em 15 dias)",
      time: "18:00",
      location: "Alphaville",
      color: "move-blue",
      event: {
        title: "GC Lobby - Hugo",
        description: "GC Lobby com líder Hugo - MOVE Alphaville",
        location: "Alphaville",
        startTime: "20260404T180000Z",
        endTime: "20260404T200000Z"
      }
    },
    {
      name: "GC Conecta",
      leader: "Bia e Gui",
      schedule: "Quinta (15 em 15 dias)",
      time: "20:00",
      location: "Alphaville",
      color: "move-pink",
      event: {
        title: "GC Conecta - Bia e Gui",
        description: "GC Conecta com líderes Bia e Gui - MOVE Alphaville",
        location: "Alphaville",
        startTime: "20260402T200000Z",
        endTime: "20260402T220000Z"
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-move-blue p-4 neo-brutalist-shadow">
          <Ticket className="text-white" size={40} />
        </div>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter text-move-blue">GRUPOS DE CONEXÃO (GCs)</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gcs.map((gc) => (
          <div 
            key={gc.name}
            className={`glass-card p-8 border-l-8 ${gc.color === 'move-blue' ? 'border-move-blue' : 'border-move-pink'} relative overflow-hidden group`}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-black uppercase leading-none mb-2">{gc.name}</h2>
                  <p className="text-xl font-bold text-move-orange uppercase tracking-widest">Líder: {gc.leader}</p>
                </div>
                <Users size={32} className="opacity-20" />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-400" />
                  <span className="font-bold uppercase tracking-tight">{gc.schedule} · {gc.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-400" />
                  <span className="font-bold uppercase tracking-tight">{gc.location}</span>
                </div>
              </div>

              <button 
                onClick={() => saveToCalendar(gc.event)}
                className={`w-full py-4 font-black text-xl uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  gc.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'
                } text-white`}
              >
                TE VEJO LÁ
              </button>
            </div>
            
            {/* Decorative background text */}
            <div className="absolute -right-4 -bottom-4 text-8xl font-black opacity-5 uppercase italic select-none">
              {gc.name.split(' ')[1]}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-4 border-dashed border-move-blue/30 text-center">
        <h3 className="text-2xl font-black uppercase mb-4">Quer abrir um GC ou saber mais?</h3>
        <a 
          href="https://www.instagram.com/move.alphaville/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-4 font-black uppercase tracking-tighter hover:bg-move-pink hover:text-white transition-all"
        >
          FALAR COM A GENTE
        </a>
      </div>
    </motion.div>
  );
}
