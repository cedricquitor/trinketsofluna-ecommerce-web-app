import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { BsCartPlus } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="mt-12 container mx-auto">
      <div className="text-center">
        <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Choose the one that fits your style.</p>
        <h1 className="font-playfair font-bold text-8xl tracking-tight text-gray-900">Our Jewelries</h1>
      </div>
      <div className="container">
        <div className="py-3 my-8 border-t-[1px] border-b-[1px] border-gray-300 flex flex-row justify-between">
          <div className="flex">
            <h2 className="mr-4 font-lato font-medium text-xl uppercase">Sort by</h2>
            {/* TODO: Add a select drop down for category filtering */}
          </div>
          <div>
            <h2 className="font-lato font-medium text-xl">{`${products.length} Products`}</h2>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mx-auto">
        {products.map((product, productIndex) => {
          const { productCategory, productName, productPrice, productThumbnail } = product;
          return (
            <div key={productName} className="relative bg-white inline-block mx-auto mb-12 shadow-md">
              <img src={productThumbnail} alt={productName} className="w-[18rem] h-[22rem] object-cover" />
              <div className="mx-4 my-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-playfair font-medium text-gray-900">{productName}</h2>
                  <h2 className="bg-gray-100 px-4 text-sm my-auto rounded-2xl text-gray-400 cursor-pointer transition duration-300 hover:bg-gray-300 active:bg-gray-400 active:text-gray-500">{productCategory}</h2>
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
    </div>
  );
};

export default Products;
