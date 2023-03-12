import "./index.css";
import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  return(<div className="container">
    <Navbar />
    <About />
    <Projects />
    <Contact />
  </div>)
  
}

export default App;
