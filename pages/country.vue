<template>
  <section class="relative">
    <ContentDoc path="/country" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <!-- Content -->
      <div class="container-mid">
        <div class="crd right fade-up">
          <FadeUp>
            <h1 class="page-title">{{ doc.title }}</h1>
            <Squares class="squares" />
          </FadeUp>
          <FadeUp>
            <ContentRenderer :value="doc" class="markdown" />
          </FadeUp>
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
