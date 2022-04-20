import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [archivedProducts, setArchivedProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null && localStorage.getItem("authUID") !== "d64TMtbWfhNntekeJKF8U2RafcE3") {
      navigate("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    console.log(auth);
    getProducts();
    getArchivedProducts();
  }, []);

  // Fetching Products from Firebase
  const getProducts = async () => {
    try {
      const getProductsQuery = await getDocs(productsCollectionRef);
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
      console.log("Active Products: ", getProductsResult);
    } catch (error) {
      console.log(error);
    }
  };

  const getArchivedProducts = async () => {
    try {
      const getArchivedProductsQuery = await getDocs(collection(db, "archived-products"));
      const getArchivedProductsResult = [];
      getArchivedProductsQuery.forEach((doc) => {
        const object = {
          id: doc.id,
          ...doc.data(),
        };
        getArchivedProductsResult.push(object);
      });
      // TODO: Remove the clg when deploying to production.
      setArchivedProducts(getArchivedProductsResult);
      console.log("Archived Products: ", getArchivedProductsResult);
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
        <div className="flex justify-between mt-4">
          <h1 className="mx-64 my-auto font-medium font-playfair text-xl text-gray-900 dark:text-zinc-100">Active Products</h1>
          <div className="flex mx-64">
            <Link to="orders" className="py-3 btn--primary w-52">
              View Orders
            </Link>
            <Link to="add" className="py-3 btn--primary w-52 ml-4">
              Add Product
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-11/12 xl:w-10/12 2xl:w-2/3 mx-auto mt-4">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-500">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Featured
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-500">
                    {products.map((product) => {
                      const { id, productCategory, productName, productPrice, productThumbnail, productFeatured } = product;
                      return (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={productThumbnail} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-zinc-100">{productName}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500 dark:text-gray-400">{productCategory}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex">
                              <div className="text-sm text-gray-500 dark:text-gray-400">{productPrice}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{productFeatured ? "Featured" : "Not Featured"}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                            <Link to="edit" state={product} className="mr-6 text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Edit Item
                            </Link>
                            <Link to="archive" state={product} className="mr-6 text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Archive Item
                            </Link>
                            <Link to="remove" state={{ ...product, productType: "active" }} className="text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Remove Item
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="mx-64 my-auto font-medium font-playfair text-xl text-gray-900 dark:text-zinc-100">List of Archived Products</h1>
        </div>
        <div className="flex flex-col w-11/12 xl:w-10/12 2xl:w-2/3 mx-auto mt-4">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-500">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Featured
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-500">
                    {archivedProducts.map((archivedProduct) => {
                      const { id, productCategory, productName, productPrice, productThumbnail, productFeatured } = archivedProduct;
                      return (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={productThumbnail} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-zinc-100">{productName}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500 dark:text-gray-400">{productCategory}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex">
                              <div className="text-sm text-gray-500 dark:text-gray-400">{productPrice}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{productFeatured ? "Featured" : "Not Featured"}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                            <Link to="edit" state={archivedProduct} className="mr-6 text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Edit Item
                            </Link>
                            <Link to="activate" state={archivedProduct} className="mr-6 text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Activate Item
                            </Link>
                            <Link to="remove" state={{ ...archivedProduct, productType: "archived" }} className="text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
                              Remove Item
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
