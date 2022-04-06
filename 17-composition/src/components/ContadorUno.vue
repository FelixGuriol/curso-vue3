<template>
  <h2 :style="{color: color}">Contador: {{contador}}</h2>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup(){
        const contador = inject("valorContador")
        const color = inject("color")
        return{contador,color}
    }
}
</script>