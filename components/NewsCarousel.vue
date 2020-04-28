<template>
  <div class="news-carousel">
    <client-only placeholder="Loading...">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="grid grid-cols-3 gap-1">
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
            logo: require('~/assets/img/logos/billboard-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/logos/cnbc-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/logos/people-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/logos/forbes-logo.png'),
            bgColor: 'bg-main-blue'
          },
          {
            logo: require('~/assets/img/logos/weeklyus-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/logos/hollywood-logo.png'),
            bgColor: 'bg-main-yellow-light'
          }
        ],
        [
          {
            logo: require('~/assets/img/logos/tmz-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/logos/trd-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/logos/los-angeles-times-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/logos/today-logo.png'),
            bgColor: 'bg-main-blue'
          },
          {
            logo: require('~/assets/img/logos/nbc-logo.png'),
            bgColor: 'bg-gray-500'
          },
          {
            logo: require('~/assets/img/logos/bravo-logo.png'),
            bgColor: 'bg-white'
          },
          {
            logo: require('~/assets/img/logos/everythin-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/logos/maxim-logo.png'),
            bgColor: 'bg-main-yellow-light'
          },
          {
            logo: require('~/assets/img/logos/tmz-logo.png'),
            bgColor: 'bg-main-blue'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
.swiper-container-initialized {
  @apply overflow-hidden !important;
}
.swiper-wrapper {
  @apply flex !important;
}
</style>