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
      <Para />
       {/* <Para heading="Component-Based" para="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
      <Para heading="Learn Once, Write Anywhere" para="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/> */}
     </div>
  );
}

export default App;
