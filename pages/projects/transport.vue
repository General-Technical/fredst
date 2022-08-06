<template>
  <section class="justify-start mx-auto">
    <div class="grid grid-flow-row grid-cols-3 gap-3 p-4">
      <template
        :data="transport"
        v-for="project of transport"
        :key="project.slug"
      >
        <FadeUp class="flex flex-col flex-1 border p-3 shadow-lg">
          <NuxtLink :to="project._path" class="">
            <p>{{ project.sector }} {{ project.year }}</p>
            <div
              bgImage
              :style="{ backgroundImage: 'url(' + project.image + ')' }"
              class="aspect-video bg-cover mb-2"
            />
            <h3 class="mb-2">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
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
