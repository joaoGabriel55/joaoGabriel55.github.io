<script lang="ts">
  import { reveal } from "../../lib/motion";

  export let id: string;
  export let title: string;
  export let level: 1 | 2 = 2;
</script>

<header
  class="grid gap-5 md:grid-cols-12 md:items-end pb-8 md:pb-10 mb-10 md:mb-14 border-b-2 border-ink"
  use:reveal
>
  {#if level === 1}
    <h1 id="{id}-heading" class="h-section md:col-span-7 !text-[clamp(3rem,9vw,7rem)]">{title}</h1>
  {:else}
    <h2 id="{id}-heading" class="h-section md:col-span-7">{title}</h2>
  {/if}
  {#if $$slots.default}
    <div class="md:col-span-5 lede md:pb-1"><slot /></div>
  {/if}
</header>
