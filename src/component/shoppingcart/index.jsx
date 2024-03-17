// Cart.js
import React from 'react';

export default function Cart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>

        <div className="mt-6">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.model} - {item.price}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
