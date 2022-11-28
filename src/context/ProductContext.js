import { useState, useEffect, createContext } from 'react'

const ProductContext = createContext()

function ProductContextProvider({children}) {

  const [productData, setProductData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(data=>setProductData(data))
  }, [])

  const categories = productData.length > 0 && [...new Set(productData.map(product => product.category))]
  
  function findProduct(id){
    const product = productData.find(product => product.id === parseInt(id))
    if(product){
      return product
    } else {
      return null
    }
  }

  return (
    <ProductContext.Provider value={{
      productData,
      categories,
      findProduct,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContextProvider, ProductContext}