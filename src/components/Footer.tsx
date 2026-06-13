import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const domain = "ukcasinohouse.org";

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="flex items-center gap-3 mb-4 group">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.svg" 
                alt="UK Casino House Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-primary uppercase">UK</span>
                <span className="text-2xl font-black text-white uppercase">CASINO</span>
              </div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 font-medium uppercase mt-0.5">
                {domain}
              </span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/5 py-12">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="#brands" className="text-white/40 hover:text-primary transition-colors text-sm">Top Brands</Link></li>
              <li><Link href="#guide" className="text-white/40 hover:text-primary transition-colors text-sm">Casino Guide</Link></li>
              <li><Link href="#about" className="text-white/40 hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/40 hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-white/40 hover:text-primary transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Disclaimer</h4>
            <p className="text-white/30 text-xs leading-relaxed">
              UK Casino House is an independent review site. We receive advertising compensation from the companies that appear on this site. This compensation impacts the location and order in which the companies are presented. All reviews and ratings are based on our expert opinion and testing. We are not a gambling operator. Please ensure you meet all age and other regulatory requirements before entering a casino site.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <Image src="/18plus.svg" alt="18+" width={40} height={40} />
            <Image src="/ukgc.svg" alt="UKGC" width={100} height={40} />
            <Image src="/gamstop.svg" alt="GAMSTOP" width={120} height={40} />
            <Image src="/begambleaware.svg" alt="BeGambleAware" width={140} height={40} />
          </div>
          
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium">
            © {currentYear} {domain} • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
