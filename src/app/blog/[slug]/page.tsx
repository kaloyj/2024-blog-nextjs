import { use } from 'react';
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogPost, blogPosts } from "@/data/blog-posts";
import { getBlogPostContent } from "@/lib/mdx";
import BlogPostClient from "./blog-post-client";

interface BlogPostPageProps { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Carlo Janea'],
      tags: [post.category],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  const content = getBlogPostContent(slug);

  return (
    <BlogPostClient 
      post={post}
      content={content}
      allPosts={blogPosts}
    />
  );
}
