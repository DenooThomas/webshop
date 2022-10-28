import React, {useContext} from 'react'
import { createUseStyles } from 'react-jss'

import { CartContext } from 'context/CartContext'
import { flexRow } from 'assets/flexer'
import ChangeQuantity from './ChangeQuantity'
import AddToCart from './AddToCart'
import RemoveFromCart from './RemoveFromCart'

const useStyles = createUseStyles({
  optionCont: {
    ...flexRow('nowrap', 'space-between', 'center'),
    height: 50,

    '& *': {
      margin: '0 5px'
    }
  }
})

function CartOptions({id}) {
  const {findCartObj} = useContext(CartContext) 
  
  const cartObj = findCartObj(id)
  console.log("cartObj => ", cartObj)
  const classes = useStyles()
  return (
    <div className={classes.optionCont}>
      <ChangeQuantity id={cartObj.id} quantity={cartObj.quantity} />
      <AddToCart id={cartObj.id} quantity={cartObj.quantity} />
      <RemoveFromCart id={cartObj.id} quantity={cartObj.quantity} />
    </div>
  )
}

export default CartOptions