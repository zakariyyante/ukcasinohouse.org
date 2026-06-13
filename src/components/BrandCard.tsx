"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
  compact?: boolean;
}

export default function BrandCard({ brand, gclid, rank, compact }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    track("Brand Click", { brand: brand.name });
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(finalUrl);
    }
    window.open(finalUrl, "_blank");
  };

  const getRankLabel = (rank?: number) => {
    if (rank === 0) return "The Premier Choice";
    if (rank === 1) return "Highly Commended";
    if (rank === 2) return "Executive Selection";
    return "Verified Partner";
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative flex flex-col h-full cursor-pointer"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-gold/30 group-hover:premium-glow"></div>
      
      {/* Content Layer */}
      <div className={`relative ${compact ? 'p-6' : 'p-8 md:p-10'} flex flex-col h-full z-10`}>
        <div className={`flex justify-between items-start ${compact ? 'mb-6' : 'mb-10'}`}>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-black mb-2">
              {getRankLabel(rank)}
            </span>
            {!compact && (
              <h3 className="text-3xl font-bold text-white font-serif tracking-tight group-hover:gold-text transition-all duration-500">
                {brand.name}
              </h3>
            )}
          </div>
          <div className="flex items-center gap-2 bg-white/[0.05] px-3 py-1.5 rounded-full border border-white/5">
            <span className="text-gold text-sm font-black">★</span>
            <span className="text-white text-xs font-black tracking-tighter">{brand.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className={`flex-grow flex items-center justify-center ${compact ? 'mb-8' : 'mb-12'}`}>
          <div className={`relative w-full aspect-video ${compact ? 'max-w-[180px]' : 'max-w-[240px]'} flex items-center justify-center`}>
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              width={compact ? 160 : 180} 
              height={compact ? 160 : 180} 
              className="object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        <div className={compact ? 'space-y-6' : 'space-y-8'}>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mb-4">Member Benefits</p>
            <p className={`${compact ? 'text-lg' : 'text-xl'} font-serif font-medium text-white/80 leading-snug min-h-[3.5rem] flex items-center justify-center`}>
              {brand.bonus}
            </p>
          </div>

          <div className={`relative ${compact ? 'pt-6' : 'pt-8'} border-t border-white/5`}>
            <button 
              className={`w-full ${compact ? 'py-4' : 'py-5'} bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all duration-500 group-hover:bg-gold group-hover:text-white gold-shimmer shadow-xl`}
            >
              Claim Invitation
            </button>
            
            <div className="flex justify-between items-center mt-6 px-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#000814] bg-white/10 flex items-center justify-center text-[8px] font-bold text-white/40">
                    {i}
                  </div>
                ))}
                <div className="pl-4 text-[9px] font-bold text-white/20 uppercase tracking-widest flex items-center">
                  {brand.votes.toLocaleString()} Active
                </div>
              </div>
              <div className="text-[9px] font-bold text-gold/40 uppercase tracking-widest">
                UKGC Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gold/20 group-hover:bg-gold group-hover:animate-ping transition-all"></div>
    </div>
  );
}
