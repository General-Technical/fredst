<template>
  <section class="relative">
    <ContentDoc path="/contact" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image left"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image left" />
      <!-- Content -->
      <FadeUp>
        <NuxtLink to="/company">
          <img
            src="/assets/FredSt_Logo_Header.jpg"
            class="h-32 md:h-20 p-0 m-0 site-padding mx-auto"
            alt=""
          />
          <button class="w-full mx-auto mt-4"><h2>Enter</h2></button>
        </NuxtLink>
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});
useHead({
  title: "Contact - Fred St.",
});
</script>
