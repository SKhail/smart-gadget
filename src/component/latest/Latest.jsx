import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from "../Item-list/Item-list";


export default function Latest() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to add the item to the basket
  const handleAddToBasket = (productId) => {
    const currentItem = products.find((itemObj) => itemObj.id === productId);
    props.addtoCart(currentItem);
    // logic to add to the basket here
    console.log(`Added product with ID ${productId} to basket`);
  };

  const openPreview = (product) => {
    setSelectedProduct(product);
  };

  const closePreview = () => {
    setSelectedProduct(null);
  };
  // Filter out only the items with the category "laptop"
  const laptops = products.filter((product) => product.category === "laptop");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Laptop
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {laptops.map((product) => (
            <div key={product.id} className="group relative">
              <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                onClick={() => openPreview(product)}
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm font-medium text-gray-900">
                    £{product.price}
                  </p>
                  <button
                    onClick={() => handleAddToBasket(product.id)}
                    className="mt-2 text-sm font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-900"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* item popup */}

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md relative">
          <button
              className="absolute top-0 right-0 m-4 text-gray-500 transition duration-300 hover:text-gray-700"
              onClick={closePreview}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div className="flex-none w-full lg:w-1/2">
              <img
                src={selectedProduct.imageSrc}
                alt={selectedProduct.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="text-gray-600 mt-2">
              Price: £{selectedProduct.price}
            </p>
            <button
              onClick={() => {
                handleAddToBasket(selectedProduct.id);
                closePreview();
              }}
              className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

