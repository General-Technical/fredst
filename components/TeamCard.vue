<template>
  <div class="flex flex-col h-full border-b">
    <div
      bgImage
      :style="{ backgroundImage: 'url(' + src + ')' }"
      class="aspect-square bg-cover mb-2 rounded"
    />
    <h4 class="underlined-text mb-3">
      {{ name }}
    </h4>
    <h5 class="font-medium">
      {{ role }}
    </h5>
    <h5>
      {{ description }}
    </h5>
    <ContentRenderer :value="body" class="mt-2" />
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
