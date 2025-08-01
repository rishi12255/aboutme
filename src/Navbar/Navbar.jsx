import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md py-6 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">MyPortfolio</h1>
        <div className="space-x-6">
          <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>

          <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
          <a href="#tech" className="text-gray-300 hover:text-green-400 transition-colors">Tools</a>
          <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
