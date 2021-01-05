import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Container from './components/Container';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Container />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
