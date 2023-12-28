const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-[480px] md:w-[750px] z-20 flex rounded-3xl fixed mt-8 justify-self-center justify-around items-center p-2 bg-primary bg-opacity-80">
        <a href="#" className="text-white text-md">
          Home
        </a>
        <a href="#about" className="text-white text-md">
          About
        </a>
        <a href="#projects" className="text-white text-md">
          Projects
        </a>
        <a href="#toolkit" className="text-white text-md">
          Tools
        </a>
        <a href="#contact" className="text-white text-md">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
