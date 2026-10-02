"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiSearch, FiStar, FiFilter, FiCalendar, FiPhone } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { SiSwiggy } from 'react-icons/si';
import Link from 'next/link';

// Menu data categorized
const menuCategories = [
  {
    id: 'soups',
    name: 'Soups',
    items: [
      { name: 'Manchow Soup (Veg)', price: '120', veg: true, popular: true },
      { name: 'Manchow Soup (Chicken)', price: '149', veg: false, popular: true },
      { name: 'Hot & Sour Soup (Veg)', price: '120', veg: true },
      { name: 'Hot & Sour Soup (Chicken)', price: '149', veg: false },
      { name: 'Lemon Coriander Soup (Veg)', price: '120', veg: true },
      { name: 'Lemon Coriander Soup (Chicken)', price: '149', veg: false },
      { name: 'Sweet Corn Soup (Veg)', price: '120', veg: true },
      { name: 'Sweet Corn Soup (Chicken)', price: '149', veg: false },
    ],
  },
  {
    id: 'bar-bites',
    name: 'Bar Bites & Salads',
    items: [
      { name: 'Green Garden Salad', price: '110', veg: true },
      { name: 'Peanut Masala', price: '130', veg: true, popular: true },
      { name: 'Roasted Peanut', price: '100', veg: true },
      { name: 'Cheese Cherry Pineapple', price: '159', veg: true },
      { name: 'Mix Fruit Salad', price: '249', veg: true },
      { name: 'Cashewnut Fry', price: '199', veg: true },
    ],
  },
  {
    id: 'chinese-veg',
    name: 'Chinese Starters (Veg)',
    items: [
      { name: 'Gobi Manchurian', price: '199', veg: true, popular: true },
      { name: 'Gobi Chilly', price: '199', veg: true },
      { name: 'Gobi Pepper Dry', price: '199', veg: true },
      { name: 'Gobi 65', price: '199', veg: true },
      { name: 'Mushroom Manchurian', price: '199', veg: true },
      { name: 'Mushroom Chilly', price: '199', veg: true },
      { name: 'Baby Corn Manchurian', price: '199', veg: true },
      { name: 'Paneer Manchurian', price: '199', veg: true, popular: true },
      { name: 'Paneer Chilly', price: '199', veg: true, popular: true },
      { name: 'French Fries (Plain)', price: '149', veg: true },
      { name: 'French Fries (Peri Peri)', price: '159', veg: true },
      { name: 'Crispy Corn', price: '199', veg: true },
    ],
  },
  {
    id: 'chinese-nonveg',
    name: 'Chinese Starters (Non-Veg)',
    items: [
      { name: 'Chicken Manchurian', price: '259', veg: false, popular: true },
      { name: 'Chilly Chicken', price: '259', veg: false, popular: true },
      { name: 'Lemon Chicken', price: '259', veg: false },
      { name: 'Thai Pai Chicken', price: '259', veg: false },
      { name: 'Chicken 65', price: '259', veg: false, popular: true },
      { name: 'Dragon Chicken', price: '259', veg: false },
      { name: 'Chicken Pepper Dry', price: '259', veg: false },
      { name: 'Chicken Hot Pan', price: '259', veg: false },
      { name: 'Chicken High Way', price: '259', veg: false },
      { name: 'Chicken Lolly Pop', price: '259', veg: false, popular: true },
      { name: 'Chicken Kabab', price: '239', veg: false },
      { name: 'Drums of Heaven', price: '259', veg: false },
      { name: 'Five Spices Chicken Wings', price: '259', veg: false },
    ],
  },
  {
    id: 'andhra',
    name: 'Andhra Special Starters',
    items: [
      { name: 'Andhra Style Chilly Chicken', price: '249', veg: false, popular: true },
      { name: 'Guntur Chicken', price: '249', veg: false, popular: true },
      { name: 'Kakinada Chicken', price: '249', veg: false },
    ],
  },
  {
    id: 'tandoor-veg',
    name: 'Tandoor Starters (Veg)',
    items: [
      { name: 'Paneer Tikka', price: '270', veg: true, popular: true },
      { name: 'Tandoori Mushroom', price: '270', veg: true },
      { name: 'Paneer Malai Tikka', price: '270', veg: true, popular: true },
      { name: 'Paneer Achari Tikka', price: '270', veg: true },
      { name: 'Sunheri Paneer Tikka', price: '270', veg: true },
    ],
  },
  {
    id: 'tandoor-nonveg',
    name: 'Tandoor Starters (Non-Veg)',
    items: [
      { name: 'Tandoori Chicken (Full)', price: '600', veg: false, popular: true },
      { name: 'Tandoori Chicken (Half)', price: '300', veg: false, popular: true },
      { name: 'Tandoori Butter Chicken (Full)', price: '750', veg: false, popular: true },
      { name: 'Tandoori Butter Chicken (Half)', price: '350', veg: false, popular: true },
      { name: 'Kalmi Kabab (2 pc)', price: '199', veg: false },
      { name: 'Chicken Tikka', price: '249', veg: false, popular: true },
      { name: 'Murgh Angara Kabab', price: '249', veg: false },
      { name: 'Murgh Angara Tikka', price: '299', veg: false },
      { name: 'Chicken Sholey Tikka', price: '299', veg: false },
      { name: 'Chicken Banjara Kabab', price: '299', veg: false },
      { name: 'Chicken Hariyali Kabab', price: '299', veg: false },
      { name: 'Chicken Pahadi Kabab', price: '299', veg: false },
    ],
  },
  {
    id: 'veg-gravy',
    name: 'Main Course - Veg Gravies',
    items: [
      { name: 'Paneer Butter Masala', price: '260', veg: true, popular: true },
      { name: 'Paneer Tikka Masala', price: '280', veg: true, popular: true },
      { name: 'Kaju Masala', price: '300', veg: true, popular: true },
      { name: 'Veg Kadai', price: '260', veg: true },
      { name: 'Veg Kolhapuri', price: '260', veg: true },
      { name: 'Mushroom Masala', price: '260', veg: true },
      { name: 'Veg Hyderabadi', price: '260', veg: true },
      { name: 'Dal Fry', price: '210', veg: true },
      { name: 'Dal Tadka', price: '210', veg: true, popular: true },
    ],
  },
  {
    id: 'nonveg-gravy',
    name: 'Main Course - Non-Veg Gravies',
    items: [
      { name: 'Butter Chicken (Rich Gravy)', price: '310', veg: false, popular: true },
      { name: 'Maharaja (Chicken / Mutton)', price: '310 / 410', veg: false, popular: true },
      { name: 'Chingari (Chicken / Mutton)', price: '310 / 410', veg: false },
      { name: 'Kadai (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Myfill (Chicken / Mutton)', price: '310 / 410', veg: false },
      { name: 'Hyderabadi Gravy (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Angara (Chicken / Mutton)', price: '290 / 390', veg: false },
      { name: 'Kolhapuri (Chicken / Mutton)', price: '290 / 390', veg: false },
    ],
  },
  {
    id: 'breads',
    name: 'Tandoori Roti & Breads',
    items: [
      { name: 'Tandoori Roti', price: '39', veg: true },
      { name: 'Butter Roti', price: '49', veg: true, popular: true },
      { name: 'Plain Naan', price: '69', veg: true },
      { name: 'Butter Naan', price: '79', veg: true, popular: true },
      { name: 'Garlic Naan', price: '119', veg: true, popular: true },
      { name: 'Cheese Garlic Naan', price: '129', veg: true, popular: true },
      { name: 'Plain Kulcha', price: '49', veg: true },
      { name: 'Butter Kulcha', price: '59', veg: true },
    ],
  },
  {
    id: 'rice-biryani',
    name: 'Rice, Biryani & Noodles',
    items: [
      { name: 'Nati Style Chicken Biryani', price: '249', veg: false, popular: true },
      { name: 'Nati Style Mutton Biryani', price: '310', veg: false, popular: true },
      { name: 'Veg Dum Biryani', price: '210', veg: true, popular: true },
      { name: 'Biriyani Rice (Khushka)', price: '149', veg: false },
      { name: 'Chicken Fried Rice', price: '249', veg: false, popular: true },
      { name: 'Chicken Schezwan Fried Rice', price: '269', veg: false },
      { name: 'Veg Fried Rice', price: '199', veg: true },
      { name: 'Jeera Rice', price: '199', veg: true },
      { name: 'Ghee Rice', price: '210', veg: true, popular: true },
      { name: 'Veg Schezwan Noodles', price: '189', veg: true },
      { name: 'Egg Fried Rice', price: '220', veg: false },
      { name: 'Dal Khichdi', price: '199', veg: true },
    ],
  },
  {
    id: 'specials',
    name: 'Silver Spicy Special Sukka',
    items: [
      { name: 'Chicken Urbadu', price: '299', veg: false, popular: true },
      { name: 'Mutton Urbadu', price: '449', veg: false, popular: true },
      { name: 'Nati Koli Urbadu', price: '349', veg: false },
      { name: 'Mutton Sukka', price: '429', veg: false, popular: true },
      { name: 'Nati Koli Sukka', price: '329', veg: false },
    ],
  },
  {
    id: 'platters',
    name: 'Party Sharing Platters',
    items: [
      { name: 'Chicken Sizzling Platter', price: '1499', veg: false, popular: true },
      { name: 'Veg Special Platter', price: '1199', veg: true, popular: true },
      { name: 'Mix Non-Veg Grand Platter', price: '2499', veg: false },
      { name: 'Sea Food Special Platter', price: '2499', veg: false },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages & Milkshakes',
    items: [
      { name: 'Oreo Thick Shake', price: '149', veg: true, popular: true },
      { name: 'KitKat Milkshake', price: '149', veg: true, popular: true },
      { name: 'Fresh Mango Lassi', price: '129', veg: true, popular: true },
      { name: 'Chocolate Milkshake', price: '149', veg: true },
      { name: 'Gulab Jamun with Ice Cream', price: '139', veg: true, popular: true },
    ],
  },
];

type FilterType = 'all' | 'veg' | 'non-veg' | 'popular';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('soups');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered categories and dishes
  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((category) => {
        const filteredItems = category.items.filter((item) => {
          // Dietary Filter
          if (filterType === 'veg' && !item.veg) return false;
          if (filterType === 'non-veg' && item.veg) return false;
          if (filterType === 'popular' && !item.popular) return false;

          // Search Filter
          if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(query);
            const matchesCat = category.name.toLowerCase().includes(query);
            return matchesName || matchesCat;
          }
          return true;
        });

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [filterType, searchQuery]);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -140; // account for sticky header & filter bar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant_indoor_seating.jpg"
            alt="Silver Spicy Hut Dining Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container-main text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-3">
            <FaFire className="text-amber-400" />
            <span>Multicuisine Kitchen</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Our Dining Menu
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Freshly prepared Tandoor kebabs, rich North Indian curries, wok-tossed Indo-Chinese dishes, and decadent milkshakes.
          </p>
        </div>
      </section>

      {/* Sticky Interactive Bar (Search + Dietary filter + Category tabs) */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm transition-all">
        <div className="container-main py-3.5 space-y-3">
          {/* Top row: Search input + Dietary pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <FiSearch size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish (e.g. Biryani, Paneer...)"
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-zinc-400 hover:text-zinc-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'All Items' },
                { id: 'veg', label: '🟢 Pure Veg' },
                { id: 'non-veg', label: '🔴 Non-Veg' },
                { id: 'popular', label: '⭐ Popular' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilterType(btn.id as FilterType)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    filterType === btn.id
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom row: Category Navigation Horizontal Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-zinc-100 pt-2.5">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white font-semibold shadow-glow-red'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
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
        <div className="container-main max-w-5xl">
          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200/80 shadow-sm max-w-md mx-auto my-8">
              <p className="text-4xl mb-3">🔍</p>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">No dishes found</h3>
              <p className="text-zinc-500 text-sm mb-6">
                No menu items match your search for "{searchQuery}" under the selected filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterType('all');
                }}
                className="btn-primary text-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-14 scroll-mt-36"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                      {category.name}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
                      {category.items.length} items
                    </span>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 border border-zinc-200/70 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-200 flex justify-between items-center gap-4"
                    >
                      <div className="flex items-start gap-3">
                        {/* Veg / Non-Veg Indicator Icon */}
                        <div className="mt-1 shrink-0">
                          {item.veg ? (
                            <span
                              className="w-4 h-4 rounded-sm border border-green-600 flex items-center justify-center p-0.5"
                              title="Vegetarian"
                            >
                              <span className="w-2 h-2 rounded-full bg-green-600" />
                            </span>
                          ) : (
                            <span
                              className="w-4 h-4 rounded-sm border border-red-600 flex items-center justify-center p-0.5"
                              title="Non-Vegetarian"
                            >
                              <span className="w-2 h-2 rounded-full bg-red-600" />
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-zinc-900 text-sm sm:text-base">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Price Tag */}
                      <div className="text-right shrink-0">
                        <span className="text-base font-bold text-red-600">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}

          {/* Online Order & Table Reservation Callout */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-md text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-zinc-900">
              Ready to Feast at Silver Spicy Hut?
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Reserve your table online for guaranteed seating, or order for doorstep delivery on Swiggy and Zomato.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/#reserve" className="btn-primary text-sm">
                <FiCalendar size={16} />
                <span>Reserve a Table</span>
              </Link>
              <a
                href="https://swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center justify-center gap-2"
              >
                <SiSwiggy className="text-[#FC8019]" size={16} />
                <span>Order on Swiggy</span>
              </a>
              <a
                href="tel:+917861004444"
                className="btn-secondary text-sm flex items-center justify-center gap-2"
              >
                <FiPhone size={15} />
                <span>Call to Order</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}