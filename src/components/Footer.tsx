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
          <Link href="/" className="flex items-center mb-6 group">
            <div className="relative w-[350px] h-[70px]">
              <Image 
                src="/logo.png" 
                alt="UK Casino House" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-white/40 text-sm max-w-md text-center leading-relaxed">
            The United Kingdom&apos;s most prestigious directory for elite online casino experiences. Licensed, secure, and hand-vetted.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-y border-white/5 py-16">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Home</Link></li>
              <li><Link href="/#brands" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Brands</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Cookie Policy</Link></li>
              <li><Link href="/disclosure" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Disclaimer</h4>
            <p className="text-white/30 text-xs leading-relaxed font-medium">
              UK Casino House operates as an independent reviewer and affiliate. We receive compensation from the brands featured on this platform, which may influence their positioning. Our evaluations are strictly based on professional standards and real-world testing. We are not a gambling operator. Please verify local regulations and age requirements before engaging in any gambling activities.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/gambleaware.png" alt="BeGambleAware" width={160} height={40} className="h-8 w-auto object-contain" />
            <Image src="/gamcare.png" alt="GamCare" width={120} height={40} className="h-8 w-auto object-contain" />
            <Image src="/gamestop.png" alt="GAMSTOP" width={120} height={40} className="h-8 w-auto object-contain" />
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
