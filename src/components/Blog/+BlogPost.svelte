<script lang="ts">
  import type { BlogPost } from "../../lib/blog";
  import { formatDate, getReadingTime } from "../../lib/blog";
  import { link } from "svelte-spa-router";

  export let post: BlogPost;

  $: readingTime = getReadingTime(post.content);
</script>

<article class="py-24 md:py-32">
  <div class="section-container max-w-3xl">
    <!-- Back Link -->
    <a
      href="/blog"
      use:link
      class="hit-area inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"
    >
      <svg
        class="w-4 h-4 transform motion-safe:group-hover:-translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
      Back to Blog
    </a>

    <!-- Article Header -->
    <header class="mb-12 md:mb-16">
      <!-- Meta Info -->
      <div class="mb-6 space-y-2">
        <div class="flex items-center gap-4">
          <time class="text-sm text-meta">
            {formatDate(post.date)}
          </time>
          <span class="text-neutral-400 dark:text-neutral-700" aria-hidden="true">·</span>
          <span class="text-sm text-meta">
            {readingTime} min read
          </span>
        </div>
        {#if post.updateDate}
          <p class="text-xs italic text-meta">
            Updated at {formatDate(post.updateDate)}
          </p>
        {/if}
      </div>

      <!-- Title -->
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"
      >
        {post.title}
      </h1>

      <!-- Description -->
      {#if post.description}
        <p class="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 font-light leading-relaxed">
          {post.description}
        </p>
      {/if}

      <!-- Tags -->
      {#if post.tags.length > 0}
        <ul class="flex flex-wrap gap-2 mt-8" aria-label="Tags">
          {#each post.tags as tag}
            <li
              class="px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-pencil-dark border border-neutral-300 dark:border-neutral-800 rounded-full"
            >
              #{tag}
            </li>
          {/each}
        </ul>
      {/if}
    </header>

    <!-- Divider -->
    <div class="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-12 md:mb-16"></div>

    <!-- Article Content -->
    <div class="prose">
      {@html post.htmlContent}
    </div>

    <!-- Footer -->
    <footer class="mt-16 md:mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
      <a
        href="/blog"
        use:link
        class="hit-area inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"
      >
        <svg
          class="w-4 h-4 transform motion-safe:group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Back to all posts
      </a>
    </footer>
  </div>
</article>

<style>
  /* Colors come from the paired role variables in app.css, so one rule
     serves both themes. */
  .prose {
    color: var(--text-prose);
    font-weight: 300;
    line-height: 1.625;
  }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4) {
    font-weight: 300;
    letter-spacing: -0.025em;
    color: var(--ink);
  }

  .prose :global(h1) {
    font-size: 1.875rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .prose :global(h2) {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .prose :global(h3) {
    font-size: 1.25rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  .prose :global(h4) {
    font-size: 1.125rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .prose :global(h1) {
      font-size: 2.25rem;
    }

    .prose :global(h2) {
      font-size: 1.875rem;
    }

    .prose :global(h3) {
      font-size: 1.5rem;
    }

    .prose :global(h4) {
      font-size: 1.25rem;
    }
  }

  .prose :global(p),
  .prose :global(li) {
    font-size: 1rem;
    line-height: 1.625;
  }

  .prose :global(p) {
    margin-bottom: 1.5rem;
  }

  .prose :global(li) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    .prose :global(p),
    .prose :global(li) {
      font-size: 1.125rem;
    }
  }

  .prose :global(a) {
    color: var(--ink);
    border-bottom: 1px solid var(--underline);
    transition: border-color 0.3s;
    overflow-wrap: anywhere;
  }

  .prose :global(a:hover) {
    border-color: var(--ink);
  }

  .prose :global(strong) {
    font-weight: 500;
    color: var(--ink);
  }

  .prose :global(em) {
    font-style: italic;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  .prose :global(ul) {
    list-style-type: disc;
  }

  .prose :global(ol) {
    list-style-type: decimal;
  }

  .prose :global(blockquote) {
    border-left: 2px solid var(--rule);
    padding-left: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: var(--text-quiet);
  }

  .prose :global(code) {
    padding: 0.25rem 0.5rem;
    background-color: var(--code-bg);
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: var(--ink);
  }

  .prose :global(pre) {
    position: relative;
    padding: 1rem;
    background-color: var(--pre-bg);
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    border: 1px solid var(--line);
  }

  @media (min-width: 768px) {
    .prose :global(pre) {
      padding: 1.5rem;
    }
  }

  .prose :global(pre) :global(code) {
    padding: 0;
    background-color: transparent;
    font-size: 0.875rem;
    line-height: 1.625;
    color: var(--code-text);
  }

  /* Language label: the eyebrow treatment, pinned while the block scrolls. */
  .prose :global(pre[data-lang])::before {
    content: attr(data-lang);
    position: sticky;
    left: 0;
    display: block;
    margin-bottom: 0.75rem;
    font-family: inherit;
    font-size: 0.6875rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--code-comment);
  }

  /* Syntax tokens (highlight.js scopes). Colors are paired per theme in
     app.css; this is the one place the system allows hue in the UI. */
  .prose :global(.hljs-keyword),
  .prose :global(.hljs-selector-tag),
  .prose :global(.hljs-meta .hljs-keyword),
  .prose :global(.hljs-doctag) {
    color: var(--code-keyword);
  }

  .prose :global(.hljs-string),
  .prose :global(.hljs-regexp),
  .prose :global(.hljs-template-tag),
  .prose :global(.hljs-addition) {
    color: var(--code-string);
  }

  .prose :global(.hljs-number),
  .prose :global(.hljs-literal) {
    color: var(--code-number);
  }

  .prose :global(.hljs-title),
  .prose :global(.hljs-section),
  .prose :global(.hljs-attr),
  .prose :global(.hljs-property) {
    color: var(--code-title);
  }

  .prose :global(.hljs-type),
  .prose :global(.hljs-built_in),
  .prose :global(.hljs-title.class_),
  .prose :global(.hljs-selector-class) {
    color: var(--code-type);
  }

  .prose :global(.hljs-symbol),
  .prose :global(.hljs-variable),
  .prose :global(.hljs-template-variable),
  .prose :global(.hljs-subst),
  .prose :global(.hljs-meta) {
    color: var(--code-symbol);
  }

  .prose :global(.hljs-comment),
  .prose :global(.hljs-quote),
  .prose :global(.hljs-deletion) {
    color: var(--code-comment);
    font-style: italic;
  }

  .prose :global(.hljs-params),
  .prose :global(.hljs-punctuation),
  .prose :global(.hljs-operator) {
    color: var(--code-text);
  }

  .prose :global(img) {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .prose :global(hr) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-color: var(--line);
  }

  .prose :global(table) {
    width: 100%;
    margin-bottom: 1.5rem;
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  .prose :global(th),
  .prose :global(td) {
    padding: 0.75rem;
    border: 1px solid var(--line);
    overflow-wrap: anywhere;
  }

  .prose :global(th) {
    text-align: left;
    background-color: var(--pre-bg);
    color: var(--ink);
    font-weight: 500;
  }
</style>
