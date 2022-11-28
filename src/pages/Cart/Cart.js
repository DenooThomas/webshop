import React, {useContext, useState} from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { CartContext } from 'context/CartContext'

import useProductsCart from 'hooks/useProductsCart'
import { flexColumn, flexRow } from 'assets/flexer'
import CartProduct from './CartProduct'
import CartOverview from './CartOverview'
import { Fonts } from 'assets/fonts'
import { Colors } from 'assets/colors'

import kitty from "assets/images/kitty.png"
import shopping_cart from "assets/images/shopping_cart.svg"


const useStyles = createUseStyles({
  cart: {
    ...flexRow('nowrap', 'space-between', 'flex-start'),
    width: '100%',
  },
  header: {
    ...flexRow('nowrap', 'flex-start', 'center'),
    marginBottom: 20,
    '& img': {
      width: 40,
      height: 40,
      marginRight: 20,
    },
  },
  leftCont: {
    marginTop: 20,
  },
  product: {
    height: 260,
  },
  emptyCartCont: {
    ...flexRow('wrap', 'center', 'center'),
    width: '100%',
    marginBottom: 50,
  },
  emptyCartImg: {
    ...flexRow('wrap', 'center', 'center'),
    width: '100%',
    marginBottom: 50,
    '& img': {
      height: 165,
    },
  },
  emptyCartText: {
    width: '100%',
    marginBottom: 20,
    fontSize: '1.4rem',
    '& h3': {
      textAlign: 'center',
      fontFamily: Fonts.Alfa,
      letterSpacing: 0.2,
      color: Colors.blue,
    },
    '& p': {
      textAlign: 'center',
    },
  },
  button: {
    height: 45,
    padding: '10px 20px',
    boxSizing: 'content-box',
    fontSize: '1.2rem',
    border: 'none',
    boxShadow: 'rgb(10 10 10 / 25%) 0px 4px 0px -2px',
    position: 'relative',
    zIndex: 1,
    cursor: 'pointer',
    color: Colors.lightBlue,

    '&:before':{
        position: 'absolute',
        display: 'block',
        content: '""',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.lightBlue}`,
        zIndex: -1,
        transition: 'all 0.2s ease-in-out',
    },

    '&:hover::before':{
        border: `2px solid ${Colors.lightBlue}`,
    },

    '& a':{
        color: Colors.lightBlue,
    },

}
})

function Cart({productData}) {
  const {cart} = useContext(CartContext)
  

  const classes = useStyles()
  return (
    <React.Fragment>
    <div className={classes.header}>
      <img src={shopping_cart} alt='shopping cart'></img>
      <h1>Shopping cart</h1>
    </div>
    {cart.length > 0 ? 
      <div className={classes.cart}>
        <div className={classes.leftCont}>
          {cart.map(cartItem => {
            const product = productData.find(product => product.id === cartItem.id)
            return (<CartProduct
                key={cartItem.id}
                product={product}
                layout='cart'
                />)
          })}
          <Link to='/productlist'><button className={classes.button}>{`< Continue shopping`}</button></Link>
        </div>
      <CartOverview cart={cart} productData={productData}/>
    </div>
    :
    <div className={classes.emptyCartCont}>
      <div className={classes.emptyCartImg}>
        <img src={kitty} alt='kitty'></img>
      </div>
      <div className={classes.emptyCartText}>
        <h3>Your shopping cart is empty</h3>
        <p>Looking for ideas?</p>
      </div>
      <Link to='/productlist'><button className={classes.button}>{`< Continue shopping`}</button></Link>
    </div>}
    </React.Fragment>
  )
}

export default Cart