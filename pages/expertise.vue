<template>
  <section class="relative">
    <ContentDoc path="/expertise" v-slot="{ doc }">
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
        <h1 class="page-title left">
          {{ doc.title }}
        </h1>
        <Squares class="squares left" />
        <!-- Card -->
        <ContentRenderer :value="doc" class="content crd left" />
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Expertise - Fred St.",
});
</script>
