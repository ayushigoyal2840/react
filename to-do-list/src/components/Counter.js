import React,{useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increament = ()=> {
        setCounter(counter+1);
    }
    const decreament = ()=> {
        setCounter(counter-1);
    }


    return(
        <div>
            <h2>your current counter</h2>
            <div className="input-group mb-3 w-25">
  <div className="input-group-prepend ">
    <button className="btn btn-primary" onClick={increament}>+</button>
  </div>
  <input type="text" className="form-control" value={counter} aria-label="Amount (to the nearest dollar)" />
  <div className="input-group-append">
    <button className="btn btn-primary" onClick={decreament}>-</button>
  </div>

        </div>
        </div>
        
    );
}

export default Counter;