import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('testing logging with', email, password)
    // You may add logic here to handle the login process
  }

  return (
    <div className='fixed top-0 w-full h-full z-50 overflow-y-auto'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto bg-white'>
        <div className='p-8'>
          {/* <h2 className='text-xl font-bold mb-4'>Welcome</h2> */}
          <img className='h-[40px] w-[47px] mb-5' src='' alt='' />
          <img className='h-[40px] w-[47px] mb-5' src='' alt='' />
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
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
              Login
            </button> */}
            <div className='flex'>
              <div className='w-1/2'>
                <input type='checkbox' name='remeberMe' />
                <label htmlFor='remeberMe'>Remember me</label>
              </div>
              <div className='w-1/2'>
                {/* <a className='font-bold text-blue-600' href=''>
                  Forgot password ?
                </a> */}
              </div>
            </div>
            <div>
              <input className='bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]' type='submit' value='Login' />
            </div>
            <div>
              <p className='text-center'>Or continue with</p>
            </div>
            <div className='flex gap-4'>
              <button className='bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]'>Google</button>
              <button className='bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]'>Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

{
  /* <div className='fixed top-0 w-full h-full z-50 overflow-y-auto'>
          <div className='absolute top-1/2 eft-1/2 transform-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto bg-white'>
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items center:'>testing this</div>
              <div className='bg-white shadow-xl p-10 flex flex-col gap-4 text-sm'>
                <div>
                  <label className='text-gray-600 font-bold inline-block pb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
                    type='email'
                    name='email'
                    placeholder='mehedi@jaman.com'
                  />
                </div>
                <div>
                  <label className='text-gray-600 font-bold inline-block pb-2' htmlFor='password'>
                    Password
                  </label>
                  <input className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2' type='password' name='password' placeholder='******' />
                </div>
                <div className='flex'>
                  <div className='w-1/2'>
                    <input type='checkbox' name='remeberMe' />
                    <label htmlFor='remeberMe'>Remember me</label>
                  </div>
                  <div className='w-1/2'>
                    <a className='font-bold text-blue-600' href=''>
                      Forgot password ?
                    </a>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className='bg-[#F9FAFB] h-screen w-screen flex items-center'>
        <div className='h-max mx-auto flex flex-col items-center'>
          <img className='h-[40px] w-[47px] mb-5' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
          <h1 className='text-xl font-bold text-center pb-10'>Sign in to your account</h1>
          <div className='bg-white shadow-xl p-10 flex flex-col gap-4 text-sm'>
            <div>
              <label className='text-gray-600 font-bold inline-block pb-2' htmlFor='email'>
                Email
              </label>
              <input className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2' type='email' name='email' placeholder='mehedi@jaman.com' />
            </div>
            <div>
              <label className='text-gray-600 font-bold inline-block pb-2' htmlFor='password'>
                Password
              </label>
              <input className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2' type='password' name='password' placeholder='******' />
            </div>
            <div className='flex'>
              <div className='w-1/2'>
                <input type='checkbox' name='remeberMe' />
                <label htmlFor='remeberMe'>Remember me</label>
              </div>
              <div className='w-1/2'>
                <a className='font-bold text-blue-600' href=''>
                  Forgot password ?
                </a>
              </div>
            </div>
            <div>
              <input className='bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]' type='submit' value='Login' />
            </div>
            <div>
              <p className='text-center'>Or continue with</p>
            </div>
            <div className='flex gap-4'>
              <button className='bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]'>Google</button>
              <button className='bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]'>Google</button>
            </div>
          </div>
        </div>
      </div> */
}
