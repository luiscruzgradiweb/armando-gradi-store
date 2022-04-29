class Productsgrid{
    #variant = 1234
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

