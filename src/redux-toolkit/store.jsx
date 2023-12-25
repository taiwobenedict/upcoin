import { configureStore } from "@reduxjs/toolkit";
import PricesReducer from "./reducers/Prices";
import StakingReucer from "./reducers/Staking";

const reducer = {
  price: PricesReducer,
  staking: StakingReucer
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
