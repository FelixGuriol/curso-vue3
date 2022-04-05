<template>
  <div class="card horizontal" v-if="data.status">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{data.title}}</span>
        <p>
         {{data.description}}
        </p>
        <p>
          Tecnologias: <span v-for="(lang,index) in data.langs" :key="index">{{ index < data.langs.length-1 ? `${lang}, ` : lang}}</span>
        </p>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link :to="`/edit-proyect/${data.id}`" class="col s6 waves-effect waves-light btn amber darken-3">
            <i class="material-icons">edit</i>
          </router-link>
          <button @click="deleteProject" class="col s6 waves-effect waves-light btn red darken-3">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data: Object
  },
  methods:{
    async deleteProject(){
      const id = this.data.id
      const res = await fetch(
        `https://crud-vue-c1481-default-rtdb.firebaseio.com/projects/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({status: false}),
        }
      );
      const data = await res.json();

      this.data.status = data["status"];
    }
  }
};
</script>