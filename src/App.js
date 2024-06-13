import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
    <section id="HomePage"><Navbar/></section>
    <section id="About">About</section>
    <section id="Skills">Skills</section>
    <section id="Projects">projects</section>
    <section id="Contact">contact</section>
    </div>
  );
}

export default App;
