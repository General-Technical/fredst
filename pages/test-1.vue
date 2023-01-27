<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="urban" v-for="project of urban" :key="project.slug">
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
            <h3 class="underlined-text mb-2">
              {{ project.title }}
            </h3>
            <ContentRenderer :value="project" />
            <!-- <Swiper>
              <ContentRenderer :value="project" class="swiper-wrapper" />
            </Swiper> -->
          </template>
        </Lightbox>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: urban } = await useAsyncData('urban', () => {
  return queryContent('/projects')
    .where({ sector: 'Urban Mixed Use' })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: 'projects',
});
useHead({
  title: 'Test - Fred St.',
});
</script>
