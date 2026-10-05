<script lang="ts">
  import profilePicture from "../../lib/assets/profile.webp";
  import TacticsBoard from "./+TacticsBoard.svelte";
  import Ticker from "./+Ticker.svelte";
  import EmailCopy from "../Contact/+EmailCopy.svelte";
  import SocialLinks from "../Contact/+SocialLinks.svelte";
  import { scrollToId } from "../../lib/contact";
  import { TOTAL_MERGED_PRS } from "../../lib/openSource";

  const yearsExperience = new Date().getFullYear() - 2021;
</script>

<section class="pt-24 md:pt-28">
  <!-- Three grid pieces: on phones the board sits right under the name, on
       desktop it spans both text rows on the right. -->
  <div class="container-wide grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-x-14 pb-14 md:pb-20">
    <div class="lg:col-span-6 lg:row-start-1">
      <h1 class="kit text-ink text-[clamp(3.5rem,9vw,6rem)] leading-[0.86]">
        <span class="mask"><span style="--d:0ms">Gabriel</span></span>
        <span class="mask"><span style="--d:110ms">Quaresma</span></span>
      </h1>

      <p class="mt-5 text-lg md:text-xl font-semibold text-ink intro" style="--d:250ms">
        Software Engineer <span class="whitespace-nowrap">@Codeminer42 · Brazil</span>
      </p>
    </div>

    <div class="mt-8 lg:mt-0 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:self-center intro" style="--d:150ms">
      <TacticsBoard />
    </div>

    <div class="mt-10 lg:mt-0 lg:col-span-6 lg:row-start-2">

      <div class="lg:mt-6 flex items-start gap-4 max-w-xl intro" style="--d:330ms">
        <img
          src={profilePicture}
          alt="Portrait of Gabriel Quaresma"
          width="64"
          height="64"
          class="shrink-0 w-16 h-16 rounded-full object-cover ring-2 ring-turf"
        />
        <div class="space-y-2">
          <p class="lede">
            Full-stack engineer with {yearsExperience}+ years building web products in React,
            TypeScript, Node.js, and Ruby on Rails. I care about the experience people have and the
            code teammates inherit.
          </p>
          <p class="text-quiet">Off the clock: Brazilian Jiu-Jitsu, Football Manager, and drawing.</p>
        </div>
      </div>

      <ul class="mt-7 flex flex-wrap gap-x-6 gap-y-3 intro" style="--d:410ms" aria-label="Highlights">
        <li>
          <button type="button" class="cta hit-area" on:click={() => scrollToId("talks")}>
            RubyConf 2026 speaker
          </button>
        </li>
        <li>
          <a href="https://rubygems.org/gems/notificare" target="_blank" rel="noopener noreferrer" class="cta hit-area">
            Notificare on RubyGems
            <svg class="out w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
            </svg>
            <span class="sr-only">(opens RubyGems in a new tab)</span>
          </a>
        </li>
        <li>
          <button type="button" class="cta hit-area" on:click={() => scrollToId("open-source")}>
            {TOTAL_MERGED_PRS} merged PRs in Rails, axios & more
          </button>
        </li>
      </ul>

      <div class="mt-9 pt-6 border-t border-line space-y-3 intro" style="--d:490ms">
        <EmailCopy />
        <SocialLinks />
      </div>
    </div>
  </div>

  <Ticker />
</section>

<style>
  .mask {
    display: block;
    overflow: hidden;
    padding-bottom: 0.04em;
  }

  .mask > span {
    display: block;
  }

  @media (prefers-reduced-motion: no-preference) {
    .mask > span {
      animation: rise 1s cubic-bezier(0.16, 1, 0.3, 1) var(--d) both;
    }

    .intro {
      animation: enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) var(--d) both;
    }
  }

  @keyframes rise {
    from {
      transform: translateY(105%);
    }
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
  }
</style>
