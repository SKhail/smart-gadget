// App.js

import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from "./component/navigation"; // Assuming you have the component in Example.js
import Newsletter from "./component/newsletter";
// import Shoppingcart from './component/shoppingcart';
import Banner from "./component/banner";
import Product from "./component/product";
import NewItem from "./component/newItems";
// import Cart from './component/cart'

import React from 'react';
import Home from './Home';
import Consoles from './component/Consoles';
import Laptops from './component/Laptops';
import SmartPhones from './component/SmartPhones'; 
import SpecialDeals from './component/SpecialDeals';


function App() {
  return (
    <Router>
          <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Consoles">Consoles</Link>
            </li>
            <li>
              <Link to="/Laptops">Laptops</Link>
            </li>
            <li>
              <Link to="/SmartPhones">SmartPhones</Link>
            </li>
            <li>
              <Link to="/SpecialDeals">SpecialDeals</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/Consoles" component={Consoles} />
        <Route path="/Laptops" component={Laptops} />
        <Route path="/SmartPhones" component={SmartPhones} />
        <Route path="/SpecialDeals" component={SpecialDeals} />
      </div>
    </Router>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <NewItem />
      {/* <Banner /> */}
      <Product />
      <Newsletter />
    </>
  );
}

export default App;
