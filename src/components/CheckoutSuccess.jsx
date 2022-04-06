import React, { useEffect } from "react";
import { RiCloseCircleFill, RiCheckboxCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCartItems, clearPaymongoResponse } from "../redux/tempSlice";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const CheckoutSuccess = () => {
  const paymongoTemp = JSON.parse(localStorage.getItem("paymongoTemp"));
  const cartTemp = JSON.parse(localStorage.getItem("cartTemp"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ordersCollectionRef = collection(db, "orders");

  useEffect(() => {
    createPayment();
    addOrder();
  }, []);

  const testTemps = () => {
    console.log("PayMongo Temp:", paymongoTemp);
    console.log("Cart Temp:", cartTemp);
    console.log(cartTemp[0].cartTotalQuantity.toString());
    // addOrder();
  };

  const createPayment = async () => {
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
            amount: paymongoTemp[0].data.attributes.amount,
            source: { type: "source", id: `${paymongoTemp[0].data.id}` },
            currency: "PHP",
            description: `Trinkets of Luna ${paymongoTemp[0].data.id}`,
          },
        },
      }),
    };

    await fetch("https://api.paymongo.com/v1/payments", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const addOrder = async () => {
    await addDoc(ordersCollectionRef, {
      orderId: paymongoTemp[0].data.id,
      orderName: paymongoTemp[0].data.attributes.billing.name,
      orderPhoneNumber: paymongoTemp[0].data.attributes.billing.phone,
      orderEmail: paymongoTemp[0].data.attributes.billing.email,
      orderAddress: paymongoTemp[0].data.attributes.billing.address.line1,
      orderCity: paymongoTemp[0].data.attributes.billing.address.city,
      orderTime: Timestamp.now(),
      orderTotalAmount: cartTemp[0].cartTotalAmount + ".00",
      orderTotalQuantity: cartTemp[0].cartTotalQuantity.toString(),
      orderItems: cartTemp[0].cartItems,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const backToHome = () => {
    dispatch(clearCartItems());
    dispatch(clearPaymongoResponse());
    navigate("/", { replace: true });
  };

  return (
    <>
      {localStorage.getItem("paymongoTemp") && localStorage.getItem("cartTemp") ? (
        <section className="mt-20 flex justify-center">
          <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
            <div className="mx-8 md:mx-16 mb-4 md:mb-8">
              <RiCheckboxCircleFill className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="mb-8 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Order Successfully Placed</h1>
              <p className="mb-4 font-lato text-gray-500 text-lg md:text-xl dark:text-gray-400">
                Order with ID of <span className="text-gray-900 dark:text-zinc-100">{paymongoTemp[0].data.id}</span>
              </p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Name</p>
              <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{paymongoTemp[0].data.attributes.billing.name}</p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Address</p>
              <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">
                {paymongoTemp[0].data.attributes.billing.address.line1}, {paymongoTemp[0].data.attributes.billing.address.city}
              </p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Order/s</p>
              <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">
                {cartTemp[0].cartTotalQuantity} items worth &#8369;{cartTemp[0].cartTotalAmount}.
              </p>
              <div className="mb-4 md:mb-10 ">
                {cartTemp[0].cartItems.map((cartItem) => {
                  const { id, productCategory, productName, productPrice, productThumbnail, productQuantity } = cartItem;
                  return (
                    <div key={id} className="flex">
                      <p className="mr-2 font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">{productQuantity}x</p>
                      <p className="mr-1 font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">{productName}</p>
                      <p className="font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">worth {productPrice} per item.</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex">
              <button onClick={() => backToHome()} className="btn--secondary my-auto mx-auto py-3">
                Back to Home
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-36 flex justify-center">
          <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
            <div className="mx-8 md:mx-16 mb-4 md:mb-8">
              <RiCloseCircleFill className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
                <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
              </h1>
              <h1 className="mb-4 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">No Recent Transactions</h1>
              <p className="mb-2 font-lato text-gray-500 text-lg text-center md:text-xl dark:text-gray-400">No transactions found. Please return to your cart and proceed to checkout.</p>
            </div>
            <div className="flex">
              <Link to="/cart" className="btn--secondary my-auto mx-auto py-3">
                Back to Cart
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CheckoutSuccess;
