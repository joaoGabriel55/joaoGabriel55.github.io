<script lang="ts">
  import type { BlogPost } from "../../lib/blog";
  import { formatDate, getReadingTime } from "../../lib/blog";

  export let post: BlogPost;

  $: readingTime = getReadingTime(post.content);

  function goToPost() {
    window.location.href = `./blog.html#blog/${post.slug}`;
  }
</script>

<button class="group cursor-pointer w-full text-left" on:click={goToPost}>
  <div
    class="p-6 md:p-8 bg-surface-light rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:bg-surface-lighter"
  >
    <!-- Date and Reading Time -->
    <div class="flex items-center gap-4 mb-4">
      <time class="text-xs text-neutral-500 tracking-wide uppercase">
        {formatDate(post.date)}
      </time>
      <span class="text-neutral-700">·</span>
      <span class="text-xs text-neutral-500 tracking-wide">
        {readingTime} min read
      </span>
    </div>

    <!-- Title -->
    <h3
      class="heading-secondary mb-3 group-hover:text-white transition-colors duration-300"
    >
      {post.title}
    </h3>

    <!-- Description -->
    <p class="text-body text-sm mb-5 line-clamp-2">
      {post.description}
    </p>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-5">
      {#each post.tags.slice(0, 3) as tag}
        <span
          class="px-2 py-1 text-xs tracking-wide text-neutral-500 bg-neutral-900 rounded"
        >
          #{tag}
        </span>
      {/each}
    </div>

    <!-- Read More Link -->
    <div
      class="inline-flex items-center gap-3 text-sm text-neutral-400 group-hover:text-white transition-colors duration-300"
    >
      <span
        class="w-6 h-px bg-neutral-700 group-hover:w-10 group-hover:bg-white transition-all duration-300"
      ></span>
      Read Article
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
    </div>
  </div>
</button>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
