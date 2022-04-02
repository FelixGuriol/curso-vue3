<template>
<footer>
  <h3 class="p-4">&copy; Gutierrez Uriol - {{year}}</h3>
</footer>
</template>

<script>
export default {
  computed:{
    year(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: #333;
  text-align: center;
  color: snow;
}
</style>