import { useContext } from 'react'

import { CartContext } from 'context/CartContext'

export default function Checkout({productData}) {
  const {cart} = useContext(CartContext)


  return (
    <div>
      {cart.map(cartItem => {
        return productData.map(product => {
          if(cartItem.id === product.id){
            return (
              <div>
                <p>{product.title}</p>
                <p>{cartItem.quantity}</p>
              </div>
            )
          }
        return null})
        })}
    </div>
  )
}
