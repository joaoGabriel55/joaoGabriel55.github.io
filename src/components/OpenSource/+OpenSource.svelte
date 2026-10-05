<script lang="ts" context="module">
  import { CONTRIBUTIONS } from "../../lib/openSource";

  // Repos are listed statically so the section always renders; the GitHub API
  // only adds star counts. Counts are cached across mounts and page reloads
  // to stay well under the unauthenticated rate limit (60 requests/hour/IP).
  const REPOSITORIES = CONTRIBUTIONS.map((c) => c.fullName);

  const CACHE_KEY = "oss-stars";
  const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

  type StarCache = { stars: Record<string, number>; expiresAt: number };

  let memoryCache: StarCache | null = null;

  function readCache(): StarCache | null {
    if (memoryCache && Date.now() < memoryCache.expiresAt) return memoryCache;
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as StarCache;
      if (Date.now() < parsed.expiresAt) {
        memoryCache = parsed;
        return parsed;
      }
    } catch {
      // Storage blocked or corrupt: fall through to a fresh fetch.
    }
    return null;
  }

  function writeCache(stars: Record<string, number>) {
    memoryCache = { stars, expiresAt: Date.now() + CACHE_TTL_MS };
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(memoryCache));
    } catch {
      // Non-essential; the in-memory copy still covers this session.
    }
  }

  async function fetchStars(fullName: string): Promise<number | null> {
    try {
      const response = await fetch(`https://api.github.com/repos/${fullName}`);
      if (!response.ok) return null;
      const data = (await response.json()) as { stargazers_count?: number };
      return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
    } catch {
      return null;
    }
  }

  async function loadStars(): Promise<Record<string, number>> {
    const cached = readCache();
    if (cached) return cached.stars;

    const results = await Promise.all(REPOSITORIES.map(fetchStars));
    const stars: Record<string, number> = {};
    results.forEach((count, i) => {
      if (count !== null) stars[REPOSITORIES[i]] = count;
    });

    // Only cache a complete answer, so a rate-limited run retries next visit.
    if (Object.keys(stars).length === REPOSITORIES.length) writeCache(stars);
    return stars;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { mergedPRsUrl, TOTAL_MERGED_PRS } from "../../lib/openSource";
  import { countUp, reveal } from "../../lib/motion";
  import SectionHead from "../Section/+SectionHead.svelte";

  // Biggest contribution first.
  const repositories = [...CONTRIBUTIONS]
    .sort((a, b) => b.mergedPRs - a.mergedPRs)
    .map(({ fullName, mergedPRs, highlight }) => {
    const [owner, name] = fullName.split("/");
    return {
      fullName,
      name,
      mergedPRs,
      highlight,
      avatar: `https://github.com/${owner}.png?size=80`,
      contributionsUrl: mergedPRsUrl(fullName),
    };
  });

  let stars: Record<string, number> = readCache()?.stars ?? {};

  function formatStarNumber(count: number) {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  }

  onMount(() => {
    loadStars().then((result) => {
      stars = result;
    });
  });
</script>

<section id="open-source" aria-labelledby="open-source-heading" class="py-24 md:py-32">
  <div class="container-wide">
    <SectionHead id="open-source" title="Open source">
      {TOTAL_MERGED_PRS} merged pull requests across Forem, Grommet, Rails, axios, and Herb, ranked by how many landed.
    </SectionHead>

    <!-- A league table: ARIA roles keep the table semantics when rows become grids on small screens. -->
    <table role="table" class="w-full text-left" aria-label="Merged pull requests by repository">
      <thead role="rowgroup" class="max-md:sr-only">
        <tr role="row" class="caps text-quiet border-b border-line">
          <th role="columnheader" scope="col" class="py-3 pr-4 w-14 font-semibold">Pos</th>
          <th role="columnheader" scope="col" class="py-3 pr-6 font-semibold">Repository</th>
          <th role="columnheader" scope="col" class="py-3 pr-8 font-semibold text-right">Merged PRs</th>
          <th role="columnheader" scope="col" class="py-3 pr-6 font-semibold">Representative PR</th>
          <th role="columnheader" scope="col" class="py-3 font-semibold"><span class="sr-only">All merged PRs</span></th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        {#each repositories as { fullName, name, mergedPRs, highlight, avatar, contributionsUrl }, index (fullName)}
          <tr
            role="row"
            class="group border-b border-line grid grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-x-3 gap-y-3 py-5 md:table-row md:py-0 hover:bg-raised transition-colors duration-300"
            use:reveal={index * 80}
          >
            <td role="cell" class="kit text-2xl text-quiet tabular-nums md:py-6 md:pr-4 md:pl-2">{index + 1}</td>
            <td role="cell" class="md:py-6 md:pr-6">
              <div class="flex items-center gap-3 min-w-0">
                <img
                  src={avatar}
                  alt=""
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                  class="w-9 h-9 rounded-full bg-lifted ring-1 ring-line"
                />
                <div class="min-w-0">
                  <p class="font-bold text-ink truncate">{name}</p>
                  {#if stars[fullName] !== undefined}
                    <p class="text-xs text-quiet tabular-nums">{formatStarNumber(stars[fullName])} repo stars</p>
                  {/if}
                </div>
              </div>
            </td>
            <td role="cell" class="md:py-6 md:pr-8 text-right">
              <span class="kit text-4xl md:text-5xl text-turf-ink tabular-nums" use:countUp={mergedPRs}>{mergedPRs}</span>
              <span class="sr-only"> merged PRs</span>
            </td>
            <td role="cell" class="col-start-2 col-span-2 md:py-6 md:pr-6">
              <a
                href={highlight.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-text hover:text-ink underline decoration-line-strong hover:decoration-[var(--turf-ink)] decoration-1 underline-offset-4 transition-colors duration-300"
              >
                {highlight.title}
              </a>
            </td>
            <td role="cell" class="col-start-2 col-span-2 md:py-6 md:text-right">
              <a href={contributionsUrl} target="_blank" rel="noopener noreferrer" class="cta-quiet hit-area whitespace-nowrap text-sm">
                All {mergedPRs}<span class="sr-only"> merged PRs to {name}</span>
                <svg class="run w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
      <tfoot role="rowgroup">
        <tr role="row" class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-x-3 pt-5 md:table-row">
          <td role="cell" class="md:pt-6"></td>
          <th role="rowheader" scope="row" class="caps text-ink font-bold md:pt-6">Total</th>
          <td role="cell" class="text-right md:pt-6 md:pr-8">
            <span class="kit text-4xl md:text-5xl text-ink tabular-nums">{TOTAL_MERGED_PRS}</span>
          </td>
          <td role="cell" class="hidden md:table-cell"></td>
          <td role="cell" class="hidden md:table-cell"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</section>
