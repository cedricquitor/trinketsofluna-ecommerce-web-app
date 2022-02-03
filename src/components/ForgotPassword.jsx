import React from "react";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-2/3 md:w-1/2 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg">
        <div className="mx-16 mb-8">
          <BiLock className="h-32 w-32 mb-2 mx-auto text-sky-300" />
          <h1 className="mb-2 font-playfair text-gray-900 text-3xl text-center">Trouble logging in?</h1>
          <p className="font-lato text-gray-400 text-xl text-center">Enter your email and we'll send you a link to get back into your account.</p>
        </div>
        <div className="w-5/6 mx-auto">
          <input type="text" id="email" className="h-14 w-full mb-6 px-4 text-xl border-2 border-sky-200 transition placeholder:italic focus:outline-none focus:border-sky-400 hover:border-sky-300" placeholder="Enter your email" />
        </div>
        <div>
          <button className="btn--primary w-2/4 mx-auto mb-3">Reset Password</button>
          <p className="text-center text-sm font-lato text-gray-400 mb-8">
            or{" "}
            <Link to="/signup" className="font-semibold mx-1 cursor-pointer transition duration-300 hover:text-gray-600 active:text-gray-900">
              Create a New Account
            </Link>
            instead
          </p>
          <p className="text-center text-sm font-lato text-gray-400">
            Return to{" "}
            <Link to="/login" className="font-semibold ml-1 cursor-pointer transition duration-300 text-sky-300 hover:text-sky-500 active-text-sky-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
