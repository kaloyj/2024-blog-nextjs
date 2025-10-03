"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

// Mock blog posts data - in a real app, this would come from a CMS or file system
const blogPosts = [
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns for 2025",
    excerpt: "Exploring the latest React patterns and best practices that will shape frontend development in 2025.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React",
    featured: true
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips and Tricks for Better DX",
    excerpt: "Advanced TypeScript techniques to improve your developer experience and code quality.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "TypeScript",
    featured: false
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Guide",
    excerpt: "Complete guide to optimizing your Next.js applications for better performance and user experience.",
    date: "2025-01-05",
    readTime: "12 min read",
    category: "Next.js",
    featured: true
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-dark-950 via-primary-950 to-dark-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Thoughts on development, technology, and the ever-evolving world of frontend engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            </motion.div>
            
            <motion.article
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors group"
            >
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary-600 to-primary-800"></div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-dark-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-dark-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white">All Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-dark-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-dark-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-dark-400">
            © 2025 Carlo Janea. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
