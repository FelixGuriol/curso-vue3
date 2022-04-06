<template>
<div>
  <h1>{{title}}</h1>
  <hr>
  <ol>
    <li v-for="post in posts" :key="post.id">{{post.title}}</li>
  </ol>
</div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
export default {
  name: 'HelloWorld',
  props:{
    msg: String
  },
  setup(){//el primero parametro es 'props'
    const title = "Hooks del Ciclo de vida"; 
    const posts = ref([])

    onMounted(
      async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();

        posts.value = data
      }
    )

    return {title,posts}
  }
}
</script>