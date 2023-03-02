<template>
  <div class="flex flex-col">
    <div
      bgImage
      :style="{ backgroundImage: 'url(' + src + ')' }"
      class="aspect-square bg-cover mb-2 rounded"
    />
    <h4>
      {{ title }}
    </h4>
    <div class="flex flex-col border-t pt-2">
      <div class="flex gap-2">
        <h5 class="font-medium">Sector:</h5>
        <h5 class="text-left">{{ sector }}</h5>
      </div>
      <div class="flex gap-2">
        <h5 class="font-medium">Services:</h5>
        <h5 class="text-left">{{ services }}</h5>
      </div>
    </div>
    <ContentRenderer class="markdown" :value="description" />
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
