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
          <div class="grid grid-cols-2 gap-3 mt-6">
            <img :src="doc.image1" alt="" />
            <img :src="doc.image2" alt="" />
            <img :src="doc.image3" alt="" />
            <img :src="doc.image4" alt="" />
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
