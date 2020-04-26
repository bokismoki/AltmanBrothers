<template>
  <div class="social-block my-1 flex items-center" :class="{'flex-row-reverse': index % 2}">
    <div
      class="bg-main-blue-darkest text-white w-1/2 p-3 self-stretch flex flex-col justify-center sm:px-20"
      :class="{'items-end': index % 2 !== 1}"
    >
      <h1
        class="uppercase font-medium text-xl opacity-50 leading-none sm:text-2xl"
        :class="{'text-right': index % 2 !== 1}"
      >
        <span class="font-bold">{{block.fName}}</span>
        <br />
        {{block.lName}}
      </h1>
      <div class="flex items-center mt-5">
        <Facebook
          class="w-5 h-5 mx-1 cursor-pointer text-main-yellow hover:text-white fill-current sm:w-6 sm:h-6"
        />
        <Instagram
          class="w-5 h-5 mx-1 cursor-pointer text-main-yellow hover:text-white fill-current sm:w-6 sm:h-6"
        />
        <Twitter
          class="w-5 h-5 mx-1 cursor-pointer text-main-yellow hover:text-white fill-current sm:w-6 sm:h-6"
        />
        <LinkedIn
          class="w-5 h-5 mx-1 cursor-pointer text-main-yellow hover:text-white fill-current sm:w-6 sm:h-6"
        />
      </div>
    </div>
    <div class="w-1/2">
      <img class="w-full" :src="block.image" alt="Social Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialBlock',
  props: ['block', 'index'],
  components: {
    Facebook: () => import('~/assets/img/facebook.svg'),
    Instagram: () => import('~/assets/img/instagram.svg'),
    Twitter: () => import('~/assets/img/twitter.svg'),
    LinkedIn: () => import('~/assets/img/linkedin.svg')
  }
}
</script>

<style scoped>
</style>