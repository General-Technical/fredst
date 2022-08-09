<template>
  <section class="relative">
    <ContentDoc path="/about" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image right"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image right" />
      <!-- Content -->
      <FadeUp>
        <h1 class="page-title right">
          {{ doc.title }}
        </h1>
        <Squares class="squares right" />
        <!-- Card -->
        <ContentRenderer :value="doc" class="content crd right" />
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "About - Fred St.",
});
</script>
