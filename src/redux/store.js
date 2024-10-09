import { configureStore } from "@reduxjs/toolkit";
import {
  StepStatus,
  CartData,
  DarkMode,
  UserInfo,
  FilterBlog,
  FilterCourses,
  MyCourses,
} from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
    CartData,
    DarkMode,
    UserInfo,
    FilterBlog,
    FilterCourses,
    MyCourses,
  },
});

export default store;
