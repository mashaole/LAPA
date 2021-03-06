import React from 'react';
import '../App.css'
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import loading from './assets/load.png';
import ContactForm from './Form/ContactForm';
import MasonryLayout from './Layout/MasoryLayout';
import About from './Layout/About'
import { HashRouter as Router, Route } from 'react-router-dom';
import { func } from 'prop-types';

function Nav() {
  return (<Navbar />)
}

function Foot() {
  return (<Footer />)
}

function Contact() {
  return (<ContactForm />)
}

function Landing() {
  return (<MasonryLayout />)
}

function ComingSoon() {
  return (<div>
    <h1>
      Coming Soon
        </h1>
    <img src={loading} className="App-logo" alt="loading" />
    <p>
      LAPA eCommerce site
      </p>
  </div>)
}

function AboutUs() {
  return (<About />)
}

function inBoundUser() {
  return (<Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      {Nav()}
      <body className="App-header">

        <Route exact path="/">{Landing()} </Route>
        <Route exact path="/products">{ComingSoon()}</Route>
        <Route exact path="/about">{AboutUs()}</Route>
        <Route exact path="/contact">{Contact()}</Route>

      </body>
      <div>
      </div>
      {Foot()}
    </div>
  </Router>)
}

function App() {
  return (inBoundUser());
}

export default App;