"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiArrowUpRight,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaFire, FaCar } from 'react-icons/fa';
import { SiSwiggy, SiZomato } from 'react-icons/si';

const faqs = [
  {
    question: 'Do you take table reservations online?',
    answer: 'Yes! You can reserve your table directly through our online reservation form above or call us at +91 7861004444. Advance booking is especially recommended for weekend evenings and family celebrations.',
  },
  {
    question: 'Is dedicated vehicle parking available?',
    answer: 'Yes, Silver Spicy Hut features ample dedicated parking space for both cars and two-wheelers right at our venue on Hennur-Bagalur Main Road.',
  },
  {
    question: 'Do you offer vegetarian and Jain-friendly options?',
    answer: 'Yes, we have an extensive vegetarian menu prepared in dedicated kitchen areas, including Paneer tikkas, Dal Tadka, Kaju Masala, Gobi Manchurian, and special vegetarian platters.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'We are open every single day from 12:00 PM to 11:00 PM for both dine-in and takeaway service.',
  },
  {
    question: 'Can you accommodate large group parties and birthdays?',
    answer: 'Absolutely! We frequently host birthday parties, corporate team lunches, and family gatherings. For parties of 10 or more, book online or call our manager in advance so we can arrange customized seating and platter service.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden pt-20 pb-14">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Silver Spicy Hut Location & Entrance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container-main text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-3">
            <FaFire className="text-amber-400" />
            <span>We'd Love to Host You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Contact & Location
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Find our location in Mitganahalli, reserve a dining table, or contact our guest desk for inquiries.
          </p>
        </div>
      </section>

      {/* Main Reservation & Contact Grid (Resolved from squished 3-col into balanced 2-col) */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Cards & Delivery (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Restaurant Details Card */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-1">
                    Get in Touch
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Front desk & table reservation assistance
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Address</h4>
                      <p className="text-zinc-600 text-xs leading-relaxed mt-0.5">
                        Survey no. 119/5, Hennur Bagalur Main Rd, Mitganahalli, Bangalore 560077
                      </p>
                      <a
                        href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:underline mt-1.5"
                      >
                        <span>Open in Google Maps</span>
                        <FiArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Direct Phone</h4>
                      <a
                        href="tel:+917861004444"
                        className="text-zinc-700 hover:text-red-600 font-semibold block mt-0.5"
                      >
                        +91 78610 04444
                      </a>
                      <span className="text-[11px] text-zinc-400">Available daily 11:30 AM – 11:00 PM</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-200/60 text-zinc-700 flex items-center justify-center shrink-0">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Email Queries</h4>
                      <a
                        href="mailto:info@spicyhut.in"
                        className="text-zinc-600 hover:text-red-600 text-xs block mt-0.5"
                      >
                        info@spicyhut.in
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Hours of Service</h4>
                      <p className="text-zinc-600 text-xs mt-0.5">
                        Monday through Sunday: 12:00 PM – 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Partners Card */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-zinc-200/80 shadow-sm space-y-3">
                <h4 className="font-bold text-zinc-900 text-sm">
                  Prefer Home Delivery?
                </h4>
                <p className="text-zinc-500 text-xs">
                  Order your favorite curry, sizzler, or biryani online via our delivery partners.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href="https://swiggy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#FC8019] text-white text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
                  >
                    <SiSwiggy size={16} />
                    <span>Swiggy</span>
                  </a>
                  <a
                    href="https://zomato.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#CB202D] text-white text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
                  >
                    <SiZomato size={20} />
                    <span>Zomato</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Reservation Form (7 cols) */}
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full Google Map Section */}
      <section className="section-padding bg-[#F6F2EA] border-b border-[#E8E1D5]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-semibold tracking-wide uppercase mb-3">
              <FiMapPin size={13} />
              <span>Interactive Location Map</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              Find Us on Hennur-Bagalur Road
            </h2>
            <p className="text-zinc-600 text-sm">
              Convenient access on the airport corridor with dedicated customer parking.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 h-[420px] bg-zinc-200">
            <iframe
              src="https://maps.google.com/maps?q=Silver+Spicy+Hut+Mitganahalli+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Silver Spicy Hut Interactive Google Map"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-sm">
              Here are answers to the most common queries from our visitors.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left bg-zinc-50/70 hover:bg-zinc-100/70 transition-colors"
                  >
                    <span className="font-semibold text-zinc-900 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded-full text-zinc-500 shrink-0">
                      {isOpen ? (
                        <FiChevronUp size={20} className="text-red-600" />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 py-4 bg-white border-t border-zinc-100 text-zinc-600 text-sm leading-relaxed"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}