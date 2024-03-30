import React, { useState } from 'react';

const AverageCalculator = () => {

  const [numbers, setNumbers] = useState([]);
  const [average, setaverage] = useState(0);

  const authToken = "eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMi0nsiZXhwIjoxNzEwODM1MjY4LCJpYXQi0jE3MTA4MzQ5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsInN1YiI6InJhaHVsQGFiYy51ZHUifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFNlY3J1dCI6IkhWSVFCVmJxbVRHRW1hRUQiLCJvd251ck5hbWUiOiJSYWh1bCIsIm93bmVyRW1haWwiOiJyYWh1bEBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.gmk2F73GZ7q7EaIGDShc4oDKK1zWQ9Up3xQ-4Dbsu8A";

  const fetchNumbers = async (numberId) => {
    try {
      const response = await fetch(`http://20.244.56.144/test/${numberId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const data = await response.json();
      const sum = newWindowState.reduce((acc, num) => acc + num, 0);
      const newaverage = sum / newWindowState.length;
      setaverage(newaverage);

      setNumbers(newWindowState);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  const handleRequest = (numberId) => {
    fetchNumbers(numberId);
  };

  return (
    <div>
      <button onClick={() => handleRequest('even')}>Fetch Even Numbers</button>
      <button onClick={() => handleRequest('prime')}>Fetch Prime Numbers</button>
      <button onClick={() => handleRequest('fibonacci')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => handleRequest('random')}>Fetch Random Numbers</button>
      <div>
        <h2>Previous Window State: {JSON.stringify(windowPrevState)}</h2>
        <h2>Current Window State: {JSON.stringify(windowCurrState)}</h2>
        <h2>Numbers: {JSON.stringify(numbers)}</h2>
        <h2>Average: {average.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default AverageCalculator;
