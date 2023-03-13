<template>
  <div class="flex flex-col">
    <div
      bgImage
      :style="{ backgroundImage: 'url(' + src + ')' }"
      class="aspect-square bg-cover mb-3 rounded bg-center"
    />
    <h4>{{ title1 }}<br />{{ title2 }}</h4>
    <div class="flex flex-col border-t pt-3">
      <div class="flex">
        <h5 class="font-light project-subhead">Sector:</h5>
        <h5 class="font-thin project-item">{{ sector }}</h5>
      </div>
      <div class="flex">
        <h5 class="font-light project-subhead">Services:</h5>
        <h5 class="font-thin project-item">{{ services }}</h5>
      </div>
    </div>
    <ContentRenderer class="markdown !prose-sm my-3" :value="description" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: false,
  },
  services: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});
</script>

<style>
.project-subhead {
  @apply w-1/5 sm:w-3/12 md:w-4/12 lg:w-2/6 xl:w-2/5 3xl:w-1/6;
}
.project-item {
  @apply w-4/5 sm:w-9/12 md:w-9/12 xl:w-3/4 lg:w-3/6 3xl:w-5/6;
}
</style>
