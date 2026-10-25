"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function LamisaHeader() {
  return (
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
            <Link href="/lamisa">
              <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 tracking-tight leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
                LAMISA
              </h1>
            </Link>
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
  );
}
