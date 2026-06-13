"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
}

export default function BrandCard({ brand, gclid, rank }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    
    // Track Vercel Analytics
    track("Brand Click", { brand: brand.name });

    // Track Google Ads Conversion
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(finalUrl);
    }

    window.open(finalUrl, "_blank");
  };

  const getRankBadge = (rank?: number) => {
    if (rank === 0) return <div className="absolute -top-3 -left-3 bg-[#b8860b] text-white font-black px-4 py-1.5 rounded-lg z-10 shadow-[0_4px_20px_rgba(184,134,11,0.4)] font-serif italic">#1 Elite</div>;
    if (rank === 1) return <div className="absolute -top-3 -left-3 bg-slate-400 text-white font-black px-4 py-1.5 rounded-lg z-10 shadow-lg font-serif italic">#2 Prestige</div>;
    if (rank === 2) return <div className="absolute -top-3 -left-3 bg-[#8b4513] text-white font-black px-4 py-1.5 rounded-lg z-10 shadow-lg font-serif italic">#3 Select</div>;
    return null;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="casino-card-bg relative group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:casino-glow flex flex-col h-full border-white/5 hover:border-gold/30"
    >
      {getRankBadge(rank)}
      
      {/* Elegant border accents */}
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/20"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/20"></div>

      <div className="p-8 flex flex-col h-full">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-32 h-32 bg-white/[0.02] rounded-2xl flex items-center justify-center p-4 mb-6 border border-white/5 group-hover:border-gold/20 transition-colors">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              width={100} 
              height={100} 
              className="object-contain filter drop-shadow-md"
            />
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors font-serif mb-2">
            {brand.name}
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(brand.rating / 2) ? 'fill-current' : 'fill-white/10'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-gold/80">{brand.rating.toFixed(1)}/10</span>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center mb-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Exclusive Offer</p>
            <p className="text-lg font-serif font-bold text-white/90 leading-snug">
              {brand.bonus}
            </p>
          </div>
        </div>

        <button 
          className="w-full py-5 bg-linear-to-r from-[#8b0000] to-[#b22222] text-white font-bold uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-primary/20 group-hover:shadow-primary/40 transition-all gold-shimmer border border-white/10"
        >
          Claim Invitation
        </button>
        
        <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-widest font-bold">
          {brand.votes.toLocaleString()} Verified Members
        </p>
      </div>
    </div>
  );
}
