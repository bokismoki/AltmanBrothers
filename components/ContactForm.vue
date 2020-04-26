<template>
  <form class="contact-form max-w-2xl mx-auto">
    <div class="md:grid md:grid-cols-2">
      <div class="md:mr-5 xl:grid xl:grid-cols-2">
        <div class="xl:mr-5">
          <label
            class="block uppercase text-sm opacity-50 font-semibold mt-3"
            for="fName"
          >First Name</label>
          <input class="border-b-2 border-black w-full mt-1" type="text" id="fName" />
        </div>
        <div>
          <label class="block uppercase text-sm opacity-50 font-semibold mt-3" for="lName">Last Name</label>
          <input class="border-b-2 border-black w-full mt-1" type="text" id="lName" />
        </div>
      </div>
      <div class="md:ml-5 xl:grid xl:grid-cols-2">
        <div class="xl:mr-5">
          <label class="block uppercase text-sm opacity-50 font-semibold mt-3" for="phone">Phone No.</label>
          <input class="border-b-2 border-black w-full mt-1" type="text" id="phone" />
        </div>
        <div>
          <label
            class="block uppercase text-sm opacity-50 font-semibold mt-3"
            for="email"
          >Email Address</label>
          <input class="border-b-2 border-black w-full mt-1" type="email" id="email" />
        </div>
      </div>
    </div>
    <label class="block uppercase text-sm opacity-50 font-semibold mt-3" for="message">Message</label>
    <input class="border-b-2 border-black w-full mt-1" type="text" id="message" />
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
</style>