<template>
  <section class="relative">
    <ContentDoc v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image left"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image left" />
      <!-- Content -->
      <FadeUp>
        <h1 class="page-title left w-4/6">
          {{ doc.title }}
        </h1>
        <Squares class="squares left" />
        <div class="content crd left">
          <h3>{{ doc.description }}</h3>
          <!-- Card -->
          <ContentRenderer :value="doc" />
          <div class="flex flex-col gap-3 mt-6">
            <div class="flex gap-3">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
            </div>
            <div class="flex gap-3">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
            </div>
          </div>
        </div>
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "projects",
});
useHead({
  title: "Projects - Fred St.",
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
</style>
