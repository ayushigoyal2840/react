import React,{useState, useEffect} from 'react';
import {Link , useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const [user, setuser] = useState ({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setuser(res.data);
    };
    
    return (
        <div className="container">
            
            <h1 className="display-4"> User Id : {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name : {user.name}</li>
                <li className="list-group-item">user name : {user.username}</li>
                <li className="list-group-item">email : {user.email}</li>
                <li className="list-group-item">phone : {user.phone}</li>
                <li className="list-group-item">website : {user.website}</li>
 </ul>
 <Link className="btn btn-primary my-3" to="/">
                back to home
            </Link>
        </div>
    );
}

export default View;
