import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const[todotext,setTodotext] = useState("");
    const [todo,setTodo] = useState ([
        {
            id:1,
            text:"drinnking water",
            iscompleted:false
        },
        {id:2,
            text:"coding",
            iscompleted:false},
        {id:3,
            text:"meditation",
            iscompleted:true}
    ])

    const changesetTodotext = (event) => {
        // console.log(event.target.value);
        setTodotext(event.target.value);
        
    }

    const AddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            text:todotext,
            iscompleted:false

        };

        console.log(newTodo);
        setTodo([...todo, newTodo]);
        setTodotext("");
    };

    return (
        <div className="card shadow">
            <div className="card-header">
            <div class="input-group">
  <input 
  type="text" 
  className="form-control" 
  placeholder="Enter your task" 
  value={todotext}
  onChange={(event) => changesetTodotext(event)}

  />
  <button className="btn btn-primary" onClick={AddTodo}>Add</button>
</div>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                {
                    todo.map(todo => {
                        return (
                            <li 
                            className="list-group-item" 
                            key={todo.id}>
                                <input type="checkbox" checked={todo.iscompleted}/>
                                <span className={todo.iscompleted ? `completed`:null}>
                                {todo.text}
                                </span>
                                </li>
                            // <li className="list-group-item">{todo.todo}</li>
                            // <li className="list-group-item">{todo.todo}</li>

                        );
                    })
                }

                </ul>
            </div>

        </div>
    );
}

export default Todo;