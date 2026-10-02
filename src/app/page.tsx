"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiStar,
  FiMapPin,
  FiUsers,
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiAward,
} from 'react-icons/fi';
import { FaFire, FaUtensils, FaCar } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import Image from 'next/image';
import Link from 'next/link';

// Menu categories data
const menuCategories = [
  {
    id: 'north-indian',
    title: 'Tandoor & North Indian',
    tag: 'Chef Specials',
    description: 'Sizzling tandoori kebabs, slow-cooked biryanis & rich aromatic curries.',
    priceFrom: 'From ₹199',
    image: '/images/butter_chicken_naan.jpg',
  },
  {
    id: 'chinese',
    title: 'Chinese Wok & Starters',
    tag: 'Crowd Favorite',
    description: 'Crispy Manchurian, fiery chilly chicken & wok-tossed Hakka noodles.',
    priceFrom: 'From ₹149',
    image: '/images/chilli_chicken_chinese.jpg',
  },
  {
    id: 'continental',
    title: 'Continental & Platters',
    tag: 'Family Sizzlers',
    description: 'Sizzling platters, creamy pastas, mocktails & decadent desserts.',
    priceFrom: 'From ₹249',
    image: '/images/continental_sizzler.jpg',
  },
];

// Why choose us features
const features = [
  {
    icon: FiStar,
    title: '4.1★ High Rating',
    subtitle: 'Over 377+ genuine reviews on Google & food delivery platforms',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600',
  },
  {
    icon: FaCar,
    title: 'Ample Free Parking',
    subtitle: 'Hassle-free parking space for cars and bikes on Hennur-Bagalur Rd',
    color: 'from-red-500/10 to-red-500/5 text-red-600',
  },
  {
    icon: FiUsers,
    title: 'Family & Group Seating',
    subtitle: 'Comfortable indoor air-conditioned ambiance ideal for gatherings',
    color: 'from-orange-500/10 to-orange-500/5 text-orange-600',
  },
  {
    icon: FaUtensils,
    title: 'Multicuisine Variety',
    subtitle: 'Comprehensive menu from North Indian to Indo-Chinese & Continental',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600',
  },
];

// Gallery preview images
const galleryImages = [
  { src: '/images/tandoori_kebab_platter.jpg', title: 'Tandoori Kebab Platter' },
  { src: '/images/hyderabadi_biryani.jpg', title: 'Hyderabadi Dum Biryani' },
  { src: '/images/paneer_tikka_special.jpg', title: 'Sunheri Paneer Tikka' },
  { src: '/images/crispy_momos.jpg', title: 'Crispy Fried Momos' },
  { src: '/images/mango_lassi_refreshing.jpg', title: 'Fresh Mango Lassi' },
  { src: '/images/gulab_jamun_icecream.jpg', title: 'Gulab Jamun with Ice Cream' },
];

