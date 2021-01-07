import React from 'react';
import './App.css';
import Todo from './components/Todo';




const App = ()=> {
  return (
    <div className="container-fluid vw-100 vh-100">
      <div className="d-flex justify-content-center align-items-center vh-100">
      <Todo />
      </div>
      
      
    </div>
  );
}

export default App;
