<script lang="ts">
  import { getAllPosts, type BlogPost } from "../../lib/blog";
  import { link } from "svelte-spa-router";
  import PostRow from "./+PostRow.svelte";
  import SectionHead from "../Section/+SectionHead.svelte";

  const posts: BlogPost[] = getAllPosts();
  const recentPosts = posts.slice(0, 3);
</script>

<section id="writing" aria-labelledby="writing-heading" class="py-24 md:py-32">
  <div class="container-wide">
    <SectionHead id="writing" title="Writing">
      Long-form posts on machine learning and LLMs in Ruby and TypeScript, with code you can run.
    </SectionHead>

    {#if recentPosts.length > 0}
      <ul class="-mt-10 md:-mt-14">
        {#each recentPosts as post, index (post.slug)}
          <PostRow {post} delay={index * 90} />
        {/each}
      </ul>

      <a href="/blog" use:link class="cta hit-area mt-10">
        All writing
        <svg class="run w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    {:else}
      <p class="text-quiet">No posts yet.</p>
    {/if}
  </div>
</section>
