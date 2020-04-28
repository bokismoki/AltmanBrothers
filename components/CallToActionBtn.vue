<template>
  <a
    href="#/"
    class="call-to-action-btn relative inline-block text-center px-10 border-2 group text-main-blue transition-colors duration-200"
    :class="{'border-main-yellow hover:text-main-yellow hover:border-main-blue py-8 text-2xl tracking-widest my-2 md:mx-2 md:px-16': lg, 'border-main-blue hover:text-white hover:border-main-yellow py-4 my-10 ': !lg}"
  >
    <div
      class="absolute w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-200"
      :class="{'bg-main-blue': lg, 'bg-main-yellow': !lg}"
    ></div>
    <span class="relative uppercase font-semibold">{{text}}</span>
  </a>
</template>

<script>
export default {
  name: 'CallToActionBtn',
  props: ['text', 'lg']
}
</script>

<style scoped>
div {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>