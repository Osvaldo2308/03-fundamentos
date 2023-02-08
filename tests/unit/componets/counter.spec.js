import { shallowMount } from '@vue/test-utils'
import Counter from  '@/components/Counter'
//import { values } from 'core-js/core/array'

describe('Counter Component', () =>{
    let wrapper 
    beforeEach(()=>{
        wrapper = shallowMount( Counter)
    })

    /*  test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount( Counter )

        expect( wrapper.html() ).toMatchSnapshot()

    }) */
    test('Etiqueta H2 debe de tener el atrobuto Counter', ()=>{
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        expect(h2Value ).toBe('Counter')
    })
    test('El valor por defecto debe de ser 100 en el p', async() => {
        //Wrapper
        //pTags
        //const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testId="counter"]').text()
        //expect( pTags[1].text() ). toBe('100')

        expect( value ). toBe('100')
        //Expect segundo p ===100
    })
    test('Incremento y decremento del contador', async()=>{
        
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const value = wrapper.find('[data-testId="counter"]').text()
        
        expect(value).toBe('101')
    })
    test('Debe de establecer el valor por defecto', ()=>{
        const {start}  = wrapper.props()
        /* console.log( typeof start) */
        const value = wrapper.find('[data-testId="counter"]').text()
        expect ( Number(value) ).toBe(start)
    })
    test('Mostar la prop de Title',()=>{
        const title= 'Hello World!!!!!'
        const wrapper = shallowMount( Counter,{ 
            props:{
                title
            }
    })
        expect(wrapper.find('h2').text() ).toBe(title)
    })
})