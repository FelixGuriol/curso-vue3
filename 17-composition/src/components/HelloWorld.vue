<template>
<div>
  <h1>{{title}}</h1>
  <hr>
  <h2 :style="{color: color}">Contador: {{contador}}</h2>
  <Btn BtnText="Aumentar" @accion="aumentar"/>
  <Btn BtnText="Disminuir" @accion="disminuir"/>
</div>
</template>

<script>
import Btn from './Btn.vue'
import {useContador} from '../hooks/useContador'
export default {
  name: 'HelloWorld',
  components:{
    Btn
  },
  props:{
    msg: String
  },
  setup({msg}){//el primero parametro es 'props'
    const title = msg;
    

    return {
      title, ...useContador()
    }
  }
}
</script>