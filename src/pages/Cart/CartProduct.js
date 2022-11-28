import React from 'react'
import { Link } from "react-router-dom"
import { createUseStyles } from 'react-jss'
import { flexRow, flexColumn } from 'assets/flexer'

import { Colors } from 'assets/colors'
import Rating from '../../components/Product/components/Rating'
import ChangeQuantity from 'components/Cart/ChangeQuantity'
import RemoveFromCart from 'components/Cart/RemoveFromCart'


const contHeight = 230
const useStyles = createUseStyles({
    productCont: {
        ...flexRow('nowrap', 'space-between', 'flex-start'),
        boxSizing: 'content-box',
        width: '100%',
        height: contHeight,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    leftCont: {
        ...flexColumn('nowrap', 'flex-start', 'center'),
        height: contHeight,
        minWidth: 125,
        maxWidth: 125,
        marginRight: 30,
    },
    productImg: {
        maxWidth: 115,
        maxHeight: 165,
        objectFit: 'contain',

    },
    middleCont: {
        ...flexColumn('nowrap', 'flex-start', 'flex-start'),
        height: contHeight,
        width: '100%',
        marginRight: 20,
    },
    'productLink': {
        fontSize: '1.2rem',
        fontWeight:  '600',
        marginBottom: 10
    },
    cartOptions: {
        ...flexRow('nowrap', 'space-between', 'center'),
        width: 100,
        height: 60,
        marginBottom: 10,
    },
    deliveryMsg: {
        ...flexRow('wrap',' flex-start', 'flex-start'),
        fontSize: '0.8rem',
        color: Colors.green,
        width: 200,

        '& span':{
            display: 'block',
            fontSize: '0.6rem',
            padding: 3,
            marginBottom: 5,
            border: `1px solid ${Colors.green}`
        }
    },
    rightCont: {
        ...flexColumn('nowrap', 'space-between', 'flex-end'),
        minWidth: 150,
        height: contHeight,
    },
    productPrice: {
        fontWeight: 600,
    },
})

function CartProduct({product}) {

    const {id, title, price, image} = product
    const {rate, count} = product.rating

    const classes = useStyles()
  return (
    <div className={classes.productCont}>
        <div className={classes.leftCont}>
            <img className={classes.productImg} src={image} alt='product'></img>
        </div>
        <div className={classes.middleCont}>
            <Link to={`/productdetail/${id}`} className={classes.productLink}>{title}</Link>
            <Rating rate={rate} count={count} />
            <div className={classes.cartOptions}>
                <ChangeQuantity id={id}/>
                <RemoveFromCart id={id}/>
            </div>
            <p className={classes.deliveryMsg}><span>IN STOCK</span> Ordered before 11:59, delivered tomorrow</p>
        </div>
        <div className={classes.rightCont}>
            <p className={classes.productPrice}>${price}</p>
        </div>
    </div>
  )
}

export default CartProduct