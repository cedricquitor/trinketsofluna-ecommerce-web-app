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
    },
    storePaymongoResponse(state, action) {
      state.paymongoTemp.push(action.payload);
    },
    clearCartItems(state) {
      state.cartTemp = [];
    },
    clearPaymongoResponse(state) {
      state.paymongoTemp = [];
    },
  },
});

export const { storeCartItems, storePaymongoResponse, clearCartItems, clearPaymongoResponse } = tempSlice.actions;

export default tempSlice.reducer;
