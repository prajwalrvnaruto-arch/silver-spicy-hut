"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiX, FiChevronLeft, FiChevronRight, FiShare2 } from 'react-icons/fi';

const galleryImages = [
  { id: 1, src: '/images/tandoori_kebab_platter.jpg', category: 'food', title: 'Tandoori Kebab Platter' },
  { id: 2, src: '/images/butter_chicken_naan.jpg', category: 'food', title: 'Butter Chicken with Naan' },
  { id: 3, src: '/images/chicken_tikka_masala.jpg', category: 'food', title: 'Chicken Tikka Masala' },
  { id: 4, src: '/images/chilli_chicken_chinese.jpg', category: 'food', title: 'Chilly Chicken' },
  { id: 5, src: '/images/hyderabadi_biryani.jpg', category: 'food', title: 'Hyderabadi Biryani' },
  { id: 6, src: '/images/paneer_tikka_special.jpg', category: 'food', title: 'Paneer Tikka' },
  { id: 7, src: '/images/paneer_butter_masala.jpg', category: 'food', title: 'Paneer Butter Masala' },
  { id: 8, src: '/images/mutton_rogan_josh.jpg', category: 'food', title: 'Mutton Rogan Josh' },
  { id: 9, src: '/images/dal_makhani.jpg', category: 'food', title: 'Dal Makhani' },
  { id: 10, src: '/images/schezwan_noodles.jpg', category: 'food', title: 'Schezwan Noodles' },
  { id: 11, src: '/images/crispy_momos.jpg', category: 'food', title: 'Crispy Momos' },
  { id: 12, src: '/images/continental_sizzler.jpg', category: 'food', title: 'Continental Sizzler' },
  { id: 13, src: '/images/creamy_pasta.jpg', category: 'food', title: 'Creamy Pasta' },
  { id: 14, src: '/images/refreshing_mocktails.jpg', category: 'food', title: 'Refreshing Mocktails' },
  { id: 15, src: '/images/mango_lassi_refreshing.jpg', category: 'food', title: 'Mango Lassi' },
  { id: 16, src: '/images/gulab_jamun_icecream.jpg', category: 'food', title: 'Gulab Jamun Ice Cream' },
  { id: 17, src: '/images/tandoori_roti_basket.jpg', category: 'food', title: 'Tandoori Roti Basket' },
  { id: 18, src: '/images/hero_dusk_entrance.jpg', category: 'ambiance', title: 'Restaurant Entrance' },
  { id: 19, src: '/images/restaurant_indoor_seating.jpg', category: 'ambiance', title: 'Indoor Seating' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'ambiance', label: 'Ambiance' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <main className="min-h-screen bg-[var(--light-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dusk_entrance.jpg"
            alt="Spicy Hut Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-main text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200">
            A visual journey through our culinary creations
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white dark:bg-gray-900 shadow-md sticky top-16 md:top-20 z-40">
        <div className="container-main py-4">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--brand-red)] text-white'
                    : 'bg-gray-100 text-[var(--dark-gray)] hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Instagram CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--brand-red)] to-[var(--warm-orange)] rounded-2xl text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Follow Us on Instagram</h3>
            <p className="mb-4">Get daily updates on our delicious preparations and special offers</p>
            <a
              href="https://instagram.com/spicyhutbangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-[var(--brand-red)] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              @spicyhutbangalore
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <FiX size={32} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <FiChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <FiChevronRight size={40} />
            </button>

            {/* Image */}
            {filteredImages.find(img => img.id === selectedImage) && (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-4xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-[80vw] h-[70vh]">
                  <Image
                    src={filteredImages.find(img => img.id === selectedImage)!.src}
                    alt={filteredImages.find(img => img.id === selectedImage)!.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-center mt-4 text-xl font-semibold">
                  {filteredImages.find(img => img.id === selectedImage)!.title}
                </p>
              </motion.div>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
              {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}