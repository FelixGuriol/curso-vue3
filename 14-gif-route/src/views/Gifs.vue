<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Gifs</h1>
    <search @accion="getGifs"/>
    <hr>
    <loading v-if="load"/>
    <div class="row">
      <div class="col-12 col-lg-3" v-for="git in gifs" :key="git.id">
        <gif-card class="m-3 w-75" :data="git"/>
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from '@/components/GifCard.vue';
import Search from '@/components/Search.vue';
import Loading from '@/components/Loading.vue';
export default {
  components: { GifCard,Search, Loading },
  data: () => ({
    gifs: {},
    load: false,
  }),
  created(){//Se ejecuta antes de que se creen los componentes
    this.getGifs();
  },
  methods:{
    async getGifs(search="goku"){
      const key = "EUXAh0tvPpMnF93PFkmnOKfrvfYBXtnj"
      this.load=true
      const {data} = await this.axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`);
      this.gifs=data.data
      this.load=false
    }
  }
}
</script>