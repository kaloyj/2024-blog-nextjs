"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Github, ExternalLink } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface BlogPostClientProps {
  post: BlogPost;
  content: string;
  allPosts: BlogPost[];
}

export default function BlogPostClient({ post, content, allPosts }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <motion.header
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-dark-300 mb-8 leading-loose">
            {post.excerpt}
          </p>
          
          {/* Article Hero Image */}
          <div className="mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-dark-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
          style={{
            '--tw-prose-body': '#cbd5e1',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-code': '#e2e8f0',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-quotes': '#94a3b8',
            '--tw-prose-quote-borders': '#475569',
            '--tw-prose-hr': '#475569',
            '--tw-prose-th-borders': '#475569',
            '--tw-prose-td-borders': '#334155',
          } as React.CSSProperties}
        >
          <div 
            dangerouslySetInnerHTML={{ 
              __html: content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1>${line.slice(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2>${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3>${line.slice(4)}</h3>`;
                  }
                  if (line.startsWith('```')) {
                    return line.includes('```jsx') || line.includes('```typescript') || line.includes('```javascript')
                      ? `<pre><code class="language-${line.slice(3)}">`
                      : line === '```' 
                      ? '</code></pre>'
                      : `<pre><code>`;
                  }
                  if (line.startsWith('*') && line.endsWith('*') && line.includes('[') && line.includes(']')) {
                    return `<p><em>${line.slice(1, -1)}</em></p>`;
                  }
                  if (line.trim() === '---') {
                    return '<hr />';
                  }
                  if (line.trim() === '') {
                    return '<br />';
                  }
                  return `<p style="line-height: 1.8;">${line}</p>`;
                })
                .join('')
            }} 
          />
        </motion.div>

        {/* Article Footer */}
        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-dark-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Enjoyed this article?</h3>
              <p className="text-dark-300">Share it with others or connect with me!</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/kaloyj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/carlo-janea-2880a2132/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.footer>
      </article>

      {/* Related Articles */}
      <section className="bg-dark-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">More Articles</h2>
            <p className="text-dark-300">Continue reading about frontend development and life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {allPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors group"
                >
                  <div className="h-48 relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-dark-300 mb-4 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                      Read Article
                      <ExternalLink size={14} />
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
