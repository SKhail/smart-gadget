import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Laptops(props) {
  const [laptops, setLaptops] = useState([]);
  const [selectedLaptop, setSelectedLaptop] = useState(null); // To store the selected laptop for quick view

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const laptopsRef = ref(database, 'laptops');
    
    const fetchData = () => {
      onValue(laptopsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setLaptops(data);
        } else {
          setLaptops([]);
        }
      });
    };
    fetchData();
    
    return () => {
      off(laptopsRef);
    };
  }, []);

  const handleAddToBasket = (laptopId) => {
    const selectedLaptopItem = laptops.find(item => item.key === laptopId);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, selectedLaptopItem]));
    console.log(`Added laptop with ID ${laptopId} to basket`);
    // Show toast notification when item is added to cart
    toast.success('Added to the cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const openQuickView = (laptop) => {
    setSelectedLaptop(laptop);
  };

  const closeQuickView = () => {
    setSelectedLaptop(null);
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Laptops</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {laptops.map((laptop) => (
            <div key={laptop.key} className="group relative">
              <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer"
                onClick={() => openQuickView(laptop)}
              >
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className=" w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{laptop.name}</h3>
                  <p className="mt-1 text-sm text-gray-500"> £{laptop.price}</p>
                </div>
                <div className="flex items-center flex-col">
                  <button
                    onClick={() => handleAddToBasket(laptop.key)}
                    className="mt-2 text-sm font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-900"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedLaptop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeQuickView}></div>
          {/* Quick View Dialog */}
          <div className="relative w-full max-w-3xl p-4 mx-auto my-12">
            {/* Content */}
            <div className="relative bg-white rounded-lg shadow-xl flex flex-col lg:flex-row">
              {/* Close Button */}
              <button
                className="absolute top-0 right-0 m-4 text-gray-500 transition duration-300 hover:text-gray-700"
                onClick={closeQuickView}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              {/* Laptop Image */}
              <div className="flex-none w-full lg:w-1/2">
                <img
                  src={selectedLaptop.image}
                  alt={selectedLaptop.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Laptop Details */}
              <div className="p-8 w-full lg:w-1/2">
                <h2 className="text-xl font-semibold mb-4">{selectedLaptop.name}</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Description:</h3>
                  <ul className="list-disc list-inside">
                    {Object.entries(selectedLaptop.description).map(([key, value]) => (
                      <li key={key} className="text-gray-700">
                        <span className="font-semibold">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 font-semibold">£{selectedLaptop.price}</p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToBasket(selectedLaptop.key)}
                  className="block w-full py-2 text-center bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
