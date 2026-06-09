export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reigniting-the-love-for-code",
    title: "Reigniting the Love for Code",
    excerpt: "finding the fire amidst the AI fatigue and burnout",
    date: "2026-06-09",
    readTime: "5 min read",
    category: "Tech",
    featured: false,
    image: "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_1200,h_630,g_auto:0.3,q_auto,f_auto/v1781011727/airport_jhb7ek.png",
    imageAlt: "A dreamy landscape representing new beginnings and aspirations"
  },
  {
    slug: "the-beginning-of-a-dream",
    title: "The Beginning of a Dream",
    excerpt: "How at 27, the resurgence of simply having dreams, and the idea of pursuing it is shaping up to reality.",
    date: "2025-10-07",
    readTime: "9 min read",
    category: "Life",
    featured: true,
    image: "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_1200,h_630,g_auto:0.3,q_auto,f_auto/v1759874093/IMG_3504_fnfb8s.jpg",
    imageAlt: "A dreamy landscape representing new beginnings and aspirations"
  }
];

// Helper functions for working with blog posts
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getLatestPost(): BlogPost | undefined {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}
