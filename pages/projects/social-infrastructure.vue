<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="social" v-for="project of social" :key="project.slug">
        <Lightbox>
          <template v-slot:summary>
            <FadeUp class="flex flex-col flex-1">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + project.image + ')' }"
                class="aspect-video bg-cover mb-2"
              />
              <div class="project-title">
                {{ project.title }}
              </div>
              <div class="project-details">
                <div class="flex">
                  <h5 class="project-subtitle">Sector:</h5>
                  <h5 class="text-left w-2/3">{{ project.sector }}</h5>
                </div>
                <div class="flex">
                  <h5 class="project-subtitle">Services:</h5>
                  <h5 class="text-left w-2/3">{{ project.services }}</h5>
                </div>
              </div>
              <p>
                {{ project.description }}
              </p>
            </FadeUp>
          </template>
          <template v-slot:details>
            <div
              bgImage
              :style="{ backgroundImage: 'url(' + project.image + ')' }"
              class="aspect-video bg-cover mb-2"
            />
            <h3 class="underlined-text">
              {{ project.title }}
            </h3>
          </template>
        </Lightbox>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: social } = await useAsyncData("social", () => {
  return queryContent("/projects")
    .where({ sector: "Social Infrastructure" })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Social Infrastructure - Fred St.",
});
</script>
