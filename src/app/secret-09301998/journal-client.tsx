"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function JournalClient() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Fetch the MDX content
    fetch("/api/journal")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load journal:", err));
  }, []);

  // Simple MDX-like parsing for display
  const renderContent = (mdx: string) => {
    const lines = mdx.split("\n");
    const elements: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        elements.push(
          <h1 
            key={index} 
            className="text-3xl md:text-4xl font-bold text-slate-100 mb-2 mt-8 first:mt-0"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 
            key={index} 
            className="text-2xl md:text-3xl font-bold text-slate-200 mb-2 mt-6"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 
            key={index} 
            className="text-xl md:text-2xl font-semibold text-slate-300 mb-2 mt-4"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {line.substring(4)}
          </h3>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-4"></div>);
      } else {
        elements.push(
          <p 
            key={index} 
            className="text-slate-300 mb-3 leading-loose"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {line}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl"></div>

      <main className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 pb-8 border-b border-slate-700/50">
            <h1 
              className="text-4xl md:text-5xl font-bold text-slate-100 mb-2"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Journal
            </h1>
            <p 
              className="text-slate-400 text-sm tracking-wide"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Personal thoughts and daily reflections
            </p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-slate max-w-none"
          >
            {content ? renderContent(content) : (
              <p className="text-slate-400 italic">Loading journal entries...</p>
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-slate-500 text-xs tracking-wider">
          ✦ ✦ ✦
        </p>
      </footer>
    </div>
  );
}

