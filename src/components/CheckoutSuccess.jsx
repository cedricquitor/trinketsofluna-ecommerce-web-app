import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <>
      {localStorage.getItem("paymongoTemp") ? (
        <section className="mt-36 flex justify-center">
          <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
            <div className="mx-8 md:mx-16 mb-4 md:mb-8">
              <RiCloseCircleFill className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="mb-8 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">My Account</h1>
              <p className="mb-2 font-lato text-gray-500 text-lg md:text-xl dark:text-gray-400">Personal Information</p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Name</p>
              <p className="mb-4 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">user.displayName</p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Email Address</p>
              <p className="font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">user.email</p>
            </div>
            <div className="flex">
              <button className="btn--secondary my-auto mx-auto py-3">Logout</button>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-36 flex justify-center">
          <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
            <div className="mx-8 md:mx-16 mb-4 md:mb-8">
              <RiCloseCircleFill className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
                <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
              </h1>
              <h1 className="mb-4 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">No Recent Transactions</h1>
              <p className="mb-2 font-lato text-gray-500 text-lg text-center md:text-xl dark:text-gray-400">No transactions found. Please return to your cart and proceed to checkout.</p>
            </div>
            <div className="flex">
              <Link to="/cart" className="btn--secondary my-auto mx-auto py-3">
                Back to Cart
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CheckoutSuccess;
