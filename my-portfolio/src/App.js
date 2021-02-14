import React from 'react'
import './App.scss';
import arrow from './images/arrow-right.svg';
// import Function from './components/Function';

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
                   hello this is ayuhi
                 </div>

               </div>
               <div className="hero-content-line">
                 <div className="hero-content-line-inner">
                    welcome to his shit
                 </div>

               </div>
               <div className="hero-content-line">
                 <div className="hero-content-line-inner">
                    i am still designing
                 </div>

               </div>
             </h1>
             <p>
             Squirrel-girl quasar mysterio banner odin blackpanther deathstrike menace cable mentallo. Gorgon zodiak, squirrel-girl spyke. Lifeguard batroc miracleman banshee microchip penance. Blackpanther mrfantastic ink star-lord cannonball bob ezekiel. Wonderman jocasta vanisher deathbird dynamo medusa wolfsbane vanisher. Amora madrox, hellion star-lord lionheart urich. Lockheed moleman stryker valkyrie scourge araña praxagora countess. Manwolf korath frankenstein stryker illuminati abomination. Araña proudstar stature penance. Toad barnes banshee sage! Namora leech riptide shaman feral beast demogoblin gladiator gwen arcana pepperpotts caretaker cuckoos. Skrulls urich grimreaper miek. Ares leech mandarin miracleman ironpatriot azazel zemo abomb titania bob. Darkstar.
             </p>
             <div className="btn-row">
               <button className="explore-button">download resume</button>
               <div className="arrow-icon">
                 <img src={arrow} alt="arrow"></img>
               </div>
             </div>
           </div>

         </div>
         <div className="hero-images">

         </div>
       </div>
     </div>
    
   </div>
  );
}

export default App;
