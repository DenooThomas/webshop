import React, { useContext, useState } from 'react'
import { CartContext } from 'context/CartContext'
import { createUseStyles } from 'react-jss'

import { Colors } from 'assets/colors'

const useStyles = createUseStyles({
  input: {
    width: 50,
    height: '100%',
    padding: 5,
    marginRight: 5,
    border: `1px solid ${Colors.grey}`,
    backgroundColor: `${Colors.white} !important`,
  },
})

function ChangeQuantity({id}) {
    const {findCartObj, changeQuantity} = useContext(CartContext)
    const obj = findCartObj(id)
    
    const [quantity, setQuantity] = useState()



    const classes = useStyles()
  return (
    <React.Fragment>
    <select 
      name='quantity' 
      id='quantity'
      className={classes.input}
      defaultValue={obj.quantity}
      onChange={(e) => changeQuantity(id, e.target.value)}
      >
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </select>
    </React.Fragment>
  )
}

export default ChangeQuantity