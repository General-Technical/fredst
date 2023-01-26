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
    <div class="flex flex-col border-t pt-2 pb-1 mb-2">
      <div class="flex">
        <h5 class="font-medium w-20">Sector:</h5>
        <h5 class="text-left">{{ sector }}</h5>
      </div>
      <div class="flex">
        <h5 class="font-medium w-20">Services:</h5>
        <h5>{{ services }}</h5>
      </div>
    </div>
    <p>
      {{ description }}
    </p>
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
