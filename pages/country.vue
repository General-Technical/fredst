<template>
  <section class="relative">
    <ContentDoc path="/country" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="container-mid">
        <div class="crd right fade-up 3xl:mt-96">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" class="markdown" />
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Country - Fred St.",
});
</script>
