import React from "react";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useThemeContext } from "../context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const { theme } = useThemeContext();

  const addProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: "Another",
        address: "123 Another Test",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

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
      console.log(getProductsResult);
    } catch (error) {
      console.log(error);
    }
  };

  const testToast = () => {
    toast.success("This is a test toast!");
    console.log(theme);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-8xl text-gray-900 font-playfair mb-56">Add Products</h1>
        <button onClick={addProduct} className="btn--primary w-1/4 mx-auto">
          Add Product
        </button>
        <button onClick={getProducts} className="btn--primary w-1/4 mx-auto">
          Get Products
        </button>
        <button onClick={testToast} className="btn--primary w-1/4 mx-auto">
          Test Toast
        </button>
        <ToastContainer position="bottom-center" theme={theme} />
      </div>
    </>
  );
};

export default AddProducts;
