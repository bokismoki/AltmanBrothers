<template>
  <div class="news-item flex h-20 p-2 transition-transform duration-200 smd:h-32 md:h-48" :class="news.bgColor">
    <img class="m-auto max-w-full max-h-full" :src="news.logo" alt="News Logo" />
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['news']
}
</script>

<style scoped>
.news-item:hover {
  transform: scale(1.1);
}
</style>