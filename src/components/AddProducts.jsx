import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useThemeContext } from "../context/ThemeContext";
import { toast } from "react-toastify";
import PaymongoClient from "paymongo.js";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const [data, setData] = useState([]);
  const { theme } = useThemeContext();

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  const testCreateSource = async () => {
    const createResponse = await client.source.create({
      type: "gcash", // gcash | grab_pay
      currency: "PHP",
      amount: 10000,
      redirect: {
        success: "https://trinketsofluna-ecommerce-fbase.firebaseapp.com/success",
        failed: "https://trinketsofluna-ecommerce-fbase.firebaseapp.com/error",
      },
    });
    setData(createResponse);
    console.log(createResponse);
    console.log(createResponse.data.attributes.redirect.checkout_url);
  };

  const testCreateSourceManual = () => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic cGtfdGVzdF9RODJieUxGcGpzVnU1TTJKZ0JvbjRHVXA6",
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: 10000,
            redirect: {
              success: "https://trinketsofluna-ecommerce-fbase.firebaseapp.com/success",
              failed: "https://trinketsofluna-ecommerce-fbase.firebaseapp.com/failed",
            },
            billing: {
              address: { line1: "Line 1", postal_code: "Postal Code", city: "City" },
              name: "Name",
              phone: "Phone",
              email: "emailaddress@gmail.com",
            },
            type: "gcash",
            currency: "PHP",
          },
        },
      }),
    };

    fetch("https://api.paymongo.com/v1/sources", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const client = PaymongoClient("sk_test_u5J2nkk6Q3jvZL3gJEkCffEM");

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

        <button onClick={() => testCreateSourceManual()} className="btn--primary w-1/4 mx-auto">
          Checkout
        </button>
      </div>
    </>
  );
};

export default AddProducts;
