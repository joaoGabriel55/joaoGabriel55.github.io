<script lang="ts">
  import { ROLES, PARENT_CLUB, formatMonth, monthIndex, type Role } from "../../lib/experience";
  import { reveal } from "../../lib/motion";
  import SectionHead from "../Section/+SectionHead.svelte";

  const FROM = 2019;
  const now = new Date();
  const nowYm = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const TO = now.getFullYear() + 1;
  const span = (TO - FROM) * 12;
  const years = Array.from({ length: TO - FROM + 1 }, (_, i) => FROM + i);

  const parent = ROLES.find((r) => r.engagement === "employer")!;
  const contracts = ROLES.filter((r) => r.engagement === "contract").sort((a, b) => b.start.localeCompare(a.start));
  const academy = ROLES.filter((r) => r.engagement === "volunteer");
  // Timeline rows, oldest at the bottom like a career graph reads upward.
  const timeline = [parent, ...contracts, ...academy];

  function bar(role: Role) {
    const start = monthIndex(role.start, FROM);
    const end = monthIndex(role.end ?? nowYm, FROM) + 1;
    return `left:${(start / span) * 100}%;width:${((end - start) / span) * 100}%`;
  }

  function dates(role: Role) {
    return `${formatMonth(role.start)} – ${role.end ? formatMonth(role.end) : "Present"}`;
  }

  function years_(role: Role) {
    const months = monthIndex(role.end ?? nowYm, 0) - monthIndex(role.start, 0) + 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo${m > 1 ? "s" : ""}` : ""].filter(Boolean).join(" ");
  }
</script>

<section id="experience" aria-labelledby="experience-heading" class="py-24 md:py-32">
  <div class="container-wide">
    <SectionHead id="experience" title="Experience">
      Almost six years at {PARENT_CLUB}, most of them on client contracts with product teams in the US and Brazil.
    </SectionHead>

    <!-- Career graph: one bar per role on a shared year axis. -->
    <figure class="timeline mb-16 md:mb-20" use:reveal>
      <figcaption class="sr-only">
        Career timeline from {FROM} to today. Each bar shows how long a role lasted.
      </figcaption>
      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] md:grid-cols-[10rem_minmax(0,1fr)] gap-x-4" aria-hidden="true">
        {#each timeline as role, i (role.company)}
          <div class="caps text-[0.75rem] md:text-[0.8125rem] py-2 truncate {role.engagement === 'employer' ? 'text-ink' : 'text-quiet'}">
            {role.company}
          </div>
          <div class="relative h-10 border-l border-line">
            <span
              class="bar absolute top-2 bottom-2 rounded-sm
                {role.engagement === 'employer'
                ? 'bg-turf'
                : role.engagement === 'contract'
                  ? 'bg-raised border-2 border-[var(--turf-ink)]'
                  : 'border-2 border-dashed border-line-strong'}"
              style="{bar(role)}; --i:{i}"
            ></span>
          </div>
        {/each}
        <div></div>
        <div class="relative h-6 border-t border-line-strong">
          {#each years as y, i}
            {#if i < years.length - 1}
              <span
                class="absolute top-1.5 caps text-[0.6875rem] text-quiet tabular-nums -translate-x-1/2 {i % 2 === 1 ? 'max-md:hidden' : ''}"
                style="left:{((i * 12) / span) * 100}%">{y}</span
              >
            {/if}
          {/each}
        </div>
      </div>
      <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-quiet" aria-hidden="true">
        <li class="flex items-center gap-2"><span class="w-6 h-3 rounded-sm bg-turf"></span>Employer</li>
        <li class="flex items-center gap-2"><span class="w-6 h-3 rounded-sm border-2 border-[var(--turf-ink)]"></span>Client contract via {PARENT_CLUB}</li>
        <li class="flex items-center gap-2"><span class="w-6 h-3 rounded-sm border-2 border-dashed border-line-strong"></span>Volunteer</li>
      </ul>
    </figure>

    <!-- Parent club -->
    <article class="grid md:grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-14 border-b-2 border-ink" use:reveal>
      <div class="md:col-span-4">
        <h3 class="kit text-ink text-[clamp(2.5rem,5vw,4rem)]">{parent.company}</h3>
        <p class="mt-3 font-semibold text-ink">{parent.title} · Employer</p>
        <p class="text-sm text-quiet mt-1">{dates(parent)} · {years_(parent)}</p>
        <p class="text-sm text-quiet">{parent.location}</p>
      </div>
      <div class="md:col-span-8 space-y-4">
        <p class="lede text-ink">{parent.highlight}</p>
        <p class="text-text leading-relaxed max-w-[68ch]">{parent.description}</p>
        <p class="caps text-quiet">{parent.stack.join(" / ")}</p>
      </div>
    </article>

    <!-- Client contracts -->
    <h3 class="kit text-ink text-[1.75rem] md:text-[2rem] mt-14 md:mt-16 pb-4 border-b border-line">Client contracts via {PARENT_CLUB}</h3>
    <ol>
      {#each contracts as role, index (role.company)}
        <li class="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-b border-line" use:reveal={index * 90}>
          <div class="md:col-span-4">
            <h4 class="kit text-ink text-[2.25rem]">{role.company}</h4>
            <p class="mt-2 font-semibold text-ink">{role.title}</p>
            <p class="text-sm text-quiet mt-1">{dates(role)} · {years_(role)}</p>
            <p class="text-sm text-quiet">{role.location}</p>
          </div>
          <div class="md:col-span-8 space-y-3">
            <p class="text-lg text-ink leading-snug font-medium">{role.highlight}</p>
            <details class="group">
              <summary class="cta-quiet hit-area cursor-pointer list-none text-sm">
                <span class="group-open:hidden">More about this contract</span>
                <span class="hidden group-open:inline">Less</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p class="mt-4 text-text leading-relaxed max-w-[68ch]">{role.description}</p>
            </details>
            <p class="caps text-quiet">{role.stack.join(" / ")}</p>
          </div>
        </li>
      {/each}
    </ol>

    <!-- Before Codeminer42 -->
    {#each academy as role (role.company)}
      <h3 class="kit text-ink text-[1.75rem] md:text-[2rem] mt-14 md:mt-16 pb-4 border-b border-line">Before {PARENT_CLUB}</h3>
      <div class="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-b border-line" use:reveal>
        <div class="md:col-span-4">
          <h4 class="kit text-ink text-[2.25rem]">{role.company}</h4>
          <p class="mt-2 font-semibold text-ink">{role.title}</p>
          <p class="text-sm text-quiet mt-1">{dates(role)} · {years_(role)}</p>
        </div>
        <div class="md:col-span-8 space-y-3">
          <p class="text-lg text-ink leading-snug font-medium">{role.highlight}</p>
          <p class="text-text leading-relaxed max-w-[68ch]">{role.description}</p>
          <p class="caps text-quiet">{role.stack.join(" / ")}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  summary::-webkit-details-marker {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    :global(.js) .timeline .bar {
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
      transition-delay: calc(var(--i) * 120ms + 150ms);
    }

    :global(.js) .timeline:global(.is-in) .bar {
      transform: scaleX(1);
    }
  }
</style>
