const app = Vue.createApp({
    data(){
        return {
            user:{
                title: "Hola Mundo",
                name: "Virsis",
                age: 20,
                movies:["batman", "spiderman"],
                url: "https://google.com",
                picture: "https://cdn.pixabay.com/photo/2021/12/21/08/29/owl-6884773_960_720.jpg",
                classValue: "error"
            }
        }
    }
})