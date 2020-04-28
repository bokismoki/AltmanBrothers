<template>
  <section class="luxury-real-estate">
    <div class="text-center flex justify-center md:mt-5">
      <SectionNum num="02" title="Luxury Real Estate" />
    </div>
    <h1 class="uppercase font-medium text-4xl leading-none my-10 text-center md:mt-0">
      <span class="font-bold">Exclusive</span>
      <br class="md:hidden" />Properties
    </h1>
    <PropertiesCarousel v-for="(carousel, index) in carousels" :key="index" :carousel="carousel" />
  </section>
</template>

<script>
export default {
  name: 'LuxuryRealEstate',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    PropertiesCarousel: () => import('~/components/PropertiesCarousel')
  },
  data() {
    return {
      carousels: [
        [
          {
            location: '1911 Westridge RD, Los Angeles',
            price: '$56,020,00',
            image: require('~/assets/img/properties/exclusive-property-1.jpg')
          },
          {
            location: '133 Donehy road, Dana Point',
            price: '$73,080,000',
            image: require('~/assets/img/properties/exclusive-property-2.jpg')
          },
          {
            location: '2065 & 2069 Mulholland Drive, Los Angeles',
            price: '$48,500,000',
            image: require('~/assets/img/properties/exclusive-property-3.jpg')
          },
          {
            location: '1911 Westridge RD, Los Angeles',
            price: '$56,020,00',
            image: require('~/assets/img/properties/exclusive-property-1.jpg')
          },
          {
            location: '2911 Antelo View, San Francisco',
            price: '$93,520,000',
            image: require('~/assets/img/properties/exclusive-property-4.jpg')
          }
        ],
        [
          {
            location: '2065 & 2069 Mulholland Drive, Los Angeles',
            price: '$48,500,000',
            image: require('~/assets/img/properties/exclusive-property-5.jpg')
          },
          {
            location: '1911 Westridge RD, Los Angeles',
            price: '$56,020,00',
            image: require('~/assets/img/properties/exclusive-property-7.jpg')
          },
          {
            location: '133 Donehy road, Dana Point',
            price: '$73,080,000',
            image: require('~/assets/img/properties/exclusive-property-8.jpg')
          }
        ],
        [
          {
            location: '133 Donehy road, Dana Point',
            price: '$73,080,000',
            image: require('~/assets/img/properties/exclusive-property-3.jpg')
          },
          {
            location: '1911 Westridge RD, Los Angeles',
            price: '$56,020,00',
            image: require('~/assets/img/properties/exclusive-property-5.jpg')
          },
          {
            location: '2911 Antelo View, San Francisco',
            price: '$93,520,000',
            image: require('~/assets/img/properties/exclusive-property-7.jpg')
          },
          {
            location: '2065 & 2069 Mulholland Drive, Los Angeles',
            price: '$48,500,000',
            image: require('~/assets/img/properties/exclusive-property-1.jpg')
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
</style>