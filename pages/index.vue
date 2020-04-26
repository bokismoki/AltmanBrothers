<template>
  <div class="home">
    <HeroVideo />
    <AboutUs />
    <LuxuryRealEstate />
    <TvShow />
    <Spotlight />
    <Events />
    <Social />
    <ContactUs />
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
    ContactUs: () => import('~/components/ContactUs')
  }
}
</script>

<style scoped>
</style>
