import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../firebase/utils";

import data from "../test/data";

const SignIn = () => {
  // State handler for index and assigning data to products.
  const [products, setProducts] = useState(data);
  const [index, setIndex] = useState(0);

  // UseEffect hook that solves the slider's caveat.
  useEffect(() => {
    const lastIndex = products.length - 1;
    // Set index to the last index if it is less than 0.
    if (index < 0) {
      setIndex(lastIndex);
    }
    // Set index to 0 if it is on the last index.
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // UseEffect hook that slides the image every 4 seconds.
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [index]);

  // Form submit will not refresh the page.
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative mt-12 bg-white w-5/6 m-auto drop-shadow-xl">
      <div className="grid grid-cols-2">
        {/* Left Side Grid */}
        <div className="bg-sky-100 flex flex-row justify-center items-center overflow-hidden">
          {/* Map the products from the data source. Giving each product an index.*/}
          {products.map((product, productIndex) => {
            // Deconstructing product name and its thumbnail from the product array.
            const { productName, productThumbnail } = product;
            let position = "slider__img--nextSlide";
            if (productIndex === index) {
              position = "slider__img--activeSlide";
            }
            if (productIndex === index - 1 || (index === 0 && productIndex === products.length - 1)) {
              position = "slider__img--lastSlide";
            }
            // For each product, return a div.
            return (
              <div className={position + " absolute"} key={productName}>
                <img src={productThumbnail} alt={productName} className="object-cover h-[40.4rem] w-full" width="650px" />
              </div>
            );
          })}
        </div>
        {/* Right Side Grid */}
        <div className="mx-auto text-center my-16">
          <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Be a part of our story. Be a part of the brand.</p>
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
              <button onClick={signInWithGoogle} className="w-full flex items-center justify-center px-8 py-3 outline outline-2 outline-sky-300 text-base font-medium shadow-md text-sky-300 bg-tranparent transition duration-300 hover:bg-sky-200 hover:text-white hover:shadow-2xl md:mb-4 md:py-3 md:text-lg md:px-10 focus:ring-2 focus:ring-offset-4 focus:ring-sky-200 active:bg-sky-600">
                <FcGoogle className="mr-4 my-auto" />
                Sign in with Google
              </button>
              <p className="block font-playfair font-normal text-sm text-gray-400 mb-4">
                Don't have an account?
                <a href="#" className="ml-2 text-sky-300 transition hover:text-sky-500 hover:drop-shadow-sm active:text-sky-600">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
