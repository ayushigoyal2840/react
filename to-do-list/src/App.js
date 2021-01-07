import React from 'react';
import './App.css';

const Labelone = (props) => {
  return(
    <h1><Labeltwo msg={props.msg}/></h1>
  );
}
const Labeltwo = (props) => {
  return (
    <h1><h1>Your msg was : {props.msg}</h1></h1>
  );
};

const App = ()=> {
  return (
    <div className="App">
      <h1>hello to do app</h1>
      <hr />
      <Labelone msg="this is secret code" />
      
    </div>
  );
}

export default App;
