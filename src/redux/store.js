import { configureStore } from "@reduxjs/toolkit";
import { StepStatus, CartData, DarkMode, UserInfo, FilterBlog, FilterCourses } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
    UserInfo,
    FilterBlog,
    FilterCourses
  },
});

export default store;
