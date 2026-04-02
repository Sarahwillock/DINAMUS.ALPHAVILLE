import {
  Calendar,
  Grid2x2,
  Home,
  MapPin,
  Mic2,
  Ticket,
  Users,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { label: 'Portal', to: '/', icon: Home },
  { label: 'Início Move', to: '/schedules', icon: Home },
  { label: 'Agenda', to: '/full-schedule', icon: Calendar },
  { label: 'Eventos Move', to: '/june', icon: Grid2x2 },
  { label: 'Líderes', to: '/leaders', icon: Mic2 },
  { label: 'GCs', to: '/gc', icon: Ticket },
  { label: 'Local', to: '/local', icon: MapPin },
];

export default function MoveBottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black/95 px-2 pb-4 pt-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-full items-center gap-2 overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex min-w-[88px] flex-col items-center gap-1.5 rounded-2xl px-3 py-2 text-center transition-all duration-300 ${
                active
                  ? 'bg-[#AC351B] text-white shadow-lg shadow-[#AC351B]/20'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] leading-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
