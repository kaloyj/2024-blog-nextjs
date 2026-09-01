"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllConceptIds, getConcept, MenuConcept } from "@/data/lamisa-concepts";
import { getAllPopupIds, getPopup, Popup } from "@/data/lamisa-popups";

export default function LamisaMenu() {
  const concepts = getAllConceptIds()
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((conceptId) => getConcept(conceptId))
    .filter((concept): concept is MenuConcept => concept !== undefined);

  const popups = getAllPopupIds()
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((popupId) => getPopup(popupId))
    .filter((popup): popup is Popup => popup !== undefined);

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
                          {concept.date && (
                            <p className="text-amber-200/80 text-sm tracking-widest uppercase mb-4 drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                              {concept.date}
                            </p>
                          )}
                          
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
                          
                          <Link 
                            href={`/lamisa/${concept.id}`}
                            className="inline-flex items-center gap-2 text-amber-100 hover:text-white font-semibold tracking-widest uppercase text-sm border-b border-amber-400/70 hover:border-amber-100 pb-0.5 transition-all duration-300 hover:gap-3 drop-shadow-lg group"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            Explore Concept
                            <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
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

      {/* Events */}
      {popups.length > 0 && (
        <section className="border-t border-amber-800/30 pt-12 md:pt-16 pb-12 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-8 md:mb-10">
              <h2
                className="text-3xl md:text-4xl font-black text-amber-200 tracking-tight uppercase"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.01em" }}
              >
                Events
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mt-3 rounded-full" />
            </div>

            <div className="space-y-4">
              {popups.map((popup) => (
                <Link
                  key={popup.id}
                  href={`/lamisa/popups/${popup.id}`}
                  className="flex gap-4 md:gap-6 items-center group"
                >
                  {popup.heroImage && (
                    <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={popup.heroImage}
                        alt={popup.heroImageAlt || `${popup.title} popup`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="112px"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {popup.date && (
                      <p
                        className="text-amber-300/50 text-xs tracking-widest uppercase mb-1"
                        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                      >
                        {popup.date}
                      </p>
                    )}
                    <h3
                      className="text-amber-100 text-lg md:text-xl font-medium group-hover:text-white transition-colors"
                      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                    >
                      {popup.title}
                    </h3>
                    <p
                      className="text-amber-300/60 text-sm mt-0.5"
                      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                    >
                      {popup.subtitle}
                      {popup.address && ` · ${popup.address}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
