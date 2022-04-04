<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Stickers</h1>
    <search @accion="getStickers"/>
    <hr>
    <loading v-if="load"/>
    <div class="row">
      <div class="col-12 col-lg-3" v-for="sticker in stickers" :key="sticker.id">
        <StickerCard class="m-3 w-75" :data="sticker"/>
      </div>
    </div>
  </div>
</template>

<script>
import StickerCard from '@/components/StickerCard.vue';
import Search from '@/components/Search.vue';
import Loading from '@/components/Loading.vue';
export default {
  components: { StickerCard,Search, Loading },
  data: () => ({
    stickers: {},
    load: false,
  }),
  created(){//Se ejecuta antes de que se creen los componentes
    this.getStickers();
  },
  methods:{
    async getStickers(search="goku"){
      const key = "EUXAh0tvPpMnF93PFkmnOKfrvfYBXtnj"
      this.load=true
      const {data} = await this.axios.get(`https://api.giphy.com/v1/stickers/search?q=${search}&api_key=${key}`);
      this.stickers=data.data
      this.load=false
    }
  }
}
</script>