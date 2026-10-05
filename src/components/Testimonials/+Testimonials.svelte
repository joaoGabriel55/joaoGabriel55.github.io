<script lang="ts">
  import { TESTIMONIALS, LINKEDIN_RECOMMENDATIONS_URL, type Testimonial } from "../../lib/testimonials";
  import { reveal } from "../../lib/motion";
  import SectionHead from "../Section/+SectionHead.svelte";

  // Which quotes are showing their original language.
  let showOriginal: Record<string, boolean> = {};

  function year(t: Testimonial) {
    return new Date(t.date).getFullYear();
  }
</script>

{#if TESTIMONIALS.length > 0}
  <section id="testimonials" aria-labelledby="testimonials-heading" class="py-24 md:py-32 bg-raised border-y border-line">
    <div class="container-wide">
      <SectionHead id="testimonials" title="What teammates say">
        Recommendations from classmates I built projects with, as posted on
        <a href={LINKEDIN_RECOMMENDATIONS_URL} target="_blank" rel="noopener noreferrer" class="cta">LinkedIn</a>.
      </SectionHead>

      <div class="grid md:grid-cols-2 gap-14 md:gap-10 lg:gap-16">
        {#each TESTIMONIALS as t, index (t.name)}
          {@const original = showOriginal[t.name] && t.original}
          <figure class="flex flex-col" use:reveal={index * 140}>
            <svg class="w-12 h-12 text-turf-ink" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
              <path d="M6 38V26.5C6 16 11.5 9.6 21 8l1.6 4.4C17 14 14.2 17.6 13.8 22H21v16H6Zm22 0V26.5C28 16 33.5 9.6 43 8l1.6 4.4C39 14 36.2 17.6 35.8 22H43v16H28Z" />
            </svg>
            <div class="mb-8">
            <blockquote class="mt-6" lang={original ? t.original?.lang : "en"}>
              <p class="text-xl md:text-2xl leading-snug font-medium text-ink" style="font-stretch: 92%">
                {original ? t.original?.quote : t.quote}
              </p>
            </blockquote>
            {#if t.original}
              <p class="mt-4 text-sm text-quiet">
                {original ? `Original, in ${t.original.languageName}.` : `Translated from ${t.original.languageName}.`}
                <button
                  type="button"
                  class="cta-quiet hit-area ml-1"
                  aria-pressed={!!showOriginal[t.name]}
                  on:click={() => (showOriginal = { ...showOriginal, [t.name]: !showOriginal[t.name] })}
                >
                  {original ? "Show translation" : "Show original"}
                </button>
              </p>
            {/if}
            </div>
            <figcaption class="mt-auto pt-6 flex items-center gap-4 border-t border-line">
              <span class="kit grid place-items-center w-12 h-12 rounded-full bg-turf text-chalk text-lg" aria-hidden="true">
                {t.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <span>
                <span class="block font-bold text-ink">{t.name}</span>
                <span class="block text-sm text-quiet">{t.title}</span>
                <span class="block caps text-xs text-quiet mt-1">{t.relationship} · {year(t)}</span>
              </span>
            </figcaption>
          </figure>
        {/each}
      </div>
    </div>
  </section>
{/if}
