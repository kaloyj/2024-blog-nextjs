"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllConceptIds, getConcept } from "@/data/lamisa-concepts";

const menuItems = {
  savoury: [
    {
      name: "Bao with Humba",
      description: "Soft, pillowy steamed buns filled with tender braised pork belly in a sweet-savory soy sauce, infused with star anise and fermented black beans"
    },
    {
      name: "Pan de Sal Breakfast Sandwich",
      description: "Traditional Filipino bread rolls with perfectly fried egg, crispy bacon, caramelized onions, and creamy avocado (2 pieces)"
    },
    {
      name: "Baconsilog Burrito",
      description: "Filipino breakfast wrapped up — fragrant garlic rice, crispy bacon, and sunny-side-up egg in a warm tortilla"
    },
    {
      name: "Tocinosilog Burrito",
      description: "Sweet cured pork tocino with garlic rice and egg, wrapped in a soft flour tortilla for the perfect handheld breakfast"
    },
    {
      name: "Pancit Canton Frittata",
      description: "Filipino egg noodles baked with farm-fresh eggs and seasonal vegetables, topped with crispy pork belly and tangy soy-calamansi sauce"
    },
    {
      name: "Tocino Breakfast Tacos",
      description: "Crispy corn shells filled with sweet Filipino tocino and fluffy scrambled eggs, finished with fresh herbs"
    }
  ],
  sweet: [
    {
      name: "Turon French Toast",
      description: "Classic French toast reimagined with caramelized bananas and sweet jackfruit, crowned with vanilla ice cream and a drizzle of condensed milk"
    },
    {
      name: "Buko Pandan Waffles",
      description: "Aromatic pandan-infused waffles topped with coconut cream, toasted coconut shreds, and a generous pour of condensed milk, garnished with fresh pandan leaves"
    },
    {
      name: "Halo-Halo Smoothie Bowl",
      description: "The iconic Filipino dessert transformed — a vibrant purple yam smoothie base topped with sweet beans, jellies, fresh fruit, leche flan, and crunchy pinipig"
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
      name: "Tea Selection",
      description: "Classic loose-leaf teas — English Breakfast, Earl Grey, Chamomile, and Jasmine Green Tea, served hot or iced"
    },
    {
      name: "Orange Juice",
      description: null
    },
    {
      name: "Calamansi Juice",
      description: "Refreshing Filipino citrus juice made from fresh calamansi limes, perfectly balanced between tart and sweet, served ice-cold"
    },
    {
      name: "Sikwati",
      description: "Traditional Filipino hot chocolate made from tablea (pure cacao tablets), rich and velvety with deep chocolate flavor, served warm and comforting"
    }
  ]
};

export default function LamisaMenu() {
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
            className="text-center"
          >
            <h1 className="text-7xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
              LAMISA
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-6 font-medium tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em' }}>
              Modern Filipino Brunch
            </p>
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-amber-300/80 text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="font-semibold text-amber-200">Lamisa</span> — meaning &quot;table&quot; in Cebuano, 
                where we gather to share food and stories. Also a playful question: 
                <span className="italic"> &quot;Lami, sa?&quot;</span> — &quot;Delicious, right?&quot;
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 text-amber-300">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50"></div>
              <p className="text-sm uppercase tracking-widest font-medium" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Barcelona</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50"></div>
            </div>
          </motion.div>
        </div>
      </motion.header>

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

      {/* Featured Concepts Section */}
      <section className="py-20 bg-gradient-to-b from-amber-950/50 to-orange-950/70">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black text-amber-200 mb-3 tracking-tight uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>
              Concepts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-amber-300/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Experimental menus exploring different themes, cuisines, and stories
            </p>
          </motion.div>

          <div className="grid gap-8">
            {getAllConceptIds()
              .sort((a, b) => parseInt(b) - parseInt(a)) // Sort descending so latest (001) appears first
              .map((conceptId) => getConcept(conceptId))
              .filter((concept): concept is NonNullable<typeof concept> => concept !== null)
              .map((concept, index) => (
                <motion.article
                  key={concept.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="bg-amber-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-800/40 hover:border-amber-600/60 transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-amber-800/50 text-amber-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        CONCEPT {concept.id}
                      </span>
                      {index === 0 && (
                        <span className="bg-orange-800/50 text-orange-200 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                          Latest
                        </span>
                      )}
                      {concept.date && (
                        <span className="bg-amber-700/50 text-amber-200 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                          {concept.date}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-4xl font-black text-amber-100 mb-4 group-hover:text-amber-200 transition-colors tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {concept.title}
                    </h3>
                    
                    <p className="text-amber-200/70 text-base mb-3 italic" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {concept.cuisine}
                    </p>
                    
                    <p className="text-amber-200/80 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {concept.theme}
                    </p>
                    
                    <Link 
                      href={`/lamisa/${concept.id}`}
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-amber-950 px-6 py-3 rounded-full font-bold transition-colors group-hover:gap-3 duration-300"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Explore Concept
                      <ArrowLeft size={18} className="rotate-180 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-amber-300/60 text-sm italic" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              More concepts coming soon...
            </p>
          </motion.div>
        </div>
      </section>

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
