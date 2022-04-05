import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "./Slider";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { clearCart, decreaseQuantity, getCartTotal, increaseQuantity, removeFromCart } from "../redux/cartSlice";

// Icons
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getCartTotal());
    console.log(localStorage.getItem("cartItems"));
  }, [cart, dispatch]);

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div className="container mx-auto md:mt-12">
      <div className="pb-14 text-center border-b-[1px] border-gray-500 dark:border-gray-400">
        <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">Trinket of Luna's Story</p>
        <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Cart</h1>
      </div>
      {cart.cartItems.length === 0 ? (
        <>
          <div>
            <div className="flex flex-col">
              <MdOutlineRemoveShoppingCart className="h-[9rem] w-[9rem] md:h-[12rem] md:w-[12rem] mt-12 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="mt-6 font-playfair text-3xl md:text-4xl text-center text-gray-900 dark:text-zinc-100">Oops! Your cart is empty!</h1>
              <p className="mt-4 font-lato text-gray-500 text-sm md:text-2xl text-center dark:text-gray-400">
                Looks like you have no items in your shopping bag.
                <br />
                Let's go buy something!
              </p>
              <Link to="/shop" className="btn--primary mt-6 mx-auto md:w-1/4 2xl:mt-12 2xl:w-1/5">
                Shop Now
              </Link>
              <a href="#slider" className="mt-4 font-lato text-gray-500 text-xs lg:text-sm text-center dark:text-gray-400">
                or browse our favorites
              </a>
            </div>
            <div className="mt-28" id="slider">
              <Slider />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-11/12 xl:w-10/12 2xl:w-2/3 mx-auto mt-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-500">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Unit Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium font-playfair text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Total Price
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-500">
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
                                  <div className="text-sm font-medium text-gray-900 dark:text-zinc-100">{productName}</div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">{productCategory}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500 dark:text-gray-400">{productPrice}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex">
                                <div>
                                  <button onClick={() => handleDecreaseQuantity(product)}>{productQuantity > 1 ? <FiMinus className="text-gray-500 dark:text-gray-400" /> : <FiTrash2 className="text-gray-500 dark:text-gray-400" />}</button>
                                </div>
                                <div className="text-sm text-gray-900 mx-4 dark:text-zinc-100">{productQuantity}</div>
                                <div>
                                  <button onClick={() => handleIncreaseQuantity(product)}>
                                    <FiPlus className="text-gray-500 dark:text-gray-400" />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{productPrice * productQuantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <button onClick={() => handleRemoveFromCart(product)} className="text-sky-300 transition duration-300 hover:text-sky-500 font-medium dark:text-sky-500 dark:hover:text-sky-600">
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
      {cart.cartItems.length === 0 ? null : (
        <div className="flex justify-end">
          <div className="flex flex-col bg-white py-8 pl-8 pr-12 rounded-lg shadow-lg mt-8 mr-4 md:mr-8 lg:mr-[6.7rem] 2xl:mr-64 dark:bg-gray-700">
            <div>
              <h1 className="font-lato text-lg text-gray-900 dark:text-zinc-100">Total Items: {cart.cartTotalQuantity} items.</h1>
              <h1 className="font-lato text-lg text-gray-900 dark:text-zinc-100">Total Price: &#8369;{cart.cartTotalAmount}</h1>
            </div>
            <div className="flex">
              <button onClick={() => handleClearCart()} className="btn--secondary py-2 px-6 mt-4 my-auto">
                Clear Cart
              </button>
              <Link to="/checkout" className="btn--primary py-2 px-6 mt-4 ml-4 my-auto">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
