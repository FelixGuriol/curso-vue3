<template>
  <footer class="text-center bg-dark text-white py-3 footer bg-gradient">
    <h3>&copy; {{year}} - Felix Gutierrez</h3>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  })
};
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>