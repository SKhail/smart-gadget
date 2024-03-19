import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart, FaHome, FaGamepad, FaLaptop, FaMobileAlt } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaSun, FaMoon } from 'react-icons/fa' // Dark Mode Icons

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

const Navbar = ({ toggleLoginPage, darkMode, toggleDarkMode, showModal }) => {
  const [isScrolled, setIsScrolled] = useState(false) // fixed Navbar
  const [isMobileOpen, setIsMobileOpen] = useState(false) //Toggle Hamburger

  // const handleDarkModeToggle = () => {
  //   toggleDarkMode()
  // }

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

  // For Mobile devices
  const toggleHamburger = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const handleLoginButtonCLick = () => {
    toggleLoginPage() // Call the prop function to handle state updates
  }

  return (
    <nav className={`flex items-center justify-between px-4 py-2 lg:px-12 ${darkMode ? 'bg-gray-800' : 'bg-primary'} text-white fixed top-0 w-full z-10`}>
      {/* Dark Mode Feature */}
      <button className='dark-mode' onClick={toggleDarkMode}>
        {darkMode ? <FaMoon /> : <FaSun />}{' '}
      </button>

      {/* Company Name (Logo) */}
      <Link to='/' className='flex items-center flex-grow'>
        <img src={WhiteLogo} alt='SmartGadget' className='h-auto w-32 md:w-40 mx-auto' />
      </Link>

      {/* Hamburger Button for Mobile */}
      <button onClick={toggleHamburger} className={`lg:hidden text-2xl ${isMobileOpen ? 'ml-auto' : ''}`}>
        {isMobileOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Navigation Links */}
      <ul className={`lg:flex items-center gap-4 list-none ${isMobileOpen ? 'flex flex-col' : 'hidden lg:flex'}`}>
        {NavData.map((data, index) => (
          <li key={index}>
            <Link to={data.link} className='inline-block px-7 hover:text-space-grey duration-200 font-baloo'>
              {window.innerWidth < 768 ? <span className='font-baloo'>{data.icon}</span> : data.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* SearchBar */}
      <div className='relative search-container'>
        <input type='text' placeholder='Search...' className='py-1 pl-8 pr-1 rounded-full border-2 border-gray-300 focus:outline-none focus:border-primary search-bar' />
        <FaSearch className='searchIcon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-baloo' />
      </div>

      {/* Shopping Cart and Login Button */}
      <div className='hidden lg:block'>
        <Link to='/shoppingcart' className='inline-block px-4 hover:text-space-grey duration-200 font-baloo'>
          <FaShoppingCart />
        </Link>
        <button onClick={handleLoginButtonCLick} className='font-baloo hover:text-space-grey pl-2'>
          <FaUser />
        </button>
      </div>

      {/* Login Modal */}

      {showModal && <LoginPage showLoginPage={showModal} onClose={handleLoginButtonCLick} />}
    </nav>
  )
}

export default Navbar
