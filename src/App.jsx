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
import LaptopOverview from "./component/Laptop-list/laptop-overview";
import ShoppingCart from "./component/cart"

import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";
import { CardFooter } from '@material-tailwind/react'

import SmartPhones from './component/smartphones/SmartPhones'
import SpecialDeals from './component/specialdeals/SpecialDeals'

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
        <Route path="/Consoles" element={<Consoles />} />
        <Route path="/Laptops" element={<Laptops addtoCart={addtoCart} />} />
        <Route path="/ShoppingCart" element={<ShoppingCart cart={cart} />} />


       
        <Route path="/SmartPhones" element={<SmartPhones />} />
        <Route path="/SpecialDeals" element={<SpecialDeals />} />
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
