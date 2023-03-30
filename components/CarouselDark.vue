<template>
  <div
    :id="id"
    class="carousel slide carousel-dark relative z-20 mt-4"
    data-te-ride="max-h-[70vh] top-8"
    data-te-carousel-init
    data-te-carousel-slide
  >
    <!-- Indicators -->
    <div
      class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-te-carousel-indicators
    >
      <button
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="0"
        data-te-carousel-active
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        v-if="src2"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="1"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 2"
      ></button>
      <button
        v-if="src3"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="2"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 3"
      ></button>
      <button
        v-if="src4"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="3"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 4"
      ></button>
      <button
        v-if="src5"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="4"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 5"
      ></button>
      <button
        v-if="src6"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="5"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 6"
      ></button>
      <button
        v-if="src7"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="6"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 7"
      ></button>
      <button
        v-if="src8"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide-to="7"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-second bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none pointer-events-none"
        aria-label="Slide 8"
      ></button>
    </div>
    <!-- Inner -->
    <div
      class="carousel-inner relative w-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      <!-- Single item -->
      <div
        v-if="src1"
        class="carousel-item"
        data-te-carousel-item
        data-te-carousel-active
      >
        <img :src="src1" class="carousel-image mx-auto" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src2" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src2" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src3" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src3" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src4" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src4" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src5" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src5" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src6" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src6" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src7" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src7" class="carousel-image" :alt="title" />
      </div>
      <!-- Single item -->
      <div v-if="src8" class="carousel-item hidden" data-te-carousel-item>
        <img :src="src8" class="carousel-image" :alt="title" />
      </div>
    </div>
    <!-- Inner -->
    <!-- Controls -->
    <button
      class="absolute top-0 bottom-0 left-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none sm:bg-second sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-te-target="'#' + id"
      data-te-slide="prev"
    >
      <span class="inline-block h-12 w-12 dark:grayscale dark:invert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          viewBox="0 0 512 512"
        >
          <path
            d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span
      >
    </button>
    <button
      class="absolute top-0 bottom-0 right-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none sm:bg-second sm:bg-opacity-0 sm:hover:bg-opacity-30 trans"
      type="button"
      :data-te-target="'#' + id"
      data-te-slide="next"
    >
      <span class="inline-block h-12 w-12 dark:grayscale dark:invert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          viewBox="0 0 512 512"
        >
          <path
            d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
            fill="currentColor"
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
  @apply relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none;
}
.carousel-image {
  @apply block w-auto mx-auto max-h-[70vh] rounded;
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
  src6: {
    type: String,
    required: false,
  },
  src7: {
    type: String,
    required: false,
  },
  src8: {
    type: String,
    required: false,
  },
});
</script>
