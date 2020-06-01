import React from 'react';
import './App.css';
import Products from './products';
import Nav from './nav';
import Footer from './footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
