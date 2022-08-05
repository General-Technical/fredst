<template>
  <section class="relative">
    <ContentDoc path="/home/about" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
        :class="doc.position"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image" :class="doc.position" />
      <!-- Content -->
      <FadeUp>
        <h1 class="w-2/6 lg:w-1/6 mb-4" :class="doc.position">
          {{ doc.title }}
        </h1>
        <Squares class="squares" :class="doc.position" />
        <!-- Card -->
        <ContentRenderer
          :value="doc"
          class="content p-6 border shadow-xl w-2/3 z-50"
          :class="doc.position"
        />
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "About - Fred St.",
});
</script>

<style scoped>
.left {
  @apply right-0 bg-gradient-to-r from-secondary via-transparent to-transparent;
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
  @apply ml-auto left-0 bg-gradient-to-l from-secondary via-transparent to-transparent border-l-0;
}
h1.right {
  @apply ml-auto mr-6 bg-none text-right;
}
.squares.right {
  @apply justify-end mr-6 mb-6 bg-none;
}
.content.right {
  @apply bg-gradient-to-r from-secondary to-transparent border-l border-r-0;
}
.full-span {
  @apply col-span-2;
}
</style>
