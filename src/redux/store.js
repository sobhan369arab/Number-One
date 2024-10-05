import { configureStore } from "@reduxjs/toolkit";
import { StepStatus, CartData, DarkMode, UserInfo } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
    UserInfo,
  },
});

export default store;
