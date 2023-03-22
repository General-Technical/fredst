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
        <div class="second-content-low left">
          <h1 class="md:text-6xl md:leading-[5rem] 3xl:text-8xl">
            {{ doc.title }}
          </h1>
        </div>
        <div class="crd right fade-up">
          <Squares class="squares" />
          <ContentRenderer :value="doc" class="markdown" />
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
