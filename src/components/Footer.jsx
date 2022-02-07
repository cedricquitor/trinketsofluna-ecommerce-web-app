import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-100 pt-12 pb-8 lg:pt-20 lg:pb-4 mt-12 dark:bg-gray-700 transition duration-500">
      <div className="container mx-auto flex flex-col">
        {/* Top Part */}
        <div className="mb-8 flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/4 text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
            <Link to="/" className="text-3xl md:text-4xl lg:text-2xl font-playfair text-gray-600 dark:text-zinc-100">
              <span className="text-sky-700 dark:text-sky-500">Trinkets</span> of Luna
            </Link>
            <p className="my-4 hidden lg:block">
              123 Address Street
              <br />
              City, Metro Manila
              <br />
              Philippines{" "}
            </p>
            <p className="hidden lg:block">
              <strong className="font-medium mr-1">Phone:</strong>+63912 345 6789
            </p>
            <p className="hidden lg:block">
              <strong className="font-medium mr-1">Email:</strong>info@trinketsofluna.com
            </p>
          </div>
          <div className="lg:w-3/5 flex flex-col lg:flex-row justify-end mt-6 lg:mt-0">
            <div className="mx-auto lg:mx-12 mt-2 lg:mt-0">
              <h4 className="lg:mb-2 text-lg md:text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100 text-center lg:text-left">Brand</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400 flex lg:block">
                <li className="mr-4 lg:mr-0">About</li>
                <li>Contact</li>
                <li className="ml-4 lg:ml-0">Store</li>
              </ul>
            </div>
            <div className="mx-auto lg:mx-12 mt-2 lg:mt-0">
              <h4 className="lg:mb-2 text-lg md:text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100 text-center lg:text-left">Products</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400 flex lg:block">
                <li className="mr-4 lg:mr-0">Collections</li>
                <li>Shop</li>
                <li className="ml-4 lg:ml-0">Shopee Link</li>
              </ul>
            </div>
            <div className="mx-auto lg:mx-0 lg:ml-12 mt-2 lg:mt-0">
              <h4 className="lg:mb-2 text-lg md:text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100 text-center lg:text-left">Support</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400 flex lg:block">
                <li className="mr-4 lg:mr-0">Help Center</li>
                <li>Terms of Service</li>
                <li className="ml-4 lg:ml-0">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="flex flex-col lg:flex-row justify-between lg:mt-8">
          <div className="mx-auto mb-2 lg:mb-0 lg:mx-0">
            <h1 className="font-semibold text-sm text-gray-500 dark:text-gray-400">Copyright 2021 Trinkets of Luna. All rights reserved.</h1>
          </div>
          <div className="flex my-auto mx-auto lg:mx-0">
            <a href="https://shopee.ph/trinketsofluna/" target="_new">
              <AiFillShopping className="h-7 w-7 mr-1 p-1 my-auto border-2 border-gray-500 rounded-full text-gray-500 transition duration-300 hover:text-[#FF6600] hover:border-[#FF6600] dark:text-gray-400 dark:hover:text-[#FF6600]" />
            </a>
            <a href="https://www.facebook.com/trinketsofluna/" target="_new">
              <FaFacebookSquare className="h-7 w-7 mx-1 p-1 my-auto border-2 border-gray-500 rounded-full text-gray-500 transition duration-300 hover:text-[#3b5998] hover:border-[#3b5998] dark:text-gray-400 dark:hover:text-[#3b5998]" />
            </a>
            <a href="https://www.instagram.com/trinketsofluna/" target="_new">
              <AiFillInstagram className="h-7 w-7 ml-1 p-1 my-auto border-2 border-gray-500 rounded-full text-gray-500 transition duration-300 hover:text-[#833AB4] hover:border-[#833AB4] dark:text-gray-400 dark:hover:text-[#833AB4]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
