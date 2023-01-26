<template>
  <section class="relative">
    <ContentDoc path="/company" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="container">
        <h1 class="page-title-lrg">{{ doc.title }}</h1>
        <div class="crd right">
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Company - Fred St.",
});
</script>
