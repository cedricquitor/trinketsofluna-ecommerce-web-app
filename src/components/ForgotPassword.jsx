import React, { useRef } from "react";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import { useThemeContext } from "../context/ThemeContext";

const ForgotPassword = () => {
  const emailRef = useRef();

  const { theme } = useThemeContext();
  const { forgotPassword } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email);
    }
  };

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <BiLock className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
          <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Trouble logging in?</h1>
          <p className="font-lato text-gray-500 text-lg md:text-xl text-center dark:text-gray-400">Enter your email and we'll send you a link to get back into your account.</p>
        </div>
        <div className="w-5/6 mx-auto">
          <input
            type="text"
            id="email"
            ref={emailRef}
            className="h-14 w-full mb-6 px-4 text-lg md:text-xl border-2 border-sky-200 transition placeholder:italic focus:outline-none focus:border-sky-400 hover:border-sky-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="btn--primary md:w-2/4 mx-auto mb-3 py-3">
            Reset Password
          </button>
          <p className="text-center text-sm font-lato text-gray-500 mb-4 md:mb-8 dark:text-gray-400">
            or
            <Link to="/signup" className="font-semibold mx-1 cursor-pointer transition duration-300 hover:text-gray-600 active:text-gray-900 dark:hover:text-gray-600 dark:active:text-gray-800">
              Create a New Account
            </Link>
            instead
          </p>
          <p className="text-center text-sm font-lato text-gray-500 dark:text-gray-400">
            Return to
            <Link to="/login" className="font-semibold ml-1 cursor-pointer transition duration-300 text-sky-300 hover:text-sky-500 active-text-sky-600 dark:text-sky-500 dark:hover:text-sky-600 dark:active:text-sky-700">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer theme={theme} />
    </section>
  );
};

export default ForgotPassword;
