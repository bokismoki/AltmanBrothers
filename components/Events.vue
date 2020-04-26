<template>
  <section class="events mt-48 mx-auto">
    <div class="md:flex md:items-start">
      <img
        class="max-w-sm w-full md:absolute md:max-w-md lg:max-w-xl xl:max-w-2xl"
        src="~/assets/img/training-speaking.png"
        alt="Altman Brothers Training & Speaking"
      />
      <div class="px-5 md:px-10 md:ml-auto">
        <div class="md:flex md:justify-end">
          <SectionNum num="05" title="Events" />
        </div>
        <h1 class="uppercase font-medium text-4xl leading-none text-center md:text-right">
          <span class="font-bold">Training &</span>
          <br />Speaking
        </h1>
        <p
          class="mt-10 leading-tight opacity-75 text-center md:max-w-xs md:text-right lg:max-w-md"
        >Take advantage of this opportunity to meet with the “Million Dollar Man”, Josh Altman, to discuss his proven multi-million dollar strategies and techniques to get you and your business to the next level.</p>
      </div>
    </div>
    <div class="px-5 flex flex-col mt-10 max-w-xs mx-auto md:px-10 md:flex-row md:mt-16 md:max-w-full md:justify-end">
      <CallToActionBtn text="Training" :lg="true" />
      <CallToActionBtn text="Speaking" :lg="true" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Events',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    CallToActionBtn: () => import('~/components/CallToActionBtn')
  }
}
</script>

<style scoped>
.events {
    max-width: 1280px;
}
</style>