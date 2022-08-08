<template>
  <section class="relative border-t justify-start items-start mx-auto py-4">
    <FadeUp class="flex gap-3 mx-auto w-full">
      <div class="border border-l-0 h-fit w-1/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.41072974254!2d153.0345296156378!3d-27.48759908288346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a153436b7a9%3A0xcdfddfba3e076fb5!2sFRED%20St%20pty%20ltd!5e0!3m2!1sen!2sid!4v1659878756581!5m2!1sen!2sid"
          width="100%"
          height="432"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="content crd right ml-auto border border-r-0 h-fit w-2/3 p-4">
        <iframe
          src="https://www.cognitoforms.com/f/6Ax0zmUI6UeB6_7JUBHcjA/19"
          style="border: 0; width: 800px"
          height="400"
          class="flex justify-center w-full mx-auto"
        >
        </iframe>
      </div>
    </FadeUp>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "contact",
});
useHead({
  title: "Contact - Fred St.",
});
</script>

<style scoped>
.left {
  @apply right-0 bg-gradient-to-r from-secondary to-transparent;
}
h1.left {
  @apply ml-6 bg-none;
}
.squares.left {
  @apply ml-6 mb-6 bg-none;
}
.content.left {
  @apply bg-gradient-to-l from-secondary to-transparent border-l-0;
}
</style>
