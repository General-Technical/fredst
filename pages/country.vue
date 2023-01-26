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
        <div class="crd right">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
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
