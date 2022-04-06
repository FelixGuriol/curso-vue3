<template>
<div>
  <h1>{{title}}</h1>
  <hr>
  <contador-uno/>
  <contador-dos/>
  <Btn BtnText="Aumentar" @accion="aumentar"/>
  <Btn BtnText="Disminuir" @accion="disminuir"/>
</div>
</template>

<script>
import ContadorUno from './ContadorUno.vue';
import Btn from './Btn.vue';
import ContadorDos from './ContadorDos.vue';
import { useContador } from '@/hooks/useContador';
export default {
  name: 'HelloWorld',
  components:{
    ContadorUno,Btn,
    ContadorDos
  },
  props:{
    msg: String
  },
  setup({msg}){//el primero parametro es 'props'
    const title = msg; 
    return {title, ...useContador()}
  }
}
</script>