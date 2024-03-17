// App.js
<<<<<<< HEAD
=======

>>>>>>> cae1160b2a0c23cc85b4a2c16026dcf8539405ac
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from '../src/component/corousal/index'
<<<<<<< HEAD
=======

>>>>>>> cae1160b2a0c23cc85b4a2c16026dcf8539405ac


// Linking to componenets

import Home from "./component/home/Home";
import Consoles from "./component/consoles/Consoles";
import Laptops from "./component/Laptop/Laptop";
import LaptopOverview from "./component/Laptop-list/laptop-overview";
import ShoppingCart from "./component/cart"

import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";
import { CardFooter } from '@material-tailwind/react'
import QuickView from "./component/quickview"


<<<<<<< HEAD
=======

>>>>>>> cae1160b2a0c23cc85b4a2c16026dcf8539405ac
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


       
        <Route path="/smartphones" element={<SmartPhones />} />
        <Route path="/specialdeals" element={<SpecialDeals />} />
      </Routes>

      <QuickView />
      <Banner />
      <Corousal />
      <NewItem />
      <Product />
      <Newsletter />
    </Router>
  );
}

export default App;
