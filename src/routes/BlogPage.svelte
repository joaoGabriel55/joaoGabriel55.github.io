<script lang="ts">
  import { onMount } from "svelte";
  import { getAllPosts, getPostBySlug, type BlogPost } from "../lib/blog";
  import { currentPost, viewingPost } from "../lib/stores/blogStore";
  import BlogCard from "../components/Blog/+BlogCard.svelte";
  import BlogPostView from "../components/Blog/+BlogPost.svelte";
  import { link } from "svelte-spa-router";

  export let params: { slug?: string } = {};

  let posts: BlogPost[] = [];

  onMount(() => {
    posts = getAllPosts();
  });

  $: if (params.slug) {
    const post = getPostBySlug(params.slug);
    if (post) {
      currentPost.set(post);
      viewingPost.set(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } else {
    currentPost.set(null);
    viewingPost.set(false);
  }
</script>

{#if $viewingPost && $currentPost}
  <BlogPostView post={$currentPost} />
{:else}
  <section class="py-24 md:py-32">
    <div class="section-container">
      <!-- Back to Home -->
      <a
        href="/"
        use:link
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
        Back to Home
      </a>

      <!-- Section Header -->
      <header class="mb-16 md:mb-20">
        <span
          class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block"
        >
          Thoughts & Ideas
        </span>
        <h1 class="heading-primary">Blog</h1>
        <p class="text-body mt-4 max-w-2xl">
          Writing about software development, technology, and lessons learned
          along the way.
        </p>
      </header>

      <!-- All Blog Posts -->
      {#if posts.length > 0}
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          {#each posts as post}
            <BlogCard {post} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <p class="text-neutral-500">No blog posts yet. Check back soon!</p>
        </div>
      {/if}
    </div>
  </section>
{/if}
