<template>
  <div>
    <Navigation :atTop="atTop" />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import('~/components/Navigation')
  },
  data() {
    return {
      atTop: true
    }
  },
  methods: {
    checkScrollPosition() {
      window.scrollY <= 50 ? (this.atTop = true) : (this.atTop = false)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollPosition)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScrollPosition)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  @apply box-content p-0 m-0;
}
</style>
