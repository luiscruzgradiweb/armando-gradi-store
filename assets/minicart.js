class Cart{

    addProduct(button){
         const buttonId=button.target.getAttribute('id')
         const quantity=document.getElementById(`quantity__input-${buttonId}`)
         product.setQuantity(quantity.value);
         if(product.getProductId()!==undefined){
            fetch(window.Shopify.routes.root + 'cart/add.js', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json' 
                 },
                 body: JSON.stringify(product.getProduct())
             })
             .then(response => {
                 return response.json();
             })
             .catch((error) => {
                 console.error('Error:', error);
             })
             .finally(() => {
                this.updatePriceMinicart()
                this.updateTotalPriceMinicart()
                this.openMinicart()
             });
         }else{
             alert('Por favor seleccione algún producto')
             
         }
     }

    async updateProduct(productId,quantity){
        
        let updates = {
                [productId]:quantity,
             }
        await fetch( window.Shopify.routes.root + 'cart/update.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({updates:updates}) 
        })
        .then( response => {
            return response.json()
        })
        .catch( error => {
            console.error('Error:', error);
        })
        
    }

    getSection = async section => {
        return await fetch( `/?sections=${section}` )    
    }
    
    
    updatePriceMinicart =  () => {
        const productsMinicart = document.getElementById('products-minicart')
        const productMinicartUpdated = this.getSection('products-minicart')
        productMinicartUpdated
        .then( response => response.json() )
        .then( data =>productsMinicart.innerHTML= data['products-minicart'] )
    } 
    
    updateTotalPriceMinicart = () => {
        const summaryMinicart = document.getElementById('minicart-summary')
        const summaryMinicartUpdated = this.getSection('minicart-summary')
        summaryMinicartUpdated
        .then( response => response.json() )
        .then( data =>summaryMinicart.innerHTML= data['minicart-summary'] )
    }

    openMinicart = () => {
        const minicart = document.getElementById('minicart')
        const sideCartOverlay = document.getElementById('side-cart-overlay')
        minicart.style.visibility = 'visible'
        sideCartOverlay.classList.add('active')
     }

 }

 const cart=new Cart()

const openMinicart = () => {
    cart.openMinicart()
}