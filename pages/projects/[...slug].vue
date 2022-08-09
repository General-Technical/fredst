<template>
  <section class="relative">
    <ContentDoc v-slot="{ doc }">
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
        <h1 class="page-title left w-4/6">
          {{ doc.title }}
        </h1>
        <Squares class="squares left" />
        <div class="content crd left">
          <h3>{{ doc.description }}</h3>
          <!-- Card -->
          <ContentRenderer :value="doc" />
          <div class="flex flex-col gap-3 mt-6">
            <div class="flex gap-3">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image1 + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image2 + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
            </div>
            <div class="flex gap-3">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image3 + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image4 + ')' }"
                class="aspect-video bg-cover w-1/2"
              />
            </div>
          </div>
        </div>
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "projects",
});
useHead({
  title: "Projects - Fred St.",
});
</script>
