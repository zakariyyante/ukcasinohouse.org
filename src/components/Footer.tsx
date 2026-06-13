import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const domain = "ukcasinohouse.org";

  return (
    <footer className="bg-[#00050d] py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="flex items-center gap-4 mb-6 group">
            <div className="relative w-14 h-14">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <circle cx="50" cy="50" r="48" fill="#001a3d" stroke="#b8860b" strokeWidth="4" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#8b0000" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M50 20 L60 40 L40 40 Z" fill="#b8860b" />
                <text x="50" y="65" textAnchor="middle" fill="#b8860b" fontWeight="900" fontSize="24" fontFamily="serif">UK</text>
                <path d="M50 85 L40 75 Q50 70 60 75 Z" fill="#b8860b" />
              </svg>
            </div>
            <div className="flex flex-col leading-none font-serif">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-[#001a3d]">uk</span>
                <span className="text-3xl font-bold text-[#8b0000]">casino</span>
                <span className="text-3xl font-bold text-[#b8860b]">house</span>
              </div>
              <span className="text-[10px] tracking-[0.4em] text-white/20 font-medium uppercase mt-1 ml-1">
                {domain}
              </span>
            </div>
          </Link>
          <p className="text-white/40 text-sm max-w-md text-center leading-relaxed">
            The United Kingdom&apos;s most prestigious directory for elite online casino experiences. Licensed, secure, and hand-vetted.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-y border-white/5 py-16">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Home</Link></li>
              <li><Link href="#brands" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Elite Brands</Link></li>
              <li><Link href="#guide" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Casino Guide</Link></li>
              <li><Link href="#about" className="text-white/40 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Legal Affairs</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Regulatory Disclosure</h4>
            <p className="text-white/30 text-xs leading-relaxed font-medium">
              UK Casino House operates as an independent reviewer and affiliate. We receive compensation from the brands featured on this platform, which may influence their positioning. Our evaluations are strictly based on professional standards and real-world testing. We are not a gambling operator. Please verify local regulations and age requirements before engaging in any gambling activities.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/18plus.svg" alt="18+" width={36} height={36} />
            <Image src="/ukgc.svg" alt="UKGC" width={90} height={36} />
            <Image src="/gamstop.svg" alt="GAMSTOP" width={110} height={36} />
            <Image src="/begambleaware.svg" alt="BeGambleAware" width={130} height={36} />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/10 text-[10px] uppercase tracking-[0.3em] font-bold">
              © {currentYear} {domain} • All Rights Reserved
            </p>
            <p className="text-white/5 text-[9px] uppercase tracking-[0.1em] font-medium">
              Designed for the discerning player
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
