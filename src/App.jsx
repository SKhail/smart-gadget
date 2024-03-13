// App.js

import React from 'react';
import Navigation from './component/navigation';
import Newsletter from './component/newsletter';
// import Corousal from './component/corousal';
import Product from './component/product';
import NewItem from './component/newItems';




function App() {
  return (
    <div className="app-container">
      <Navigation />
      {/* <Corousal /> */}
      <NewItem />
    
      <Product />
      <Newsletter />
    </div>
  );
}

export default App;
