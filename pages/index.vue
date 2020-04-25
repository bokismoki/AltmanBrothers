<template>
  <div class="home">
    <HeroVideo />
    <AboutUs />
    <LuxuryRealEstate />
    <TvShow />
    <Spotlight />
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo'),
    AboutUs: () => import('~/components/AboutUs'),
    LuxuryRealEstate: () => import('~/components/LuxuryRealEstate'),
    TvShow: () => import('~/components/TvShow'),
    Spotlight: () => import('~/components/Spotlight')
  }
}
</script>

<style scoped>
</style>
