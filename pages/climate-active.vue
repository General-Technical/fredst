<template>
  <section class="relative">
    <ContentDoc path="/climate" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <!-- Content -->
      <div class="container-mid">
        <div class="crd left">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
        </div>
        <div class="pt-[80vh] w-2/5">
          <img :src="doc.logo" :alt="doc.title" class="aspect-auto" />
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
