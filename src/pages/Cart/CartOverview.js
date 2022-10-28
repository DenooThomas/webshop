import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import useProductsCart from 'hooks/useProductsCart'
import { flexRow } from 'assets/flexer'
import { Colors } from 'assets/colors'

const useStyles = createUseStyles({
    infoCont: {
        boxSizing: 'content-box',
        minWidth: 250,
        minHeight: 230,
        position: 'sticky',    
        top: 0,
        padding: 20,
    },
    title:{
        marginBottom: 15,
    },
    topCont: {

    },
    row:{
        ...flexRow('nowrap', 'space-between', 'center'),
        width: '100%',
        marginBottom: 10,

        '& span':{
            display: 'inline-block',
        }
    },
    bottomCont: {
        position: 'relative',
        marginTop: 20,
        padding: '20px 0',
        '&:before':{
            position: 'absolute',
            display: 'block',
            content: '""',
            top: 0,
            width: '100%',
            height: 1,
            backgroundColor: Colors.black,
        }
    },
    button: {
        width: '100%',
        height: 45,
        fontSize: '1.2rem',
        border: 'none',
        boxShadow: 'rgb(10 10 10 / 25%) 0px 4px 0px -2px',
        position: 'relative',
        zIndex: 1,
        cursor: 'pointer',
        
        '&:before':{
            position: 'absolute',
            display: 'block',
            content: '""',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: Colors.lightBlue,
            zIndex: -1,
            transition: 'all 0.2s ease-in-out',
        },

        '&:hover::before':{
            backgroundColor: Colors.hoverBlue,
        },

        '& a':{
            color: Colors.white,
        },

    }
    
})

function CartOverview({cart, productData}) {

    const totalPrice = useProductsCart(productData)
    const deliveryCost = 4.99

    const classes = useStyles()

  return (
    <div className={classes.infoCont}>
    <h2 className={classes.title}>Overview</h2>
    <div className={classes.topCont}>
        <div className={classes.row}><span>{`Articles (${cart.length})`}</span>  <span>{totalPrice}</span></div>
        <div className={classes.row}><span>Delivery cost:</span> <span>${deliveryCost}</span></div>
    </div>
    <div className={classes.bottomCont}>
        <div className={classes.row}><span>Total</span> <span>{`$${(parseFloat(totalPrice) + deliveryCost).toFixed(2)}`}</span></div>
    </div>
    <button className={classes.button}><Link to='/checkout'>Proceed to checkout</Link></button>
    </div>
  )
}

export default CartOverview