import React, { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={isScrolled ? "fixed top-0 w-full transition duration-500 bg-cyan-50 shadow-xl z-20" : "fixed top-0 transition duration-300 w-full bg-transparent z-20"}>
      <div className="container mx-auto py-8 flex flex-row justify-between">
        <div>
          <h1 className="text-2xl text-gray-500 font-playfair">
            <span className="text-sky-300">Trinkets</span> of Luna
          </h1>
        </div>
        <div className="flex flex-row font-playfair font-medium my-1">
          <p className="mr-8 text-lg text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400">Home</p>
          <p className="mr-8 text-lg text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400">Shop</p>
          <p className="mr-8 text-lg text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400">About</p>
          <p className="text-lg text-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400">Contact</p>
        </div>
        <div className="mt-2 flex flex-row text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 cursor-pointer transition duration hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 cursor-pointer transition duration-300 hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 cursor-pointer transition duration-300 hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
