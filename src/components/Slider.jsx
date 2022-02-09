import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { BsArrowLeftSquare, BsArrowRightSquare, BsCartPlus } from "react-icons/bs";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const featuredSlide = slides.filter((slide) => slide.productFeatured);

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
      setSlides(getProductsResult);
    } catch (error) {
      console.log(error);
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft -= 450;
  };

  const slideRight = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft += 450;
  };

  return (
    <section className="container mt-36 mx-auto">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-xs md:text-sm font-lato uppercase tracking-widest dark:text-gray-400">Gorgeous jewelry, exquisitely crafted.</p>
        <h1 className="text-5xl md:text-8xl text-gray-900 font-playfair font-extrabold tracking-tight dark:text-zinc-100">Our Favorites</h1>
      </div>
      <div className="flex justify-between font-medium font-playfair text-2xl text-gray-900 mx-8 md:mx-12 lg:mx-16 2xl:mx-20 my-4 dark:text-zinc-100">
        <h2 className="hidden md:flex">Featured Products</h2>
        <Link to="/shop" className="flex cursor-pointer transition duration-300 hover:text-cyan-400 active:text-cyan-600 dark:text-zinc-100 dark:hover:text-cyan-400 dark:active:text-cyan-600">
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full h-full flex items-center">
          {/* Left Arrow */}
          <BsArrowLeftSquare onClick={slideLeft} className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 ml-2 z-10 absolute left-0 text-sky-200 shadow-sm transition cursor-pointer opacity-40 hover:opacity-100 hidden md:block dark:text-gray-700" />
          {/* Slider Content */}
          <div id="scroll" className="slider__slides w-11/12 h-full whitespace-nowrap overflow-x-scroll mx-auto scrollbar scroll-smooth">
            {featuredSlide.map((slide, slideIndex) => {
              const { id, productCategory, productName, productPrice, productThumbnail } = slide;
              return (
                <div key={id} className="relative bg-white inline-block mx-4 shadow-md dark:bg-gray-800">
                  <img src={productThumbnail} alt={productName} className="w-[20rem] h-[24rem] object-cover" />
                  <div className="mx-4 my-4">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-playfair font-medium text-gray-900 dark:text-zinc-100">{productName}</h2>
                      <h2 className="bg-gray-100 px-4 text-sm my-auto rounded-2xl text-gray-400 cursor-pointer transition duration-300 hover:bg-gray-300 active:bg-gray-400 active:text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                        {productCategory}
                      </h2>
                    </div>
                    <h1 className="text-2xl font-lato font-bold text-gray-900 dark:text-zinc-100">&#8369;{productPrice}</h1>
                    <div className="flex justify-between mt-4">
                      <BsCartPlus className="h-[1.6rem] w-[1.6rem] text-sky-300 my-auto cursor-pointer transition duration-300 hover:text-sky-500 active:text-sky-600 dark:text-sky-500" />
                      <a href="#" className="btn--primary md:py-2 md:px-8 focus:ring-2">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right Arrow */}
          <BsArrowRightSquare onClick={slideRight} className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 mr-2 z-10 absolute right-0 text-sky-200 shadow-sm transition cursor-pointer opacity-50 hover:opacity-100 hidden md:block dark:text-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
