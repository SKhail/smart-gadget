import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation/Navbar'
import Newsletter from './component/newsletter'
import Banner from './component/banner/banner' // Corrected import path
import Product from './component/product'
import NewItem from './component/newItems'
import Corousal from './component/corousal/index' // Corrected import path
import Latest from './component/latest/Latest'
import SpecialDeals from './component/specialdeals/SpecialDeals'
import Home from './component/home/Home'
import Consoles from './component/consoles/Consoles'
import Laptops from './component/Laptop/Laptop'
import ShoppingCart from './component/cart/cart'
import SmartPhones from './component/smartphones/SmartPhones'
import QuickView from './component/quickview'

import './index.css'

import ChatWindow from './component/chat/ChatWindow' // Import from Chat folder
import ChatInput from './component/chat/ChatInput' // Import from Chat folder
import Sidebar from './component/chat/sidebar' // Import from Sidebar folder
import ChatButton from './component/chat/ChatButton'
import ChatSystem from '../src/component/chat/chatsystem'

function App() {
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode] = useState(getInitialMode()) // Initialize dark mode from localStorage
  const [showModal, setShowModal] = useState(false)
  const [showChatSystem, setShowChatSystem] = useState(false)
  const [messages, setMessages] = useState([])

  // Helper function to get initial mode
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'))
    return savedMode || false
  }

  // Used for the Login Page
  const handleLoginButtonClick = () => {
    setShowModal(!showModal) // Toggle showModal state
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
    localStorage.setItem('darkMode', !darkMode) // Save dark mode state in localStorage
  }

  const handleChatButtonClick = () => {
    setShowChatSystem(true)
  }

  const handleCloseChat = () => {
    setShowChatSystem(false)
  }

  const handleSendMessage = (text) => {
    setMessages([...messages, { sender: 'Me', text }])
  }

  const addtoCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleLoginPage={handleLoginButtonClick} showModal={showModal} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consoles' element={<Consoles />} />
          <Route path='/laptops' element={<Laptops addtoCart={addtoCart} />} />
          <Route path='/shoppingcart' element={<ShoppingCart cart={cart} />} />
          <Route path='/smartphones' element={<SmartPhones addtoCart={addtoCart} />} />
          <Route path='/specialdeals' element={<SpecialDeals />} />
          <Route path='/latest' element={<Latest />} />
        </Routes>

        <div className='app'>
          {!showChatSystem && <ChatButton onClick={handleChatButtonClick} />}
          {showChatSystem && <ChatSystem messages={messages} onSendMessage={handleSendMessage} onClose={handleCloseChat} />}
          <ChatSystem messages={messages} onSendMessage={handleSendMessage} onClose={handleCloseChat} />
        </div>

        <QuickView />
        <NewItem />
        <Corousal />
        <Banner />
        <Product />
        <Newsletter />
      </div>
    </Router>
  )
}

export default App
