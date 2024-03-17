// import React from "react";
// import { Link } from "react-router-dom"; // Import Link component
// import products from "../Laptop-list/laptop-list";
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase'; // Adjust the path as needed
import React, { useState, useEffect } from 'react';

export default function SmartPhones(props) {
  const [smartPhones, setSmartPhones] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const smartPhonesRef = ref(database, 'smartphones');

    const fetchData = () => {
      onValue(smartPhonesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setSmartPhones(data); // Set smartPhones state to the fetched data
        } else {
          setSmartPhones([]); // If data is null, set smartPhones state to an empty array
        }
      });
    };

    fetchData(); // Fetch data when component mounts

    return () => {
      // Clean up the event listener when component unmounts
      off(smartPhonesRef);
    };
  }, []);

  // Function to add the item to the basket
  const handleAddToBasket = (productId) => {
    const currentItem = smartPhones.find(itemObj => itemObj.key === productId)
    props.addToCart(currentItem);
    // logic to add to the basket here
    console.log(`Added product with ID ${productId} to basket`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Smartphones</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Object.values(smartPhones).map((product) => (
            <div key={product.key} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.model}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.model}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <div className="flex items-center flex-col">
                  {/* Add button to add the item to the basket */}
                  <button
                    onClick={() => handleAddToBasket(product.key)}
                    className="mt-2 text-sm font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-900"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
