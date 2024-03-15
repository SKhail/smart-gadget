import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import DarkMode from '../DarkMode/DarkMode'
import LoginPage from '../LoginFeature/LoginPage' // Ensure correct import path
import '../navigation/style.css' // Ensure correct import path

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

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

  return (
    <nav
      className={`flex items-center justify-between flex-wrap lg:px-12 border-b-2 shadow-md border-gray-100 
      ${isScrolled ? 'fixed top-0 w-full z-10 text-white bg-primary' : ''}`}
    >
      {/* Navbar content */}
      <ul className='flex items-center gap-4 list-none'>
        {/* Apply list-none here */}
        {NavData.map((data, index) => (
          <li key={index}>
            <Link to={data.link} className='inline-block px-4 hover:text-primary duration-200'>
              {data.name}
            </Link>
          </li>
        ))}
        
        {/* Special Deals dropdown */}

        <li className='group relative cursor-pointer'>
          <Link to='#' className='flex item-center gap-[2px] py-2'>
            Special Deals
            <span>
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
            </span>
          </Link>
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
      <div className='flex'>
        <button onClick={handleLoginButtonCLick}>Login</button>
      </div>
      {/* Render LoginPage component if showModal is true */}
      {showModal && <LoginPage />}
    </nav>
  )
}

export default Navbar