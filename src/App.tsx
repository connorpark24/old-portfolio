import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import Work from "./components/Work.tsx";
import BlogPreview from "./components/BlogPreview.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen w-screen flex flex-col">
        <Home />
        <About />
        <Work />
        <BlogPreview />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
