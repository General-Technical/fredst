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
        <div class="crd left">
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
  title: "Climate Active - Fred St.",
});
</script>
