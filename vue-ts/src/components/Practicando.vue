<template>
    <h1>Nombre: {{store.nombre}}</h1>
    <h2>Edad: {{store.edad}}</h2>
    <button @click="store.crecer">Crecer</button>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

import store from "../store/store";

const Practicando = defineComponent({
    setup() {



        return{store}
    },
})

export default Practicando
</script>
