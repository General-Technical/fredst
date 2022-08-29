<template>
  <section class="relative items-start pt-32">
    <ContentDoc v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image left bg-cover"
      />
      <!-- Content -->
      <div class="site-padding">
        <!-- Card -->
        <FadeUp class="content crd left">
          <h1 class="page-title w-full underlined-text">
            {{ doc.title }}
          </h1>
          <div class="flex flex-col mt-3">
            <div class="flex">
              <h5 class="text-left font-bold w-1/6">Sector:</h5>
              <h5 class="text-left w-5/6">{{ doc.sector }}</h5>
            </div>
            <div class="flex">
              <h5 class="text-left font-bold w-1/6">Services:</h5>
              <h5 class="text-left w-5/6">{{ doc.services }}</h5>
            </div>
          </div>
          <p class="underlined-text">
            {{ doc.description }}
          </p>
          <!-- Card -->
          <ContentRenderer :value="doc" />
          <div class="grid grid-cols-2 gap-3 mt-6">
            <img :src="doc.image1" />
            <img :src="doc.image2" />
            <img :src="doc.image3" />
            <img :src="doc.image4" />
          </div>
        </FadeUp>
      </div>
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
