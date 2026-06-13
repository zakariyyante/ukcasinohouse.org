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
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={null}>
        <MobileModal />
      </Suspense>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <DisclaimerBar />

        {/* Brand Grid Section */}
        <section id="brands" className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Top Rated <span className="text-primary">UK Casinos</span>
            </h2>
            <p className="text-white/40 font-medium max-w-xl mx-auto">
              Compare the best UK licensed casinos. We rank them based on bonuses, security, and payout speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                gclid={gclid} 
                rank={index < 3 ? index : undefined}
              />
            ))}
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
