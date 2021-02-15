import React,{useRef,useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import ayu1 from './hero1.jpeg';
import ayu2 from './hero2.jpg'

const Hero = () => {
  let app = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite()

  useEffect(() => {
    const img1 = images.firstElementChild;
    const img2 = images.lastElementChild;




    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    // console.log(app);
    // console.log(ayu1,ayu2);

    tl.from(img1, 1.2, {y: 1280, ease: Power3.easeOut})
    .from(img1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(img2, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
    .from(img2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
   

  })
    return (
        <div>
            <div className="hero" ref={el => app = el}>
     
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
          <div className="hero-images-inner" ref={el => images = el}>
            
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
        </div>
    )
}

export default Hero
