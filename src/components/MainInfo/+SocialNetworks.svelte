<script>
  import githubIcon from "../../lib/assets/github-icon.svg";
  import instagramIcon from "../../lib/assets/instagram-icon.svg";
  import linkedinIcon from "../../lib/assets/linkedin-icon.svg";

  const socialNetworks = [
    {
      icon: githubIcon,
      alt: "GitHub",
      link: "https://github.com/joaoGabriel55",
      label: "GitHub",
    },
    {
      icon: linkedinIcon,
      alt: "LinkedIn",
      link: "https://linkedin.com/in/gabriel-quaresma-dev",
      label: "LinkedIn",
    },
    {
      icon: instagramIcon,
      alt: "Instagram",
      link: "https://instagram.com/drawquaresma",
      label: "Instagram",
    },
  ];
</script>

<nav aria-label="Social networks">
  <ul class="flex items-center justify-center gap-8">
    {#each socialNetworks as { icon, alt, link, label }}
      <li>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          class="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300"
        >
          <img
            src={icon}
            {alt}
            class="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </li>
    {/each}
  </ul>
</nav>
