import React, { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'

import { CartContext } from 'context/CartContext'
import { flexRow } from 'assets/flexer'
import { Colors } from 'assets/colors'
import plus_black from "assets/images/plus_black_24.png"
import check_green from "assets/images/check_green_24.png"
import cart_black from "assets/images/cart_black_24.png"
import cart_green from "assets/images/cart_green_24.png"
import { hover } from '@testing-library/user-event/dist/hover'

const hoverInCart = {
  theme: {
    border: `1px solid ${Colors.lightGreen}` 
  }
}

const useStyles = createUseStyles({
  inputCont: (props) => ({
    ...flexRow('nowrap', 'center', 'center'),
    height: 60,
    transition: 'all 2s ease-in-out',
  }),
  select: {
    width: 50,
    height: '100%',
    padding: 5,
    marginRight: 5,
    border: `1px solid ${Colors.grey}`,
    backgroundColor: `${Colors.white} !important`,
  },
  buttonCont: {
    ...flexRow('nowrap', 'space-between', 'center'),
    position: 'relative',
    height: '100%',
    padding: 20,
    zIndex: 1,

    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      backgroundColor: (props) => props.backgroundColor,
      boxShadow: '0 4px 0-2px rgba(3,3,26,.25)',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover::before':{
      cursor: 'pointer',
      backgroundColor: (props) => props.backgroundColorHover,
    },
  },
  'inCart': {
    border: `1px solid ${Colors.green}`,
  },

  icon: {
    boxSizing: 'content-box',
    pointerEvents: 'none'
  },
  small: {
    width: 16,
    height: 16,
    padding: 5,
  }
})
function AddToCart({...props}) {
  const {addToCart, findCartObj} = useContext(CartContext)
  const {id, isInCart} = props
  const [quantity, setQuantity] = useState(1)

  const cartObj = findCartObj(id)
  

  function handleChange(e){
    setQuantity(parseInt(e.target.value))
  }

  const classes = useStyles(isInCart ? 
    {...props, 
      backgroundColor: Colors.white,
      backgroundColorHover: Colors.white} 
    : 
    {...props})

  return (
    <div className={classes.inputCont}>
      <select
        name='quantity' 
        id='quantity'
        className={classes.select}
        defaultValue={cartObj.quantity ? cartObj.quantity : '1'}
        onChange={handleChange}
        >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <div
      className={`${classes.buttonCont} ${isInCart && classes.inCart}`}
      onClick={() => addToCart(id, quantity)}>
        <img className={`${classes.icon} ${classes.small}`} src={isInCart ? check_green : plus_black} alt="plus icon"></img>
        <img className={classes.icon} src={isInCart ? cart_green : cart_black} alt="cart icon"></img>
      </div>
    </div>
  )
}

AddToCart.defaultProps = {
  backgroundColor: '#FEBD00',
  backgroundColorHover: '#FFC71F',
  border: '1px solid transparent'
}

export default AddToCart