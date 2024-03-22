import React, { useState, Fragment } from 'react'
import Logo from '../../assets/images/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import DarkMode from '../DarkMode/DarkMode'

import '../navigation/style.css'

// import { Dialog, Popover, Transition } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Menus = [
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
const Dropbar = [
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
const Index = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
      {/* Logo */}
      <div className='flex justify-between items-center bg-primary/60 py-0.5'>
        {/* Logo */}
        <a href='#' className='logo-container'>
          <img src={Logo} alt='logo' className='logo' />
        </a>

        {/* SearchBar */}
        <div className='flex justify-between items-center'>
          <div className='relative group'>
            <input
              type='text'
              placeholder='search'
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-2 border-primary-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
            />
          </div>
        </div>

        {/* Login */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <IoPersonOutline className='w-10' />
        </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menus.map((data, index) => (
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
                {Dropbar.map((data) => (
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

      {/* DarkMode Feature */}
      <div>
        <DarkMode />
      </div>
    </div>
  )
}

export default Index
