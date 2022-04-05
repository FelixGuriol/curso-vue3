<template>
  <button @click="accionContador">{{BtnText}}</button>
</template>

<script>
export default {
    props:{
        BtnText: String
    },
    setup({BtnText},context){
        const accionContador = () => {
            context.emit("accion")
        }
        

        return {BtnText,accionContador}
    }
}
</script>