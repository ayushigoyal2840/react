import React , {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const Addusers = () => {
    let history = useHistory();
    const [ user , setuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
        
    });
    



    const {name, username, email, phone, website} = user;
    
    const onInputChange = (event) => {
        // console.log("heyy");
        // console.log(event.target.value);
        setuser({...user, [event.target.name]: event.target.value});
    };


    const onSubmit = async event => {
        event.preventDefault();
        await axios.post("http://localhost:3002/users", user);
        history.push("/");



    } 

    return (
       <div className="container">
           <div className="w-75 mx-auto shadow p-5 my-3">
               <h2 className="text-center mb-4">Add A User</h2>
               <form onSubmit= {event => onSubmit(event)}>
                   <div className="form-group">
                       <input
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter your name..."
                       name="name" 
                       value={name}
                       onChange = {event => onInputChange(event)}
                       />
                   </div>
                   <div className="form-group">
                       <input
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter your username..."
                       name="username" 
                       value={username}
                       onChange = {event => onInputChange(event)}
                       />
                   </div>
                   <div className="form-group">
                       <input
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter your Email-address..."
                       name="email" 
                       value={email}
                       onChange = {event => onInputChange(event)}
                       />
                   </div>
                   <div className="form-group">
                       <input
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter your Phone number..."
                       name="phone" 
                       value={phone}
                       onChange = {event => onInputChange(event)}
                       />
                   </div>
                   <div className="form-group">
                       <input
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter your Website name..."
                       name="website" 
                       value={website}
                       onChange = {event => onInputChange(event)}
                       />
                   </div>
                   <button className="w-100 btn btn-primary">
                       Add User

                   </button>
               </form>
                   
           </div>
       </div>
    )
}

export default Addusers;;
