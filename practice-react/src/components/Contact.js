import React,{useEffect,useState} from 'react'

function Contact() {
    
    let data="this is example of states using hooks";
    useEffect(()=> {
        console.log("hello from hooks");
    })

    return (
        <div>
            <h1>this is contact us page</h1>
        </div>
    )
};

export default Contact;

