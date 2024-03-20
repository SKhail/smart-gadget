import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth' // Correct import statement for createUserWithEmailAndPassword
import { auth } from '../corousal/firebase' // Assuming firebase is properly initialized and exported from 'firebase.js'
import BlackLogo from '../../assets/Logos/black-smart-gadgets-high-resolution-logo.png'
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toastify' // Assuming you have toast notification setup properly

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        toast.success('Account created successfully!', {
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
        toast.error('Error creating account!', {
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

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
      <div className='bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-md'>
        <div className='p-8 relative'>
          <button className='absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-10' onClick={handleClose}>
            <MdClose className='h-6 w-6' />
          </button>
          <img className='mx-auto w-48 py-1' src={BlackLogo} alt='logo' />
          <h1 className='text-2xl font-semibold mb-4'>Register</h1>
          <form onSubmit={handleSignUp}>
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
            <button
              type='submit'
              className='w-full px-6 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900'
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
