import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";


const Edit = () => {
    let history = useHistory();

    const {id} = useParams();
    // alert(id);

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

    useEffect ( () => {
        loadUser();
    }, []);

    const onSubmit = async event => {
        event.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push("/");



    } 

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        // console.log(result);
        setuser(result.data);



    }

    return (
       <div className="container">
           <div className="w-75 mx-auto shadow p-5 my-3">
               <h2 className="text-center mb-4">Edit</h2>
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
                   <button className="w-100 btn btn-warning">
                       Update User

                   </button>
               </form>
                   
           </div>
       </div>
    )
}

export default Edit;
