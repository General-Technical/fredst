<template>
  <section class="relative">
    <ContentDoc path="/contact" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-20 sm:mt-16"
      />
      <!-- Content -->
      <div class="container-mid">
        <!-- Content -->
        <div class="crd fade-up">
          <div class="flex flex-col md:flex-row">
            <div>
              <h1 class="page-title">{{ doc.title }}</h1>
              <Squares class="squares" />
              <ContentRenderer :value="doc" class="markdown" />
            </div>
            <div>
              <img :src="doc.map" :alt="doc.title" class="aspect-auto" />
            </div>
          </div>
          <div class="flex gap-2 justify-start mt-8">
            <Fb class="sosmed fill-info" />
            <In class="sosmed fill-neutral" />
            <Ig class="sosmed fill-accent" />
            <a
              href="https://goo.gl/maps/3nH7r1nsZPgRuuVn6"
              target="_blank"
              class="ml-auto"
            >
              <Pin class="sosmed fill-accent" />
            </a>
          </div>
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
useHead({
  title: "Contact - Fred St.",
});
</script>
