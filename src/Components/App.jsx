import React from 'react';
import '../App.css'
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import loading from './assets/load.png';
import ContactForm from './Form/ContactForm';
import MasonryLayout from './Layout/MasoryLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <body className="App-header">
          <MasonryLayout />
          <h1>
            Coming Soon
        </h1>
          <img src={loading} className="App-logo" alt="loading" />
          <p>
            LAPA eCommerce site
      </p>
        </body>
      </div>
      <div>
        <body className="App-header">
          <ContactForm />
        </body>
      </div>
      <Footer />
    </div>
  );
}

export default App;