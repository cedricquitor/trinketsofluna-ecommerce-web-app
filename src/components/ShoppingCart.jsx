import React, { useState, useEffect } from "react";
import data from "../test/data";

// Contexts
import { useCartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const [products, setProducts] = useState(data);
  const { cartItems, itemCount, total } = useCartContext();

  useEffect(() => {
    console.log(cartItems);
    console.log(itemCount);
    console.log(total);
  }, []);

  return (
    <div>
      <h1>ShoppingCart</h1>
      <div className="flex flex-col w-11/12 xl:w-10/12 2xl:w-2/3 mx-auto md:mt-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider">
                      Total Price
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.length === 0 ? (
                    <h1>Cart is empty!</h1>
                  ) : (
                    <>
                      {cartItems.map((product) => {
                        const { id, productCategory, productName, productPrice, productThumbnail, productQuantity } = product;
                        return (
                          <tr key={id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img className="h-10 w-10 rounded-full" src={productThumbnail} alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{productName}</div>
                                  <div className="text-sm text-gray-500">{productCategory}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{productPrice}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{productQuantity}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productPrice * productQuantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
