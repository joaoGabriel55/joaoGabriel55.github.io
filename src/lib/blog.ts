import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  htmlContent: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

// Import all markdown files from the blog directory
const blogFiles = import.meta.glob('/src/content/blog/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

// Custom front matter parser (browser-compatible replacement for gray-matter)
function parseFrontMatter(rawContent: string): { data: Record<string, any>; content: string } {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = rawContent.match(frontMatterRegex);

  if (!match) {
    return { data: {}, content: rawContent };
  }

  const frontMatterBlock = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  // Parse YAML-like front matter
  const lines = frontMatterBlock.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Handle arrays (simple format: ["item1", "item2"])
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent
        .split(',')
        .map(item => item.trim())
        .map(item => {
          if ((item.startsWith('"') && item.endsWith('"')) || 
              (item.startsWith("'") && item.endsWith("'"))) {
            return item.slice(1, -1);
          }
          return item;
        })
        .filter(item => item.length > 0);
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

function parseMarkdownFile(filename: string, rawContent: string): BlogPost {
  // Extract slug from filename (remove path and .md extension)
  const slug = filename
    .replace('/src/content/blog/', '')
    .replace('.md', '');

  // Parse front matter and content using our custom parser
  const { data, content } = parseFrontMatter(rawContent);

  // Convert markdown to HTML
  const htmlContent = marked(content) as string;

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString().split('T')[0],
    description: data.description || '',
    tags: data.tags || [],
    content,
    htmlContent,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogFiles).map(([filename, content]) => {
    return parseMarkdownFile(filename, content as string);
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ slug, title, date, description, tags }) => ({
    slug,
    title,
    date,
    description,
    tags,
  }));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}