<template>
  <div class="home">
    <img
      class="hidden fixed w-screen h-screen md:block"
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
    AboutUs: () => import('~/components/AboutUs'),
    LuxuryRealEstate: () => import('~/components/LuxuryRealEstate'),
    TvShow: () => import('~/components/TvShow'),
    Spotlight: () => import('~/components/Spotlight'),
    Events: () => import('~/components/Events'),
    Social: () => import('~/components/Social'),
    ContactUs: () => import('~/components/ContactUs'),
    Footer: () => import('~/components/Footer')
  }
}
</script>

<style scoped>
</style>
