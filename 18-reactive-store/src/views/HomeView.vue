<template>
  <Header/>
  <saldos/>
</template>

<script>
// @ is an alias to /src
import Saldos from '@/components/Saldos.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Saldos,Header
  }
}
</script>
