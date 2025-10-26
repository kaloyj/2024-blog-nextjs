"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Instagram } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuConcept } from "@/data/lamisa-concepts";

interface ConceptClientProps {
  concept: MenuConcept;
}

export default function ConceptClient({ concept }: ConceptClientProps) {
  const searchParams = useSearchParams();
  const isInvited = searchParams.get('invite') === '1';
  const [showToast, setShowToast] = useState(isInvited);

  useEffect(() => {
    if (isInvited) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isInvited]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-amber-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-96 left-10 w-40 h-40 bg-orange-600/30 rounded-full blur-3xl"></div>

      {/* Invite Toast */}
      {showToast && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fixed top-4 left-0 right-0 flex justify-center z-50 pointer-events-none"
        >
          <div className="bg-amber-900/90 backdrop-blur-sm border border-amber-600/50 rounded-lg px-6 py-4 shadow-lg pointer-events-auto">
            <p className="text-amber-200 text-sm font-medium tracking-widest text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              You have been invited to:
            </p>
            <p className="text-amber-100 text-lg font-bold tracking-wide text-center mt-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              {concept.title}
            </p>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Image and Content */}
      {concept.heroImage && (
        <section className="relative md:px-6 md:pt-12 pb-12 md:pb-16">
          <div className="md:max-w-6xl md:mx-auto">
            {/* Hero Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px] rounded-b-3xl md:rounded-3xl overflow-hidden md:shadow-2xl"
            >
              {/* Hero Image */}
              <Image
                src={concept.heroImage}
                alt={concept.heroImageAlt || `${concept.title} concept hero image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-950/60 to-amber-950/90 z-10"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="mb-4">
                    <span className="text-amber-400/90 text-lg font-bold tracking-widest drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      CONCEPT {concept.id}
                    </span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 tracking-tight drop-shadow-2xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
                    {concept.title.toUpperCase()}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-amber-100 mb-6 font-medium tracking-wider drop-shadow-lg max-w-2xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {concept.subtitle}
                  </p>
                  
                  {/* Theme & Cuisine Info */}
                  <div className="max-w-2xl mx-auto space-y-2 mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-amber-300/80 mb-1 font-semibold drop-shadow" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Cuisine
                      </p>
                      <p className="text-amber-100/90 text-sm italic drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        {concept.cuisine}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-widest text-amber-300/80 mb-1 font-semibold drop-shadow" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Theme
                      </p>
                      <p className="text-amber-100/80 text-xs leading-relaxed italic drop-shadow-lg max-w-xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        {concept.theme}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  {concept.date && (
                    <div className="flex items-center justify-center text-amber-200 mt-8">
                      <p className="text-xs tracking-widest font-medium drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{concept.date}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Menu Label */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-center gap-4 text-amber-300 mb-12"
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50"></div>
        <p className="text-sm uppercase tracking-widest font-bold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Menu</p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50"></div>
      </motion.div>

      {/* Menu Items */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid gap-8">
          {concept.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-800/40 hover:border-amber-600/60"
            >
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-amber-100 tracking-wide mb-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.name}
                </h3>
                <p className="text-amber-200/70 leading-relaxed text-lg mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.description}
                </p>
              </div>
              
              {item.story && (
                <div className="pl-4 border-l-2 border-amber-600/50">
                  <p className="text-amber-300/60 text-sm italic leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.story}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        {concept.galleryImages && concept.galleryImages.length > 0 && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 -mx-6 md:mx-0"
          >
            <div className="text-center mb-8 px-6 md:px-0">
              <h2 className="text-2xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Concept {concept.id} — the people
              </h2>
            </div>

            <div className="md:space-y-4">
              {/* First Row - 3 images */}
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                {concept.galleryImages.slice(0, 3).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden md:rounded-lg"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 33vw"
                  />
                  {/* CSS Gradient Overlay */}
                  <div className="absolute inset-0 bg-amber-950/25 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
              {concept.galleryImages.slice(3, 6).map((img, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.05 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden md:rounded-lg"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 4}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 33vw"
                  />
                  {/* CSS Gradient Overlay */}
                  <div className="absolute inset-0 bg-amber-950/25 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {/* Third Row - 2 images centered */}
            {concept.galleryImages.length > 6 && (
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                <div className="hidden md:block"></div>
                {concept.galleryImages.slice(6, 8).map((img, index) => (
                <motion.div
                  key={index + 6}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.05 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden md:rounded-lg"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 7}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 33vw"
                  />
                  {/* CSS Gradient Overlay */}
                  <div className="absolute inset-0 bg-amber-950/25 pointer-events-none"></div>
                </motion.div>
              ))}
              </div>
            )}
            </div>
          </motion.div>
        )}


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
            Where Filipino tradition meets modern innovation
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
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

      {/* Instagram Link Section */}
      <div className="py-12 text-center bg-gradient-to-b from-amber-950/50 to-amber-950/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-300/80 text-sm mb-4 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Enjoyed this concept? Check other{' '}
              <Link 
                href="/lamisa" 
                className="text-amber-200 hover:text-amber-100 underline decoration-amber-500/50 hover:decoration-amber-400 transition-colors font-medium"
              >
                concepts
              </Link>
              , or follow us on Instagram
            </p>
            <a
              href="https://www.instagram.com/lamisa.brunch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm font-medium group"
            >
              <Instagram size={16} className="group-hover:rotate-12 transition-transform" />
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                @lamisa.brunch
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

