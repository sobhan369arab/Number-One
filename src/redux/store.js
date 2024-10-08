import { configureStore } from "@reduxjs/toolkit";
import {
  StepStatus,
  CartData,
  DarkMode,
  UserInfo,
  FilterBlog,
  MyCourses,
} from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
    UserInfo,
    FilterBlog,
    MyCourses,
  },
});

export default store;
