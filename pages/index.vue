<template>
  <div class="home">
    <img
      class="hidden fixed w-screen object-cover h-screen md:block"
      src="~/assets/img/gray-lines-bg.png"
      alt="Gray Lines Bg"
    />
    <div class="relative">
      <HeroVideo />
      <AboutUs />
      <LuxuryRealEstate />
      <TvShow />
      <Spotlight />
      <Events />
      <Social />
      <ContactUs />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo'),
    AboutUs: () => import('~/components/sections/AboutUs'),
    LuxuryRealEstate: () => import('~/components/sections/LuxuryRealEstate'),
    TvShow: () => import('~/components/sections/TvShow'),
    Spotlight: () => import('~/components/sections/Spotlight'),
    Events: () => import('~/components/sections/Events'),
    Social: () => import('~/components/sections/Social'),
    ContactUs: () => import('~/components/sections/ContactUs'),
    Footer: () => import('~/components/sections/Footer')
  }
}
</script>

<style scoped>
</style>
