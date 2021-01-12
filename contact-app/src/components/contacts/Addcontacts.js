import React, {useState} from 'react'

const Addcontacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Create New Contact
                <div className="card-body">
                    <form>
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
