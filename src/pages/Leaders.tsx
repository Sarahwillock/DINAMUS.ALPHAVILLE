import { motion } from 'motion/react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const leaders = [
  {
    name: 'Hugo',
    role: 'Líder da Casa',
    image: 'IMG_3631.jpg', // Using the provided filename
    bio: 'Líder visionário focado em despertar o propósito em cada jovem.',
    instagram: 'https://www.instagram.com/move.alphaville/'
  },
  {
    name: 'Guilherme e Bia',
    role: 'Líderes',
    image: 'WhatsApp Image 2026-04-01 at 14.36.16.jpeg', // Using the provided filename
    bio: 'Dedicados a construir conexões reais e profundas através dos GCs.',
    instagram: 'https://www.instagram.com/move.alphaville/'
  }
];

export default function Leaders() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-move-blue/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-move-pink/10 blur-[120px] -z-10" />

      <div className="relative z-10 p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bauhaus text-6xl md:text-8xl uppercase leading-none mb-4">
              LÍDERES <br />
              <span className="text-move-blue">DA CASA</span>
            </h1>
            <div className="w-24 h-2 bg-move-pink mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl uppercase tracking-widest font-bold">
              Conheça as pessoas que dedicam suas vidas para construir o MOVE e servir a nossa comunidade.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-move-blue/30 group-hover:border-move-blue transition-all duration-500">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="bg-move-pink text-white px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 inline-block">
                    {leader.role}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
                    {leader.name}
                  </h2>
                  <p className="text-gray-300 text-sm max-w-md mb-6 font-medium">
                    {leader.bio}
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={leader.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-move-blue hover:border-move-blue transition-all"
                    >
                      <Instagram size={18} />
                    </a>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-move-pink hover:border-move-pink transition-all cursor-pointer">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 glass-card p-12 border-move-blue relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MapPin size={120} className="text-move-blue" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black uppercase mb-6">ONDE NOS ENCONTRAR?</h3>
            <p className="text-gray-400 max-w-xl mb-8 font-bold tracking-wide">
              Estamos todos os sábados e quintas nos GCs e eventos mensais no prédio da Igreja Dinamus Alphaville.
            </p>
            <a 
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-move-blue text-white px-8 py-4 font-black uppercase tracking-tighter hover:bg-move-pink transition-colors"
            >
              VER LOCALIZAÇÃO
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
