import Image from "next/image";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm">
          <span className="text-[#b8860b]">👑</span>
          <span className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.3em]">
            UK&apos;s Elite Casino Selection {currentYear}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] font-serif">
          The Pinnacle of <br />
          <span className="gold-text">UK Online Casinos</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover hand-picked, premium casino experiences. Rigorously vetted for security, speed, and exclusive rewards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Elite Security", icon: "🛡️", desc: "UKGC Regulated" },
            { title: "Premium Support", icon: "💎", desc: "24/7 VIP Care" },
            { title: "Instant Payouts", icon: "⚡", desc: "Zero Delay" },
          ].map((badge) => (
            <div key={badge.title} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500 group">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{badge.icon}</span>
              <div className="text-center">
                <div className="text-sm font-bold text-white uppercase tracking-widest mb-1">{badge.title}</div>
                <div className="text-xs text-white/30 font-medium">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
