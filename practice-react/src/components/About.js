import React from 'react'

class About extends React.Component{
    constructor()
{
    super();
    this.state={
        name:"ayushi",
        age:21
    }
console.warn("constructor");
}
componentDidMount()
{
 console.warn("mount");
}
componentDidUpdate()
{
    // console.warn("did update");
    alert("name is updated");
}
    render()
    {
        return(<div>
            <h1>hello this is about page</h1>
            <h2>{this.state.name}</h2>
            <h3>{this.state.age}</h3>
            <button onClick={()=>{this.setState({name:'shikha'})}} >update</button>
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
