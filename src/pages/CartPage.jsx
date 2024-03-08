import React, { useState } from "react";
import Header from "../components/Header";
import UseFetch from "../customHooks/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/reducerSlice/cartSlice";
import { useNavigate } from "react-router";

const CartPage = ({ item }) => {
  const { product } = UseFetch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allItem = useSelector((state) => state.counter.allItem);
  const counter = useSelector((state) => state.counter.value);
  const select = useSelector((state) => state.counter);

  const [addCart, setAddCart] = useState(1);

  const [id, setId] = useState(null);

  const matchingItem = allItem.find((item) => parseFloat(item.id) === id);
  let price = matchingItem ? matchingItem.price * addCart : "";

  console.log(price, "price");

  //   const matchedData = product?.find((item) => item.id === parseInt(id));

  const addIncrement = (idx) => {
    setId(idx);
    setAddCart((prevAddCart) => prevAddCart + 1);

    dispatch(increment({ price, idx, item }));
  };
  const addToCartMinus = (idx) => {
    setId(idx);
    if (addCart !== 0) {
      setAddCart(addCart - 1);
    }
    dispatch(decrement({ price, idx }));
  };

  return (
    <body>
      <Header />
      <div className="h-full bg-gray-100 pt-5">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg  flex justify-start flex-col">
            {allItem?.map((item, i) => {
              return (
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={item?.images[1]}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item?.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => addToCartMinus(item.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={counter}
                        />
                        <span
                          onClick={() => addIncrement(item?.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      {price && id === item.id && (
                        <p className="text-sm">
                          Total = {addCart} X {item?.price} = {price}
                        </p>
                      )}
                      <div className="flex items-center  space-x-4">
                        <p className="text-sm">{item?.price}</p>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default CartPage;
