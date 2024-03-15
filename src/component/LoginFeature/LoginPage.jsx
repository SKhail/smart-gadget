import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

const LoginPage = () => {
  const [email, setEmail] = useState('') //Setting Email Address
  const [password, setPassword] = useState('') //Setting Password
  const [showLoginPage, setShowLoginPage] = useState(true) //Setting visbility to close

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('testing logging with', email, password)
  }
  //Closing button
  const handleClose = () => {
    setShowLoginPage(false)
  }

  return (
    <div className='fixed top-0 w-full h-full z-50 overflow-y-auto'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto bg-white'>
        <div className='p-8'>
          <MdOutlineCancel className='absolute top-1 right-0 mr-2 cursor-pointer' onClick={handleClose} />
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-gray-600 font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-4 py-2'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-600 font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-4 py-2'
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
              />
            </div>
            <div className='flex'>
              <div className='w-1/2'></div>
              <div className='w-1/2'></div>
            </div>
            <div>
              <input className='bg-space-grey w-full py-2 rounded-md text-black font-bold cursor-pointer hover:bg-hover-grey' type='submit' value='Login' />
            </div>
            <div>
              <p className='text-center py-3'>Or continue with</p>
            </div>
            <div className='flex gap-4'>
              <FcGoogle className='bg-space-grey w-40 h-5 rounded-md text-white font-bold cursor-pointer hover:bg-hover-grey' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
