<template>
  <div class="home">
    <HeroVideo />
    <AboutUs />
    <LuxuryRealEstate />
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo'),
    AboutUs: () => import('~/components/AboutUs'),
    LuxuryRealEstate: () => import('~/components/LuxuryRealEstate')
  }
}
</script>

<style scoped>
</style>
