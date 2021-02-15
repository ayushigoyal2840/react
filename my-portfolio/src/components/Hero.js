import React,{useRef,useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import ayu1 from './hero1.jpeg';
import ayu2 from './hero2.jpg'

const Hero = () => {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});

  useEffect(() => {
    const img1 = images.firstElementChild;
    const img2 = images.lastElementChild;
    

    const headlinef = content.children[0].children[0];
    const headlines = headlinef.nextSibling;
    // const headlinet = headlines.nextSibling;
    const contentp = content.children[1];
    const contentb = content.children[2];
    // const contentp = content.children[1];




    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    // console.log(app);
    // console.log(ayu1,ayu2);

    tl.from(img1, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
    .from(img1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(img2, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(img2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //content

    tl.staggerFrom([headlinef.children, headlines.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8,
    }, .15, 'Start')

    .from(contentp, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentb, 1, {y:20, opacity: 0, ease: Power3.easeOut}, 1.6)
   

  }, [tl])
    return (
        <div>
            <div className="hero" ref={el => app = el}>
     
     <div className="container">
       <div className="hero-inner">
         <div className="hero-content">
           <div className="hero-content-inner" ref={el => content = el}>
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
          <div ref={el => images = el} className="hero-images-inner">
            
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
