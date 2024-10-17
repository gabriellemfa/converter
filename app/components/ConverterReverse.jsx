"use client"; // Ensure this is the very first line

import React, { useState } from 'react';

const ConverterReverse = () => {
  const [activeTab, setActiveTab] = useState('lb-kg');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleConversion = () => {
    // Clear any previous error message
    setErrorMessage('');
    
    {/**Handles error if input is a negative number */}

    if (activeTab === 'lb-kg' || activeTab === 'miles-km') {
      if (!inputValue || inputValue <= 0) {
        setErrorMessage('Please enter a positive number to convert.');
        return;
      }

    {/**Allows for a negative number */}

    } else if (activeTab === 'f-c') {
      if (!inputValue || isNaN(inputValue)) {
        setErrorMessage('Please enter a valid number for Celsius to Fahrenheit conversion.');
        return;
      }
    }

    {/**Conversion of values */}

    let convertedValue;
    const numberValue = parseFloat(inputValue);
    switch (activeTab) {
      case 'lb-kg':
        convertedValue = (numberValue / 2.205).toFixed(2);
        break;
      case 'miles-km':
        convertedValue = (numberValue * 1.60934).toFixed(2);
        break;
      case 'f-c':
        convertedValue = ((numberValue - 32)  * 5/9).toFixed(2);
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
    setActiveTab('lb-kg'); 
  };

  return (
    <div className='flex flex-col items-center text-black'>
      <div className="bg-slate-400 p-6 rounded-b-lg shadow-lg w-full max-w-md">

        {/* Button Container */}
        <div className="flex justify-end space-x-2 mb-4">

          {/**button for lb-kg */}
          <button 
            className={`px-4 py-2 ${activeTab === 'lb-kg' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('lb-kg'); setResult(null); }}
          >
            LB TO KG
          </button>

          {/**button for miles-km */}
          <button 
            className={`px-4 py-2 ${activeTab === 'miles-km' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('miles-km'); setResult(null); }}
          >
            MILES TO KM
          </button>

          {/**button for F to C*/}
          <button 
            className={`px-4 py-2 ${activeTab === 'f-c' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => { setActiveTab('f-c'); setResult(null); }}
          >
            F° TO C°
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
            {result} {activeTab === 'lb-kg' ? 'kg' : activeTab === 'miles-km' ? 'km' : '°C'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConverterReverse;