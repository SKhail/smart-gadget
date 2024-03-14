// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from '../src/component/corousal/index'
import Home from '../src/component/home/Home'
import Consoles from '../src/component/consoles/Consoles'
import Laptops from '../src/component/laptops/Laptops'
import SmartPhones from '../src/component/smartphones/SmartPhones'
import SpecialDeals from '../src/component/specialdeals/SpecialDeals'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/Consoles' component={Consoles} />
          <Route path='/Laptops' component={Laptops} />
          <Route path='/SmartPhones' component={SmartPhones} />
          <Route path='/SpecialDeals' component={SpecialDeals} />
        </Routes>
        <Navigation />
        <Corousal />
        <NewItem />
        <Banner />
        <Product />
        <Newsletter />
      </div>
    </Router>
  )
}

export default App
