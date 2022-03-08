import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, loading, logoutUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="mt-20 flex justify-center">
          <div className="mx-auto my-auto py-8 w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 bg-white shadow-lg dark:bg-gray-700">
            <div className="mx-8 md:mx-16 mb-4 md:mb-8">
              <BiUserCircle className="h-32 w-32 mb-2 mx-auto text-sky-300 dark:text-sky-500" />
              <h1 className="mb-8 font-playfair font-medium text-gray-900 text-2xl md:text-3xl text-center dark:text-zinc-100">My Account</h1>
              <p className="mb-2 font-lato text-gray-500 text-lg md:text-xl dark:text-gray-400">Personal Information</p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Name</p>
              <p className="mb-4 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{user.displayName}</p>
              <p className="font-lato text-gray-500 text-sm md:text-base dark:text-gray-400">Email Address</p>
              <p className="font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{user.email}</p>
            </div>
            <div className="flex">
              <button onClick={() => handleLogout()} className="btn--secondary my-auto mx-auto py-3">
                Logout
              </button>
              {user.uid === "d64TMtbWfhNntekeJKF8U2RafcE3" ? <button className="btn--primary py-3 mx-auto my-auto">Admin Panel</button> : null}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
