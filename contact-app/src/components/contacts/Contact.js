import React from 'react';
import Avatar from 'react-avatar';

const Contact = (props) => {
    return (
        <tr>
        <th scope="col">
        <div className="custom-control custom-checkbox">
          <input type="checkbox"
          className="custom-control-input" />
          <label className="custom-control-label"/>
        </div>
      </th>
        
        <td>
          <Avatar className="mr-2" name={props.contacts.name} size="45" round={true}/>
          {props.contacts.name}</td>
        <td>{props.contacts.phone}</td>
        <td>{props.contacts.email}</td>
        <td className="actions">
          <a href="#">
            <span className="material-icons mr-2 text-success">edit</span>          </a>
          <a href="#">
            <span className="material-icons text-danger">remove</span>          </a>
        </td>
      </tr>
    )
}

export default Contact;