import { Calendar, Contact2, Home, Users, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { label: 'Início', to: '/move', icon: Home },
  { label: 'Agenda', to: '/move/agenda', icon: Calendar },
  { label: 'GCs', to: '/move/gcs', icon: Users },
  { label: 'Fidelidade', to: '/move/fidelidade', icon: Wallet },
  { label: 'Contato', to: '/move/contato', icon: Contact2 },
];

export default function MoveBottomNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/move') return location.pathname === '/move';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black/65 px-4 pb-6 pt-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex min-w-[78px] flex-col items-center gap-1.5 rounded-2xl px-3 py-2 transition-all duration-300 ${
                active
                  ? 'scale-105 bg-[#AC351B] text-white shadow-lg shadow-[#AC351B]/20'
                  : 'text-white/55 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
