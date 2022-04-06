import { mount } from "@vue/test-utils";
import Contador from '@/components/Contador.vue'

describe("Contador.vue", () => {
    it("Validar msg", () => {
        const wrapper =  mount(<Contador/>)

        expect(wrapper.find("h1").text()).toBe("Counter: 0")//el text te da el contenido del h1
    })

    it("Aumenta el contador en 1", async () => {
        const wrapper =  mount(<Contador/>)

        /* console.log(wrapper.findAll("button")[1].text())
        console.log(wrapper.find("button#dis").text()) */

        await wrapper.find("button#add").trigger("click")//llama a eventos de ese elemento 

        expect(wrapper.find("h1").text()).toBe("Counter: 1")
    })
    it("Disminuir el contador en 5", async () => {
        const wrapper =  mount(<Contador/>)

        await wrapper.find("button#dis").trigger("click")
        await wrapper.find("button#dis").trigger("click")
        await wrapper.find("button#dis").trigger("click")
        await wrapper.find("button#dis").trigger("click")
        await wrapper.find("button#dis").trigger("click")

        expect(wrapper.find("h1").text()).toBe("Counter: -5")
    })
})