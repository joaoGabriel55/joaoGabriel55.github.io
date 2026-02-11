<script lang="ts">
  import type { BlogPost } from "../../lib/blog";
  import { formatDate, getReadingTime } from "../../lib/blog";
  import { closePost } from "../../lib/stores/blogStore";

  export let post: BlogPost;

  $: readingTime = getReadingTime(post.content);

  function handleBack() {
    closePost();
  }
</script>

<article class="py-24 md:py-32">
  <div class="section-container max-w-3xl">
    <!-- Back Button -->
    <button
      on:click={handleBack}
      class="inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 mb-12 group"
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
      <div class="flex items-center gap-4 mb-6">
        <time class="text-sm text-neutral-500 tracking-wide">
          {formatDate(post.date)}
        </time>
        <span class="text-neutral-700">·</span>
        <span class="text-sm text-neutral-500 tracking-wide">
          {readingTime} min read
        </span>
      </div>

      <!-- Title -->
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-6"
      >
        {post.title}
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
        {post.description}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-8">
        {#each post.tags as tag}
          <span
            class="px-3 py-1 text-xs tracking-wide text-neutral-500 border border-neutral-800 rounded-full"
          >
            #{tag}
          </span>
        {/each}
      </div>
    </header>

    <!-- Divider -->
    <div class="w-full h-px bg-neutral-800 mb-12 md:mb-16"></div>

    <!-- Article Content -->
    <div class="prose">
      {@html post.htmlContent}
    </div>

    <!-- Footer -->
    <footer class="mt-16 md:mt-20 pt-12 border-t border-neutral-800">
      <button
        on:click={handleBack}
        class="inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
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
    color: #d4d4d4;
    font-weight: 300;
    line-height: 1.625;
  }

  .prose :global(h1) {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: white;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
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
    color: white;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
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
    color: white;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
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
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
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
    color: #d4d4d4;
  }

  @media (min-width: 768px) {
    .prose :global(p) {
      font-size: 1.125rem;
    }
  }

  .prose :global(a) {
    color: white;
    border-bottom: 1px solid #525252;
    transition: border-color 0.3s;
  }

  .prose :global(a:hover) {
    border-color: white;
  }

  .prose :global(strong) {
    font-weight: 500;
    color: white;
  }

  .prose :global(em) {
    font-style: italic;
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
    color: #d4d4d4;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    .prose :global(li) {
      font-size: 1.125rem;
    }
  }

  .prose :global(blockquote) {
    border-left: 2px solid #404040;
    padding-left: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #a3a3a3;
  }

  .prose :global(code) {
    padding: 0.25rem 0.5rem;
    background-color: #262626;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: #e5e5e5;
  }

  .prose :global(pre) {
    padding: 1rem;
    background-color: #171717;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    border: 1px solid #262626;
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
    background-color: #171717;
    border: 1px solid #262626;
    color: white;
    font-weight: 500;
  }

  .prose :global(td) {
    padding: 0.75rem;
    border: 1px solid #262626;
    color: #d4d4d4;
  }
</style>
