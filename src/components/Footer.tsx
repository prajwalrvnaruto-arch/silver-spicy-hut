"use client";

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[var(--deep-brown)] text-white">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Spicy Hut</h3>
            <p className="text-gray-300 mb-4">
              Your family dining destination in Mitganahalli. Serving authentic multicuisine
              delights since day one.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/spicyhutbangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/spicyhutbangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] transition-colors"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#reserve" className="text-gray-300 hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Survey no. 119/5, Hennur Bagalur Main Rd,<br />
                  Mitganahalli, Bangalore 560077
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="flex-shrink-0" />
                <a href="tel:+917861004444" className="text-gray-300 hover:text-white transition-colors">
                  +91 7861004444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="flex-shrink-0" />
                <a href="mailto:info@spicyhut.in" className="text-gray-300 hover:text-white transition-colors">
                  info@spicyhut.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <FiClock className="flex-shrink-0" />
                <span className="text-gray-300">Daily: 12:00 PM - 11:00 PM</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Order Online</p>
              <div className="flex gap-2">
                <a
                  href="https://swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Swiggy
                </a>
                <a
                  href="https://zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-500 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                >
                  Zomato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Spicy Hut. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            4.1★ Rated | 377+ Reviews | Family Dining
          </p>
        </div>
      </div>
    </footer>
  );
}