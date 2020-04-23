<template>
  <button class="side-nav-toggler items-center ml-5 lg:flex">
    <div class="flex flex-col items-center group">
      <div class="w-10 h-px transition-colors duration-100 bg-white group-hover:bg-main-yellow"></div>
      <div class="w-5 h-px my-2 transition-colors duration-100 bg-white group-hover:bg-main-yellow"></div>
      <div class="w-10 h-px transition-colors duration-100 bg-white group-hover:bg-main-yellow"></div>
    </div>
    <div class="hidden ml-5 text-lg font-semibold text-white uppercase lg:block xl:text-xl">Menu</div>
  </button>
</template>

<script>
export default {
  name: 'SideNavToggler'
}
</script>

<style scoped>
</style>