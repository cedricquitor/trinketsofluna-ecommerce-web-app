import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RemoveProduct = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    }
  }, []);

  const testLocation = () => {
    console.log(product);
  };

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </h1>
          <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Remove Product</h1>
        </div>
        <div>
          <h1 className="ml-4 mb-2 font-playfair font-medium text-gray-900 text-base md:text-lg dark:text-zinc-100">Are you sure you want to remove this product?</h1>
        </div>
        <button onClick={() => testLocation()}>Test Location</button>
      </div>
    </section>
  );
};

export default RemoveProduct;
