<template>
  <section class="relative">
    <ContentDoc path="/climate" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="container-mid">
        <div class="crd fade-up">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" class="markdown" />
        </div>
        <div class="second-content md:row-start-1 md:col-start-1">
          <img :src="doc.logo" :alt="doc.title" class="aspect-auto mx-auto" />
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Climate Active - Fred St.",
});
</script>
