"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMapPin, FiUsers, FiCalendar, FiClock, FiPhone, FiArrowRight } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import Image from 'next/image';

// Menu categories data
const menuCategories = [
  {
    id: 'north-indian',
    title: 'Tandoor & North Indian',
    description: 'Sizzling kebabs, biryanis & rich gravies',
    image: '/images/butter_chicken_naan.jpg',
  },
  {
    id: 'chinese',
    title: 'Chinese Favorites',
    description: 'Wok-tossed noodles, manchurian & more',
    image: '/images/chilli_chicken_chinese.jpg',
  },
  {
    id: 'continental',
    title: 'Continental & More',
    description: 'Sizzlers, pasta & international delights',
    image: '/images/continental_sizzler.jpg',
  },
];

// Features data
const features = [
  { icon: FiStar, title: '4.1★ Rated', subtitle: '377+ Google Reviews' },
  { icon: FiMapPin, title: 'Prime Location', subtitle: 'Hennur-Bagalur Road' },
  { icon: FiUsers, title: 'Family Friendly', subtitle: 'Spacious Seating' },
  { icon: FiCalendar, title: 'Easy Booking', subtitle: 'Reserve Your Table' },
];

// Gallery preview images
const galleryImages = [
  '/images/tandoori_kebab_platter.jpg',
  '/images/paneer_tikka_special.jpg',
  '/images/hyderabadi_biryani.jpg',
  '/images/crispy_momos.jpg',
  '/images/mango_lassi_refreshing.jpg',
  '/images/gulab_jamun_icecream.jpg',
];

// Sample reviews
const reviews = [
  {
    id: 1,
    name: 'Rahul S.',
    rating: 5,
    text: 'Amazing food! The tandoori chicken and biryani are must-try. Great family dining experience.',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Priya M.',
    rating: 5,
    text: 'Best restaurant in the area. Clean, spacious, and delicious multicuisine options.',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Ankit K.',
    rating: 4,
    text: 'Good food, nice ambiance. The parking space is a big plus for families.',
    date: '1 month ago',
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--light-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Spicy Hut Restaurant Entrance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-main text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Spicy Hut
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-200">
              Where Every Meal Feels Like Home
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Authentic Multicuisine Dining on Hennur-Bagalur Road
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#reserve" className="btn-primary text-lg inline-flex items-center justify-center gap-2">
                <FiCalendar size={20} />
                Reserve Your Table
              </a>
              <a href="#menu" className="btn-secondary text-lg inline-flex items-center justify-center gap-2">
                View Menu
                <FiArrowRight size={20} />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <FiStar className="text-[var(--gold)] text-xl" />
                <span className="font-semibold">4.1★ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="text-[var(--gold)] text-xl" />
                <span className="font-semibold">377+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[var(--gold)] text-xl" />
                <span className="font-semibold">Parking Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/restaurant_indoor_seating.jpg"
                  alt="Spicy Hut Indoor Seating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--brand-red)]">
                Welcome to Spicy Hut
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-4">
                Your family dining destination in Mitganahalli, conveniently located on the
                Hennur-Bagalur airport corridor.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                We serve authentic multicuisine delights - from North Indian tandoor specialties
                to Chinese wok-tossed favorites and Continental comfort food. Whether you're
                planning a family dinner, a group celebration, or a casual meal, Spicy Hut
                offers the perfect ambiance with ample parking.
              </p>
              <a href="/about" className="btn-secondary inline-flex items-center gap-2">
                Our Story
                <FiArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="section-padding bg-[var(--cream)]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              Our Menu Highlights
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Explore our diverse range of cuisines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <motion.a
                key={category.id}
                href="/menu"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block"
              >
                <div className="card overflow-hidden p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[var(--text-secondary)]">{category.description}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-[var(--brand-red)] font-semibold group-hover:gap-2 transition-all">
                      Explore Menu <FiArrowRight />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              Why Choose Spicy Hut
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-red)] text-white mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="section-padding bg-[var(--light-gray)]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              Our Gallery
            </h2>
            <a href="/gallery" className="btn-primary inline-flex items-center gap-2">
              View Full Gallery
              <FiArrowRight size={18} />
            </a>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-64 h-48 relative rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-[var(--gold)] text-xl" fill="currentColor" />
              ))}
              <span className="ml-2 font-semibold">4.1 out of 5</span>
            </div>
            <p className="text-[var(--text-secondary)]">Based on 377+ Google reviews</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < review.rating ? 'text-[var(--gold)]' : 'text-gray-300'}
                      fill="currentColor"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-[var(--text-secondary)]">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?q=Spicy+Hut+Mitganahalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-red)] font-semibold hover:underline"
            >
              Read More Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="section-padding bg-[var(--deep-brown)]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Reserve Your Table
            </h2>
            <p className="text-gray-300 text-lg">
              Book your dining experience at Spicy Hut
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Visit us for an unforgettable dining experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#reserve" className="bg-white text-[var(--brand-red)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Reserve Now
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}