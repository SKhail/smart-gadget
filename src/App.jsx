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
import ShoppingCart from './component/cart'
import SmartPhones from './component/smartphones/SmartPhones'
import Computerstablets from './component/computerstablets/Computerstablets'
import Refurbished from './component/refurbished/Refurbished'
import HeadphonesSpeakers from './component/headphonesSpeakers/HeadphonesSpeakers'
import Favoritegadget from './component/favoritegadgets/Favoritegadget'
import Search from './component/search'

import QuickView from './component/quickview'

import './index.css'

//Importing ChatBot
import ChatWindow from './component/chat/ChatWindow' // Import from Chat folder
import ChatInput from './component/chat/ChatInput' // Import from Chat folder
import Sidebar from './component/chat/sidebar' // Import from Sidebar folder
import ChatButton from './component/chat/ChatButton'
import ChatSystem from '../src/component/chat/chatsystem'

function App() {
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const [showChatSystem, setShowChatSystem] = useState(false)
  const [messages, setMessages] = useState([])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark') // Add 'dark' class to element
    } else {
      document.documentElement.classList.remove('dark') // Remove 'dark' class from element
    }

    localStorage.setItem('darkMode', !darkMode)
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
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} />} />
          <Route path='/Consoles' element={<Consoles addtoCart={addtoCart} darkMode={darkMode} />} />
          <Route path='/laptops' element={<Laptops addtoCart={addtoCart} darkMode={darkMode} />} />
          <Route path='/shoppingcart' element={<ShoppingCart cart={cart} />} />
          <Route path='/smartphones' element={<SmartPhones addtoCart={addtoCart} darkMode={darkMode} />} />
          <Route path='/specialdeals' element={<SpecialDeals addtoCart={addtoCart} darkMode={darkMode} />} />
          <Route path='/latest' element={<Latest />} darkMode={darkMode} />
          <Route path='/computerstablets' element={<Computerstablets darkMode={darkMode} />} />
          <Route path='/refurbished' element={<Refurbished darkMode={darkMode} />} />
          <Route path='/headphonesSpeakers' element={<HeadphonesSpeakers darkMode={darkMode} />} />
          <Route path='/favoritegadget' element={<Favoritegadget />} darkMode={darkMode} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <div className='app'>
          {!showChatSystem && <ChatButton onClick={handleChatButtonClick} />}
          {showChatSystem && <ChatSystem messages={messages} onSendMessage={handleSendMessage} onClose={handleCloseChat} />}
        </div>

        <Newsletter className={darkMode ? 'bg-dark' : 'bg-white'} />
      </div>
    </Router>
  )
}

export default App
