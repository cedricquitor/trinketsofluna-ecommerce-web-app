import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useThemeContext } from "../context/ThemeContext";
import { ToastContainer } from "react-toastify";

const Registration = () => {
  // State handler for index and assigning data to products.
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const featuredProducts = products.filter((product) => product.productFeatured);

  // Getting form input values using UseRef.
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { theme } = useThemeContext();
  const { registerUserWithEmail } = useAuthContext();

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
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name && email && password) {
      registerUserWithEmail(name, email, password);
    }
  };

  return (
    <section className="container mx-auto relative mt-12 overflow-hidden">
      <div className="bg-white lg-1/3 xl:w-5/6 2xl:h-[40.2rem] m-auto drop-shadow-xl">
        <div className="flex lg:flex-row flex-col h-full">
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
                  <img src={productThumbnail} alt={productName} className="object-cover lg:h-[48rem] lg:w-[34rem] 2xl:h-[40.4rem] 2xl:w-[41rem]" width="650px" />
                </div>
              );
            })}
          </div>
          {/* Right Side Grid */}
          <div className="mx-auto text-center my-8 basis-1/2 z-10">
            <div className="mx-24">
              <div className="flex mb-8 justify-center items-center">
                <Link to="/login" className="mx-4 font-medium font-playfair text-xl cursor-pointer transition duration-300 text-gray-400 hover:text-sky-400 active:text-sky-600">
                  Login
                </Link>
                <Link to="/signup" className="mx-4 font-medium font-playfair text-xl cursor-pointer text-sky-400 transition duration-300 active:text-sky-600">
                  Sign Up
                </Link>
              </div>
              <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Be a part of our story. Be a part of the brand.</p>
              <h1 className="text-5xl text-gray-900 font-playfair mb-8">
                <span className="text-sky-300">Trinkets</span> of Luna
              </h1>
              <div className="relative">
                <form onSubmit={handleSubmit} className="mx-4">
                  <p className="font-playfair font-medium text-base text-left text-gray-900 mb-2">Join using your email</p>
                  <div className="">
                    <input type="text" id="name" placeholder="Name" ref={nameRef} className="input__text peer" />
                    <label htmlFor="name" className="input__label top-6 peer-placeholder-shown:top-[2.6rem] peer-focus:top-6">
                      Name
                    </label>
                  </div>
                  <div>
                    <input type="email" id="email" placeholder="Email Address" ref={emailRef} className="input__text peer" />
                    <label htmlFor="email" className="input__label top-[5.5rem] peer-placeholder-shown:top-[6.6rem] peer-focus:top-[5.5rem]">
                      Email Address
                    </label>
                  </div>
                  <div className="mb-10">
                    <input type="password" id="password" placeholder="Password" ref={passwordRef} className="input__text peer" />
                    <label htmlFor="password" className="input__label top-[9.5rem] peer-placeholder-shown:top-[10.6rem] peer-focus:top-[9.5rem]">
                      Password
                    </label>
                  </div>
                  <button onClick={() => handleSubmit()} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium shadow-md transition duration-300 hover:shadow-2xl text-white bg-sky-300 hover:bg-sky-500 md:mb-8 md:py-3 md:mx-auto md:text-lg md:w-2/3 focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 active:bg-sky-600">
                    Create your account
                  </button>
                  <p className="block font-playfair font-normal text-sm text-gray-400 mb-4">
                    Already have an account?
                    <Link to="/login" className="ml-2 text-sky-300 transition hover:text-sky-500 hover:drop-shadow-sm active:text-sky-600">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme={theme} />
    </section>
  );
};

export default Registration;
