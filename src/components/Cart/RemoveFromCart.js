import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { CartContext } from 'context/CartContext'
import trash_blue from "assets/images/trash_blue_24.png"

const useStyles = createUseStyles({
  button: {
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  image: {
    width: 20,
    height: 20
  }

})

function RemoveFromCart({id}) {

  const {removeFromCart} = useContext(CartContext)

  const classes = useStyles()
  return (
    <button className={classes.button} onClick={() => removeFromCart(id)}>
      <img className={classes.image} src={trash_blue} alt="remove from cart"></img>
    </button>
  )
}

export default RemoveFromCart