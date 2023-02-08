<template>
  <div
    :id="id"
    class="carousel slide carousel-dark relative z-20 mt-4"
    data-bs-ride="max-h-[70vh] top-8"
  >
    <!-- Inner -->
    <div class="carousel-inner relative w-full overflow-hidden">
      <div v-if="src1" class="carousel-item active">
        <img :src="src1" class="carousel-image mx-auto" :alt="title" />
      </div>
      <div v-if="src2" class="carousel-item">
        <img :src="src2" class="carousel-image" :alt="title" />
      </div>
      <div v-if="src3" class="carousel-item">
        <img :src="src3" class="carousel-image" :alt="title" />
      </div>
      <div v-if="src4" class="carousel-item">
        <img :src="src4" class="carousel-image" :alt="title" />
      </div>
      <div v-if="src5" class="carousel-item">
        <img :src="src5" class="carousel-image" :alt="title" />
      </div>
    </div>
    <!-- Controls -->
    <button
      class="absolute top-56 sm:top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline pr-1 sm:bg-secondary sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-bs-target="'#' + id"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="false"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="absolute top-56 sm:top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 pl-1 sm:bg-secondary sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-bs-target="'#' + id"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="false"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!-- Indicators -->
    <div class="carousel-indicators flex justify-center p-0 z-50 mt-10 sm:mt-0">
      <button
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide-to="0"
        class="active"
        aria-current="false"
        aria-label="Slide 1"
      ></button>
      <button
        v-if="src2"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        v-if="src3"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        v-if="src4"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        v-if="src5"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  @apply relative float-left w-full;
}
.carousel-image {
  @apply block w-auto max-h-[70vh] rounded mx-auto;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  @apply h-8 w-8 sm:h-10 sm:w-10;
}
</style>

<script setup lang="ts">
const carouseldark = defineProps({
  title: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  src1: {
    type: String,
    required: false,
  },
  src2: {
    type: String,
    required: false,
  },
  src3: {
    type: String,
    required: false,
  },
  src4: {
    type: String,
    required: false,
  },
  src5: {
    type: String,
    required: false,
  },
});
</script>
