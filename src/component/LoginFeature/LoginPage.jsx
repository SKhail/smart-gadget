import React, { useState } from 'react'

//Setting up firebase Google Authentication
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

//Icons
import { MdClose } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

// ripple effects on UI npm package
import { TEInput, TERipple } from 'tw-elements-react'

//Logo
import BlackLogo from '../../assets/Logos/black-smart-gadgets-high-resolution-logo.png'

const LoginPage = () => {
  const [email, setEmail] = useState('') //Setting Email Address
  const [password, setPassword] = useState('') //Setting Password
  const [showLoginPage, setShowLoginPage] = useState(true) //Setting visbility to close
  const [user, setUser] = useState(null) //relations to the google authentication

  const handleLogin = async (e) => {
    e.preventDefault()
    // to check if the user logged in is succesfull or present an error
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  // Focus on triggerring Google Auth
  const handleGoogleAuth = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      const result = await firebase.auth().signInWithPopup(provider)
      setUser(result.user)
    } catch (error) {
      console.error('Google authentication error:', error)
    }
  }

  //Closing button
  const handleClose = () => {
    setShowLoginPage(false)
  }

  //To handle Google Authentication

  return (
    <>
      {showLoginPage && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
          <div className='bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-md'>
            <div className='p-8 relative'>
              {showLoginPage && ( // Wrap the close button with conditional rendering
                <button className='absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-10' onClick={handleClose}>
                  <MdClose className='h-6 w-6' />
                </button>
              )}

              <img className='mx-auto w-48 py-1' src={BlackLogo} alt='logo' />

              <form onSubmit={handleLogin}>
                <p className='text-black text-center'>Please login to your account</p>
                <div className='mb-2'>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>

                <div className='flex flex-wrap justify-center'>
                  <div className='mb-6 text-center mr-20'>
                    <TERipple rippleColor='light'>
                      <button
                        className='w-full px-6 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                        type='button'
                      >
                        Register
                      </button>
                    </TERipple>
                  </div>

                  <div className='mb-6 text-center'>
                    <TERipple rippleColor='light'>
                      <button
                        className='w-full px-6 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                        type='button'
                        onClick={handleLogin}
                      >
                        Log in
                      </button>
                    </TERipple>
                  </div>
                </div>

                {/* Google Button Authentication */}
                <div className='flex justify-center'>
                  <button
                    className='flex items-center px-4 py-2 mt-4 text-xs font-medium text-white bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
                    onClick={() => handleGoogleAuth()}
                  >
                    <FcGoogle className='mr-2 text-lg' />
                    Continue with Google
                  </button>
                </div>

                <a href='#!' className='block text-neutral-700 dark:text-neutral-300 mb-4 text-center'>
                  Forgot password?
                </a>
              </form>
            </div>
            <div className='bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-1 text-white'>
              <h4 className='mb-6 text-xl font-semibold text-center'>We are more than just a company</h4>
              <p className='text-sm font-baloo'>
                we believe we're more than just a company. We're a community of passionate individuals dedicated to making a positive impact on the world around us. Our mission
                goes beyond profit margins and market share – it's about creating meaningful connections, fostering innovation, and empowering our customers to thrive.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginPage
