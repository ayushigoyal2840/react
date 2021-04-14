import React,{useState} from 'react';
import './App.css';
// import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
// import CourseStructure from './components/CourseStructure'; 
import About from './components/About';
import Contact from './components/Contact';
import CourseStructure from './components/CourseStructure';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/about">About</Link>
      {/* <Home /> */}
      {/* <About name={name} /> */}
      {/* <button onClick={()=>{setName("ayushi goel")}}>update</button> */}

        {/* <Contact/> */}
     {/* <h1>hello from react</h1> */}
     <CourseStructure />
     </Router>
    </div>
  );
}

export default App;
