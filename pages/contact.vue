<template>
  <section
    class="relative border-t justify-start items-start mx-auto py-4"
  ></section>
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
.right {
  @apply ml-auto left-0 bg-gradient-to-l from-secondary to-transparent border-l-0;
}
h1.right {
  @apply ml-auto mr-6 bg-none text-right;
}
.squares.right {
  @apply justify-end mr-6 mb-6 bg-none;
}
.content.right {
  @apply bg-gradient-to-r from-secondary to-transparent border-l-0 sm:border-l border-r-0;
}
.full-span {
  @apply col-span-2;
}
</style>
