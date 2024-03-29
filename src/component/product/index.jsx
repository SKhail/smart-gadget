import { Link } from 'react-router-dom'
import Samsung from '../../assets/Logos/samsung_brl.webp'
import Apple from '../../assets/Logos/apple_brl.webp'
import Google from '../../assets/Logos/google9a.webp'
// import Bose from "../../assets/Logos";
import Dyson from '../../assets/Logos/dyson-logo-white.webp'
import LG from '../../assets/Logos/lg_brl_23.webp'
import Sonny from '../../assets/Logos/sony_brl.webp'
import Bosh from '../../assets/Logos/bosch-logo-brl.webp'
import Microsoft from '../../assets/Logos/microsoft_brl.webp'

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ darkMode }) {
  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
      <div className='pt-6'>
        {/* New template */}
        <div className=' mt-5 md:gap-12 sm:gap:12 mx-5  px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* div one */}
          <div>
            <Link to='/computerstablets'>
              <dt className={`my-2 font-baloo font-semibold flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Computers and Tablets</dt>
            </Link>

            <div className=' grid grid-cols-2 gap-6'>
              <div className='font-baloo'>
                <Link to=''>
                  <img
                    className='h-28 w-44	rounded-lg'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/gamingDesktop.jpg?alt=media&token=ac7cf186-662c-4595-9ad0-5b138527daa0'
                    alt='gaming photo'
                  />

                  <h3 className={`flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Gaming</h3>
                </Link>
              </div>
              <div className=' font-baloo'>
                <Link to=''>
                  <img
                    className='h-28 w-44 rounded-lg	'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Ipad.jpg?alt=media&token=0fa7e3aa-d635-4712-8a7b-87d3db7e6333'
                    alt='Ipad photo'
                  />

                  <h3 className={`flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Ipad</h3>
                </Link>
              </div>
              <div className=' font-baloo'>
                <Link to='/Laptops'>
                  <img
                    className='h-28 w-44 rounded-lg	'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/workPC.jpg?alt=media&token=3c0c6e13-8713-462e-bec8-a78156f17ba8'
                    alt='laptop photo'
                  />
                  <h3 className='flex justify-center'>Laptop</h3>
                </Link>
              </div>
              <div className='font-baloo'>
                <Link to=''>
                  <img
                    className='h-28 w-44 rounded-lg	'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/galaxyTab.jpg?alt=media&token=af51b021-a36d-4bc7-bff5-2d48b226fe1d'
                    alt='tables photo'
                  />

                  <h3 className='flex justify-center'>Galaxy Tablets</h3>
                </Link>
              </div>
            </div>
          </div>
          {/* div two */}
          <div className=' '>
            <Link to='/specialdeals'>
              <dt className={`my-2 font-baloo font-semibold flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Latest Offers</dt>

              <img
                className=' h-72 w-full rounded-lg'
                src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/sales.jpg?alt=media&token=2d36cd55-b16c-4592-9504-a688f9baf677'
                alt='Latest Offers photo'
              />
            </Link>
          </div>
          {/* div three */}
          <div>
            <Link to='/headphonesSpeakers'>
              <dt className={`my-2 font-baloo font-semibold flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Headphones and Speakers</dt>

              <div className=' grid grid-cols-2 gap-6'>
                <div className='font-baloo'>
                  <img
                    className='h-28 w-44	rounded-lg'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/speaker.jpg?alt=media&token=37b043ac-e31c-4087-9498-09d91ba32ed8'
                    alt='App store'
                  />

                  <h3 className='flex justify-center'>Speakers</h3>
                </div>
                <div className=' font-baloo'>
                  <img
                    className='h-28 w-44 rounded-lg	'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/smallspeaker.jpg?alt=media&token=dd7ba59a-b86f-428a-8a6f-01f92760c72d'
                    alt='App store'
                  />

                  <h3 className='flex justify-center'>Mini Speakers</h3>
                </div>
                <div className=' font-baloo'>
                  <img
                    className='h-28 w-44 rounded-lg	'
                    src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/headphones.jpg?alt=media&token=8244d104-e497-47bb-ac00-e69cabe6ad98'
                    alt='App store'
                  />

                  <h3 className='flex justify-center'>Headphones</h3>
                </div>
                <div className='font-baloo'>
                  <a href=''>
                    <img
                      className='h-28 w-44 rounded-lg	'
                      src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/headphones%20(1).jpg?alt=media&token=c0caf603-8f4d-4f02-9e96-e0e5e77dfe13'
                      alt='App store'
                    />
                  </a>
                  <h3 className='flex justify-center'>In ear Headphones</h3>
                </div>
              </div>
            </Link>
          </div>
          {/* div four */}
          <div className=''>
            <Link to='/refurbished'>
              <dt className={`my-2 font-baloo font-semibold flex justify-center ${darkMode ? 'text-white' : 'text-black'}`}>Refurbshed Gadgets</dt>
              <img
                className='object-cover h-72 w-full rounded-lg '
                src='https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/newgadgets.jpg?alt=media&token=a2cfc5e3-c27e-41d5-baf8-7015da241c32'
                alt='Refurbished Gadget photo'
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h1
                className={`mt-24 sm:hidden  min-[320px]:hidden md:block text-center font-baloo flex justify-center mb-5 text-3xl font-bold tracking-tight  sm:text-4xl animate__animated animate__fadeIn ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
              >
                Our favorite brands
              </h1>
            </div>
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
            <div className=' hidden md:grid md:grid-cols-3 gap-4 mx-auto max-w-7xl lg:px-48 sm:pb-24'>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='w-44 h-8 ' src={Sonny} alt='Sonny logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='h-20 w-20  ' src={Apple} alt='Apple logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='w-44 h-8 ' src={Samsung} alt='Samsung logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='h-12 w-36 	' src={Bosh} alt='Bosh logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='w-44 h-8 	' src={Microsoft} alt='Microsoft logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='h-14 w-32' src={LG} alt='LG logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='h-12 w-36' src={Google} alt='Google logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='w-44 h-8' src={Samsung} alt='Samsung logo' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24 rounded-lg'>
                <img className='w-44 h-10' src={Dyson} alt='Dyson logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
