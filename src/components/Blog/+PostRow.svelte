<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { BlogPost } from "../../lib/blog";
  import { getReadingTime } from "../../lib/blog";
  import { getTalks } from "../../lib/talks";
  import { reveal } from "../../lib/motion";

  export let post: BlogPost;
  export let delay = 0;
  export let headingLevel: 2 | 3 = 3;
  export let showTags = false;

  $: readingTime = getReadingTime(post.content);
  $: companionTalk = getTalks().find((talk) => talk.relatedPostSlug === post.slug);
  $: date = new Date(post.date);
  $: day = date.toLocaleDateString("en", { day: "2-digit", timeZone: "UTC" });
  $: monthYear = date.toLocaleDateString("en", { month: "short", year: "numeric", timeZone: "UTC" });
</script>

<li class="border-b border-line" use:reveal={delay}>
  <a
    href="/blog/{post.slug}"
    use:link
    class="group relative grid grid-cols-[4.5rem_minmax(0,1fr)] md:grid-cols-[7rem_minmax(0,1fr)_9rem] gap-x-5 md:gap-x-8 gap-y-3 py-8 md:py-10"
  >
    <!-- Fixture date -->
    <time datetime={post.date} class="row-span-2 md:row-span-1 leading-none">
      <span class="kit block text-5xl md:text-6xl text-ink tabular-nums">{day}</span>
      <span class="caps block mt-2 text-quiet">{monthYear}</span>
    </time>

    <div class="min-w-0 space-y-3">
      <svelte:element
        this={headingLevel === 2 ? "h2" : "h3"}
        class="text-2xl md:text-[2rem] leading-[1.1] font-bold tracking-tight text-ink group-hover:text-turf-ink transition-colors duration-300"
        style="font-stretch: 85%"
      >
        {post.title}
      </svelte:element>
      {#if post.description}
        <p class="text-text leading-relaxed max-w-[62ch]">{post.description}</p>
      {/if}
      {#if companionTalk}
        <p class="caps text-turf-ink">Companion to my {companionTalk.event} talk</p>
      {/if}
      {#if showTags && post.tags.length > 0}
        <ul class="flex flex-wrap gap-x-4 gap-y-1 caps text-quiet" aria-label="Tags">
          {#each post.tags as tag}<li>#{tag}</li>{/each}
        </ul>
      {/if}
    </div>

    <div class="col-start-2 md:col-start-auto flex md:flex-col md:items-end justify-between md:justify-start gap-3">
      <span class="caps text-quiet">{readingTime} min read</span>
      <span
        class="grid place-items-center w-11 h-11 rounded-full border border-line-strong text-ink group-hover:bg-turf group-hover:border-turf group-hover:text-chalk transition-colors duration-300"
        aria-hidden="true"
      >
        <svg class="w-4 h-4 motion-safe:group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </div>
  </a>
</li>
