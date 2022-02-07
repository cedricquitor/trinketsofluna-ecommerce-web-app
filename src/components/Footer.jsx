import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-100 pt-20 pb-4 mt-12 dark:bg-gray-700 transition duration-500">
      <div className="container mx-auto flex flex-col">
        {/* Top Part */}
        <div className="mb-8 flex flex-row justify-between">
          <div className="w-1/4 text-gray-500 dark:text-gray-400">
            <Link to="/" className="text-2xl font-playfair text-gray-600 dark:text-zinc-100">
              <span className="text-sky-700 dark:text-sky-500">Trinkets</span> of Luna
            </Link>
            <p className="my-4">
              123 Address Street
              <br />
              City, Metro Manila
              <br />
              Philippines{" "}
            </p>
            <p>
              <strong className="font-medium mr-1">Phone:</strong>+63912 345 6789
            </p>
            <p>
              <strong className="font-medium mr-1">Email:</strong>info@trinketsofluna.com
            </p>
          </div>
          <div className="w-3/5 flex flex-row justify-end">
            <div className="mx-12">
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100">Brand</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Store</li>
              </ul>
            </div>
            <div className="mx-12">
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100">Products</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400">
                <li>Collections</li>
                <li>Shop</li>
                <li>Shopee Link</li>
              </ul>
            </div>
            <div className="ml-12">
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium dark:text-zinc-100">Support</h4>
              <ul className="text-gray-500 font-lato leading-loose dark:text-gray-400">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="flex flex-row justify-between mt-8">
          <div>
            <h1 className="font-semibold text-sm text-gray-500 dark:text-gray-400">Copyright 2021 Trinkets of Luna. All rights reserved.</h1>
          </div>
          <div className="flex my-auto">
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
