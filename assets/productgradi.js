let products={
    id:undefined,
    quantity:1,
};
let currentCheckedInput=undefined;

const updateProduct=(variant)=>{
    const available= variant.getAttribute('available');
    if(available){
        products.id=variant.id
    }
}

const updateQuantity=(quantity)=>{
    products.quantity=quantity;
}

const addToCart= (button) => {
    
    const quantity=document.getElementById(`quantity__input-${button.id}`)
    updateQuantity(quantity.value);
    if(products.id!==undefined){
        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify(products)
        })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            products={
                id:undefined,
                quantity:1,
            };
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
        if(currentCheckedInput!==undefined){
            const input=document.getElementById(currentCheckedInput)
            input.checked=false;
        }else{
            currentCheckedInput=inputCheckedID;
        }
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        imageProduct.setAttribute("src", image)
        imageProduct.setAttribute("defaultImage", image)
       
    })


}
