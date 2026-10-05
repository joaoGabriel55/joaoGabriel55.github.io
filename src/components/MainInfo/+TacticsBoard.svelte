<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { prefersReducedMotion } from "../../lib/route";

  // Pitch in metres x10 (105 x 68), inside a 30-unit margin.
  const W = 1050;
  const H = 680;
  const GOAL = { x: 1018, y: 340 };

  // Back end at the back, front end up front. Shirt numbers follow the
  // classic positions: 4 and 5 centre-backs, 8 midfield, 10 and 11 forwards.
  const players = [
    { id: "rails", label: "Rails", number: 4, x: 250, y: 205 },
    { id: "node", label: "Node.js", number: 5, x: 250, y: 475 },
    { id: "ts", label: "TypeScript", number: 8, x: 500, y: 340 },
    { id: "react", label: "React", number: 10, x: 770, y: 205 },
    { id: "hotwire", label: "Hotwire", number: 11, x: 770, y: 475 },
  ];
  const byId = Object.fromEntries(players.map((p) => [p.id, p]));

  // The ball's route: Rails -> TypeScript -> React -> goal.
  const route = [byId.rails, byId.ts, byId.react, GOAL];
  const SEGMENT_MS = 620;
  const KICKOFF_MS = 1500;
  const TOKEN_R = 30;

  // Arrow between two points, trimmed so it starts and ends at token edges.
  function arrow(a: { x: number; y: number }, b: { x: number; y: number }, trimEnd = TOKEN_R + 8) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    const sx = a.x + ux * (TOKEN_R + 6);
    const sy = a.y + uy * (TOKEN_R + 6);
    const ex = b.x - ux * trimEnd;
    const ey = b.y - uy * trimEnd;
    return `M${sx.toFixed(1)} ${sy.toFixed(1)} L${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }

  const passes = route.slice(0, -1).map((from, i) => arrow(from, route[i + 1], i === route.length - 2 ? 4 : TOKEN_R + 8));
  // Support runs: dashed, off the ball.
  const runs = [
    `M${byId.node.x + 26} ${byId.node.y - 22} Q 400 450 ${byId.ts.x - 30} ${byId.ts.y + 30}`,
    `M${byId.hotwire.x + 34} ${byId.hotwire.y - 8} Q 880 470 935 400`,
  ];

  // Chalk markings, each drawn as one stroke.
  const r = 91.5;
  const arcDy = Math.sqrt(r * r - 55 * 55).toFixed(1);
  const markings = [
    `M30 30 H1020 V650 H30 Z`,
    `M525 30 V650`,
    `M525 ${340 - r} A${r} ${r} 0 1 1 525 ${340 + r} A${r} ${r} 0 1 1 525 ${340 - r}`,
    `M30 138.5 H195 V541.5 H30`,
    `M1020 138.5 H855 V541.5 H1020`,
    `M30 248.5 H85 V431.5 H30`,
    `M1020 248.5 H965 V431.5 H1020`,
    `M195 ${340 - +arcDy} A${r} ${r} 0 0 1 195 ${340 + +arcDy}`,
    `M855 ${340 - +arcDy} A${r} ${r} 0 0 0 855 ${340 + +arcDy}`,
    `M30 40 A10 10 0 0 0 40 30`,
    `M1010 30 A10 10 0 0 0 1020 40`,
    `M30 640 A10 10 0 0 1 40 650`,
    `M1010 650 A10 10 0 0 1 1020 640`,
    `M12 303.4 H30 V376.6 H12 Z`,
    `M1038 303.4 H1020 V376.6 H1038 Z`,
  ];

  let run = 0;
  let animate = false;
  let ball = { x: GOAL.x, y: GOAL.y };
  let scored = false;
  let frame = 0;
  let timer: ReturnType<typeof setTimeout>;

  const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function rollBall() {
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    scored = false;
    ball = { x: route[0].x, y: route[0].y };
    timer = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = Math.max(0, now - start);
        const i = Math.min(route.length - 2, Math.floor(elapsed / SEGMENT_MS));
        const t = Math.min(1, (elapsed - i * SEGMENT_MS) / SEGMENT_MS);
        const a = route[i];
        const b = route[i + 1];
        const e = easeInOut(t);
        ball = { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e };
        if (elapsed < SEGMENT_MS * (route.length - 1)) {
          frame = requestAnimationFrame(step);
        } else {
          ball = { x: GOAL.x, y: GOAL.y };
          scored = true;
        }
      };
      frame = requestAnimationFrame(step);
    }, KICKOFF_MS);
  }

  async function replay() {
    if (!animate) return;
    run += 1;
    await tick();
    rollBall();
  }

  // The play waits, paused at its first frame, until the board is on screen.
  let figure: HTMLElement;
  let started = false;

  onMount(() => {
    animate = !prefersReducedMotion();
    if (!animate) return;
    ball = { x: route[0].x, y: route[0].y };
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        started = true;
        rollBall();
      },
      { threshold: 0.35 }
    );
    observer.observe(figure);
    return () => observer.disconnect();
  });

  onDestroy(() => {
    cancelAnimationFrame(frame);
    clearTimeout(timer);
  });
</script>

<figure class="board-wrap" bind:this={figure}>
  <div class="board relative rounded-md bg-turf text-chalk overflow-hidden">
    <div class="flex items-center justify-between px-4 md:px-5 pt-3 md:pt-4">
      <p class="caps text-chalk-quiet text-xs">Formation · 2-1-2</p>
      {#if animate}
        <button
          type="button"
          on:click={replay}
          class="caps text-xs text-chalk-quiet hover:text-chalk inline-flex items-center gap-1.5 h-11 -my-3 px-2 -mr-2 transition-colors duration-300"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" d="M4 4v6h6M20 12a8 8 0 0 1-14.9 4M4.6 10A8 8 0 0 1 20 12" />
          </svg>
          Replay<span class="sr-only"> the play</span>
        </button>
      {/if}
    </div>

    {#key run}
      <svg
        class="block w-full h-auto px-2 md:px-3 pb-2 md:pb-3"
        class:play={animate}
        class:held={animate && !started}
        viewBox="0 0 {W} {H}"
        aria-hidden="true"
      >
        <g class="markings" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          {#each markings as d, i}
            <path {d} pathLength="1" class="chalk" style="--d:{i * 45}ms" />
          {/each}
          <circle cx="525" cy="340" r="5" fill="currentColor" stroke="none" class="spot" />
          <circle cx="140" cy="340" r="5" fill="currentColor" stroke="none" class="spot" />
          <circle cx="910" cy="340" r="5" fill="currentColor" stroke="none" class="spot" />
        </g>

        <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="runs">
          {#each runs as d, i}
            <path {d} pathLength="1" class="run" style="--d:{1300 + i * 200}ms" />
          {/each}
        </g>

        <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
          {#each passes as d, i}
            <path {d} pathLength="1" class="pass" marker-end="url(#head)" style="--d:{KICKOFF_MS + i * SEGMENT_MS - 120}ms" />
          {/each}
        </g>

        <defs>
          <marker id="head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {#each players as p, i (p.id)}
          <g class="token" style="--d:{850 + i * 90}ms; transform-origin:{p.x}px {p.y}px">
            <circle cx={p.x} cy={p.y} r={TOKEN_R} class="magnet" />
            <text x={p.x} y={p.y + 10} text-anchor="middle" class="num">{p.number}</text>
            <text x={p.x} y={p.y + TOKEN_R + 34} text-anchor="middle" class="label">{p.label}</text>
          </g>
        {/each}

        {#if scored}
          <circle cx={GOAL.x} cy={GOAL.y} r="14" class="ripple" fill="none" stroke="currentColor" stroke-width="3" />
        {/if}
        <circle cx={ball.x} cy={ball.y} r="11" class="ball" />
      </svg>
    {/key}
  </div>

  <figcaption class="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
    <span class="text-ink font-semibold">Back end at the back, front end up front.</span>
    <span class="text-sm text-quiet">
      Rails and Node.js build the play, TypeScript links it, React and Hotwire finish it.
    </span>
  </figcaption>
</figure>

<style>
  .board {
    /* Mowing stripes: the pitch's own material, ten bands across. */
    background-image: repeating-linear-gradient(
      90deg,
      rgb(255 255 255 / 0.035) 0 10%,
      transparent 10% 20%
    );
  }

  .magnet {
    fill: var(--chalk);
  }

  .num {
    fill: var(--turf);
    font-size: 30px;
    font-weight: 800;
    font-stretch: 70%;
  }

  .label {
    fill: var(--chalk);
    font-size: 26px;
    font-weight: 700;
    font-stretch: 78%;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    /* A turf halo keeps labels legible where they cross chalk lines. */
    paint-order: stroke;
    stroke: var(--turf);
    stroke-width: 10px;
    stroke-linejoin: round;
  }

  .markings {
    opacity: 0.78;
  }

  .runs {
    opacity: 0.6;
    stroke-dasharray: 0.035 0.03;
  }

  .ball {
    fill: #fff;
    stroke: var(--ink);
    stroke-width: 3;
  }

  :global(.dark) .ball {
    stroke: #0b110e;
  }

  .held :global(*) {
    animation-play-state: paused !important;
  }

  /* Kick-off sequence: chalk lines draw, magnets land, passes follow the ball. */
  .play .chalk {
    stroke-dasharray: 1;
    animation: draw 1.3s cubic-bezier(0.16, 1, 0.3, 1) var(--d) both;
  }

  .play .spot {
    animation: fade 0.6s ease-out 0.7s both;
  }

  .play .run {
    animation: fade 0.8s ease-out var(--d) both;
  }

  .play .pass {
    stroke-dasharray: 1;
    animation: draw 0.5s cubic-bezier(0.33, 1, 0.68, 1) var(--d) both;
  }

  .play .token {
    animation: land 0.8s cubic-bezier(0.16, 1, 0.3, 1) var(--d) both;
  }

  .ripple {
    animation: ripple 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
    transform-origin: 1018px 340px;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @keyframes land {
    from {
      opacity: 0;
      transform: scale(0.4) translateY(-30px);
    }
  }

  @keyframes ripple {
    from {
      opacity: 0.9;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(4);
    }
  }
</style>
