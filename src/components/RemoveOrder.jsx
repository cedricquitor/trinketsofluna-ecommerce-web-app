import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const RemoveOrder = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backToOrders = () => {
    navigate("/admin/orders", { replace: true });
  };

  useEffect(() => {
    if (location.state) {
      setOrder(location.state);
      console.log(location.state);
    }
  }, []);

  const moveToInactive = async () => {
    const orderDoc = doc(db, "orders", order.id);
    const toInactiveDoc = doc(db, "inactive-orders", order.id);
    await setDoc(toInactiveDoc, {
      orderAddress: order.orderAddress,
      orderCity: order.orderCity,
      orderEmail: order.orderEmail,
      orderId: order.orderId,
      orderItems: order.orderItems,
      orderName: order.orderName,
      orderPhoneNumber: order.orderPhoneNumber,
      orderTime: order.orderTime,
      orderTotalAmount: order.orderTotalAmount,
      orderTotalQuantity: order.orderTotalQuantity,
    })
      .then(() => {
        deleteDoc(orderDoc);
      })
      .then(() => {
        toast.success(`Order with ID of ${order.orderId} successfully moved to inactive!`);
        navigate("/admin/orders", { replace: true });
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
          <h1 className="mb-2 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">Move to Inactive</h1>
        </div>
        <div>
          <h1 className="mb-4 font-playfair font-medium text-gray-900 text-base text-center md:text-lg dark:text-zinc-100">Are you sure you want to move this order to inactive?</h1>
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="text-lg font-medium text-gray-900 dark:text-zinc-100">{location.state.orderId}</div>
          <div className="text-lg text-gray-500 dark:text-gray-400">from {location.state.orderName}</div>
        </div>
        <div className="flex">
          <button onClick={() => backToOrders()} className="w-44 btn--secondary mr-4 mx-auto my-auto">
            Back
          </button>
          <button onClick={() => moveToInactive()} className="w-44 btn--primary ml-4 mx-auto px-16">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default RemoveOrder;
