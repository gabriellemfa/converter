"use client"; // Ensure this is the very first line

import React, { useState } from 'react';

const Converter = () => {
  const [activeTab, setActiveTab] = useState('kg-lb');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleConversion = () => {
    // Clear any previous error message
    setErrorMessage('');
    
    {/**Handles error if input is a negative number */}

    if (activeTab === 'kg-lb' || activeTab === 'km-miles') {
      if (!inputValue || inputValue <= 0) {
        setErrorMessage('Please enter a positive number to convert.');
        return;
      }

    {/**Allows for a negative number */}

    } else if (activeTab === 'c-f') {
      if (!inputValue || isNaN(inputValue)) {
        setErrorMessage('Please enter a valid number for Celsius to Fahrenheit conversion.');
        return;
      }
    }

    {/**Conversion of values */}

    let convertedValue;
    const numberValue = parseFloat(inputValue);
    switch (activeTab) {
      case 'kg-lb':
        convertedValue = (numberValue * 2.20462).toFixed(2);
        break;
      case 'km-miles':
        convertedValue = (numberValue * 0.621371).toFixed(2);
        break;
      case 'c-f':
        convertedValue = (numberValue * 9 / 5 + 32).toFixed(2);
        break;

      default:
      
        convertedValue = null;
    }
    setResult(convertedValue);
  };

  const handleReset = () => {
    setInputValue('');
    setResult(null);
    setErrorMessage('');
    setActiveTab('kg-lb'); 
  };

  return (
    <div className='flex flex-col items-center text-black'>
      <div className="bg-slate-400 p-6 rounded-t-lg shadow-lg w-full max-w-md">

        {/* Button Container */}
        <div className="flex justify-end space-x-2 mb-4">

          {/**button for kg-lb */}
          <button 
            className={`px-4 py-2 ${activeTab === 'kg-lb' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('kg-lb'); setResult(null); }}
          >
            KG TO LB
          </button>

          {/**button for km-miles */}
          <button 
            className={`px-4 py-2 ${activeTab === 'km-miles' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('km-miles'); setResult(null); }}
          >
            KM TO MILES
          </button>

          {/**button for C to F */}
          <button 
            className={`px-4 py-2 ${activeTab === 'c-f' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('c-f'); setResult(null); }}
          >
            C° to F°
          </button>
        </div>

        {/**Bottom buttons */}

        {/* Input field*/}
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          placeholder="Enter value"
        />
        <div className="flex space-x-2">

          {/**Convert button */}
          <button 
            onClick={handleConversion} 
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Convert
          </button>

          {/**Reset button */}
          <button 
            onClick={handleReset} 
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>

        {/**throws error message if input is an invalid negative number */}
        {errorMessage && (
          <div className="mt-4 text-red-500">
            {errorMessage}
          </div>
        )}

        {/**shows result */}
        {result !== null && (
          <div className="mt-4 text-lg">
            {result} {activeTab === 'kg-lb' ? 'lbs' : activeTab === 'km-miles' ? 'miles' : '°F'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;