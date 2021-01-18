import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


        const loadUsers = async () => {
            const result = await axios.get("http://localhost:3002/users");
            // console.log(result);
           setUsers(result.data.reverse());
        }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
            </div>
            <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">S No.</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((users, index) => (
            <tr>
                <th scope = "row" >{index + 1}</th>
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td>
                <Link className= "btn btn-primary mr-2">View</Link>
                <Link className= "btn btn-outline-primary mr-2" to = {"/users/edit"}>Edit</Link>
                <Link className= "btn btn-danger" >Delete</Link>
            </td>
            </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
    )
}

export default Home;
