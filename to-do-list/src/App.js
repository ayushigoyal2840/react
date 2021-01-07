import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
// import Message from './components/Message';



const App = ()=> {
  return (
    <div className="container">
      <h1>hello to do app</h1>
      <hr />
      {/* <Message /> */}
      <Counter></Counter>
      <hr />
      <hr />
      <Users />
      <hr />
      <hr />
      
    </div>
  );
}

export default App;
