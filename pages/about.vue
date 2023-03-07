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
        <div class="crd fade-up">
          <Squares class="squares" />
          <h1 class="page-title">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" class="markdown" />
        </div>
        <div class="second-content-low md:text-right">
          <FadeUp>
            <ContentDoc path="/services" />
          </FadeUp>
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
