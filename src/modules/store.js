import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import blogsSlice from "../features/blogs/blogsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
