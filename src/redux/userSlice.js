import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  dummy: [
    {
      id: "1",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
    {
      id: "2",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
    {
      id: "3",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
    {
      id: "4",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
    {
      id: "5",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
    {
      id: "6",
      name: "Post Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime enim qui eos quo dicta aperiam doloribus nesciunt sunt voluptas tempore, totam saepe fuga hic eaque quisquam. Commodi, sapiente adipisci.",
    },
  ],
  isLoading: false,
  error: "",
};
export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(
    `https://64542599c18adbbdfeb058b1.mockapi.io/new`
  );
  return response.data;
});

export const userSlice = createSlice({
  name: `users`,
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { id, name, desc } = action.payload;
      const existingUser = state.dummy.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.desc = desc;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUserIndex = state.dummy.findIndex((user) => user.id === id);
      if (existingUserIndex !== -1) {
        state.dummy.splice(existingUserIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});
export const { editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
