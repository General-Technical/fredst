<template>
  <section class="relative">
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
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h1 class="page-title">
                {{ doc.name }}
              </h1>
              <Squares class="squares" />
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
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "Team - Fred St.",
});
</script>
