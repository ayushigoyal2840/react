import React,{useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function CourseStructure() {
  
  const[name,setame]=useState("")
  const[age,setage]=useState("")
  const[address,setaddress]=useState("")
  
  let data={name,age,address};


function makeuser()
{
  alert("hii");
  console.log(data);
}



  return (
    <div>
        <h1>Welcome to course</h1>
        <input type="text" onChange={(e)=>setame(e.target.value)} name="username" value={name} />
        <br /><br />
        <input type="text" onChange={(e)=>setage(e.target.value)} name="age" value={age} />
        <br /><br />
        <input type="text" name="address" onChange={(e)=>setaddress(e.target.value)} value={address} />
        <br /> <br />
        <button onClick={makeuser}>Createuser</button>
    </div>
  )
} 

export default CourseStructure;
