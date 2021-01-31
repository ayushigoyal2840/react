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
      <Para heading="Declarative" para="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug."/>
      <Para heading="Component-Based" para="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
      <Para heading="Learn Once, Write Anywhere" para="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
    </div>
  );
}

export default App;
