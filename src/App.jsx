// App.js
import React, { useState } from 'react'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
// import Shoppingcart from './component/shoppingcart';
import Banner from '../src/component/banner/banner'
import Product from './component/product'
import NewItem from './component/newItems'
import LoginPage from './component/LoginFeature/LoginPage'
// import Cart from './component/cart';

function App() {
  const [isLoginPageOpen, setLoginPageOpen] = useState(false) // using the state to control the login visibility

  // Implement modal feature for the login page to pop up
  const toggleLoginPage = () => {
    setLoginPageOpen(!isLoginPageOpen)
    console.log('Login page is now:', isLoginPageOpen ? 'open' : 'closed')
  }

  return (
    <>
      <Navigation setLoginPageOpen={toggleLoginPage} />
      <NewItem setLoginPageOpen={toggleLoginPage} />
      <LoginPage toggleLoginPage={toggleLoginPage} LoginPage={LoginPage} />
      <Banner setLoginPageOpen={toggleLoginPage} />
      <Product setLoginPageOpen={toggleLoginPage} />
      <Newsletter setLoginPageOpen={toggleLoginPage} />
    </>
  )
}

export default App
