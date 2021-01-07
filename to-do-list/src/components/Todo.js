import React,{useState} from 'react';

const Todo = () => {
    const [todo,setTodo] = useState ([
        {
            id:1,
            todo:"drinnking water",
            iscompleted:false
        },
        {id:2,
            todo:"coding",
            iscompleted:false},
        {id:3,
            todo:"meditation",
            iscompleted:true}
    ])
    return (
        <div className="card shadow">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                {
                    todo.map(todo => {
                        return (
                            <li className="list-group-item">{todo.todo}</li>
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