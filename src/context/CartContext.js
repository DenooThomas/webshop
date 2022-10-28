import { useState, createContext } from 'react'

const CartContext = createContext()

function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    function isInCart(id){
        const check = cart.find(cartItem => cartItem.id === id)
        if(check === undefined){
            return false
        } else { 
            return true
        }
    }

    function isQuantityChanged(id, quantity){
        const check = cart.find(cartItem => cartItem.id === id)
        if(check.quantity !== quantity){
            return true
        } else {
            return false
        }
    }

    function findCartObj(id){
        const check = cart.find(cartItem => cartItem.id === id)
        if(check === undefined){
            return false
        } else {
            return check
        }
    }

    function changeQuantity(id, quantity){    
        const newQuantity = quantity <= 0 ? 1 : quantity 
        const newCart = cart.map(cartItem => {
            if(cartItem.id === id){
                if(cartItem.quantity !== newQuantity){
                    return {...cartItem, quantity: newQuantity}
                }
            }
            return cartItem
        })
        setCart(newCart)
    }

    function addToCart(id, quantity){
        if(!isInCart(id)){
            setCart(currentCart => [...currentCart, {id, quantity}])
        } else if(isQuantityChanged(id, quantity)) {
            changeQuantity(id, quantity)
        }
    }

    function removeFromCart(id){
        setCart(currentCart => {
            return currentCart.filter(item => item.id !== id)
        })
    }

  return (
    <CartContext.Provider 
        value={{
            cart, 
            addToCart, 
            removeFromCart, 
            isInCart, 
            changeQuantity,
            findCartObj
        }}>
        {children}
    </CartContext.Provider>
  )
}

export {CartContextProvider, CartContext}