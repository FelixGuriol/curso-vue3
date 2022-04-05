<template>
  <div class="container">
    <div class="row">
      <router-link
        to="/proyectos"
        class="col s12 waves-effect waves-light btn amber darken-3"
      >
        <i class="material-icons left">arrow_back</i>
        Regresar a la lista
      </router-link>
    </div>
    <div class="row">
      <form @submit.prevent="createProjects" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="first_name"
              type="text"
              v-model="project.title"
              class="validate"
            />
            <label for="first_name">Nombre del Proyecto</label>
          </div>
          <div class="input-field col s12">
            <input
              id="last_name"
              type="text"
              v-model="project.description"
              class="validate"
            />
            <label for="last_name">Descripcion del Proyecto</label>
          </div>
          <p>
            <label>
              <input
                type="checkbox"
                checked="checked"
                value="html"
                v-model="project.langs"
              />
              <span>HTML</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                checked="checked"
                value="css"
                v-model="project.langs"
              />
              <span>CSS</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                checked="checked"
                value="JavaScript"
                v-model="project.langs"
              />
              <span>JavaScript</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                checked="checked"
                value="Vue"
                v-model="project.langs"
              />
              <span>Vue</span>
            </label>
          </p>
          <button
            class="btn waves-effect waves-light col s12"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: "",
        description: "",
        langs: [],
        status: true,
      },
    };
  },
  mounted() {
    M.updateTextFields();
  },
  methods: {
    async createProjects() {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(
        `https://crud-vue-c1481-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`,
        {
          method: "POST",
          body: JSON.stringify(this.project),
        }
      );
    },
  },
};
</script>