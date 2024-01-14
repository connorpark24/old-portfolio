import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Tools from "./components/Tools.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-white min-h-screen w-screen flex flex-col">
        <Home />
        <About />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
