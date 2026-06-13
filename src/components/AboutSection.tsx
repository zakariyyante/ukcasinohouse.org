import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black/40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight font-serif">
            The <span className="text-gold">Gold Standard</span> of Reviews
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-medium">
            Our commitment to excellence ensures you only access the most reliable and rewarding casino platforms in the United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Why Our Reviews Stand Out */}
          <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 felt-texture hover:border-gold/20 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 font-serif">
              <span className="text-gold">⚜️</span> Our Vetting Process
            </h3>
            <ul className="space-y-6">
              {[
                "Full UK Gambling Commission (UKGC) Compliance",
                "Advanced Security & SSL Encryption Verification",
                "Audited Payout Ratios & Withdrawal Efficiency",
                "Premium Player Experience & VIP Program Analysis",
                "Transparent Bonus Terms & Fair Wagering Policies",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-white/60 group">
                  <span className="text-gold mt-1 group-hover:scale-125 transition-transform">✦</span>
                  <span className="font-medium group-hover:text-white/90 transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="p-10 rounded-[2rem] bg-linear-to-br from-[#8b0000]/10 to-transparent border border-[#8b0000]/20 hover:border-[#8b0000]/40 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 font-serif">
              <span className="text-[#8b0000]">🛡️</span> Player Protection
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed font-medium">
              We prioritize your well-being. Gambling should remain a sophisticated form of entertainment. If you require assistance or wish to implement self-exclusion, please utilize these professional resources:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="https://www.gamstop.co.uk" 
                target="_blank"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:bg-white/[0.06] transition-all group"
              >
                <div className="font-bold text-white group-hover:text-gold transition-colors">GAMSTOP</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Self-Exclusion</div>
              </Link>
              <Link 
                href="https://www.gamcare.org.uk" 
                target="_blank"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:bg-white/[0.06] transition-all group"
              >
                <div className="font-bold text-white group-hover:text-gold transition-colors">GamCare</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Expert Support</div>
              </Link>
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-[#8b0000]/5 border border-[#8b0000]/10 text-center">
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2">National Gambling Helpline</p>
              <p className="text-3xl font-bold text-gold font-serif tracking-tighter">0808 8020 133</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
