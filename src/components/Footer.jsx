import React from "react";

const Footer = () => {
  return (
    <div className="bg-sky-200 pt-20 pb-4 mt-12">
      <div className="container mx-auto flex flex-col">
        {/* Top Part */}
        <div className="mb-8 flex flex-row justify-between">
          <div className="w-1/4 text-gray-500">
            <h1 className="text-2xl font-playfair text-gray-600">
              <span className="text-sky-700">Trinkets</span> of Luna
            </h1>
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
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium">Brand</h4>
              <ul className="text-gray-500 font-lato leading-loose">
                <li>About</li>
                <li>Contact</li>
                <li>Store</li>
              </ul>
            </div>
            <div className="mx-12">
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium">Products</h4>
              <ul className="text-gray-500 font-lato leading-loose">
                <li>Collections</li>
                <li>Shop</li>
                <li>Shopee Link</li>
              </ul>
            </div>
            <div className="ml-12">
              <h4 className="mb-2 text-xl text-gray-900 font-playfair font-medium">Support</h4>
              <ul className="text-gray-500 font-lato leading-loose">
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
            <h1 className="font-semibold text-sm text-gray-500">Copyright 2021 Trinkets of Luna. All rights reserved.</h1>
          </div>
          <div>
            <h1>Right Side Social Links</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
