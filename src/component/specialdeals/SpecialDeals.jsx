import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SpecialDeals({ darkMode }) {
  const [specialDeals, setSpecialDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [previousDeal, setPreviousDeal] = useState(null);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const dealsRef = ref(database, 'specialDeals');

    const fetchData = () => {
      onValue(dealsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setSpecialDeals(data);
        } else {
          setSpecialDeals([]);
        }
      });
    };

    fetchData();

    return () => {
      off(dealsRef);
    };
  }, []);

  const handleAddToBasket = (dealId) => {
    const selectedDealItem = specialDeals.find((item) => item.key === dealId);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, selectedDealItem]));
    console.log(`Added deal with ID ${dealId} to basket`);

    toast.success('Added to the cart', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const openQuickView = (deal) => {
    setSelectedDeal(deal);
    // Set previous deal only if a deal is currently selected
    if (selectedDeal) {
      setPreviousDeal(selectedDeal);
    }
  };

  const closeQuickView = () => {
    setSelectedDeal(null);
    setPreviousDeal(null);
  };

  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
      <ToastContainer />
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className={`text-3xl font-bold tracking-tight text-center ${darkMode ? 'text-white' : 'text-gray-900'} animate__animated animate__fadeIn`}>Special Deals</h2>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {specialDeals.map((deal) => (
            <div key={deal.key} className='group relative overflow-hidden'>
              <div
                className='aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer'>
                <img
                  src={deal.image}
                  alt={deal.name}
                  className='object-cover object-center w-full h-full transition-transform transform hover:scale-105'
                  onClick={() => openQuickView(deal)}
                />
              </div>
              <div className='mt-4 flex justify-between items-center'>
                <div>
                  <h3 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{deal.name}</h3>
                  <p className={`mt-1 text-sm font-medium text-lg  ${darkMode ? 'text-white' : 'text-gray-700'}`}>£{deal.price}</p>
                </div>
                <button
                  onClick={() => handleAddToBasket(deal.key)}
                  className={`$ ml-4 px-2 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-900 hover:bg-gray-900 transition-colors duration-300 ease-in-out`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDeal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
          <div className='fixed inset-0 bg-black opacity-50' onClick={closeQuickView}></div>
          <div className='relative w-full max-w-3xl p-4 mx-auto my-12'>
            <div className='relative bg-white rounded-lg shadow-xl flex flex-col lg:flex-row'>
              <button className='absolute top-0 right-0 m-4 text-gray-500 transition duration-300 hover:text-gray-700' onClick={closeQuickView}>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
              <div className='flex-none w-full lg:w-1/2'>
                <img src={selectedDeal.image} alt={selectedDeal.name} className='h-full w-full object-cover object-center' />
              </div>
              <div className='p-8 w-full lg:w-1/2'>
                <h2 className='text-2xl lg:text-3xl font-semibold mb-4'>{selectedDeal.name}</h2>
                <div className='mb-6'>
                  <h3 className='text-lg font-semibold'>Description:</h3>
                  <ul className='list-disc list-inside'>
                    {Object.entries(selectedDeal.description).map(([key, value]) => (
                      <li key={key} className='text-gray-700'>
                        <span className='font-semibold'>{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className='text-xl font-semibold text-gray-800 mb-4'>Price: £{selectedDeal.price}</p>
                <button
                  onClick={() => handleAddToBasket(selectedDeal.key)}
                  className='block w-full py-3 text-lg text-center bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 mt-4 transition duration-300 ease-in-out'
                >
                  Add to Cart
                </button>
              </div>
              {previousDeal && (
                <div className='p-8 w-full lg:w-1/2'>
                  <h2 className='text-2xl lg:text-3xl font-semibold mb-4'>{previousDeal.name}</h2>
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold'>Description:</h3>
                    <ul className='list-disc list-inside'>
                      {Object.entries(previousDeal.description).map(([key, value]) => (
                        <li key={key} className='
                        text-gray-700'>
                        <span className='font-semibold'>{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className='text-xl font-semibold text-gray-800 mb-4'>Price: £{previousDeal.price}</p>
                {/* Assuming you want to add a button to add the previous deal to the cart */}
                <button
                  onClick={() => handleAddToBasket(previousDeal.key)}
                  className='block w-full py-3 text-lg text-center bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 mt-4 transition duration-300 ease-in-out'
                >
                  Add Previous to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);
}


