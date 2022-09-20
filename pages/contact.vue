<template>
  <section class="relative">
    <ContentDoc path="/contact" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="flex flex-col md:flex-row site-padding w-full">
        <!-- Content -->

        <FadeUp class="crd left">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
        </FadeUp>
        <FadeUp class="flex gap-0 mx-auto w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.41072974254!2d153.0345296156378!3d-27.48759908288346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a153436b7a9%3A0xcdfddfba3e076fb5!2sFRED%20St%20pty%20ltd!5e0!3m2!1sen!2sid!4v1659878756581!5m2!1sen!2sid"
            width="100%"
            height="449"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </FadeUp>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'base',
});
useHead({
  title: 'Contact - Fred St.',
});
</script>
