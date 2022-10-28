import { useContext } from 'react'

import { CartContext } from 'context/CartContext'

function useProductsCart(productData) {
    const {cart} = useContext(CartContext)
    let totalPrice = 0.0
    cart.forEach(cartItem => {
        return productData.forEach(product => {
            if(cartItem.id === product.id){
                const itemTotal = parseFloat(product.price) * cartItem.quantity
                return totalPrice += itemTotal
            }
        })
    })
    return totalPrice.toFixed(2)
}

export default useProductsCart