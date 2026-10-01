"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { FiMapPin, FiPhone, FiMail, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'Do you take reservations?',
    answer: 'Yes! You can reserve your table online through our website or call us directly at +91 7861004444. We recommend advance booking for weekends and holidays.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have ample parking space available for all our guests. Our parking area can accommodate multiple vehicles including cars and two-wheelers.',
  },
  {
    question: 'Do you have a kids menu?',
    answer: 'Yes, we offer a family-friendly menu with mild options suitable for children. Our staff is happy to recommend dishes that kids will love.',
  },
  {
    question: 'What are your popular dishes?',
    answer: 'Our most popular dishes include Tandoori Chicken, Chicken Biryani, Butter Chicken, Paneer Tikka, and our special Silver Spicy Platters. Ask your server for today\'s chef specials!',
  },
  {
    question: 'Can you accommodate large groups?',
    answer: 'Absolutely! We welcome group bookings and celebrations. For parties of 10 or more, we recommend advance reservation so we can prepare accordingly. Call us to discuss your requirements.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[var(--light-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Spicy Hut Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-main text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-[var(--deep-brown)]">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-1 text-[var(--brand-red)]" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Survey no. 119/5, Hennur Bagalur Main Rd,<br />
                      Mitganahalli, Bangalore 560077
                    </p>
                    <a
                      href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--brand-red)] text-sm font-semibold hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="mt-1 text-[var(--brand-red)]" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+917861004444" className="text-[var(--text-secondary)] hover:text-[var(--brand-red)]">
                      +91 7861004444
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="mt-1 text-[var(--brand-red)]" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@spicyhut.in" className="text-[var(--text-secondary)] hover:text-[var(--brand-red)]">
                      info@spicyhut.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="mt-1 text-[var(--brand-red)]" size={20} />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Daily: 12:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 rounded-xl overflow-hidden h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N0KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spicy Hut Location"
              />
            </motion.div>

            {/* Quick Reservation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-[var(--deep-brown)]">Quick Reservation</h3>
              <ReservationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--deep-brown)]">
              Prefer Delivery?
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Order your favorite dishes through our delivery partners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                <span className="text-2xl">🍔</span>
                Order on Swiggy
              </a>
              <a
                href="https://zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                <span className="text-2xl">🍕</span>
                Order on Zomato
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-[var(--deep-brown)]">{faq.question}</span>
                  {openFaq === index ? (
                    <FiChevronUp className="text-[var(--brand-red)]" />
                  ) : (
                    <FiChevronDown className="text-[var(--text-secondary)]" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 bg-white"
                  >
                    <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[var(--brand-red)]">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Experience Spicy Hut?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book your table now and enjoy an unforgettable dining experience
            </p>
            <a href="/#reserve" className="bg-white text-[var(--brand-red)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}