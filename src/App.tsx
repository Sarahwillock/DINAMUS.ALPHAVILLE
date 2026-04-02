import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import GCs from './pages/GCs';
import FullSchedule from './pages/FullSchedule';
import Leaders from './pages/Leaders';
import { Home, Calendar, LayoutGrid, User, Users } from 'lucide-react';
import { saveToCalendar } from './lib/calendar';

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-move-dark">
      <Sidebar />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<June />} />
              <Route path="/june" element={<June />} />
              <Route path="/april" element={<April />} />
              <Route path="/may" element={<May />} />
              <Route 
                path="/schedules" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8">
                      <div className="mb-12 bg-move-blue p-8 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-2">PRÓXIMO EVENTO</h2>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h3 className="text-5xl font-black uppercase leading-none text-white mb-2">Seminário de Evangelismo</h3>
                            <p className="text-xl font-bold text-white/80 uppercase tracking-widest">11 DE ABRIL · SÁBADO · 15:00</p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                              onClick={() => saveToCalendar({
                                title: "Seminário de Evangelismo",
                                description: "Seminário de Evangelismo - MOVE Alphaville",
                                location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
                                startTime: "20260411T150000Z",
                                endTime: "20260411T180000Z"
                              })}
                              className="bg-white text-move-blue px-8 py-4 font-black text-xl uppercase tracking-tighter hover:bg-move-pink hover:text-white transition-all"
                            >
                              TE VEJO LÁ
                            </button>
                            <Link to="/april" className="border-2 border-white text-white px-8 py-4 font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-move-blue transition-all">
                              VER DETALHES
                            </Link>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-6xl font-black italic uppercase tracking-tighter text-move-blue mb-8">EVENTOS MOVE</h1>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to="/april" className="group relative h-96 overflow-hidden border-2 border-move-blue">
                          <img 
                            src="https://lh3.googleusercontent.com/aida/ADBb0uiAAOYNvj9TvpYA1-SK2D2OTGeSvPclxq4HHhCmQfo1SqxujI4oSbtFHxiqxj2QI5HrTvooYbFZnXHPb2IgKG4NDAmOhT5lGUHrZNeXhLDG6XM5VmGzuxgCoEof6Ww7n-iwgKqFsZsXAP46vSvUxUmQwOjEppKVxf4upnKM_EnsDwNyI9CmZf1CINUMzBj6Tit_Vxz3S-trcoERsR8vBLSxhdKK3YJUtuJ4YmeJfL1C0ZArRwZ2xeplmGd7N4aCuankBUos-I0xeiA" 
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            alt="April"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          <div className="absolute bottom-6 left-6">
                            <h2 className="text-6xl font-black italic uppercase text-white">ABRIL</h2>
                          </div>
                        </Link>
                        <Link to="/may" className="group relative h-96 overflow-hidden border-2 border-move-pink">
                          <img 
                            src="https://lh3.googleusercontent.com/aida/ADBb0uicONRmhG4bJhSISyu3k4ACAPiV9d5J6P9HLx0kGbiT2OEerHQ7yl3oD0jLbk2mZfvSKzKcOccNXD3vwPJEUiHcnJfgw-X0Hlga2_To4xJPJ720G35mLKNt--NAdQfVo-OyTTO3O86Be8HFWUjQz03-iQvuDUmRK-k4qyw3__Nt14GemT4oRqCRJd7MRwCDOeVHwp9OwbGpjDKbbEFhbrfVeVW2AD8fs4J2ssUOcA4xrUYeKZazdyFIWNmM0aUabhVcV4A9xC_eng" 
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            alt="May"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          <div className="absolute bottom-6 left-6">
                            <h2 className="text-6xl font-black italic uppercase text-white">MAIO</h2>
                          </div>
                        </Link>
                        <Link to="/june" className="group relative h-96 overflow-hidden border-2 border-move-orange">
                          <img 
                            src="https://lh3.googleusercontent.com/aida/ADBb0ujfdyVJB0MACQs9vJtZSkeMpsgW-Qss837J7lGLF923SC5Uuta5BYIRQyc-J3n9-5LJFrnBUwn4sy2RrZ5jDyAMbZHs-NPC8cTP3uj1PcUX33nvX0ej-2LJTlcRu528cGLVxjGCCXTuokHvHVj8AzKmp-Nmx3hTbfdgjced8jDt8gi0fafgklTXSPNl2bBX4Z5W6wGKW8zhp-u0tReYM2zGqyB1pOMEPhDLvH4HkWaMAbBXceSwe_zqB4ukavMPkd7mKM1GiLshdQ" 
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            alt="June"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          <div className="absolute bottom-6 left-6">
                            <h2 className="text-6xl font-black italic uppercase text-white">JUNHO</h2>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                } 
              />
              <Route path="/april" element={<April />} />
              <Route path="/may" element={<May />} />
              <Route path="/june" element={<June />} />
              <Route path="/gcs" element={<GCs />} />
              <Route path="/full-schedule" element={<FullSchedule />} />
              <Route path="/leaders" element={<Leaders />} />
              <Route path="/tickets" element={<GCs />} />
              <Route path="*" element={<div className="p-20 text-center text-4xl font-black uppercase">Coming Soon</div>} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Mobile Nav */}
        <nav className="lg:hidden fixed bottom-0 w-full z-50 flex justify-around items-center bg-black border-t-4 border-move-blue p-2">
          <Link to="/schedules" className="flex flex-col items-center justify-center text-neutral-400 p-2 flex-1">
            <Home size={20} />
            <span className="text-[10px] font-bold uppercase">Início</span>
          </Link>
          <Link to="/full-schedule" className="flex flex-col items-center justify-center text-neutral-400 p-2 flex-1">
            <Calendar size={20} />
            <span className="text-[10px] font-bold uppercase">Agenda</span>
          </Link>
          <Link to="/leaders" className="flex flex-col items-center justify-center text-neutral-400 p-2 flex-1">
            <Users size={20} />
            <span className="text-[10px] font-bold uppercase">Líderes</span>
          </Link>
          <Link to="/gcs" className="flex flex-col items-center justify-center text-neutral-400 p-2 flex-1">
            <LayoutGrid size={20} />
            <span className="text-[10px] font-bold uppercase">GCs</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
