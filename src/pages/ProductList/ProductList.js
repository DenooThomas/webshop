import { createUseStyles } from 'react-jss'

import {flexColumn, flexRow} from "assets/flexer"
import Product from 'components/Product/Product'

import product_banner from "assets/images/product_banner.png"

const useStyles = createUseStyles({
  productListCont: {
    ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    width: '100%',
  },
  title: {
    marginBottom: 20,
  },
  bannerCont: {
    ...flexRow('nowrap', 'center', 'center'),
    width: '100%',
    height: '250',
    backgroundColor: '#FFF59E',
    marginBottom: 60,

    '& img': {
      height: 200,
    }
  }
})

function ProductList({productData}) {
  const classes = useStyles()
  return (
    <div className={classes.productListCont}>
    <h1 className={classes.title}>Discounts on no items</h1>
    <div className={classes.bannerCont}>
      <img src={product_banner} alt='productlist banner'></img>
    </div>
      {productData.length > 0 &&
      productData.map(product => {
        return (
          <Product
          key={product.id}
          product={product}
          layout="list"  
          />)
      }) }
    </div>
  )
}

export default ProductList