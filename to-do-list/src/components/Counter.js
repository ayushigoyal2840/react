import React from 'react';

const Counter = () => {
    return(
        <div>
            <h2>your current counter</h2>
            <div class="input-group mb-3 w-25">
  <div class="input-group-prepend ">
    <button className="btn btn-primary">+</button>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  <div class="input-group-append">
    <button className="btn btn-primary">-</button>
  </div>

        </div>
        </div>
        
    );
}

export default Counter;