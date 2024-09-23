import { configureStore } from "@reduxjs/toolkit";
import { StepStatus, CartData, DarkMode } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
  },
});

export default store;
