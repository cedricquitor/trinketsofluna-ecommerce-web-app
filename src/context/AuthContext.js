import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  /* TODO: Use this context as a reference.
  Set up state handlers for loading and error */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUserWithEmail = (name, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUserWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUserWithEmail = (email, passowrd) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, passowrd)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    registerUserWithEmail,
    signInUserWithGoogle,
    signInUserWithEmail,
    logoutUser,
    forgotPassword,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
