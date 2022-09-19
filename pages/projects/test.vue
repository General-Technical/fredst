<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template
        :data="transport"
        v-for="project of transport"
        :key="project.slug"
      >
        <Lightbox>
          <template v-slot:summary>
            <FadeUp class="flex flex-col flex-1">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + project.image + ')' }"
                class="aspect-video bg-cover mb-2"
              />
              <h3 class="underlined-text">
                {{ project.title }}
              </h3>
              <div class="flex flex-col mt-3">
                <div class="flex">
                  <h5 class="text-left font-bold w-1/3">Sector:</h5>
                  <h5 class="text-left w-2/3">{{ project.sector }}</h5>
                </div>
                <div class="flex">
                  <h5 class="text-left font-bold w-1/3">Services:</h5>
                  <h5 class="text-left w-2/3">{{ project.services }}</h5>
                </div>
              </div>
              <p class="underlined-text">
                {{ project.description }}
              </p>
            </FadeUp>
          </template>
          <template v-slot:details>
            <h3 class="underlined-text mb-4">
              {{ project.title }}
            </h3>
            <Carousel>
              <template v-slot:slides>
                <div
                  bgImage
                  :style="{ backgroundImage: 'url(' + project.image + ')' }"
                  class="carousel-img aspect-video bg-cover bg-center mb-2"
                />
                <div
                  bgImage
                  :style="{ backgroundImage: 'url(' + project.image1 + ')' }"
                  class="carousel-img aspect-video bg-cover bg-center mb-2"
                />
                <div
                  bgImage
                  :style="{ backgroundImage: 'url(' + project.image2 + ')' }"
                  class="carousel-img aspect-video bg-cover bg-center mb-2"
                />
                <div
                  bgImage
                  :style="{ backgroundImage: 'url(' + project.image3 + ')' }"
                  class="carousel-img aspect-video bg-cover bg-center mb-2"
                />
                <div
                  bgImage
                  :style="{ backgroundImage: 'url(' + project.image4 + ')' }"
                  class="carousel-img aspect-video bg-cover bg-center mb-2"
                />
              </template>
            </Carousel>
          </template>
        </Lightbox>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: transport } = await useAsyncData('transport', () => {
  return queryContent('/projects')
    .where({ sector: 'Transport Infrastructure' })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: 'projects',
});
useHead({
  title: 'Test',
});
</script>

<style scoped>
.carousel-img {
  width: 100%;

  object-fit: cover;
}
</style>
