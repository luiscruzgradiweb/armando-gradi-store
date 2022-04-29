import Productsgrid from "./Productsgrid";

const productsgrid=new Productsgrid()

const updateProduct=(variant)=>{
    const available = variant.getAttribute('available');
    productsgrid.setProductID(variant.id)
}

const updateQuantity = quantity => {
    productgrid.setProductQuantity(quantity);
}

const addToCart= (button) => {
    
    const quantity=document.getElementById(`quantity__input-${button.id}`)
    updateQuantity(quantity.value);
    alert(productsgrid.getProduct().id)
    if(productsgrid.getProduct().id!==undefined){
        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify(productsgrid.getProduct())
        })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            productgrid.resetProduct()
            window.top.location.href = "/cart"
        });
    }else{
        
    }
}


const buttonsAdd=document.getElementsByClassName('button_productgrid')
for(button of buttonsAdd){
    button.addEventListener('click', addToCart)
} 

let labels = document.getElementsByClassName("input_productgrid")
for(item of labels) {
    item.addEventListener("mouseover", function(e) {
        alert('mouseover ok')
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
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        imageProduct.setAttribute("src", image)
        imageProduct.setAttribute("defaultImage", image)
       
    })
}
