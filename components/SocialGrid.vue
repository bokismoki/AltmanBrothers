<template>
  <div class="social-grid mt-5 max-w-lg mx-auto">
    <SocialBlock v-for="(block, index) in blocks" :key="index" :block="block" :index="index" />
  </div>
</template>

<script>
export default {
  name: 'SocialGrid',
  components: {
    SocialBlock: () => import('~/components/SocialBlock')
  },
  data() {
    return {
      blocks: [
        {
          fName: 'Josh',
          lName: 'Altman',
          image: require('~/assets/img/social-josh.jpg')
        },
        {
          fName: 'Matthew',
          lName: 'Altman',
          image: require('~/assets/img/social-matthew.jpg')
        },
        {
          fName: 'Altman',
          lName: 'Brothers',
          image: require('~/assets/img/social-brothers.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>