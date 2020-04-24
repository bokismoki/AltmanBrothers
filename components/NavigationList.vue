<template>
  <ul
    class="navigation-list items-center hidden text-sm font-semibold text-white uppercase lg:flex lg:text-base xl:text-lg"
  >
    <li class="relative mx-2 group xl:mx-5">
      <a href="#">About</a>
      <ul
        class="absolute hidden text-sm p-5 group-hover:block"
        :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
      >
        <li class="mt-1">Josh Altman</li>
        <li class="mt-1">Matthew Altman</li>
        <li class="mt-1">Heather Altman</li>
        <li class="mt-1">The Team</li>
      </ul>
    </li>
    <li class="relative mx-2 group xl:mx-5">
      <a href="#">Properties</a>
      <ul
        class="absolute hidden text-sm p-5 group-hover:block"
        :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
      >
        <li class="mt-1">Current Listings</li>
        <li class="mt-1">Pocket Listings</li>
        <li class="mt-1">Sold Listings</li>
        <li class="mt-1">Record Breaking Sales</li>
        <li class="mt-1">Buyers</li>
        <li class="mt-1">Sellers</li>
      </ul>
    </li>
    <li class="relative mx-2 group xl:mx-5">
      <a href="#">Media</a>
      <ul
        class="absolute hidden text-sm p-5 group-hover:block"
        :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
      >
        <li class="mt-1">TV</li>
        <li class="mt-1">Blog</li>
      </ul>
    </li>
    <li class="relative mx-2 group xl:mx-5">
      <a href="#">Training-Speaking</a>
      <ul
        class="absolute hidden text-sm p-5 group-hover:block"
        :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
      >
        <li class="mt-1">Training</li>
        <li class="mt-1">Speaking</li>
      </ul>
    </li>
    <li class="relative mx-2 group xl:mx-5">
      <a href="#">Contact</a>
      <ul
        class="absolute hidden text-sm p-5 group-hover:block"
        :class="{'lg:bg-transparent': atTop, 'lg:bg-main-blue-light-85': !atTop}"
      >
        <li class="mt-1">Hire Us</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavigationList',
  props: ['atTop']
}
</script>

<style scoped>
li::after {
  content: '';
  @apply block bg-main-yellow h-px w-0 transition-all duration-300;
}
li:hover::after {
  @apply w-full;
}
li > ul {
  min-width: max-content;
}
</style>