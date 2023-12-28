const Navbar = () => {
  return (
    <nav className="w-96 z-20 flex rounded-3xl fixed mt-8 justify-self-center justify-around p-2 bg-primary bg-opacity-80">
      <a href="#home" className="text-white">
        Home
      </a>
      <a href="#about" className="text-white">
        About
      </a>
      <a href="#projects" className="text-white">
        Projects
      </a>
      <a href="#toolkit" className="text-white">
        Tools
      </a>
      <a href="#contact" className="text-white">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
