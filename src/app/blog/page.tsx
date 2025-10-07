import { blogPosts, getFeaturedPosts } from "@/data/blog-posts";
import BlogPageClient from "./blog-page-client";

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts[0]; // Get the first featured post
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <BlogPageClient 
      featuredPost={featuredPost}
      regularPosts={regularPosts}
    />
  );
}
