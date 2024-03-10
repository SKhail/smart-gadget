// App.js

import React from 'react';
import Navigation from './component/navigation'; // Assuming you have the component in Example.js
import Newsletter from './component/newsletter';
// import Shoppingcart from './component/shoppingcart';
import Banner from './component/banner';
import Product from './component/product';
import NewItem from './component/newItems';
// import Cart from './component/cart'
import MyCarousel from './component/corousal'

function App() {
  return (

  <> 
    <Banner />
    <Navigation  
    />  

{/* <Cart /> */}

<MyCarousel />

    <NewItem />

    <Product />

    {/* <Cart /> */}

    {/* <Shoppingcart  /> */}
    <Newsletter />

    </>

  )
}

export default App;
