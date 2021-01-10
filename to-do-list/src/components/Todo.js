import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Addtodo from './Addtodo';

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

    const completeTodo = id => {
            const updatedTodos = todo.map(todo => {
                if(todo.id == id){
                    todo.iscompleted = true;
                    return todo;
                }
                return todo;
            });
    setTodo(updatedTodos);
    };

   const deleteTodo = id => {
       const updatedTodos = todo.filter(todo => todo.id != id);
       setTodo(updatedTodos);
    //    console.log(updatedTodos);
   }









    return (
        <div className="card shadow">
            <div className="card-header">
                <Addtodo todotext={todotext} changesetTodotext={changesetTodotext} AddTodo={AddTodo} />
                </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                {
                    todo.map(todo => {
                        return (
                            <li 
                            className="list-group-item d-flex justify-content-between" 
                            key={todo.id}>
                                <div>
                                <input 
                                type="checkbox" 
                                checked={todo.iscompleted}
                                onChange={() => completeTodo(todo.id)}
                                />
                                <span className={todo.iscompleted ? `completed`:null}>
                                {todo.text}
                                </span>
                                </div>
                                <i class="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
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