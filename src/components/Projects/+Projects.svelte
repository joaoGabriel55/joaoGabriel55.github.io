<script lang="ts">
  import theInvoicePreview from "../../lib/assets/projects/the_invoice.jpeg";
</script>

<div class="bg-app-color text-white flex flex-col gap-8 p-8">
  <h2 class="text-3xl font-semibold">My Projects</h2>
  <div class="grid md:flex gap-8">
    <img src={theInvoicePreview} alt="The Invoice Preview" class="md:w-1/2" />
    <article class="flex flex-col gap-4">
      <h3 class="text-xl font-semibold">The Invoice</h3>
      <p class="text-lg">
        Generate professional invoices in minutes. Enter your details, add line
        items, and export a polished PDF.
      </p>
      <p class="text-base">Stack: HTML, CSS, JavaScript</p>
      <a
        class="bg-blue-500 rounded-lg p-4 text-white w-fit font-semibold hover:bg-blue-600 transition-all hover:transition-all"
        href="https://the-invoice.netlify.app/"
        target="_blank"
      >
        Check It Out
      </a>
    </article>
  </div>
</div>
