import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
// import Function from './components/Function';

function App() {
  return (
   <div>
     <Banner />
     <Nav />
       {/* <div class="box">
            <div class="circle">
            <h2>
                <a href="#">Home</a><br />
                <a href="#">About</a><br />
                <a href="#">Projects</a><br />
                <a href="#">Contact</a>
            </h2>
            </div>
        </div> */}
   </div>
  );
}

export default App;
