<template>
  <section class="relative items-start">
    <ContentDoc path="contact" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
        :class="doc.position"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image" :class="doc.position" />
      <!-- Content -->
      <FadeUp>
        <h1 class="page-title" :class="doc.position">
          {{ doc.title }}
        </h1>
        <Squares class="squares" :class="doc.position" />
        <!-- Card -->
        <ContentRenderer :value="doc" class="ml-6 mb-6" />
        <div class="flex gap-1 mb-10 ml-6">
          <Fb class="sosmed fill-info" />
          <In class="sosmed fill-neutral" />
        </div>
      </FadeUp>
    </ContentDoc>
    <FadeUp class="flex gap-3 mx-auto w-full">
      <div class="border border-l-0 h-fit w-1/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.41072974254!2d153.0345296156378!3d-27.48759908288346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a153436b7a9%3A0xcdfddfba3e076fb5!2sFRED%20St%20pty%20ltd!5e0!3m2!1sen!2sid!4v1659878756581!5m2!1sen!2sid"
          width="100%"
          height="449"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        class="content crd right ml-auto border border-r-0 h-fit w-2/3 p-4 py-6"
      >
        <iframe
          src="https://www.cognitoforms.com/f/6Ax0zmUI6UeB6_7JUBHcjA/19"
          style="border: 0; width: 800px"
          height="400"
          class="flex justify-center w-full mx-auto"
        >
        </iframe>
      </div>
    </FadeUp>
  </section>
</template>

<script setup>
useHead({
  title: "Contact - Fred St.",
});
</script>

<style scoped>
.left {
  @apply right-0 bg-gradient-to-r from-secondary to-transparent;
}
h1.left {
  @apply ml-6 bg-none;
}
.squares.left {
  @apply ml-6 mb-6 bg-none;
}
.content.left {
  @apply bg-gradient-to-l from-secondary to-transparent border-l-0;
}
.right {
  @apply ml-auto left-0 bg-gradient-to-l from-secondary to-transparent border-l-0;
}
h1.right {
  @apply ml-auto mr-6 bg-none text-right;
}
.squares.right {
  @apply justify-end mr-6 mb-6 bg-none;
}
.content.right {
  @apply bg-gradient-to-r from-secondary to-transparent border-l-0 sm:border-l border-r-0;
}
</style>
