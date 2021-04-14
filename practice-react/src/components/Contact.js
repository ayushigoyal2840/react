import React,{useState} from 'react'

function Contact() {
const [val,setval]=useState("ayushi");   
function test(e) {
    console.log("tests",e.target.value);
    setval(e.target.value);
}
    return (
        <div>
            <h1>this is contact us page</h1>
            <input type="text" value={val} onChange={test}></input>
            <button onClick={()=>{alert(val)}}>Click me</button>
            
        </div>
    )
};

export default Contact;

