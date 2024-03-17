import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import products from "../Laptop-list/laptop-list";

export default function Laptop(props) {
  // Function to add the item to the basket
  const handleAddToBasket = (productId) => {
    const currentItem = products.find(itemObj =>itemObj.id === productId )
    props.addtoCart(currentItem);
    // logic to add to the basket here
    console.log(`Added product with ID ${productId} to basket`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Laptop</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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

                  {/* Wrap the product name in a Link component */}

                  <h3 className="text-sm text-gray-700">
                    {/* <Link to={`/laptop/${product.id}`} 
                    className="group-hover:text-indigo-600"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
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
