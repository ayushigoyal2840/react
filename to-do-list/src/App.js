import React from 'react';
import './App.css';
import Counter from './components/Counter';
// import Message from './components/Message';



const App = ()=> {
  return (
    <div className="App">
      <h1>hello to do app</h1>
      <hr />
      {/* <Message /> */}
      <Counter></Counter>
      <hr />
      <hr />
      
    </div>
  );
}

export default App;
