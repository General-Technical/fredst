<template>
  <section class="justify-start p-6">
    <FadeUp>
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-left">{{ doc.title }}</h1>
        <h4 class="text-left">{{ doc.description }}</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <img :src="doc.image" alt="" />
            <img :src="doc.image" alt="" />
          </div>
          <ContentRenderer :value="doc" class="text-left" />
        </div>
      </ContentDoc>
    </FadeUp>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "projects",
});
useHead({
  title: "Projects - Fred St.",
});
</script>
