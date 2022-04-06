<template>
  <h1>{{ msg }}: {{ count }}</h1>
  <button id="add" @click="handleAdd">+1</button>
  <button id="dis" @click="handleDis">-1</button>
</template>

<script>
export default {
  data: () => ({
      msg: "Counter",
      count: 0
  }),
  methods: {
      handleAdd(){
          this.count++
      },
      handleDis(){
          this.count--
      }
  }
};
</script>

<style>
</style>