<script lang="ts">
  export let icon: string;
  export let text: string;
  export let link = "";
  export let alt: string;

  const textClass = "font-semibold text-2xl text-white";
</script>

{#if Boolean(link)}
  <a class="flex items-center gap-4" href={link}>
    <img src={icon} {alt} />
    <span class={textClass}>{text}</span>
  </a>
{:else}
  <div class="flex items-center gap-4">
    <img src={icon} {alt} />
    <span class={textClass}>{text}</span>
  </div>
{/if}
