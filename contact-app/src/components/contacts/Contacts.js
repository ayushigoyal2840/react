import React from 'react';
import {useSelector} from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
    return (
        <div>
            
            <table className="table shadow table-striped">
  <thead>
    <tr>
      <th scope="col">
        <div className="custom-control custom-checkbox">
          <input type="checkbox"
          className="custom-control-input" />
          <label className="custom-control-label"/>
        </div>
      </th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {
      contacts.map(contacts => (<tr>
        <th scope="row">1</th>
        <td>{contacts.name}</td>
        <td>{contacts.phone}</td>
        <td>{contacts.email}</td>
      </tr>
      ))
    }
    
  </tbody>
</table>
        </div>
    )
}

export default Contacts
