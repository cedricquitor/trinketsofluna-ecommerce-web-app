import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  // State handler to check if the page is scrolled.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Custom hook for theme (light/dark).
  const { colorTheme, setTheme } = useThemeContext();

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
    <nav className={isScrolled ? "nav__container lg:py-3 lg:bg-cyan-100" : "nav__container lg:shadow-none lg:py-8 lg:bg-transparent dark:lg:bg-transparent"}>
      <div className="container mx-auto flex flex-row justify-between">
        <div className="flex md:flex lg:hidden">
          {/* Hamburger Menu */}
          <button
            onClick={() => {
              setIsClicked(!isClicked);
              console.log(isClicked);
            }}
          >
            {isClicked ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 my-auto mx-4 md:mx-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 my-auto mx-4 md:mx-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className="my-auto">
          <Link to="/" className={isScrolled ? "nav__logo text-lg md:text-3xl lg:text-xl" : "nav__logo text-lg md:text-3xl lg:text-3xl"}>
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </Link>
        </div>
        <div className="nav__itemContainer font-playfair font-medium">
          {/* TODO: Turn to Unordered List & List Items for SEO */}
          <Link to="/" className={isScrolled ? "nav__item--main ml-14 text-md" : "nav__item--main text-xl"}>
            Home
          </Link>
          <Link to="/shop" className={isScrolled ? "nav__item--main text-md" : "nav__item--main text-xl"}>
            Shop
          </Link>
          <Link to="/about" className={isScrolled ? "nav__item--main text-md" : "nav__item--main text-xl"}>
            About
          </Link>
          <Link to="/contact" className={isScrolled ? "nav__item--main text-md" : "nav__item--main text-xl"}>
            Contact
          </Link>
        </div>
        <div className="nav__itemContainer lg:mr-8 2xl:mr-0">
          {colorTheme === "light" ? (
            <span onClick={() => setTheme(colorTheme)}>
              <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "nav__item--secondary h-4 w-4" : "nav__item--secondary h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          ) : (
            <span onClick={() => setTheme(colorTheme)}>
              <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "nav__item--secondary h-4 w-4" : "nav__item--secondary h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          )}
          <Link to="/shop">
            <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "nav__item--secondary h-4 w-4" : "nav__item--secondary h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
          <Link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "nav__item--secondary h-4 w-4" : "nav__item--secondary h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          {/* Shopping Bag */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 my-auto mx-4 md:mx-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      </div>
      <div
        className={
          isClicked
            ? "bg-cyan-100 w-full transition-all duration-700 ease-out lg:hidden opacity-100 absolute top-[3.7rem] md:top-[4.1rem] shadow-lg -z-10 border-t-2 border-t-cyan-200"
            : "bg-cyan-100 w-full absolute transition-all duration-100 ease-in-out opacity-0 -top-[49rem] -z-10"
        }
      >
        <ul className="font-lato text-sm md:text-base text-gray-600" onClick={() => setIsClicked(false)}>
          <Link to="/" className="block px-5 py-2 mt-4 mb-2 md:px-10">
            Home
          </Link>
          <Link to="/shop" className="block px-5 py-2 mb-2 md:px-10">
            Shop
          </Link>
          <Link to="/about" className="block px-5 py-2 mb-2 md:px-10">
            About
          </Link>
          <Link to="/contact" className="block px-5 py-2 mb-4 md:px-10">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
