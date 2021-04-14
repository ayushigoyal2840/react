import React,{useState} from 'react';
import '../App.css';
import { Table } from 'react-bootstrap';

function Home() {
  const [user,setUser] = useState([
  {name:"ayuhi " , age: 12 , address:"delhi"},  
  {name:"shikha " , age: 13 , address:"noida"},  
  {name:"swati" , age: 14, address:"bombay"},  
  {name:"utkarsh " , age: 14 , address:"orai"},  
  {name:"arohi " , age: 15 , address:"india"},  
  ])
  return (
    <>
    <h1>table</h1>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>NAme</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
   {
     user.map((item,index)=><tr>
       <th>{index}</th>
       <th>{item.name}</th>
       <th>{item.age}</th>
       <th>{item.address}</th>
     </tr>)
   }
    
    
  </tbody>
</Table> 
</>
  );
}

export default Home;
