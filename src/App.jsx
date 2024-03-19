//Imports
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from '../src/component/corousal/index'

// Linking to componenets
import Home from './component/home/Home'
import Consoles from './component/consoles/Consoles'
import Laptops from './component/Laptop/Laptop'

import ShoppingCart from './component/cart/cart'

import SmartPhones from './component/smartphones/SmartPhones'
import SpecialDeals from './component/specialdeals/SpecialDeals'
import { CardFooter } from '@material-tailwind/react'
import QuickView from './component/quickview'

function App() {
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode] = useState(false) // Handle Dark Mode state
  const [showModal, setShowModal] = useState(false) // Login Page

  const addtoCart = (item) => {
    setCart([...cart, item])
  }

  // Helper function to get initial mode
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'))
    return savedMode || false // Default to false if no mode is saved
  }

  // Used for the Login Page
  const handleLoginButtonCLick = () => {
    setShowModal(!showModal) // Toggle showModal state
  }

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <Router>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleLoginPage={() => setShowModal(!showModal)} showModal={showModal} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/consoles' element={<Consoles />} />
        <Route path='/laptops' element={<Laptops addtoCart={addtoCart} />} />
        <Route path='/shoppingcart' element={<ShoppingCart cart={cart} />} />

        <Route path='/smartphones' element={<SmartPhones addtoCart={addtoCart} />} />
        <Route path='/specialdeals' element={<SpecialDeals />} />
      </Routes>

      <QuickView />
      <NewItem />
      <Corousal />
      <Banner />
      <Product />
      <Newsletter />
    </Router>
  )
}

export default App
