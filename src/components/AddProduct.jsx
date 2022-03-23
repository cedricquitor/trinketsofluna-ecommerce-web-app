import React, { useState, useEffect, useRef } from "react";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    console.log(e);
  };

  const productNameRef = useRef();
  const productCategoryRef = useRef();
  const productPriceRef = useRef();
  const productThumbnailRef = useRef();

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Add Product</h1>
        </div>
        <div className="relative px-10">
          <form onSubmit={handleSubmit} className="mx-4">
            <div>
              <input type="text" id="productName" placeholder="Product Name" ref={productNameRef} className="input__text peer" />
              <label htmlFor="productName" className="input__label left-[4.7rem] -top-[0.6rem] peer-placeholder-shown:top-[0.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:-top-[0.6rem] peer-focus:left-[4.7rem]">
                Product Name
              </label>
            </div>
            <div>
              <input type="text" id="productCategory" placeholder="Product Category" ref={productCategoryRef} className="input__text peer" />
              <label htmlFor="productCategory" className="input__label left-[4.7rem] top-[3.6rem] peer-placeholder-shown:top-[4.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[3.6rem] peer-focus:left-[4.7rem]">
                Product Category
              </label>
            </div>
            <div>
              <input type="text" id="productPrice" placeholder="Product Price" ref={productPriceRef} className="input__text peer" />
              <label htmlFor="productPrice" className="input__label left-[4.7rem] top-[7.6rem] peer-placeholder-shown:top-[8.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[7.6rem] peer-focus:left-[4.7rem]">
                Product Price
              </label>
            </div>
            <div>
              <input type="text" id="productThumbnail" placeholder="Product Thumbnail" ref={productThumbnailRef} className="input__text peer" />
              <label htmlFor="productThumbnail" className="input__label left-[4.7rem] top-[11.6rem] peer-placeholder-shown:top-[12.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[11.6rem] peer-focus:left-[4.7rem]">
                Product Thumbnail
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
