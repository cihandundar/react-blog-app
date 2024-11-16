import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  loading: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("fetchBlog", async () => {
  const response = await axios.get(
    "https://64542599c18adbbdfeb058b1.mockapi.io/blogs"
  );
  return response.data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default blogsSlice.reducer;
