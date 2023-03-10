<template>
  <div class="flex flex-col">
    <div
      bgImage
      :style="{ backgroundImage: 'url(' + src + ')' }"
      class="aspect-square bg-cover mb-3 rounded bg-center"
    />
    <h4>
      {{ title }}
    </h4>
    <div class="flex flex-col border-t pt-3">
      <div class="flex gap-3">
        <h5 class="font-light">Sector:</h5>
        <h5 class="font-thin">{{ sector }}</h5>
      </div>
      <div class="flex gap-3">
        <h5 class="font-light">Services:</h5>
        <h5 class="font-thin">{{ services }}</h5>
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
  title: {
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
