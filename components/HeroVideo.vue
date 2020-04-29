<template>
  <video
    class="hero-video object-cover w-full h-64 mt-16 sm:mt-28 lg:h-500px lg:mt-0 xl:h-75vh"
    preload="auto"
    data-video-blob="true"
    autoplay
    muted
    loop
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false"
    poster="https://www.thealtmanbrothers.com/wp-content/uploads/2018/03/slider-cover.jpg"
  >
    <source
      src="https://player.vimeo.com/external/315710369.hd.mp4?s=a773d9ed0cd7ab37225d28f217c2481e9bef7e1b&amp;profile_id=175"
      type="video/mp4"
    />
  </video>
</template>

<script>
export default {
  name: 'HeroVideo',
  methods: {
    test() {
      return false
    }
  }
}
</script>

<style scopeed>
@supports (display: -ms-grid) {
  .hero-video {
    min-width: 100vw;
    width: auto;
    height: auto;
  }
}
</style>