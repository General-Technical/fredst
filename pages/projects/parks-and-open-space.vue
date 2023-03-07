<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="parks" v-for="project of parks" :key="project.slug">
        <FadeUp class="border-b">
          <Lightbox>
            <template v-slot:summary>
              <ProjectCard
                :src="project.image"
                :title="project.title"
                :sector="project.sector"
                :services="project.services"
                :description="project"
              />
            </template>
            <template v-slot:details>
              <h1 class="underlined-text mb-2">
                {{ project.title }}
              </h1>
              <CarouselDark
                :title="project.title"
                :id="project.id"
                :src1="project.image"
                :src2="project.image1"
                :src3="project.image2"
                :src4="project.image3"
                :src5="project.image4"
              />
            </template>
          </Lightbox>
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: parks } = await useAsyncData("parks", () => {
  return queryContent("/projects")
    .where({ sector: "Parks & Open Space" })
    .sort({ order: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Parks & Open Space - Fred St.",
});
</script>
