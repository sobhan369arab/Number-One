import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SortingCol: null,
  Query: undefined,
  NewsCategoryId: null,
  PageNumber: 1,
  RowsOfPage: 1,
};

const FilterBlog = createSlice({
  name: "filter-blog",
  initialState,
  reducers: {
    setSortingCol(state, action) {
      state.SortingCol = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setNewsCategoryId(state, action) {
      state.NewsCategoryId = action.payload;
    },
    setPageNumber(state, action) {
      state.PageNumber = action.payload;
    },
    setRowsOfPage(state, action) {
      state.RowsOfPage = action.payload;
    },
  },
});

export const {
  setSortingCol,
  setQuery,
  setNewsCategoryId,
  setPageNumber,
  setRowsOfPage,
} = FilterBlog.actions;

export default FilterBlog.reducer;
