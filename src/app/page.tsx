import { brands } from "@/app/data/brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import DisclaimerBar from "@/components/DisclaimerBar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileModal from "@/components/MobileModal";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-white">
      <Suspense fallback={null}>
        <MobileModal />
      </Suspense>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <DisclaimerBar />

        {/* Brand Grid Section */}
        <section id="brands" className="py-32 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-4 block">
                  Curated Collection
                </span>
                <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter font-serif leading-none">
                  Elite <span className="gold-text italic">Establishments</span>
                </h2>
              </div>
              <p className="text-white/30 font-medium max-w-xs text-sm leading-relaxed">
                Our rigorous 50-point inspection ensures only the most prestigious houses earn a place in our collection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {brands.map((brand, index) => (
                <div key={brand.id} className="reveal-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <BrandCard 
                    brand={brand} 
                    gclid={gclid} 
                    rank={index < 3 ? index : undefined}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-32 p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6 relative z-10">
                Looking for a <span className="gold-text">Bespoke Experience?</span>
              </h3>
              <p className="text-white/40 max-w-xl mx-auto mb-10 relative z-10">
                Our concierge team is constantly vetting new houses. Subscribe to receive private invitations to the newest elite casinos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white w-full max-w-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button className="px-10 py-4 bg-gold text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-500">
                  Join Inner Circle
                </button>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
