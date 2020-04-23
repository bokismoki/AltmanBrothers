<template>
  <div class="home">
    <HeroVideo />
  </div>
</template>

<script>
export default {
  components: {
    HeroVideo: () => import('~/components/HeroVideo')
  }
}
</script>

<style scoped>
</style>
