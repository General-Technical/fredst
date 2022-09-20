<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div class="swiper-wrapper">
      <slot name="slides" />
    </div>
    <!-- <swiper-slide class="px-0 py-8 md:px-10"
      ><slot name="slide0"
    /></swiper-slide>
    <swiper-slide class="px-0 py-8 md:px-10"
      ><slot name="slide1"
    /></swiper-slide>
    <swiper-slide class="px-0 py-8 md:px-10"
      ><slot name="slide2"
    /></swiper-slide>
    <swiper-slide class="px-0 py-8 md:px-10"
      ><slot name="slide3"
    /></swiper-slide>
    <swiper-slide class="px-0 py-8 md:px-10"
      ><slot name="slide4"
    /></swiper-slide> -->
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>
