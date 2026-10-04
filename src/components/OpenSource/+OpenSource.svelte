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

<section id="open-source" class="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
  <div class="section-container">
    <!-- Section Header -->
    <header class="mb-16 md:mb-20">
      <span class="eyebrow">Community</span>
      <h2 class="heading-primary">Open Source Contributions</h2>
      <p class="text-body mt-4 max-w-2xl">
        {TOTAL_MERGED_PRS} merged pull requests across Forem, Grommet, Rails, axios, and Herb.
      </p>
    </header>

    <!-- One ruled row per repo: who, one real contribution, and the full list. -->
    <ul class="border-t border-neutral-200 dark:border-neutral-800">
      {#each repositories as { fullName, name, mergedPRs, highlight, avatar, contributionsUrl } (fullName)}
        <li
          class="group grid gap-3 py-6 border-b border-neutral-200 dark:border-neutral-800 md:grid-cols-[12rem_minmax(0,1fr)_auto] md:items-center md:gap-8"
        >
          <!-- Repo -->
          <div class="flex items-center gap-3 min-w-0">
            <img
              src={avatar}
              alt=""
              width="32"
              height="32"
              loading="lazy"
              decoding="async"
              class="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 grayscale group-hover:grayscale-0 [@media(hover:none)]:grayscale-0 transition-all duration-500"
            />
            <div class="min-w-0">
              <h3 class="font-medium truncate text-neutral-900 dark:text-white">{name}</h3>
              {#if stars[fullName] !== undefined}
                <p class="text-xs text-meta tabular-nums">
                  {formatStarNumber(stars[fullName])} repo stars
                </p>
              {/if}
            </div>
          </div>

          <!-- One representative merged PR -->
          <a
            href={highlight.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-base font-light text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"
          >
            <span class="border-b border-neutral-300 dark:border-neutral-700 hover:border-current transition-colors duration-300">{highlight.title}</span>
          </a>

          <!-- All merged PRs -->
          <a
            href={contributionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="hit-area inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group/link whitespace-nowrap"
          >
            {mergedPRs} merged PRs<span class="sr-only"> to {name}</span>
            <svg
              class="w-3.5 h-3.5 transform motion-safe:group-hover/link:translate-x-1 transition-transform duration-300"
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
        </li>
      {/each}
    </ul>
  </div>
</section>
