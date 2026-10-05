<script lang="ts">
  import { CONTRIBUTIONS, TOTAL_MERGED_PRS } from "../../lib/openSource";

  // Pitch-side perimeter board: verifiable credentials only.
  const items = [
    "Speaker · RubyConf 2026",
    "Notificare on RubyGems",
    `${TOTAL_MERGED_PRS} merged pull requests`,
    ...CONTRIBUTIONS.map((c) => c.fullName),
    "MineAtelier · live SaaS",
  ];
</script>

<div class="ticker bg-turf text-chalk border-y border-turf-deep overflow-hidden" role="region" aria-label="Highlights">
  <ul class="sr-only">
    {#each items as item}<li>{item}</li>{/each}
  </ul>
  <div class="track flex w-max" aria-hidden="true">
    {#each [0, 1] as copy (copy)}
      <ul class="flex shrink-0 items-center">
        {#each items as item}
          <li class="kit flex items-center gap-6 pl-6 text-2xl md:text-[1.75rem] leading-none py-4 whitespace-nowrap">
            {item}
            <svg class="w-3.5 h-3.5 opacity-70" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="1.5" /></svg>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>

<style>
  @media (prefers-reduced-motion: no-preference) {
    .track {
      animation: scroll 48s linear infinite;
    }

    .ticker:hover .track {
      animation-play-state: paused;
    }
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
</style>
