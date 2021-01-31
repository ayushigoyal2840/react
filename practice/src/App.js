import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Para from './components/Para.js';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <Para/>
    </div>
  );
}

export default App;
