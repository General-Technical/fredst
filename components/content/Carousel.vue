<template>
  <div :id="id" class="carousel slide relative z-20" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        :data-bs-target="target"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        v-if="src2"
        type="button"
        :data-bs-target="target"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        v-if="src3"
        type="button"
        :data-bs-target="target"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        v-if="src4"
        type="button"
        :data-bs-target="target"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        v-if="src5"
        type="button"
        :data-bs-target="target"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <!-- Slides -->
    <div class="carousel-inner relative w-full overflow-hidden aspect-video">
      <div class="carousel-item active">
        <img :src="src1" class="carousel-image mx-auto" alt="..." />
      </div>
      <div v-if="src2" class="carousel-item">
        <img :src="src2" class="carousel-image mx-auto" alt="..." />
      </div>
      <div v-if="src3" class="carousel-item">
        <img :src="src3" class="carousel-image mx-auto" alt="..." />
      </div>
      <div v-if="src4" class="carousel-item">
        <img :src="src4" class="carousel-image mx-auto" alt="..." />
      </div>
      <div v-if="src5" class="carousel-item">
        <img :src="src5" class="carousel-image mx-auto" alt="..." />
      </div>
    </div>
    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="target"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="target"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const slider = defineProps({
  id: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  src1: {
    type: String,
    required: true,
  },
  src2: {
    type: String,
    required: true,
  },
  src3: {
    type: String,
    required: true,
  },
  src4: {
    type: String,
    required: true,
  },
  src5: {
    type: String,
    required: true,
  },
});
</script>
