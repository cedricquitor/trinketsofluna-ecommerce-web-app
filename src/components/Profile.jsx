import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const Profile = () => {
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
              <p className="font-lato text-gray-500 text-base md:text-lg dark:text-gray-400">Personal Information</p>
              <p className="mb-4 font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{user.displayName}</p>
              <p className="font-lato text-gray-500 text-base md:text-lg dark:text-gray-400">Personal Information</p>
              <p className="font-lato text-gray-900 text-lg md:text-xl dark:text-zinc-100">{user.email}</p>
            </div>
            <button onClick={() => handleLogout()} className="btn--secondary my-auto mx-auto py-3">
              Logout
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
