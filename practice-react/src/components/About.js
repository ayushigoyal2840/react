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
    render()
    {
        return(<div>
            <h1>hello this is about page</h1>
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
