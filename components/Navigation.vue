<template>
  <nav
    class="flex items-center justify-between p-3 navigation bg-main-blue sm:p-8 lg:bg-transparent"
  >
    <button>
      <img class="w-40 sm:w-64" src="~/assets/img/logo.png" alt="The Altman Brothers Logo" />
    </button>
    <NavigationList />
    <div class="flex items-center">
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
</style>