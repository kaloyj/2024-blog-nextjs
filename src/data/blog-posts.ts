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
    slug: "the-beginning-of-a-dream",
    title: "The Beginning of a Dream",
    excerpt: "How at 27, the resurgence of simply having dreams, and the idea of pursuing it is taking shape.",
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
