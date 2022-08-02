<template>
  <div :data="home" v-for="home of home" :key="home.slug" :id="home.id">
    <section class="relative">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + home.image + ')' }"
        class="hero-image shadow-xl"
        :class="home.position"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image" :class="home.position" />
      <!-- Card / Content -->
      <FadeUp>
        <h1 class="w-2/6 lg:w-1/6 mb-4" :class="home.position">
          {{ home.title }}
        </h1>
        <div class="card content py-6 m-0 w-2/3 z-50" :class="home.position">
          <ContentRenderer :value="home" />
        </div>
      </FadeUp>
    </section>
  </div>
</template>

<script setup>
const { data: home } = await useAsyncData("home", () =>
  queryContent("/pages/home").sort({ section: 1 }).find()
);
</script>

<style scoped>
.left {
  @apply ml-6 mr-auto right-6 bg-gradient-to-r from-secondary via-transparent to-transparent rounded-tl-full pr-8;
}
.content.left {
  @apply rounded-xl bg-gradient-to-l from-secondary to-transparent pl-0;
}
h1.left {
  @apply ml-0 mr-auto right-6 bg-none;
}
.right {
  @apply mr-6 ml-auto left-6 bg-gradient-to-l from-secondary via-transparent to-transparent rounded-tr-full;
}
.content.right {
  @apply rounded-xl bg-gradient-to-r from-secondary to-transparent pr-0 pl-8;
}
h1.right {
  @apply mr-0 ml-auto left-6 bg-none text-right;
}
.full-span {
  @apply col-span-2;
}
</style>
