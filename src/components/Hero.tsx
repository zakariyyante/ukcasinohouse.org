import Image from "next/image";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs md:text-sm font-bold text-white/80 uppercase tracking-widest">
            UK&apos;s Premier Casino Review Hub {currentYear}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          Find UK&apos;s Best <span className="gold-text">Casino</span> Sites
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
          Expert-reviewed, exclusive bonuses, rapid payouts. We only list the most trusted and licensed platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Licensed", icon: "🛡️", desc: "UKGC Regulated" },
            { title: "Expert Approved", icon: "⭐", desc: "Rigorous Testing" },
            { title: "Quick Withdrawals", icon: "⚡", desc: "Under 24 Hours" },
          ].map((badge) => (
            <div key={badge.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-3xl">{badge.icon}</span>
              <div className="text-left">
                <div className="text-sm font-black text-white uppercase">{badge.title}</div>
                <div className="text-xs text-white/40">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
