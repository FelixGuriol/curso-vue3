<template>
  <div class="container">
    <h1>Vista Proyecto</h1>
    <hr />
    <div class="row">
      <router-link
        to="/reg-proyects"
        class="col s12 waves-effect waves-light btn amber darken-3"
      >
        <i class="material-icons left">add</i>
        Crear Proyecto
      </router-link>
    </div>
    <contenedor />
  </div>
</template>

<script>
import Contenedor from "../components/Contenedor.vue";
export default {
  components: { Contenedor },
};
</script>