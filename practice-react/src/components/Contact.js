import React,{useEffect,useState} from 'react'

function Contact() {
    const[name,setname]=useState("arohi ;");
    let data="this is example of states using hooks";
    useEffect(()=> {
        console.log("hello from hooks");
    })

    return (
        <div>
            <h1>{data}</h1>
            <h2>{name}</h2>
            <button onClick={()=>setname("name changed")}>Update name</button>
        </div>
    )
};

export default Contact;

