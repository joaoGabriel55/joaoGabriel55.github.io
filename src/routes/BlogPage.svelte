<script lang="ts">
  import { getAllPosts, getPostBySlug, type BlogPost } from "../lib/blog";
  import { currentPost, viewingPost } from "../lib/stores/blogStore";
  import { announceRoute, scrollToTop } from "../lib/route";
  import BlogCard from "../components/Blog/+BlogCard.svelte";
  import BlogPostView from "../components/Blog/+BlogPost.svelte";
  import { link } from "svelte-spa-router";

  export let params: { slug?: string } = {};

  const posts: BlogPost[] = getAllPosts();

  let notFound = false;

  $: route(params.slug);

  function route(slug: string | undefined) {
    if (slug) {
      const post = getPostBySlug(slug);
      notFound = !post;
      currentPost.set(post ?? null);
      viewingPost.set(!!post);
      scrollToTop();
      announceRoute(post ? post.title : "Post not found");
    } else {
      notFound = false;
      currentPost.set(null);
      viewingPost.set(false);
      announceRoute("Blog");
    }
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
        Back to Home
      </a>

      {#if notFound}
        <!-- Unknown slug -->
        <header class="mb-16 md:mb-20">
          <span class="eyebrow">Thoughts & Ideas</span>
          <h1 class="heading-primary">Post not found</h1>
          <p class="text-body mt-4 max-w-2xl">
            There's no post at this address. It may have been renamed. All
            published posts are listed below.
          </p>
        </header>
      {:else}
        <!-- Section Header -->
        <header class="mb-16 md:mb-20">
          <span class="eyebrow">Thoughts & Ideas</span>
          <h1 class="heading-primary">Blog</h1>
          <p class="text-body mt-4 max-w-2xl">
            Long-form posts on machine learning and LLMs in Ruby and TypeScript,
            with code you can run.
          </p>
        </header>
      {/if}

      <!-- All Blog Posts -->
      {#if posts.length > 0}
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          {#each posts as post (post.slug)}
            <BlogCard {post} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <p class="text-meta">No blog posts yet. Check back soon!</p>
        </div>
      {/if}
    </div>
  </section>
{/if}
