<template>
  <div
    class="section-num flex justify-center my-5 items-center uppercase font-semibold lg:justify-start"
  >
    <span class="text-xl">{{num}}</span>
    <div class="h-px bg-main-yellow w-16 mx-5"></div>
    <span class="opacity-50 text-lg">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionNum',
  props: ['num', 'title']
}
</script>

<style scoped>
</style>