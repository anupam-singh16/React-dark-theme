import React, { useState } from "react";
import Header from "../components/Header";
import UseFetch from "../customHooks/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteCartItem,
  increment,
  removeAllCartItem,
} from "../store/reducerSlice/cartSlice";
import { useNavigate } from "react-router";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allItem = useSelector((state) => state.counter.allItem);

  const [addCart, setAddCart] = useState(1);
  const item = [];
  const [id, setId] = useState(null);

  const matchingItem = allItem.find((item) => parseFloat(item.id) === id);
  let price = matchingItem ? matchingItem.price * addCart : "";

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
    dispatch(decrement({ price, idx, addCart }));
  };

  const deleteItem = (id) => {
    dispatch(deleteCartItem(price, id));
  };

  return (
    <body>
      <Header />
      <div className="h-full pt-2">
        {allItem?.length > 0 && (
          <h1 className="mb-4 text-center text-2xl font-bold">Cart Items</h1>
        )}
        {allItem?.length > 0 ? (
          <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg overflow-y-auto  w-[80%] h-[520px] flex justify-start flex-col">
              {allItem?.map((item, i) => {
                return (
                  <div className="justify-between mb-6   rounded-lg bg-white w-[80%] p-6 shadow-md sm:flex sm:justify-center">
                    <img
                      onClick={() => navigate(`/detailsPage/${item?.id}`)}
                      src={item?.image}
                      alt="product-image"
                      className="w-full cursor-pointer   h-[130px] rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div
                        className="mt-5 sm:mt-0 cursor-pointer"
                        onClick={() => navigate(`/detailsPage/${item?.id}`)}
                      >
                        <h2 className="text-lg font-bold text-gray-900">
                          {item?.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() => addToCartMinus(item?.id)}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={addCart}
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
                            onClick={() => deleteItem(item?.id)}
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
              <button
                onClick={() => dispatch(removeAllCartItem({ item }))}
                className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600"
              >
                Clear all item
              </button>
            </div>
          </div>
        ) : (
          <p className="mb-10 text-center text-2xl font-bold">
            Pease Add Your Product
          </p>
        )}
      </div>
    </body>
  );
};

export default CartPage;
