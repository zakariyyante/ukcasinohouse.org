"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Brands", href: "#brands" },
    { name: "Guide", href: "#guide" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group transition-transform duration-500 hover:scale-105">
          <div className="relative w-[180px] md:w-[240px] h-[40px] md:h-[50px]">
            <Image 
              src="/logo.png" 
              alt="UK Casino House" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="group relative text-[10px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <a href="#brands" className="px-8 py-3 bg-white/[0.05] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-500">
            Join Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white/80 p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-700 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-12">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-4xl font-serif font-bold text-white transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#brands" 
            className={`px-12 py-5 bg-gold text-white font-black uppercase tracking-widest rounded-full transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Access Collection
          </a>
        </nav>
      </div>
    </header>
  );
}
