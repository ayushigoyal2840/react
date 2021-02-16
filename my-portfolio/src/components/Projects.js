import React from 'react';
import hero1 from './hero1.jpeg'
import hero2 from './hero2.jpg'


const Projects = () => {
    return (
//         <div>
//            <div class="card" style={{float: 'left'}}em'}}>
//   <img class="card-img-top" src="..." alt="Card image cap" />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//         </div>
<div>
    <div class="container my-4">
      <p>
        <strong
          >You can use slideshow component for cycling through elements—images or slides of text—like a carousel</strong>
        
      </p>

      <p>
        Detailed documentation and more examples you can find in our
        hii ayuu
      </p>

      <hr />
      </div>


<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

 
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>

  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    
  </ol>
 
  <div class="carousel-inner" role="listbox">

    
    <div class="carousel-item active">

      <div class="col-md-3" style={{float: 'left'}}>
       <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      
       <div class="col-md-3" style={{float: 'left'}}>
       <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

    </div>
    
    {/* <div class="carousel-item">

      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero2} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero2} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-3" style={{float: 'left'}}>
        <div class="card mb-2">
          <img class="card-img-top"
            src={hero1} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

    </div> */}

  </div>

  </div>
  </div>
  </div>
    
    )
}

export default Projects
