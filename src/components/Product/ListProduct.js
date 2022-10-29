import React, {useContext} from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import { flexRow, flexColumn } from 'assets/flexer'
import { Colors } from 'assets/colors'
import { CartContext } from 'context/CartContext'
import { getFirstPart, getDecimalPart } from 'utils'

import RatingStars from './RatingStars'
import Description from './Description'
import AddToCart from 'components/Cart/AddToCart'
import Cart from 'pages/Cart/Cart'

const contHeight = 230
const useStyles = createUseStyles({
    productCont: {
        ...flexRow('nowrap', 'space-between', 'flex-start'),
        boxSizing: 'content-box',
        width: '100%',
        height: contHeight,
        backgroundColor: 'white',
        marginBottom: 80,
    },
    leftCont: {
        ...flexColumn('nowrap', 'flex-start', 'center'),
        height: contHeight,
        minWidth: 125,
        maxWidth: 125,
        marginRight: 30,

        '& p':{
            width: '100%',
            fontSize: '0.85rem',
            textAlign: 'left',
            marginTop: 30
        }
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
    rightCont: {
        ...flexColumn('nowrap', 'space-between', 'flex-start'),
        minWidth: 150,
        height: contHeight,
    },
    productPriceLarge: {
        fontFamily: `'Bitter', serif`,
        color: Colors.red,
        fontSize: '1.6rem',
        fontWeight: 800,
         '& span': {
            display: 'inline-block',
            fontSize: '1.1rem',
            fontWeight: 700,
            transform: 'translate(-4px, -6px)'
         }
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
    }
})

export default function ListProduct({product}) {

    const {isInCart} = useContext(CartContext)
    const {id, title, price, image, description, category} = product
    const {rate, count} = product.rating

    const classes = useStyles()
  return (
    <div className={classes.productCont}>
        <div className={classes.leftCont}>
            <img className={classes.productImg} src={image} alt='product'></img>
        <p>• {category}</p>
        </div>
        <div className={classes.middleCont}>
            <Link to={`/productdetail/${id}`} className={classes.productLink}>{title}</Link>
            <div className={classes.ratingCont}>
                <div><RatingStars rate={rate}/></div>
                <p>({count})</p>
            </div>
            <Description description={description}/>
        </div>
        <div className={classes.rightCont}>
            <p className={classes.productPriceLarge}>{getFirstPart(price)},<span>{getDecimalPart(price)}</span></p>
            <p className={classes.deliveryMsg}><span>IN STOCK</span> Ordered before 11:59, delivered tomorrow</p>
            <div className={classes.cartOptions}>
                <AddToCart id={id} isInCart={isInCart(id) && 'true'}/>
            </div>
        </div>
    </div>
  )
}
