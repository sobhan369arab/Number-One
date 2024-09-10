import { configureStore } from "@reduxjs/toolkit";
import { StepStatus } from "./slices";

const store = configureStore({
  reducer: {
    StepStatus,
  },
});

export default store;
