import { useContext } from "react"
import {Routes, Route} from 'react-router-dom'
import { createUseStyles } from "react-jss"
import { ProductContext } from "context/ProductContext"

import Header from 'layout/Header'
import Footer from "layout/Footer"
import Home from 'pages/Home/Home'
import ProductList from 'pages/ProductList/ProductList'
import ProductDetail from 'pages/ProductDetail/ProductDetail'
import Cart from 'pages/Cart/Cart'
import Checkout from 'pages/Checkout/Checkout'
import React from 'react'

import { flexRow } from "assets/flexer"

const useStyles = createUseStyles({
  mainCont: {
    width: '100%', 
    padding: '0 50px',
    marginBottom: 50,
  },
  
})

function App() {
  const {productData} = useContext(ProductContext)  

  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <div className={classes.mainCont}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='productlist' element={<ProductList productData={productData}  />} />
          <Route path='productdetail/:id' element={<ProductDetail productData={productData} />} />
          <Route path='cart' element={<Cart productData={productData} />} />
          <Route path='checkout' element={<Checkout productData={productData} />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
