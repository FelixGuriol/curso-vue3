<template>
  <div class="row">
    <div class="col s12 m7">
      <card-project
        :data="project"
        v-for="(project, index) in projects"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import CardProject from "./CardProject.vue";
export default {
  data: () => ({
    projects: [],
  }),
  components: { CardProject },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await fetch(
        "https://crud-vue-c1481-default-rtdb.firebaseio.com/projects.json"
      );
      const data = await res.json();

      for (let i in data) {
        this.projects.push({id:i, ...data[i]});
      }
      console.log(this.projects);
    },
  },
};
</script>