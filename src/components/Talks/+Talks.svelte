<script lang="ts">
  import { tick } from "svelte";
  import { link } from "svelte-spa-router";
  import { getTalks, thumbnailUrl, embedUrl, type Talk } from "../../lib/talks";
  import { prefersReducedMotion } from "../../lib/route";
  import { reveal } from "../../lib/motion";
  import SectionHead from "../Section/+SectionHead.svelte";

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
  <section id="talks" aria-labelledby="talks-heading" class="py-24 md:py-32 bg-raised border-y border-line">
    <div class="container-wide">
      <SectionHead id="talks" title="Talks">Conference talks on the ideas behind the work.</SectionHead>

      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Player: the poster until pressed, then the real embed. -->
        <div
          bind:this={player}
          class="lg:col-span-8 relative aspect-video overflow-hidden rounded-md bg-lifted"
          use:reveal
          data-reveal="wipe"
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
            <button type="button" on:click={play} aria-label="Play: {active.title}" class="group absolute inset-0 w-full h-full">
              {#if !thumbnailFailed}
                <img
                  src={thumbnailUrl(active, "large")}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                  on:error={() => (thumbnailFailed = true)}
                  class="w-full h-full object-cover motion-safe:group-hover:scale-[1.03] transition-transform duration-1000 ease-out-expo"
                />
              {:else}
                <span class="absolute inset-x-6 top-6 text-left kit text-3xl text-quiet">{active.title}</span>
              {/if}

              <!-- Play mark: kept in a corner so it never covers the poster's own text. -->
              <span
                class="absolute left-3 bottom-3 md:left-5 md:bottom-5 flex items-center gap-3 rounded-sm bg-turf text-chalk h-11 md:h-12 pl-1.5 pr-4 md:pr-5 group-hover:bg-turf-deep group-focus-visible:bg-turf-deep transition-colors duration-300"
                aria-hidden="true"
              >
                <span class="grid place-items-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-chalk text-turf">
                  <svg class="w-3.5 h-3.5 translate-x-px" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l12-7.5z" /></svg>
                </span>
                <span class="caps text-sm">Play{active.durationMinutes ? ` · ${active.durationMinutes} min` : ""}</span>
              </span>
            </button>
          {/if}
        </div>

        <!-- Active talk details -->
        <div class="lg:col-span-4 space-y-5" use:reveal={120}>
          <h3 class="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-ink" style="font-stretch: 85%">
            {active.title}
          </h3>
          <p class="caps text-turf-ink">{meta(active)}</p>
          <p class="text-text leading-relaxed">{active.summary}</p>

          <div class="flex flex-col items-start gap-4 pt-2">
            {#if active.relatedPostSlug}
              <a href="/blog/{active.relatedPostSlug}" use:link class="cta hit-area">
                Read the companion post
                <svg class="run w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            {/if}
            <a
              href="https://www.youtube.com/watch?v={active.youtubeId}"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-quiet hit-area"
            >
              Watch on YouTube
              <svg class="out w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Other talks: pick one to load it into the player above. -->
      {#if talks.length > 1}
        <ul class="mt-16 md:mt-20 border-t border-line" aria-label="More talks">
          {#each talks as talk, index (talk.youtubeId)}
            <li class="border-b border-line">
              <button
                type="button"
                on:click={() => select(index)}
                aria-current={index === activeIndex ? "true" : undefined}
                class="group w-full flex items-center gap-4 md:gap-6 py-5 text-left"
              >
                <span class="relative shrink-0 w-28 md:w-40 aspect-video overflow-hidden rounded-sm bg-lifted">
                  <img src={thumbnailUrl(talk, "small")} alt="" loading="lazy" decoding="async" width="160" height="90" class="w-full h-full object-cover" />
                </span>
                <span class="min-w-0 space-y-1">
                  <span class="block caps text-quiet truncate">{meta(talk)}</span>
                  <span class="block text-lg font-semibold text-text group-hover:text-ink group-aria-[current=true]:text-ink transition-colors duration-300">
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
