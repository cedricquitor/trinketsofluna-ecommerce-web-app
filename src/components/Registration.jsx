import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

// Contexts
import { useAuthContext } from "../context/AuthContext";

// Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Registration = () => {
  // State handler for index and assigning data to products.
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const featuredProducts = products.filter((product) => product.productFeatured);

  // Getting form input values using UseRef.
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { registerUserWithEmail } = useAuthContext();
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
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name && email && password) {
      registerUserWithEmail(name, email, password);
      navigate("/login", { replace: true });
    }
  };

  return (
    <section className="container mx-auto relative mt-12 overflow-hidden">
      <div className="bg-white w-11/12 md:w-5/6 xl:w-5/6 2xl:h-[40.2rem] m-auto drop-shadow-xl dark:bg-gray-700">
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
            <div className="mx-8 md:mx-24 lg:mx-12 2xl:mx-24">
              <div className="flex mb-8 justify-center items-center">
                <Link to="/login" className="mx-4 font-medium font-playfair text-xl cursor-pointer transition duration-300 text-gray-500 hover:text-sky-400 active:text-sky-600 dark:text-gray-400 dark:hover:text-sky-500 dark:active:text-sky-600">
                  Login
                </Link>
                <Link to="/signup" className="mx-4 font-medium font-playfair text-xl cursor-pointer text-sky-400 transition duration-300 active:text-sky-600">
                  Sign Up
                </Link>
              </div>
              <p className="text-gray-500 text-xs md:text-sm lg:text-xs 2xl:text-sm font-lato uppercase tracking-widest dark:text-gray-400">Be a part of our story. Be a part of the brand.</p>
              <h1 className="text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl text-gray-900 font-playfair mb-8 dark:text-zinc-100">
                <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
              </h1>
              <div className="relative">
                <form onSubmit={handleSubmit} className="mx-4">
                  <p className="font-playfair font-medium text-base text-left text-gray-900 mb-2 dark:text-zinc-100">Join using your email</p>
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
                    <span onClick={() => setPasswordIsHidden(!passwordIsHidden)} className="absolute mt-3 right-8 cursor-pointer">
                      {passwordIsHidden ? <AiOutlineEye className="h-6 w-6 text-sky-200 dark:text-sky-800 cursor-pointer" /> : <AiOutlineEyeInvisible className="h-6 w-6 text-sky-300 dark:text-sky-800" />}
                    </span>
                    <input type={passwordIsHidden ? "password" : "text"} id="password" placeholder="Password" ref={passwordRef} className="input__text peer" />
                    <label htmlFor="password" className="input__label top-[9.5rem] peer-placeholder-shown:top-[10.6rem] peer-focus:top-[9.5rem]">
                      Password
                    </label>
                  </div>
                  <button onClick={handleSubmit} className="btn--primary py-3 w-full mx-auto md:w-2/3">
                    Create your account
                  </button>
                  <p className="block font-playfair font-normal text-sm text-gray-500 mb-4 mt-4 dark:text-gray-400">
                    Already have an account?
                    <Link to="/login" className="ml-2 text-sky-300 transition hover:text-sky-500 hover:drop-shadow-sm active:text-sky-600 dark:text-sky-500 dark:hover:text-sky-600">
                      Login
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

export default Registration;
