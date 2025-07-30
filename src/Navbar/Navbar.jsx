import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        <div className="space-x-10 text-gray-300 font-medium text-xl hidden sm:block">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-green-400 transition"
          >
            About
          </Link>
          <Link
            to="tech"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Tools
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
