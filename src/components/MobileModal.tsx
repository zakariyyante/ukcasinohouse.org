"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { brands, Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Header from "./Header";
import Hero from "./Hero";
import DisclaimerBar from "./DisclaimerBar";
import Footer from "./Footer";

export default function MobileModal() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileBrands, setMobileBrands] = useState<Brand[]>([]);
  const gclid = searchParams.get("gclid") || undefined;

  useEffect(() => {
    const isGclidPresent = !!searchParams.get("gclid");
    const filteredBrands = brands.filter((b) => b.isMobile);
    
    if (isGclidPresent && filteredBrands.length > 0) {
      setMobileBrands(filteredBrands);
      setIsOpen(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchParams]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-700">
      <div className="relative min-h-screen flex flex-col">
        <button 
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "unset";
          }}
          className="fixed top-8 right-8 z-[110] bg-primary text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Header hideLogo={true} />
        
        <main className="flex-grow">
          <div className="pt-10 pb-20">
            <div className="container mx-auto px-4 text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Mobile Exclusive
              </div>
              <h2 className="text-4xl font-bold text-white uppercase tracking-tight mb-4 font-serif">
                New Instant <span className="text-gold">Withdrawal</span> Casinos June 2026
              </h2>
              <p className="text-white/40 text-sm font-medium">Hand-picked premium experiences for your device</p>
            </div>

            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-10 max-w-md mx-auto">
                {mobileBrands.map((brand, index) => (
                  <BrandCard 
                    key={brand.id} 
                    brand={brand} 
                    gclid={gclid} 
                    rank={index < 3 ? index : undefined} 
                    compact={true}
                  />
                ))}
              </div>
            </div>
          </div>

          <DisclaimerBar />
        </main>

        <Footer />
      </div>
    </div>
  );
}
