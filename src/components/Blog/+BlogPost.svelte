<script lang="ts">
  import type { BlogPost } from "../../lib/blog";
  import { formatDate, getReadingTime } from "../../lib/blog";
  import { closePost } from "../../lib/stores/blogStore";
  import { push } from "svelte-spa-router";

  export let post: BlogPost;

  $: readingTime = getReadingTime(post.content);

  function handleBack() {
    closePost();
    push("/blog");
  }
</script>

<article class="py-24 md:py-32">
  <div class="section-container max-w-3xl">
    <!-- Back Button -->
    <button
      on:click={handleBack}
      class="inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"
    >
      <svg
        class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
      Back to Blog
    </button>

    <!-- Article Header -->
    <header class="mb-12 md:mb-16">
      <!-- Meta Info -->
      <div class="mb-6 space-y-2">
        <div class="flex items-center gap-4">
          <time class="text-sm text-neutral-500 tracking-wide">
            {formatDate(post.date)}
          </time>
          <span class="text-neutral-400 dark:text-neutral-700">·</span>
          <span class="text-sm text-neutral-500 tracking-wide">
            {readingTime} min read
          </span>
        </div>
        {#if post.updateDate}
          <p class="text-xs italic text-neutral-500 tracking-wide">
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
      <p class="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 font-light leading-relaxed">
        {post.description}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-8">
        {#each post.tags as tag}
          <span
            class="px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-full"
          >
            #{tag}
          </span>
        {/each}
      </div>
    </header>

    <!-- Divider -->
    <div class="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-12 md:mb-16"></div>

    <!-- Article Content -->
    <div class="prose">
      {@html post.htmlContent}
    </div>

    <!-- Footer -->
    <footer class="mt-16 md:mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
      <button
        on:click={handleBack}
        class="inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"
      >
        <svg
          class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Back to all posts
      </button>
    </footer>
  </div>
</article>

<style>
  .prose {
    color: #404040;
    font-weight: 300;
    line-height: 1.625;
  }

  :global(html.dark) .prose {
    color: #d4d4d4;
  }

  .prose :global(h1) {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: #171717;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  :global(html.dark) .prose :global(h1) {
    color: white;
  }

  @media (min-width: 768px) {
    .prose :global(h1) {
      font-size: 2.25rem;
    }
  }

  .prose :global(h2) {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: #171717;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  :global(html.dark) .prose :global(h2) {
    color: white;
  }

  @media (min-width: 768px) {
    .prose :global(h2) {
      font-size: 1.875rem;
    }
  }

  .prose :global(h3) {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: #171717;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  :global(html.dark) .prose :global(h3) {
    color: white;
  }

  @media (min-width: 768px) {
    .prose :global(h3) {
      font-size: 1.5rem;
    }
  }

  .prose :global(h4) {
    font-size: 1.125rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: #171717;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  :global(html.dark) .prose :global(h4) {
    color: white;
  }

  @media (min-width: 768px) {
    .prose :global(h4) {
      font-size: 1.25rem;
    }
  }

  .prose :global(p) {
    font-size: 1rem;
    line-height: 1.625;
    margin-bottom: 1.5rem;
    color: #404040;
  }

  :global(html.dark) .prose :global(p) {
    color: #d4d4d4;
  }

  @media (min-width: 768px) {
    .prose :global(p) {
      font-size: 1.125rem;
    }
  }

  .prose :global(a) {
    color: #171717;
    border-bottom: 1px solid #a3a3a3;
    transition: border-color 0.3s;
  }

  :global(html.dark) .prose :global(a) {
    color: white;
    border-bottom-color: #525252;
  }

  .prose :global(a:hover) {
    border-color: #171717;
  }

  :global(html.dark) .prose :global(a:hover) {
    border-color: white;
  }

  .prose :global(strong) {
    font-weight: 500;
    color: #171717;
  }

  :global(html.dark) .prose :global(strong) {
    color: white;
  }

  .prose :global(em) {
    font-style: italic;
    color: #404040;
  }

  :global(html.dark) .prose :global(em) {
    color: #e5e5e5;
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

  .prose :global(li) {
    font-size: 1rem;
    color: #404040;
    margin-bottom: 0.5rem;
  }

  :global(html.dark) .prose :global(li) {
    color: #d4d4d4;
  }

  @media (min-width: 768px) {
    .prose :global(li) {
      font-size: 1.125rem;
    }
  }

  .prose :global(blockquote) {
    border-left: 2px solid #d4d4d4;
    padding-left: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #525252;
  }

  :global(html.dark) .prose :global(blockquote) {
    border-left-color: #404040;
    color: #a3a3a3;
  }

  .prose :global(code) {
    padding: 0.25rem 0.5rem;
    background-color: #f5f5f5;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: #171717;
  }

  :global(html.dark) .prose :global(code) {
    background-color: #262626;
    color: #e5e5e5;
  }

  .prose :global(pre) {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    border: 1px solid #e5e5e5;
  }

  :global(html.dark) .prose :global(pre) {
    background-color: #171717;
    border-color: #262626;
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
  }

  .prose :global(img) {
    width: 100%;
    border-radius: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .prose :global(hr) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-color: #e5e5e5;
  }

  :global(html.dark) .prose :global(hr) {
    border-color: #262626;
  }

  .prose :global(table) {
    width: 100%;
    margin-bottom: 1.5rem;
    border-collapse: collapse;
  }

  .prose :global(th) {
    text-align: left;
    padding: 0.75rem;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    color: #171717;
    font-weight: 500;
  }

  :global(html.dark) .prose :global(th) {
    background-color: #171717;
    border-color: #262626;
    color: white;
  }

  .prose :global(td) {
    padding: 0.75rem;
    border: 1px solid #e5e5e5;
    color: #404040;
  }

  :global(html.dark) .prose :global(td) {
    border-color: #262626;
    color: #d4d4d4;
  }
</style>
