import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

function increase(state) {
  state.value += 1;
}

function decrease(state) {
  if (state.value === 1) return;
  state.value -= 1;
}

const stepStatus = createSlice({
  name: "step",
  initialState,
  reducers: {
    increase,
    decrease,
  },
});

export const { increase: increaseAction, decrease: decreaseAction } =
  stepStatus.actions;
export default stepStatus.reducer;
