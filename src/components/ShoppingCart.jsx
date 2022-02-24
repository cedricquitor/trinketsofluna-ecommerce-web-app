import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { removeFromCart } from "../redux/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="container mx-auto md:mt-12">
      <div className="pb-14 text-center border-b-[1px] border-gray-500 dark:border-gray-400">
        <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">Trinket of Luna's Story</p>
        <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Cart</h1>
      </div>
      {cart.cartItems.length === 0 ? (
        <>
          <MdOutlineRemoveShoppingCart className="h-12 w-12 mt-8" />
          <h1>Cart is empty!</h1>
        </>
      ) : (
        <>
          <div className="flex flex-col w-11/12 xl:w-10/12 2xl:w-2/3 mx-auto mt-8">
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
                      {cart.cartItems.map((product) => {
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
                              <div className="flex">
                                <div>Minus</div>
                                <div className="text-sm text-gray-900">{productQuantity}</div>
                                <div>
                                  <button>Plus</button>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productPrice * productQuantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <button onClick={() => handleRemoveFromCart(product)} className="text-indigo-600 hover:text-indigo-900 font-medium">
                                Remove Item
                              </button>
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
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
