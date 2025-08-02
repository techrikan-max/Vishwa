'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className={`text-black font-bold text-xl ${cinzel.className}`}>R</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </div>
            <span className={`text-white text-2xl font-light ${cinzel.className} group-hover:text-[#D4AF37] transition-colors duration-300`}>
              Rudraksha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="group relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-6 py-2 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                <span className="relative z-10">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } group-hover:bg-[#D4AF37]`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } group-hover:bg-[#D4AF37]`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } group-hover:bg-[#D4AF37]`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-[#333] bg-black/95 backdrop-blur-sm rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide px-4 py-2"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-[#333] pt-4 px-4 space-y-4">
                <Link
                  href="/login"
                  className="block text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide py-2"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
