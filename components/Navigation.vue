<template>
  <nav
    class="navigation fixed top-0 left-0 right-0 flex items-center bg-main-blue justify-between p-3 z-50 sm:p-8"
    :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
  >
    <div v-if="atTop" class="gradient hidden absolute bg-black h-full w-full left-0 lg:block"></div>
    <button class="relative">
      <img class="w-40 sm:w-64" src="~/assets/img/logo.png" alt="The Altman Brothers Logo" />
    </button>
    <NavigationList :atTop="atTop" />
    <div class="flex items-center relative">
      <a href="#">
        <img src="~/assets/img/de-logo-circle.png" alt="Douglas Elliman Logo Circle" />
      </a>
      <SideNavToggler />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['atTop'],
  components: {
    SideNavToggler: () => import('~/components/SideNavToggler'),
    NavigationList: () => import('~/components/NavigationList')
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>