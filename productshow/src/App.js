import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './products/Product'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Try App
        </p>
     
      </header>
      <Product />
    </div>
  );
}

export default App;
