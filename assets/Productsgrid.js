export default class Productsgrid{
    #variant = undefined
    #quantity = 1

    setProductID(idProduct){
        this.#variant=idProduct
        alert('si entre')
    }
    setProductQuantity(quantity){
        this.#quantity=quantity
    }

    getProduct(){
        return {
            id:this.#variant,
            quantity:this.#quantity
        }
    }
    resetProduct(){
        this.#variant=undefined
        this.#quantity=1
    }
}