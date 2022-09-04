<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="parks" v-for="project of parks" :key="project.slug">
        <FadeUp class="flex flex-col flex-1 p-3">
          <NuxtLink :to="project._path">
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
          </NuxtLink>
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: parks } = await useAsyncData("parks", () => {
  return queryContent("/projects")
    .where({ sector: "Parks & Open Space" })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Parks & Open Space - Fred St.",
});
</script>
