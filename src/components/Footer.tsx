"use client";

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiStar, FiArrowUpRight } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { SiSwiggy, SiZomato } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-[#111317] text-white border-t border-white/10 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-glow-red">
                <FaFire className="text-amber-300 text-xl" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">
                  Silver Spicy <span className="text-red-500">Hut</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold">
                  Family Dining Destination
                </p>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Your favorite multicuisine casual dining experience in Mitganahalli on the Hennur-Bagalur airport corridor. Authentic North Indian, Tandoori, Chinese & Continental delicacies with ample parking.
            </p>

            {/* Google Rating Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-amber-400 fill-amber-400 text-xs" />
                ))}
              </div>
              <span className="font-semibold text-white">4.1★</span>
              <span className="text-zinc-400">377+ Google Reviews</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/spicyhutbangalore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 hover:border-transparent transition-all duration-300"
              >
                <FiInstagram size={17} />
              </a>
              <a
                href="https://facebook.com/spicyhutbangalore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300"
              >
                <FiFacebook size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Menu', href: '/menu' },
                { label: 'About Story', href: '/about' },
                { label: 'Food Gallery', href: '/gallery' },
                { label: 'Contact & Map', href: '/contact' },
                { label: 'Reserve Table', href: '/#reserve' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-red-500 shrink-0" size={17} />
                <span>
                  Survey no. 119/5, Hennur Bagalur Main Rd, Mitganahalli, Bangalore 560077
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-amber-400 shrink-0" size={17} />
                <a
                  href="tel:+917861004444"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  +91 78610 04444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-zinc-400 shrink-0" size={17} />
                <a
                  href="mailto:info@spicyhut.in"
                  className="hover:text-white transition-colors"
                >
                  info@spicyhut.in
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <FiArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Timings & Ordering (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-2">
              Hours & Delivery
            </h4>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-semibold">
                <FiClock className="text-amber-400" size={15} />
                <span>Dining Service</span>
              </div>
              <p className="text-xs text-zinc-400 pl-6">Monday – Sunday</p>
              <p className="text-sm font-medium text-white pl-6">12:00 PM – 11:00 PM</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                Order Online
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#FC8019]/20 hover:bg-[#FC8019] text-[#FC8019] hover:text-white border border-[#FC8019]/40 text-xs font-semibold transition-all duration-200"
                >
                  <SiSwiggy size={15} />
                  <span>Swiggy</span>
                </a>
                <a
                  href="https://zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#CB202D]/20 hover:bg-[#CB202D] text-red-400 hover:text-white border border-[#CB202D]/40 text-xs font-semibold transition-all duration-200"
                >
                  <SiZomato size={20} />
                  <span>Zomato</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Silver Spicy Hut. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Family Multicuisine Restaurant</span>
            <span>•</span>
            <span>Mitganahalli, Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}