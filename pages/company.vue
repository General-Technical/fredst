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
      <div class="site-padding">
        <FadeUp class="crd left">
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
  title: 'Company - Fred St.',
});
</script>
