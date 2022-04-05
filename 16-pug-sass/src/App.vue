<template lang="pug">
div.nav
  nav
    router-link(to="/") Home | 
    router-link(to="/abour") About
  router-view
  footer-pug
</template>

<script>
import FooterPug from './components/FooterPug.vue'
export default {
  components:{
    FooterPug
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
