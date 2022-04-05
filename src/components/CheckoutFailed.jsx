import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CheckoutFailed = () => {
  return (
    <section className="mt-36 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <RiErrorWarningFill className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
          <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </h1>
          <h1 className="mb-4 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Order Placement Failed</h1>
          <p className="mb-4 font-lato text-gray-500 text-lg text-center md:text-xl dark:text-gray-400">Something went wrong while placing your order. Please return to your cart and try placing an order again.</p>
          <p className="font-lato text-xs text-center text-gray-500 dark:text-gray-400">The payment gateway only allows 5 minutes to complete your payment. The transaction will fail after the allocated time.</p>
        </div>
        <div className="flex">
          <Link to="/cart" className="btn--secondary my-auto mx-auto py-3">
            Back to Cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFailed;
