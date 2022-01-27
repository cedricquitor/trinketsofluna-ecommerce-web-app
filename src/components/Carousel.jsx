import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare, BsCartPlus } from "react-icons/bs";
import data from "../test/data";

const Carousel = (props) => {
  const [products, setProducts] = useState(data);
  const slides = products;
  const featuredSlide = slides.filter((slide) => slide.productFeatured);

  const slideLeft = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft -= 450;
  };

  const slideRight = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft += 450;
  };

  return (
    <div className="container my-16">
      <h1>Hello</h1>
      <div className="flex justify-center items-center">
        <div className="relative w-full h-full flex items-center">
          {/* Left Arrow */}
          <BsArrowLeftSquare onClick={slideLeft} className="h-12 w-12 absolute left-0 text-sky-200 shadow-sm transition cursor-pointer opacity-40 hover:opacity-100 hidden md:block" />
          {/* Slider Content */}
          <div id="scroll" className="slider__slides w-11/12 h-full whitespace-nowrap overflow-x-scroll mx-auto scrollbar scroll-smooth">
            {featuredSlide.map((slide, slideIndex) => {
              const { productName, productPrice, productThumbnail } = slide;
              // TODO: Add key
              return (
                <div key={productName} className="relative bg-white inline-block mx-4 shadow-md">
                  <img src={productThumbnail} alt={productName} className="w-[20rem] h-[24rem] object-cover" />
                  <div className="mx-4 my-4">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-playfair font-medium text-gray-900">{productName}</h2>
                      <h2 className="bg-gray-100 px-4 text-sm my-auto rounded-2xl text-gray-400 cursor-pointer transition duration-300 hover:bg-gray-300 active:bg-gray-400 active:text-gray-500">necklace</h2>
                    </div>
                    <h1 className="text-2xl font-lato font-bold text-gray-900">&#8369;{productPrice}</h1>
                    <div className="flex justify-between mt-4">
                      <BsCartPlus className="h-[1.6rem] w-[1.6rem] text-sky-300 my-auto cursor-pointer transition duration-300 hover:text-sky-500 active:text-sky-600" />
                      <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium shadow-md transition duration-300 hover:shadow-2xl text-white bg-sky-300 hover:bg-sky-500 md:py-2 md:text-lg md:px-8 focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 active:bg-sky-600">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right Arrow */}
          <BsArrowRightSquare onClick={slideRight} className="h-12 w-12 absolute right-0 text-sky-200 shadow-sm transition cursor-pointer opacity-50 hover:opacity-100 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
