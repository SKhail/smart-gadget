import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch, FaUser, FaShoppingCart, FaHome, FaGamepad, FaLaptop, FaMobileAlt } from 'react-icons/fa'
import { FaSun, FaMoon } from 'react-icons/fa' // Dark Mode Icons
import DarkMode from '../Darkmode/DarkMode'
import LoginPage from '../LoginFeature/LoginPage' // Ensure correct import path
import '../navigation/style.css' // Ensure correct import path

import WhiteLogo from '../../assets/Logos/white-smart-gadgets-high-resolution-logo.png'

const NavData = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome />,
    link: '/#',
  },
  {
    id: 2,
    name: 'Consoles',
    icon: <FaGamepad />,
    link: '/consoles',
  },
  {
    id: 3,
    name: 'Laptops',
    icon: <FaLaptop />,
    link: '/laptops',
  },
  {
    id: 4,
    name: 'Phones',
    icon: <FaMobileAlt />,
    link: '/smartphones',
  },
  {
    id: 5,
    icon: <FaShoppingCart />,
    link: '/shoppingcart',
  },
]

const Navbar = ({ toggleLoginPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(getInitialMode()) // Initialize dark mode state

  // Helper function to get initial mode
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'))
    return savedMode || false // Default to false if no mode is saved
  }

  // Apply dark mode when darkMode state changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Used for the Login Page
  const handleLoginButtonCLick = () => {
    setShowModal(!showModal) // Toggle showModal state
  }

  // For Mobile devices
  const toggleHamburger = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  //Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <nav className={`flex items-center justify-between px-4 py-2 lg:px-12 bg-primary text-white fixed top-0 w-full z-10`}>
      {/* Dark Mode Feature */}
      <button onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>

      {/* Hamburger Button */}
      <button onClick={toggleHamburger} className={`lg:hidden text-2xl ${isMobileOpen ? 'hidden' : ''}`}>
        <FaBars className='font-baloo' />
      </button>

      {/* Company Name */}
      <Link to='/' className='flex items-center'>
        <img src={WhiteLogo} alt='SmartGadget' className='h-auto w-auto md:w-40' />
      </Link>

      {/* Navigation Links */}
      <ul className={`lg:flex items-center gap-4 list-none ${isMobileOpen ? 'flex flex-col' : 'hidden lg:flex'}`}>
        {NavData.map((data, index) => (
          <li key={index}>
            <Link to={data.link} className='inline-block px-4 hover:text-primary duration-200 font-baloo'>
              {window.innerWidth < 768 ? <span className='font-baloo'>{data.icon}</span> : data.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* SearchBar */}
      <div className='relative search-container'>
        <input type='text' placeholder='Search...' className='py-1 pl-8 pr-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-primary search-bar' />
        <FaSearch className='searchIcon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-baloo' />
      </div>

      {/* Shopping Cart and Login Button */}
      <div className='hidden lg:block'>
        <Link to='/shoppingcart' className='inline-block px-4 hover:text-primary duration-200 font-baloo'>
          <FaShoppingCart />
        </Link>
        <button onClick={handleLoginButtonCLick} className='font-baloo'>
          <FaUser />
        </button>
      </div>

      {/* Hamburger Button for Mobile */}
      <button onClick={toggleHamburger} className={`lg:hidden text-2xl ${isMobileOpen ? '' : 'hidden'}`}>
        <FaBars className='font-baloo' />
      </button>

      {/* Login Modal */}
      {showModal && <LoginPage />}
    </nav>
  )
}

export default Navbar
