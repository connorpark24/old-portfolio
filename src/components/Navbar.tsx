import { useState } from "react";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-end h-24 text-white bg-primary text-md items-center lg:px-24 md:px-16">
      <div className="hidden md:flex flex-row gap-20">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#toolkit">Tools</a>
      </div>

      <div className="flex-1 flex justify-end md:hidden mr-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <Bars3Icon
            className="mt-1 h-6 w-6 flex-none text-primary"
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full z-50 transform md:hidden text-white ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 bg-primary w-48`}
      >
        <div className="p-8">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <ChevronRightIcon
              className="h-8 w-8 ml-[-10px]"
              aria-hidden="true"
            />
          </button>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            Projects
          </a>
          <a
            href="#toolkit"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
