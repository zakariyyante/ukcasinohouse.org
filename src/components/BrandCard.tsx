"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics/next";

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
    if (rank === 0) return <div className="absolute -top-2 -left-2 bg-yellow-500 text-black font-bold px-3 py-1 rounded-br-xl z-10 shadow-lg">#1 GOLD</div>;
    if (rank === 1) return <div className="absolute -top-2 -left-2 bg-slate-300 text-black font-bold px-3 py-1 rounded-br-xl z-10 shadow-lg">#2 SILVER</div>;
    if (rank === 2) return <div className="absolute -top-2 -left-2 bg-amber-700 text-white font-bold px-3 py-1 rounded-br-xl z-10 shadow-lg">#3 BRONZE</div>;
    return null;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="casino-card-bg relative group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:casino-glow flex flex-col h-full"
    >
      {getRankBadge(rank)}
      
      {/* Corner accent decorations */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-xl"></div>

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center p-2 shrink-0">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {brand.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-black text-primary">{brand.rating.toFixed(1)}</span>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(brand.rating / 2) ? 'fill-current' : 'fill-current/20'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-xs text-white/40 mt-1">{brand.votes.toLocaleString()} verified votes</span>
          </div>
        </div>

        <div className="flex-grow">
          <div className="bg-white/5 rounded-lg p-3 border border-white/5 mb-4">
            <p className="text-sm font-medium text-white/80 leading-tight">
              {brand.bonus}
            </p>
          </div>
        </div>

        <button 
          className="w-full py-4 bg-linear-to-r from-primary to-orange-600 text-white font-black uppercase tracking-wider rounded-lg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all gold-shimmer"
        >
          Claim Offer
        </button>
      </div>
    </div>
  );
}
