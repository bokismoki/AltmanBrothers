<template>
  <section class="tv-show container mx-auto mt-10">
    <div class="px-5 relative">
      <div class="flex justify-center">
        <SectionNum num="03" title="Tv Show" />
      </div>
      <div class="gold relative w-64 mt-5 mx-auto">
        <img src="~/assets/img/million-dollar-listing-la-logo.png" alt="Million Dolar Listing Logo" />
      </div>
      <div class="max-w-2xl mx-auto">
        <div class="relative cursor-pointer">
          <img
            class="border-4 border-black mt-10"
            src="~/assets/img/video-play-placeholder.jpg"
            alt="Video Play Placeholder Image"
          />
          <PlayIcon class="play-icon absolute w-20 h-20" fill="#fff" />
        </div>
        <p
          class="mt-10 leading-tight opacity-75"
        >Million Dollar Listing follows the lives of three of Los Angeles’ hottest, young, and aggressive real estate magnates as they make a fortune selling multi-million dollar properties in the most exclusive neighborhoods- Hollywood, Malibu and Beverly Hills.</p>
        <div class="gold-2 relative text-center md:text-left">
          <CallToActionBtn text="Learn More" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TvShow',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    CallToActionBtn: () => import('~/components/CallToActionBtn'),
    PlayIcon: () => import('~/assets/img/play-icon.svg')
  }
}
</script>

<style scoped>
.play-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 1024px) {
  .gold::before,
  .gold::after {
    @apply inline-block bg-main-yellow-light absolute;
    content: '';
    top: 50%;
    left: -120%;
  }
  .gold::before {
    @apply w-64 h-3 mr-10;
  }
  .gold::after {
    @apply w-3;
    height: 420%;
  }
  .gold-2::after {
    @apply inline-block bg-main-yellow-light absolute h-3 w-4/5;
    content: '';
    right: -15%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>