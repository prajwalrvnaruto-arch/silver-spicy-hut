"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiPhone, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-5'
        }`}
      >
        <nav className="container-main">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                isScrolled ? 'bg-red-600 text-white shadow-glow-red' : 'bg-red-600/90 text-white backdrop-blur-sm'
              }`}>
                <FaFire className="text-amber-300 text-lg md:text-xl" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                    isScrolled ? 'text-zinc-900' : 'text-white'
                  }`}
                >
                  Silver Spicy <span className="text-red-500">Hut</span>
                </span>
                <span className={`text-[10px] uppercase tracking-widest font-semibold ${
                  isScrolled ? 'text-zinc-400' : 'text-zinc-300'
                }`}>
                  Multicuisine Dining
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'text-red-600 bg-red-50 font-semibold'
                          : 'text-white bg-white/15 font-semibold'
                        : isScrolled
                        ? 'text-zinc-700 hover:text-red-600 hover:bg-zinc-50'
                        : 'text-zinc-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action buttons */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone link */}
              <a
                href="tel:+917861004444"
                className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-zinc-700 hover:text-red-600 hover:bg-zinc-50'
                    : 'text-zinc-200 hover:text-white hover:bg-white/10'
                }`}
                title="Call Silver Spicy Hut"
              >
                <div className={`p-1.5 rounded-full ${isScrolled ? 'bg-red-50 text-red-600' : 'bg-white/10 text-amber-400'}`}>
                  <FiPhone size={13} />
                </div>
                <span>+91 78610 04444</span>
              </a>

              {/* Reserve CTA */}
              <Link
                href="/#reserve"
                className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 ${
                  isScrolled
                    ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-glow-red hover:-translate-y-0.5'
                    : 'bg-white text-zinc-900 hover:bg-zinc-100 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <FiCalendar size={15} />
                <span>Reserve Table</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:+917861004444"
                className={`p-2 rounded-xl border ${
                  isScrolled
                    ? 'border-zinc-200 text-red-600 bg-red-50'
                    : 'border-white/20 text-white bg-white/10 backdrop-blur-sm'
                }`}
                aria-label="Call restaurant"
              >
                <FiPhone size={18} />
              </a>

              <button
                type="button"
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? 'text-zinc-800 hover:bg-zinc-100'
                    : 'text-white hover:bg-white/15'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation with backdrop blur */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-between bg-zinc-950/95 backdrop-blur-xl text-white pt-24 pb-8 px-6 animate-fade-in">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Navigation
            </p>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-red-600 text-white font-bold'
                      : 'text-zinc-200 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-zinc-400">→</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href="/#reserve"
                className="w-full btn-primary text-center py-3.5 text-base flex justify-center items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiCalendar size={18} />
                <span>Reserve a Table</span>
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 text-sm text-zinc-300">
            <a
              href="tel:+917861004444"
              className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="p-2 bg-red-600/30 text-red-400 rounded-lg">
                <FiPhone size={16} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Call for Takeaway / Queries</p>
                <p className="font-semibold text-white">+91 78610 04444</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-3 text-xs text-zinc-400">
              <FiClock size={14} className="text-amber-400" />
              <span>Open Daily: 12:00 PM – 11:00 PM</span>
            </div>
            <div className="flex items-center gap-3 px-3 text-xs text-zinc-400">
              <FiMapPin size={14} className="text-red-400" />
              <span>Mitganahalli, Hennur-Bagalur Rd</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}