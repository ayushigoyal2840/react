import React from 'react'

function Para(props) {
    const styles = {
    width : "18rem",
    color: "red",
    display: "block",
    // white-space: "nowrap"
    };
    return (
        // <div className="flex-container">
            <div class="flex-container">
  <div class="card-body" >
    <h5 class="card-title">{props.heading}</h5>
    <p class="card-text">{props.para}</p>
   
  </div>
</div>
//  </div>
       
    )
}

export default Para
