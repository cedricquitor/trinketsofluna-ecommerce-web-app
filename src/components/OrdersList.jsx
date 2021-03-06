import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, "orders");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const getOrdersQuery = await getDocs(ordersCollectionRef);
      const getOrdersResult = [];
      getOrdersQuery.forEach((doc) => {
        const object = {
          id: doc.id,
          ...doc.data(),
        };
        getOrdersResult.push(object);
      });
      // TODO: Remove the clg when deploying to production.
      setOrders(getOrdersResult);
      console.log("Active Orders: ", getOrdersResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 container mx-auto">
      <div className="text-center pb-14 border-b-[1px] border-gray-500 dark:border-gray-400">
        <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">Choose the one that fits your style.</p>
        <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Active Orders</h1>
      </div>
      <div className="container mt-8"></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mx-auto">
        {orders.map((order) => {
          const { id, orderId, orderTime, orderTotalQuantity, orderTotalAmount, orderName } = order;
          const formattedDate = orderTime.toDate().toDateString();
          return (
            <div key={id} className="relative bg-white inline-block mx-auto mb-12 shadow-md dark:bg-gray-800">
              <div className="flex flex-col mx-4 my-4">
                <h1 className="mb-2 text-sm font-lato font-normal text-gray-500 dark:text-gray-400">{formattedDate}</h1>
                <h1 className="text-lg font-lato font-medium text-gray-900 dark:text-zinc-100">{orderId}</h1>
                <p className="mb-2 font-lato text-gray-900 text-lg dark:text-zinc-100">
                  This is an order for {orderTotalQuantity} items worth &#8369;{orderTotalAmount}.
                </p>
                <h1 className="mb-4 text-lg font-lato font-medium text-gray-900 dark:text-zinc-100">
                  Order for: <span className="ml-1 font-playfair text-sky-300 dark:text-sky-500">{orderName}</span>
                </h1>
                <div className="flex justify-between">
                  <Link to="remove" state={order} className="text-lg font-medium font-lato text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700 dark:text-gray-400">
                    Set as Inactive
                  </Link>
                  <Link to="view" state={order} className="text-lg font-medium font-lato text-sky-300 cursor-pointer transition duration-300 hover:text-sky-500 dark:text-sky-500">
                    View Order
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersList;
