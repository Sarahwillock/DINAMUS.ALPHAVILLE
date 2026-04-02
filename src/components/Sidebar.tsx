import { Link, useLocation } from 'react-router-dom';
import { Calendar, Mic2, Ticket, MapPin, LayoutGrid, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Início', path: '/', icon: Home },
  { name: 'Agenda', path: '/full-schedule', icon: Calendar },
  { name: 'EVENTOS MOVE', path: '/june', icon: LayoutGrid },
  { name: 'Líderes da Casa', path: '/leaders', icon: Mic2 },
  { name: 'GCs', path: '/gcs', icon: Ticket },
  { name: 'Local', path: '/local', icon: MapPin },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 bg-neutral-900 border-r-2 border-move-blue z-40 font-bold uppercase">
      <div className="p-6 border-b-2 border-move-blue/20">
        <div className="text-3xl font-black text-white">MOVE 2026</div>
        <a 
          href="https://www.instagram.com/move.alphaville/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] text-move-blue hover:text-move-pink transition-colors tracking-widest mt-1 block"
        >
          @MOVE.ALPHAVILLE
        </a>
      </div>
      <nav className="flex-1 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "p-4 flex items-center gap-4 transition-colors",
                isActive 
                  ? "bg-move-blue text-white brightness-125" 
                  : "text-neutral-400 hover:bg-move-pink hover:text-white"
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
