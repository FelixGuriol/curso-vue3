<template lang="pug">
div
  h1 Hola mundo
  p asdasdasdasda
    span Esto es span
    |Esto es mas de la etiqueta 'p'
  //- span.personal  Otro span
  p#segundo Esto es un parrafo con ID
  p.colores#tam Parrafo con ID y class

div
  h1 Atributos
  img.imagen(src="https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_960_720.jpg")

div
  h1 {{msg}}
  ul
    li(v-for="(persona,index) in personal" :key="index") {{persona}}
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    personal: ["Juan","Raul","Maria"]
  }),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.imagen{
  width: 100px;
}
span{
  color: blue
}
.colores{
  color: green
} 
#tam{
  font-weight: bolder;
}
.personal{
  color: orange
}
#segundo{
  color: red
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
