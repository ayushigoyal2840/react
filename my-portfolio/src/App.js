import React from 'react'
import './App.scss';
// import arrow from './images/arrow.Svg';
// import Function from './components/Function';
import ayu1 from './images/hero1.jpeg';
import ayu2 from './images/hero2.jpg'

function App() {
  return (
   <div className="hero">
     <div className="container">
       <div className="hero-inner">
         <div className="hero-content">
           <div className="hero-content-inner">
             <h1>
               <div className="hero-content-line">
                 <div className="hero-content-line-inner">
                  I am Ayushi Goel
                 </div>

               </div>
               <div className="hero-content-line">
                 <div className="hero-content-line-inner-2">
                    Web Developer
                 </div>

               
               

               </div>
             </h1>
             <p>
Innovative, Energetic and task-driven professional.Creating and maintaining
functional, attractive, and responsive websites for travel companies and commercial websites.. Clear
understanding of modern technologies and best design practices. Experienced
with Webflow.            </p>
             <div className="btn-row">
               <button className="button">download resume</button>
               <div className="arrow-icon">
                 {/* <img src={arrow} alt="arrow"></img> */}
               </div>
             </div>
           </div>

         </div>
         <div className="hero-images">
          <div className="hero-images-inner">
            
            <div className="hero-image ayu1">
              <img src={ayu1}></img>
            </div>
            <div className="hero-image ayu2">
              <img src={ayu2}></img>
            </div>
    </div>
         </div>
       </div>
     </div>
    
   </div>
  );
}

export default App;
