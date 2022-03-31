app.component("lista-paises",{
    template: `
    <ol>
        <li v-for="(pais,index) in paises" :key="index">{{pais}}</li>
    </ol>
    `,
    props: {
        paises:{
            type: Array,
            required: true
        }
    }
})