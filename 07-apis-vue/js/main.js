const app = Vue.createApp({
    data(){
      return{
        title: "Gradient Generator",
      }
    },
    created(){
      this.getPost()
    },
    methods:{
      async getPost(){
        /* console.log("Peticion realizada") */
        const res = await fetch("https://jsonplaceholder.typicode.com/photos/10")
        /* fetch("https://jsonplaceholder.typicode.com/photos")
          .then((res) => console.log(res)) */
        
        const data = await res.json();
        console.log(data);
      }
    }
});
  