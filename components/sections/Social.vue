<template>
  <section class="social mt-56 relative mx-auto py-10 md:flex xl:mt-64">
    <div
      class="absolute w-56 -mt-40 sm:w-64 sm:-mt-48 md:relative md:self-start md:-mt-20 md:-mr-10 md:w-2/5"
    >
      <img
        class="hidden absolute ml-20 top-0 boatImg md:inline-block lg:ml-24 xl:ml-32"
        :src="boatBg"
        alt="Boat Background"
      />
      <img
        class="relative z-20"
        src="~/assets/img/were-social-main-photo.jpg"
        alt="Were Social Main Photo"
      />
    </div>
    <div
      v-scrollanimation
      class="px-5 relative z-10 bg-main-blue py-10 md:px-10 md:w-3/5 lg:px-20"
      :style="{'background': `url(${dogBg})`}"
    >
      <div class="px-5">
        <div class="text-white flex justify-start">
          <SectionNum num="06" title="Social" />
        </div>
        <h1 class="uppercase font-medium text-4xl leading-none text-white">
          <span class="font-bold">We're</span>
          <br class="sm:hidden" />Social
        </h1>
        <p
          class="mt-10 leading-tight opacity-75 text-white"
        >Follow us on social media for the most exclusive real estate news and photos from our amazing listings</p>
      </div>
      <SocialGrid v-scrollanimation />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Social',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    SocialGrid: () => import('~/components/SocialGrid')
  },
  data() {
    return {
      dogBg: require('~/assets/img/were-social-with-dog.jpg'),
      boatBg: require('~/assets/img/were-social-boat-photo.jpg')
    }
  }
}
</script>

<style scoped>
.social {
  max-width: 1280px;
}
.boatImg {
  height: 125%;
}
@media (min-width: 1024px) {
  .before-enter {
    @apply opacity-0 transition-all duration-1000;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
  }

  .enter {
    @apply opacity-100;
    transform: rotateY(0deg);
  }
}
</style>