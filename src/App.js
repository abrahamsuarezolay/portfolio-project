import "./index.css";
import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {

  return(<div className="container">
    <Navbar />
    <About />
    <Projects />
  </div>)
  
}

export default App;
