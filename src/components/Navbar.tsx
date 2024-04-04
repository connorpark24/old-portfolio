"use client";

import { useState } from "react";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute w-full flex justify-end h-24 text-white bg-primary items-center lg:px-24 md:px-16">
      <div className="hidden md:flex flex-row lg:gap-x-16 gap-x-12 font-noto-sans font-light text-sm">
        <a href="#education">Education</a>
        <a href="#work">Work</a>
        <a href="#blog">Blog</a>
      </div>

      <div className="flex-1 flex justify-end md:hidden mr-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <Bars3Icon
            className="mt-1 h-6 w-6 flex-none text-white"
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full z-50 transform md:hidden text-primary ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 bg-white w-48`}
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
            href="#education"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 font-noto-sans"
          >
            Education
          </a>
          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 font-noto-sans"
          >
            Work
          </a>
          <a
            href="#blog"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 font-noto-sans"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
