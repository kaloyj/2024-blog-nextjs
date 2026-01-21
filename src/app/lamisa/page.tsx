"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllConceptIds, getConcept, MenuConcept } from "@/data/lamisa-concepts";

const menuItems = {
  savoury: [
    {
      name: "Pandesal with Filipino Omelette",
      description: "Warm, freshly baked pandesal — the beloved Filipino breakfast bread with its signature breadcrumb crust — split and filled with a classic Filipino omelette studded with fresh tomatoes and green onions"
    },
    {
      name: "Garlic Lime Fried Chicken",
      description: "Crispy buttermilk fried chicken marinated in garlic and brightened with zesty lime, served golden and crunchy with a tangy dipping sauce that cuts through the richness"
    },
    {
      name: "Escabeche Fried Fish Sandwich",
      description: "Golden crispy fried fish fillet nestled in a soft bun, drizzled with tangy-sweet escabeche sauce and topped with a bright salad of pickled ginger, julienned carrots, and colorful bell peppers — a Filipino fiesta classic reimagined between bread"
    }
  ],
  sweet: [
    {
      name: "Turon French Toast",
      description: "French toast reimagined with turon ingredients — ripe caramelized banana and sweet jackfruit — served with a luxurious whipped maple mascarpone cream"
    },
    {
      name: "Avocado French Toast",
      description: "Classic golden French toast crowned with silky whipped avocado cream and topped with brûléed avocado slices — a tribute to the Filipino tradition of enjoying avocado as a sweet dessert"
    },
    {
      name: "Ube Pancakes",
      description: "Fluffy violet-hued pancakes infused with real ube, stacked high and crowned with a cloud of ube maple whipped cream — a celebration of Filipino purple yam in the most indulgent way"
    },
    {
      name: "Champorado",
      description: "Creamy rice cooked with rich cocoa, sweetened with evaporated milk, and balanced with salty cured bacon — the beloved Filipino chocolate rice porridge that has warmed countless mornings"
    }
  ],
  drinks: [
    {
      name: "Espresso",
      description: null
    },
    {
      name: "Americano",
      description: null
    },
    {
      name: "Orange Juice",
      description: null
    }
  ]
};

export default function LamisaMenu() {
  const concepts = getAllConceptIds()
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((conceptId) => getConcept(conceptId))
    .filter((concept): concept is MenuConcept => concept !== undefined);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % concepts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + concepts.length) % concepts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-6 pt-8 pb-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4">
            {/* Left side - Brand */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 tracking-tight leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
                LAMISA
              </h1>
              <p className="text-amber-300/70 text-xs md:text-sm tracking-widest uppercase mt-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Modern Filipino Brunch
              </p>
            </motion.div>
            
            {/* Right side - Tagline */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-right"
            >
              <p className="text-amber-300/50 text-xs leading-relaxed max-w-xs" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="text-amber-300/70">Lamisa</span> — &quot;table&quot; in Cebuano, or <span className="italic">&quot;Lami, sa?&quot;</span> — &quot;Delicious, right?&quot;
              </p>
              <p className="text-amber-400/40 text-[10px] uppercase tracking-widest mt-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Barcelona
              </p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Featured Concepts Carousel */}
      <section className="pt-4 md:pt-8 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-[500px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {concepts.map((concept, index) => 
                  index === currentIndex && (
                    <motion.div
                      key={concept.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      {/* Hero Image */}
                      {concept.heroImage && (
                        <Image
                          src={concept.heroImage}
                          alt={concept.heroImageAlt || `${concept.title} concept hero image`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 1152px"
                          priority={index === 0}
                        />
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-950/60 to-amber-950/90 z-10"></div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 md:px-12">
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="max-w-3xl"
                        >
                          {/* Badges */}
                          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
                            <span className="bg-amber-800/60 backdrop-blur-sm text-amber-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                              CONCEPT {concept.id}
                            </span>
                            {index === 0 && (
                              <span className="bg-orange-700/60 backdrop-blur-sm text-orange-200 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                Latest
                              </span>
                            )}
                            {concept.date && (
                              <span className="bg-amber-700/60 backdrop-blur-sm text-amber-200 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                {concept.date}
                              </span>
                            )}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 tracking-tight drop-shadow-2xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
                            {concept.title.toUpperCase()}
                          </h3>
                          
                          {/* Subtitle */}
                          <p className="text-lg md:text-xl text-amber-100 mb-4 font-medium tracking-wider drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                            {concept.subtitle}
                          </p>
                          
                          {/* Cuisine */}
                          <p className="text-amber-200/80 text-sm md:text-base mb-2 italic drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                            {concept.cuisine}
                          </p>
                          
                          {/* Theme */}
                          <p className="text-amber-100/70 text-sm leading-relaxed mb-8 max-w-xl mx-auto drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                            {concept.theme}
                          </p>
                          
                          {/* CTA Button */}
                          <Link 
                            href={`/lamisa/${concept.id}`}
                            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-amber-950 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            Explore Concept
                            <ArrowLeft size={18} className="rotate-180 transition-transform" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-amber-900/60 hover:bg-amber-800/80 backdrop-blur-sm text-amber-200 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous concept"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-amber-900/60 hover:bg-amber-800/80 backdrop-blur-sm text-amber-200 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next concept"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {concepts.map((concept, index) => (
                <button
                  key={concept.id}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-amber-400 w-8' 
                      : 'bg-amber-700/50 hover:bg-amber-600/70'
                  }`}
                  aria-label={`Go to concept ${concept.id}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Menu Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Savoury Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-amber-200 mb-3 tracking-tight uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>
              Savoury
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {menuItems.savoury.map((item) => (
              <motion.div
                key={item.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-amber-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-800/40 hover:border-amber-600/60"
              >
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-amber-100 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.name}
                  </h3>
                </div>
                <p className="text-amber-200/70 leading-relaxed text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sweet Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-amber-200 mb-3 tracking-tight uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>
              Sweet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {menuItems.sweet.map((item) => (
              <motion.div
                key={item.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-amber-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-800/40 hover:border-amber-600/60"
              >
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-amber-100 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.name}
                  </h3>
                </div>
                <p className="text-amber-200/70 leading-relaxed text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Drinks Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-amber-200 mb-3 tracking-tight uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>
              Drinks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {menuItems.drinks.map((item) => (
              <motion.div
                key={item.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-700/40 hover:border-stone-500/60"
              >
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-stone-200 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.name}
                  </h3>
                </div>
                {item.description && (
                  <p className="text-stone-300/80 leading-relaxed text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-stone-800/30 rounded-2xl p-8 border border-stone-700/40">
            <p className="text-stone-200 text-lg mb-2 font-semibold tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              ✨ All dishes are made with love and authentic Filipino flavors ✨
            </p>
            <p className="text-stone-300/70 text-sm tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              A design concept celebrating Filipino brunch culture
            </p>
          </div>
        </motion.div>
      </main>

      {/* Decorative Footer */}
      <footer className="py-16 text-center bg-amber-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600/50"></div>
            <p className="text-amber-300 font-bold tracking-widest" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>LAMISA</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600/50"></div>
          </div>
          <p className="text-amber-300/70 text-sm tracking-wide mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Where Filipino tradition meets modern brunch culture
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors font-medium group"
            >
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Get to know the creator
              </span>
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
