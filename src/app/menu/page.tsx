"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Menu data - in production, this would come from Firestore
const menuCategories = [
  {
    id: 'soups',
    name: 'Soups',
    items: [
      { name: 'Manchow Soup (Veg)', price: 120, veg: true },
      { name: 'Manchow Soup (Chicken)', price: 149, veg: false },
      { name: 'Hot & Sour Soup (Veg)', price: 120, veg: true },
      { name: 'Hot & Sour Soup (Chicken)', price: 149, veg: false },
      { name: 'Lemon Coriander Soup (Veg)', price: 120, veg: true },
      { name: 'Lemon Coriander Soup (Chicken)', price: 149, veg: false },
      { name: 'Sweet Corn Soup (Veg)', price: 120, veg: true },
      { name: 'Sweet Corn Soup (Chicken)', price: 149, veg: false },
    ],
  },
  {
    id: 'bar-bites',
    name: 'Bar Bites',
    items: [
      { name: 'Green Garden Salad', price: 110, veg: true },
      { name: 'Peanut Masala', price: 130, veg: true },
      { name: 'Roasted Peanut', price: 100, veg: true },
      { name: 'Cheese Cherry Pineapple', price: 159, veg: true },
      { name: 'Mix Fruit Salad', price: 249, veg: true },
      { name: 'Cashewnut Fry', price: 199, veg: true },
    ],
  },
  {
    id: 'chinese-veg',
    name: 'Chinese Starters (Veg)',
    items: [
      { name: 'Gobi Manchurian', price: 199, veg: true, popular: true },
      { name: 'Gobi Chilly', price: 199, veg: true },
      { name: 'Gobi Pepper Dry', price: 199, veg: true },
      { name: 'Gobi 65', price: 199, veg: true },
      { name: 'Mushroom Manchurian', price: 199, veg: true },
      { name: 'Mushroom Chilly', price: 199, veg: true },
      { name: 'Baby Corn Manchurian', price: 199, veg: true },
      { name: 'Paneer Manchurian', price: 199, veg: true },
      { name: 'Paneer Chilly', price: 199, veg: true },
      { name: 'French Fries (Plain)', price: 149, veg: true },
      { name: 'French Fries (Peri Peri)', price: 159, veg: true },
      { name: 'French Fries (Cheese)', price: 169, veg: true },
      { name: 'Crispy Corn', price: 199, veg: true },
    ],
  },
  {
    id: 'chinese-nonveg',
    name: 'Chinese Starters (Non-Veg)',
    items: [
      { name: 'Chicken Manchurian', price: 259, veg: false, popular: true },
      { name: 'Chilly Chicken', price: 259, veg: false, popular: true },
      { name: 'Lemon Chicken', price: 259, veg: false },
      { name: 'Thai Pai Chicken', price: 259, veg: false },
      { name: 'Chicken 65', price: 259, veg: false },
      { name: 'Dragon Chicken', price: 259, veg: false },
      { name: 'Chicken Pepper Dry', price: 259, veg: false },
      { name: 'Chicken Hot Pan', price: 259, veg: false },
      { name: 'Chicken High Way', price: 259, veg: false },
      { name: 'Chicken Lolly Pop', price: 259, veg: false },
      { name: 'Chicken Kabab', price: 239, veg: false },
      { name: 'Drums of Heaven', price: 259, veg: false },
      { name: 'Five Spices Chicken Wings', price: 259, veg: false },
    ],
  },
  {
    id: 'andhra',
    name: 'Andhra Special Starters',
    items: [
      { name: 'Andrastyle Chilly Chicken', price: 249, veg: false },
      { name: 'Guntur Chicken', price: 249, veg: false, popular: true },
      { name: 'Kakinadu Chicken', price: 249, veg: false },
    ],
  },
  {
    id: 'tandoor-veg',
    name: 'Tandoor Starters (Veg)',
    items: [
      { name: 'Paneer Tikka', price: 270, veg: true, popular: true },
      { name: 'Tandoori Mushroom', price: 270, veg: true },
      { name: 'Paneer Malai Tikka', price: 270, veg: true },
      { name: 'Paneer Achari Tikka', price: 270, veg: true },
      { name: 'Sunheri Paneer Tikka', price: 270, veg: true },
    ],
  },
  {
    id: 'tandoor-nonveg',
    name: 'Tandoor Starters (Non-Veg)',
    items: [
      { name: 'Tandoori Chicken (Full)', price: 600, veg: false, popular: true },
      { name: 'Tandoori Chicken (Half)', price: 300, veg: false, popular: true },
      { name: 'Tandoori Butter Chicken (Full)', price: 750, veg: false, popular: true },
      { name: 'Tandoori Butter Chicken (Half)', price: 350, veg: false, popular: true },
      { name: 'Kalmi (2 pc)', price: 199, veg: false },
      { name: 'Chicken Tikka', price: 249, veg: false },
      { name: 'Murgh Angara Kabab', price: 249, veg: false },
      { name: 'Murgh Angara Tikka', price: 299, veg: false },
      { name: 'Chicken Sholey Tikka', price: 299, veg: false },
      { name: 'Chicken Banjara Kabab', price: 299, veg: false },
      { name: 'Chicken Hariyali Kabab', price: 299, veg: false },
      { name: 'Chicken Shabnami', price: 299, veg: false },
      { name: 'Chicken Pahadi Kabab', price: 299, veg: false },
    ],
  },
  {
    id: 'veg-gravy',
    name: 'Veg Gravy',
    items: [
      { name: 'Veg Kadai', price: 260, veg: true },
      { name: 'Veg Kolhapuri', price: 260, veg: true },
      { name: 'Kaju Masala', price: 300, veg: true },
      { name: 'Mushroom Masala', price: 260, veg: true },
      { name: 'Paneer Butter Masala', price: 260, veg: true, popular: true },
      { name: 'Paneer Tikka Masala', price: 280, veg: true },
      { name: 'Veg Hyderabadi', price: 260, veg: true },
      { name: 'Dal Fry', price: 210, veg: true },
      { name: 'Dal Tadka', price: 210, veg: true },
    ],
  },
  {
    id: 'nonveg-gravy',
    name: 'Non-Veg Gravy',
    items: [
      { name: 'Maharaja (Chicken / Mutton)', price: '310 / 410', veg: false, popular: true },
      { name: 'Chingari (Chicken / Mutton)', price: '310 / 410', veg: false },
      { name: 'Kadai (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Myfill (Chicken / Mutton)', price: '310 / 410', veg: false },
      { name: 'Hyderabadi (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Angara (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Kolhapuri (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Express (Chicken / Mutton)', price: '310 / 410', veg: false },
    ],
  },
  {
    id: 'breads',
    name: 'Indian Breads',
    items: [
      { name: 'Roti', price: 39, veg: true },
      { name: 'Butter Roti', price: 49, veg: true },
      { name: 'Naan (Plain)', price: 69, veg: true },
      { name: 'Naan (Butter)', price: 79, veg: true },
      { name: 'Garlic Naan', price: 119, veg: true, popular: true },
      { name: 'Kulcha', price: 49, veg: true },
      { name: 'Butter Kulcha', price: 59, veg: true },
      { name: 'Cheese Garlic Naan', price: 129, veg: true },
    ],
  },
  {
    id: 'veg-rice',
    name: 'Veg Rice & Noodles',
    items: [
      { name: 'Veg Fried Rice', price: 199, veg: true },
      { name: 'Jeera Rice', price: 199, veg: true },
      { name: 'Ghee Rice', price: 210, veg: true },
      { name: 'Veg Biryani', price: 210, veg: true },
      { name: 'Veg Pulav', price: 210, veg: true },
      { name: 'Dal Kichdi', price: 199, veg: true },
      { name: 'Palak Kichdi', price: 199, veg: true },
      { name: 'Steam Rice', price: 99, veg: true },
      { name: 'Veg Noodles', price: 189, veg: true },
      { name: 'Veg Schezwan Noodles', price: 189, veg: true },
    ],
  },
  {
    id: 'nonveg-rice',
    name: 'Non-Veg Rice & Noodles',
    items: [
      { name: 'Egg Fried Rice', price: 220, veg: false },
      { name: 'Egg Schezwan Fried Rice', price: 240, veg: false },
      { name: 'Egg Noodles', price: 220, veg: false },
      { name: 'Egg Schezwan Noodles', price: 240, veg: false },
      { name: 'Nati Style Chicken Biryani', price: 249, veg: false, popular: true },
      { name: 'Nati Style Mutton Biryani', price: 310, veg: false, popular: true },
      { name: 'Biriyani Rice', price: 149, veg: false },
      { name: 'Chicken Fried Rice', price: 249, veg: false },
      { name: 'Chicken Schezwan Fried Rice', price: 269, veg: false },
      { name: 'Mix Non Veg Fried Rice', price: 299, veg: false },
      { name: 'Nati Koli Biriyani', price: 310, veg: false, popular: true },
    ],
  },
  {
    id: 'specials',
    name: 'Silver Spicy Special',
    items: [
      { name: 'Chicken Urbadu', price: 299, veg: false, popular: true },
      { name: 'Mutton Urbadu', price: 449, veg: false, popular: true },
      { name: 'Nati Kali Urbadu', price: 349, veg: false },
      { name: 'Mutton Sukka', price: 429, veg: false },
      { name: 'Nati Kali Sukka', price: 329, veg: false },
    ],
  },
  {
    id: 'platters',
    name: 'Platters',
    items: [
      { name: 'Chicken Platter', price: 1499, veg: false, popular: true },
      { name: 'Veg Platter', price: 1199, veg: true },
      { name: 'Mix NonVeg Platter', price: 2499, veg: false },
      { name: 'Sea Food Platter', price: 2499, veg: false },
    ],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    items: [
      { name: 'Oreo Milkshake', price: 149, veg: true, popular: true },
      { name: 'KitKat Milkshake', price: 149, veg: true, popular: true },
      { name: 'Chocolate Milkshake', price: 149, veg: true },
      { name: 'Strawberry Milkshake', price: 149, veg: true },
      { name: 'Vanilla Milkshake', price: 149, veg: true },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('soups');

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-[var(--light-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant_indoor_seating.jpg"
            alt="Silver Spicy Hut Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-main text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200">
            Authentic multicuisine dining experience
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-16 md:top-20 z-40 bg-white dark:bg-gray-900 shadow-md">
        <div className="container-main py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--brand-red)] text-white'
                    : 'bg-gray-100 text-[var(--dark-gray)] hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container-main">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--deep-brown)] flex items-center gap-3">
                {category.name}
                <span className="text-sm font-normal text-[var(--text-secondary)]">
                  ({category.items.length} items)
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="card flex justify-between items-start p-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {item.veg ? (
                          <span className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 m-auto" />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-red-500 m-auto" />
                          </span>
                        )}
                        <h3 className="font-semibold text-[var(--dark-gray)]">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-[var(--gold)] text-white text-xs rounded-full font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-lg font-bold text-[var(--brand-red)] ml-4">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Note */}
          <div className="mt-12 p-6 bg-[var(--cream)] rounded-xl text-center">
            <p className="text-[var(--text-secondary)]">
              <strong>Note:</strong> Beverages and desserts menu coming soon.
              Ask your server for today's specials!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#reserve" className="btn-primary text-center">
              Reserve Your Table
            </a>
            <a
              href="https://swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}