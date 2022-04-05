<template>
  <Navbar v-if="isRouterAlive"/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    Navbar
  },
  //PARA RECARGAR EL COMPONENTE DE NAVBAR Y ASI SE ACTUALISE SU CONTENIDO
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {//MANDA PROPS A TODOS LOS COMPONENTES Q TENGA DENTRO DE ESTA VISTA (Y A LOS COMPONTES DE ESOS COMPONENTES ...ETC)
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {//<---
        this.isRouterAlive = true;
      });
    },
  },
}
</script>