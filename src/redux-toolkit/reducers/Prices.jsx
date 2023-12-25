import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  ethPrice: 2050,
  usdtPrice: 1.007,
  bnbPrice: 249.18
};


const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    setBNBPrice: (state, action) => {
      return { ...state, bnbPrice: action.payload }
    },
    setETHPrice: (state, action) => {
      return { ...state, ethPrice: action.payload }
    },
    setUSDTPrice: (state, action) => {
      return { ...state, usdtPrice: action.payload }
    },
  },
});

const { reducer, actions } = pricesSlice;

export const {
  setBNBPrice,
  setETHPrice,
  setUSDTPrice
} = actions;
export default reducer;
