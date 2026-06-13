import Image from "next/image";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-64 bg-linear-to-b from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-linear-to-b from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-10 backdrop-blur-md reveal-up" style={{ animationDelay: '0.1s' }}>
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-black text-white/60 uppercase tracking-[0.4em]">
              The Gold Standard of UK Gaming {currentYear}
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] font-serif reveal-up" style={{ animationDelay: '0.2s' }}>
            Elegance in <br />
            <span className="gold-text italic">Every Spin.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-medium leading-relaxed reveal-up" style={{ animationDelay: '0.3s' }}>
            Access an exclusive collection of the UK&apos;s most prestigious casino houses. Vetted for the discerning player.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24 reveal-up" style={{ animationDelay: '0.4s' }}>
            <a href="#brands" className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-gold hover:text-white transition-all duration-500 shadow-2xl shadow-white/5">
              Explore Collection
            </a>
            <a href="#about" className="px-10 py-5 bg-transparent text-white border border-white/10 font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all duration-500">
              Our Vetting Process
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto reveal-up" style={{ animationDelay: '0.5s' }}>
            {[
              { label: "Licensed", value: "UKGC", icon: "⚖️" },
              { label: "Security", value: "SSL-256", icon: "🔒" },
              { label: "Payouts", value: "Instant", icon: "💸" },
              { label: "Support", value: "24/7 VIP", icon: "🎩" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.05] transition-all duration-500">
                <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{item.label}</span>
                <span className="text-sm font-black text-white group-hover:text-gold transition-colors">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
