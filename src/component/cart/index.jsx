import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CurrencySelector from '../curencyselector';
import './style.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [selectedCurrency, setSelectedCurrency] = useState('GBP'); // Default currency is GBP

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  // Function to convert price to selected currency
  const convertToSelectedCurrency = (price) => {
    switch (selectedCurrency) {
      case 'USD':
        return (price * 1.15).toFixed(2); // Conversion rate for USD (example)
      case 'EUR':
        return (price * 1.12).toFixed(2); // Conversion rate for EUR (example)
      default:
        return price.toFixed(2); // GBP is default, no conversion needed
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>

        <div className="mt-6">
          <TransitionGroup component={null}>
            {cartItems.map((item, index) => (
              <CSSTransition key={index} classNames="fade" timeout={300}>
                <li className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.model} className="h-10 w-10 object-cover rounded" />
                    <div className="ml-4">
                      <span className="text-lg font-medium text-gray-900">{item.model}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      {selectedCurrency} {convertToSelectedCurrency(item.price)}
                    </span>
                    <button onClick={() => removeFromCart(index)} className="ml-4 text-sm font-medium text-red-500">
                      <FontAwesomeIcon icon={faTrashAlt} /> Remove
                    </button>
                  </div>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <span className="text-lg font-medium text-gray-900">Total:</span>
            <CurrencySelector selectedCurrency={selectedCurrency} onChange={setSelectedCurrency} />
          </div>
          <span className="text-3xl font-bold text-gray-900">
            {selectedCurrency} {convertToSelectedCurrency(totalPrice)}
          </span>
        </div>

        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bounce">
            <FontAwesomeIcon icon={faShoppingCart} /> Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
