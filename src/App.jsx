// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/navigation/Navbar";
import Newsletter from "./component/newsletter";
import Banner from "../src/component/banner/banner";
import Product from "./component/product";
import NewItem from "./component/newItems";
import Corousal from "./component/corousal";
// import Home from "../src/component/home/Home";
import Consoles from "../src/component/consoles/Consoles";
import Laptops from "../src/component/laptops/Laptops";
import SmartPhones from "../src/component/smartphones/SmartPhones";
import SpecialDeals from "../src/component/specialdeals/SpecialDeals";

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
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