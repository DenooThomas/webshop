import { useState, useEffect, createContext } from 'react'

const ProductContext = createContext()

function ProductContextProvider({children}) {

  const [productData, setProductData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(data=>setProductData(data))
  }, [])
  const [selectedData, setSelectedData] = useState([])

  const [filterData, setFilterData] = useState([])

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
          .then(res=>res.json())
          .then(data=>setCategories(data))
  }, [])

  
  console.log(categories)

  return (
    <ProductContext.Provider value={{
      productData,
      categories
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContextProvider, ProductContext}