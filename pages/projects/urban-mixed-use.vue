<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="urban" v-for="project of urban" :key="project.slug">
        <FadeUp class="border-b">
          <Lightbox>
            <template v-slot:summary>
              <ProjectCard
                :src="project.image"
                :title="project.title"
                :sector="project.sector"
                :services="project.services"
                :description="project.description"
              />
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
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: urban } = await useAsyncData("urban", () => {
  return queryContent("/projects")
    .where({ sector: "Urban Mixed Use" })
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Urban Mixed Use - Fred St.",
});
</script>
