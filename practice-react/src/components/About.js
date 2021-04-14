import React from 'react'

class About extends React.Component{
    constructor()
{
    super();
    
    
console.warn("constructor");
}
componentDidMount()
{
 console.warn("mount");
}
componentDidUpdate()
{
    // console.warn("did update");
    // alert("name is updated");
}
    render()
    {
        return(<div>
            <h1>about us component</h1>
        </div>)
    }
}

export default About;

// constructor()
// {

// }
// componentDidMount()
// {

// }
// componentDidUpdate()
// {

// }
// componentWillUnmount()
// {

// }
