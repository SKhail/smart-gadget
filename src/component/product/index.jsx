/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Samsung from '../../assets/Logos/samsung_brl.webp'
import Apple from '../../assets/Logos/apple_brl.webp'
import Google from '../../assets/Logos/google9a.webp'
// import Bose from "../../assets/Logos";
import Dyson from '../../assets/Logos/dyson-logo-white.webp'
import LG from '../../assets/Logos/lg_brl_23.webp'
import Sonny from '../../assets/Logos/sony_brl.webp'
import Bosh from '../../assets/Logos/bosch-logo-brl.webp'
import Microsoft from '../../assets/Logos/microsoft_brl.webp'
import tablets from '../../assets/images/tablets.jpg'
import laptops from '../../assets/images/laptopssm.jpg'
import phones from '../../assets/images/phones.jpg'
import headphones from '../../assets/images/headphones.jpg'
import sales from '../../assets/images/sales.jpg'
import newgadgets from '../../assets/images/newgadgets.jpg'

// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", className: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", className: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", className: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "XXS", inStock: false },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//     { name: "2XL", inStock: true },
//     { name: "3XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ darkMode }) {
  console.log(darkMode, 'is working ')
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className={`bg-${darkMode ? 'gray-800' : 'white'}`}>
      <div className='pt-6'>
        {/* <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>  */}

        {/* Image gallery */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div> */}
        {/* Product info */}

        {/* <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"> */}

        {/* New template */}
        <div class=' mt-5  lg:gap-2 md:gap-8 sm:gap:12 mx-5  px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {/* div one */}
          <div>
            <dt className='my-2 font-semibold text-black'>Headphones and Speakers</dt>

            <div className=' grid grid-cols-2 gap-6 w-80 h-20'>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44	' src={phones} alt='App store' />
                </a>
                <h3>item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={laptops} alt='App store' />
                </a>
                <h3>item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={tablets} alt='App store' />
                </a>
                <h3>Item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={headphones} alt='App store' />
                </a>
                <h3>Itemq</h3>
              </div>
            </div>
          </div>
          {/* div two */}
          <div className=' '>
            <Link to='/latest'>
              <dt className='my-2 font-baloo font-semibold text-center text-black'>Latest Offers hello</dt>
            </Link>

            <img className=' w-80 h-72' src={sales} alt='' />
          </div>
          {/* div three */}
          <div>
            <dt className='my-2 font-semibold text-black'>Headphones and Speakers</dt>

            <div className=' grid grid-cols-2 gap-6 w-80 h-20'>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44	' src={phones} alt='App store' />
                </a>
                <h3>item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={laptops} alt='App store' />
                </a>
                <h3>item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={tablets} alt='App store' />
                </a>
                <h3>Item</h3>
              </div>
              <div className=''>
                <a href=''>
                  <img className='h-28 w-44 	' src={headphones} alt='App store' />
                </a>
                <h3>Item</h3>
              </div>
            </div>
          </div>
          {/* div four */}
          <div className='w-80 h-96'>
            <dt className='my-2 font-semibold text-black'>Refurbished Gadget</dt>
            <a href=''>
              <img className='object-cover w-80 h-72 ' src={newgadgets} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h1 className='  sm:hidden md:block text-center flex justify-center mb-5 text-3xl font-bold tracking-tight  sm:text-4xl'>Our favorite brands</h1>
            </div>
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
            <div className=' hidden md:grid md:grid-cols-3 gap-4 mb-12 mx-auto max-w-7xl px-12 lg:px-48'>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='w-44 h-8 flex justify-center items-center	 ' src={Sonny} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='h-20 w-20 ' src={Apple} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='w-44 h-8 ' src={Samsung} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='h-12 w-36 	' src={Bosh} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='w-44 h-8 	' src={Microsoft} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='h-14 w-32' src={LG} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='h-12 w-36' src={Google} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='w-44 h-8' src={Samsung} alt='App store' />
              </div>
              <div className='flex justify-center items-center ourBrand w-72 h-24'>
                <img className='w-44 h-10' src={Dyson} alt='App store' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
