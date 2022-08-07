<template>
  <section class="justify-start mx-auto">
    <div class="projects-grid">
      <template
        :data="transport"
        v-for="project of transport"
        :key="project.slug"
      >
        <FadeUp class="flex flex-col flex-1 border p-3 shadow-lg">
          <NuxtLink :to="project._path">
            <div class="flex items-center mb-3">
              <Squares />
              <p class="mb-0 ml-auto">
                {{ project.sector }} {{ project.year }}
              </p>
            </div>
            <div
              bgImage
              :style="{ backgroundImage: 'url(' + project.image + ')' }"
              class="aspect-video bg-cover mb-2"
            />
            <h3 class="text-left mb-1">{{ project.title }}</h3>
            <p class="text-left">{{ project.description }}</p>
          </NuxtLink>
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: transport } = await useAsyncData("transport", () => {
  return queryContent("/projects")
    .where({ sector: "Transport" })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Transport - Fred St.",
});
</script>
