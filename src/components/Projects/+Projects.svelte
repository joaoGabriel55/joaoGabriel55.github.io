<script lang="ts">
  import mineAtelierPreview from "../../lib/assets/projects/mineatelier.webp";
  import theInvoicePreview from "../../lib/assets/projects/the_invoice.webp";
  import pokerEstimaPreview from "../../lib/assets/projects/poker_estima.webp";
  import notificare from "../../lib/assets/projects/notificare.svg";
  import SectionHead from "../Section/+SectionHead.svelte";
  import { reveal } from "../../lib/motion";

  interface Project {
    title: string;
    // Small label for the kind of project, e.g. "SaaS".
    kind: string;
    description: string;
    stack: string[];
    image: string;
    link: string;
    // Label for the primary link to the live product, gem page, or demo.
    linkLabel: string;
    // Omitted for closed-source products; the card links to the live site instead.
    repository?: string;
  }

  const projects: Project[] = [
    {
      title: "MineAtelier",
      kind: "SaaS",
      description:
        "A management system for sewing and fashion ateliers. Measurements, fittings, deposits and balances, production, and delivery dates for every order live in one place, on phone or desktop, in Portuguese, English, and Spanish.",
      stack: ["Ruby on Rails", "Hotwire"],
      image: mineAtelierPreview,
      link: "https://mineatelier.com/",
      linkLabel: "Visit MineAtelier",
    },
    {
      title: "Notificare",
      kind: "Ruby gem",
      description:
        "A Rails engine built on ActiveJob::Continuation. It tracks the progress of running jobs, keeps a durable notification inbox for users, and ships a Hotwire UI, so resumable job steps drive notifications without manual broadcast code.",
      stack: ["Ruby", "Ruby on Rails"],
      image: notificare,
      link: "https://rubygems.org/gems/notificare",
      linkLabel: "View on RubyGems",
      repository: "https://github.com/joaoGabriel55/notificare",
    },
    {
      title: "Poker Estima",
      kind: "Live app",
      description: "Estimate tasks with your teammates in real time, voting with emoji point cards.",
      stack: ["Node.js", "Express", "WebSockets", "SQLite"],
      image: pokerEstimaPreview,
      link: "https://poker-estima-app.fly.dev/",
      linkLabel: "Try the live app",
      repository: "https://github.com/joaoGabriel55/NostraEstima",
    },
    {
      title: "The Invoice",
      kind: "Live app",
      description: "An invoice generator: enter your details and line items, then export a polished PDF.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: theInvoicePreview,
      link: "https://the-invoice.netlify.app/",
      linkLabel: "Try the live app",
      repository: "https://github.com/joaoGabriel55/invoice-generator",
    },
  ];

  const [featured, ...rest] = projects;
</script>

<section id="projects" aria-labelledby="projects-heading" class="py-24 md:py-32">
  <div class="container-wide">
    <SectionHead id="projects" title="Projects">
      Things I've built and shipped, from a SaaS in three languages to a Rails gem.
    </SectionHead>

    <!-- Featured: the product people pay for. -->
    <article class="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <a
        href={featured.link}
        target="_blank"
        rel="noopener noreferrer"
        tabindex="-1"
        aria-hidden="true"
        class="lg:col-span-7 block overflow-hidden rounded-md border border-line bg-raised"
        use:reveal
        data-reveal="wipe"
      >
        <img
          src={featured.image}
          alt=""
          loading="lazy"
          decoding="async"
          class="w-full aspect-[16/10] object-cover motion-safe:group-hover:scale-[1.03] transition-transform duration-1000 ease-out-expo"
        />
      </a>
      <div class="lg:col-span-5 space-y-5" use:reveal={120}>
        <h3 class="kit text-ink text-[clamp(2.5rem,5vw,4rem)]">{featured.title}</h3>
        <p class="lede">{featured.description}</p>
        <p class="caps text-turf-ink">{featured.kind} · {featured.stack.join(" / ")}</p>
        <a href={featured.link} target="_blank" rel="noopener noreferrer" class="cta hit-area">
          {featured.linkLabel}
          <svg class="out w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>

    <div class="mt-20 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-8">
      {#each rest as { title, kind, description, stack, image, link, linkLabel, repository }, index (title)}
        <article class="group flex flex-col" use:reveal={index * 110}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            tabindex="-1"
            aria-hidden="true"
            class="block overflow-hidden rounded-md border border-line bg-raised"
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              class="w-full aspect-[16/10] object-cover motion-safe:group-hover:scale-[1.04] transition-transform duration-1000 ease-out-expo"
            />
          </a>
          <h3 class="kit text-ink text-[2.25rem] mt-6">{title}</h3>
          <p class="mt-3 text-text leading-relaxed">{description}</p>
          <p class="caps text-quiet mt-4"><span class="text-turf-ink">{kind}</span> · {stack.join(" / ")}</p>
          <div class="mt-auto pt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={link} target="_blank" rel="noopener noreferrer" class="cta hit-area">
              {linkLabel}<span class="sr-only"> ({title})</span>
              <svg class="out w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            {#if repository}
              <a href={repository} target="_blank" rel="noopener noreferrer" class="cta-quiet hit-area">
                Source<span class="sr-only"> code for {title}</span>
              </a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
