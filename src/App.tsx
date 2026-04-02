import MoveBottomNav from './components/MoveBottomNav';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import GCs from './pages/GCs';
import FullSchedule from './pages/FullSchedule';
import Leaders from './pages/Leaders';
import Local from './pages/Local';
import PortalHome from './pages/PortalHome';
import HomePage from './pages/Home';
import DinamusHome from './pages/DinamusHome';
import HuiosHome from './pages/HuiosHome';

import { saveToCalendar } from './lib/calendar';

// ================= MOVE LAYOUT =================

function MoveLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">
        <Navbar />

        {/* IMPORTANTE: padding maior */}
        <main className="flex-1 pb-32">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/move" element={<HomePage />} />
              <Route path="/move/june" element={<June />} />
              <Route path="/move/april" element={<April />} />
              <Route path="/move/may" element={<May />} />
              <Route path="/move/local" element={<Local />} />
              <Route path="/move/schedules" element={<MoveSchedules />} />
              <Route path="/move/gcs" element={<GCs />} />
              <Route path="/move/full-schedule" element={<FullSchedule />} />
              <Route path="/move/leaders" element={<Leaders />} />
              <Route path="/move/tickets" element={<GCs />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* 👇 MENU CORRETO (SUBSTITUI O ANTIGO) */}
        <MoveBottomNav />
      </div>
    </div>
  );
}

// ================= MOVE SCHEDULE =================

function MoveSchedules() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8 border-l-4 border-white bg-move-blue p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:mb-12 sm:border-l-8 sm:p-6 lg:p-8">
          <h2 className="mb-2 text-lg font-black italic uppercase tracking-tighter text-white sm:text-xl lg:text-2xl">
            PRÓXIMO EVENTO
          </h2>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-3xl font-black uppercase text-white">
                Seminário de Evangelismo
              </h3>
              <p className="text-sm text-white/80">
                11 DE ABRIL · 15:00
              </p>
            </div>

            <button
              onClick={() =>
                saveToCalendar({
                  title: 'Seminário de Evangelismo',
                  description: 'Seminário de Evangelismo - MOVE Alphaville',
                  location: 'Igreja Dinamus Alphaville',
                  startTime: '20260411T150000Z',
                  endTime: '20260411T180000Z',
                })
              }
              className="bg-white px-6 py-3 font-bold text-move-blue hover:bg-move-pink hover:text-white"
            >
              TE VEJO LÁ
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ================= ROTAS =================

function AppRoutes() {
  const location = useLocation();
  const isMoveRoute =
    location.pathname === '/move' || location.pathname.startsWith('/move/');

  if (isMoveRoute) {
    return <MoveLayout />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PortalHome />} />
        <Route path="/dinamus" element={<DinamusHome />} />
        <Route path="/huios" element={<HuiosHome />} />
        <Route path="*" element={<PortalHome />} />
      </Routes>
    </AnimatePresence>
  );
}

// ================= APP =================

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
