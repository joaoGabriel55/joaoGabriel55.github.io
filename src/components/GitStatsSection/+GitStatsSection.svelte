<script lang="ts">
  const stats = [
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=joaoGabriel55&layout=compact&show_icons=true&title_color=FFF&text_color=FFF&bg_color=151515&hide_border=true",
      alt: "github languages",
    },
  ];
</script>

<div class="bg-app-color flex justify-center">
  {#each stats as { src, alt }}
    <img {src} {alt} width="558px" loading="eager" />
  {/each}
</div>
