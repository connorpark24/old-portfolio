const Navbar = () => {
  return (
    <nav className="w-2/5 z-20 flex flex-row rounded-3xl fixed mt-8 top-0 ml-[550px] justify-around p-2 bg-primary bg-opacity-80">
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
