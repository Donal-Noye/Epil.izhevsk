<template>
  <div class="home">
    <Hero />
    <HomeAbout />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import HomeAbout from "../components/HomeAbout.vue";

export default {
  setup() {
    
  },
  components: { Hero, HomeAbout }
}
</script>

<style lang="scss">
</style>