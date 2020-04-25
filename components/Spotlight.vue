<template>
  <section class="spotlight lg:mt-20 lg:flex lg:items-center lg:mx-auto">
    <div class="relative lg:w-1/2">
      <img
        class="w-full max-w-sm sm:relative sm:-mb-5 lg:max-w-md lg:-mt-64"
        src="~/assets/img/spotlight-main-photo.jpg"
        alt="Altmans On Spotlight"
      />
    </div>
    <div
      class="news p-5 pb-64 sm:px-10 sm:h-64 lg:w-1/2 lg:pl-40 lg:relative"
      :style="{'background': `url(${bg}) center/cover no-repeat`}"
    >
      <div class="flex justify-start sm:mt-5 lg:-ml-20">
        <SectionNum class="text-white mt-0" num="04" title="Spotlight" />
      </div>
      <h1 class="uppercase font-medium text-white text-4xl lg:-ml-20">
        <span class="font-bold">As Seen</span>
        <span>On</span>
      </h1>
      <div class="absolute left-0 right-0 px-5 max-w-2xl mt-10 sm:px-10 lg:max-w-lg">
        <NewsCarousel />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Spotlight',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    NewsCarousel: () => import('~/components/NewsCarousel')
  },
  data() {
    return {
      bg: require('~/assets/img/spotlight-blacknwhite.jpg')
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .spotlight {
    max-width: 1100px;
  }
  .news::after {
    @apply block absolute bottom-0 bg-main-blue w-40;
    content: '';
    height: 9.4rem;
    left: -162px;
  }
}
</style>