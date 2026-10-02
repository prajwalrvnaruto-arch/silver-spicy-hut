"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FiStar,
  FiMapPin,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiAward,
  FiShield,
  FiHeart,
  FiPhone,
  FiArrowRight,
} from 'react-icons/fi';
import { FaFire, FaUtensils, FaCar } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  {
    icon: FiStar,
    title: '4.1★ Proven Rating',
    description: 'Consistently rated 4.1 stars by over 377+ diners across Google, Swiggy, and Zomato.',
    color: 'text-amber-500 bg-amber-500/10',
  },
  {
    icon: FaCar,
    title: 'Hassle-Free Parking',
    description: 'Dedicated parking on Hennur-Bagalur main corridor accommodates family vehicles with ease.',
    color: 'text-red-500 bg-red-500/10',
  },
  {
    icon: FiUsers,
    title: 'Family & Group Friendly',
    description: 'Spacious, hygienic seating arrangements designed for intimate family dinners and large celebrations.',
    color: 'text-orange-500 bg-orange-500/10',
  },
  {
    icon: FiClock,
    title: 'Daily Lunch & Dinner',
    description: 'Serving hot, authentic meals continuously from 12:00 PM to 11:00 PM throughout the week.',
    color: 'text-amber-600 bg-amber-500/10',
  },
];

const cuisineTypes = [
  {
    name: 'North Indian Clay Tandoor',
    description: 'Succulent murgh kebabs, marinated paneer tikka, and slow-simmered rich curries with butter naan.',
    image: '/images/tandoori_kebab_platter.jpg',
  },
  {
    name: 'Wok-Tossed Indo-Chinese',
    description: 'Crispy Manchurian, fiery chilli chicken, fried momos, and wok-tossed Hakka noodles.',
    image: '/images/chilli_chicken_chinese.jpg',
  },
  {
    name: 'Biryanis & Sukkas',
    description: 'Aromatic Hyderabadi Dum Biryani, authentic Nati Style Chicken Biryani, and spiced mutton sukka.',
    image: '/images/hyderabadi_biryani.jpg',
  },
  {
    name: 'Continental Sizzlers & Desserts',
    description: 'Sizzling steak platters, creamy pasta, refreshing mocktails, and warm gulab jamun with ice cream.',
    image: '/images/continental_sizzler.jpg',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden pt-20 pb-14">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant_indoor_seating.jpg"
            alt="Silver Spicy Hut Dining Room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container-main text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-3">
            <FaFire className="text-amber-400" />
            <span>Our Culinary Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
            About Silver Spicy Hut
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Bringing families and friends together over authentic multicuisine delicacies on Hennur-Bagalur Main Road.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold tracking-wide uppercase">
                <FiHeart className="text-red-500" />
                <span>Our Heritage & Passion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Crafting Warm Culinary Memories in Mitganahalli
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed">
                Welcome to <strong>Silver Spicy Hut</strong>, a cherished multicuisine restaurant situated on the vibrant Hennur-Bagalur airport corridor. From the very first day we fired our clay tandoor, our mission has remained steadfast: to offer guests a dining experience where every meal feels like home.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                Our kitchen brings together the very best of regional North Indian cooking, sizzling clay tandoor roasts, rich Mughal-inspired gravies, fiery wok-tossed Indo-Chinese staples, and comforting Continental sizzlers. Every recipe has been honed with care, using genuine spices and fresh produce.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                Backed by more than <strong>377+ verified reviews</strong> and an impressive <strong>4.1★ average rating</strong>, we are proud to be the trusted family restaurant where local residents, airport commuters, and food enthusiasts celebrate life's moments.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/menu" className="btn-primary text-sm">
                  <span>Explore Our Menu</span>
                  <FiArrowRight size={16} />
                </Link>
                <Link href="/#reserve" className="btn-secondary text-sm">
                  <span>Book a Table</span>
                </Link>
              </div>
            </motion.div>

            {/* Visual 2x2 grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/tandoori_kebab_platter.jpg"
                  alt="Tandoori Kebabs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/butter_chicken_naan.jpg"
                  alt="Butter Chicken with Naan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/chilli_chicken_chinese.jpg"
                  alt="Chilli Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/continental_sizzler.jpg"
                  alt="Continental Sizzler"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Pillars / What Makes Us Special */}
      <section className="section-padding bg-[#F6F2EA] border-b border-[#E8E1D5]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>Why Diners Recommend Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
              The Silver Spicy Standard
            </h2>
            <p className="text-zinc-600 text-base">
              Dedicated to consistent quality, hygienic preparation, and unmatched hospitality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#E7E0D4] shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                  <feature.icon size={22} />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Range Showcase */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>Our Culinary Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
              A Symphony of Cuisines
            </h2>
            <p className="text-zinc-600 text-base">
              Each dish is prepared by specialized culinary masters dedicated to their cuisine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisineTypes.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-44">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-bold text-white text-base">
                    {c.name}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location, Map & Amenities */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-main">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Details (6 cols) */}
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-semibold tracking-wide uppercase">
                <FiMapPin size={13} />
                <span>Easy to Find</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Prime Hennur-Bagalur Location With Free Parking
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed">
                Located conveniently on Survey no. 119/5 along the Hennur Bagalur Main Road in Mitganahalli, just minutes away from Hennur Cross. Perfect for a family dinner stop or an easy meal on the way to the airport.
              </p>

              {/* Amenities tags */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Dedicated Car & Bike Parking',
                  'Family & Group Seating',
                  'Air Conditioned Dining',
                  'Swiggy & Zomato Ordering',
                  'Card, UPI & Cash Accepted',
                  'Advance Table Reservations',
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-700 bg-white p-2.5 rounded-xl border border-zinc-200/70 shadow-sm">
                    <FiCheckCircle className="text-green-600 shrink-0" size={14} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <FiMapPin size={16} />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed (6 cols) */}
            <div className="md:col-span-6 h-[380px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
              <iframe
                src="https://maps.google.com/maps?q=Silver+Spicy+Hut+Mitganahalli+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Silver Spicy Hut Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-orange-700 text-white text-center">
        <div className="container-main max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Reserve Your Experience Today
          </h2>
          <p className="text-red-100 text-sm sm:text-base font-light">
            We look forward to welcoming you and your family for a delightful meal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#reserve"
              className="bg-white text-red-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-zinc-100 transition-all text-sm"
            >
              Reserve a Table
            </Link>
            <a
              href="tel:+917861004444"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm inline-flex items-center justify-center gap-2"
            >
              <FiPhone size={16} />
              <span>+91 78610 04444</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}