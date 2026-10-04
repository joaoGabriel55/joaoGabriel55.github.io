<script lang="ts">
  import { onMount } from "svelte";
  import MainInfo from "../components/MainInfo/+MainInfo.svelte";
  import OpenSource from "../components/OpenSource/+OpenSource.svelte";
  import Projects from "../components/Projects/+Projects.svelte";
  import Blog from "../components/Blog/+Blog.svelte";
  import { announceRoute } from "../lib/route";

  onMount(() => {
    announceRoute();
  });
</script>

<MainInfo />
<Projects />
<OpenSource />
<Blog />
