<script lang="ts">
  import theInvoicePreview from "../../lib/assets/projects/the_invoice.jpeg";
  import pokerEstimaPreview from "../../lib/assets/projects/poker_estima.jpeg";

  const projects = [
    {
      title: "Poker Estima",
      description:
        "An app that you can estimate with points (emojis) your tasks with your teammates",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "WebSockets",
        "Express",
        "SQLite",
      ],
      image: pokerEstimaPreview,
      link: "https://poker-estima-app.fly.dev/",
    },
    {
      title: "The Invoice",
      description:
        "Generate professional invoices in minutes. Enter your details, add line items, and export a polished PDF.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: theInvoicePreview,
      link: "https://the-invoice.netlify.app/",
    },
  ];
</script>

<section class="py-24 md:py-32 border-t border-neutral-900">
  <div class="section-container">
    <!-- Section Header -->
    <header class="mb-16 md:mb-20">
      <span
        class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block"
      >
        Selected Work
      </span>
      <h2 class="heading-primary">Projects</h2>
    </header>

    <!-- Projects Grid -->
    <div class="space-y-20">
      {#each projects as { title, description, stack, image, link }, index}
        <article class="group">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <!-- Image -->
            <div class="order-1 {index % 2 === 1 ? 'md:order-2' : ''}">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                class="block overflow-hidden rounded-lg"
              >
                <div
                  class="relative aspect-video overflow-hidden bg-neutral-900 rounded-lg"
                >
                  <img
                    src={image}
                    alt={title}
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"
                  ></div>
                </div>
              </a>
            </div>

            <!-- Content -->
            <div
              class="order-2 {index % 2 === 1 ? 'md:order-1' : ''} space-y-6"
            >
              <div class="space-y-4">
                <h3
                  class="heading-secondary group-hover:text-white transition-colors duration-300"
                >
                  {title}
                </h3>
                <p class="text-body">
                  {description}
                </p>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                {#each stack as tech}
                  <span
                    class="px-3 py-1 text-xs tracking-wide text-neutral-500 border border-neutral-800 rounded-full"
                  >
                    {tech}
                  </span>
                {/each}
              </div>

              <!-- Link -->
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group/link"
              >
                <span
                  class="w-8 h-px bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-white transition-all duration-300"
                ></span>
                View Project
                <svg
                  class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
