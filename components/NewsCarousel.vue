<template>
  <div class="news-carousel">
    <client-only placeholder="Loading...">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="grid grid-cols-3 gap-3">
            <NewsItem v-for="(news, index) in slide" :key="index" :news="news" />
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'NewsCarousel',
  props: ['carousels'],
  components: {
    Swiper,
    SwiperSlide,
    NewsItem: () => import('~/components/NewsItem')
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
        }
      },
      slides: [
        [
          {
            logo: require('~/assets/img/billboard-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/cnbc-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/people-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/forbes-logo.png'),
            bgColor: 'bg-main-blue'
          },
          {
            logo: require('~/assets/img/weeklyus-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/hollywood-logo.png'),
            bgColor: 'bg-main-yellow-light'
          }
        ],
        [
          {
            logo: require('~/assets/img/tmz-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/trd-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/los-angeles-times-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/today-logo.png'),
            bgColor: 'bg-main-blue'
          },
          {
            logo: require('~/assets/img/nbc-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/bravo-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/everythin-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/maxim-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/tmz-logo.png'),
            bgColor: 'bg-main-blue'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
</style>