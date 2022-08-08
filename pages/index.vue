<template>
  <section class="relative">
    <ContentDoc path="/pages/home" v-slot="{ doc }">
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
        <h1 class="page-title" :class="doc.position">
          {{ doc.title }}
        </h1>
        <Squares class="squares" :class="doc.position" />
        <!-- Card -->
        <ContentRenderer
          :value="doc"
          class="content crd"
          :class="doc.position"
        />
      </FadeUp>
    </ContentDoc>
  </section>
</template>

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
