import React, { createContext, useContext, useReducer } from "react";
import CartReducer from "../utils/CartReducer";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const initialState = { cartItems: [], itemCount: 0, total: 0 };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const contextValue = {
    ...state,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
