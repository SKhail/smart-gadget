// App.js
<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/navigation/Navbar";
import Newsletter from "./component/newsletter";
import Banner from "../src/component/banner/banner";
import Product from "./component/product";
import NewItem from "./component/newItems";
import Corousal from "../src/component/corousal/index";
=======
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from '../src/component/corousal/index'
>>>>>>> 84ca8e9a1b754bc7b34255b95789cd2c0d78d794


// Linking to componenets

import Home from "./component/home/Home";
import Consoles from "./component/consoles/Consoles";
import Laptops from "./component/Laptop/Laptop";
import LaptopOverview from "./component/Laptop-list/laptop-overview";
<<<<<<< HEAD

import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";
=======
import ShoppingCart from "./component/cart"

import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";
import { CardFooter } from '@material-tailwind/react'


>>>>>>> 84ca8e9a1b754bc7b34255b95789cd2c0d78d794

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
<<<<<<< HEAD
        <Route path="/Consoles" element={<Consoles />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/laptop/:id" component={<LaptopOverview />} />
        <Route path="/SmartPhones" element={<SmartPhones />} />
        <Route path="/SpecialDeals" element={<SpecialDeals />} />
=======
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/laptops" element={<Laptops addtoCart={addtoCart} />} />
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} />} />


       
        <Route path="/smartphones" element={<SmartPhones />} />
        <Route path="/specialdeals" element={<SpecialDeals />} />
>>>>>>> 84ca8e9a1b754bc7b34255b95789cd2c0d78d794
      </Routes>
      <Banner />
      <Corousal />
      <NewItem />
      <Product />
      <Newsletter />
    </Router>
  );
}

export default App;
