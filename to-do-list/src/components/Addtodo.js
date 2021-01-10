import React from 'react';

const Addtodo = (props) => {
    return (<div><h1 className="ss">Add todo</h1>
       <div class="input-group">
  <input 
  type="text" 
  className="form-control" 
  placeholder="Enter your task" 
  value={props.todotext}
  onChange={(event) => props.changesetTodotext(event)}

  />
  <button className="btn btn-primary" onClick={props.AddTodo}>Add</button>
</div>
            </div>
    );
}


export default Addtodo;