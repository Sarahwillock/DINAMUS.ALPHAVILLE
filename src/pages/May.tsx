import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function May() {
  const mayEvents = MOVE_EVENTS.filter(e => e.month === 'Maio');

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <div className="relative z-50 p-4 sm:p-6 md:p-8"><MonthSwitcher /></div>

      <section className="relative min-h-[65vh] w-full overflow-hidden px-4 pb-8 pt-6 sm:px-6 md:min-h-[80vh] md:px-8">
        <img src="/maio.jpg" alt="MOVE May" className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 opacity-60" referrerPolicy="no-referrer" />
        <div className="absolute right-4 top-8 h-28 w-28 -rotate-12 border-2 border-move-blue bg-move-blue/20 sm:right-10 sm:top-10 sm:h-64 sm:w-64" />
        <div className="absolute bottom-16 left-4 h-32 w-24 rotate-6 border-r-4 border-move-pink bg-move-pink/10 sm:bottom-20 sm:left-10 sm:h-96 sm:w-48" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8 flex flex-col items-start">
            <div className="mb-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="bg-move-blue px-4 py-1 text-lg font-black uppercase tracking-tighter text-white sm:text-2xl">09.05</span>
              <span className="text-sm font-black italic uppercase tracking-[0.2em] text-move-pink sm:text-xl">ALPHAVILLE / SP</span>
            </div>
            <h1 className="text-[4.5rem] leading-[0.85] font-black italic uppercase tracking-tighter text-white drop-shadow-2xl sm:text-[6rem] md:text-[10rem] lg:text-[15rem]">MAIO</h1>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 pb-0 md:pb-12">
            <div className="border-l-4 border-white bg-move-blue p-5 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:border-l-8 sm:p-6"><h3 className="mb-2 text-2xl font-black uppercase leading-none sm:text-3xl">PERTENCER</h3><p className="text-sm font-bold uppercase tracking-widest opacity-90">PENSAR...</p></div>
            <div className="border-l-4 border-white bg-move-pink p-5 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:border-l-8 sm:p-6"><h3 className="mb-2 text-2xl font-black uppercase leading-none sm:text-3xl">AMADURECER</h3><p className="text-sm font-bold uppercase tracking-widest opacity-90">PENSAR...</p></div>
            <div className="border-l-4 border-white bg-move-orange p-5 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:border-l-8 sm:p-6"><h3 className="mb-2 text-2xl font-black uppercase leading-none sm:text-3xl">SERVIR</h3><p className="text-sm font-bold uppercase tracking-widest opacity-90">PENSAR...</p></div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-move-blue bg-neutral-900 px-4 py-8 sm:px-6 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-move-blue sm:text-4xl lg:text-6xl">CRONOGRAMA DIÁRIO</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button className="bg-white px-6 py-3 text-sm font-black uppercase text-black transition-colors hover:bg-move-pink hover:text-white">Lista Completa</button>
              <button className="border-2 border-move-blue px-6 py-3 text-sm font-black uppercase text-move-blue transition-colors hover:bg-move-blue hover:text-white">Exportar PDF</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {mayEvents.map((event) => {
              const accentBorder = event.color === 'move-blue' ? 'hover:border-move-blue' : 'hover:border-move-pink';
              const accentBg = event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink';
              const accentText = event.color === 'move-blue' ? 'hover:text-move-blue' : 'hover:text-move-pink';

              return (
                <div key={event.id} className={`group relative min-h-[240px] overflow-hidden border-2 border-transparent bg-neutral-800 p-5 transition-all sm:p-8 ${accentBorder}`}>
                  <div className="absolute -right-6 -top-6 text-7xl font-black opacity-10 transition-opacity group-hover:opacity-30 sm:-right-10 sm:-top-10 sm:text-9xl">{event.date.split('/')[0]}</div>
                  <span className={`${accentBg} mb-4 inline-block px-2 py-1 text-xs font-black uppercase text-white`}>{event.time}</span>
                  <h4 className="mt-2 text-3xl font-black uppercase leading-none sm:text-4xl">{event.title}</h4>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <a href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={`block text-xs font-bold uppercase text-neutral-400 transition-colors ${accentText}`}>{event.day} · Prédio da Igreja</a>
                    <button onClick={() => saveToCalendar(event)} className={`${accentBg} w-full px-4 py-3 text-[10px] font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 sm:w-auto`}>TE VEJO LÁ</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex justify-center pb-6 sm:mt-12 sm:pb-12">
          <button onClick={() => saveToCalendar(mayEvents[0])} className="w-full max-w-sm bg-move-pink px-8 py-4 text-lg font-black uppercase tracking-tighter text-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-12 sm:py-6 sm:text-2xl">TE VEJO LÁ</button>
        </div>
      </section>
    </div>
  );
}
