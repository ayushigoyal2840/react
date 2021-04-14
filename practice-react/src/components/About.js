import React from 'react'

class About extends React.Component{
    constructor()
{
    super();
    
    
// console.warn("constructor");
}
componentDidMount()
{
//  console.warn("mount");
console.log("props",this.props.name);

}
componentDidUpdate()
{
    // console.warn("did update");
    // alert("name is updated");
console.log("props update",this.props.name);

}
    render()
    {
        return(<div>
            <h1>about us component</h1>
            <h2>{this.props.name}</h2>
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
