import React from 'react'

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
        <td>1</td>
        <td>{props.contacts.name}</td>
        <td>{props.contacts.phone}</td>
        <td>{props.contacts.email}</td>
      </tr>
    )
}

export default Contact;