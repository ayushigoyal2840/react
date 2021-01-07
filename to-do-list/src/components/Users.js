import React, {useReducer, useState} from 'react';

const Users =  () => {
    const [users, setUsers] = useState ([
        {
        id:1,
        name:'ayushi goyal',
        email:'ayushi@gmail.com'
    },
    {id:2,
        name:'ayushi goyal',
        email:'ayushi@gmail.com'},
    {id:3,
        name:'ayushi goyal',
        email:'ayushi@gmail.com'},
    {id:4,
        name:'ayushi goyal',
        email:'ayushi@gmail.com'}

    ])
    return (
        <div>
            <table class="table table-dark">
  <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
   {
       users.map(user => {
           return (
               <tr>
                   <td>
                       {user.id}
                       
                   </td>
                   <td>
                       {user.name}
                       
                   </td>
                   <td>
                       {user.email}
                       
                   </td>
               </tr>

           );
       })
   }
  </tbody>
</table>


  
        </div>
    );
}

export default Users;