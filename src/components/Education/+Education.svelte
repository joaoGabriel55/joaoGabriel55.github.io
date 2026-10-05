<script lang="ts">
  import { DEGREES } from "../../lib/education";
  import { reveal } from "../../lib/motion";
  import SectionHead from "../Section/+SectionHead.svelte";
</script>

<section id="education" aria-labelledby="education-heading" class="py-24 md:py-32">
  <div class="container-wide">
    <SectionHead id="education" title="Education">
      Two degrees at UFRN, with published research in distributed systems and IoT.
    </SectionHead>

    <ol>
      {#each DEGREES as degree, index (degree.degree)}
        <li class="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-b border-line first:pt-0" use:reveal={index * 90}>
          <div class="md:col-span-4">
            <h3 class="kit text-ink text-[2.25rem]">{degree.degree}</h3>
            <p class="mt-2 font-semibold text-ink">{degree.field}</p>
            <p class="text-sm text-quiet mt-1 tabular-nums">{degree.start} – {degree.end}</p>
            <p class="text-sm text-quiet">{degree.school}</p>
          </div>
          <div class="md:col-span-8 space-y-3">
            <p class="text-lg text-ink leading-snug font-medium">{degree.focus}</p>
            <p class="text-text leading-relaxed max-w-[68ch]">{degree.description}</p>
            {#if degree.papers.length}
              <div class="pt-2">
                <h4 class="caps text-turf-ink">Papers</h4>
                <ul class="mt-2 space-y-2 max-w-[68ch]">
                  {#each degree.papers as paper (paper.title)}
                    <li class="text-text leading-snug">
                      {#if paper.url}
                        <a href={paper.url} target="_blank" rel="noopener noreferrer" class="underline underline-offset-4 decoration-line-strong hover:text-ink">
                          {paper.title}
                        </a>
                      {:else}
                        {paper.title}
                      {/if}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            <p class="caps text-quiet">{degree.skills.join(" / ")}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>
