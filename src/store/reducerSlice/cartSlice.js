// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  price: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: {
      reducer: (state, action) => {
        const { price, id ,addCart} = action.payload;
        console.log(action.payload.price.addCart, "actionpayload");

        state.value += 1;
        state.price = price.price;
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
    decrement: {
      reducer: (state, action) => {
        const { price, id } = action.payload;
        console.log(action.payload, "action.payload");

        if (state.value !== 0 ) {
          state.value -= 1;
          state.price = price;
        }
        state.price = price.price;
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
