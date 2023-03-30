<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template :data="social" v-for="project of social" :key="project.slug">
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
const { data: social } = await useAsyncData("social", () => {
  return queryContent("/projects")
    .where({ sector: "Social Infrastructure" })
    .sort({ order: 1 })
    .find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Social Infrastructure - Fred St.",
});
</script>
