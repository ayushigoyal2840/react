import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Thank from "./components/pages/Thank";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Notfound from './components/pages/Notfound';

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
        <Route component={Notfound} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
