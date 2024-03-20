import React, { useState } from "react";
import products from "../Item-list/Item-list";

export default function SmartPhones(props) {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product for preview

  // Function to add the item to the basket
  const handleAddToBasket = (productId) => {
    const currentItem = products.find((itemObj) => itemObj.id === productId);
    props.addtoCart(currentItem);
    // logic to add to the basket here
    console.log(`Added product with ID ${productId} to basket`);
  };

  // Function to open preview when an item is clicked
  const openPreview = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the preview
  const closePreview = () => {
    setSelectedProduct(null);
  };

  // Filter out only the items with the category "smartphones"
  const smartphones = products.filter(
    (product) => product.category === "smartphone"
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-baloo-900">
          Smartphones
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {smartphones.map((product) => (
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
                  <h3 className="text-sm text-baloo-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-baloo-500">{product.color}</p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm font-medium text-baloo-900">
                    £{product.price}
                  </p>
                  {/* Add button to add the item to the basket */}
                  <button
                    onClick={() => handleAddToBasket(product.id)}
                    className="mt-2 text-sm font-medium text-baloo bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 px-3 py-1 rounded-md"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item popup */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md relative">
            <button
              className="absolute top-0 right-0 m-4 text-baloo-500 transition duration-300 hover:text-baloo-700"
              onClick={closePreview}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
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
            <p className="text-baloo-600 mt-2">
              Price: £{selectedProduct.price}
            </p>
            <button
              onClick={() => {
                handleAddToBasket(selectedProduct.id);
                closePreview();
              }}
              className="mt-4 bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 text-baloo px-4 py-2 rounded-md "
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
