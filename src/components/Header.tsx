"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Brands", href: "#brands" },
    { name: "Guide", href: "#guide" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            {/* Using the new logo icon style with SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
              <circle cx="50" cy="50" r="48" fill="#001a3d" stroke="#b8860b" strokeWidth="4" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#8b0000" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M50 20 L60 40 L40 40 Z" fill="#b8860b" /> {/* Crown simplified */}
              <text x="50" y="65" textAnchor="middle" fill="#b8860b" fontWeight="900" fontSize="24" fontFamily="serif">UK</text>
              <path d="M50 85 L40 75 Q50 70 60 75 Z" fill="#b8860b" /> {/* Spade simplified */}
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline font-serif">
              <span className="text-2xl font-bold text-[#001a3d]">uk</span>
              <span className="text-2xl font-bold text-[#8b0000]">casino</span>
              <span className="text-2xl font-bold text-[#b8860b]">house</span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-white/30 font-medium uppercase mt-0.5 ml-0.5">
              ukcasinohouse.org
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-white/60 hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/80 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-accent border-b border-white/5 p-6 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xl font-serif font-bold text-white/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
