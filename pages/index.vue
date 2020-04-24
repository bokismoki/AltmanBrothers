<template>
  <div class="home">
    <HeroVideo />
    <AboutUs />
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo'),
    AboutUs: () => import('~/components/AboutUs')
  }
}
</script>

<style scoped>
</style>
