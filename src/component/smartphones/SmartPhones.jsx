import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SmartPhones(props) {
  const [smartPhones, setSmartPhones] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product for quick view

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const smartPhonesRef = ref(database, 'smartphones');

    const fetchData = () => {
      onValue(smartPhonesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setSmartPhones(data);
        } else {
          setSmartPhones([]);
        }
      });
    };

    fetchData();

    return () => {
      off(smartPhonesRef);
    };
  }, []);

  const handleAddToBasket = (productId) => {
    const selectedItem = smartPhones.find(item => item.key === productId);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, selectedItem]));
    console.log(`Added product with ID ${productId} to basket`);

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

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Smartphones</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Object.values(smartPhones).map((product) => (
            <div key={product.key} className="group relative">
              <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer"
                onClick={() => openQuickView(product)}
              >
                <img
                  src={product.image}
                  alt={product.model}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.model}</h3>
                  <p className="mt-1 text-sm text-gray-500"> $  {product.price}</p>
                </div>
                <div className="flex items-center flex-col">
                  <button
                    onClick={() => handleAddToBasket(product.key)}
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

      {selectedProduct && (
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
              {/* Product Image */}
              <div className="flex-none w-full lg:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Product Details */}
              <div className="p-8 w-full lg:w-1/2">
                <h2 className="text-xl font-semibold mb-4">{selectedProduct.model}</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Description:</h3>
                  <ul className="list-disc list-inside">
                    {Object.entries(selectedProduct.description).map(([key, value]) => (
                      <li key={key} className="text-gray-700">
                        <span className="font-semibold">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 font-semibold">${selectedProduct.price}</p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToBasket(selectedProduct.key)}
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

