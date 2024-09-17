import { configureStore } from "@reduxjs/toolkit";
import { StepStatus, CartData } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
  },
});

export default store;
