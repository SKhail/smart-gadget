// App.js

import React from "react";
import Navigation from "./component/navigation"; // Assuming you have the component in Example.js
import Newsletter from "./component/newsletter";
// import Shoppingcart from './component/shoppingcart';
import Banner from "./component/banner";
import Product from "./component/product";
import NewItem from "./component/newItems";
// import Cart from './component/cart'

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
