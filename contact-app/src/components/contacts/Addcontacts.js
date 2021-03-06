import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Addcontact} from "../../store";
import shortid from "shortid";
import {useHistory} from "react-router-dom";

const Addcontacts = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContact = (event) => {
        event.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        }
        // console.log(name, phone, email);
        dispatch(Addcontact(new_contact));
        history.push("/");

    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Create New Contact
                <div className="card-body">
                    <form onSubmit={(event) => createContact(event)}>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                             />
                             </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                             />
                             </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <button className="btn btn-primary" type="submit">Create Contact</button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default Addcontacts;
