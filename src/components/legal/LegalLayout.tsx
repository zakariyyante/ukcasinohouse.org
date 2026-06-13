import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function LegalLayout({ children, title, subtitle }: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#000814]">
      <Header />
      
      <main className="flex-grow pt-40 pb-20">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-primary/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-gold font-black uppercase tracking-[0.3em] text-xs">
                  {subtitle}
                </p>
              )}
              <div className="mt-8 w-24 h-px bg-gold/30 mx-auto"></div>
            </div>

            <div className="glass-card p-8 md:p-16 prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-white/60 prose-li:text-white/60 prose-strong:text-gold prose-a:text-gold hover:prose-a:text-white transition-colors">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
