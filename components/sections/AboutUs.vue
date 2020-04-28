<template>
  <section
    class="about-us px-5 lg:flex lg:flex-row-reverse lg:px-0 lg:pl-10 lg:items-start lg:pl-32"
  >
    <div class="lg:bg-main-blue lg:w-1/2 lg:pb-5 lg:pr-32">
      <img
        v-scrollanimation
        class="-mt-10 relative mx-auto lg:-ml-16 lg:-mt-5 md:max-w-xl xl:-mt-40 xl:max-w-2xl"
        src="~/assets/img/about-us-josh-matt-altman.png"
        alt="Josh & Matt Altman"
      />
    </div>
    <div v-scrollanimation class="lg:w-1/2 lg:self-center xl:max-w-3xl">
      <SectionNum num="01" title="About Us" />
      <h1 class="uppercase font-medium text-4xl leading-none mt-10 text-center lg:text-left">
        <span class="font-bold">The Altman</span>
        <br />Brothers
      </h1>
      <p
        class="mt-10 leading-tight opacity-75 max-w-2xl mx-auto lg:text-sm lg:pr-20 lg:mx-0 xl:text-base"
      >The Altman Brothers are among the top producing real estate agents in the country. Josh and Matt Altman managed to carve out a niche in the Los Angeles high end market. This includes staking claim to top tinsel town turf in the Platinum Triangle of Beverly Hills, Bel-Air, and Holmby Hills, and everywhere from Malibu to the Hollywood Hills and Downtown LA. Together they have seasoned experience and ability to foster solid relationships. The Altman Brothers are full-service real estate experts who strive to service the entire spectrum of exclusive clients Los Angeles has to offer. Altman clients are luxury buyers and high-end sellers: entertainers, professional athletes and high-net- worth individuals whose real estate holdings dot the globe, to clients with small family homes and short sale needs.</p>
      <div class="text-center lg:text-left">
        <CallToActionBtn text="Read More" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    CallToActionBtn: () => import('~/components/CallToActionBtn')
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .before-enter {
    @apply opacity-0 transition-all duration-1000;
    transform: translateY(500px);
  }
  .enter {
    @apply opacity-100;
    transform: translateY(0);
  }
}
</style>