import React from 'react';
import '../App.css'
import logo from './assets/loader.png';
import Navbar from './Nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>
          Coming Soon
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LAPA eCommerce site
      </p>
      </header>
    </div>
  );
}

export default App;