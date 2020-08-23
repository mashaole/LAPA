import React from 'react';
import '../App.css'
import loading from './assets/load.png';
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import ContactForm from './Form/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <body className="App-header">
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