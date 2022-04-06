<template>
  <div>
      <h1>Saldo : ${{store.saldo}}</h1>
      <button @click="store.modificarSaldo(100)">+100</button>
      <button @click="store.modificarSaldo(30)">-30</button>
  </div>
</template>
<!--
<script>
import store from '../store/store'
export default {
    setup(){
        return {store}
    }
}
</script> -->
<script setup>
import store from '../store/store'
</script>