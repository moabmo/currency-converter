import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [conversion, setConversion] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleConvert = () => {
    if (country && currency) {
      setConversion(`${country} to ${currency}`);
      // Perform currency conversion logic here if needed
    } else {
      alert('Please select both country and currency.');
    }
  };

  return (
    <div>
      <label>
        Country:
        <input type="text" value={country} onChange={handleCountryChange} />
      </label>
      <label>
        Currency:
        <input type="text" value={currency} onChange={handleCurrencyChange} />
      </label>
      <button onClick={handleConvert}>Convert</button>
      {conversion && <p>Conversion: {conversion}</p>}
    </div>
  );
};

export default CurrencyConverter;
