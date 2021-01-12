import React from 'react';
import {useSelector} from 'react-redux';
import Contact from './Contact';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
    return (
        <div>
            
            <table className="table shadow table-striped ">
  <thead className="table">
    <tr>
      <th scope="col">
        <div className="custom-control custom-checkbox">
          <input type="checkbox"
          className="custom-control-input" />
          <label className="custom-control-label"/>
        </div>
      </th>
      <th>Serial no.</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {
      contacts.map((contacts) => (
        <Contact contacts={contacts} />
      ) 

      )}
    
  </tbody>
</table>
        </div>
    )
}

export default Contacts