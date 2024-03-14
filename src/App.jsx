// App.js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import LoginPage from './component/LoginFeature/LoginPage'
// import Cart from './component/cart';
import Corousal from './component/corousal'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Corousal />
        <NewItem />
        <Banner />
        <Product />
        <Newsletter />
      </>
    </BrowserRouter>
  )
}
export default App
