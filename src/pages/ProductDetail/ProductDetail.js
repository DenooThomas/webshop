import React, {useContext, useState} from 'react'
import {useParams} from "react-router-dom"

import { CartContext } from 'context/CartContext'

import Button from 'components/Button'
import InputQuantity from 'components/Cart/ChangeQuantity'

function ProductDetail({productData}) {
  const {id} = useParams()
  const {cart, addToCart, removeFromCart, isInCart} = useContext(CartContext)
  
  const [quantity, setQuantity] = useState(1)
  function changeQuantity(value){
    setQuantity(parseInt(value))
  }

  const cartItem = cart.find(cartItem => cartItem.id === id)
  console.log("cartItem => ", cartItem)

  return (
    <div>
      {productData.length > 0 &&
      productData.map(product => {
        if(product.id === parseInt(id)){
          return (
            <React.Fragment key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            {isInCart(product.id) ? 
            <Button action={() => removeFromCart(product.id)} text={'Remove'}/>
            :
            <React.Fragment>
            <input type='number' min='1' value={quantity} onChange={(e) => changeQuantity(e.currentTarget.value)}></input>
            <Button action={() => addToCart(product.id, quantity)} text='Add to cart' />
            </React.Fragment>}
            <Button action={() => console.log(cart)} text='Log cart' />
            </React.Fragment>
          )
        } else { return null }
      })}
    </div>
  )
}

export default ProductDetail