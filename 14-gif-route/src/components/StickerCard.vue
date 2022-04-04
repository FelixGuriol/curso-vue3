<template>
  <div class="card" style="width: 100rem;">
  <img loader="lazy" :src="data.images.downsized.url" class="card-img-top" alt="Sticker">
  <div class="card-body">
    <h5 class="card-title">{{data.title}}</h5>
  </div>
</div>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>