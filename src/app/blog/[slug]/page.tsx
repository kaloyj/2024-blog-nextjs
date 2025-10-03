"use client";

import { use } from 'react';
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

// Mock blog posts data - in a real app, this would come from a CMS or file system
const blogPosts = [
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns for 2025",
    excerpt: "Exploring the latest React patterns and best practices that will shape frontend development in 2025.",
    content: `
# Modern React Patterns for 2025

React continues to evolve, and with it, the patterns and practices that define modern frontend development. In this article, we'll explore the cutting-edge React patterns that are shaping the way we build applications in 2025.

## 1. Server Components Revolution

React Server Components have fundamentally changed how we think about rendering. By moving computation to the server, we can:

- Reduce bundle sizes significantly
- Improve initial page load times
- Access backend resources directly
- Enhance SEO and performance

\`\`\`jsx
// Server Component example
async function UserProfile({ userId }) {
  const user = await fetchUser(userId); // Direct database access
  
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <UserPosts userId={userId} />
    </div>
  );
}
\`\`\`

## 2. Concurrent Features

React 18's concurrent features enable better user experiences through:

### Suspense for Data Fetching

\`\`\`jsx
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserDashboard />
    </Suspense>
  );
}
\`\`\`

### Transitions for Better UX

\`\`\`jsx
function SearchResults() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (value) => {
    setQuery(value);
    startTransition(() => {
      // Non-urgent update
      updateSearchResults(value);
    });
  };
  
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} />
      {isPending && <Spinner />}
      <Results query={query} />
    </div>
  );
}
\`\`\`

## 3. Advanced State Management

Modern React applications benefit from sophisticated state management patterns:

### Zustand for Simple State

\`\`\`jsx
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

### React Query for Server State

\`\`\`jsx
function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  
  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;
  
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 4. Performance Optimization Patterns

### Virtualization for Large Lists

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}
\`\`\`

### Smart Memoization

\`\`\`jsx
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveCalculation(item)
    }));
  }, [data]);
  
  const handleUpdate = useCallback((id, value) => {
    onUpdate(id, value);
  }, [onUpdate]);
  
  return (
    <div>
      {processedData.map(item => (
        <Item 
          key={item.id} 
          data={item} 
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
});
\`\`\`

## 5. Type-Safe Patterns with TypeScript

### Discriminated Unions for State

\`\`\`typescript
type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function useAsyncData<T>(fetcher: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });
  
  useEffect(() => {
    setState({ status: 'loading' });
    fetcher()
      .then(data => setState({ status: 'success', data }))
      .catch(error => setState({ status: 'error', error: error.message }));
  }, [fetcher]);
  
  return state;
}
\`\`\`

### Generic Components

\`\`\`typescript
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

function Table<T>({ data, columns, onRowClick }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} onClick={() => onRowClick?.(item)}>
            {columns.map(col => (
              <td key={col.key}>{col.render(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
\`\`\`

## Conclusion

These modern React patterns represent the evolution of frontend development. By embracing Server Components, concurrent features, advanced state management, performance optimization, and type safety, we can build applications that are not only more performant but also more maintainable and developer-friendly.

The key is to adopt these patterns gradually and understand when each one provides the most value. As React continues to evolve, staying current with these patterns will ensure your applications remain modern and efficient.

---

*What patterns are you most excited about? Let me know on [Twitter](https://twitter.com) or [LinkedIn](https://linkedin.com)!*
    `,
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React",
    featured: true
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips and Tricks for Better DX",
    excerpt: "Advanced TypeScript techniques to improve your developer experience and code quality.",
    content: `
# TypeScript Tips and Tricks for Better DX

TypeScript has become an essential tool for modern web development. Here are some advanced tips and tricks to enhance your developer experience.

## 1. Utility Types

TypeScript provides powerful utility types that can save you time and improve type safety:

\`\`\`typescript
// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name' | 'email'>;

// Omit properties
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;
\`\`\`

## 2. Template Literal Types

Create dynamic types based on string patterns:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
type Handler<T extends EventName> = (event: Event) => void;

// Usage
const onClick: Handler<'onClick'> = (event) => {
  // Type-safe event handling
};
\`\`\`

## 3. Conditional Types

Build complex type logic:

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : T extends number 
  ? { count: T } 
  : { data: T };

// Usage
type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { count: number }
type ObjectResponse = ApiResponse<User>; // { data: User }
\`\`\`

These patterns will significantly improve your TypeScript development experience!
    `,
    date: "2025-01-10",
    readTime: "6 min read",
    category: "TypeScript",
    featured: false
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Guide",
    excerpt: "Complete guide to optimizing your Next.js applications for better performance and user experience.",
    content: `
# Next.js Performance Optimization Guide

Performance is crucial for user experience and SEO. Here's how to optimize your Next.js applications.

## 1. Image Optimization

Use Next.js Image component for automatic optimization:

\`\`\`jsx
import Image from 'next/image';

function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}
\`\`\`

## 2. Code Splitting

Implement dynamic imports for better bundle splitting:

\`\`\`jsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
\`\`\`

## 3. Static Generation

Leverage ISR for the best of both worlds:

\`\`\`jsx
export async function getStaticProps() {
  const data = await fetchData();
  
  return {
    props: { data },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
\`\`\`

These optimizations will significantly improve your application's performance!
    `,
    date: "2025-01-05",
    readTime: "12 min read",
    category: "Next.js",
    featured: true
  }
];

interface BlogPostPageProps { params: Promise<{ slug: string }> }

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

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
          
          <p className="text-xl text-dark-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
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
              __html: post.content
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
                  return `<p>${line}</p>`;
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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
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
            <p className="text-dark-300">Continue reading about frontend development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
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
                  <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800"></div>
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
