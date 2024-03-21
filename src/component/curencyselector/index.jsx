import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEuroSign, faPoundSign } from '@fortawesome/free-solid-svg-icons';

const CurrencySelector = ({ selectedCurrency, onChange }) => {
  const currencies = [
    { value: 'USD', label: 'US Dollar', icon: faDollarSign },
    { value: 'EUR', label: 'Euro', icon: faEuroSign },
    { value: 'GBP', label: 'British Pound', icon: faPoundSign },
    // Add more currencies as needed
  ];

  return (
    <div>
      {currencies.map((currency, index) => (
        <span key={currency.value} onClick={() => onChange(currency.value)} style={{ cursor: 'pointer', marginRight: index !== currencies.length - 1 ? '10px' : '0' }}>
          <FontAwesomeIcon icon={currency.icon} className={selectedCurrency === currency.value ? 'text-blue-500' : 'text-gray-500'} />
        </span>
      ))}
    </div>
  );
};

export default CurrencySelector;
