<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template
        :data="residential"
        v-for="project of residential"
        :key="project.slug"
      >
        <FadeUp class="border-b">
          <Lightbox>
            <template v-slot:summary>
              <ProjectCard
                :src="project.image"
                :title1="project.title1"
                :title2="project.title2"
                :sector="project.sector"
                :services="project.services"
                :description="project"
              />
            </template>
            <template v-slot:details>
              <h4 class="underlined-text mb-2">
                {{ project.title }}
              </h4>
              <CarouselDark
                :title="project.title"
                :id="project.id"
                :src1="project.image"
                :src2="project.image1"
                :src3="project.image2"
                :src4="project.image3"
                :src5="project.image4"
                :src6="project.image5"
                :src7="project.image6"
                :src8="project.image7"
              />
            </template>
          </Lightbox>
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: residential } = await useAsyncData("residential", () => {
  return queryContent("/projects")
    .where({ sector: "Residential Development" })
    .sort({ order: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Residential Development - Fred St.",
});
</script>
