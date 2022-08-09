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
          {{ doc.name }}
        </h1>
        <Squares class="squares left" />
        <!-- Card -->
        <div class="content crd left grid grid-cols-2 gap-3">
          <div>
            <h3>{{ doc.description }}</h3>
            <ContentRenderer :value="doc" />
          </div>
          <div
            bgImage
            :style="{ backgroundImage: 'url(' + doc.image + ')' }"
            class="aspect-[3/4] bg-cover w-full"
          />
        </div>
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Team - Fred St.",
});
</script>
