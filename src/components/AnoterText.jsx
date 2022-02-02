import React from "react";
import { signInWithGoogle } from "../firebase/utils";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// Form submit will not refresh the page.
const handleSubmit = async (e) => {
  e.preventDefault();
};

const AnoterText = () => {
  return (
    <div className="mx-24">
      <div className="flex mb-8 justify-center items-center">
        <Link to="/login" className="mx-4 font-medium font-playfair text-xl cursor-pointer text-sky-400 transition duration-300 active:text-sky-600">
          Login
        </Link>
        <Link to="/signup" className="mx-4 font-medium font-playfair text-xl cursor-pointer transition duration-300 text-gray-400 hover:text-sky-400 active:text-sky-600">
          Sign Up
        </Link>
      </div>
      {/* TODO: Fill the placeholder here. */}
      <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Lorem ipsum. Just a placeholder.</p>
      <h1 className="text-5xl text-gray-900 font-playfair mb-8">
        <span className="text-sky-300">Trinkets</span> of Luna
      </h1>
      <div className="relative">
        <form onSubmit={handleSubmit} className="mx-4">
          <p className="font-playfair font-medium text-base text-left text-gray-900 mb-2">Login with email</p>
          <div>
            <input type="text" id="email" className="input__text peer" placeholder="Email Address" />
            <label htmlFor="email" className="input__label top-6 peer-placeholder-shown:top-[2.6rem] peer-focus:top-6">
              Email Address
            </label>
          </div>
          <div>
            <input type="password" id="password" className="input__text peer" placeholder="Password" />
            <label htmlFor="password" className="input__label top-[5.5rem] peer-placeholder-shown:top-[6.6rem] peer-focus:top-[5.5rem]">
              Password
            </label>
          </div>
          <a href="#" className="block mb-4 py-auto font-playfair font-normal text-sm text-gray-400 text-left transition hover:text-gray-600 active:text-gray-900">
            Forgot your password?
          </a>
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium shadow-md transition duration-300 hover:shadow-2xl text-white bg-sky-300 hover:bg-sky-500 md:mb-8 md:py-3 md:mx-auto md:text-lg md:w-2/3 focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 active:bg-sky-600">
            Login
          </a>
          <p className="font-playfair text-base font-medium text-left mb-2">Connect with Socials</p>
          <button onClick={signInWithGoogle} className="w-[99%] mx-auto flex items-center justify-center px-8 py-3 outline outline-2 outline-sky-300 text-base font-medium shadow-md text-sky-300 bg-tranparent transition duration-300 hover:bg-sky-200 hover:text-white hover:shadow-2xl md:mb-4 md:py-3 md:text-lg md:px-10 focus:ring-2 focus:ring-offset-4 focus:ring-sky-200 active:bg-sky-600">
            <FcGoogle className="mr-4 my-auto" />
            Sign in with Google
          </button>
          <p className="block font-playfair font-normal text-sm text-gray-400 mb-4">
            Don't have an account?
            <Link to="/signup" className="ml-2 text-sky-300 transition hover:text-sky-500 hover:drop-shadow-sm active:text-sky-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AnoterText;
