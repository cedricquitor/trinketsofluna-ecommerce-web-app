import React, { useState, useEffect } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setOrder(location.state);
      console.log(location.state);
    }
  }, []);

  const backToOrders = () => {
    navigate("/admin/orders", { replace: true });
  };

  return (
    <section className="mt-20 flex justify-center">
      <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
        <div className="mx-8 md:mx-16 mb-4 md:mb-8">
          <h1 className="text-center font-playfair text-gray-500 dark:text-zinc-100">
            <span className="text-sky-300 dark:text-sky-500">Trinkets</span> of Luna
          </h1>
          <p className="mb-4 font-lato text-gray-500 text-center text-base md:text-lg dark:text-gray-400">
            Order <span className="text-gray-900 dark:text-zinc-100">{location.state.orderId}</span>
          </p>
          <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Name</p>
          <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{location.state.orderName}</p>
          <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Address</p>
          <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">
            {location.state.orderAddress}, {location.state.orderCity}
          </p>
          <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Email</p>
          <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{location.state.orderEmail}</p>
          <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Contact Number</p>
          <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{location.state.orderPhoneNumber}</p>
          <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Order/s</p>
          <p className="mb-2 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">
            {location.state.orderTotalQuantity} items worth &#8369;{location.state.orderTotalAmount}.
          </p>
          <div className="mb-4 md:mb-10 ">
            {location.state.orderItems.map((order) => {
              const { productQuantity, productName, productPrice } = order;
              return (
                <div className="flex">
                  <p className="mr-2 font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">{productQuantity}x</p>
                  <p className="mr-1 font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">{productName}</p>
                  <p className="font-lato text-gray-500 text-xs md:text-sm dark:text-gray-400">worth {productPrice} per item.</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <button onClick={() => backToOrders()} className="w-10/12 btn--secondary my-auto mx-auto py-3 mb-6">
            Back to Orders
          </button>
          <Link to="/admin/orders/remove" state={order} className="w-10/12 btn--primary my-auto mx-auto py-3">
            Set as Inactive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Order;
