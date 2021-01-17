import React from 'react';
import {Link} from 'react-router-dom';

const  Contact = () => {
    return (
        <div className="container">
        <div className="py-4">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" placeholder="We'll never share your email with anyone else." id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="phone" class="form-label">Phone Number</label>
    <input type="phone" placeholder="10 digits registered phone number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="phone" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Message</label>
    <input type="email" placeholder="Type your message here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link type="submit" to="/" class="btn btn-primary">Submit</Link>
</form>
        </div>
        
    </div>
    )
}

export default Contact
