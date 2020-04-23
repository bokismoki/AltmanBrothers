<template>
  <nav
    class="navigation fixed top-0 left-0 right-0 flex items-center justify-between p-3 bg-main-blue z-50 sm:p-8 lg:bg-transparent"
  >
    <div class="gradient hidden absolute bg-black h-full w-full left-0 lg:block"></div>
    <button class="relative">
      <img class="w-40 sm:w-64" src="~/assets/img/logo.png" alt="The Altman Brothers Logo" />
    </button>
    <NavigationList />
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
  components: {
    SideNavToggler: () => import('~/components/SideNavToggler'),
    NavigationList: () => import('~/components/NavigationList')
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 100%);
}
</style>