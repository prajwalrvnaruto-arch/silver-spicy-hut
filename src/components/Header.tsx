"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl md:text-3xl font-bold ${
                isScrolled ? 'text-[var(--brand-red)]' : 'text-white'
              }`}
            >
              Spicy Hut
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[var(--brand-red)]'
                    : isScrolled
                    ? 'text-[var(--dark-gray)] hover:text-[var(--brand-red)]'
                    : 'text-white hover:text-[var(--warm-orange)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/#reserve"
              className={`btn-primary ${isScrolled ? '' : 'bg-white text-[var(--brand-red)]'}`}
            >
              Reserve Table
            </a>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <FiPhone className={isScrolled ? 'text-[var(--brand-red)]' : 'text-white'} />
            <span className={isScrolled ? 'text-[var(--dark-gray)]' : 'text-white'}>
              +91 7861004444
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX size={24} className={isScrolled ? 'text-[var(--dark-gray)]' : 'text-white'} />
            ) : (
              <FiMenu size={24} className={isScrolled ? 'text-[var(--dark-gray)]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg mb-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-lg font-medium ${
                  pathname === item.href
                    ? 'text-[var(--brand-red)] bg-[var(--cream)]'
                    : 'text-[var(--dark-gray)] hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/#reserve"
              className="block mt-4 btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve Table
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}