// (function(){



const updateQuantityProduct = async (button) => {

    const operation = button.getAttribute("name")
    const referenceToInput = button.getAttribute("referenceInput")
    const variantId = button.getAttribute("variant")
    const quantityInput = document.getElementById(referenceToInput)
    
    switch (operation) {
        case 'plus':
            await cart.updateProduct(variantId, parseInt(quantityInput.value) + 1)
            break;
        case 'minus':
            await cart.updateProduct(variantId, parseInt(quantityInput.value) - 1 )
            break;
    }
    await cart.updatePriceMinicart()
    await cart.updateTotalPriceMinicart()
}


// })();