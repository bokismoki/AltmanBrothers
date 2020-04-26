<template>
  <footer class="footer px-5 py-10 md:px-10 bg-main-blue-light text-center">
    <div class="max-w-3xl mx-auto">
      <img class="mx-auto" src="~/assets/img/logo-white.png" alt="The Altman Brothers Logo" />
      <h2 class="text-main-yellow-light uppercase mt-5 font-semibold">Worldwide Real Estate</h2>
      <div class="grid grid-cols-2 text-white opacity-75 uppercase mt-5 max-w-xs mx-auto">
        <ul>
          <li>Los Angeles</li>
          <li>New York</li>
          <li>Newport Beach</li>
        </ul>
        <ul>
          <li>San Francisco</li>
          <li>Aspen</li>
          <li>Miami</li>
        </ul>
      </div>
      <hr class="opacity-50 mt-5 max-w-lg mx-auto" />
      <a
        class="block text-white mt-5 text-lg hover:text-main-yellow"
        href="#"
      >Beverly Hills Celebrity Real Estate</a>
      <a
        class="block text-white text-lg hover:text-main-yellow"
        href="#"
      >Beverly Hills Million Dollar Listings</a>
      <hr class="opacity-50 mt-5 max-w-lg mx-auto" />
      <a
        class="block text-white mt-5 text-lg hover:text-main-yellow"
        href="#"
      >Beverly Hills A-Listt Real Estate</a>
      <a class="block text-white text-lg hover:text-main-yellow" href="#">Beverly Hills Mansions</a>
      <hr class="opacity-50 mt-5 max-w-lg mx-auto" />
      <p
        class="text-white leading-tight text-sm mt-5"
      >150 EL CAMINO DRIVE, LOS ANGELES,CA. 310-595-3888 © 2018 DOUGLAS ELLIMAN REAL ESTATE. ALL MATERIAL PRESENTED HEREIN IS INTENDED FOR INFORMATION PURPOSES ONLY. WHILE, THIS INFORMATION IS BELIEVED TO BE CORRECT, IT IS REPRESENTED SUBJECT TO ERRORS, OMISSIONS, CHANGES OR WITHDRAWAL WITHOUT NOTICE. ALL PROPERTY INFORMATION, INCLUDING, BUT NOT LIMITED TO SQUARE FOOTAGE, ROOM COUNT, NUMBER OF BEDROOMS AND THE SCHOOL DISTRICT IN PROPERTY LISTINGS SHOULD BE VERIFIED BY YOUR OWN ATTORNEY, ARCHITECT OR ZONING EXPERT. EQUAL HOUSING OPPORTUNITY.</p>
      <p class="text-white text-sm mt-10">&copy; 2020 The Altman Borthers. All rights reserved.</p>
      <button
        @click="goTop"
        class="uppercase text-white bg-main-blue text-sm font-semibold mt-5 px-5 py-2 hover:bg-main-yellow hover:text-main-blue transition-colors duration-200"
      >Back to Top</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    goTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
</style>