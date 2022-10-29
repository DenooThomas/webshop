import React from 'react'

import CartProduct from './CartProduct'
import ListProduct from './ListProduct'


function Product({product, layout}) {

    return (
        <React.Fragment>
        {layout === 'list' ?
        <ListProduct product={product} />
        :
        <CartProduct product={product} />}
        </React.Fragment>   
    )
}


export default Product