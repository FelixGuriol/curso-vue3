import { counterStore } from "@/store/counterStore"

describe("Probar la store de forma aislada",() => {

    afterEach(() => {//actualiza el contador cada vez q se ejecuten los test dentro del describe
        counterStore.handleReset()
    })

    it("Aumentar store en 1", () =>{
        counterStore.handleAdd();
        expect(counterStore.count).toBe(1);
    })

    it("Disminuir store en 1", () =>{
        counterStore.handleDis();
        expect(counterStore.count).toBe(-1);
    })
})