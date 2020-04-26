<template>
  <section class="contact-us mt-5">
    <img src="~/assets/img/brothers-on-boat.jpg" alt="Brothers On Boat" />
    <div class="px-5 md:px-10">
      <div class="lg:flex lg:justify-center">
        <SectionNum num="07" title="Contact Us" />
      </div>
      <h1 class="uppercase font-medium text-4xl leading-none mt-10 text-center">
        <span class="font-bold">Get In</span>
        <br />Touch
      </h1>
      <ContactForm />
      <div class="text-center">
        <CallToActionBtn text="Send" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {
    SectionNum: () => import('~/components/SectionNum'),
    ContactForm: () => import('~/components/ContactForm'),
    CallToActionBtn: () => import('~/components/CallToActionBtn')
  }
}
</script>

<style scoped>
</style>