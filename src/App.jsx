// App.js
import React from 'react'
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
import Laptops from "./component/laptops/Laptops";
import SmartPhones from "./component/smartphones/SmartPhones";
import SpecialDeals from "./component/specialdeals/SpecialDeals";


function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Consoles" element={<Consoles />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/SmartPhones" element={<SmartPhones />} />
        <Route path="/SpecialDeals" element={<SpecialDeals />} />
      </Routes>
      <Corousal />
      <NewItem />
      <Banner />
      <Product />
      <Newsletter />
    </Router>
  );
}

export default App;
