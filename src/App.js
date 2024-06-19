import './App.scss';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
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
    <section id="Projects">projects</section>
    <section id="Contact">contact</section>
    </div>
  );
}

export default App;
