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
        <div>
            <h1>heyy</h1>
        </div>
    )
}

export default View;
