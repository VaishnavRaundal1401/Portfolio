import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <div>
    <section id="HomePage">
      <Navbar/>
      <HomePage/>
    </section>
    <section id="About"><About/></section>
    <section id="Skills"><Skills/></section>
    <section id="Projects"><Projects/></section>
    <section id="Contact"><Contact/></section>
    </div>
  );
}

export default App;
