import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaHome, FaGamepad, FaLaptop, FaMobileAlt } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa'; // Dark Mode Icons

import LoginPage from '../LoginFeature/LoginPage'; // Ensure correct import path
import '../navigation/style.css'; // Ensure correct import path

import WhiteLogo from '../../assets/Logos/white-smart-gadgets-high-resolution-logo.png';

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
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler for search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here with searchTerm
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className={`flex items-center justify-between px-4 py-2 lg:px-12 ${darkMode ? 'bg-blue-900' : 'bg-gradient-to-r from-blue-800 to-blue-500 '} text-white fixed top-0 w-full z-10 animate__animated animate__fadeIn`}>
      {/* Company Name (Logo) */}
      <Link to='/' className='flex items-center flex-start'>
        <img src={WhiteLogo} alt='SmartGadget' className='h-auto w-32 md:w-40 mx-auto flex justify-start' />
      </Link>

      {/* Hamburger Button for Mobile */}
      <button className={`lg:hidden text-2xl`}>
        <AiOutlineMenu />
      </button>

      {/* Navigation Links */}
      <ul className={`lg:flex items-center gap-4 list-none`}>
        {NavData.map((data, index) => (
          <li key={index}>
            <NavLink to={data.link} className='inline-block px-7 hover:text-space-grey duration-200 font-baloo'>
              {window.innerWidth < 768 ? <span className='font-baloo'>{data.icon}</span> : data.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* SearchBar */}
      <form onSubmit={handleSearchSubmit} className='relative'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search...'
          className='py-1 pl-8 pr-1 rounded-full border-2 border-gray-300 focus:outline-none focus:border-primary search-bar text-black'
        />
        <button type="submit" className="absolute left-0 top-0 bottom-0 ml-2">
          <FaSearch className='searchIcon text-gray-500 font-baloo' />
        </button>
      </form>

      {/* Shopping Cart and Login Button */}
      <div className='hidden lg:block'>
        <Link to='/shoppingcart' className='inline-block px-4 hover:text-space-grey duration-200 font-baloo'>
          <FaShoppingCart />
        </Link>
        <button className='font-baloo hover:text-space-grey pl-2'>
          <FaUser />
        </button>
        {/* Dark Mode Feature */}
        <button className='dark-mode ms-4' onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />}{' '}
        </button>
      </div>

      {/* Login Modal */}
      {false && <LoginPage showLoginPage={false} onClose={() => {}} />}
    </nav>
  );
};

export default Navbar;
