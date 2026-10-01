"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiStar, FiMapPin, FiUsers, FiClock, FiCheck } from 'react-icons/fi';

const features = [
  {
    icon: FiStar,
    title: '4.1★ Rated',
    description: 'Consistently rated across Google, Swiggy, and Justdial with 377+ reviews',
  },
  {
    icon: FiMapPin,
    title: 'Prime Location',
    description: 'Conveniently located on Hennur-Bagalur airport corridor',
  },
  {
    icon: FiUsers,
    title: 'Family Friendly',
    description: 'Spacious seating, kids menu, and group booking facilities',
  },
  {
    icon: FiClock,
    title: 'Open Daily',
    description: '12:00 PM - 11:00 PM for lunch and dinner service',
  },
];

const cuisineTypes = [
  { name: 'North Indian', description: 'Tandoor specialties, biryanis, and rich gravies' },
  { name: 'Chinese', description: 'Wok-tossed noodles, manchurian, and dim sum' },
  { name: 'Continental', description: 'Sizzlers, pasta, and international delights' },
  { name: 'Mughlai', description: 'Authentic aromatic curries and kebabs' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--light-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant_indoor_seating.jpg"
            alt="Silver Spicy Hut About"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-main text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Silver Spicy Hut</h1>
          <p className="text-xl text-gray-200">
            Your Family Dining Destination in Mitganahalli
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--brand-red)]">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Welcome to Silver Spicy Hut, where every meal is a celebration of flavor,
                  tradition, and warm hospitality. Located in the heart of Mitganahalli
                  on the bustling Hennur-Bagalur Road, we've been serving authentic
                  multicuisine delicacies to our cherished guests.
                </p>
                <p>
                  Our journey began with a simple vision: to create a dining destination
                  that feels like home—a place where families gather, friends celebrate,
                  and every dish tells a story of culinary excellence.
                </p>
                <p>
                  From our sizzling tandoor to our aromatic biryanis, from wok-tossed
                  Chinese favorites to Continental comfort food, we take pride in offering
                  a diverse menu that caters to every palate.
                </p>
                <p>
                  Our commitment to quality ingredients, authentic recipes, and
                  impeccable service has earned us the trust of over 377+ happy reviewers
                  across platforms. We invite you to experience the Silver Spicy Hut difference.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/tandoori_kebab_platter.jpg"
                  alt="Tandoor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/images/butter_chicken_naan.jpg"
                  alt="North Indian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/chilli_chicken_chinese.jpg"
                  alt="Chinese"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/images/continental_sizzler.jpg"
                  alt="Continental"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              What Makes Us Special
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="font-bold text-lg mb-2 text-[var(--deep-brown)]">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Variety */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--deep-brown)]">
              Our Cuisine Range
            </h2>
            <p className="text-[var(--text-secondary)]">
              From regional Indian to international flavors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisineTypes.map((cuisine, index) => (
              <motion.div
                key={cuisine.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-[var(--brand-red)]">{cuisine.name}</h3>
                <p className="text-[var(--text-secondary)]">{cuisine.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="section-padding bg-[var(--light-gray)]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--deep-brown)]">
                Location & Facilities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center flex-shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Address</h3>
                    <p className="text-[var(--text-secondary)]">
                      Survey no. 119/5, Hennur Bagalur Main Rd,<br />
                      Mitganahalli, Bangalore 560077
                    </p>
                    <p className="text-sm text-[var(--brand-red)] mt-1">
                      5 minutes from Hennur Cross
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-red)] text-white flex items-center justify-center flex-shrink-0">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Opening Hours</h3>
                    <p className="text-[var(--text-secondary)]">
                      Daily: 12:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {['Ample Parking', 'Dine-in', 'Family Seating', 'Group Bookings', 'SwiggyPay Accepted'].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium"
                    >
                      <FiCheck className="text-green-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N0KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Silver Spicy Hut Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-red)]">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Experience Silver Spicy Hut Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We're ready to welcome you with open arms and delicious food
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#reserve" className="bg-white text-[var(--brand-red)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Reserve Your Table
              </a>
              <a href="/menu" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}