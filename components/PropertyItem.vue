<template>
  <div
    class="property-item relative bg-center bg-cover bg-no-repeat h-64 text-white font-semibold uppercase text-2xl px-10 py-5 sm:pt-32"
    :style="{'background-image': `url(${property.image})`}"
  >
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50"></div>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-transparent">
    </div>
    <div class="relative border-l-4 pl-2 flex flex-col group justify-end h-full border-main-yellow">
      <h2 class="max-w-xs relative">{{property.location}}</h2>
      <div class="relative text-4xl mt-5">{{property.price}}</div>
      <a
        href="#/"
        class="opacity-0 h-0 bg-main-yellow self-start px-5 py-2 text-black font-medium text-base group-hover:opacity-100 group-hover:h-6 transition-all duration-300"
      >View Details</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyItem',
  props: ['property']
}
</script>

<style scoped>
</style>