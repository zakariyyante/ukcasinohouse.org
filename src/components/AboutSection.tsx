import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-tight">
          How We Rate <span className="text-primary">Casino</span> Sites
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why Our Reviews Stand Out */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 felt-texture">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">♠️</span> Why Our Reviews Stand Out
            </h3>
            <ul className="space-y-4">
              {[
                "Licensed by the UK Gambling Commission (UKGC)",
                "Rigorous security and SSL encryption testing",
                "Verified payout speeds and withdrawal limits",
                "Real player feedback and community reputation",
                "Exclusive bonus terms and wagering transparency",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-primary mt-1">✔️</span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="p-8 rounded-3xl bg-linear-to-br from-red-900/20 to-black border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-red-500">🛡️</span> Responsible Gambling
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              At UK Casino House, we are committed to promoting safe and responsible gambling. Gambling should be a form of entertainment, not a way to make money. If you feel you are losing control, please reach out to the following organizations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="https://www.gamstop.co.uk" 
                target="_blank"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="font-bold text-white">GAMSTOP</div>
                <div className="text-xs text-white/40">Self-Exclusion Scheme</div>
              </Link>
              <Link 
                href="https://www.gamcare.org.uk" 
                target="_blank"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="font-bold text-white">GamCare</div>
                <div className="text-xs text-white/40">Support & Advice</div>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm font-bold text-white/80">National Gambling Helpline</p>
              <p className="text-2xl font-black text-primary">0808 8020 133</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
