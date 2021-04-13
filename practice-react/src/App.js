import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure'; 
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Contact />
     {/* <h1>hello from react</h1> */}
      
    </div>
  );
}

export default App;
