import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ANOVOS</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#services" className="hover:text-gray-300 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#our-work" className="hover:text-gray-300 transition duration-300">
              Our Work
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-gray-300 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#insights" className="hover:text-gray-300 transition duration-300">
              Insights
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
