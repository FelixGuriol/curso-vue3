<template>
  <div>
    <h1>Hola {{ persona.name }}</h1>
    <input type="text" v-model="persona.name" />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const persona = reactive({
      name: "Felix",
      lastname: "Gutierrez",
      edad: 20,
    });

    return { persona };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
