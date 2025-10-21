"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function JournalClient() {
  const [content, setContent] = useState<string>("");
  const [expandedEntries, setExpandedEntries] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Fetch the MDX content
    fetch("/api/journal")
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        // Auto-expand the latest entry (first one)
        const entryCount = (text.match(/^# /gm) || []).length;
        if (entryCount > 0) {
          setExpandedEntries(new Set([0]));
        }
      })
      .catch((err) => console.error("Failed to load journal:", err));
  }, []);

  const toggleEntry = (entryIndex: number) => {
    setExpandedEntries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(entryIndex)) {
        newSet.delete(entryIndex);
      } else {
        newSet.add(entryIndex);
      }
      return newSet;
    });
  };

  // Parse entries and render with dropdown functionality
  const renderContent = (mdx: string) => {
    const lines = mdx.split("\n");
    const entries: { title: string; content: string[]; index: number }[] = [];
    let currentEntry: { title: string; content: string[]; index: number } | null = null;
    let entryIndex = 0;

    lines.forEach((line) => {
      if (line.startsWith("# ")) {
        // Save previous entry if exists
        if (currentEntry) {
          entries.push(currentEntry);
        }
        // Start new entry
        currentEntry = {
          title: line.substring(2),
          content: [],
          index: entryIndex++
        };
      } else if (currentEntry) {
        currentEntry.content.push(line);
      }
    });

    // Add the last entry
    if (currentEntry) {
      entries.push(currentEntry);
    }

    return entries.map((entry, entryIndex) => {
      const isExpanded = expandedEntries.has(entryIndex);
      
      return (
        <div key={entryIndex} className="mb-8 border border-slate-700/30 rounded-lg overflow-hidden">
          {/* Entry Header - Always Visible */}
          <button
            onClick={() => toggleEntry(entryIndex)}
            className="w-full px-6 py-4 bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200 flex items-center justify-between group"
          >
            <h1 
              className="text-base md:text-lg font-bold text-slate-100 text-left"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {entry.title}
            </h1>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-slate-400 group-hover:text-slate-200"
            >
              <ChevronDownIcon className="w-6 h-6" />
            </motion.div>
          </button>

          {/* Entry Content - Collapsible */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-slate-900/30">
                  {entry.content.map((line, lineIndex) => {
                    if (line.startsWith("## ")) {
                      return (
                        <h2 
                          key={lineIndex} 
                          className="text-xl md:text-2xl font-bold text-slate-200 mb-2 mt-4"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {line.substring(3)}
                        </h2>
                      );
                    } else if (line.startsWith("### ")) {
                      return (
                        <h3 
                          key={lineIndex} 
                          className="text-lg md:text-xl font-semibold text-slate-300 mb-2 mt-3"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {line.substring(4)}
                        </h3>
                      );
                    } else if (line.trim() === "") {
                      return <div key={lineIndex} className="h-4"></div>;
                    } else {
                      return (
                        <p 
                          key={lineIndex} 
                          className="text-slate-300 mb-3 leading-loose"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {line}
                        </p>
                      );
                    }
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
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

