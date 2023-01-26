<template>
  <section class="justify-start">
    <div class="site-padding pt-28 w-full flex flex-col gap-4">
      <div class="nav-item">Nav Item</div>
      <div class="secondary-nav-item">Secondary Nav Item</div>
      <h1>h1 - Page Title</h1>
      <h2>h2 - Services/Sectors Titles</h2>
      <h3>h3 - Services/Sectors</h3>
      <h4>h4 - Project Card Titles, Team Card Names</h4>
      <h5 class="font-medium">
        h5 Medium - Project Card Sectors/Services Title, Team Card Role
      </h5>
      <h5>h5 - Project Card Sectors/Services, Team Card Description</h5>
      <p>
        Paragraph - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur minus eos fuga voluptas odio! Obcaecati pariatur, praesentium
        neque ex eligendi ad modi rem animi corrupti vero quod deserunt
        voluptates dolor!
      </p>
      <div class="grid grid-cols-2 gap-8 pb-44">
        <div>
          <h4 class="mb-4">Project Card</h4>
          <template
            :data="projects"
            v-for="project of projects"
            :key="project.slug"
          >
            <ProjectCard
              :src="project.image"
              :title="project.title"
              :sector="project.sector"
              :services="project.services"
              :description="project.description"
              class="border-b"
            />
          </template>
        </div>
        <div>
          <h4 class="mb-4">Team Card</h4>
          <template :data="people" v-for="person of people" :key="person.slug">
            <TeamCard
              :src="person.image"
              :name="person.name"
              :role="person.role"
              :description="person.description"
              :body="person"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () => {
  return queryContent("/projects/koko-apartments")
    .sort({ year: -1 })
    .sort({ sector: 1 })
    .find();
});

const { data: people } = await useAsyncData("people", () => {
  return queryContent(
    "/people/map-name-tessa-leggo-role-director-description-outright-legend-body-image-images-tessa-jpg"
  ).find();
});

definePageMeta({
  layout: "base",
});
useHead({
  title: "Styles - Fred St.",
});
</script>
