import { configureStore } from "@reduxjs/toolkit";
import {
  StepStatus,
  CartData,
  DarkMode,
  UserInfo,
  FilterBlog,
  FilterCourses,
  MyCourses,
  MyFavorite,
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
    MyFavorite,
  },
});

export default store;
