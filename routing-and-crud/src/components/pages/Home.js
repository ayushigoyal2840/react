import React, {useState , useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [users, useUsers] = useState([]);

    useEffect(() => {
        console.log("heyy");
    }, [])


    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
            </div>
            
        </div>
    )
}

export default Home;
