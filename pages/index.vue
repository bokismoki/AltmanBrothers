<template>
  <div class="home">
    <HeroVideo />
    <AboutUs />
    <LuxuryRealEstate />
    <TvShow />
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo'),
    AboutUs: () => import('~/components/AboutUs'),
    LuxuryRealEstate: () => import('~/components/LuxuryRealEstate'),
    TvShow: () => import('~/components/TvShow')
  }
}
</script>

<style scoped>
</style>
