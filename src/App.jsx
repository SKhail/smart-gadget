// App.js
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from '../src/component/corousal/index'


// Linking to componenets

import Home from "./component/home/Home";
import Consoles from "./component/consoles/Consoles";
import Laptops from "./component/Laptop/Laptop";

import ShoppingCart from "./component/cart/cart"

import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";
import { CardFooter } from '@material-tailwind/react'



function App() {
  const [cart, setCart] = useState([])

  const addtoCart = (item)=> {
    setCart([...cart, item])
  }

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/laptops" element={<Laptops addtoCart={addtoCart} />} />
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} />} />


       
        <Route path="/smartphones" element={<SmartPhones addtoCart={addtoCart} />} />
        <Route path="/specialdeals" element={<SpecialDeals />} />
      </Routes>
      <Banner />
      <Corousal />
      <NewItem />
      <Product />
      <Newsletter />
    </Router>
  )
}

export default App
