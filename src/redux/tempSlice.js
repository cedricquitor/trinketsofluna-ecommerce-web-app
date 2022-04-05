import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTemp: localStorage.getItem("cartTemp") ? JSON.parse(localStorage.getItem("cartTemp")) : [],
  paymongoTemp: localStorage.getItem("paymongoTemp") ? JSON.parse(localStorage.getItem("paymongoTemp")) : [],
};

const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    storeCartItems(state, action) {
      state.cartTemp.push(action.payload);
      localStorage.setItem("cartTemp", JSON.stringify(state.cartTemp));
    },
    storePaymongoResponse(state, action) {
      state.paymongoTemp.push(action.payload);
      localStorage.setItem("paymongoTemp", JSON.stringify(state.paymongoTemp));
    },
    clearCartItems(state) {
      state.cartTemp = [];
      localStorage.removeItem("cartTemp");
    },
    clearPaymongoResponse(state) {
      state.paymongoTemp = [];
      localStorage.removeItem("paymongoTemp");
    },
  },
});

export const { storeCartItems, storePaymongoResponse, clearCartItems, clearPaymongoResponse } = tempSlice.actions;

export default tempSlice.reducer;
