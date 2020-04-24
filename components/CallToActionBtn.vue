<template>
  <a
    href="#"
    class="call-to-action-btn relative inline-block text-center my-10 px-10 py-4 border-2 border-main-blue group hover:border-main-yellow text-main-blue hover:text-white transition-colors duration-200"
  >
    <div
      class="absolute bg-main-yellow w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-200"
    ></div>
    <span class="relative uppercase font-semibold">{{text}}</span>
  </a>
</template>

<script>
export default {
  name: 'CallToActionBtn',
  props: ['text']
}
</script>

<style scoped>
div {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>