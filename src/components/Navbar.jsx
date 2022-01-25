import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State handler to check if the page is scrolled.
  const [isScrolled, setIsScrolled] = useState(false);

  // If the page is scrolled, it will update the state and styles
  // of the navbar using a ternary operator in the className attribute.
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Scroll Event Listener
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={isScrolled ? "fixed top-0 w-full transition duration-500 bg-cyan-50 shadow-xl py-3 z-20" : "fixed top-0 transition duration-300 w-full py-8 bg-transparent z-20"}>
      <div className="container mx-auto flex flex-row justify-between">
        <div className="my-auto">
          <Link to="/" className={isScrolled ? "text-xl text-gray-600 font-playfair" : "text-3xl text-gray-600 font-playfair"}>
            <span className="text-sky-300">Trinkets</span> of Luna
          </Link>
        </div>
        <div className="flex flex-row font-playfair font-medium my-auto">
          {/* TODO: Turn to Unordered List & List Items for SEO */}
          <Link to="/" className={isScrolled ? "ml-14 mr-8 text-md text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400" : "mr-8 text-xl text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400"}>
            Home
          </Link>
          <Link to="/shop" className={isScrolled ? "mr-8 text-md text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400" : "mr-8 text-xl text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400"}>
            Shop
          </Link>
          <Link to="/about" className={isScrolled ? "mr-8 text-md text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400" : "mr-8 text-xl text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400"}>
            About
          </Link>
          <Link to="/contact" className={isScrolled ? "mr-8 text-md text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400" : "mr-8 text-xl text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400"}>
            Contact
          </Link>
        </div>
        <div className="my-auto flex flex-row text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "h-4 w-4 mr-4 cursor-pointer transition duration hover:text-cyan-400" : "h-6 w-6 mr-4 cursor-pointer transition duration hover:text-cyan-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "h-4 w-4 mr-4 cursor-pointer transition duration hover:text-cyan-400" : "h-6 w-6 mr-4 cursor-pointer transition duration hover:text-cyan-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <Link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "h-4 w-4 mr-4 cursor-pointer transition duration hover:text-cyan-400" : "h-6 w-6 mr-4 cursor-pointer transition duration hover:text-cyan-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
