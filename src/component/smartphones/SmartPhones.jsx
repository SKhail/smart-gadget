// SmartPhones.js
import React from 'react';
import products from "../Item-list/Item-list";

export default function SmartPhones(props) {
  

  // Function to add the item to the basket
  const handleAddToBasket = (productId) => {
    const currentItem = products.find(itemObj => itemObj.id === productId )
    props.addtoCart(currentItem);
    // logic to add to the basket here
    console.log(`Added product with ID ${productId} to basket`);
  };

  // Filter out only the items with the category "smartphones"
  const smartphones = products.filter(product => product.category === 'smartphone');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Smartphones</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {smartphones.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
                  <p className="text-sm font-medium text-gray-900">{product.description}</p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm font-medium text-gray-900">£{product.price}</p>
                  {/* Add button to add the item to the basket */}
                  <button
                    onClick={() => handleAddToBasket(product.id)}
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




