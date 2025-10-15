"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MenuConcept } from "@/data/lamisa-concepts";

interface ConceptClientProps {
  concept: MenuConcept;
}

export default function ConceptClient({ concept }: ConceptClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-600/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/lamisa" 
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 mb-8 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Back to Main Menu</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-4">
              <span className="text-amber-400/60 text-xl font-bold tracking-widest" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                CONCEPT {concept.id}
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
              {concept.title.toUpperCase()}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-8 font-medium tracking-wider" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              {concept.subtitle}
            </p>
            
            {/* Theme & Cuisine Info */}
            <div className="max-w-3xl mx-auto space-y-3 mb-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-amber-400/60 mb-1 font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Cuisine
                </p>
                <p className="text-amber-200/80 text-base italic" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {concept.cuisine}
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-amber-400/60 mb-1 font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Theme
                </p>
                <p className="text-amber-200/70 text-sm leading-relaxed italic" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {concept.theme}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-amber-300">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50"></div>
              <p className="text-sm uppercase tracking-widest font-medium" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Menu</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50"></div>
            </div>
          </motion.div>
        </div>
      </motion.header>

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

        {/* Footer Note */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-stone-800/30 rounded-2xl p-8 border border-stone-700/40">
            <p className="text-stone-200 text-lg mb-2 font-semibold tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              ✨ Each dish tells a story, each flavor holds a memory ✨
            </p>
            <p className="text-stone-300/70 text-sm tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Concept {concept.id} — {concept.title}
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
    </div>
  );
}

