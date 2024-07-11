import './App.scss';
import {useEffect} from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
function App() {

  useEffect(() => {
    const handleOnMouse = e => {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
      section.addEventListener('mousemove', handleOnMouse);
    });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      sections.forEach(section => {
        section.removeEventListener('mousemove', handleOnMouse);
      });
    };

  }, []);

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
