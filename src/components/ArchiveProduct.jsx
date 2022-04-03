import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ArchiveProduct = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const backToAdminPanel = () => {
    navigate("/admin", { replace: true });
  };

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
      console.log(location.state);
      console.log(product);
    }
  }, []);

  const moveToArchive = async () => {
    const productDoc = doc(db, "products", product.id);
    const toArchiveDoc = doc(db, "archived-products", product.id);
    await setDoc(toArchiveDoc, {
      productCategory: product.productCategory,
      productFeatured: product.productFeatured,
      productName: product.productName,
      productPrice: product.productPrice,
      productThumbnail: product.productThumbnail,
    })
      .then(() => {
        deleteDoc(productDoc);
      })
      .then(() => {
        toast.success(`Product with ID of ${product.id} successfully moved to archive!`);
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4">
          <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </h1>
          <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Archive Product</h1>
        </div>
        <div>
          <h1 className="mb-6 font-playfair font-medium text-gray-900 text-base text-center md:text-lg dark:text-zinc-100">Are you sure you want to archive this product?</h1>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="flex-shrink-0 h-16 w-16">
            <img className="h-16 w-16 rounded-full" src={location.state.productThumbnail} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-900 dark:text-zinc-100">{location.state.productName}</div>
            <div className="text-lg text-gray-500 dark:text-gray-400">{location.state.id}</div>
          </div>
        </div>
        <div className="flex">
          <button onClick={() => backToAdminPanel()} className="w-44 btn--secondary mr-4 mx-auto my-auto">
            Back
          </button>
          <button onClick={() => moveToArchive()} className="w-44 btn--primary ml-4 mx-auto px-16">
            Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArchiveProduct;
