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
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-500">
      <div className="relative min-h-screen flex flex-col">
        <button 
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "unset";
          }}
          className="fixed top-6 right-6 z-[110] bg-primary text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                Mobile Exclusive <span className="text-primary">Offers</span>
              </h2>
              <p className="text-white/40 text-sm">Best performing mobile casinos for you</p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
              {mobileBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclid={gclid} 
                  rank={index < 3 ? index : undefined} 
                />
              ))}
            </div>
          </div>

          <DisclaimerBar />
        </main>

        <Footer />
      </div>
    </div>
  );
}
