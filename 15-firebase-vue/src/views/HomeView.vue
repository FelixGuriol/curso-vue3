<template>
  <div class="home">
    <register/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,Register
  }
}
</script>
