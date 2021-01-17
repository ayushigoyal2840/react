import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <h1>Ayushi goyal </h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
