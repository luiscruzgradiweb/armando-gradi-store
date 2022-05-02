// (function(){

    class Product{
        #variant = undefined
        #quantity = 1
        #currentCheckedInput=undefined

        setQuantity(quantity){
            if(!quantity) this.quantity = 1
            this.#quantity=quantity
        }
        
        resetProduct(){
            this.#variant=undefined
            this.#quantity=1
        }
        setProductId(idProduct){
            this.#variant=idProduct
        }
        setProductQuantity(quantity){
            this.#quantity=quantity
        }
        setCurrentCheckedInput(input){
            this.#currentCheckedInput=input
        }
        getProduct(){
            return {
                id:this.#variant,
                quantity:this.#quantity
            }
        }
        getCurrentCheckedInput(){
            return this.#currentCheckedInput
        }
        getProductId(){
            return this.#variant
        }
    }

    const product= new Product()
    // const cart= new Cart()

    const updateProduct = (variant) => {
        variant ? product.setProductId(variant) : product.setProductId(undefined)
    }


    const buttonsAddToCart= document.getElementsByClassName('button_productgrid')
    for (let button of buttonsAddToCart) {
        button.addEventListener('click', (event) => {
            cart.addProduct(event)
        })
    }

    let inputs = document.getElementsByClassName("input_productgrid")
    for(item of inputs) {
        item.addEventListener("mouseover", function(e) {
            let image = e.target.getAttribute("image_hover")
            let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
            imageProduct.setAttribute("src", image)
            
        })

        item.addEventListener("mouseout", function(e) {
            let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
            let image = imageProduct.getAttribute("defaultImage")
            imageProduct.setAttribute("src", image)
            
        })

        item.addEventListener("click", function(e) {
            updateProduct(e.target.getAttribute("id"))
            const inputCheckedID=e.target.getAttribute("for")
            if(product.getCurrentCheckedInput()!==undefined){
                const input=document.getElementById(product.getCurrentCheckedInput())
                input.checked=false;
            }
            product.setCurrentCheckedInput(inputCheckedID)
            let image = e.target.getAttribute("image_hover")
            let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
            imageProduct.setAttribute("src", image)
            imageProduct.setAttribute("defaultImage", image)
        
        })


    }

// })();