import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  /* TODO: Use this context as a reference.
  Set up state handlers for loading and error */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
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
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
        toast.success("Congratulations, your account has been successfully created!");
      });
  };

  const signInUserWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
        toast.success(`Sign-in confirmed. Welcome back!`);
      });
  };

  const signInUserWithEmail = (email, passowrd) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, passowrd)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
        toast.success(`Sign in confirmed. Welcome back!`);
      });
  };

  const logoutUser = () => {
    signOut(auth);
    toast.success(`Signed out. We hope to see you again soon!`);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        toast.success("Password Reset request sent. Click the link in that message to reset your password.");
      });
  };

  const contextValue = {
    auth,
    user,
    loading,
    registerUserWithEmail,
    signInUserWithGoogle,
    signInUserWithEmail,
    logoutUser,
    forgotPassword,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
