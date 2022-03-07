import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/AuthContext";

const SignIn = () => {
  // State handler for index and assigning data to products.
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const featuredProducts = products.filter((product) => product.productFeatured);

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInUserWithEmail, signInUserWithGoogle } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const getProductsQuery = await getDocs(collection(db, "products"));
      const getProductsResult = [];
      getProductsQuery.forEach((doc) => {
        const object = {
          id: doc.id,
          ...doc.data(),
        };
        getProductsResult.push(object);
      });
      // TODO: Remove the clg when deploying to production.
      setProducts(getProductsResult);
    } catch (error) {
      console.log(error);
    }
  };

  // UseEffect hook that solves the slider's caveat.
  useEffect(() => {
    const lastIndex = featuredProducts.length - 1;
    // Set index to the last index if it is less than 0.
    if (index < 0) {
      setIndex(lastIndex);
    }
    // Set index to 0 if it is on the last index.
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [featuredProducts.length, index]);

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
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      signInUserWithEmail(email, password);
      navigate("/account", { replace: true });
    }
  };

  const handleSignInWithGoogle = async () => {
    const signIn = await signInUserWithGoogle();
    navigate("/account", { replace: true });
  };

  return (
    <section className="container mx-auto relative mt-12 overflow-hidden">
      <div className="bg-white w-11/12 md:w-5/6 xl:w-5/6 2xl:h-[40.2rem] m-auto drop-shadow-xl dark:bg-gray-700">
        <div className="flex lg:flex-row flex-col">
          {/* Left Side Grid */}
          <div className="bg-sky-100 hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:overflow-hidden lg:basis-1/2">
            {/* Map the products from the data source. Giving each product an index.*/}
            {featuredProducts.map((product, productIndex) => {
              // Deconstructing product name and its thumbnail from the product array.
              const { id, productName, productThumbnail } = product;
              let position = "slider__img--nextSlide";
              if (productIndex === index) {
                position = "slider__img--activeSlide";
              }
              if (productIndex === index - 1 || (index === 0 && productIndex === featuredProducts.length - 1)) {
                position = "slider__img--lastSlide";
              }
              // For each product, return a div.
              return (
                <div className={position + " absolute"} key={id}>
                  <img src={productThumbnail} alt={productName} className="object-cover lg:h-[48rem] lg:w-[34rem] 2xl:h-[40.4rem] 2xl:w-[40rem]" width="650px" />
                </div>
              );
            })}
          </div>
          {/* Right Side Grid */}
          <div className="mx-auto text-center my-8 basis-1/2 z-10">
            <div className="mx-8 md:mx-24 lg:mx-12 2xl:mx-24">
              <div className="flex mb-8 justify-center items-center">
                <Link to="/login" className="mx-4 font-medium font-playfair text-xl cursor-pointer text-sky-400 transition duration-300 active:text-sky-600">
                  Login
                </Link>
                <Link to="/signup" className="mx-4 font-medium font-playfair text-xl cursor-pointer transition duration-300 text-gray-500 hover:text-sky-400 active:text-sky-600 dark:text-gray-400 dark:hover:text-sky-500 dark:active:text-sky-600">
                  Sign Up
                </Link>
              </div>
              {/* TODO: Fill the placeholder here. */}
              <p className="text-gray-500 text-xs md:text-sm lg:text-xs 2xl:text-sm font-lato uppercase tracking-widest dark:text-gray-400">Lorem ipsum. Just a placeholder.</p>
              <h1 className="text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl text-gray-900 font-playfair mb-8 dark:text-zinc-100">
                <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
              </h1>
              <div className="relative">
                <form onSubmit={handleSubmit} className="mx-4">
                  <p className="font-playfair font-medium text-base text-left text-gray-900 mb-2 dark:text-zinc-100">Login with email</p>
                  <div>
                    <input type="text" id="email" placeholder="Email Address" ref={emailRef} className="input__text peer" />
                    <label htmlFor="email" className="input__label top-6 peer-placeholder-shown:top-[2.6rem] peer-focus:top-6">
                      Email Address
                    </label>
                  </div>
                  <div>
                    <input type="password" id="password" placeholder="Password" ref={passwordRef} className="input__text peer" />
                    <label htmlFor="password" className="input__label top-[5.5rem] peer-placeholder-shown:top-[6.6rem] peer-focus:top-[5.5rem]">
                      Password
                    </label>
                  </div>
                  <Link
                    to="/recovery"
                    className="block mb-6 md:mb-4 py-auto font-playfair font-normal text-sm text-gray-500 text-left transition hover:text-gray-700 active:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500 dark:active:text-gray-600"
                  >
                    Forgot your password?
                  </Link>
                  <button onClick={handleSubmit} className="btn--primary py-3 w-full mx-auto md:w-2/3 md:mb-8">
                    Login
                  </button>
                  <p className="font-playfair text-base font-medium text-left text-gray-900 mt-6 md:mt-0 mb-2 dark:text-zinc-100">Connect with Socials</p>
                  <button
                    onClick={() => handleSignInWithGoogle()}
                    className="w-[99%] mx-auto flex items-center justify-center px-8 py-3 outline outline-2 outline-sky-300 text-base font-medium shadow-md text-sky-300 bg-tranparent transition duration-300 hover:bg-sky-200 hover:text-white hover:shadow-2xl md:mb-4 md:py-3 md:text-lg md:px-10 focus:ring-2 focus:ring-offset-4 focus:ring-sky-200 active:bg-sky-600 dark:outline-sky-500 dark:hover:bg-sky-400 dark:active:bg-sky-700"
                  >
                    <FcGoogle className="mr-4 my-auto" />
                    Sign in with Google
                  </button>
                  <p className="block font-playfair font-normal text-sm text-gray-500 mt-4 mb-2 md:mt-0 md:mb-4 dark:text-gray-400">
                    Don't have an account?
                    <Link to="/signup" className="ml-2 text-sky-300 transition hover:text-sky-500 hover:drop-shadow-sm active:text-sky-600 dark:text-sky-500 dark:hover:text-sky-600">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
