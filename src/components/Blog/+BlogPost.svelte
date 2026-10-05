<script lang="ts">
  import { onMount } from "svelte";
  import type { BlogPost } from "../../lib/blog";
  import { formatDate, getAllPosts, getReadingTime } from "../../lib/blog";
  import { getTalks } from "../../lib/talks";
  import { goToSection } from "../../lib/contact";
  import { link } from "svelte-spa-router";
  import PostRow from "./+PostRow.svelte";

  export let post: BlogPost;

  $: readingTime = getReadingTime(post.content);
  $: companionTalk = getTalks().find((talk) => talk.relatedPostSlug === post.slug);
  $: morePosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);
  $: topics = post.tags.map((tag) => `#${tag}`).join(" · ");

  // Reading progress, drawn as a turf rule under the header.
  let progress = 0;
  let body: HTMLElement;

  function measure() {
    if (!body) return;
    const rect = body.getBoundingClientRect();
    const total = rect.height - window.innerHeight * 0.6;
    progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
  }

  onMount(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  });
</script>

<div
  class="fixed top-16 inset-x-0 z-40 h-[3px] bg-turf origin-left"
  style="transform: scaleX({progress})"
  aria-hidden="true"
></div>

<article class="pt-28 md:pt-36 pb-24 md:pb-32">
  <header class="container-wide">
    <a href="/blog" use:link class="cta-quiet hit-area caps mb-8 md:mb-10">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      All writing
    </a>

    <h1 class="title max-w-5xl text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.015em] text-ink">
      {post.title}
    </h1>

    {#if post.description}
      <p class="mt-6 max-w-3xl lede">{post.description}</p>
    {/if}

    <!-- Match facts: a ruled strip of the post's vital details. -->
    <dl class="facts mt-10 md:mt-12 grid grid-cols-2 md:flex border-y-2 border-ink">
      <div>
        <dt>Published</dt>
        <dd><time datetime={post.date}>{formatDate(post.date)}</time></dd>
      </div>
      <div>
        <dt>Reading time</dt>
        <dd>{readingTime} min</dd>
      </div>
      {#if post.updateDate}
        <div>
          <dt>Updated</dt>
          <dd><time datetime={post.updateDate}>{formatDate(post.updateDate)}</time></dd>
        </div>
      {/if}
      {#if post.tags.length > 0}
        <div class="col-span-2 md:flex-1">
          <dt>Topics</dt>
          <dd>{topics}</dd>
        </div>
      {/if}
      {#if companionTalk}
        <div class="col-span-2 md:col-span-1">
          <dt>Companion talk</dt>
          <dd>
            <button
              type="button"
              on:click={() => goToSection("talks")}
              class="underline decoration-[var(--turf-ink)] decoration-2 underline-offset-4 text-left"
            >
              {companionTalk.event}
            </button>
          </dd>
        </div>
      {/if}
    </dl>
  </header>

  <div class="container-wide mt-14 md:mt-16">
    <div class="prose" bind:this={body}>
      {@html post.htmlContent}
    </div>
  </div>

  {#if morePosts.length > 0}
    <aside class="container-wide mt-24 md:mt-32" aria-labelledby="more-heading">
      <h2 id="more-heading" class="h-section pb-8 border-b-2 border-ink">Keep reading</h2>
      <ul>
        {#each morePosts as other (other.slug)}
          <PostRow post={other} />
        {/each}
      </ul>
    </aside>
  {/if}
</article>

<style>
  .title {
    font-stretch: 78%;
    text-wrap: balance;
  }

  .facts > div {
    padding: 1rem 1.5rem 1rem 0;
  }

  @media (min-width: 768px) {
    .facts > div {
      padding: 1.25rem 2rem;
      border-left: 1px solid var(--line);
    }

    .facts > div:first-child {
      padding-left: 0;
      border-left: 0;
    }
  }

  .facts dt {
    font-stretch: 80%;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.75rem;
    color: var(--quiet);
  }

  .facts dd {
    margin-top: 0.25rem;
    font-weight: 600;
    color: var(--ink);
  }

  /* The reading column: calm, a real measure, the world only in headings,
     links, and code. Colors come from the paired role variables in app.css. */
  .prose {
    color: var(--text);
    font-size: 1.0625rem;
    line-height: 1.75;
    max-width: 68ch;
  }

  @media (min-width: 768px) {
    .prose {
      font-size: 1.1875rem;
    }
  }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4) {
    color: var(--ink);
    font-weight: 800;
    font-stretch: 80%;
    letter-spacing: -0.01em;
    line-height: 1.1;
    text-wrap: balance;
  }

  .prose :global(h1),
  .prose :global(h2) {
    font-size: 1.875rem;
    margin-top: 3.5rem;
    margin-bottom: 1.25rem;
  }

  .prose :global(h3) {
    font-size: 1.4rem;
    margin-top: 2.75rem;
    margin-bottom: 1rem;
  }

  .prose :global(h4) {
    font-size: 1.15rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    .prose :global(h1),
    .prose :global(h2) {
      font-size: 2.375rem;
    }

    .prose :global(h3) {
      font-size: 1.625rem;
    }
  }

  .prose :global(p) {
    margin-bottom: 1.5rem;
  }

  .prose :global(li) {
    margin-bottom: 0.5rem;
  }

  .prose :global(a) {
    color: var(--ink);
    text-decoration: underline;
    text-decoration-color: var(--turf-ink);
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    transition: text-decoration-thickness 0.3s;
    overflow-wrap: anywhere;
  }

  .prose :global(a:hover) {
    text-decoration-thickness: 3px;
  }

  .prose :global(strong) {
    font-weight: 700;
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

  .prose :global(li::marker) {
    color: var(--turf-ink);
    font-weight: 700;
  }

  .prose :global(blockquote) {
    border-left: 2px solid var(--line-strong);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: var(--quiet);
  }

  .prose :global(code) {
    padding: 0.15rem 0.4rem;
    background-color: var(--code-bg);
    border-radius: 3px;
    font-size: 0.875em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    color: var(--ink);
  }

  .prose :global(pre) {
    position: relative;
    padding: 1rem;
    background-color: var(--pre-bg);
    border: 1px solid var(--line);
    border-top: 2px solid var(--ink);
    border-radius: 0 0 6px 6px;
    overflow-x: auto;
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    .prose :global(pre) {
      padding: 1.25rem 1.5rem;
    }
  }

  .prose :global(pre) :global(code) {
    padding: 0;
    background-color: transparent;
    font-size: 0.875rem;
    line-height: 1.65;
    color: var(--code-text);
  }

  /* Language label, pinned while the block scrolls sideways. */
  .prose :global(pre[data-lang])::before {
    content: attr(data-lang);
    position: sticky;
    left: 0;
    display: block;
    margin-bottom: 0.75rem;
    font-family: "Archivo Variable", system-ui, sans-serif;
    font-stretch: 80%;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--turf-ink);
  }

  /* Syntax tokens (highlight.js scopes). Colors are paired per theme in
     app.css; hue stays inside code blocks. */
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
    border-radius: 6px;
    margin: 2rem 0;
  }

  .prose :global(hr) {
    margin: 3rem 0;
    border-color: var(--line);
  }

  .prose :global(table) {
    width: 100%;
    margin: 2rem 0;
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
    font-size: 0.9375rem;
  }

  .prose :global(th),
  .prose :global(td) {
    padding: 0.75rem;
    border-bottom: 1px solid var(--line);
    text-align: left;
    overflow-wrap: anywhere;
  }

  .prose :global(th) {
    color: var(--ink);
    font-weight: 700;
    font-stretch: 85%;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 0.8125rem;
    border-bottom: 2px solid var(--ink);
  }
</style>
