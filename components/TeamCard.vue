<template>
  <div class="flex flex-col h-full border-b">
    <div
      bgImage
      :style="{ backgroundImage: 'url(' + src + ')' }"
      class="aspect-square bg-cover mb-3 rounded bg-center"
    />
    <h4 class="underlined-text">
      {{ name }}
    </h4>
    <h5 class="text-lg">
      {{ role }}
    </h5>
    <h5 class="font-thin text-lg">
      {{ description }}
    </h5>
    <ContentRenderer :value="body" class="markdown" />
  </div>
</template>

<script setup lang="ts">
const teamprops = defineProps({
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
});
</script>
