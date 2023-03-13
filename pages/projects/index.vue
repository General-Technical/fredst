<template>
  <section class="justify-start">
    <div class="projects-grid site-padding">
      <template
        :data="projects"
        v-for="project of projects"
        :key="project.slug"
      >
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
              <h4 class="underlined-text mb-2">
                {{ project.title }}
              </h4>
              <!-- Blah -->
              <CarouselDark
                :title="project.title"
                :id="project.id"
                :src1="project.image"
                :src2="project.image1"
                :src3="project.image2"
                :src4="project.image3"
                :src5="project.image4"
              />
              <!-- /Blah -->
            </template>
          </Lightbox>
        </FadeUp>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () => {
  return queryContent("/projects").sort({ order: 1 }).find();
});

definePageMeta({
  layout: "projects",
});
useHead({
  title: "Projects - Fred St.",
});
</script>
