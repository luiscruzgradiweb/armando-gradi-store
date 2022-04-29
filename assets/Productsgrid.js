export default class Productsgrid{
    #product={
        id:undefined,
        quantity:1,
    }
    #currentCheckedInput=undefined

    setProductID(idProduct){
        this.#product.id=idProduct
    }
    setProductQuantity(quantity){
        this.#product.quantity=quantity
    }

    getProduct(){
        return this.#product
    }
    resetProduct(){
        this.#product.id=undefined
        this.#product.quantity=1
    }
}