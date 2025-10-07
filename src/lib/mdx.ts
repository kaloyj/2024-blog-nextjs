import fs from 'fs';
import path from 'path';
import { BlogPost, getBlogPost } from '@/data/blog-posts';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function getBlogPostContent(slug: string): string {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading blog post content ${slug}:`, error);
    return '';
  }
}

export function getBlogPostWithContent(slug: string): BlogPostWithContent | undefined {
  const post = getBlogPost(slug);
  
  if (!post) {
    return undefined;
  }
  
  const content = getBlogPostContent(slug);
  
  return {
    ...post,
    content
  };
}
