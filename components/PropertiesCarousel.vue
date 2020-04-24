<template>
  <div class="properties-carousel relative container mx-auto">
    <client-only placeholder="Loading...">
      <swiper class="swiper mt-1" :options="swiperOption" :key="swiperOption.slidesPerView">
        <swiper-slide v-for="(property, index) in carousel" :key="index">
          <PropertyItem :property="property" />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'PropertiesCarousel',
  props: ['carousel'],
  components: {
    Swiper,
    SwiperSlide,
    PropertyItem: () => import('~/components/PropertyItem')
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 5,
        centeredSlides: true,
        speed: 1000,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>