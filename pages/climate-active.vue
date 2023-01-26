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
        <FadeUp class="crd">
          <FadeUp>
            <h1 class="page-title">{{ doc.title }}</h1>
            <Squares class="squares" />
            <ContentRenderer :value="doc" />
          </FadeUp>
        </FadeUp>
        <FadeUp class="secondary-content">
          <img :src="doc.logo" :alt="doc.title" class="aspect-auto" />
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
