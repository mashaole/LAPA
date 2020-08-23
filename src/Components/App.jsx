import React from 'react';
import '../App.css'
import logo from './assets/loader.png';
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-header">
        <h1>
          Coming Soon
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LAPA eCommerce site
      </p>
      </body>
      <Footer />
    </div>
  );
}

export default App;