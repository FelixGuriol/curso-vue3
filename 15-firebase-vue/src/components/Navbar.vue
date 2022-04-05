<template>
  <nav>
    <div class="nav-wrapper light-blue">
      <router-link to="/" class="brand-logo">Proyectos</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li v-if="!sesion">
          <router-link to="/">Registrar</router-link>
        </li>
        <li v-if="!sesion">
          <router-link to="/login">LogIn</router-link>
        </li>
        <li v-if="sesion">
          <router-link
            to="/proyectos"
            class="waves-effect waves-light btn red lighten"
          >
            Proyectos
          </router-link>
        </li>
        <li v-if="sesion">
          <router-link
            to="/"  @click="cerrarSesion"
            class="waves-effect waves-light btn red lighten"
          >
            Cerrar sesion
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li v-if="!sesion">
      <router-link to="/">Registrar</router-link>
    </li>
    <li v-if="!sesion">
      <router-link to="/login">LogIn</router-link>
    </li>
    <li v-if="sesion">
      <router-link to="/proyectos">Proyectos</router-link>
    </li>
    <li v-if="sesion">
      <router-link to="/" @click="cerrarSesion">Cerrar sesion</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      sesion: this.isSesion()
    }
  },
  mounted() {
    M.AutoInit(); //la M hace referencia a materialize
  },
  methods:{
    cerrarSesion(){
      localStorage.removeItem("user")
      this.sesion=this.isSesion();
    },
    isSesion() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        return true;
      }
      return false;
    },
  }
};
</script>