import React, { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const registerUserWithEmail = (email, password) => {
    console.log("registerUserWithEmail");
  };

  const registerUserWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInUser = (email, passowrd) => {
    console.log("loginUser");
  };

  const forgotPassword = (email) => {
    console.log("forgotPassword");
  };

  const logoutUser = () => {};

  const contextValue = {};

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
