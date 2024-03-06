// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducerSlice/cartSlice"; // Assuming you have a separate file for your slice

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
