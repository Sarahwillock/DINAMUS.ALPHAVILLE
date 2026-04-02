import { Link, useLocation } from 'react-router-dom';
import { Calendar, Bell, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Início', path: '/schedules' },
    { name: 'Agenda', path: '/full-schedule' },
    { name: 'EVENTOS MOVE', path: '/' },
    { name: 'Líderes da Casa', path: '/leaders' },
    { name: 'GCs', path: '/gcs' },
  ];

  return (
    <nav className="bg-neutral-950 text-move-blue font-bold uppercase tracking-tighter border-b-2 border-move-blue flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50">
      <Link to="/" className="text-2xl font-black italic text-move-blue">MOVE</Link>
      
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "px-2 transition-colors",
              location.pathname === link.path 
                ? "text-move-pink border-b-4 border-move-pink" 
                : "text-neutral-400 hover:bg-move-blue hover:text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://www.instagram.com/move.alphaville/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] text-move-pink hover:text-white transition-colors tracking-widest hidden lg:block"
        >
          @MOVE.ALPHAVILLE
        </a>
        <Link to="/full-schedule">
          <Calendar className="cursor-pointer hover:text-move-pink transition-colors" size={20} />
        </Link>
        <Bell className="cursor-pointer hover:text-move-pink transition-colors" size={20} />
        <div className="ml-4 bg-neutral-800 p-2 border border-move-blue flex items-center gap-2">
          <Search size={18} />
          <span className="hidden sm:inline text-[10px] tracking-widest">SEARCH</span>
        </div>
      </div>
    </nav>
  );
}
