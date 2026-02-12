<script lang="ts">
  import { onMount } from "svelte";
  import { getAllPosts, type BlogPost } from "../../lib/blog";
  import { link } from "svelte-spa-router";
  import BlogCard from "./+BlogCard.svelte";

  let recentPosts: BlogPost[] = [];

  onMount(() => {
    // Get only the 2 most recent posts
    recentPosts = getAllPosts().slice(0, 2);
  });
</script>

<section class="py-24 md:py-32 border-t border-neutral-900" id="blog">
  <div class="section-container">
    <!-- Section Header -->
    <header class="mb-16 md:mb-20">
      <span
        class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block"
      >
        Thoughts & Ideas
      </span>
      <h2 class="heading-primary">Blog</h2>
      <p class="text-body mt-4 max-w-2xl">
        Writing about software development, technology, and lessons learned
        along the way.
      </p>
    </header>

    <!-- Recent Blog Posts (max 2) -->
    {#if recentPosts.length > 0}
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        {#each recentPosts as post}
          <BlogCard {post} />
        {/each}
      </div>

      <!-- View All Posts Link -->
      <div class="mt-12 text-center">
        <a
          href="/blog"
          use:link
          class="inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
        >
          View all posts
          <svg
            class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    {:else}
      <div class="text-center py-16">
        <p class="text-neutral-500">No blog posts yet. Check back soon!</p>
      </div>
    {/if}
  </div>
</section>
