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
      <div class="site-padding pt-28">
        <FadeUp class="crd right">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
        </FadeUp>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Climate Active - Fred St.",
});
</script>
