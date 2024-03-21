// Cart.js
import React from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>

        <div className="mt-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.model} className="h-10 w-10 object-cover rounded" />
                  <div className="ml-4">
                    <span className="text-lg font-medium text-gray-900">{item.model}</span>
                    {/* <span className="block text-sm text-gray-500">{item.description}</span> */}
                  </div>
                </div>
                <div>
                  <span className="text-lg font-medium text-gray-900">£{item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="ml-4 text-sm font-medium text-red-500">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Total */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-lg font-medium text-gray-900">£{totalPrice.toLocaleString()}</span>
        </div>

        {/* Checkout Button */}
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
