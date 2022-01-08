import React from "react";

const Navbar = () => {
  return (
    <div className="px-10 mb-8">
      <div className="container mx-auto py-8 flex flex-row justify-between">
        <div>
          <h1 className="text-2xl text-gray-500 font-playfair">
            <span className="text-sky-300">Trinkets</span> of Luna
          </h1>
        </div>
        <div className="flex flex-row font-playfair font-medium mt-1">
          <p className="mr-8 text-lg text-gray-600">Home</p>
          <p className="mr-8 text-lg text-gray-600">Shop</p>
          <p className="mr-8 text-lg text-gray-600">About</p>
          <p className="text-lg text-gray-600">Contact</p>
        </div>
        <div className="flex flex-row text-gray-600 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
