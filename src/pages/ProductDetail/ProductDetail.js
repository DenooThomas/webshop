import {useContext} from 'react'
import { ProductContext } from 'context/ProductContext'
import { useParams} from "react-router-dom"

function ProductDetail() {
  const {id} = useParams()

  const {findProduct, productData} = useContext(ProductContext)
  const product = productData.length > 0 && findProduct(id)
  console.log(product)
  return (
    <div>
      <h1>{product.title}</h1>
      <ul>
        <li>{product.category}</li>
        <li>{product.price}</li>
        <li>{product.description}</li>
      </ul>
   </div>
  )
}

export default ProductDetail