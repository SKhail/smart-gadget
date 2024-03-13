import React, { useState, useEffect } from 'react'

//Logo
import Logo from '../../assets/images/logo.png'

// Icons
import { FaCaretDown } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'

// Dark Mode Feature
import DarkMode from '../DarkMode/DarkMode'

// custom  CSS
import '../navigation/style.css'

const NavData = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Consoles',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Laptops',
    link: '/aboutus',
  },
  {
    id: 4,
    name: 'SmartPhones ',
    link: '/contact',
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

// Scrollbar effect to make the navbar static
const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    //Listen for scroll events
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // Applying the static scroll feature utilsing the isScrolled var
    <nav
      className={`flex items-center justify-between flex-wrap py-1.5 lg:px-12 border-b-2 shadow-md border-gray-100 pb-3 
      ${isScrolled ? 'fixed top-0 w-full z-10 bg-space-grey' : ''}`}
    >
      <div className='flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0'>
        <div className='flex items-center flex-shrink-0 text-gray-800 mr-16'>
          {/* Logo */}
          {/* <a href='#' className='logo-container'>
            <img src={Logo} alt='logo' className='logo' />
          </a> */}
          <span className='font-semibold text-xl tracking-tight'>Smart Gagdet</span>
        </div>
        <div className='block lg:hidden '>{/* Your mobile menu button */}</div>
      </div>

      <div className='menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8'>
        <div className='text-md font-bold text-teal lg:flex-grow'>
          {/* Navigation */}
          <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
              {NavData.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                    {data.name}
                  </a>
                </li>
              ))}

              {/* Dropdown list for the Special deals */}
              <li className='group relative cursor-pointer'>
                <a href='#' className='flex item-center gap-[2px] py-2'>
                  Special Deals
                  <span>
                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                  </span>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                  <ul>
                    {DropbarData.map((data) => (
                      <li key={data.id}>
                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary'>
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* SearchBar */}
        <div className='relative mx-auto text-gray-600 lg:block hidden'>
          <div class='bg-white py-3 px-4 rounded-lg flex justify-around items-center '>
            <input type='text' placeholder='seach' class=' bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2' />
          </div>
        </div>
      </div>
      <div className='flex'>
        <h1 class='text-text-gray-600  py-2 hover:cursor-pointer hover:text-space-grey'>LOGIN</h1>
      </div>
    </nav>
  )
}

export default Index