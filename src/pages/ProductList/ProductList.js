import { createUseStyles } from 'react-jss'
import { useContext } from 'react'

import { ProductContext } from 'context/ProductContext'
import {flexColumn, flexRow} from "assets/flexer"
import Filter from './Filter/Filter'
import ListProduct from './ListProduct'
import product_banner from "assets/images/product_banner.png"
import SortingSelector from './Filter/SortingSelector'
import { useEffect, useState } from 'react'

const useStyles = createUseStyles({
  productListWrapper: {
    ...flexRow('nowrap', 'center', 'flex-start'),
  },
  productListCont: {
    ...flexRow('wrap', 'center', 'center'),
    width: '100%',  
    paddingLeft: 20,
  },
  topCont: {
    ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    width: '100%',
  },
  banner: {
    width: '100%',
  },
  title: {
    marginBottom: 20,
  },
  bannerImg: {
    ...flexRow('nowrap', 'center', 'center'),
    width: '100%',
    height: '250',
    backgroundColor: '#FFF59E',
    marginBottom: 40,

    '& img': {
      height: 200,
    }
  },
  sortingCont:{
    ...flexRow('nowrap', 'space-between', 'center'),
    width: '100%',
    height: '2rem',
    marginBottom: 40,
    '& div': {
      height: '100%',
    },
    '& span': {
    fontSize: '0.8rem',
    marginRight: 10,
  },
}})

function ProductList() {
  const {productData} = useContext(ProductContext)
  const [selectedProducts, setSelectedProducts]= useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  

  function selectCategory(value) {
    const check = selectedCategories.find(category => category === value)
    if(check){
      const newSelectedCategories = selectedCategories.filter(category => category !== value)
      setSelectedCategories(newSelectedCategories)
    } else {
      setSelectedCategories(currentSelection => [...currentSelection, value])
    }
  }

  
  function GenerateProducts(){
    if(selectedProducts.length === 0){
      productData.map(product => {
        if(selectedCategories.length > 0){
          return selectedCategories.map(category => {
            if(product.category === category){
              return selectedProducts.push(
                <ListProduct
                key={product.id}
                product={product}
                />)
            } else {
              return null
            }
          })
        }
        else {
          return selectedProducts.push(
            <ListProduct
            key={product.id}
            product={product}
            />)
        }
      })
    }
    return selectedProducts
  }

  useEffect(() => {
    setSelectedProducts([])
  }, [selectedCategories])

  const classes = useStyles()
  return (
    <div className={classes.productListWrapper}>
      <Filter selectCategory={selectCategory}/>
      <div className={classes.productListCont}>
        <div className={classes.topCont}>
            <div className={classes.banner}>
              <h1 className={classes.title}>Discounts on no items</h1>
              <div className={classes.bannerImg}>
                <img src={product_banner} alt='productlist banner'></img>
              </div>
            </div>
            <div className={classes.sortingCont}>
              <span>{selectedProducts.length} results</span>
              <div>
                <span>Sort by:</span>
                <SortingSelector />
              </div>
            </div>
        </div>
        {productData.length > 0 && <GenerateProducts />}
      </div>
    </div>
  )
}

export default ProductList