import React, { useState } from 'react';

const CheckoutForm = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to the server
    // You can implement validation and other necessary logic
    console.log('Submitted:', { cardNumber, expiry, cvv, name });
    // After handling submission, you may want to close the form
    onClose();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 border rounded w-96 relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="MM/YYYY"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="CVV"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter name"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
