<template>
  <SwiperSlide class="px-10 py-8">
    <slot />
  </SwiperSlide>
</template>

<script>
// Import Swiper Vue.js components
import { SwiperSlide } from 'swiper/vue';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
// import { Navigation } from 'swiper';
// import { Pagination } from 'swiper';

export default {
  components: {
    SwiperSlide,
  },
  // setup() {
  //   return {
  //     modules: [Navigation, Pagination],
  //   };
  // },
};
</script>
