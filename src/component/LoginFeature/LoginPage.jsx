import React, { useState } from 'react'
import BlackLogo from '../../assets/Logos/black-smart-gadgets-high-resolution-logo.png'
import SignUp from './SignUp'

//Setting up firebase Authentication
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../corousal/firebase'

//Icons
import { MdClose } from 'react-icons/md' //Icons
import { FcGoogle } from 'react-icons/fc' //Icons
import { MdAccountCircle } from 'react-icons/md' // Icons

import { TERipple } from 'tw-elements-react' // ripple effects on UI npm package
import { ToastContainer, toast } from 'react-toastify' // Alert Feature

const LoginPage = () => {
  const [email, setEmail] = useState('') //Setting Email Address
  const [password, setPassword] = useState('') //Setting Password
  const [showLoginPage, setShowLoginPage] = useState(true) //Setting visbility to close
  const [showRegisterPage, setShowRegisterPage] = useState(false) // relations to Register Page for users
  const [registrationSuccess, setRegistrationSuccess] = useState(false) //Close once successful

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        handleClose() //Close once the user has registered successfully
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error logging in!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  //Handle if its succesful when its registered
  const handleRegistrationSuccess = () => {
    setRegistrationSuccess(true)
    setShowLoginPage(false) // Hide login page
  }

  //Closing button
  const handleClose = () => {
    setShowLoginPage(false)
    setShowRegisterPage(false)
  }

  //btn for Register using when signing up
  const toggleSignUpPage = () => {
    setShowRegisterPage(!showRegisterPage)
  }

  return (
    <>
      <ToastContainer />
      {showLoginPage && !registrationSuccess && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
          <div className='bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-md'>
            <div className='p-2 relative'>
              {showLoginPage && (
                <button className='absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-10' onClick={handleClose}>
                  <MdClose className='h-6 w-6' />
                </button>
              )}

              <img className='mx-auto w-48 py-1 mb-6' src={BlackLogo} alt='logo' />

              <form onSubmit={handleLogin} className='mb-2'>
                <p className='text-black text-center mb-4'>Please login to your account</p>
                <div className='mb-4'>
                  <input
                    type='text'
                    // name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='password'
                    // name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <button
                  className='w-full px-6 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                  type='button'
                  onClick={handleLogin}
                >
                  Log in
                </button>

                <div className='flex justify-center gap-8 mt-4'>
                  <TERipple rippleColor='light'>
                    <button
                      className='flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                      type='button'
                      onClick={toggleSignUpPage}
                      style={{ width: '120px' }}
                    >
                      <MdAccountCircle className='mr-2 text-lg' /> Register
                    </button>
                  </TERipple>
                  <TERipple rippleColor='light'>
                    <button
                      className='flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                      type='button'
                      onClick={() => handleGoogleAuth()}
                      style={{ width: '120px' }}
                    >
                      <FcGoogle className='mr-2 text-lg' /> Google
                    </button>
                  </TERipple>
                </div>
              </form>
            </div>
            <div className='bg-gradient-to-r from-blue-800 to-blue-600 px-3 py-0.5 text-white'>
              <h4 className='mb-0 text-xl font-semibold text-center'>Smart Gadgets is more than just a company</h4>
              <p className='text-sm py-1 font-baloo'>
                We're a community of passionate individuals dedicated to making a positive impact on the world around us. Our mission goes beyond profit margins and market share
                it's about creating meaningful connections, fostering innovation, and empowering our customers to thrive.
              </p>
            </div>
          </div>
        </div>
      )}
      {showRegisterPage && <SignUp handleClose={toggleSignUpPage} handleRegistrationSuccess={handleRegistrationSuccess} />}
    </>
  )
}

export default LoginPage
