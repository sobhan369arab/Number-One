import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortingCol: "course",
  Query: undefined
};

const MyFavorite = createSlice({
  name: "user-favorite",
  initialState,
  reducers: {
    setSortingCol(state, action) {
      state.sortingCol = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
  },
});

export const { setSortingCol, setQuery } = MyFavorite.actions;
export default MyFavorite.reducer;