// Sample reviews with verified credentials
const reviews = [
  {
    id: 1,
    name: 'Rahul S.',
    location: 'Hennur Resident',
    rating: 5,
    text: 'Amazing food! The tandoori chicken and nati style biryani are absolute must-tries. The seating is spacious, staff is courteous, and the parking space makes family dining stress-free.',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Priya M.',
    location: 'Local Guide',
    rating: 5,
    text: 'Best family restaurant in the Mitganahalli corridor. Clean, spacious, and very prompt service. Both veg paneer tikka and non-veg starters were fresh and delicious.',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Ankit K.',
    location: 'Bangalore Diner',
    rating: 4,
    text: 'Great multicuisine options. The Chinese dishes and sizzlers are nicely done. Ample parking space is a huge plus when coming with family on weekends.',
    date: '1 month ago',
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900 overflow-x-hidden">
      <Header />

      {/* Hero Section with rich background and gradient scrim */}
      <section className="relative min-h-[78vh] sm:min-h-[92vh] flex items-end sm:items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Silver Spicy Hut Restaurant Entrance"
            fill
            className="object-cover object-[51%_center] sm:object-center scale-100 sm:scale-105"
            priority
          />
          {/* Transparent gradient on mobile so the warm restaurant entrance and lanterns shine through brightly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 via-50% to-transparent sm:from-black/90 sm:via-black/60 sm:to-black/40" />
          <div className="hidden sm:block absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-main text-center text-white px-4 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Top pill badge - hidden on mobile so it doesn't collide with the physical signboard */}
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6 text-zinc-200 shadow-lg">
              <span className="flex text-amber-400">
                <FiStar className="fill-amber-400 text-xs" />
              </span>
              <span>4.1★ Rated (377+ Reviews)</span>
              <span className="text-zinc-400">•</span>
              <span>Mitganahalli, Hennur-Bagalur Rd</span>
            </div>

            {/* Main Title - compact on mobile */}
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-1 sm:mb-4 text-balance leading-tight drop-shadow-md">
              Silver Spicy <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Hut</span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-2xl md:text-3xl font-light text-zinc-200 mb-3.5 sm:mb-3 tracking-wide drop-shadow-sm">
              Where Every Meal Feels Like Home
            </p>

            {/* Long paragraph - hidden on mobile screens to reveal the background image */}
            <p className="hidden sm:block text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
              Authentic North Indian, sizzling Tandoor, wok-tossed Chinese & Continental specialties served in a comfortable, family-friendly setting with ample parking.
            </p>

            {/* CTAs - side-by-side and compact on mobile */}
            <div className="flex flex-row gap-2.5 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none sm:w-auto mb-3 sm:mb-12">
              <a
                href="#reserve"
                className="btn-primary text-xs sm:text-base py-2.5 sm:py-3.5 px-4 sm:px-8 shadow-glow-red flex items-center justify-center gap-1.5 sm:gap-2.5 font-bold flex-1 sm:flex-initial"
              >
                <FiCalendar size={15} />
                <span>Reserve Table</span>
              </a>
              <Link
                href="/menu"
                className="btn-secondary text-xs sm:text-base py-2.5 sm:py-3.5 px-4 sm:px-8 flex items-center justify-center gap-1.5 sm:gap-2.5 bg-black/40 backdrop-blur-md text-white border-white/40 hover:bg-white/20 hover:border-white/60 flex-1 sm:flex-initial"
              >
                <span>View Menu</span>
                <FiArrowRight size={15} />
              </Link>
            </div>

            {/* Quick Trust Chips - hidden on mobile so screen isn't crowded */}
            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-zinc-200">
                <FaCar className="text-amber-400" />
                <span>Ample Free Parking</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-zinc-200">
                <FiUsers className="text-amber-400" />
                <span>Spacious Family Tables</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-zinc-200">
                <FiClock className="text-amber-400" />
                <span>Daily 12 PM – 11 PM</span>
              </div>
            </div>

            {/* Minimal mobile info tag */}
            <div className="sm:hidden flex items-center gap-2 text-[11px] text-zinc-300 font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              <span className="text-amber-400">★ 4.1</span>
              <span>•</span>
              <span>Free Parking</span>
              <span>•</span>
              <span>Family Seating</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/50 text-[11px] tracking-wider uppercase">
          <span>Scroll</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image card with badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
                <Image
                  src="/images/restaurant_indoor_seating.jpg"
                  alt="Silver Spicy Hut Dining Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center">
                  <FiAward size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Top Rated in Mitganahalli</p>
                  <p className="text-base font-bold text-zinc-900">4.1★ Rating • 377+ Reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold tracking-wide uppercase">
                <FaFire size={12} className="text-red-600" />
                <span>Welcome to Silver Spicy Hut</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Authentic Multicuisine Flavors Crafted for the Whole Family
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed">
                Conveniently located in Mitganahalli on the Hennur-Bagalur airport corridor, Silver Spicy Hut is Bangalore's favored destination for food lovers who appreciate hearty portions, authentic cooking, and warm hospitality.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                Whether you're craving sizzling tandoori kebabs, rich butter chicken with warm garlic naan, fiery Schezwan noodles, or sizzling continental comfort dishes, our master chefs prepare every plate with high-grade spices and fresh ingredients.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-secondary text-sm">
                  <span>Read Our Story</span>
                  <FiArrowRight size={16} />
                </Link>
                <a href="#reserve" className="btn-primary text-sm">
                  <span>Book a Table</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="section-padding bg-[#F6F2EA] border-b border-[#E8E1D5]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>Signature Cuisines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
              Explore Our Menu Specialties
            </h2>
            <p className="text-zinc-600 text-base">
              From North Indian clay oven classics to Indo-Chinese woks and Continental sizzlers, prepared fresh to order.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href="/menu"
                  className="block bg-white rounded-3xl overflow-hidden border border-[#E7E0D4] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow-md">
                      {category.tag}
                    </span>
                    <span className="absolute bottom-3 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-bold rounded-full">
                      {category.priceFrom}
                    </span>
                    <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-sm">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between text-sm font-semibold text-red-600 group-hover:text-red-700">
                      <span>View Categories & Prices</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="btn-primary text-base py-3 px-8 shadow-glow-red"
            >
              <span>View Complete 100+ Item Menu</span>
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Silver Spicy Hut (Bento features) */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>The Silver Spicy Promise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
              Why Diners Love Visiting Us
            </h2>
            <p className="text-zinc-600 text-base">
              Everything you need for an enjoyable, relaxed lunch or dinner with family, colleagues, and friends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-zinc-50/50 to-white hover:border-red-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${feature.color}`}>
                  <feature.icon size={22} />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="section-padding bg-[#FAF8F5] border-b border-[#EBE5DB]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-semibold tracking-wide uppercase mb-3">
                <span>Culinary Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                Freshly Prepared Delicacies
              </h2>
            </div>
            <Link
              href="/gallery"
              className="btn-secondary self-start md:self-auto text-sm"
            >
              <span>View All 19 Photos</span>
              <FiArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-xs font-semibold text-white leading-tight">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding bg-white border-b border-[#EBE5DB]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-3">
              <span>Guest Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
              What Our Guests Say
            </h2>

            {/* Google Rating Star display */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex text-amber-500">
                {[...Array(4)].map((_, i) => (
                  <FiStar key={i} className="text-amber-500 fill-amber-500" size={20} />
                ))}
                {/* 4.1 half star indicator */}
                <FiStar className="text-amber-500 fill-amber-500/30" size={20} />
              </div>
              <span className="font-bold text-zinc-900 text-lg">4.1</span>
              <span className="text-zinc-500 text-sm">based on 377+ Google Reviews</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <FiStar key={i} className="fill-amber-500 text-amber-500 text-sm" />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">{review.date}</span>
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-zinc-500">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
            >
              <span>Read all 377+ reviews on Google Maps</span>
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Section with Obsidian Luxury Contrast */}
      <section id="reserve" className="section-padding bg-[#121417] text-white relative overflow-hidden">
        {/* Ambient lighting spots */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left information column (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold tracking-wide uppercase">
                <FiCalendar size={13} />
                <span>Table Bookings</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Reserve Your Table in Seconds
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed">
                Planning a family gathering, birthday party, or weekend dinner? Book your table online in advance for guaranteed seating with zero wait times.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Quick 2-Hour Confirmation',
                    desc: 'Our restaurant host verifies your booking directly by phone call.',
                  },
                  {
                    title: 'Zero Deposit Required',
                    desc: 'Complimentary table reservation with free cancellation.',
                  },
                  {
                    title: 'Special Celebrations Welcome',
                    desc: 'Let us know in advance for birthdays, anniversaries, or large groups.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-amber-400 mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct call note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                <p>
                  Prefer immediate phone confirmation? Call our front desk manager:{' '}
                  <a href="tel:+917861004444" className="text-amber-400 font-bold hover:underline">
                    +91 78610 04444
                  </a>
                </p>
              </div>
            </div>

            {/* Right form column (7 cols) */}
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-orange-700 text-white relative overflow-hidden shadow-2xl">
        <div className="container-main text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            Ready to Experience Silver Spicy Hut?
          </h2>
          <p className="text-red-100 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
            Visit us today on Hennur-Bagalur Main Road in Mitganahalli for an unforgettable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reserve"
              className="bg-white text-red-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-zinc-100 transition-all text-sm"
            >
              Reserve a Table Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/80 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Get Location & Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}