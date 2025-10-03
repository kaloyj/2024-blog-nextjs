import type { MDXComponents } from 'mdx/types';
import { motion } from 'motion/react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-white mb-6 mt-8"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }) => (
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-white mb-4 mt-8"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }) => (
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold text-white mb-4 mt-6"
      >
        {children}
      </motion.h3>
    ),
    p: ({ children }) => (
      <p className="text-dark-300 mb-4 leading-relaxed">{children}</p>
    ),
    code: ({ children }) => (
      <code className="bg-dark-800 text-primary-300 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-dark-800 border border-dark-700 rounded-lg p-4 overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-dark-300 mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-dark-300">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-dark-300 mb-4">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-primary-400 hover:text-primary-300 underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    hr: () => (
      <hr className="border-dark-700 my-8" />
    ),
    ...components,
  };
}
