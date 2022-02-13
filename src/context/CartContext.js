import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, CartReducer } from "../helpers/CartReducer";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const initialState = { cartItems: [], itemCount: 0, total: 0 };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (product) => dispatch({ type: ACTIONS.ADD_ITEM, payload: product });
  const increaseProductQuantity = (product) => dispatch({ type: ACTIONS.INCREASE_PRODUCT_QUANTITY, payload: product });

  const contextValue = {
    ...state,
    addProduct,
    increaseProductQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
