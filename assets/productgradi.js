const products={
    id:undefined,
    quantity:1,
};

const updateProduct=(variant)=>{
    products={
        id:variant.id,
        quantity:variant.quantity,
    }

    return products;
}

const addToCart= () => {
    alert(products.id)

       
    // await fetch(window.Shopify.routes.root + 'cart/add.js', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   })
    //   .finally(() => {
    //     window.document.location.href = "https://armando-gradi-store.myshopify.com/cart"
    //   }); 
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
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        let variant = e.target.getAttribute("variant")
        let idProduct = e.target.getAttribute("idProduct")
        let button=document.getElementById(idProduct)
        imageProduct.setAttribute("src", image)
        imageProduct.setAttribute("defaultImage", image)
        button.setAttribute("currentVariant", variant)
        
    })


}
