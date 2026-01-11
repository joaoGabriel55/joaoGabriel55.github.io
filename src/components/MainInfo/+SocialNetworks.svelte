<script>
  import githubIcon from "../../lib/assets/github-icon.svg";
  import instagramIcon from "../../lib/assets/instagram-icon.svg";
  import linkedinIcon from "../../lib/assets/linkedin-icon.svg";

  const socialNetworks = [
    {
      icon: githubIcon,
      alt: "github-icon",
      link: "https://github.com/joaoGabriel55",
    },
    {
      icon: linkedinIcon,
      alt: "linkedin-icon",
      link: "https://linkedin.com/in/gabriel-quaresma-dev",
    },
    {
      icon: instagramIcon,
      alt: "instagram-icon",
      link: "https://instagram.com/drawquaresma",
    },
  ];
</script>

<section>
  <h3 class="text-lg font-semibold text-white leading-normal mb-4">
    My Social Networks
  </h3>
  <div class="flex justify-center md:justify-start gap-12">
    {#each socialNetworks as { icon, alt, link }}
      <a
        href={link}
        target="_blank"
        class="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
      >
        <img src={icon} {alt} class="bg-white p-4 rounded-3xl w-14 md:w-20" />
      </a>
    {/each}
  </div>
</section>
