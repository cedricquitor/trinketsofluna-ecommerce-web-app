import React, { useState, useEffect, useRef } from "react";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
  };

  const [isFeatured, setIsFeatured] = useState(true);

  const handleRadioChange = () => {
    if (isFeatured === true) {
      setIsFeatured(false);
    } else if (isFeatured === false) {
      setIsFeatured(true);
    }
  };

  useEffect(() => {
    console.log(isFeatured);
  }, [isFeatured]);

  const productNameRef = useRef();
  const productCategoryRef = useRef();
  const productPriceRef = useRef();
  const productThumbnailRef = useRef();

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </h1>
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
            <div className="mt-4">
              <div className="flex flex-col mb-2">
                <p className="font-lato text-gray-900 text-lg -mb-1 dark:text-zinc-100">Is this product featured?</p>
                <span className="font-lato text-xs text-gray-500 dark:text-gray-400">Featured products are shown in sliders and carousels.</span>
              </div>
              <div className="flex">
                <div className="pr-2 w-full">
                  <input className="hidden input__radio" id="radio_1" type="radio" name="radio" onChange={handleRadioChange} defaultChecked />
                  <label className="flex flex-col p-2 border-2 border-gray-500 cursor-pointer transition duration-300 hover:border-sky-200 hover:shadow-md active:border-sky-500 dark:border-gray-400 md:p-3" htmlFor="radio_1">
                    <span className="text-xl font-bold font-playfair mt-2 mx-auto">Yes</span>
                  </label>
                </div>
                <div className="pl-2 w-full">
                  <input className="hidden input__radio" id="radio_2" type="radio" name="radio" onChange={handleRadioChange} />
                  <label className="flex flex-col p-2 border-2 border-gray-500 cursor-pointer transition duration-300 hover:border-sky-200 hover:shadow-md active:border-sky-500 dark:border-gray-400 md:p-3" htmlFor="radio_2">
                    <span className="text-xl font-bold font-playfair mt-2 mx-auto">No</span>
                  </label>
                </div>
              </div>
            </div>
            <button className="btn--primary mt-6 mx-auto">Add Product</button>
          </form>
        </div>
      </div>
      <button onClick={() => console.log(isFeatured)}>Check isFeatured</button>
    </section>
  );
};

export default AddProduct;
