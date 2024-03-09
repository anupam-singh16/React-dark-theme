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
        console.log(action, "action.payload1");

        state.value += 1;
        state.price = price.price;
        // if (price?.item) {
        //   state.allItem.push(price?.item);
        // }
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },

    addAllItem: {
      reducer: (state, action) => {
        const { price } = action.payload;
        console.log(action, "addAllItem");

        if (price?.item) {
          state.allItem.push(price?.item);
        }
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
    removeAllCartItem: {
      reducer: (state, action) => {
        const { id } = action.payload;

        state.allItem = [];
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },

    decrement: {
      reducer: (state, action) => {
        const { price, id } = action.payload;
        console.log(price.addCart, "payload");

        const filter = state.allItem?.filter((item) => item.id !== price.idx);
        state.allItem = filter;

        if (state.value !== 0) {
          state.value -= state.value === 1 ? 1 : "";
          state.price = price;
          return;
        }
        state.price = price.price;
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
      },
      prepare: (price, id) => {
        return { payload: { price, id } };
      },
    },
  },
});

export const {
  increment,
  decrement,
  deleteCartItem,
  removeAllCartItem,
  addAllItem,
} = counterSlice.actions;

export default counterSlice.reducer;
