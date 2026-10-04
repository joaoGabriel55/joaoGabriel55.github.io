<script lang="ts">
  import mineAtelierPreview from "../../lib/assets/projects/mineatelier.webp";
  import theInvoicePreview from "../../lib/assets/projects/the_invoice.webp";
  import pokerEstimaPreview from "../../lib/assets/projects/poker_estima.webp";
  import notificare from "../../lib/assets/projects/notificare.svg";

  interface Project {
    title: string;
    // Small label for the kind of project, e.g. "SaaS".
    kind?: string;
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
      description:
        "Estimate tasks with your teammates in real time, voting with emoji point cards.",
      stack: ["Node.js", "Express", "WebSockets", "SQLite"],
      image: pokerEstimaPreview,
      link: "https://poker-estima-app.fly.dev/",
      linkLabel: "Try the live app",
      repository: "https://github.com/joaoGabriel55/NostraEstima",
    },
    {
      title: "The Invoice",
      description:
        "An invoice generator: enter your details and line items, then export a polished PDF.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: theInvoicePreview,
      link: "https://the-invoice.netlify.app/",
      linkLabel: "Try the live app",
      repository: "https://github.com/joaoGabriel55/invoice-generator",
    },
  ];
</script>

<section
  class="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900"
>
  <div class="section-container">
    <!-- Section Header -->
    <header class="mb-16 md:mb-20">
      <span class="eyebrow">Selected Work</span>
      <h2 class="heading-primary">Projects</h2>
      <p class="text-body mt-4 max-w-2xl">
        Things I've built and shipped, from a SaaS to a Rails gem.
      </p>
    </header>

    <!-- Projects Grid -->
    <div class="space-y-20">
      {#each projects as { title, kind, description, stack, image, link, linkLabel, repository }, index (title)}
        <article class="group">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <!-- Image -->
            <div class="order-1 {index % 2 === 1 ? 'md:order-2' : ''}">
              <!-- Duplicate of the title link for pointer users; hidden from
                   keyboard and screen readers to avoid a redundant stop. -->
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                aria-hidden="true"
                class="block overflow-hidden rounded-lg"
              >
                <div
                  class="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg"
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 [@media(hover:none)]:grayscale-0 [@media(hover:none)]:opacity-100 scale-100 motion-safe:group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-surface/50 to-transparent opacity-60 group-hover:opacity-0 [@media(hover:none)]:opacity-0 transition-opacity duration-500"
                  ></div>
                </div>
              </a>
            </div>

            <!-- Content -->
            <div
              class="order-2 {index % 2 === 1 ? 'md:order-1' : ''} space-y-6"
            >
              <div class="space-y-4">
                {#if kind}
                  <p class="text-xs uppercase text-meta">{kind}</p>
                {/if}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-3 group/link"
                >
                  <h3
                    class="heading-secondary group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"
                  >
                    {title}
                  </h3>
                </a>
                <p class="text-body">
                  {description}
                </p>
              </div>

              <!-- Tech Stack -->
              <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
                {#each stack as tech}
                  <li
                    class="px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-pencil-dark border border-neutral-300 dark:border-neutral-800 rounded-full"
                  >
                    {tech}
                  </li>
                {/each}
              </ul>

              <!-- Live product first: visitors try apps far more often than they read repos. -->
              <div class="flex flex-wrap gap-x-8 gap-y-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hit-area inline-flex items-center gap-3 text-sm text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white transition-colors duration-300 group/link"
                >
                  <span
                    class="w-8 h-px bg-neutral-500 dark:bg-neutral-500 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"
                  ></span>
                  {linkLabel}<span class="sr-only"> ({title})</span>
                  <svg
                    class="w-4 h-4 transform motion-safe:group-hover/link:translate-x-1 transition-transform duration-300"
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
                {#if repository}
                  <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hit-area inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group/link"
                  >
                    <span
                      class="w-8 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"
                    ></span>
                    Source<span class="sr-only"> code for {title}</span>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
