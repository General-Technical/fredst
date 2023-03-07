<template>
  <div
    :id="id"
    class="carousel slide carousel-dark relative z-20 mt-4"
    data-te-ride="max-h-[70vh] top-8"
    data-te-carousel-init
    data-te-carousel-slide
  >
    <!-- Indicators -->
    <!-- Indicators -->
    <div class="carousel-indicators flex justify-center p-0 z-50 mt-10 sm:mt-0">
      <button
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="0"
        class="active"
        aria-current="false"
        aria-label="Slide 1"
      ></button>
      <button
        v-if="src2"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        v-if="src3"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        v-if="src4"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        v-if="src5"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <!-- Inner -->
    <div class="carousel-inner relative w-full overflow-hidden">
      <!-- Single item -->
      <div
        v-if="src1"
        class="carousel-item"
        data-te-carousel-fade
        data-te-carousel-item
        data-te-carousel-active
      >
        <img :src="src1" class="carousel-image mx-auto" :alt="title" />
      </div>
      <!-- Single item -->
      <div
        v-if="src2"
        class="carousel-item hidden"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <img :src="src2" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div
        v-if="src3"
        class="carousel-item hidden"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <img :src="src3" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div
        v-if="src4"
        class="carousel-item hidden"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <img :src="src4" class="carousel-image" :alt="title" />
      </div>
    </div>
    <!-- Inner -->
    <!-- Controls -->
    <button
      class="absolute top-0 bottom-0 left-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none pr-1 sm:bg-second sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-te-target="'#' + id"
      data-te-slide="prev"
    >
      <span class="inline-block h-8 w-8 dark:grayscale dark:invert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span
      >
    </button>
    <button
      class="absolute top-0 bottom-0 right-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none pl-1 sm:bg-second sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-te-target="'#' + id"
      data-te-slide="next"
    >
      <span class="inline-block h-8 w-8 dark:grayscale dark:invert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next</span
      >
    </button>
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
