class Productsgrid{
    #variant = undefined
    #quantity = 1
    #currentCheckedInput=undefined

    setProductID(idProduct){
        this.#variant=idProduct
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
    setCurrentCheckedInput(input){
        this.#currentCheckedInput=input
    }
    getCurrentCheckedInput(){
        return this.#currentCheckedInput
    }
}

const productgrid= new Productsgrid();


const updateProduct=(variant)=>{
    const available = variant.getAttribute('available');
    available ? productgrid.setProductID(variant.id) : undefined
    
}

const updateQuantity=(quantity)=>{
    productgrid.setProductQuantity(quantity)
}

const addToCart= (button) => {
    
    const quantity=document.getElementById(`quantity__input-${button.id}`)
    updateQuantity(quantity.value);
    if(productgrid.getProduct().id!==undefined){
        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify(productgrid.getProduct())
        })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            productgrid.resetProduct();
            window.document.location.href = "https://armando-gradi-store.myshopify.com/cart"
        });
    }else{
        
    }
}


const buttonsAdd=document.getElementsByClassName('button_productgrid')
for(button of buttonsAdd){
    button.addEventListener('click', addToCart)
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
        const inputCheckedID=e.target.getAttribute("for")
        if(productgrid.getCurrentCheckedInput()!==undefined){
            const input=document.getElementById(currentCheckedInput)
            input.checked=false;
        }
        productgrid.setCurrentCheckedInput(inputCheckedID)
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        imageProduct.setAttribute("src", image)
        imageProduct.setAttribute("defaultImage", image)
       
    })


}

