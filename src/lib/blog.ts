import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import plaintext from "highlight.js/lib/languages/plaintext";
import ruby from "highlight.js/lib/languages/ruby";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import yaml from "highlight.js/lib/languages/yaml";

// Only the languages the blog uses, to keep the bundle small. Each grammar
// brings its aliases (rb, ts, sh, js, yml, text). Add new ones here.
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("yaml", yaml);

// Unlabeled fences are prompts and terminal output in practice, so they stay
// plain rather than being guessed at by auto-detection.
const markdown = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updateDate?: string;
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
const blogFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Custom front matter parser (browser-compatible replacement for gray-matter)
function parseFrontMatter(rawContent: string): {
  data: Record<string, any>;
  content: string;
} {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = rawContent.match(frontMatterRegex);

  if (!match) {
    return { data: {}, content: rawContent };
  }

  const frontMatterBlock = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  // Parse YAML-like front matter
  const lines = frontMatterBlock.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Handle arrays (simple format: ["item1", "item2"])
    if (value.startsWith("[") && value.endsWith("]")) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent
        .split(",")
        .map((item) => item.trim())
        .map((item) => {
          if (
            (item.startsWith('"') && item.endsWith('"')) ||
            (item.startsWith("'") && item.endsWith("'"))
          ) {
            return item.slice(1, -1);
          }
          return item;
        })
        .filter((item) => item.length > 0);
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

function parseMarkdownFile(filename: string, rawContent: string): BlogPost {
  // Extract slug from filename (remove path and .md extension)
  const slug = filename.replace("/src/content/blog/", "").replace(".md", "");

  // Parse front matter and content using our custom parser
  const { data, content } = parseFrontMatter(rawContent);

  // Convert markdown to HTML
  const htmlContent = (markdown.parse(content) as string)
    // Post images sit below the fold; let the browser defer them.
    .replace(/<img /g, '<img loading="lazy" decoding="async" ')
    // Label each highlighted block with its language's display name.
    .replace(/<pre><code class="hljs language-([\w-]+)">/g, (match, lang: string) => {
      const name = hljs.getLanguage(lang)?.name;
      return name && lang !== "plaintext" && lang !== "text"
        ? `<pre data-lang="${name}">${match.slice(5)}`
        : match;
    });

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    updateDate: data.updateDate,
    description: data.description || "",
    tags: data.tags || [],
    content,
    htmlContent,
  };
}

// Posts are bundled at build time, so parse and sort them once.
let postsCache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (!postsCache) {
    postsCache = Object.entries(blogFiles)
      .map(([filename, content]) => parseMarkdownFile(filename, content as string))
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  return postsCache;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
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
  return new Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
