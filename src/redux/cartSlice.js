import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      // Add react toastify here!
      // Item is not yet in cart.
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          productQuantity: 1,
        };
        state.cartItems.push(tempProduct);
      }

      // Storing cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const filteredCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

      state.cartItems = filteredCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (state.cartItems[itemIndex].productQuantity > 1) {
        state.cartItems[itemIndex].productQuantity -= 1;
      } else if (state.cartItems[itemIndex].productQuantity === 1) {
        const filteredCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        state.cartItems = filteredCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartItems[itemIndex].productQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    getCartTotal(state, action) {
      let { totalAmount, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { productPrice, productQuantity } = cartItem;
          const cartItemTotal = productPrice * productQuantity;

          cartTotal.totalAmount += cartItemTotal;
          cartTotal.quantity += productQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = totalAmount;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
