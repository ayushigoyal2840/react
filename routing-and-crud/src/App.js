import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Thank from "./components/pages/Thank";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Addusers from './components/Users/Addusers';
import Edit from './components/Users/Edit';
import View from './components/Users/View';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thank" component={Thank} />
       <Route exact path="/users/add" component={Addusers} />
       <Route exact path="/users/edit/:id" component={Edit} />
       <Route exact path="/users/:id" component={View} />
        <Route component={Notfound} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
