<template>
  <section class="relative">
    <ContentDoc path="/company" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <!-- Content -->
      <div class="container">
        <FadeUp class="secondary-content-low left">
          <h1>{{ doc.title }}</h1>
        </FadeUp>
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
