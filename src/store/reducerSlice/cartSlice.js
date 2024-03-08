// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  price: "",
  allItem: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: {
      reducer: (state, action) => {
        const { price } = action.payload;
        console.log(price?.item?.id, "actionpayload");

        state.value += 1;
        state.price = price.price;
        if (price?.item) {
          state.allItem.push(price?.item);
          return;
        }
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
    decrement: {
      reducer: (state, action) => {
        const { price, id } = action.payload;
        console.log(action.payload, "action.payload");

        if (state.value !== 0) {
          state.value -= state.value === 1 ? 1 : "";
          state.price = price;
          return;
        }
        state.price = price.price;
        const filter = state.allItem?.filter((item) => item.id !== price.idx);
        state.allItem = filter;
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },

    deleteCartItem: {
      reducer: (state, action) => {
        const { id } = action.payload;

        const filter = state.allItem?.filter((item) => item.id !== id);
        state.allItem = filter;
        console.log(filter, "filter");
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
  },
});

export const { increment, decrement, deleteCartItem } = counterSlice.actions;

export default counterSlice.reducer;
