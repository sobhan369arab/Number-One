import { configureStore } from "@reduxjs/toolkit";
import { StepStatus, CartData, DarkMode, UserInfo, FilterBlog } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
    UserInfo,
    FilterBlog,
  },
});

export default store;
