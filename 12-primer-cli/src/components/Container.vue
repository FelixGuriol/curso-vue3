<template>
  <div id="container" class="container">
    <img
      src="https://avatars.githubusercontent.com/u/78109674?v=4"
      alt="Avatar de Felix"
      width="100"
      loading="lazy"
      class="image"
    />
    <h2>Proyectos</h2>
    <hr />
    <Loading v-if="load" />
    <div class="cards">
      <Card
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :author="project.owner.login"
        :url="project.html_url"
        :homepage="project.homepage"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Loading from "./Loading.vue";
export default {
  data() {
    return {
      projects: null,
      load: false,
    };
  },
  components: {
    Card,
    Loading,
  },
  methods: {
    async getProjects() {
      this.load = true;
      const res = await fetch("https://api.github.com/users/FelixGuriol/repos");
      const data = await res.json();

      this.projects = data;
      console.log(data)
      this.load = false;
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style scoped>
.image {
  border-radius: 50%;
}
.container {
  overflow: hidden;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>