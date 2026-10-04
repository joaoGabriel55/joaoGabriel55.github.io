<script lang="ts">
  import { tick } from "svelte";
  import { link } from "svelte-spa-router";
  import { getTalks, thumbnailUrl, embedUrl, type Talk } from "../../lib/talks";
  import { prefersReducedMotion } from "../../lib/route";

  const talks = getTalks();

  let activeIndex = 0;
  let playing = false;
  let thumbnailFailed = false;
  let player: HTMLDivElement;

  $: active = talks[activeIndex] as Talk | undefined;

  function meta(talk: Talk): string {
    return [
      talk.event,
      talk.city,
      talk.durationMinutes ? `${talk.durationMinutes} min` : undefined,
    ]
      .filter(Boolean)
      .join(" · ");
  }

  async function play() {
    playing = true;
    await tick();
    player.querySelector("iframe")?.focus();
  }

  async function select(index: number) {
    activeIndex = index;
    thumbnailFailed = false;
    player.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "center",
    });
    await play();
  }
</script>

{#if active}
  <section id="talks" class="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
    <div class="section-container">
      <!-- Section Header -->
      <header class="mb-16 md:mb-20">
        <span class="eyebrow">Speaking</span>
        <h2 class="heading-primary">Talks</h2>
        <p class="text-body mt-4 max-w-2xl">
          Conference talks on the ideas behind the work.
        </p>
      </header>

      <!-- Player: a grayscale poster until pressed, then the real embed. -->
      <div
        bind:this={player}
        class="relative aspect-video overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
      >
        {#if playing}
          {#key active.youtubeId}
            <iframe
              src={embedUrl(active)}
              title="Talk video: {active.title}"
              class="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          {/key}
        {:else}
          <button
            type="button"
            on:click={play}
            aria-label="Play: {active.title}"
            class="group absolute inset-0 w-full h-full"
          >
            {#if !thumbnailFailed}
              <img
                src={thumbnailUrl(active, "large")}
                alt=""
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
                on:error={() => (thumbnailFailed = true)}
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 opacity-80 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-surface/60 to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-500"
              ></div>
            {:else}
              <span
                class="absolute inset-x-6 top-6 text-left heading-secondary text-neutral-500"
              >
                {active.title}
              </span>
            {/if}

            <!-- Play mark: kept in a corner so it never covers the poster's own text. -->
            <span
              class="absolute left-3 bottom-3 md:left-6 md:bottom-6 flex items-center gap-2 md:gap-3 rounded-full bg-neutral-950/70 py-1 pl-1 pr-4 md:py-1.5 md:pl-1.5 md:pr-5 text-white group-hover:bg-neutral-950/85 group-focus-visible:bg-neutral-950/85 transition-colors duration-300"
              aria-hidden="true"
            >
              <span
                class="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/60 group-hover:border-white transition-colors duration-300"
              >
                <svg class="w-4 h-4 translate-x-px" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4.5v15l12-7.5-12-7.5z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-xs md:text-sm font-light tracking-wide">
                Play{active.durationMinutes ? ` · ${active.durationMinutes} min` : ""}
              </span>
            </span>
          </button>
        {/if}
      </div>

      <!-- Active talk details -->
      <div class="mt-8 md:mt-10 max-w-3xl space-y-4">
        <p class="text-xs uppercase text-meta">{meta(active)}</p>
        <h3 class="heading-secondary">{active.title}</h3>
        <p class="text-body">{active.summary}</p>

        <div class="flex flex-wrap gap-x-8 gap-y-2 pt-2">
          {#if active.relatedPostSlug}
            <a
              href="/blog/{active.relatedPostSlug}"
              use:link
              class="hit-area inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group/link"
            >
              <span
                class="w-8 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"
              ></span>
              Read the companion post
            </a>
          {/if}
          <a
            href="https://www.youtube.com/watch?v={active.youtubeId}"
            target="_blank"
            rel="noopener noreferrer"
            class="hit-area inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group/link"
          >
            <span
              class="w-8 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"
            ></span>
            Watch on YouTube
            <svg
              class="w-4 h-4 transform motion-safe:group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
      </div>

      <!-- Other talks: pick one to load it into the player above. -->
      {#if talks.length > 1}
        <ul class="mt-16 md:mt-20 border-t border-neutral-200 dark:border-neutral-800" aria-label="More talks">
          {#each talks as talk, index (talk.youtubeId)}
            <li class="border-b border-neutral-200 dark:border-neutral-800">
              <button
                type="button"
                on:click={() => select(index)}
                aria-current={index === activeIndex ? "true" : undefined}
                class="group w-full flex items-center gap-4 md:gap-6 py-5 text-left"
              >
                <span class="relative shrink-0 w-28 md:w-40 aspect-video overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={thumbnailUrl(talk, "small")}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="90"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-aria-[current=true]:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                </span>
                <span class="min-w-0 space-y-1">
                  <span class="block text-xs uppercase text-meta truncate">{meta(talk)}</span>
                  <span
                    class="block text-base md:text-lg font-light tracking-tight text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white group-aria-[current=true]:text-neutral-900 dark:group-aria-[current=true]:text-white transition-colors duration-300"
                  >
                    {talk.title}
                  </span>
                </span>
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>
{/if}
