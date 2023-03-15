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
        <div class="crd fade-up 3xl:mt-96">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <div class="grid grid-cols-1 md:grid-cols-5 md:gap-4">
            <div class="md:col-span-2">
              <h3>FRED St PTY LTD</h3>
              <ContentRenderer :value="doc" class="markdown" />
            </div>
            <!-- <div class="col-span-3"> -->
            <img
              :src="doc.map"
              :alt="doc.title"
              class="w-full md:col-span-3 rounded"
            />
            <!-- </div> -->
          </div>
          <p class="mt-4">
            You can follow us on the following socials:
            <br />or find directions on maps:
          </p>
          <div class="flex gap-2 justify-start mt-4">
            <Fb class="sosmed fill-info" />
            <In class="sosmed fill-neutral" />
            <Ig class="sosmed fill-accent" />
            <a href="https://goo.gl/maps/3nH7r1nsZPgRuuVn6" target="_blank">
              <Pin class="sosmed fill-accent shadow-none" />
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
