import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: null,
  paymongo: null,
};

const tempSlice = createSlice({
  name: "temp",
  initialState,
});

export default tempSlice.reducer;
