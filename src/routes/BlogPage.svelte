<script lang="ts">
  import { getAllPosts, getPostBySlug, type BlogPost } from "../lib/blog";
  import { currentPost, viewingPost } from "../lib/stores/blogStore";
  import { announceRoute, scrollToTop } from "../lib/route";
  import PostRow from "../components/Blog/+PostRow.svelte";
  import SectionHead from "../components/Section/+SectionHead.svelte";
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
      announceRoute("Writing");
    }
  }
</script>

{#if $viewingPost && $currentPost}
  {#key $currentPost.slug}
    <BlogPostView post={$currentPost} />
  {/key}
{:else}
  <section class="pt-28 md:pt-36 pb-24 md:pb-32">
    <div class="container-wide">
      <a href="/" use:link class="cta-quiet hit-area caps mb-8 md:mb-10">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Home
      </a>

      {#if notFound}
        <SectionHead id="blog" level={1} title="Post not found">
          There's no post at this address. It may have been renamed. Every published post is listed below.
        </SectionHead>
      {:else}
        <SectionHead id="blog" level={1} title="Writing">
          Long-form posts on machine learning and LLMs in Ruby and TypeScript, with code you can run.
        </SectionHead>
      {/if}

      {#if posts.length > 0}
        <ul class="-mt-10 md:-mt-14">
          {#each posts as post, index (post.slug)}
            <PostRow {post} delay={index * 90} headingLevel={2} showTags />
          {/each}
        </ul>
      {:else}
        <p class="text-quiet py-16">No posts yet.</p>
      {/if}
    </div>
  </section>
{/if}
