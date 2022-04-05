<template>
  <div class="row">
    <div class="container">
      <h1>LogIn</h1>
      <hr />
    </div>

    <div class="col s12 m7" v-if="errors">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <h5>Email / Password Invalidos</h5>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="validarUsuario" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input
            v-model.trim="email"
            id="email"
            type="email"
            class="validate"
          />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            v-model.trim="pass"
            id="password"
            type="password"
            class="validate"
          />
          <label for="password">Password</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Login
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  inject: ["reload"], //PARA RECARGAR EL NAVBAR (LEE UN PROVIDER DEL APP.vue)
  data: () => ({
    email: "felixxxxx@felix.com",
    pass: "123456",
    errors: false,
  }),
  methods: {
    async validarUsuario() {
      if (this.pass.length >= 6 && this.email != "") {
        const API_KEY = "AIzaSyBuoEdoRBT8cMrSZxFGDzthTHnAE50vz6A";
        try {
          const res = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
              method: "POST",
              body: JSON.stringify({
                email: this.email,
                password: this.pass,
                returnSecureToken: true,
              }),
            }
          );
          const data = await res.json();

          if (data.error) {
            this.errors = true;
          } else {
            this.errors = false;
            localStorage.setItem("user", JSON.stringify(data))
            router.push("/proyectos")
             this.reload();
          }
        } catch (error) {
          console.log(error);
        }

        /* const data = await res.json();
        if (data.error.errors[0].message) {
          this.errors = true;
        } else {
          this.errors = false;
        } */
      } else {
        return;
      }
    },
  },
  mounted() {
    M.updateTextFields();
  },
};
</script>