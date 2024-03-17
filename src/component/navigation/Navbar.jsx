import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaCaretDown, FaUser } from 'react-icons/fa'
import DarkMode from '../DarkMode/DarkMode'
import LoginPage from '../LoginFeature/LoginPage' // Ensure correct import path
import '../navigation/style.css' // Ensure correct import path
import Logo from '../../assets/Logos/logo2.png'

const NavData = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Consoles',
    link: '/consoles',
  },
  {
    id: 3,
    name: 'Laptops',
    link: '/laptops',
  },
  {
    id: 4,
    name: 'SmartPhones ',
    link: '/smartphones',
  },
  {
    id: 5,
    name: 'ShoppingCart',
    link: '/shoppingcart',
  },

]

const DropbarData = [
  {
    id: 1,
    name: 'Deals of the Day',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Buy',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
  {
    id: 4,
    name: 'BestSellers ',
    link: '/#',
  },
]

const Navbar = ({ toggleLoginPage }) => {
  const [isScrolled, setIsScrolled] = useState(false) // used this for the fixed navbar
  const [showModal, setShowModal] = useState(false) // used this in the login modal
  const [isMobileOpen, setIsMobileOpen] = useState(false) // Used this for hamburger on smaller devices

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

  const handleLoginButtonCLick = () => {
    setShowModal(!showModal) // Toggle showModal state
  }

  const toggleHamburger = () => {
    setIsMobileOpen(!isMobileOpen) // For Mobile devices
  }
  return (
    <nav className={`flex items-center justify-between px-4 py-1 lg:px-12 ${isScrolled ? 'fixed top-0 w-full z-10 text-white bg-primary' : 'bg-primary/15'}`}>
      {/*  Hamburger for smaller Devices */}
      <button onClick={handleLoginButtonCLick}>
        <FaUser />
      </button>
      {/*  Logo  */}
      <img src={Logo} alt='Logo' className='logo' style={{ width: '100px', height: 'auto' }} />

      {/* Mobile Device Menu */}
      <ul className={`lg:flex items-center gap-4 list-none ${isMobileOpen ? 'block' : 'hidden'}`}>
        {/* Navigation links */}
        {NavData.map((data, index) => (
          <li key={index}>
            <Link to={data.link} className='inline-block px-4 hover:text-primary duration-200'>
              {data.name}
            </Link>
          </li>
        ))}
        {/* Special Deals dropdown */}
        <li className='relative group'>
          <button onClick={() => {}} className='block px-4 py-2 text-center hover:text-primary duration-200'>
            Special Deals
            <FaCaretDown className='inline-block m1-1' />
          </button>
          {/* Dropdown content */}
          <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
            <ul>
              {DropbarData.map((data) => (
                <li key={data.id}>
                  <Link to={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/60'>
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      {/* Login button */}
      <button onClick={toggleHamburger} className='lg:hidden text-2xl'>
        <FaBars />
      </button>

      {/* Render LoginPage component if showModal is true */}
      {showModal && <LoginPage />}
    </nav>
  )
}

export default Navbar
