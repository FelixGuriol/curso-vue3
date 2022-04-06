import { reactive } from "vue"

const store = reactive({
    saldo: 3000,
    modificarSaldo(value){
        this.saldo += value
    }
})

export default store