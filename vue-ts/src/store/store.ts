import { Store } from "@/interfaces/Store";
import { reactive } from "vue";

const store = reactive<Store>({
    nombre: "Felix",
    apellido: "Gutierrez",
    edad: 10,
    estudiante: false,
    crecer: () => {
        store.edad++
    }
})

export default store