<template>
  <section class="relative">
    <ContentDoc path="/about" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="container">
        <div class="crd left">
          <Squares class="squares" />
          <h1 class="page-title">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "About Us - Fred St.",
});
</script>
