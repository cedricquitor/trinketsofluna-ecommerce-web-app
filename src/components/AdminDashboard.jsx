import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // Fetching Products from Firebase
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
      console.log(getProductsResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-12 mx-auto container">
        <div className="pb-14 text-center border-b-[1px] border-gray-500 dark:border-gray-400">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Admin Panel</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
