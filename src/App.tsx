import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Tools from "./components/Tools.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen w-screen flex flex-col">
        <Home />
        <About />
        <Projects />
        <Tools />
      </div>
    </BrowserRouter>
  );
};

export default App;
