import React from 'react'
import { Link } from "react-router-dom"
import { createUseStyles } from 'react-jss'
import { flexRow, flexColumn } from 'assets/flexer'

import RatingStars from './RatingStars'
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
        maxHeight: 175,
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

    ratingCont: {
        ...flexRow('nowrap', 'flex-start', 'center'),
        marginBottom: 10,

        '& div':{
            ...flexRow('nowrap', 'flex-start', 'center'),

            '& img': {
                width: 12,
                height: 12
            },
        },
        '& p': {
            marginLeft: 5,
            fontSize: '0.8rem',
        },
    },
    cartOptions: {
        ...flexRow('nowrap', 'space-between', 'center'),
        width: 100,
        height: 60,
        marginBottom: 10,
    },
    rightCont: {
        ...flexColumn('nowrap', 'space-between', 'flex-start'),
        minWidth: 150,
        height: contHeight,
    },
    productPriceSmall: {
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
            <div className={classes.ratingCont}>
                <div><RatingStars rate={rate}/></div>
                <p>({count})</p>
            </div>
            <div className={classes.cartOptions}>
                <ChangeQuantity id={id}/>
                <RemoveFromCart id={id}/>
            </div>
            <p className={classes.deliveryMsg}><span>IN STOCK</span> Ordered before 11:59, delivered tomorrow</p>
        </div>
        <div className={classes.rightCont}>
            <p className={classes.productPriceSmall}>${price}</p>
        </div>
    </div>
  )
}

export default CartProduct