"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiX, FiChevronLeft, FiChevronRight, FiInstagram, FiCalendar } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import Link from 'next/link';

const galleryImages = [
  { id: 1, src: '/images/tandoori_kebab_platter.jpg', category: 'tandoor', title: 'Tandoori Kebab Platter' },
  { id: 2, src: '/images/butter_chicken_naan.jpg', category: 'curries', title: 'Butter Chicken with Naan' },
  { id: 3, src: '/images/chicken_tikka_masala.jpg', category: 'curries', title: 'Chicken Tikka Masala' },
  { id: 4, src: '/images/chilli_chicken_chinese.jpg', category: 'chinese', title: 'Chilli Chicken Dry' },
  { id: 5, src: '/images/hyderabadi_biryani.jpg', category: 'biryani', title: 'Hyderabadi Dum Biryani' },
  { id: 6, src: '/images/paneer_tikka_special.jpg', category: 'tandoor', title: 'Sunheri Paneer Tikka' },
  { id: 7, src: '/images/paneer_butter_masala.jpg', category: 'curries', title: 'Paneer Butter Masala' },
  { id: 8, src: '/images/mutton_rogan_josh.jpg', category: 'curries', title: 'Mutton Rogan Josh' },
  { id: 9, src: '/images/dal_makhani.jpg', category: 'curries', title: 'Slow-Cooked Dal Makhani' },
  { id: 10, src: '/images/schezwan_noodles.jpg', category: 'chinese', title: 'Schezwan Hakka Noodles' },
  { id: 11, src: '/images/crispy_momos.jpg', category: 'chinese', title: 'Crispy Fried Momos' },
  { id: 12, src: '/images/continental_sizzler.jpg', category: 'continental', title: 'Continental Sizzler' },
  { id: 13, src: '/images/creamy_pasta.jpg', category: 'continental', title: 'Creamy Alfredo Pasta' },
  { id: 14, src: '/images/refreshing_mocktails.jpg', category: 'desserts', title: 'Refreshing Citrus Mocktails' },
  { id: 15, src: '/images/mango_lassi_refreshing.jpg', category: 'desserts', title: 'Thick Mango Lassi' },
  { id: 16, src: '/images/gulab_jamun_icecream.jpg', category: 'desserts', title: 'Warm Gulab Jamun with Ice Cream' },
  { id: 17, src: '/images/tandoori_roti_basket.jpg', category: 'tandoor', title: 'Fresh Tandoori Roti Basket' },
  { id: 18, src: '/images/hero_dusk_entrance.jpg', category: 'ambiance', title: 'Restaurant Dusk Entrance' },
  { id: 19, src: '/images/restaurant_indoor_seating.jpg', category: 'ambiance', title: 'Spacious Family Dining Hall' },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'tandoor', label: 'Tandoor & Starters' },
  { id: 'curries', label: 'Curries & Breads' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'chinese', label: 'Indo-Chinese' },
  { id: 'ambiance', label: 'Restaurant Ambiance' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex].id);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden pt-20 pb-14">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Silver Spicy Hut Dining Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container-main text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-3">
            <FaFire className="text-amber-400" />
            <span>Visual Tour</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Our Food & Ambiance Gallery
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Take a visual tour through our freshly crafted sizzlers, biryanis, kebabs, and spacious family seating hall.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white/95 backdrop-blur-md border-b border-zinc-200/80 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="container-main py-3.5">
          <div className="flex gap-2 justify-start md:justify-center overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const count = category.id === 'all'
                ? galleryImages.length
                : galleryImages.filter((img) => img.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-glow-red'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.04 }}
                  className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300"
                  onClick={() => openLightbox(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 mb-0.5">
                      Silver Spicy Hut
                    </span>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {image.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Social & Booking Box */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-md text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-pink-500 text-white flex items-center justify-center mx-auto shadow-md">
              <FiInstagram size={24} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
              Follow Us on Instagram
            </h3>
            <p className="text-zinc-600 text-sm max-w-md mx-auto">
              Follow <strong>@spicyhutbangalore</strong> for daily food specials, weekend offers, and backstage culinary moments.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://instagram.com/spicyhutbangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <span>Follow @spicyhutbangalore</span>
              </a>
              <Link href="/#reserve" className="btn-secondary text-sm">
                <FiCalendar size={16} />
                <span>Reserve a Table</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              onClick={closeLightbox}
              aria-label="Close Preview"
            >
              <FiX size={26} />
            </button>

            {/* Left Nav */}
            <button
              className="absolute left-4 sm:left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              aria-label="Previous Image"
            >
              <FiChevronLeft size={30} />
            </button>

            {/* Right Nav */}
            <button
              className="absolute right-4 sm:right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              aria-label="Next Image"
            >
              <FiChevronRight size={30} />
            </button>

            {/* Active Image Container */}
            {filteredImages.find((img) => img.id === selectedImage) && (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[65vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={filteredImages.find((img) => img.id === selectedImage)!.src}
                    alt={filteredImages.find((img) => img.id === selectedImage)!.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center mt-4 space-y-1">
                  <p className="text-white text-lg sm:text-xl font-bold">
                    {filteredImages.find((img) => img.id === selectedImage)!.title}
                  </p>
                  <p className="text-zinc-400 text-xs">
                    {filteredImages.findIndex((img) => img.id === selectedImage) + 1} of {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}