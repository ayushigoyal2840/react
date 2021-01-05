import React from 'react';

function Hero() {
    return(
        <div class="jumbotron text-center">
  <h1>SMILE PLEASE</h1> 
  <p>We specialize in smiling</p> 
  <form class="form-inline">
    <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required />
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
    );
}

export default Hero;
