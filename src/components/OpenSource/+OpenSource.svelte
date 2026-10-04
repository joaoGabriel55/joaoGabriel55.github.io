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
  import { mergedPRsUrl } from "../../lib/openSource";

  const repositories = CONTRIBUTIONS.map(({ fullName, mergedPRs }) => {
    const [owner, name] = fullName.split("/");
    return {
      fullName,
      name,
      mergedPRs,
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
        Contributing to projects that make a difference in the developer
        ecosystem.
      </p>
    </header>

    <!-- Repository Grid -->
    <ul class="grid md:grid-cols-3 gap-6">
      {#each repositories as { fullName, name, mergedPRs, avatar, contributionsUrl } (fullName)}
        <li
          class="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-surface-light hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-surface-lighter transition-all duration-300"
        >
          <!-- Header -->
          <div class="flex items-center justify-between gap-4 mb-4">
            <div class="flex items-center gap-3 min-w-0">
              <img
                src={avatar}
                alt=""
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h3
                class="font-medium truncate text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"
              >
                {name}
              </h3>
            </div>
            {#if stars[fullName] !== undefined}
              <div class="flex items-center gap-1.5 text-meta shrink-0" title="Repository stars">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-sm tabular-nums">
                  {formatStarNumber(stars[fullName])}
                  <span class="sr-only">repository stars</span>
                </span>
              </div>
            {/if}
          </div>

          <p class="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
            {mergedPRs} merged pull requests
          </p>

          <!-- Link -->
          <a
            href={contributionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="hit-area inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group/link"
          >
            <span
              class="w-6 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-10 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"
            ></span>
            View my contributions<span class="sr-only"> to {name}</span>
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
