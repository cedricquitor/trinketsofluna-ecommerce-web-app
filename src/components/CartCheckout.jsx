import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

// Redux
import { getCartTotal } from "../redux/cartSlice";
import { storeCartItems, storePaymongoResponse, clearCartItems, clearPaymongoResponse } from "../redux/tempSlice";

const CartCheckout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const standardizedPrice = parseInt(cart.cartTotalAmount + "00");
  const { auth } = useAuthContext();
  const temp = useSelector((state) => state.temp);

  useEffect(() => {
    dispatch(getCartTotal());
    console.log(cart);
  }, [cart, dispatch]);

  const nameRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();

  const handleStoreCartItems = (items) => {
    dispatch(storeCartItems(items));
  };

  const handleStorePaymongoResponse = (response) => {
    dispatch(storePaymongoResponse(response));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const backToCart = () => {
    dispatch(clearCartItems());
    dispatch(clearPaymongoResponse());
    navigate("/cart", { replace: true });
  };

  const createSourceManual = async () => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic c2tfdGVzdF91NUoybmtrNlEzanZaTDNnSkVrQ2ZmRU06",
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: standardizedPrice,
            redirect: {
              success: "http://localhost:3000/checkout/success",
              failed: "http://localhost:3000/checkout/failed",
            },
            billing: { address: { line1: `${addressRef.current.value}`, city: `${cityRef.current.value}` }, name: `${nameRef.current.value}`, phone: `${phoneNumberRef.current.value}`, email: auth.currentUser.email },
            type: "gcash",
            currency: "PHP",
          },
        },
      }),
    };

    fetch("https://api.paymongo.com/v1/sources", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        handleStorePaymongoResponse(response);
        handleStoreCartItems(cart);
        window.location.assign(response.data.attributes.redirect.checkout_url);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <section className="container mx-auto md:mt-12">
        <div className="pb-14 text-center border-b-[1px] border-gray-500 dark:border-gray-400">
          <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">Trinket of Luna's Story</p>
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Checkout</h1>
        </div>
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
                              <div className="text-sm text-gray-900 mx-4 dark:text-zinc-100">{productQuantity}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{productPrice * productQuantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-14 flex justify-center">
        <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
          <div className="mx-8 md:mx-16 mb-4 md:mb-8">
            <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
              <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
            </h1>
            <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Place Order</h1>
          </div>
          <div className="relative px-10">
            <form onSubmit={handleSubmit} className="mx-4">
              <div>
                <input type="text" id="name" placeholder="Name" ref={nameRef} className="input__text peer" />
                <label htmlFor="name" className="input__label left-[4.7rem] -top-[0.6rem] peer-placeholder-shown:top-[0.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:-top-[0.6rem] peer-focus:left-[4.7rem]">
                  Name
                </label>
              </div>
              <div>
                <input type="text" id="phoneNumber" placeholder="Phone Number" ref={phoneNumberRef} className="input__text peer" />
                <label htmlFor="phoneNumber" className="input__label left-[4.7rem] top-[3.6rem] peer-placeholder-shown:top-[4.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[3.6rem] peer-focus:left-[4.7rem]">
                  Phone Number
                </label>
              </div>
              <div>
                <input type="text" id="address" placeholder="Address" ref={addressRef} className="input__text peer" />
                <label htmlFor="address" className="input__label left-[4.7rem] top-[7.6rem] peer-placeholder-shown:top-[8.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[7.6rem] peer-focus:left-[4.7rem]">
                  Address
                </label>
              </div>
              <div>
                <input type="text" id="city" placeholder="City" ref={cityRef} className="input__text peer" />
                <label htmlFor="city" className="input__label left-[4.7rem] top-[11.6rem] peer-placeholder-shown:top-[12.6rem] peer-placeholder-shown:left-[4.2rem] peer-focus:top-[11.6rem] peer-focus:left-[4.7rem]">
                  City
                </label>
              </div>
              <div className="mt-4">
                <div className="flex flex-col mb-2">
                  <p className="font-lato text-gray-900 text-lg -mb-1 dark:text-zinc-100">
                    This is an order for {cart.cartTotalQuantity} items worth &#8369;{cart.cartTotalAmount}.
                  </p>
                  <span className="font-lato text-xs text-gray-500 dark:text-gray-400">Please check the items displayed above before placing your order.</span>
                </div>
              </div>
              <div className="flex">
                <button onClick={() => backToCart()} className="btn--secondary w-44 mt-6 mr-4 mx-auto my-auto">
                  Back
                </button>
                <button onClick={() => createSourceManual()} className="btn--primary w-44 mt-6 ml-4 mx-auto">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCheckout;
