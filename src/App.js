import React from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="container mx-auto w-2/4">
      <h1 className="py-4">Code contents</h1>
      <input
      onChange={e => setInputValue(e.target.value)} 
      type="text"
      placeholder="Enter a link for QR code"
      className="border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600"></input>

      <QRCode 
      className="mx-auto mt-20"
      value={inputValue} />
    </div>
  );
}

export default App;
