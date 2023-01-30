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
        <FadeUp class="crd right">
          <FadeUp>
            <h1 class="page-title">{{ doc.title }}</h1>
            <Squares class="squares" />
            <ContentRenderer :value="doc" class="markdown" />
          </FadeUp>
        </FadeUp>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Country - Fred St.",
});
</script>
