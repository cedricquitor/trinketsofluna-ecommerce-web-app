import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  paymongo: [],
};

const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    storeCartItems(state, action) {
      state.cartItems.push(action.payload);
    },
    storePaymongoResponse(state, action) {
      state.paymongo.push(action.payload);
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
    clearPaymongoResponse(state) {
      state.paymongo = [];
    },
  },
});

export default tempSlice.reducer;
