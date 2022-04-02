<template>
  <div id="card" class="card">
    <h4>{{ name }}</h4>
    <p>
      {{ description }}
    </p>
    <p>
      <strong>{{ author }}</strong>
    </p>
    <button-url :url="url" class="mt-auto" />
    <button-url
      :url="homepage"
      title="Deploy"
      color="red"
      v-if="homepage != null"
    />
  </div>
</template>

<script>
import ButtonUrl from "./ButtonUrl.vue";
export default {
  components: { ButtonUrl },
  props: {
    name: String,
    description: String,
    author: String,
    url: String,
    homepage: String,
  },
};
</script>

<style scoped>
.card {
  width: 250px;
  margin: 7px;
  border: solid 1px #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
}
</style>