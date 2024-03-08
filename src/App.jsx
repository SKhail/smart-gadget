// App.js

import React from 'react';
import Navigation from './component/navigation'; // Assuming you have the component in Example.js
import Newsletter from './component/newsletter';
import Shoppingcart from './component/shoppingcart';
import Banner from './component/banner';
import Product from './component/product';

function App() {
  return (

  <> 
    <Banner />
    <Navigation  
    />  

    <Product />

    <Shoppingcart  />
    <Newsletter />

    </>

  )
}

export default App;
